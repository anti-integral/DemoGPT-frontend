"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{2440:function(t,i,s){s.d(i,{s5:function(){return f}});var o=s(5893),a=s(7294),n=s(3169);const e={"aria-busy":!0,role:"progressbar"},r=(n.ZP.div`
  display: ${t=>t.$visible?"flex":"none"};
`,"http://www.w3.org/2000/svg"),h=242.776657104492,d=n.F4`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${h}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${h}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${h}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`,l=(n.ZP.path`
  stroke-dasharray: ${2.42776657104492}px, ${h};
  stroke-dashoffset: 0;
  animation: ${d} ${1.6}s linear infinite;
`,[0,30,60,90,120,150,180,210,240,270,300,330]),p=n.F4`
to {
   transform: rotate(360deg);
 }
`,c=n.ZP.svg`
  animation: ${p} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,k=n.ZP.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,f=({strokeColor:t="#4fa94d",strokeWidth:i="5",animationDuration:s="0.75",width:n="96",visible:h=!0,ariaLabel:d="rotating-lines-loading"})=>{const p=(0,a.useCallback)((()=>l.map((t=>(0,o.jsx)(k,{points:"24,12 24,4",width:i,transform:`rotate(${t}, 24, 24)`},t)))),[i]);return h?(0,o.jsx)(c,{xmlns:r,viewBox:"0 0 48 48",width:n,stroke:t,speed:s,"data-testid":"rotating-lines-svg","aria-label":d,...e,children:p()}):null},y=n.F4`
to {
   stroke-dashoffset: 136;
 }
`;n.ZP.polygon`
  stroke-dasharray: 17;
  animation: ${y} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`}}]);