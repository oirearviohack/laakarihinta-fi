import multer from 'multer';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import wrap from '../../lib/server/wrap';

const VISUAL_RECOGNITION_ENTRYPOINT = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=a1389efd3bb646317a3e6b9646269e52c0e8325e&version=2016-05-20';
const upload = multer({storage: multer.memoryStorage()});

class ImageController {

    constructor(router) {
        this.router = router;
        this.registerRoutes.call(this);
    }

    registerRoutes() {
        this.router.post('/recognize-image', upload.single('image'), wrap(ImageController.recognizeImage));
    }


    static resizeBuffer(image, metadata) {
        const largerDimension = metadata.width > metadata.height ? {dimension: 'width', value: metadata.width} : {dimension: 'height', value: metadata.height};
        if(largerDimension.value > 2500) {
            console.log('Resizing image!');
            const resized = largerDimension.dimension === 'width' ? image.resize(2000, null) : image.resize(null, 2000);
            return resized.toBuffer();
        } else {
          return image.toBuffer();
        }
    }

    static recognizeImage(req, res) {
        const image = sharp(req.file.buffer);
        return image
          .metadata()
          .then(metadata => ImageController.resizeBuffer(image, metadata))
          .then(imageBuffer => {
              const formData = new FormData();
              formData.append('image_files', imageBuffer, {contentType: req.file.mimetype});
              return fetch(VISUAL_RECOGNITION_ENTRYPOINT, {method: 'POST', body: formData})
                .then(response => response.json())
                .then(json => res.json(json));
          });
    }
}

export default ImageController;
