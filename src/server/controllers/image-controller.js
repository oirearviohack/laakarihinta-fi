import multer from 'multer';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import wrap from '../../lib/server/wrap';

const VISUAL_RECOGNITION_ENTRYPOINT = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=a1389efd3bb646317a3e6b9646269e52c0e8325e&version=2016-05-20';
const upload = multer({storage: multer.memoryStorage()});

class ImageController {

    constructor(router) {
        this.router = router;
        this.registerRoutes.call(this);
    }

    registerRoutes() {
        this.router.get('/recognize-image-plz', wrap(ImageController.getImageResult));
        this.router.post('/recognize-image', upload.single('image'), wrap(ImageController.recognizeImage));
    }

    static recognizeImage(req, res) {
        const formData = new FormData();
        formData.append('image_files', req.file.buffer, {contentType: req.file.mimetype});
        return fetch(VISUAL_RECOGNITION_ENTRYPOINT, {method: 'POST', body: formData})
          .then(submitRes => submitRes.json())
          .then(json => res.json(json));
    }

    static async getImageResult(req, res) {
        const formData = new FormData();
        formData.append('image_files', fs.createReadStream(path.resolve(__dirname, '../../../src/eye-infection.jpg')));
        const response = await fetch(VISUAL_RECOGNITION_ENTRYPOINT, { method: 'POST', body: formData });
        const data = await response.json();
        return res.json(data);
    }

}

export default ImageController;
