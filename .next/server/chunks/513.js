"use strict";
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 9513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vo": () => (/* binding */ AuthContext),
/* harmony export */   "HD": () => (/* binding */ AuthContextProvider)
/* harmony export */ });
/* unused harmony export useAuth */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  login: () => {},
  logout: () => {},
  user: null
});
const AuthContextProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loginState,
    1: setLoginState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const validateUser = () => {
    const token = localStorage.getItem("token");

    if (token) {
      // If there's a token, consider the user as authenticated
      setLoginState(true); // Fetch user details or perform any necessary authentication checks
      // For simplicity, let's assume user details are stored in localStorage

      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser({
          user_id: storedUser,
          access_token: token
        });
      }
    } else {
      // If there's no token, consider the user as not authenticated
      setLoginState(true); // Redirect to login page if the token is not present

      router.push("/dashboard/login");
    }
  };

  const login = userData => {
    setUser(userData);
    localStorage.setItem("user", userData.user_id || "");
    localStorage.setItem("token", userData.access_token || "");
    router.push("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login");
  }; // useEffect(() => {
  // 	validateUser();
  // }, []);
  // useEffect(() => {
  // 	if (
  // 		!loginState &&
  // 		router.pathname !== "/" &&
  // 		!router.pathname.startsWith("/dashboard/verify-email") &&
  // 		router.pathname !== "/dashboard/create-account"
  // 	) {
  // 		router.push("/dashboard/login");
  // 	}
  // }, [loginState, router.pathname]);


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(AuthContext.Provider, {
    value: {
      user,
      login,
      logout
    },
    children: children
  });
};
const useAuth = () => React.useContext(AuthContext);

/***/ })

};
;