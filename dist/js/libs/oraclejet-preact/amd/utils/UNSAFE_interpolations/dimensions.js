define(["exports","../UNSAFE_arrayUtils","../UNSAFE_size","../../_curry1-28c749e4","../UNSAFE_stringUtils","../../stringUtils-b43463af"],(function(i,t,e,n,r,s){"use strict";var o=(0,n._curry1_1)((function(i){return null==i}));const a=t.stringLiteralArray(["height","maxHeight","maxWidth","minHeight","minWidth","width"]),c=i=>t=>{const n=t[i];return o(t[i])?{}:{[i]:e.sizeToCSS(n)}},u=a.reduce(((i,t)=>Object.assign(i,{[t]:c(t)})),{});i.dimensionInterpolations=u,i.dimensions=a,Object.defineProperty(i,"__esModule",{value:!0})}));
//# sourceMappingURL=dimensions.js.map