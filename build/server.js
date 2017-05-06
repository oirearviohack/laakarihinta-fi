module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
    host: process.env.NODE_HOST || 'localhost',
    port: process.env.PORT || '8080'
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (fn) {
    if (fn.length <= 3) {
        return function (req, res, next) {
            return fn(req, res, next).catch(next);
        };
    }

    return function (err, req, res, next) {
        return fn(err, req, res, next).catch(next);
    };
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layouts_main__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_image_upload_image_upload__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_symptom_selection_symptom_selection__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_not_found_not_found__ = __webpack_require__(48);





var routes = [{
    component: __WEBPACK_IMPORTED_MODULE_0__components_layouts_main__["a" /* default */],
    routes: [{
        path: '/',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_symptom_selection_symptom_selection__["a" /* default */],
        exact: true
    }, {
        path: '/oirevaihtoehdot',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_symptom_selection_symptom_selection__["a" /* default */]
    }, {
        path: '/kuva-analyysi',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_image_upload_image_upload__["a" /* default */]
    }, {
        path: '*',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_not_found_not_found__["a" /* default */]
    }]
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("webpack-isomorphic-tools/plugin");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helmet__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hpp__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hpp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hpp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serve_favicon__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_forcedomain__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_forcedomain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_forcedomain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_api_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_server_health_check__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_server_enable_development_settings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_server_render_handler__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib_server_wrap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_server_error_handlers__ = __webpack_require__(39);















var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_9__lib_server_health_check__["a" /* default */]);
app.use(__WEBPACK_IMPORTED_MODULE_6_forcedomain___default()({ hostname: 'image-symtop.herokuapp.com', protocol: 'https' }));
app.use(__WEBPACK_IMPORTED_MODULE_2_helmet___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_hpp___default()());
app.use(__WEBPACK_IMPORTED_MODULE_1_compression___default()());

if (__DEV__) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__lib_server_enable_development_settings__["a" /* default */])(app);

app.use(__WEBPACK_IMPORTED_MODULE_4_serve_favicon___default()(__WEBPACK_IMPORTED_MODULE_5_path___default.a.join(process.cwd(), './build/public/favicon.ico')));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_5_path___default.a.join(process.cwd(), './build/public'), { maxAge: '7d' }));
app.use('/api', __WEBPACK_IMPORTED_MODULE_8__server_api_router__["a" /* default */]);
app.use(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__lib_server_wrap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_11__lib_server_render_handler__["a" /* default */]));
app.use(__WEBPACK_IMPORTED_MODULE_13__lib_server_error_handlers__["a" /* logErrors */]);
app.use(__WEBPACK_IMPORTED_MODULE_13__lib_server_error_handlers__["b" /* clientErrorHandler */]);
app.use(__WEBPACK_IMPORTED_MODULE_13__lib_server_error_handlers__["c" /* catchAllErrorHandler */]);

app.listen(__WEBPACK_IMPORTED_MODULE_7__config__["port"], function (error) {
    if (error) throw error;
    // if (__DEV__) require('../tools/openBrowser').default(port);
    console.log('Express server listening on port', __WEBPACK_IMPORTED_MODULE_7__config__["port"]);
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* eslint-disable max-len */



var AppHead = function AppHead() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
        htmlAttributes: { lang: 'en' },
        title: 'Wwwonderful',
        titleTemplate: 'Wwwonderful',
        defaultTitle: 'Wwwonderful',
        link: [{ rel: 'stylesheet', type: 'text/css', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }, { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500' }],
        meta: [{ name: 'description', content: 'Coronaria Customer Targeting Tool' }, { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' }]
    });
};

/* harmony default export */ __webpack_exports__["a"] = (AppHead);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_head__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_styles_main_scss__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_styles_main_scss__);







var App = function App() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__app_head__["a" /* default */], null),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */])
    );
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(App));

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Menu__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Menu__);







var s = {
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
};

var Header = function Header() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar___default.a,
        { className: s.header },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar___default.a,
            { style: s.toolBar },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default.a,
                { type: 'title' },
                'Hoitoarvio kuvan avulla'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default.a,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Menu___default.a, null)
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_keys__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serialize_javascript__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_serialize_javascript__);




/* eslint-disable react/no-danger, max-len */






var propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
    htmlContent: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired,
    materialCSS: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired
};

var Html = function Html(_ref) {
    var store = _ref.store,
        htmlContent = _ref.htmlContent,
        materialCSS = _ref.materialCSS;

    var head = __WEBPACK_IMPORTED_MODULE_6_react_helmet___default.a.renderStatic();
    var attrs = head.htmlAttributes.toComponent();

    var _ref2 = attrs || {},
        lang = _ref2.lang,
        rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ['lang']);

    var assets = webpackIsomorphicTools.assets(); // eslint-disable-line no-undef

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'html',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, { lang: lang || 'en' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'head',
            null,
            head.title.toComponent(),
            head.base.toComponent(),
            head.meta.toComponent(),
            head.link.toComponent(),
            __WEBPACK_IMPORTED_MODULE_3_lodash_keys___default()(assets.styles).map(function (style) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('link', {
                    key: __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId___default()(),
                    href: assets.styles[style],
                    media: 'screen, projection',
                    rel: 'stylesheet',
                    type: 'text/css'
                });
            })
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'body',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: htmlContent || '' } }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: store && 'window.__INITIAL_STATE__=' + __WEBPACK_IMPORTED_MODULE_7_serialize_javascript___default()(store.getState()) + ';' } }),
            __WEBPACK_IMPORTED_MODULE_3_lodash_keys___default()(assets.javascript).reverse().map(function (script) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('script', { key: __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId___default()(), src: assets.javascript[script] });
            }),
            head.script.toComponent(),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'style',
                { id: 'jss-server-side' },
                materialCSS
            )
        )
    );
};

Html.defaultProps = {
    htmlContent: '',
    materialCSS: ''
};

Html.propTypes = propTypes;

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header__ = __webpack_require__(33);










var Main = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Main, _Component);

    function Main() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Main);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Main.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Main)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var jssStyles = document.getElementById('jss-server-side');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'o-main-layout' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__header_header__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    { className: 'o-main-layout__content' },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'div',
                        { className: 'container u-margin-sm-top' },
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_router_config__["renderRoutes"])(this.props.route.routes)
                    )
                )
            );
        }
    }]);

    return Main;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Main.propTypes = {
    route: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
        routes: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array
    }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_shared_isomorphic_fetch_wrapper__ = __webpack_require__(42);




var _this = this;



var GET_LOCALE = 'GET_LOCALE';
var GET_LOCALE_ERROR = 'GET_LOCALE_ERROR';
var GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS';

var getLocaleStart = function getLocaleStart() {
    return { type: GET_LOCALE };
};
var getLocaleError = function getLocaleError() {
    return { type: GET_LOCALE_ERROR };
};
var getLocaleSuccess = function getLocaleSuccess(strings, locale) {
    return { type: GET_LOCALE_SUCCESS, strings: strings, locale: locale };
};

var stringsNeedToBeFetched = function stringsNeedToBeFetched(_ref) {
    var localeStore = _ref.localeStore;
    return __DEV__ || __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty___default()(localeStore.strings) || localeStore.fetchError;
};

var getLocale = function getLocale(locale) {
    return function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (locale) {
                                _context.next = 2;
                                break;
                            }

                            throw new Error('Need locale as a parameter');

                        case 2:
                            if (!stringsNeedToBeFetched(getState())) {
                                _context.next = 18;
                                break;
                            }

                            _context.prev = 3;

                            dispatch(getLocaleStart());
                            _context.t0 = dispatch;
                            _context.t1 = getLocaleSuccess;
                            _context.next = 9;
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_shared_isomorphic_fetch_wrapper__["a" /* default */])('/api/locales/' + locale);

                        case 9:
                            _context.t2 = _context.sent;
                            _context.t3 = locale;
                            _context.t4 = (0, _context.t1)(_context.t2, _context.t3);
                            (0, _context.t0)(_context.t4);
                            _context.next = 18;
                            break;

                        case 15:
                            _context.prev = 15;
                            _context.t5 = _context['catch'](3);

                            dispatch(getLocaleError(_context.t5.message));

                        case 18:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[3, 15]]);
        }));

        return function (_x, _x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var localeActions = {
    getLocale: getLocale,
    actionTypes: {
        GET_LOCALE: GET_LOCALE,
        GET_LOCALE_ERROR: GET_LOCALE_ERROR,
        GET_LOCALE_SUCCESS: GET_LOCALE_SUCCESS
    }
};

/* harmony default export */ __webpack_exports__["a"] = (localeActions);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_initial_state__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locale_actions__ = __webpack_require__(36);




var localeReducer = function localeReducer() {
    var localeStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__redux_initial_state__["a" /* default */].localeStore;
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__locale_actions__["a" /* default */].actionTypes.GET_LOCALE:
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, localeStore, {
                isFetching: true,
                fetchError: false
            });
        case __WEBPACK_IMPORTED_MODULE_2__locale_actions__["a" /* default */].actionTypes.GET_LOCALE_ERROR:
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, localeStore, {
                isFetching: false,
                fetchError: true
            });
        case __WEBPACK_IMPORTED_MODULE_2__locale_actions__["a" /* default */].actionTypes.GET_LOCALE_SUCCESS:
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, localeStore, {
                isFetching: false,
                lastUpdated: new Date().getTime(),
                locale: action.locale,
                strings: action.strings
            });
        default:
            return localeStore;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (localeReducer);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var enableDevelopmentSettings = function enableDevelopmentSettings(app) {
    var webpack = __webpack_require__(28);
    var webpackDevMiddleware = __webpack_require__(97);
    var webpackHotMiddleware = __webpack_require__(98);
    var webpackConfig = __webpack_require__(57);
    var compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        noInfo: true,
        stats: 'minimal'
    }));
    app.use(webpackHotMiddleware(compiler));
};

/* harmony default export */ __webpack_exports__["a"] = (enableDevelopmentSettings);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_status_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http_status_codes__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clientErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return catchAllErrorHandler; });


var logErrors = function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
};

var clientErrorHandler = function clientErrorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(__WEBPACK_IMPORTED_MODULE_0_http_status_codes___default.a.UNAUTHORIZED).json({ error: 'Unauthorized to access this endpoint!' });
    } else {
        next(err);
    }
};

var catchAllErrorHandler = function catchAllErrorHandler(err, req, res, next) {
    // eslint-disable-line no-unused-vars
    res.sendStatus(__WEBPACK_IMPORTED_MODULE_0_http_status_codes___default.a.INTERNAL_SERVER_ERROR); // TODO: Render something awesome when our server fails :D
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);



var healthCheckRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
healthCheckRouter.get('/health-check', function (req, res) {
  return res.sendStatus(__WEBPACK_IMPORTED_MODULE_1_http_status_codes___default.a.OK);
});

/* harmony default export */ __webpack_exports__["a"] = (healthCheckRouter);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluebird__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http_status_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redux_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_app_app__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_html_html__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib_shared_style_manager__ = __webpack_require__(43);



var _this = this;















var renderHtml = function renderHtml(store, htmlContent, materialCSS) {
    var html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__["renderToStaticMarkup"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_html_html__["a" /* default */], {
        store: store,
        htmlContent: htmlContent,
        materialCSS: materialCSS
    }));

    return '<!DOCTYPE html>' + html;
};

var renderHandler = function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
        var store, routePromises, _createStyleManager, styleManager, theme, routerContext, content, materialCSS;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (__DEV__) webpackIsomorphicTools.refresh();
                        store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__redux_store__["a" /* default */])();

                        if (!__DISABLE_SSR__) {
                            _context.next = 4;
                            break;
                        }

                        return _context.abrupt('return', res.send(renderHtml(store)));

                    case 4:
                        routePromises = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_router_config__["matchRoutes"])(__WEBPACK_IMPORTED_MODULE_11__routes__["a" /* default */], req.url).filter(function (_ref2) {
                            var route = _ref2.route;
                            return route.component && route.component.fetchData;
                        }).map(function (_ref3) {
                            var route = _ref3.route,
                                match = _ref3.match;
                            return route.component.fetchData(store, match.params);
                        });
                        _context.next = 7;
                        return __WEBPACK_IMPORTED_MODULE_3_bluebird___default.a.all(routePromises);

                    case 7:
                        _createStyleManager = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__lib_shared_style_manager__["a" /* default */])(), styleManager = _createStyleManager.styleManager, theme = _createStyleManager.theme;
                        routerContext = {};
                        content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider___default.a,
                            { styleManager: styleManager, theme: theme },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_8_react_redux__["Provider"],
                                { store: store },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["StaticRouter"],
                                    { location: req.url, context: routerContext },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_app_app__["a" /* default */], null)
                                )
                            )
                        ));

                        if (!routerContext.url) {
                            _context.next = 12;
                            break;
                        }

                        return _context.abrupt('return', res.redirect(__WEBPACK_IMPORTED_MODULE_4_http_status_codes___default.a.PERMANENTLY_MOVED, routerContext.url).setHeader('Location', routerContext.url));

                    case 12:
                        materialCSS = styleManager.sheetsToString();
                        return _context.abrupt('return', res.status(__WEBPACK_IMPORTED_MODULE_4_http_status_codes___default.a.OK).send(renderHtml(store, content, materialCSS)));

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function renderHandler(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/* harmony default export */ __webpack_exports__["a"] = (renderHandler);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config__);




var _this = this;





var pathWithQueryString = function pathWithQueryString(url, query) {
    return url + '?' + __WEBPACK_IMPORTED_MODULE_4_qs___default.a.stringify(query);
};
var defineRequestUrl = function defineRequestUrl(path) {
    return __SERVER__ ? 'http://' + __WEBPACK_IMPORTED_MODULE_5__config___default.a.host + ':' + __WEBPACK_IMPORTED_MODULE_5__config___default.a.port + path : path;
};
var responseIsJson = function responseIsJson(response) {
    var contentType = response.headers.get('content-type');
    return contentType ? contentType.includes('application/json') : false;
};

var isomorphicFetchWrapper = function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(path) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var modifiedPath, fetchOptions, url, response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        modifiedPath = options.query ? pathWithQueryString(path, options.query) : path;
                        fetchOptions = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, options);
                        url = defineRequestUrl(modifiedPath);
                        _context.next = 5;
                        return __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default()(url, fetchOptions);

                    case 5:
                        response = _context.sent;

                        if (!responseIsJson(response)) {
                            _context.next = 10;
                            break;
                        }

                        _context.next = 9;
                        return response.json();

                    case 9:
                        return _context.abrupt('return', _context.sent);

                    case 10:
                        return _context.abrupt('return', response);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function isomorphicFetchWrapper(_x) {
        return _ref.apply(this, arguments);
    };
}();

/* harmony default export */ __webpack_exports__["a"] = (isomorphicFetchWrapper);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_palette__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_palette___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles_palette__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_theme__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_colors__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_colors__);





var createStyleManager = function createStyleManager() {
    return __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider___default.a.createDefaultContext({
        theme: __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_theme___default()({
            palette: __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_palette___default()({
                primary: __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_colors__["cyan"],
                accent: __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_colors__["pink"],
                type: 'light',
                alternateTextColor: 'white'
            })
        })
    });
};

/* harmony default export */ __webpack_exports__["a"] = (createStyleManager);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_AddAPhoto__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_AddAPhoto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_AddAPhoto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);






var DropArea = function DropArea(props) {
    var dropzoneVisibility = __WEBPACK_IMPORTED_MODULE_4_classnames___default()({
        'c-dropzone': true,
        'u-hidden': !!props.imagePreviewUrl
    });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
            src: props.imagePreviewUrl,
            alt: '',
            role: 'presentation',
            className: 'u-img-responsive u-margin-sm-bottom'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_dropzone___default.a,
            { className: dropzoneVisibility, onDrop: props.onImageChange },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_AddAPhoto___default.a, { className: 'u-text-center' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Ole hyv\xE4 ja lataa tai ota kuva.'
                )
            )
        )
    );
};

DropArea.propTypes = {
    imagePreviewUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    onImageChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (DropArea);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_panel__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tutorial_panel__ = __webpack_require__(46);









var ImageUpload = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ImageUpload, _Component);

    function ImageUpload() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ImageUpload);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ImageUpload.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ImageUpload)).call(this));

        _this.state = {
            file: null,
            imagePreviewUrl: '',
            submitInProgress: false
        };

        _this.onImageChange = _this.onImageChange.bind(_this);
        _this.onSubmitClicked = _this.onSubmitClicked.bind(_this);
        _this.removeImage = _this.removeImage.bind(_this);
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ImageUpload, [{
        key: 'onImageChange',
        value: function onImageChange(files) {
            var _this2 = this;

            var reader = new FileReader();
            var file = files ? files[0] : null;
            reader.onloadend = function () {
                _this2.setState({ file: file, imagePreviewUrl: reader.result });
            };

            this.setState({ file: null, imagePreviewUrl: '' });
            reader.readAsDataURL(file);
        }
    }, {
        key: 'onSubmitClicked',
        value: function onSubmitClicked() {
            var _this3 = this;

            this.setState({ submitInProgress: true });
            fetch('/api/recognize-image', {
                method: 'POST',
                body: this.state.imagePreviewUrl,
                headers: { 'Content-Type': 'image/jpeg' }
            }).then(function (result) {
                return result.json();
            }).then(function () {
                _this3.setState({ submitInProgress: false });
            });
        }
    }, {
        key: 'removeImage',
        value: function removeImage() {
            this.setState({
                file: null,
                imagePreviewUrl: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    { className: 'col-s-6 u-margin-sm-bottom' },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__tutorial_panel__["a" /* default */], null)
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    { className: 'col-s-6' },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__upload_panel__["a" /* default */], {
                        imagePreviewUrl: this.state.imagePreviewUrl,
                        removeImage: this.removeImage,
                        onSubmitClicked: this.onSubmitClicked,
                        onImageChange: this.onImageChange,
                        submitInProgress: this.state.submitInProgress
                    })
                )
            );
        }
    }]);

    return ImageUpload;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ImageUpload);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Help__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Help__);





var s = {
    paperStyle: {
        padding: 16
    },
    paperTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    instructionImage: {
        width: '100%',
        height: 'auto'
    }
};

var TutorialPanel = function TutorialPanel() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper___default.a,
        { elevation: 4, style: s.paperStyle },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography___default.a,
            { type: 'title', className: 'u-margin-xs-bottom', style: s.paperTitle },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Help___default.a, null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'u-margin-xxs-left' },
                'Ohjeet'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ol',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                '1. Ota kuva noin 10cm et\xE4isyydelt\xE4 silmist\xE4si.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                src: __webpack_require__(59),
                alt: 'Ota kuva',
                style: s.instructionImage
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                '2. Klikkaa l\xE4het\xE4.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                '3. Tarkastele tuloksia.'
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (TutorialPanel);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Paper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_icons_FileUpload__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_icons_FileUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_icons_FileUpload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__droparea__ = __webpack_require__(44);









var s = {
    paperStyle: {
        padding: 16
    },
    paperTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    controlButton: {
        width: '100%'
    }
};

var UploadPanel = function UploadPanel(props) {
    var controlButtonContainerClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()({
        'u-hidden': !props.imagePreviewUrl || props.submitInProgress,
        'u-margin-sm-top': true,
        row: true
    });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_material_ui_Paper___default.a,
        { elevation: 4, style: s.paperStyle },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default.a,
            { type: 'title', className: 'u-margin-xs-bottom', style: s.paperTitle },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_icons_FileUpload___default.a, null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'u-margin-xxs-left' },
                'Lataa kuva'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__droparea__["a" /* default */], {
            imagePreviewUrl: props.imagePreviewUrl,
            onImageChange: props.onImageChange
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: controlButtonContainerClass },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-s-6 u-margin-xs-bottom' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a,
                    { onClick: props.removeImage, style: s.controlButton, contrast: true, raised: true },
                    'Uusi kuva'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-s-6' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a,
                    { onClick: props.onSubmitClicked, style: s.controlButton, primary: true, raised: true },
                    'L\xE4het\xE4'
                )
            )
        )
    );
};

UploadPanel.propTypes = {
    imagePreviewUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    onImageChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    removeImage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    onSubmitClicked: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    submitInProgress: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (UploadPanel);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var NotFoundPage = function NotFoundPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'Not Found'
    );
};

/* harmony default export */ __webpack_exports__["a"] = (NotFoundPage);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Button__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Typography__);
/* eslint-disable max-len */






var s = {
    paperStyle: {
        padding: 16
    },
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    responsiveSymptomImage: {
        width: '100%',
        height: 150
    },
    symptomButton: {
        width: '100%'
    },
    card: {
        margin: '0 0 24px 0'
    },
    firstCard: {
        marginTop: 0,
        marginBottom: 12
    }
};

var SymptomSelection = function SymptomSelection(props) {
    var goToPhotoUpload = function goToPhotoUpload() {
        props.history.push('/kuva-analyysi');
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-s-4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["Card"],
                { style: s.firstCard },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardMedia"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                        src: 'http://www.terve.fi/sites/default/files/media/terveyden_abc_uusi/laakarikirja/thinkstockphotos-470432764.jpg',
                        style: s.responsiveSymptomImage,
                        alt: 'wound',
                        role: 'presentation'
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardContent"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default.a,
                        { type: 'headline', component: 'h2' },
                        'Haava'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default.a,
                        { component: 'p' },
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel orci molestie diam efficitur mattis.'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardActions"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default.a,
                        { raised: true, primary: true, style: s.symptomButton },
                        'Aloita hoitoarvio'
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-s-4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["Card"],
                { style: s.card },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardMedia"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                        src: 'http://im.mtv.fi/image/3324602/landscape16_9/1024/576/a35798caeda534e4a609420462e51d14/jO/1828437.jpg',
                        style: s.responsiveSymptomImage,
                        alt: 'eyes',
                        role: 'presentation'
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardContent"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default.a,
                        { type: 'headline', component: 'h2' },
                        'Silm\xE4tulehdus'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default.a,
                        { component: 'p' },
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel orci molestie diam efficitur mattis.'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardActions"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default.a,
                        { raised: true, primary: true, style: s.symptomButton, onClick: goToPhotoUpload },
                        'Aloita hoitoarvio'
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-s-4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["Card"],
                { style: s.card },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardMedia"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                        src: 'http://www.terve.fi/sites/default/files/media/terveyden_abc_uusi/laakarikirja/thinkstockphotos-470432764.jpg',
                        style: s.responsiveSymptomImage,
                        alt: 'rash',
                        role: 'presentation'
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardContent"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default.a,
                        { type: 'headline', component: 'h2' },
                        'Ihottuma'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default.a,
                        { component: 'p' },
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel orci molestie diam efficitur mattis.'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardActions"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default.a,
                        { raised: true, primary: true, style: s.symptomButton },
                        'Aloita hoitoarvio'
                    )
                )
            )
        )
    );
};

SymptomSelection.propTypes = {
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
        push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (SymptomSelection);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var ajaxEntity = {
    isFetching: false,
    lastUpdated: null,
    fetchError: false
};

var initialState = {
    localeStore: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, ajaxEntity, {
        locale: null,
        strings: {}
    })
};

/* harmony default export */ __webpack_exports__["a"] = (initialState);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_locale_locale_reducer__ = __webpack_require__(37);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    localeStore: __WEBPACK_IMPORTED_MODULE_1__components_locale_locale_reducer__["a" /* default */]
}));

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_reducer__ = __webpack_require__(51);





var configureStore = function configureStore(initialState) {
    var middlewares = [__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a];

    var enhancers = [__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"].apply(undefined, middlewares), __DEV__ && (typeof window === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
        return f;
    }];

    var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__root_reducer__["a" /* default */], initialState, __WEBPACK_IMPORTED_MODULE_1_redux__["compose"].apply(undefined, enhancers));

    if (false) {
        module.hot.accept('./root-reducer', function () {
            try {
                var nextReducer = require('./root-reducer').default;
                store.replaceReducer(nextReducer);
            } catch (err) {
                console.error('Reducer hot reloading error ' + err);
            }
        });
    }

    return store;
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_status_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_image_controller__ = __webpack_require__(54);





var apiRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router(); // eslint-disable-line
apiRouter.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json({ type: 'application/json' }));

new __WEBPACK_IMPORTED_MODULE_3__controllers_image_controller__["a" /* default */](apiRouter);

apiRouter.get('*', function (req, res) {
  return res.sendStatus(__WEBPACK_IMPORTED_MODULE_2_http_status_codes___default.a.NOT_FOUND);
});
apiRouter.use(function (err, req, res, next) {
  return next(err);
});

/* harmony default export */ __webpack_exports__["a"] = (apiRouter);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_body_parser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_form_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_form_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_form_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sharp__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sharp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_sharp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_http_status_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_server_wrap__ = __webpack_require__(13);






// eslint-disable max-len









var VISUAL_RECOGNITION_ENTRYPOINT = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=a1389efd3bb646317a3e6b9646269e52c0e8325e&version=2016-05-20';
var PHR_DOCUMENT_REFERENCE_ENDPOINT = 'https://oda.medidemo.fi/phr/baseDstu3/DocumentReference';

var ImageController = function () {
    function ImageController(router) {
        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, ImageController);

        this.router = router;
        this.registerRoutes.call(this);
    }

    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(ImageController, [{
        key: 'registerRoutes',
        value: function registerRoutes() {
            this.router.post('/recognize-image', __WEBPACK_IMPORTED_MODULE_6_body_parser___default.a.raw({
                limit: '5mb',
                type: 'image/jpeg'
            }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__lib_server_wrap__["a" /* default */])(ImageController.recognizeImage));
        }
    }], [{
        key: 'recognizeImage',
        value: function recognizeImage(req, res) {
            var mimetype = 'image/jpeg';
            var base64Data = req.body.toString().replace(/^data:image\/jpeg;base64,/, '');
            var image = __WEBPACK_IMPORTED_MODULE_11_sharp___default()(new Buffer(base64Data, 'base64'));
            return image.metadata().then(function (metadata) {
                return ImageController.resizeBuffer(image, metadata);
            }).then(function (imageBuffer) {
                var formData = new __WEBPACK_IMPORTED_MODULE_8_form_data___default.a();
                formData.append('image_files', imageBuffer, { contentType: mimetype });
                return __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default()(VISUAL_RECOGNITION_ENTRYPOINT, { method: 'POST', body: formData }).then(function (response) {
                    return response.json();
                }).then(ImageController.enrichWithAnalysis).then(function (json) {
                    return res.json(json);
                });
            });
        }
    }, {
        key: 'detectEye',
        value: function detectEye(data) {
            var withClassName = function withClassName(className) {
                return function (element) {
                    return element.class === className;
                };
            };
            var classes = data.images[0].classifiers[0].classes;
            var contactLens = classes.find(withClassName('contact lens')) || { score: 0.0 };
            var opticalDevice = classes.find(withClassName('optical device')) || { score: 0.0 };
            var canthus = classes.find(withClassName('canthus (human eye)')) || { score: 0.0 };
            return contactLens.score > 0.5 || opticalDevice.score > 0.5 || canthus.score > 0.5;
        }
    }, {
        key: 'enrichWithAnalysis',
        value: function enrichWithAnalysis(result) {
            return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({}, { isEye: ImageController.detectEye(result) }, result);
        }
    }, {
        key: 'resizeBuffer',
        value: function resizeBuffer(image, metadata) {
            var largerDimension = metadata.width > metadata.height ? { dimension: 'width', value: metadata.width } : { dimension: 'height', value: metadata.height };
            if (largerDimension.value > 2500) {
                console.log('Resizing image!');
                var resized = largerDimension.dimension === 'width' ? image.resize(2000, null) : image.resize(null, 2000);
                return resized.toBuffer();
            }
            return image.toBuffer();
        }
    }, {
        key: 'uploadImageToPhr',
        value: function () {
            var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var phrRequestBody, response;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                phrRequestBody = {
                                    resourceType: 'DocumentReference',
                                    status: 'current',
                                    indexed: new Date(),
                                    type: {
                                        coding: [{
                                            system: 'http://loinc.ong',
                                            code: '52040-3'
                                        }]
                                    },
                                    content: [{
                                        attachment: {
                                            data: new Buffer(__WEBPACK_IMPORTED_MODULE_9_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_10_path___default.a.resolve(__dirname, '../../assets/images/eyes.jpg'))).toString('base64'),
                                            contentType: 'image/jpeg'
                                        }
                                    }]
                                };
                                _context.prev = 1;
                                _context.next = 4;
                                return __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default()(PHR_DOCUMENT_REFERENCE_ENDPOINT, {
                                    method: 'POST',
                                    body: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(phrRequestBody),
                                    headers: {
                                        'content-type': 'application/fhir+json'
                                    }
                                });

                            case 4:
                                response = _context.sent;
                                return _context.abrupt('return', res.json(response));

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](1);
                                return _context.abrupt('return', res.sendStatus(__WEBPACK_IMPORTED_MODULE_12_http_status_codes___default.a.BAD_REQUEST));

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 8]]);
            }));

            function uploadImageToPhr(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return uploadImageToPhr;
        }()
    }]);

    return ImageController;
}();

/* harmony default export */ __webpack_exports__["a"] = (ImageController);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src\\server\\controllers"))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var WebpackIsomorphicToolsPlugin = __webpack_require__(29);

module.exports = {
    // debug: true,
    // webpack_assets_file_path: 'webpack-assets.json',
    // webpack_stats_file_path: 'webpack-stats.json',
    assets: {
        images: {
            extensions: ['png', 'jpg', 'jpeg', 'gif'],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        fonts: {
            extensions: ['eot', 'ttf', 'woff', 'woff2'],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        svg: {
            extension: 'svg',
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        style_modules: {
            extensions: ['css', 'scss'],
            filter: function filter(module, regex, options, log) {
                if (options.development) {
                    return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
                }

                return regex.test(module.name);
            },
            path: function path(module, options, log) {
                if (options.development) {
                    return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
                }

                return module.name;
            },
            parser: function parser(module, options, log) {
                if (options.development) {
                    return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
                }

                return module.source;
            }
        }
    }
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// Disable CSSModules here
var CSSModules = false;

// Disable js lint error terminating here
var eslint = true;

// Disable style lint error terminating here
var stylelint = false;

// Register vendors here
var vendor = ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'react-hot-loader', 'react-router-dom', 'react-helmet', 'redbox-react', 'lodash'];

module.exports = {
    eslint: eslint,
    stylelint: stylelint,
    vendor: vendor,
    CSSModules: CSSModules
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
 // eslint-disable-line


var path = __webpack_require__(10);
var webpack = __webpack_require__(28);
var precss = __webpack_require__(87);
var autoprefixer = __webpack_require__(61);
var ExtractTextPlugin = __webpack_require__(67);
var StyleLintPlugin = __webpack_require__(96);

var _require = __webpack_require__(56),
    CSSModules = _require.CSSModules,
    eslint = _require.eslint,
    stylelint = _require.stylelint,
    vendor = _require.vendor;

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv !== 'production';

var WebpackIsomorphicToolsPlugin = __webpack_require__(29);
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(__webpack_require__(55)).development(isDev); // eslint-disable-line

var getPlugins = function getPlugins() {
    var plugins = [new ExtractTextPlugin({
        filename: '[name].[contenthash:8].css',
        allChunks: true,
        disable: isDev,
        ignoreOrder: CSSModules
    }), new webpack.LoaderOptionsPlugin({
        options: {
            eslint: { failOnError: eslint },
            context: '/',
            debug: isDev,
            minimize: !isDev
        }
    }), new StyleLintPlugin({ syntax: 'scss', failOnError: stylelint }), new webpack.EnvironmentPlugin({ NODE_ENV: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(nodeEnv) }), new webpack.DefinePlugin({
        __CLIENT__: true,
        __SERVER__: false,
        __DEV__: isDev
    }), new webpack.NoEmitOnErrorsPlugin(), webpackIsomorphicToolsPlugin];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), new webpack.IgnorePlugin(/webpack-stats\.json$/));
    } else {
        plugins.push(new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }), new webpack.HashedModuleIdsPlugin(), new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            mangle: { screw_ie8: true },
            compress: {
                screw_ie8: true,
                warnings: false,
                unused: true,
                dead_code: true
            },
            output: { screw_ie8: true, comments: false }
        }));
    }

    return plugins;
};

var getEntry = function getEntry() {
    var entry = ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', './src/client.js'];

    if (!isDev) {
        entry = {
            main: './src/client.js',
            vendor: vendor
        };
    }

    return entry;
};

module.exports = {
    name: 'client',
    target: 'web',
    cache: isDev,
    devtool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
    context: path.join(process.cwd()),
    entry: getEntry(),
    output: {
        path: path.join(process.cwd(), './build/public/assets'),
        publicPath: '/assets/',
        filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
        chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
        pathinfo: isDev
    },
    module: {
        rules: [{
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            options: {
                cacheDirectory: isDev,
                babelrc: false,
                presets: [['es2015', { modules: false }], 'react', 'stage-0'],
                plugins: ['transform-runtime', 'react-hot-loader/babel', 'lodash']
            }
        }, {
            test: /\.(scss|sass)$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style',
                use: [{
                    loader: 'css',
                    options: {
                        importLoaders: 2,
                        sourceMap: true,
                        modules: CSSModules,
                        context: path.join(process.cwd(), './src'),
                        localIdentName: isDev ? '[name]__[local].[hash:base64:5]' : '[hash:base64:5]',
                        minimize: !isDev
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function plugins() {
                            return [precss, autoprefixer({ browsers: ['last 10 versions'] })];
                        }
                    }
                }, {
                    loader: 'sass',
                    options: {
                        outputStyle: 'expanded',
                        sourceMap: true,
                        sourceMapContents: !isDev
                    }
                }]
            })
        }, {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url',
            options: { limit: 10000 }
        }, {
            test: webpackIsomorphicToolsPlugin.regular_expression('images'),
            use: [{
                loader: 'url',
                options: { limit: 10240 }
            }, {
                loader: 'image-webpack',
                options: { bypassOnDebug: true }
            }]
        }]
    },
    plugins: getPlugins(),
    resolveLoader: {
        modules: ['src', 'node_modules'],
        moduleExtensions: ['-loader']
    },
    resolve: {
        modules: ['src', 'node_modules'],
        descriptionFiles: ['package.json'],
        moduleExtensions: ['-loader'],
        extensions: ['.js', '.json']
    },
    node: {
        fs: 'empty',
        vm: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(60)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e3309ed8395192f9c35b82e6621ef003.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("forcedomain");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("lodash/keys");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("lodash/uniqueId");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/AddAPhoto");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FileUpload");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Help");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Menu");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/palette");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/theme");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("precss");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("stylelint-webpack-plugin");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ })
/******/ ]);