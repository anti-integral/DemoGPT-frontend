"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 2325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ containers_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./context/SidebarContext.tsx
 // create context


const SidebarContext = /*#__PURE__*/external_react_default().createContext({
  isSidebarOpen: false,
  scrollY: {
    id: null,
    position: 0
  },
  closeSidebar: () => {},
  toggleSidebar: () => {},
  saveScroll: el => {}
});
const SidebarProvider = ({
  children
}) => {
  const {
    0: isSidebarOpen,
    1: setIsSidebarOpen
  } = (0,external_react_.useState)(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const defaultScrollY = (0,external_react_.useMemo)(() => {
    return {
      id: null,
      position: 0
    };
  }, []);
  const storageScrollY = (0,external_react_.useCallback)(() => {
    return JSON.parse(localStorage.getItem('sidebarScrollY') || JSON.stringify(defaultScrollY));
  }, [defaultScrollY]);
  const {
    0: scrollY,
    1: setScrollY
  } = (0,external_react_.useState)( false ? 0 : defaultScrollY);

  function saveScroll(el) {
    const id = (el === null || el === void 0 ? void 0 : el.id) || null;
    const position = (el === null || el === void 0 ? void 0 : el.scrollTop) || 0;
    setScrollY({
      id,
      position
    });
  }

  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, [scrollY]);
  (0,external_react_.useLayoutEffect)(() => {
    if (false) { var _document$getElementB2, _document$getElementB; }
  }, [scrollY, storageScrollY, isSidebarOpen]);
  const context = {
    isSidebarOpen,
    scrollY,
    toggleSidebar,
    closeSidebar,
    saveScroll
  };
  return /*#__PURE__*/jsx_runtime_.jsx(SidebarContext.Provider, {
    value: context,
    children: children
  });
};
/* harmony default export */ const context_SidebarContext = (SidebarContext);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./routes/sidebar.tsx
/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */
function routeIsActive(pathname, route) {
  if (route.checkActive) {
    return route.checkActive(pathname, route);
  }

  return route !== null && route !== void 0 && route.exact ? pathname == (route === null || route === void 0 ? void 0 : route.path) : route !== null && route !== void 0 && route.path ? pathname.indexOf(route.path) === 0 : false;
}
const routes = [{
  path: "/dashboard",
  // the url
  icon: "HomeIcon",
  // the component being exported from icons/index.js
  name: "Dashboard",
  // name that appear in Sidebar
  exact: true
}, {
  path: "/dashboard/forms",
  icon: "FormsIcon",
  name: "Forms"
}, {
  path: "/dashboard/cards",
  icon: "CardsIcon",
  name: "Cards"
}, {
  path: "/dashboard/charts",
  icon: "ChartsIcon",
  name: "Charts"
}, {
  path: "/dashboard/buttons",
  icon: "ButtonsIcon",
  name: "Buttons"
}, {
  path: "/dashboard/modals",
  icon: "ModalsIcon",
  name: "Modals"
}, {
  path: "/dashboard/tables",
  icon: "TablesIcon",
  name: "Tables"
}, {
  icon: "PagesIcon",
  name: "Pages",
  routes: [// submenu
  {
    path: "/dashboard/login",
    name: "Login"
  }, {
    path: "/dashboard/forgot-password",
    name: "Forgot password"
  }, {
    path: "/dashboard/404",
    name: "404"
  }, {
    path: "/dashboard/blank",
    name: "Blank"
  }]
}];
/* harmony default export */ const sidebar = (routes);
// EXTERNAL MODULE: ./icons/index.ts + 30 modules
var icons = __webpack_require__(5733);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@roketid/windmill-react-ui"
var windmill_react_ui_ = __webpack_require__(7232);
;// CONCATENATED MODULE: ./example/components/Sidebar/SidebarSubmenu.tsx
const _excluded = ["icon"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function Icon(_ref) {
  let {
    icon
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // @ts-ignore
  const _Icon = icons[icon];
  return /*#__PURE__*/jsx_runtime_.jsx(_Icon, _objectSpread({}, props));
}

function SidebarSubmenu({
  route,
  linkClicked
}) {
  const {
    pathname
  } = (0,router_.useRouter)();
  const {
    saveScroll
  } = (0,external_react_.useContext)(context_SidebarContext);
  const {
    0: isDropdownMenuOpen,
    1: setIsDropdownMenuOpen
  } = (0,external_react_.useState)(route.routes ? route.routes.filter(r => {
    return routeIsActive(pathname, r);
  }).length > 0 : false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "relative px-6 py-3",
    children: [isDropdownMenuOpen && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "absolute h-12 inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: `inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${isDropdownMenuOpen ? 'dark:text-gray-100 text-gray-800' : ''}`,
      onClick: handleDropdownMenuClick,
      "aria-haspopup": "true",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "inline-flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
          className: "w-5 h-5",
          "aria-hidden": "true",
          icon: route.icon || ""
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ml-4",
          children: route.name
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(icons.DropdownIcon, {
        className: `w-4 h-4 ${isDropdownMenuOpen ? `transform rotate-180` : ``}`,
        "aria-hidden": "true"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Transition, {
      show: isDropdownMenuOpen,
      enter: "transition-all ease-in-out duration-300",
      enterFrom: "opacity-25 max-h-0",
      enterTo: "opacity-100 max-h-xl",
      leave: "transition-all ease-in-out duration-300",
      leaveFrom: "opacity-100 max-h-xl",
      leaveTo: "opacity-0 max-h-0",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900",
        "aria-label": "submenu",
        children: route.routes && route.routes.map(r => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: r.path || "",
            scroll: false,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `w-full inline-block ${routeIsActive(pathname, r) ? 'dark:text-gray-100 text-gray-800' : ''}`,
              onClick: linkClicked,
              children: r.name
            })
          })
        }, r.name))
      })
    })]
  }, route.name);
}

/* harmony default export */ const Sidebar_SidebarSubmenu = (SidebarSubmenu);
;// CONCATENATED MODULE: ./example/components/Sidebar/SidebarContent.tsx
const SidebarContent_excluded = ["icon"];

function SidebarContent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SidebarContent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SidebarContent_ownKeys(Object(source), true).forEach(function (key) { SidebarContent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SidebarContent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SidebarContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SidebarContent_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SidebarContent_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SidebarContent_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function SidebarContent_Icon(_ref) {
  let {
    icon
  } = _ref,
      props = SidebarContent_objectWithoutProperties(_ref, SidebarContent_excluded);

  // @ts-ignore
  const Icon = icons[icon];
  return /*#__PURE__*/jsx_runtime_.jsx(Icon, SidebarContent_objectSpread({}, props));
}

function SidebarContent({
  linkClicked
}) {
  const {
    pathname
  } = (0,router_.useRouter)();
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "text-gray-500 dark:text-gray-400",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/#",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ml-6 py-6",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-lg font-bold text-gray-800 dark:text-gray-200",
          children: appName
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: sidebar.map(route => route.routes ? /*#__PURE__*/jsx_runtime_.jsx(Sidebar_SidebarSubmenu, {
        route: route,
        linkClicked: linkClicked
      }, route.name) : /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "relative px-6 py-3",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: route.path || "#",
          scroll: false,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: `inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${routeIsActive(pathname, route) ? "dark:text-gray-100 text-gray-800" : ""}`,
            onClick: linkClicked,
            children: [routeIsActive(pathname, route) && /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg",
              "aria-hidden": "true"
            }), /*#__PURE__*/jsx_runtime_.jsx(SidebarContent_Icon, {
              className: "w-5 h-5",
              "aria-hidden": "true",
              icon: route.icon || ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "ml-4",
              children: route.name
            })]
          })
        })
      }, route.name))
    })]
  });
}

/* harmony default export */ const Sidebar_SidebarContent = (SidebarContent);
;// CONCATENATED MODULE: ./example/components/Sidebar/DesktopSidebar.tsx





function DesktopSidebar() {
  const sidebarRef = (0,external_react_.useRef)(null);
  const {
    saveScroll
  } = (0,external_react_.useContext)(context_SidebarContext);

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    id: "desktopSidebar",
    ref: sidebarRef,
    className: "z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block",
    children: /*#__PURE__*/jsx_runtime_.jsx(Sidebar_SidebarContent, {
      linkClicked: linkClickedHandler
    })
  });
}

/* harmony default export */ const Sidebar_DesktopSidebar = (DesktopSidebar);
;// CONCATENATED MODULE: ./example/components/Sidebar/MobileSidebar.tsx








function MobileSidebar() {
  const sidebarRef = (0,external_react_.useRef)(null);
  const {
    isSidebarOpen,
    closeSidebar,
    saveScroll
  } = (0,external_react_.useContext)(context_SidebarContext);

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Transition, {
    show: isSidebarOpen,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Transition, {
        enter: "transition ease-in-out duration-150",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "transition ease-in-out duration-150",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Backdrop, {
          onClick: closeSidebar
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Transition, {
        enter: "transition ease-in-out duration-150",
        enterFrom: "opacity-0 transform -translate-x-20",
        enterTo: "opacity-100",
        leave: "transition ease-in-out duration-150",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0 transform -translate-x-20",
        children: /*#__PURE__*/jsx_runtime_.jsx("aside", {
          id: "mobileSidebar",
          ref: sidebarRef,
          className: "fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx(Sidebar_SidebarContent, {
            linkClicked: linkClickedHandler
          })
        })
      })]
    })
  });
}

/* harmony default export */ const Sidebar_MobileSidebar = (MobileSidebar);
;// CONCATENATED MODULE: ./example/components/Sidebar/index.tsx







function Sidebar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Sidebar_DesktopSidebar, {}), /*#__PURE__*/jsx_runtime_.jsx(Sidebar_MobileSidebar, {})]
  });
}

/* harmony default export */ const components_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./example/components/Header.tsx








function Header() {
  const {
    mode,
    toggleMode
  } = (0,external_react_.useContext)(windmill_react_ui_.WindmillContext);
  const {
    toggleSidebar
  } = (0,external_react_.useContext)(context_SidebarContext);
  const {
    0: isNotificationsMenuOpen,
    1: setIsNotificationsMenuOpen
  } = (0,external_react_.useState)(false);
  const {
    0: isProfileMenuOpen,
    1: setIsProfileMenuOpen
  } = (0,external_react_.useState)(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  const handleProfileClick = () => {
    setIsProfileMenuOpen(prevState => !prevState);
  };

  console.log("isProfileMenuOpen2:", isProfileMenuOpen);
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "z-40 py-4 bg-white shadow-bottom dark:bg-gray-800",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple",
        onClick: toggleSidebar,
        "aria-label": "Menu",
        children: /*#__PURE__*/jsx_runtime_.jsx(icons.MenuIcon, {
          className: "w-6 h-6",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-center flex-1 lg:mr-32"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "flex items-center flex-shrink-0 space-x-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "flex",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "rounded-md focus:outline-none focus:shadow-outline-purple",
            onClick: toggleMode,
            "aria-label": "Toggle color mode",
            children: mode === "dark" ? /*#__PURE__*/jsx_runtime_.jsx(icons.SunIcon, {
              className: "w-5 h-5",
              "aria-hidden": "true"
            }) : /*#__PURE__*/jsx_runtime_.jsx(icons.MoonIcon, {
              className: "w-5 h-5",
              "aria-hidden": "true"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "relative",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "rounded-full focus:shadow-outline-purple focus:outline-none",
            onClick: handleProfileClick,
            "aria-label": "Account",
            "aria-haspopup": "true",
            children: /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Avatar, {
              className: "align-middle",
              src: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82",
              alt: "",
              "aria-hidden": "true"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(windmill_react_ui_.Dropdown, {
            align: "right",
            isOpen: isProfileMenuOpen,
            onClose: () => setIsProfileMenuOpen(false),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(windmill_react_ui_.DropdownItem, {
              tag: "a",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons.OutlinePersonIcon, {
                className: "w-4 h-4 mr-3",
                "aria-hidden": "true"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Profile"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(windmill_react_ui_.DropdownItem, {
              tag: "a",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons.OutlineCogIcon, {
                className: "w-4 h-4 mr-3",
                "aria-hidden": "true"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Settings"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(windmill_react_ui_.DropdownItem, {
              onClick: () => {
                router.push("/dashboard/login");
                localStorage.removeItem("token");
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons.OutlineLogoutIcon, {
                className: "w-4 h-4 mr-3",
                "aria-hidden": "true"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Log out"
              })]
            })]
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./example/containers/Main.tsx



function Main({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("main", {
    className: "h-full overflow-y-auto",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container grid px-6 mx-auto",
      children: children
    })
  });
}

/* harmony default export */ const containers_Main = (Main);
;// CONCATENATED MODULE: ./example/containers/Layout.tsx








function Layout({
  children
}) {
  const {
    isSidebarOpen
  } = (0,external_react_.useContext)(context_SidebarContext);
  return /*#__PURE__*/jsx_runtime_.jsx(SidebarProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col flex-1 w-full",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(containers_Main, {
          children: children
        })]
      })]
    })
  });
}

/* harmony default export */ const containers_Layout = (Layout);

/***/ })

};
;