define(["exports","./UNSAFE_arrayUtils","./UNSAFE_stringUtils","../stringUtils-a3acea83"],(function(e,t,r,s){"use strict";const i=(n=Number,e=>null!=e&&e.constructor===n||e instanceof n);var n;const a=e=>0===e||"0"===e,o=t.stringLiteralArray(["px","%","em","rem","vh","vw"]),c=new RegExp(`(${o.join("|")})$`),l=e=>s.isString(e)&&c.test(e),u=(N="px",e=>a(e)||l(e)||!(e=>!isNaN(parseFloat(e))&&!isNaN(e-0))(e)?e:e+N);var N;e.hasUnit=l,e.isNumber=i,e.isZero=a,e.px=u,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_units.js.map
