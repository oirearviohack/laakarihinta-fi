// eslint-disable max-len
import bodyParser from 'body-parser';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import httpStatus from 'http-status-codes';
import wrap from '../../lib/server/wrap';

const VISUAL_RECOGNITION_ENTRYPOINT = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=a1389efd3bb646317a3e6b9646269e52c0e8325e&version=2016-05-20';
const PHR_DOCUMENT_REFERENCE_ENDPOINT = 'https://oda.medidemo.fi/phr/baseDstu3/DocumentReference';

class ImageController {

    constructor(router) {
        this.router = router;
        this.registerRoutes.call(this);
    }

    registerRoutes() {
        this.router.post('/recognize-image', bodyParser.raw({
            limit: '5mb',
            type: 'image/jpeg'
        }), wrap(ImageController.recognizeImage));
    }

    static recognizeImage(req, res) {
        const mimetype = 'image/jpeg';
        const base64Data = req.body.toString().replace(/^data:image\/jpeg;base64,/, "");
        const image = sharp(new Buffer(base64Data, 'base64'));
        return image
            .metadata()
            .then(metadata => ImageController.resizeBuffer(image, metadata))
            .then((imageBuffer) => {
                const formData = new FormData();
                formData.append('image_files', imageBuffer, { contentType: mimetype });
                return fetch(VISUAL_RECOGNITION_ENTRYPOINT, { method: 'POST', body: formData })
                    .then(response => response.json())
                    .then(ImageController.enrichWithAnalysis)
                    .then(json => res.json(json));
            });
    }

    static detectEye(data) {
        const withClassName = className => element => element.class === className;
        const classes = data.images[0].classifiers[0].classes;
        const contactLens = classes.find(withClassName('contact lens')) || { score: 0.0 };
        const opticalDevice = classes.find(withClassName('optical device')) || { score: 0.0 };
        const canthus = classes.find(withClassName('canthus (human eye)')) || { score: 0.0 };
        return (contactLens.score > 0.5) || (opticalDevice.score > 0.5) || (canthus.score > 0.5);
    }

    static enrichWithAnalysis(result) {
        return Object.assign({}, { isEye: ImageController.detectEye(result) }, result);
    }

    static resizeBuffer(image, metadata) {
        const largerDimension = metadata.width > metadata.height ? { dimension: 'width', value: metadata.width } : { dimension: 'height', value: metadata.height };
        if (largerDimension.value > 2500) {
            console.log('Resizing image!');
            const resized = largerDimension.dimension === 'width' ? image.resize(2000, null) : image.resize(null, 2000);
            return resized.toBuffer();
        }
        return image.toBuffer();
    }

    static async uploadImageToPhr(req, res) {
        const phrRequestBody = {
            resourceType: 'DocumentReference',
            status: 'current',
            indexed: new Date(),
            type: {
                coding: [
                    {
                        system: 'http://loinc.ong',
                        code: '52040-3'
                    }
                ]
            },
            content: [
                {
                    attachment: {
                        data: new Buffer(fs.readFileSync(path.resolve(__dirname, '../../assets/images/eyes.jpg'))).toString('base64'),
                        contentType: 'image/jpeg'
                    }
                }
            ]
        };

        try {
            const response = await fetch(PHR_DOCUMENT_REFERENCE_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(phrRequestBody),
                headers: {
                    'content-type': 'application/fhir+json'
                }
            });
            return res.json(response);
        } catch (err) {
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    }
}

export default ImageController;
