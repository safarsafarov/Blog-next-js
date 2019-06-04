webpackHotUpdate("static/development/pages/newpost.js",{

/***/ "./pages/newpost.js":
/*!**************************!*\
  !*** ./pages/newpost.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$createElement;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "",
    action: "/compose",
    method: "post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "small-title",
    htmlFor: "exampleFormControlSelect1"
  }, "Post Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "input",
    name: "postTitle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", (_React$createElement = {
    className: "textarea",
    name: "form-control",
    id: "exampleFormControlTextarea1"
  }, _defineProperty(_React$createElement, "name", "postBody"), _defineProperty(_React$createElement, "rows", "5"), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "small-title",
    htmlFor: "exampleFormControlSelect1"
  }, "Post Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Publish")))));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/newpost")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=newpost.js.33c1077f821c7ef1506c.hot-update.js.map