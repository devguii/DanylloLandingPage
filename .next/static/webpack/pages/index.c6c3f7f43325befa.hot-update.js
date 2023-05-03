"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Header = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sticky, setSticky] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>setIsOpen(!isOpen);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n    });\n    const handleScroll = ()=>{\n        if (window.scrollY > 180) {\n            setSticky(true);\n        } else if (window.scrollY < 180) {\n            setSticky(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n        color: \"dark\",\n        dark: true,\n        container: \"md\",\n        expand: \"md\",\n        sticky: sticky ? \"top\" : \"\",\n        style: {\n            backgroundColor: \"#12143D\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {\n                href: \"/\",\n                children: \"Dr. Danyllo Generoso\"\n            }, void 0, false, {\n                fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarToggler, {\n                onClick: toggle\n            }, void 0, false, {\n                fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                isOpen: isOpen,\n                navbar: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                    className: \"ms-auto\",\n                    navbar: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        className: \"m-auto\",\n                        navbar: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                    href: \"#feature\",\n                                    children: \"Features\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                    href: \"#service\",\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                    href: \"#about\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/guilherme/Documents/code/DanylloLandingPage/components/Header.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"EB1hWeXXzwNobAe9UF3xD+oGEAk=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQVMvQjtBQUVwQixNQUFNVSxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1jLFNBQVMsSUFBTUgsVUFBVSxDQUFDRDtJQUVoQ1QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVQztJQUNwQztJQUVBLE1BQU1BLGVBQWUsSUFBTTtRQUN6QixJQUFJRixPQUFPRyxPQUFPLEdBQUcsS0FBSztZQUN4QkwsVUFBVSxJQUFJO1FBQ2hCLE9BQU8sSUFBSUUsT0FBT0csT0FBTyxHQUFHLEtBQUs7WUFDL0JMLFVBQVUsS0FBSztRQUNqQixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ1YsOENBQU1BO1FBQ0xnQixPQUFNO1FBQ05DLElBQUk7UUFDSkMsV0FBVTtRQUNWQyxRQUFPO1FBQ1BWLFFBQVFBLFNBQVMsUUFBUSxFQUFFO1FBQzNCVyxPQUFPO1lBQUVDLGlCQUFpQjtRQUFVOzswQkFFcEMsOERBQUNuQixtREFBV0E7Z0JBQUNvQixNQUFLOzBCQUFJOzs7Ozs7MEJBQ3RCLDhEQUFDckIscURBQWFBO2dCQUFDc0IsU0FBU1o7Ozs7OzswQkFDeEIsOERBQUNaLGdEQUFRQTtnQkFBQ1EsUUFBUUE7Z0JBQVFpQixNQUFNOzBCQUM5Qiw0RUFBQ3JCLDJDQUFHQTtvQkFBQ3NCLFdBQVU7b0JBQVVELE1BQU07OEJBQzdCLDRFQUFDckIsMkNBQUdBO3dCQUFDc0IsV0FBVTt3QkFBU0QsTUFBTTs7MENBQzVCLDhEQUFDcEIsK0NBQU9BOzBDQUNOLDRFQUFDQywrQ0FBT0E7b0NBQUNpQixNQUFLOzhDQUFJOzs7Ozs7Ozs7OzswQ0FFcEIsOERBQUNsQiwrQ0FBT0E7MENBQ04sNEVBQUNDLCtDQUFPQTtvQ0FBQ2lCLE1BQUs7OENBQVc7Ozs7Ozs7Ozs7OzBDQUUzQiw4REFBQ2xCLCtDQUFPQTswQ0FDTiw0RUFBQ0MsK0NBQU9BO29DQUFDaUIsTUFBSzs4Q0FBVzs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDbEIsK0NBQU9BOzBDQUNOLDRFQUFDQywrQ0FBT0E7b0NBQUNpQixNQUFLOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckM7R0FoRE1oQjtLQUFBQTtBQWtETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGlja3ksIHNldFN0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxODApIHtcbiAgICAgIHNldFN0aWNreSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgMTgwKSB7XG4gICAgICBzZXRTdGlja3koZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZiYXJcbiAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICBkYXJrXG4gICAgICBjb250YWluZXI9XCJtZFwiXG4gICAgICBleHBhbmQ9XCJtZFwiXG4gICAgICBzdGlja3k9e3N0aWNreSA/IFwidG9wXCIgOiBcIlwifVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxMjE0M0RcIiB9fVxuICAgID5cbiAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPkRyLiBEYW55bGxvIEdlbmVyb3NvPC9OYXZiYXJCcmFuZD5cbiAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIjZmVhdHVyZVwiPkZlYXR1cmVzPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIjc2VydmljZVwiPlNlcnZpY2VzPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIjYWJvdXRcIj5BYm91dDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXY+XG4gICAgICA8L0NvbGxhcHNlPlxuICAgIDwvTmF2YmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb2xsYXBzZSIsIk5hdmJhciIsIk5hdmJhclRvZ2dsZXIiLCJOYXZiYXJCcmFuZCIsIk5hdiIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwiSGVhZGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic3RpY2t5Iiwic2V0U3RpY2t5IiwidG9nZ2xlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFkiLCJjb2xvciIsImRhcmsiLCJjb250YWluZXIiLCJleHBhbmQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJvbkNsaWNrIiwibmF2YmFyIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});