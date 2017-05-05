import wrap from '../../lib/server/wrap';


class ImageController {

    constructor(router) {
        this.router = router;
        this.registerRoutes.call(this);
    }

    registerRoutes() {
        this.router.get('/recognize-image-plz', wrap(ImageController.getImageResult));
    }

    static async getImageResult(req, res) {
        res.json({ hello: 'What up' });
    }

}

export default ImageController;
