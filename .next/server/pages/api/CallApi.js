"use strict";
(() => {
var exports = {};
exports.id = 666;
exports.ids = [666];
exports.modules = {

/***/ 3784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



const callApi = async (endpoint, method = "post", data = "") => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found");
      throw new Error("Token not found");
    }

    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method,
      url: `${"http://localhost:8000"}/${endpoint}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.detail === "Access token not valid") {
      const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
      router.push("/dashboard/login");
    }

    console.error("API call error:", error);
    throw error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callApi);

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3784));
module.exports = __webpack_exports__;

})();