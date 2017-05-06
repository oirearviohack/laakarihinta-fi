/* eslint-disable max-len */
import bodyParser from 'body-parser';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
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

    static async recognizeImage(req, res) {
        try {
            const imageBuffer = await ImageController.prepareImage(req.body);
            const data = await ImageController.analyzeImageWithWatson(imageBuffer);
            const enrichedData = ImageController.enrichWithAnalysis(data);

            if (enrichedData.isEye) {
                await ImageController.uploadImageToPhr(imageBuffer);
            }

            return res.json(enrichedData);
        } catch (err) {
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
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

    static async prepareImage(img) {
        const base64Data = img.toString().replace(/^data:image\/jpeg;base64,/, '');
        const image = sharp(new Buffer(base64Data, 'base64'));
        const imageMetaData = await image.metadata();
        return ImageController.resizeBuffer(image, imageMetaData);
    }

    static resizeBuffer(image, { width, height }) {
        const largerDimension = width > height ? { dimension: 'width', value: width } : { dimension: 'height', value: height };
        if (largerDimension.value > 2500) {
            const resized = largerDimension.dimension === 'width' ? image.resize(2000, null) : image.resize(null, 2000);
            return resized.toBuffer();
        }
        return image.toBuffer();
    }

    static async analyzeImageWithWatson(imageBuffer) {
        const mimetype = 'image/jpeg';
        const formData = new FormData();
        formData.append('image_files', imageBuffer, { contentType: mimetype });

        const response = await fetch(VISUAL_RECOGNITION_ENTRYPOINT, { method: 'POST', body: formData });
        const data = await response.json();
        return ImageController.enrichWithAnalysis(data);
    }

    static async uploadImageToPhr(imageBuffer) {
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
                        data: imageBuffer.toString('base64'),
                        contentType: 'image/jpeg'
                    }
                }
            ]
        };

        return fetch(PHR_DOCUMENT_REFERENCE_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(phrRequestBody),
            headers: {
                'content-type': 'application/fhir+json'
            }
        });
    }
}

export default ImageController;
