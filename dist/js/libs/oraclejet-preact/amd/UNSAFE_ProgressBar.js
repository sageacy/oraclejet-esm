define(["exports","./tslib.es6-6b9f8039","preact/jsx-runtime","./utils/UNSAFE_classNames",'css!./UNSAFE_ProgressBar.css',"./hooks/UNSAFE_useUser","./hooks/UNSAFE_useTranslationBundle","./classNames-b2629d24","preact/hooks","./UNSAFE_Environment","preact","./UNSAFE_Layer","preact/compat"],(function(e,a,s,l,t,n,r,i,o,c,u,d,m){"use strict";const x=({accessibleLabel:e,id:a,width:l,edge:t="none"})=>{const{direction:o}=n.useUser(),c=i.classNames([_.value,_.indeterminate,_[o]]),u=i.classNames([_.base,"none"===t&&_.standalone]),d=r.useTranslationBundle("@oracle/oraclejet-preact");return s.jsx(v,Object.assign({id:a,ariaValueText:e||d.progressIndeterminate(),class:u,width:l},{children:s.jsx(j,{class:c})}))},h=({value:e=0,max:a=100,id:l,width:t,edge:n="none"})=>{const r=100*Math.min(Math.max(0,e/a),1)+"%",o=i.classNames([_.base,"none"===n&&_.standalone]);return s.jsx(v,Object.assign({value:e,max:a,id:l,width:t,class:o},{children:s.jsx(j,{class:_.value,width:r})}))},v=e=>{var{value:l,max:t,min:n,id:r,width:i,children:o,ariaValueText:c,color:u}=e,d=a.__rest(e,["value","max","min","id","width","children","ariaValueText","color"]);const m=null!=l?n||"0":null,x=null!=l?t:null,h=null!=l?l:null;return s.jsx("div",Object.assign({role:"progressbar",id:r,"aria-valuemin":m,"aria-valuemax":x,"aria-valuenow":h,"aria-valuetext":c,class:d.class,style:{width:i,backgroundColor:u}},{children:o}))},j=e=>{var{width:l,color:t}=e,n=a.__rest(e,["width","color"]);return s.jsx("div",{class:n.class,style:{width:l,backgroundColor:t}})},_={base:"_f0ixjh",value:"kywy72",indeterminate:"_jlqptl",standalone:"_ilu9sk",rtl:"_2du5hf",ltr:"_6ostrg"};e.ProgressBar=function(e){var{value:l,max:t}=e,n=a.__rest(e,["value","max"]);return"indeterminate"===l?s.jsx(x,Object.assign({},n)):s.jsx(h,Object.assign({value:l,max:t},n))},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_ProgressBar.js.map
