import wrap from '../../lib/server/wrap';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

const VISUAL_RECOGNITION_ENTRYPOINT = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=a1389efd3bb646317a3e6b9646269e52c0e8325e&version=2016-05-20';

class ImageController {

    constructor(router) {
        this.router = router;
        this.registerRoutes.call(this);
    }

    registerRoutes() {
        this.router.get('/recognize-image-plz', wrap(ImageController.getImageResult));
    }

    static getImageResult(req, res) {
        const formData = new FormData();
        formData.append('image_files', fs.createReadStream(path.resolve(__dirname, '../../../test_images/eye-infection.jpg')));
        return fetch(VISUAL_RECOGNITION_ENTRYPOINT, {method: 'POST', body: formData})
          .then(submitRes => submitRes.json())
          .then(json => res.json(json));
    }

}

export default ImageController;
