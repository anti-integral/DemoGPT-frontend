(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{8365:function(a,e,t){"use strict";t(7294);var r=t(5893);e.Z=function(){return(0,r.jsxs)("a",{className:"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple",href:"https://github.com/roketid/windmill-dashboard-nextjs-typescript",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,r.jsx)("span",{children:"Star this project on GitHub"})]}),(0,r.jsxs)("span",{children:["View more ",(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:"&RightArrow;"}})]})]})}},3064:function(a,e,t){"use strict";t(7294);var r=t(5893);e.Z=function(a){var e=a.children;return(0,r.jsx)("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:e})}},7937:function(a,e,t){"use strict";t(7294);var r=t(5893);e.Z=function(a){var e=a.children;return(0,r.jsx)("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300",children:e})}},2167:function(a,e,t){"use strict";var r=t(3848);e.default=void 0;var n,s=(n=t(7294))&&n.__esModule?n:{default:n},i=t(1063),o=t(4651),l=t(132);var u={};function d(a,e,t,r){if(a&&i.isLocalURL(e)){a.prefetch(e,t,r).catch((function(a){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:a&&a.locale;u[e+"%"+t+(n?"%"+n:"")]=!0}}var m=function(a){var e,t=!1!==a.prefetch,n=o.useRouter(),m=s.default.useMemo((function(){var e=i.resolveHref(n,a.href,!0),t=r(e,2),s=t[0],o=t[1];return{href:s,as:a.as?i.resolveHref(n,a.as):o||s}}),[n,a.href,a.as]),c=m.href,p=m.as,h=a.children,f=a.replace,g=a.shallow,j=a.scroll,T=a.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var b=(e=s.default.Children.only(h))&&"object"===typeof e&&e.ref,v=l.useIntersection({rootMargin:"200px"}),x=r(v,2),S=x[0],y=x[1],M=s.default.useCallback((function(a){S(a),b&&("function"===typeof b?b(a):"object"===typeof b&&(b.current=a))}),[b,S]);s.default.useEffect((function(){var a=y&&t&&i.isLocalURL(c),e="undefined"!==typeof T?T:n&&n.locale,r=u[c+"%"+p+(e?"%"+e:"")];a&&!r&&d(n,c,p,{locale:e})}),[p,c,y,T,t,n]);var B={ref:M,onClick:function(a){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,t,r,n,s,o,l){("A"!==a.currentTarget.nodeName||!function(a){var e=a.currentTarget.target;return e&&"_self"!==e||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which}(a)&&i.isLocalURL(t))&&(a.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),e[n?"replace":"push"](t,r,{shallow:s,locale:l,scroll:o}))}(a,n,c,p,f,g,j,T)},onMouseEnter:function(a){i.isLocalURL(c)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),d(n,c,p,{priority:!0}))}};if(a.passHref||"a"===e.type&&!("href"in e.props)){var C="undefined"!==typeof T?T:n&&n.locale,G=n&&n.isLocaleDomain&&i.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);B.href=G||i.addBasePath(i.addLocale(p,C,n&&n.defaultLocale))}return s.default.cloneElement(e,B)};e.default=m},132:function(a,e,t){"use strict";var r=t(3848);Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(a){var e=a.rootMargin,t=a.disabled||!i,l=n.useRef(),u=n.useState(!1),d=r(u,2),m=d[0],c=d[1],p=n.useCallback((function(a){l.current&&(l.current(),l.current=void 0),t||m||a&&a.tagName&&(l.current=function(a,e,t){var r=function(a){var e=a.rootMargin||"",t=o.get(e);if(t)return t;var r=new Map,n=new IntersectionObserver((function(a){a.forEach((function(a){var e=r.get(a.target),t=a.isIntersecting||a.intersectionRatio>0;e&&t&&e(t)}))}),a);return o.set(e,t={id:e,observer:n,elements:r}),t}(t),n=r.id,s=r.observer,i=r.elements;return i.set(a,e),s.observe(a),function(){i.delete(a),s.unobserve(a),0===i.size&&(s.disconnect(),o.delete(n))}}(a,(function(a){return a&&c(a)}),{rootMargin:e}))}),[t,e,m]);return n.useEffect((function(){if(!i&&!m){var a=s.requestIdleCallback((function(){return c(!0)}));return function(){return s.cancelIdleCallback(a)}}}),[m]),[p,m]};var n=t(7294),s=t(3447),i="undefined"!==typeof IntersectionObserver;var o=new Map},4944:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var r=t(7294),n=t(3064),s=t(7937),i=t(8365),o=t(3651),l=t(5733),u=[{avatar:"https://randomuser.me/api/portraits/men/64.jpg",name:"Chandler Jacobi",job:"Direct Security Executive",amount:989.4,status:"primary",date:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/76.jpg",name:"Monserrat Marquardt",job:"Forward Accountability Producer",amount:471.44,status:"danger",date:"Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/79.jpg",name:"Lonie Wyman",job:"Legacy Program Director",amount:934.24,status:"success",date:"Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/43.jpg",name:"Corine Abernathy",job:"Chief Factors Planner",amount:351.28,status:"warning",date:"Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/39.jpg",name:"Lorenz Botsford",job:"Central Accountability Developer",amount:355.3,status:"neutral",date:"Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/8.jpg",name:"Everette Botsford",job:"Product Group Architect",amount:525.42,status:"success",date:"Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/34.jpg",name:"Marilou Beahan",job:"Future Security Planner",amount:414.99,status:"success",date:"Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/80.jpg",name:"Ceasar Sauer",job:"Direct Brand Specialist",amount:488,status:"primary",date:"Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/13.jpg",name:"Rae McDermott",job:"Lead Branding Engineer",amount:502.69,status:"danger",date:"Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/86.jpg",name:"Mable Steuber",job:"National Group Executive",amount:911.09,status:"danger",date:"Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/74.jpg",name:"Julian Glover",job:"Global Branding Assistant",amount:656.94,status:"danger",date:"Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/71.jpg",name:"Duncan Toy",job:"Central Intranet Manager",amount:120.78,status:"danger",date:"Sun Nov 17 2019 11:59:50 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/81.jpg",name:"Blanche Friesen",job:"Forward Identity Executive",amount:676.95,status:"danger",date:"Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/91.jpg",name:"Orion Koepp",job:"Global Accountability Strategist",amount:447.56,status:"danger",date:"Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/49.jpg",name:"Dakota Vandervort",job:"Future Assurance Coordinator",amount:765.22,status:"danger",date:"Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/85.jpg",name:"Lily Collier",job:"Forward Configuration Orchestrator",amount:449.11,status:"danger",date:"Sun Aug 18 2019 14:52:01 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/63.jpg",name:"Kayleigh Schumm",job:"Central Division Agent",amount:65.54,status:"danger",date:"Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/25.jpg",name:"General McGlynn",job:"Central Web Analyst",amount:30.51,status:"danger",date:"Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/19.jpg",name:"Shayna Schumm",job:"Future Directives Engineer",amount:313.73,status:"danger",date:"Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/17.jpg",name:"Giovanna Sanford",job:"Dynamic Interactions Executive",amount:398.3,status:"danger",date:"Tue Oct 08 2019 17:08:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/12.jpg",name:"Emie Mante",job:"Direct Factors Supervisor",amount:142.51,status:"danger",date:"Wed Jul 24 2019 19:17:16 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/14.jpg",name:"Chance Muller",job:"Lead Usability Planner",amount:963.26,status:"danger",date:"Sun Dec 01 2019 14:04:10 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/16.jpg",name:"Armani Torphy",job:"Forward Functionality Analyst",amount:445.23,status:"danger",date:"Tue Dec 24 2019 13:28:36 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/19.jpg",name:"Braeden Ward",job:"Central Integration Director",amount:588.53,status:"danger",date:"Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/20.jpg",name:"Malcolm Price",job:"District Program Planner",amount:181.93,status:"danger",date:"Thu Oct 24 2019 07:09:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/21.jpg",name:"Susan Jast",job:"Future Paradigm Associate",amount:928.41,status:"danger",date:"Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/31.jpg",name:"Torrey Reynolds",job:"Lead Security Agent",amount:447.37,status:"danger",date:"Mon Oct 28 2019 04:10:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/48.jpg",name:"Travon Harber",job:"Legacy Marketing Facilitator",amount:422.48,status:"danger",date:"Sat Nov 09 2019 05:04:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/58.jpg",name:"Hattie Gutkowski",job:"Chief Configuration Supervisor",amount:714.34,status:"danger",date:"Tue Oct 22 2019 22:36:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/34.jpg",name:"Demarco Lang",job:"Investor Program Designer",amount:536.92,status:"danger",date:"Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/64.jpg",name:"Glennie Ziemann",job:"Dynamic Interactions Analyst",amount:597.25,status:"danger",date:"Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/73.jpg",name:"Alta Howe",job:"District Intranet Executive",amount:42.28,status:"danger",date:"Sat Oct 12 2019 22:57:22 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/66.jpg",name:"Sydnee Gottlieb",job:"Global Response Specialist",amount:868.92,status:"danger",date:"Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/23.jpg",name:"Arlene Schmitt",job:"Lead Metrics Consultant",amount:364.68,status:"danger",date:"Thu Oct 03 2019 08:47:32 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/98.jpg",name:"Hilda Schoen",job:"National Solutions Facilitator",amount:260.91,status:"danger",date:"Wed Dec 04 2019 06:28:30 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/72.jpg",name:"Chase Bahringer",job:"Dynamic Communications Designer",amount:454.61,status:"danger",date:"Mon Nov 25 2019 16:59:38 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/91.jpg",name:"Lucile Hansen",job:"Customer Usability Facilitator",amount:982.22,status:"danger",date:"Sun Aug 25 2019 17:15:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/59.jpg",name:"Mollie Heaney",job:"Forward Communications Director",amount:390.33,status:"danger",date:"Mon Jul 22 2019 01:45:19 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/32.jpg",name:"Bennie Kuvalis",job:"Future Factors Agent",amount:456.64,status:"danger",date:"Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/84.jpg",name:"Jodie Luettgen",job:"Customer Implementation Associate",amount:398.37,status:"danger",date:"Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/43.jpg",name:"Bethel Quitzon",job:"Dynamic Web Strategist",amount:183.58,status:"danger",date:"Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/67.jpg",name:"Jon Dietrich",job:"Legacy Creative Planner",amount:439.01,status:"danger",date:"Sun Dec 29 2019 11:11:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/89.jpg",name:"Nakia Kihn",job:"Central Interactions Coordinator",amount:824.12,status:"danger",date:"Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/44.jpg",name:"Assunta Grady",job:"Investor Operations Specialist",amount:172.97,status:"danger",date:"Tue Dec 17 2019 01:46:37 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://randomuser.me/api/portraits/men/78.jpg",name:"Lukas Klocko",job:"Human Usability Associate",amount:515.74,status:"danger",date:"Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)"}],d=t(2325),m=t(5893),c=u.concat([]);var p=function(){var a=(0,r.useState)(1),e=a[0],t=a[1],p=(0,r.useState)(1),h=p[0],f=p[1],g=(0,r.useState)([]),j=g[0],T=g[1],b=(0,r.useState)([]),v=b[0],x=b[1],S=10,y=u.length;return(0,r.useEffect)((function(){T(u.slice((e-1)*S,e*S))}),[e]),(0,r.useEffect)((function(){x(c.slice((h-1)*S,h*S))}),[h]),(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(n.Z,{children:"Tables"}),(0,m.jsx)(i.Z,{}),(0,m.jsx)(s.Z,{children:"Simple table"}),(0,m.jsxs)(o.TableContainer,{className:"mb-8",children:[(0,m.jsxs)(o.Table,{children:[(0,m.jsx)(o.TableHeader,{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)(o.TableCell,{children:"Client"}),(0,m.jsx)(o.TableCell,{children:"Amount"}),(0,m.jsx)(o.TableCell,{children:"Status"}),(0,m.jsx)(o.TableCell,{children:"Date"})]})}),(0,m.jsx)(o.TableBody,{children:j.map((function(a,e){return(0,m.jsxs)(o.TableRow,{children:[(0,m.jsx)(o.TableCell,{children:(0,m.jsxs)("div",{className:"flex items-center text-sm",children:[(0,m.jsx)(o.Avatar,{className:"hidden mr-3 md:block",src:a.avatar,alt:"User avatar"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"font-semibold",children:a.name}),(0,m.jsx)("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:a.job})]})]})}),(0,m.jsx)(o.TableCell,{children:(0,m.jsxs)("span",{className:"text-sm",children:["$ ",a.amount]})}),(0,m.jsx)(o.TableCell,{children:(0,m.jsx)(o.Badge,{type:a.status,children:a.status})}),(0,m.jsx)(o.TableCell,{children:(0,m.jsx)("span",{className:"text-sm",children:new Date(a.date).toLocaleDateString()})})]},e)}))})]}),(0,m.jsx)(o.TableFooter,{children:(0,m.jsx)(o.Pagination,{totalResults:y,resultsPerPage:S,onChange:function(a){t(a)},label:"Table navigation"})})]}),(0,m.jsx)(s.Z,{children:"Table with actions"}),(0,m.jsxs)(o.TableContainer,{className:"mb-8",children:[(0,m.jsxs)(o.Table,{children:[(0,m.jsx)(o.TableHeader,{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)(o.TableCell,{children:"Client"}),(0,m.jsx)(o.TableCell,{children:"Amount"}),(0,m.jsx)(o.TableCell,{children:"Status"}),(0,m.jsx)(o.TableCell,{children:"Date"}),(0,m.jsx)(o.TableCell,{children:"Actions"})]})}),(0,m.jsx)(o.TableBody,{children:v.map((function(a,e){return(0,m.jsxs)(o.TableRow,{children:[(0,m.jsx)(o.TableCell,{children:(0,m.jsxs)("div",{className:"flex items-center text-sm",children:[(0,m.jsx)(o.Avatar,{className:"hidden mr-3 md:block",src:a.avatar,alt:"User avatar"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"font-semibold",children:a.name}),(0,m.jsx)("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:a.job})]})]})}),(0,m.jsx)(o.TableCell,{children:(0,m.jsxs)("span",{className:"text-sm",children:["$ ",a.amount]})}),(0,m.jsx)(o.TableCell,{children:(0,m.jsx)(o.Badge,{type:a.status,children:a.status})}),(0,m.jsx)(o.TableCell,{children:(0,m.jsx)("span",{className:"text-sm",children:new Date(a.date).toLocaleDateString()})}),(0,m.jsx)(o.TableCell,{children:(0,m.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,m.jsx)(o.Button,{layout:"link",size:"small","aria-label":"Edit",children:(0,m.jsx)(l.EditIcon,{className:"w-5 h-5","aria-hidden":"true"})}),(0,m.jsx)(o.Button,{layout:"link",size:"small","aria-label":"Delete",children:(0,m.jsx)(l.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})})]})})]},e)}))})]}),(0,m.jsx)(o.TableFooter,{children:(0,m.jsx)(o.Pagination,{totalResults:y,resultsPerPage:S,onChange:function(a){f(a)},label:"Table navigation"})})]})]})}},1022:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/tables",function(){return t(4944)}])},1664:function(a,e,t){a.exports=t(2167)},4155:function(a){var e,t,r=a.exports={};function n(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(a){if(e===setTimeout)return setTimeout(a,0);if((e===n||!e)&&setTimeout)return e=setTimeout,setTimeout(a,0);try{return e(a,0)}catch(t){try{return e.call(null,a,0)}catch(t){return e.call(this,a,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:n}catch(a){e=n}try{t="function"===typeof clearTimeout?clearTimeout:s}catch(a){t=s}}();var o,l=[],u=!1,d=-1;function m(){u&&o&&(u=!1,o.length?l=o.concat(l):d=-1,l.length&&c())}function c(){if(!u){var a=i(m);u=!0;for(var e=l.length;e;){for(o=l,l=[];++d<e;)o&&o[d].run();d=-1,e=l.length}o=null,u=!1,function(a){if(t===clearTimeout)return clearTimeout(a);if((t===s||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(a);try{t(a)}catch(e){try{return t.call(null,a)}catch(e){return t.call(this,a)}}}(a)}}function p(a,e){this.fun=a,this.array=e}function h(){}r.nextTick=function(a){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];l.push(new p(a,e)),1!==l.length||u||i(c)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(a){return[]},r.binding=function(a){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(a){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},219:function(a,e,t){"use strict";function r(a,e){if(null==a)return{};var t,r,n=function(a,e){if(null==a)return{};var t,r,n={},s=Object.keys(a);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}t.d(e,{Z:function(){return r}})}},function(a){a.O(0,[733,325,774,888,179],(function(){return e=1022,a(a.s=e);var e}));var e=a.O();_N_E=e}]);