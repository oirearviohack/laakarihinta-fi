import HttpStatus from 'http-status-codes';
import wrap from '../../lib/server/wrap';
import English from '../../assets/locales/en-GB.json';
import Finnish from '../../assets/locales/fi-FI.json';


const locales = {
    'fi-FI': Finnish,
    'en-GB': English
};

class LocaleController {

    constructor(router) {
        this.router = router;
        this.registerRoutes.call(this);
    }

    registerRoutes() {
        this.router.get('/locales/:locale', wrap(LocaleController.getLocale));
    }

    static async getLocale(req, res) {
        const localeId = req.params.locale;
        if (Object.prototype.hasOwnProperty.call(locales, localeId)) {
            res.json(locales[localeId]);
        } else {
            res.status(HttpStatus.NOT_FOUND).json({ error: 'Could not find selected locale' });
        }
    }

}

export default LocaleController;
