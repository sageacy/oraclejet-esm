define(["exports","../UNSAFE_arrayUtils","../UNSAFE_size","../UNSAFE_stringUtils","../../stringUtils-a3acea83"],(function(n,d,i,a,e){"use strict";d.stringLiteralArray(["paddingBlockStart","paddingBlockEnd","paddingInlineStart","paddingInlineEnd"]);const t={padding:({padding:n})=>{if(void 0===n)return{};{const[a,e=a,t=a,o=e]=d.coerceArray(n);return{padding:`${i.sizeToCSS(a)} ${i.sizeToCSS(e)} \n        ${i.sizeToCSS(t)} ${i.sizeToCSS(o)}`}}},paddingBlockStart:({paddingBlockStart:n})=>void 0===n?{}:{paddingBlockStart:`${i.sizeToCSS(n)}`},paddingBlockEnd:({paddingBlockEnd:n})=>void 0===n?{}:{paddingBlockEnd:`${i.sizeToCSS(n)}`},paddingInlineStart:({paddingInlineStart:n})=>void 0===n?{}:{paddingInlineStart:`${i.sizeToCSS(n)}`},paddingInlineEnd:({paddingInlineEnd:n})=>void 0===n?{}:{paddingInlineEnd:`${i.sizeToCSS(n)}`}};n.paddingInterpolations=t,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=padding.js.map
