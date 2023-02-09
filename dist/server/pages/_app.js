"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
/* harmony import */ var _resources_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _resources_theme__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _resources_theme__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _resources_theme__WEBPACK_IMPORTED_MODULE_2__/* .theme */ .r,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ inputStyles)
/* harmony export */ });
const inputStyles = {
};


/***/ }),

/***/ 476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// darken  2. Extend the theme to include custom colors, fonts, etc
const colors = {
    primary: "#00A6FB",
    primaryDark: "#0582CA",
    secondary: "#1D1E2C",
    light: "#FEFFEA",
    brown: "#DB9065",
    brownHover: "#C6662F"
};
const borders = {
    base: "#15333D",
    hover: "#245A6A"
};
const shadows = {
    sm: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
    darks: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;"
};
const Button = {
    baseStyle: {
        color: "light",
        borderRadius: "0.313rem",
        textTransform: "uppercase",
        paddingTop: "0.156rem",
        boxShadow: "sm",
        fontFamily: "Raleway, sans-serif"
    },
    sizes: {
        sm: {
            lineHeight: "2.5rem",
            fontSize: "0.625",
            fontWeight: "semibold"
        },
        md: {
            height: "2.5rem",
            maxHeight: "2.5rem",
            fontSize: "xs"
        },
        lg: {
            height: "3rem",
            maxHeight: "3rem",
            fontSize: "xs"
        },
        xl: {
            height: "3rem",
            maxHeight: "3rem",
            fontSize: "xs",
            px: {
                base: "2.5rem",
                lg: "4.375rem"
            }
        }
    },
    variants: {
        solidPrimary: {
            color: "light",
            bg: "brown"
        },
        outline: {
            color: "brown",
            bg: "light",
            border: "1px solid",
            borderColor: "brown"
        },
        ghost: {
            color: "light",
            bg: "transparent",
            border: "1px solid",
            borderColor: "light",
            marginTop: "0.625",
            borderRadius: "0px",
            _hover: {
                borderColor: "transparent"
            }
        }
    }
};
const Link = {
    baseStyle: {
        letterSpacing: "0px",
        textDecoration: "none",
        _hover: {
            textDecoration: "none"
        }
    }
};
const fonts = {
    heading: "Raleway, sans-serif",
    body: "Raleway, sans-serif",
    link: "Raleway, sans-serif",
    text: "Aboreto, cursive"
};
const styles = {
    global: {
        html: {
            scrollBehavior: "smooth"
        },
        h1: {
            color: "light"
        }
    }
};
const fontSizes = {
    "2xs": "0.625",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.75rem",
    "3xl": "2.125rem",
    "4xl": "2.25rem"
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    colors,
    shadows,
    borders,
    styles,
    fonts,
    fontSizes,
    components: {
        Button,
        Link,
        Input: _form__WEBPACK_IMPORTED_MODULE_2__/* .inputStyles */ .T
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 149:
/***/ ((module) => {

module.exports = import("@chakra-ui/theme-tools");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(505));
module.exports = __webpack_exports__;

})();