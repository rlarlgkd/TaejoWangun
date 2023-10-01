exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 116:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23))

/***/ }),

/***/ 2052:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9193))

/***/ }),

/***/ 3401:
/***/ (() => {



/***/ }),

/***/ 9193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoBackButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6320);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function GoBackButton() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: ()=>router.back(),
        className: "bg-amber-400 hover:bg-amber-500 flex justify-center items-center px-20 py-3 rounded-md gap-3",
        type: "button",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                width: 32
            }),
            "이전으로"
        ]
    });
}


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2411);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Taejo Wangun",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 7762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFound)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/component/GoBackButton.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\TFX5470H\Desktop\TaejoWangun\app\component\GoBackButton.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const GoBackButton = (__default__);
;// CONCATENATED MODULE: ./app/not-found.tsx




function NotFound() {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "h-screen flex justify-center min-w-desktop",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-desktop px-10 sm:px-20 ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "relative flex w-40 sm:w-72 h-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/images/logo_mark.svg",
                        alt: "로고",
                        fill: true,
                        className: "object-contain"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sm:pt-44 flex flex-col-reverse sm:flex-row gap-10",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-2xl sm:text-5xl",
                                    children: "404 ERROR"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl sm:text-4xl sm:py-5",
                                    children: "페이지를 찾을 수 없습니다"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "py-2 sm:py-5 text-xs sm:text-base",
                                    children: [
                                        "존재하지 않는 주소를 입력하셨거나",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pt-14 sm:pt-24 pb-10",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(GoBackButton, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative grow",
                            style: {
                                minHeight: "240px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/images/not_found.png",
                                alt: "404 Not Found Image",
                                fill: true,
                                className: "object-contain"
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;