import jsdom from 'jsdom';


['.css', '.scss', '.png', '.jpg'].forEach(ext => require.extensions[ext] = () => null);

const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

global.navigator = {
    userAgent: 'node.js'
};
