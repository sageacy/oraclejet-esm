define(["exports","preact/hooks"],(function(e,s){"use strict";e.usePress=function(e,p={isDisabled:!1,isSuppressDup:!0}){const r=s.useCallback((s=>{(" "===s.key||!p.isSuppressDup&&"Enter"===s.key)&&(s.preventDefault(),e(s))}),[p.isSuppressDup,e]);return{pressProps:p.isDisabled?{}:{onClick:e,onKeyDown:r}}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_usePress.js.map