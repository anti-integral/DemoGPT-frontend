(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{6337:function(e,t,n){"use strict";n.r(t);var o=n(2809),r=n(266),a=n(809),s=n.n(a),l=n(7294),c=n(1664),i=n(5675),u=n(6426),d=n(9738),h=n.n(d),f=n(3651),m=n(5733),p=n(9513),g=n(1163),x=n(3636),w=n(6042),v=n(2440),j=n(5893);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h().config();var y=function(){var e=(0,r.Z)(s().mark((function e(t,n,o){var r,a,l,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("http://localhost:8000"),a="google"===n?{token:t}:t,l="google"===n?null!==(r=t.access_token)&&void 0!==r?r:"":null!==o&&void 0!==o?o:"",c={method:"post",maxBodyLength:1/0,url:"google"===n?"http://localhost:8000/auth/login/":"http://localhost:8000/auth/login/manual",headers:{"Content-Type":"application/JSON",Authorization:"Bearer ".concat(l)},data:JSON.stringify(a)},e.abrupt("return",new Promise((function(e,t){x.Z.request(c).then((function(t){var n;localStorage.setItem("token",null!==(n=t.data.token)&&void 0!==n?n:null),console.log(t,t.data),e(!0)})).catch((function(e){console.log(e),t(!1)}))})));case 6:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}();t.default=function(e){var t=(0,l.useState)(!1),n=t[0],a=t[1],d=(0,l.useState)({email:"",password:""}),h=d[0],b=d[1],N=(0,l.useState)(!1),O=N[0],C=N[1],S=(0,l.useContext)(p.Vo),_=S.user,P=(S.login,(0,l.useContext)(f.WindmillContext).mode),L=(0,g.useRouter)();var E="dark"===P?"/assets/img/login-office-dark.jpeg":"/assets/img/login-office.jpeg",D=function(e){var t=e.target,n=t.name,r=t.value;b(k(k({},h),{},(0,o.Z)({},n,r)))},I=(0,u.Nq)({onSuccess:function(){var t=(0,r.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("tokenresponse=====",n),t.next=3,y(JSON.parse(n),"google","");case 3:e&&console.log(e),L.push("/"),localStorage.setItem("token",JSON.stringify(n));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onError:function(e){console.log(e)}});(0,l.useEffect)((function(){_&&L.push("/dashboard")}),[_]);var Z=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),t.preventDefault(),e.prev=2,e.next=5,x.Z.post("".concat("http://localhost:8000","/login"),h);case 5:"success"===(n=e.sent).data.status&&n.data.result&&(a(!1),w.Am.success(n.data.message),localStorage.setItem("token",n.data.result.access_token),localStorage.setItem("uuid",n.data.result.user_id),L.push("/dashboard")),console.log("logins",n),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),a(!1),w.Am.error(e.t0.response.data.detail),console.log("login",e.t0);case 15:a(!1);case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,j.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:(0,j.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:(0,j.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[(0,j.jsx)("div",{className:"relative h-32 md:h-auto md:w-1/2",children:(0,j.jsx)(i.default,{"aria-hidden":"true",className:"hidden object-cover w-full h-full",src:E,alt:"Office",layout:"fill"})}),(0,j.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:(0,j.jsxs)("div",{className:"w-full",children:[(0,j.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Welcome to DemoGPT"}),(0,j.jsx)(f.Label,{children:(0,j.jsx)(f.Input,{className:"mt-1",type:"email",name:"email",value:h.email,placeholder:"Enter Your Email",onChange:D})}),(0,j.jsxs)(f.Label,{className:"mt-4",children:[(0,j.jsx)("span",{children:"Password"}),(0,j.jsxs)("div",{className:"relative  container mx-auto  mt-1",children:[(0,j.jsx)(f.Input,{type:O?"text":"password",placeholder:"Password",className:"w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1",name:"password",onChange:D,value:h.password}),(0,j.jsx)("button",{className:"absolute inset-y-0 right-0 flex items-center px-4 text-gray-600",onClick:function(){return e="password",console.log("data",e),void("password"===e&&C((function(e){return!e})));var e},children:O?(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})}):(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:[(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})]}),(0,j.jsx)(f.Button,{className:"".concat(h.email&&h.password?"mt-4":"mt-4 cursor-not-allowed"),onClick:function(e){return Z(e)},block:!0,disabled:!h.email||!h.password,children:n?(0,j.jsx)(v.s5,{visible:!0,width:"20",strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading"}):"Sign In"}),(0,j.jsx)("hr",{className:"my-8"}),(0,j.jsxs)(f.Button,{block:!0,layout:"outline",onClick:function(){return I()},children:[(0,j.jsx)(m.GoogleIcon,{className:"w-4 h-4 mr-2","aria-hidden":"true"}),"Sign in with Google"]}),(0,j.jsx)("p",{className:"mt-4",children:(0,j.jsx)(c.default,{href:"/dashboard/forgot-password",children:(0,j.jsx)("a",{className:"text-xs font-medium text-purple-600 dark:text-white hover:underline",children:"Forgot password?"})})}),(0,j.jsxs)("p",{className:"mt-1 font-medium text-xs text-white",children:["Don't have an account?",(0,j.jsx)(c.default,{href:"/dashboard/create-account",children:(0,j.jsx)("a",{className:" ml-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline",children:"Create account"})})]})]})})]})})})}},4546:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/login",function(){return n(6337)}])},6601:function(){},9214:function(){},1922:function(){},2363:function(){},6647:function(){},2361:function(){},4616:function(){}},function(e){e.O(0,[794,256,675,528,738,169,733,774,888,179],(function(){return t=4546,e(e.s=t);var t}));var t=e.O();_N_E=t}]);