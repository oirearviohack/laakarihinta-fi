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
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);



var _this = this;



var CLEAR_STATE = 'CLEAR_STATE';
var RECOGNIZE_IMAGE = 'RECOGNIZE_IMAGE';
var RECOGNIZE_IMAGE_ERROR = 'RECOGNIZE_IMAGE_ERROR';
var RECOGNIZE_IMAGE_SUCCESS = 'RECOGNIZE_IMAGE_SUCCESS';

var recognizeImageStart = function recognizeImageStart() {
    return { type: RECOGNIZE_IMAGE };
};
var recognizeImageError = function recognizeImageError() {
    return { type: RECOGNIZE_IMAGE_ERROR };
};
var recognizeImageSuccess = function recognizeImageSuccess(results) {
    return { type: RECOGNIZE_IMAGE_SUCCESS, results: results };
};
var clearState = function clearState() {
    return { type: CLEAR_STATE };
};

var recognizeImage = function recognizeImage(imageData) {
    return function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
            var result;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            dispatch(recognizeImageStart());
                            _context.next = 4;
                            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()('/api/recognize-image', {
                                method: 'POST',
                                body: imageData,
                                headers: { 'Content-Type': 'image/jpeg' }
                            });

                        case 4:
                            result = _context.sent;

                            if (!result.ok) {
                                _context.next = 15;
                                break;
                            }

                            _context.t0 = dispatch;
                            _context.t1 = recognizeImageSuccess;
                            _context.next = 10;
                            return result.json();

                        case 10:
                            _context.t2 = _context.sent;
                            _context.t3 = (0, _context.t1)(_context.t2);
                            (0, _context.t0)(_context.t3);
                            _context.next = 16;
                            break;

                        case 15:
                            dispatch(recognizeImageError());

                        case 16:
                            _context.next = 21;
                            break;

                        case 18:
                            _context.prev = 18;
                            _context.t4 = _context['catch'](0);

                            dispatch(recognizeImageError());

                        case 21:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[0, 18]]);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

var imageUploadActions = {
    recognizeImage: recognizeImage,
    clearState: clearState,
    actionTypes: {
        RECOGNIZE_IMAGE: RECOGNIZE_IMAGE,
        RECOGNIZE_IMAGE_ERROR: RECOGNIZE_IMAGE_ERROR,
        RECOGNIZE_IMAGE_SUCCESS: RECOGNIZE_IMAGE_SUCCESS,
        CLEAR_STATE: CLEAR_STATE
    }
};

/* harmony default export */ __webpack_exports__["a"] = (imageUploadActions);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
    host: process.env.NODE_HOST || 'localhost',
    port: process.env.PORT || '8080'
};

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
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
    }),
    imageUploadStore: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, ajaxEntity, {
        isEye: false,
        phrLink: ''
    })
};

/* harmony default export */ __webpack_exports__["a"] = (initialState);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layouts_main__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_image_upload_image_upload__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_symptom_selection_symptom_selection__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_not_found_not_found__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_result_page_result_page__ = __webpack_require__(53);






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
        path: '/oirearvio',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_result_page_result_page__["a" /* default */]
    }, {
        path: '*',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_not_found_not_found__["a" /* default */]
    }]
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("webpack-isomorphic-tools/plugin");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helmet__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hpp__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hpp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hpp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serve_favicon__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_forcedomain__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_forcedomain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_forcedomain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_api_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_server_health_check__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_server_enable_development_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_server_render_handler__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib_server_wrap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_server_error_handlers__ = __webpack_require__(42);















var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_9__lib_server_health_check__["a" /* default */]);
app.use(__WEBPACK_IMPORTED_MODULE_6_forcedomain___default()({ hostname: 'visudg.herokuapp.com', protocol: 'https' }));
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* eslint-disable max-len */



var AppHead = function AppHead() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
        htmlAttributes: { lang: 'en' },
        title: 'VisuDg',
        titleTemplate: 'VisuDg',
        defaultTitle: 'VisuDg',
        link: [{ rel: 'stylesheet', type: 'text/css', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }, { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500' }],
        meta: [{ name: 'description', content: 'Visu Dg' }, { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' }]
    });
};

/* harmony default export */ __webpack_exports__["a"] = (AppHead);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_head__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_styles_main_scss__ = __webpack_require__(62);
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_AppBar__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Toolbar__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Replay__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Replay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Replay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_ExitToApp__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_ExitToApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_icons_ExitToApp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_image_upload_image_upload_actions__ = __webpack_require__(9);












var s = {
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
};

var Header = function Header(_ref) {
    var clearState = _ref.clearState;

    var onBackButtonClicked = function onBackButtonClicked() {
        return clearState();
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_AppBar___default.a,
        { className: s.header },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_Toolbar___default.a,
            { style: s.toolBar },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
                { type: 'title' },
                'VisuDg'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { role: 'navigation' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                    { to: '/oirevaihtoehdot', onClick: onBackButtonClicked },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a,
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Replay___default.a, null)
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'https://oda.medidemo.fi' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a,
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_icons_ExitToApp___default.a, null)
                    )
                )
            )
        )
    );
};

Header.propTypes = {
    clearState: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        clearState: function clearState() {
            dispatch(__WEBPACK_IMPORTED_MODULE_10__pages_image_upload_image_upload_actions__["a" /* default */].clearState());
        }
    };
};

var HeaderWithState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(null, mapDispatchToProps)(Header);

/* harmony default export */ __webpack_exports__["a"] = (HeaderWithState);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_keys__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serialize_javascript__ = __webpack_require__(102);
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header__ = __webpack_require__(36);










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
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__header_header__["a" /* default */], { history: this.props.history }),
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
    }).isRequired,
    history: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object // eslint-disable-line
};


/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_shared_isomorphic_fetch_wrapper__ = __webpack_require__(45);




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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_initial_state__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locale_actions__ = __webpack_require__(39);




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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var enableDevelopmentSettings = function enableDevelopmentSettings(app) {
    var webpack = __webpack_require__(31);
    var webpackDevMiddleware = __webpack_require__(106);
    var webpackHotMiddleware = __webpack_require__(107);
    var webpackConfig = __webpack_require__(61);
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_status_codes__ = __webpack_require__(6);
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);



var healthCheckRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
healthCheckRouter.get('/health-check', function (req, res) {
  return res.sendStatus(__WEBPACK_IMPORTED_MODULE_1_http_status_codes___default.a.OK);
});

/* harmony default export */ __webpack_exports__["a"] = (healthCheckRouter);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluebird__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http_status_codes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redux_store__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_app_app__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_html_html__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib_shared_style_manager__ = __webpack_require__(46);



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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(18);
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_palette__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_palette___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles_palette__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_theme__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_colors__ = __webpack_require__(94);
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_AddAPhoto__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_AddAPhoto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_AddAPhoto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(27);
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_initial_state__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_upload_actions__ = __webpack_require__(9);




var imageUploadReducer = function imageUploadReducer() {
    var imageUploadStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__redux_initial_state__["a" /* default */].imageUploadStore;
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__image_upload_actions__["a" /* default */].actionTypes.RECOGNIZE_IMAGE:
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, imageUploadStore, {
                isFetching: true,
                fetchError: false,
                isEye: false,
                phrLink: ''
            });
        case __WEBPACK_IMPORTED_MODULE_2__image_upload_actions__["a" /* default */].actionTypes.RECOGNIZE_IMAGE_ERROR:
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, imageUploadStore, {
                isFetching: false,
                fetchError: true
            });
        case __WEBPACK_IMPORTED_MODULE_2__image_upload_actions__["a" /* default */].actionTypes.RECOGNIZE_IMAGE_SUCCESS:
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, imageUploadStore, {
                isFetching: false,
                fetchError: false,
                isEye: action.results.isEye,
                phrLink: 'https://oda.medidemo.fi/phr/search?serverId=home&pretty=true&resource=DocumentReference',
                lastUpdated: new Date().getTime()
            });
        case __WEBPACK_IMPORTED_MODULE_2__image_upload_actions__["a" /* default */].actionTypes.CLEAR_STATE:
            return {
                isFetching: false,
                lastUpdated: null,
                fetchError: false,
                isEye: false,
                phrLink: ''
            };
        default:
            return imageUploadStore;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (imageUploadReducer);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Progress__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Paper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_Button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_icons_Error__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_icons_Error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_icons_Error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__upload_panel__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tutorial_panel__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__image_upload_actions__ = __webpack_require__(9);



















var s = {
    paperStyle: {
        padding: 16
    },
    statePanel: {
        display: 'flex',
        width: '100%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        padding: 16
    },
    errorIcon: {
        width: 30,
        height: 30
    }
};

var ImageUpload = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ImageUpload, _Component);

    function ImageUpload() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ImageUpload);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ImageUpload.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ImageUpload)).call(this));

        _this.state = {
            file: null,
            imagePreviewUrl: ''
        };

        _this.onImageChange = _this.onImageChange.bind(_this);
        _this.onSubmitClicked = _this.onSubmitClicked.bind(_this);
        _this.removeImage = _this.removeImage.bind(_this);
        _this.goToSuccessPage = _this.goToSuccessPage.bind(_this);
        _this.clearAll = _this.clearAll.bind(_this);
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ImageUpload, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var eyeDetected = this.props.imageUploadStore.lastUpdated && !this.props.imageUploadStore.fetchError && !this.props.imageUploadStore.isFetching && this.props.imageUploadStore.isEye;
            if (eyeDetected) {
                this.goToSuccessPage();
            }
        }
    }, {
        key: 'onImageChange',
        value: function onImageChange(files) {
            var _this2 = this;

            var reader = new FileReader();
            var file = files ? files[0] : null;
            reader.onloadend = function () {
                _this2.setState({ file: file, imagePreviewUrl: reader.result });
            };

            this.removeImage();
            reader.readAsDataURL(file);
        }
    }, {
        key: 'onSubmitClicked',
        value: function onSubmitClicked() {
            this.props.actions.recognizeImage(this.state.imagePreviewUrl);
        }
    }, {
        key: 'goToSuccessPage',
        value: function goToSuccessPage() {
            this.props.history.push('/oirearvio');
        }
    }, {
        key: 'removeImage',
        value: function removeImage() {
            this.setState({ file: null, imagePreviewUrl: '' });
        }
    }, {
        key: 'clearAll',
        value: function clearAll() {
            this.removeImage();
            this.props.actions.clearState();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$imageUploadSto = this.props.imageUploadStore,
                isFetching = _props$imageUploadSto.isFetching,
                fetchError = _props$imageUploadSto.fetchError,
                isEye = _props$imageUploadSto.isEye,
                lastUpdated = _props$imageUploadSto.lastUpdated;

            var imageUploadPanels = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: 'col-s-6 u-margin-sm-bottom' },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__tutorial_panel__["a" /* default */], null)
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: 'col-s-6' },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__upload_panel__["a" /* default */], {
                        imagePreviewUrl: this.state.imagePreviewUrl,
                        removeImage: this.removeImage,
                        onSubmitClicked: this.onSubmitClicked,
                        onImageChange: this.onImageChange,
                        isFetching: isFetching
                    })
                )
            );

            var loadingPanel = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11_material_ui_Paper___default.a,
                { elevation: 4, style: s.paperStyle },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default.a,
                    { type: 'title', className: 'u-margin-xs-bottom' },
                    'Hetkinen... Analysoin n\xE4ytett\xE4'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Progress__["LinearProgress"], null)
            );

            var eyeNotRecognizedPanel = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11_material_ui_Paper___default.a,
                { elevation: 4, style: s.statePanel },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default.a,
                        { type: 'display1', className: 'u-margin-xxs-bottom' },
                        'Valitettavasti en l\xF6yt\xE4nyt kuvasta silm\xE4\xE4.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_13_material_ui_Button___default.a,
                        { onClick: this.clearAll, primary: true, raised: true },
                        'Ota uusi kuva'
                    )
                )
            );

            var serverErrorPanel = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11_material_ui_Paper___default.a,
                { elevation: 4, style: s.statePanel },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default.a,
                        { type: 'display1', className: 'u-margin-xxs-bottom' },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_material_ui_icons_Error___default.a, { style: s.errorIcon }),
                        ' Nyt meni sormi suuhun'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default.a,
                        { type: 'body' },
                        'Kehnot koodarit kaatoivat minut j\xE4tt\xE4m\xE4ll\xE4 bugin koodiin :('
                    )
                )
            );

            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'section',
                null,
                isFetching && !isEye && !lastUpdated && loadingPanel,
                !isFetching && !isEye && !lastUpdated && !fetchError && imageUploadPanels,
                !isFetching && fetchError && serverErrorPanel,
                !isFetching && lastUpdated && !isEye && eyeNotRecognizedPanel
            );
        }
    }]);

    return ImageUpload;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

ImageUpload.propTypes = {
    actions: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.shape({
        recognizeImage: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func.isRequired,
        clearState: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func.isRequired
    }).isRequired,
    history: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.shape({
        push: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func.isRequired
    }).isRequired,
    imageUploadStore: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.shape().isRequired
};


var mapStateToProps = function mapStateToProps(state) {
    return {
        imageUploadStore: state.imageUploadStore
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_17__image_upload_actions__["a" /* default */]), dispatch)
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ImageUpload));

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Help__ = __webpack_require__(87);
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
                src: __webpack_require__(66),
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Paper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_icons_FileUpload__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_icons_FileUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_icons_FileUpload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__droparea__ = __webpack_require__(47);









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
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Done__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Done___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Done__);





var s = {
    resultPanel: {
        display: 'flex',
        width: '100%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        padding: 16
    },
    successTick: {
        color: 'green',
        width: 30,
        height: 30
    },
    link: {
        textDecoration: 'underline',
        color: 'blue'
    }
};

var ResultPage = function ResultPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper___default.a,
        { elevation: 4, style: s.resultPanel },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography___default.a,
                { type: 'display1', className: 'u-margin-xxs-bottom' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_Done___default.a, { style: s.successTick }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'u-margin-xxs-left' },
                    'Onnistunut kuva silm\xE4st\xE4!'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography___default.a,
                { type: 'body1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'u-margin-xxs-right' },
                    'Olemme l\xE4hett\xE4neet kuvan l\xE4\xE4k\xE4rin tarkasteltavaksi. Kuvaa p\xE4\xE4set katsomaan'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { style: s.link, href: 'https://oda.medidemo.fi/phr/search?serverId=home&pretty=true&resource=DocumentReference' },
                    't\xE4\xE4lt\xE4'
                ),
                '.'
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ResultPage);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__);

/* eslint-disable max-len, eslint-disable-line, react/no-array-index-key */







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
        flex: '1 1 350px',
        margin: '0 6px 24px 6px'
    },
    firstCard: {
        marginTop: 0,
        marginBottom: 12
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    cardPlaceholder: {
        height: 0,
        flex: '1 1 350px',
        margin: '0 6px 24px 6px'
    }
};

var symptoms = [{
    src: __webpack_require__(65),
    alt: 'wound',
    title: 'Haava'
}, {
    src: __webpack_require__(63),
    alt: 'eyes',
    title: 'Silmätulehdus'
}, {
    src: __webpack_require__(64),
    alt: 'rash',
    title: 'Ihottuma'
}];

var SymptomCard = function SymptomCard(_ref) {
    var src = _ref.src,
        alt = _ref.alt,
        title = _ref.title;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["Card"],
        { style: s.card },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardMedia"],
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: src, style: s.responsiveSymptomImage, alt: alt, role: 'presentation' })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardContent"],
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
                { type: 'headline', component: 'h2' },
                title
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
                { component: 'p' },
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel orci molestie diam efficitur mattis.'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardActions"],
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                { to: '/kuva-analyysi', style: s.symptomButton },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a,
                    { raised: true, primary: true, style: s.symptomButton },
                    'Aloita hoitoarvio'
                )
            )
        )
    );
};

SymptomCard.propTypes = {
    src: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    alt: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};

var SymptomSelection = function SymptomSelection() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'section',
        { style: s.cardsContainer },
        symptoms.map(function (symptom, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SymptomCard, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ key: index }, symptom));
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: s.cardPlaceholder }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: s.cardPlaceholder }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: s.cardPlaceholder }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: s.cardPlaceholder }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: s.cardPlaceholder }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: s.cardPlaceholder }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: s.cardPlaceholder }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: s.cardPlaceholder })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (SymptomSelection);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_locale_locale_reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_image_upload_image_upload_reducer__ = __webpack_require__(48);




/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    localeStore: __WEBPACK_IMPORTED_MODULE_1__components_locale_locale_reducer__["a" /* default */],
    imageUploadStore: __WEBPACK_IMPORTED_MODULE_2__pages_image_upload_image_upload_reducer__["a" /* default */]
}));

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_reducer__ = __webpack_require__(55);





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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_status_codes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_image_controller__ = __webpack_require__(58);





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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_body_parser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_form_data__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_form_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_form_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sharp__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sharp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_sharp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_http_status_codes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_server_wrap__ = __webpack_require__(19);






/* eslint-disable max-len */







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
            }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__lib_server_wrap__["a" /* default */])(ImageController.recognizeImage));
        }
    }], [{
        key: 'recognizeImage',
        value: function () {
            var _ref = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var imageBuffer, data, enrichedData;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return ImageController.prepareImage(req.body);

                            case 3:
                                imageBuffer = _context.sent;
                                _context.next = 6;
                                return ImageController.analyzeImageWithWatson(imageBuffer);

                            case 6:
                                data = _context.sent;
                                enrichedData = ImageController.enrichWithAnalysis(data);

                                if (!enrichedData.isEye) {
                                    _context.next = 11;
                                    break;
                                }

                                _context.next = 11;
                                return ImageController.uploadImageToPhr(imageBuffer);

                            case 11:
                                return _context.abrupt('return', res.json(enrichedData));

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt('return', res.sendStatus(__WEBPACK_IMPORTED_MODULE_10_http_status_codes___default.a.BAD_REQUEST));

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 14]]);
            }));

            function recognizeImage(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return recognizeImage;
        }()
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
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, { isEye: ImageController.detectEye(result) }, result);
        }
    }, {
        key: 'prepareImage',
        value: function () {
            var _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee2(img) {
                var base64Data, image, imageMetaData;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                base64Data = img.toString().replace(/^data:image\/jpeg;base64,/, '');
                                image = __WEBPACK_IMPORTED_MODULE_9_sharp___default()(new Buffer(base64Data, 'base64'));
                                _context2.next = 4;
                                return image.metadata();

                            case 4:
                                imageMetaData = _context2.sent;
                                return _context2.abrupt('return', ImageController.resizeBuffer(image, imageMetaData));

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function prepareImage(_x3) {
                return _ref2.apply(this, arguments);
            }

            return prepareImage;
        }()
    }, {
        key: 'resizeBuffer',
        value: function resizeBuffer(image, _ref3) {
            var width = _ref3.width,
                height = _ref3.height;

            var largerDimension = width > height ? { dimension: 'width', value: width } : { dimension: 'height', value: height };
            if (largerDimension.value > 2500) {
                var resized = largerDimension.dimension === 'width' ? image.resize(2000, null) : image.resize(null, 2000);
                return resized.toBuffer();
            }
            return image.toBuffer();
        }
    }, {
        key: 'analyzeImageWithWatson',
        value: function () {
            var _ref4 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee3(imageBuffer) {
                var mimetype, formData, response, data;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                mimetype = 'image/jpeg';
                                formData = new __WEBPACK_IMPORTED_MODULE_8_form_data___default.a();

                                formData.append('image_files', imageBuffer, { contentType: mimetype });

                                _context3.next = 5;
                                return __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default()(VISUAL_RECOGNITION_ENTRYPOINT, { method: 'POST', body: formData });

                            case 5:
                                response = _context3.sent;
                                _context3.next = 8;
                                return response.json();

                            case 8:
                                data = _context3.sent;
                                return _context3.abrupt('return', ImageController.enrichWithAnalysis(data));

                            case 10:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function analyzeImageWithWatson(_x4) {
                return _ref4.apply(this, arguments);
            }

            return analyzeImageWithWatson;
        }()
    }, {
        key: 'uploadImageToPhr',
        value: function () {
            var _ref5 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee4(imageBuffer) {
                var phrRequestBody;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
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
                                            data: imageBuffer.toString('base64'),
                                            contentType: 'image/jpeg'
                                        }
                                    }]
                                };
                                return _context4.abrupt('return', __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default()(PHR_DOCUMENT_REFERENCE_ENDPOINT, {
                                    method: 'POST',
                                    body: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(phrRequestBody),
                                    headers: {
                                        'content-type': 'application/fhir+json'
                                    }
                                }));

                            case 2:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function uploadImageToPhr(_x5) {
                return _ref5.apply(this, arguments);
            }

            return uploadImageToPhr;
        }()
    }]);

    return ImageController;
}();

/* harmony default export */ __webpack_exports__["a"] = (ImageController);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var WebpackIsomorphicToolsPlugin = __webpack_require__(32);

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
/* 60 */
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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
 // eslint-disable-line


var path = __webpack_require__(29);
var webpack = __webpack_require__(31);
var precss = __webpack_require__(97);
var autoprefixer = __webpack_require__(68);
var ExtractTextPlugin = __webpack_require__(74);
var StyleLintPlugin = __webpack_require__(105);

var _require = __webpack_require__(60),
    CSSModules = _require.CSSModules,
    eslint = _require.eslint,
    stylelint = _require.stylelint,
    vendor = _require.vendor;

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv !== 'production';

var WebpackIsomorphicToolsPlugin = __webpack_require__(32);
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(__webpack_require__(59)).development(isDev); // eslint-disable-line

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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(67)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports) {



/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1ea2749f8d7d6de0b3f38f173d909c0b.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c7061f563f5a97e091e4dc5f71c3dbf0.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e3309ed8395192f9c35b82e6621ef003.jpg";

/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("forcedomain");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("lodash/keys");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("lodash/uniqueId");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/AddAPhoto");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Done");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Error");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ExitToApp");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FileUpload");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Help");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Replay");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Progress");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/palette");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/theme");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("precss");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("stylelint-webpack-plugin");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ })
/******/ ]);