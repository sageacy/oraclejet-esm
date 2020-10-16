/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define("polyfills",["corejs","regenerator-runtime"]),define("promise",["polyfills"],(function(){return Promise.polyfill=function(){},Promise})),define(["require","ojs/ojlogger","polyfills"],(function(t,e){"use strict";var n={};"undefined"!=typeof window?n=window:"undefined"!=typeof self&&(n=self);var r=n.oj,o={version:"9.2.0",revision:"2020-10-07_10-26-04",noConflict:function(){n.oj=r},_registerLegacyNamespaceProp:function(t,e){this[t]=e}};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.oj=o,o.Assert={};var s="DEBUG";o.Assert.forceDebug=function(){o.Assert[s]=!0},o.Assert.clearDebug=function(){o.Assert[s]=!1},o.Assert.isDebug=function(){return!0===o.Assert[s]},o.Assert.assert=function(t,e){if(o.Assert[s]&&!t){var n=e||"";if(arguments.length>2){n+="(";for(var r=2;r<arguments.length;r+=1)n+=arguments[r];n+=")"}o.Assert.assertionFailed(n,1)}},o.Assert.failedInAbstractFunction=function(){o.Assert[s]&&o.Assert.assertionFailed("Abstract function called",1)},o.Assert.assertPrototype=function(t,e,n){if(o.Assert[s]){var r=e.prototype;if(null!=t)o.Assert.assertType(e,"function",null,1,!1),Object.prototype.isPrototypeOf.call(r,t)||o.Assert.assertionFailed("object '"+t+"' doesn't match prototype "+r,1,n);else o.Assert.assertionFailed("null object doesn't match prototype "+r,1,n)}},o.Assert.assertPrototypeOrNull=function(t,e,n){if(o.Assert[s]&&null!=t){o.Assert.assertType(e,"function",null,1,!1);var r=e.prototype;Object.prototype.isPrototypeOf.call(r,t)||o.Assert.assertionFailed("object '"+t+"' doesn't match prototype "+r,1,n)}},o.Assert.assertPrototypes=function(t,e,n,r){if(o.Assert[s]){var i=e.prototype,a=n.prototype,c=Object.prototype.isPrototypeOf;c.call(i,t)||c.call(a,t)||o.Assert.assertionFailed("object '"+t+"' doesn't match prototype "+i+" or "+a,1,r)}},o.Assert.assertDomNodeOrNull=function(t,e){o.Assert[s]&&t&&void 0===t.nodeType&&o.Assert.assertionFailed(t+" is not a DOM Node",e+1)},o.Assert.assertDomNode=function(t,e){o.Assert[s]&&(t&&void 0!==t.nodeType||o.Assert.assertionFailed(t+" is not a DOM Node",e+1))},o.Assert.assertDomElement=function(t,e){o.Assert[s]&&(o.Assert.assertDomNode(t,1),1!==t.nodeType?o.Assert.assertionFailed(t+" is not a DOM Element",1):e&&t.nodeName!==e&&o.Assert.assertionFailed(t+" is not a "+e+" Element",1))},o.Assert.assertDomElementOrNull=function(t,e){o.Assert[s]&&null!=t&&(o.Assert.assertDomNode(t,1),1!==t.nodeType?o.Assert.assertionFailed(t+" is not a DOM Element",1):e&&t.nodeName!==e&&o.Assert.assertionFailed(t+" is not a "+e+" Element",1))},o.Assert.assertType=function(t,e,n,r,a){if(o.Assert[s]){var c=i(t);if(!(null==t&&a||c===e)){var l=t+" is not of type "+e;n&&(l=n+l),r||(r=0),o.Assert.assertionFailed(l,r+1)}}},o.Assert.assertObject=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"object",e,1,!1)},o.Assert.assertObjectOrNull=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"object",e,1,!0)},o.Assert.assertNonEmptyString=function(t,e){o.Assert[s]&&(o.Assert.assertType(t,"string",e,1,!1),o.Assert.assert(t.length>0,"empty string"))},o.Assert.assertString=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"string",e,1,!1)},o.Assert.assertStringOrNull=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"string",e,1,!0)},o.Assert.assertFunction=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"function",e,1,!1)},o.Assert.assertFunctionOrNull=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"function",e,1,!0)},o.Assert.assertBoolean=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"boolean",e,1,!1)},o.Assert.assertNumber=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"number",e,1,!1)},o.Assert.assertNumberOrNull=function(t,e){o.Assert[s]&&o.Assert.assertType(t,"number",e,1,!0)},o.Assert.assertArray=function(t,e){o.Assert[s]&&(Array.isArray(t)||(void 0===e&&(e=t+" is not an array"),o.Assert.assertionFailed(e,1)))},o.Assert.assertArrayOrNull=function(t,e){o.Assert[s]&&null!=t&&(Array.isArray(t)||(void 0===e&&(e=t+" is not an array"),o.Assert.assertionFailed(e,1)))},o.Assert.assertNonNumeric=function(t,e){o.Assert[s]&&(isNaN(t)||(void 0===e&&(e=t+" is convertible to a number"),o.Assert.assertionFailed(e,1)))},o.Assert.assertNumeric=function(t,e){o.Assert[s]&&isNaN(t)&&(void 0===e&&(e=t+" is not convertible to a number"),o.Assert.assertionFailed(e,1))},o.Assert.assertInSet=function(t,e,n){if(null==t||void 0===e[t.toString()]){if(void 0===n){for(var r=" is not in set: {",i=Object.keys(e),s=0;s<i.length;s++){r+=i[s],r+=","}n=t+(r+="}")}o.Assert.assertionFailed(n,1)}},o.Assert.assertionFailed=function(t,e,n){e||(e=0);var r="Assertion";throw n&&(r+=" ("+n+")"),r+=" failed: ",void 0!==t&&(r+=t),new Error(r)};var a=n.__oj_Assert_DEBUG;function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}void 0!==a&&(o.Assert[s]=a),o.CollectionUtils={},o.CollectionUtils.copyInto=function(t,e,n,r,i){return o.CollectionUtils._copyIntoImpl(t,e,n,r,i,0)},o.CollectionUtils.mergeDeep=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=o.CollectionUtils.isPlainObject,s=o.CollectionUtils.mergeDeep,a=n.shift();return i(t)&&i(a)&&Object.keys(a).forEach((function(e){i(a[e])?(t[e]||Object.assign(t,c({},e,{})),s(t[e],a[e])):Object.assign(t,c({},e,a[e]))})),s.apply(void 0,[t].concat(n))},o.CollectionUtils.isPlainObject=function(t){if(null!==t&&"object"===i(t))try{var e=Object.prototype.hasOwnProperty;if(t.constructor&&e.call(t.constructor.prototype,"isPrototypeOf"))return!0}catch(t){}return!1},o.CollectionUtils._copyIntoImpl=function(t,e,n,r,i,s){var a;if(null==i&&(i=Number.MAX_VALUE),t&&e&&t!==e)for(var c=Object.keys(e),l=0;l<c.length;l++){var u=c[l];a=n?n(u):u;var f=e[u],p=!1;if(r&&s<i){var d=t[a];o.CollectionUtils.isPlainObject(f)&&(null==d||o.CollectionUtils.isPlainObject(d))&&(p=!0,t[a]=d||{},o.CollectionUtils._copyIntoImpl(t[a],f,n,!0,i,s+1))}p||(t[a]=f)}return t},o.Object=function(){this.Init()},o.Object.superclass=null,o.Object._typeName="oj.Object",o.Object._GET_FUNCTION_NAME_REGEXP=/function\s+([\w$][\w$\d]*)\s*\(/,o.Object.prototype={},o.Object.prototype.constructor=o.Object,o.Object.createSubclass=function(t,e,n){o.Assert.assertFunction(t),o.Assert.assertFunctionOrNull(e),o.Assert.assertStringOrNull(n),void 0===e&&(e=o.Object),o.Assert.assert(t!==e,"Class can't extend itself");var r=o.Object._tempSubclassConstructor;r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.superclass=e.prototype,n&&(t._typeName=n)},o.Object.copyPropertiesForClass=function(t,e){o.Assert.assertFunction(t),o.Assert.assert(null!=e,"source object cannot be null");for(var n=Object.keys(e),r=0;r<n.length;r++){var i=n[r];t.prototype[i]=e[i]}},o.Object._tempSubclassConstructor=function(){},o.Object.prototype.getClass=function(t){if(void 0===t)t=this;else if(null===t)return null;return t.constructor},o.Object.prototype.clone=function(){var t=new this.constructor;return o.CollectionUtils.copyInto(t,this),t},o.Object.prototype.toString=function(){return this.toDebugString()},o.Object.prototype.toDebugString=function(){return this.getTypeName()+" Object"},o.Object.getTypeName=function(t){o.Assert.assertFunction(t);var e=t._typeName;if(null==e){var n=t.toString(),r=o.Object._GET_FUNCTION_NAME_REGEXP.exec(n);e=r?r[1]:"anonymous",t._typeName=e}return e},o.Object.prototype.getTypeName=function(){return o.Object.getTypeName(this.constructor)},o.Object.prototype.Init=function(){o.Assert.isDebug()&&o.Assert.assert(this.getTypeName,"Not an oj.Object");var t=this.constructor;t._initialized||o.Object._initClasses(t)},o.Object.ensureClassInitialization=function(t){o.Assert.assertFunction(t),t._initialized||o.Object._initClasses(t)},o.Object.prototype.equals=function(t){return this===t},o.Object.createCallback=function(t,e){return o.Assert.assertFunction(e),e.bind(t)},o.Object._initClasses=function(t){o.Assert.isDebug()&&(o.Assert.assertFunction(t),o.Assert.assert(!t._initialized)),t._initialized=!0;var e=t.superclass;if(e){var n=e.constructor;n&&!n._initialized&&o.Object._initClasses(n)}var r=t.InitClass;r&&r.call(t)},o.Object.compareValues=function(t,e){if(t===e)return!0;if(i(t)!==i(e))return!1;if(null===t||null===e)return!1;if(t.constructor===e.constructor){if(Array.isArray(t))return o.Object._compareArrayValues(t,e);if(t.constructor===Object)return o.Object.__innerEquals(t,e);if(t.valueOf&&"function"==typeof t.valueOf)return t.valueOf()===e.valueOf()}return!1},o.Object._compareArrayValues=function(t,e){if(t.length!==e.length)return!1;for(var n=0,r=t.length;n<r;n++)if(!o.Object.compareValues(t[n],e[n]))return!1;return!0},o.Object._compareIdIndexObject=function(t,e){if("number"==typeof t&&"number"==typeof e||"string"==typeof t&&"string"==typeof e)return t===e;if("object"===i(t)&&"object"===i(e)){if(t.id&&e.id)return t.id===e.id&&(!t.index||!e.index||t.index===e.index);if(t.index&&e.index)return t.index===e.index}return!1},o.Object._compareArrayIdIndexObject=function(t,e){if(!t)return!e||0===e.length;if(!e)return!t||0===t.length;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++){for(var r=!1,i=0;i<e.length;i++)if(o.Object._compareIdIndexObject(t[n],e[i])){r=!0;break}if(!r)return!1}return!0},o.Object.__innerEquals=function(t,e){if(t===e)return!0;if(!(t instanceof Object&&e instanceof Object))return!1;if(t.constructor!==e.constructor)return!1;var n,r,s=Object.prototype.hasOwnProperty,a=Object.keys(t);for(r=0;r<a.length;r++)if(n=a[r],s.call(t,n)){if(!s.call(e,n))return!1;if(t[n]!==e[n]){if("object"!==i(t[n]))return!1;if(!o.Object.__innerEquals(t[n],e[n]))return!1}}var c=Object.keys(e);for(r=0;r<c.length;r++)if(n=c[r],s.call(e,n)&&!s.call(t,n))return!1;return 0!==a.length||0!==c.length||JSON.stringify(t)===JSON.stringify(e)},o.Object.isEmpty=function(t){var e;if(null==t)return!0;for(e in t)if(t.hasOwnProperty(e))return!1;return!0},o.__isAmdLoaderPresent=function(){return"function"==typeof define&&define.amd},o.__getRequirePromise=function(t,e){return o.__isAmdLoaderPresent()?new Promise((function(n,r){e([t],n,r)})):null},o.StringUtils={},o.StringUtils._TRIM_ALL_RE=/^\s*|\s*$/g,o.StringUtils.isEmpty=function(t){return null===t||0===o.StringUtils.trim(t).length},o.StringUtils.isEmptyOrUndefined=function(t){return!(void 0!==t&&!o.StringUtils.isEmpty(t))},o.StringUtils.isString=function(t){return null!==t&&("string"==typeof t||t instanceof String)},o.StringUtils.trim=function(t){return o.StringUtils.isString(t)?t.replace(o.StringUtils._TRIM_ALL_RE,""):t},o.StringUtils.hashCode=function(t){var e=0;if(0===t.length)return e;for(var n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e&=e}return e},String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var n=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>n.length)&&(e=n.length),e-=t.length;var r=n.lastIndexOf(t,e);return-1!==r&&r===e});var l={accessKey:"accesskey",autocapitalize:"autocapitalize",autofocus:"autofocus",class:"class",contentEditable:"contenteditable",dir:"dir",draggable:"draggable",enterKeyHint:"enterkeyhint",hidden:"hidden",id:"id",inputMode:"inputmode",is:"is",itemid:"itemid",itemprop:"itemprop",itemref:"itemref",itemscope:"itemscope",itemtype:"itemtype",lang:"lang",nonce:"nonce",role:"role",slot:"slot",spellcheck:"spellcheck",style:"style",tabIndex:"tabindex",title:"title",translate:"translate"},u={acceptCharset:"accept-charset",allowFullscreen:"allowfullscreen",allowPaymentRequest:"allowpaymentrequest",colSpan:"colspan",crossOrigin:"crossorigin",dateTime:"datetime",dirName:"dirname",encoding:"enctype",formAction:"formaction",formEnctype:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",for:"for",httpEquiv:"http-equiv",imageSizes:"imagesizes",imageSrcset:"imagesrcset",inputMode:"inputmode",isMap:"ismap",maxLength:"maxlength",minLength:"minlength",noModule:"nomodule",noValidate:"novalidate",readOnly:"readonly",referrerPolicy:"referrerpolicy",rowSpan:"rowspan",useMap:"usemap"};o.AgentUtils=function(){},o.AgentUtils.BROWSER={IE:"ie",FIREFOX:"firefox",SAFARI:"safari",CHROME:"chrome",EDGE:"edge",EDGE_CHROMIUM:"edge-chromium",UNKNOWN:"unknown"},o.AgentUtils.ENGINE={TRIDENT:"trident",WEBKIT:"webkit",GECKO:"gecko",BLINK:"blink",EDGE_HTML:"edgehtml",UNKNOWN:"unknown"},o.AgentUtils.OS={WINDOWS:"Windows",SOLARIS:"Solaris",MAC:"Mac",UNKNOWN:"Unknown",ANDROID:"Android",IOS:"IOS",WINDOWSPHONE:"WindowsPhone",LINUX:"Linux"},o.AgentUtils.DEVICETYPE={PHONE:"phone",TABLET:"tablet",OTHERS:"others"},o.AgentUtils.getAgentInfo=function(t){o.StringUtils.isEmptyOrUndefined(t)&&(t=navigator.userAgent),t=t.toLowerCase();var e=o.StringUtils.hashCode(t),n=o.AgentUtils._currAgentInfo;if(n&&n.hashCode===e)return{os:n.os,browser:n.browser,browserVersion:n.browserVersion,deviceType:n.deviceType,engine:n.engine,engineVersion:n.engineVersion,hashCode:n.hashCode};var r=o.AgentUtils.OS.UNKNOWN,i=o.AgentUtils.BROWSER.UNKNOWN,s=0,a=o.AgentUtils.DEVICETYPE.OTHERS,c=o.AgentUtils.ENGINE.UNKNOWN,l=0;return t.indexOf("iphone")>-1||t.indexOf("ipad")>-1||"MacIntel"===navigator.platform&&void 0!==navigator.standalone?r=o.AgentUtils.OS.IOS:t.indexOf("mac")>-1?r=o.AgentUtils.OS.MAC:t.indexOf("sunos")>-1?r=o.AgentUtils.OS.SOLARIS:t.indexOf("android")>-1?r=o.AgentUtils.OS.ANDROID:t.indexOf("linux")>-1?r=o.AgentUtils.OS.LINUX:t.indexOf("windows phone")>-1?r=o.AgentUtils.OS.WINDOWSPHONE:t.indexOf("win")>-1&&(r=o.AgentUtils.OS.WINDOWS),r===o.AgentUtils.OS.ANDROID?a=t.indexOf("mobile")>-1?o.AgentUtils.DEVICETYPE.PHONE:o.AgentUtils.DEVICETYPE.TABLET:r===o.AgentUtils.OS.IOS&&(a=t.indexOf("iphone")>-1?o.AgentUtils.DEVICETYPE.PHONE:o.AgentUtils.DEVICETYPE.TABLET),t.indexOf("msie")>-1?(i=o.AgentUtils.BROWSER.IE,s=o.AgentUtils._parseFloatVersion(t,/msie (\d+[.]\d+)/),t.indexOf("trident")&&(c=o.AgentUtils.ENGINE.TRIDENT,l=o.AgentUtils._parseFloatVersion(t,/trident\/(\d+[.]\d+)/))):t.indexOf("trident")>-1?(i=o.AgentUtils.BROWSER.IE,s=o.AgentUtils._parseFloatVersion(t,/rv:(\d+[.]\d+)/),t.indexOf("trident")&&(c=o.AgentUtils.ENGINE.TRIDENT,l=o.AgentUtils._parseFloatVersion(t,/trident\/(\d+[.]\d+)/))):t.indexOf("edge")>-1?(i=o.AgentUtils.BROWSER.EDGE,s=l=o.AgentUtils._parseFloatVersion(t,/edge\/(\d+[.]\d+)/),c=o.AgentUtils.ENGINE.EDGE_HTML):t.indexOf("edg")>-1?(i=o.AgentUtils.BROWSER.EDGE_CHROMIUM,s=o.AgentUtils._parseFloatVersion(t,/edg\/(\d+[.]\d+)/),c=o.AgentUtils.ENGINE.BLINK,l=s):t.indexOf("chrome")>-1?(i=o.AgentUtils.BROWSER.CHROME,(s=o.AgentUtils._parseFloatVersion(t,/chrome\/(\d+[.]\d+)/))>=28?(c=o.AgentUtils.ENGINE.BLINK,l=s):(c=o.AgentUtils.ENGINE.WEBKIT,l=o.AgentUtils._parseFloatVersion(t,/applewebkit\/(\d+[.]\d+)/))):t.indexOf("safari")>-1?(i=o.AgentUtils.BROWSER.SAFARI,s=o.AgentUtils._parseFloatVersion(t,/version\/(\d+[.]\d+)/),c=o.AgentUtils.ENGINE.WEBKIT,l=o.AgentUtils._parseFloatVersion(t,/applewebkit\/(\d+[.]\d+)/)):t.indexOf("firefox")>-1&&(i=o.AgentUtils.BROWSER.FIREFOX,s=o.AgentUtils._parseFloatVersion(t,/rv:(\d+[.]\d+)/),c=o.AgentUtils.ENGINE.GECKO,l=o.AgentUtils._parseFloatVersion(t,/gecko\/(\d+)/)),n={hashCode:e,os:r,browser:i,browserVersion:s,deviceType:a,engine:c,engineVersion:l},o.AgentUtils._currAgentInfo=n,{os:n.os,browser:n.browser,browserVersion:n.browserVersion,deviceType:n.deviceType,engine:n.engine,engineVersion:n.engineVersion,hashCode:n.hashCode}},o.AgentUtils._parseFloatVersion=function(t,e){var n=t.match(e);if(n){var r=n[1];if(r)return parseFloat(r)}return 0},function(){var t=/(^array)|(\|array)/,e=/(^object)|(\|object)/,n=/^\s*\[[^]*\]\s*$/,r=/^\s*\{[^]*\}\s*$/,i=/^(?:\{\{)([^]+)(?:\}\})$/,s=/^(?:\[\[)([^]+)(?:\]\])$/,a={};Object.keys(l).forEach((function(t){var e=l[t];t!==e&&(a[e]=t,u[t]=e)})),o.__AttributeUtils={},o.__AttributeUtils.getExpressionInfo=function(t){var e={};if(t){var n=t.trim(),r=i.exec(n);(r=r?r[1]:null)||(e.downstreamOnly=!0,r=(r=s.exec(n))?r[1]:null),e.expr=r}return e},o.__AttributeUtils.attributeToPropertyName=function(t){return t.toLowerCase().replace(/-(.)/g,(function(t,e){return e.toUpperCase()}))},o.__AttributeUtils.propertyNameToAttribute=function(t){return t.replace(/([A-Z])/g,(function(t){return"-".concat(t.toLowerCase())}))},o.__AttributeUtils.eventTypeToEventListenerProperty=function(t){return"on"+t.substr(0,1).toUpperCase()+t.substr(1)},o.__AttributeUtils.eventListenerPropertyToEventType=function(t){return/^on[A-Z]/.test(t)?t.substr(2,1).toLowerCase()+t.substr(3):null},o.__AttributeUtils.propertyNameToChangeEventType=function(t){return t+"Changed"},o.__AttributeUtils.eventTriggerToEventType=function(t){return"oj"+t.substr(0,1).toUpperCase()+t.substr(1)},o.__AttributeUtils.coerceValue=function(i,s,a,c){var l=i.tagName.toLowerCase();if(!c)throw new Error("Unable to parse ".concat(s,"='").concat(a,"' for ").concat(l," with id '").concat(i.id,"'.         This attribute only supports data bound values. Check the API doc for supported types"));var u=c.toLowerCase(),f=n.test(a),p=r.test(a);if(t.test(u)&&f||e.test(u)&&p||"any"===u&&(f||p))try{return JSON.parse(a)}catch(t){throw new Error("Unable to parse ".concat(s,"='").concat(a,"' for ").concat(l," with id '").concat(i.id,"'           to a JSON Object. Check the value for correct JSON syntax, e.g. double quoted strings. ").concat(t))}else{if("boolean"===u)return o.__AttributeUtils.coerceBooleanValue(i,s,a,c);if("number"===u){if(!isNaN(a))return Number(a)}else{if("any"===u)return a;if(u.split("|").filter((function(t){return"string"===t.trim()})).length>0)return a}}throw new Error("Unable to parse ".concat(s,"='").concat(a,"' for ").concat(l," with id '").concat(i.id,"'       to a ").concat(c,"."))},o.__AttributeUtils.coerceBooleanValue=function(t,e,n,r){if(null==n||"true"===n||""===n||n.toLowerCase()===e)return!0;if("false"===n)return!1;throw new Error("Unable to parse "+e+"='"+n+"' for "+t+" with id "+t.id+" to a "+r+".")},o.__AttributeUtils.isGlobalOrData=function(t){return Object.prototype.hasOwnProperty.call(l,t)||t.startsWith("data-")||t.startsWith("aria-")},o.__AttributeUtils.getGlobalAttrForProp=function(t){return l[t]||t},o.__AttributeUtils.getGlobalPropForAttr=function(t){return a[t]||t},o.__AttributeUtils.getNativeAttr=function(t){return u[t]||t};var c=0;o.__AttributeUtils.getUniqueId=function(t){if(t)return t;var e="_ojcustomelem"+c;return c+=1,e}}(),"undefined"!=typeof window&&window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),r=this;do{for(e=n.length;--e>=0&&n.item(e)!==r;);}while(e<0&&(r=r.parentElement));return r}),function(){function t(t){return function(e,n,r){return t.call(this,e,n,function(t){return"boolean"==typeof t?t:!!t&&t.capture}(r))}}var e;"undefined"==typeof window||function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(t){}return t}()||(window.EventTarget?e=EventTarget.prototype:window.Node&&(e=Node.prototype),e&&(e.addEventListener=t(e.addEventListener),e.removeEventListener=t(e.removeEventListener)))}(),
/**
   * @license
   * Code taken from
   * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask
   * under "When queueMicrotask() isn't available".
   * @ignore
   */
"undefined"!=typeof window&&"function"!=typeof window.queueMicrotask&&(window.queueMicrotask=function(t){Promise.resolve().then(t).catch((function(t){setTimeout((function(){throw t}))}))}),function(){if("undefined"!=typeof window){var t;if(!((t=document.createEvent("Event")).initEvent("foo",!0,!0),t.preventDefault(),t.defaultPrevented)){var e=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(e.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}"function"!=typeof window.CustomEvent&&(n.prototype=Object.getPrototypeOf(new n("bogusEvent")),window.CustomEvent=n)}function n(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}}(),function(){function t(t){var e=document.createEvent("FocusEvent");return e.initEvent(t,!1,!1),e}"undefined"!=typeof window&&"function"!=typeof window.FocusEvent&&(t.prototype=Object.getPrototypeOf(new t("focus")),window.FocusEvent=t)}(),function(){var t,e;"undefined"!=typeof window&&!window.setImmediate&&window.postMessage&&(window.setImmediate=function(){var e=arguments[0],i=Array.prototype.slice,s=i.call(arguments,1);o.Assert.assertFunction(e);var a=n();return t||(t=new Map),t.set(a,{callback:e,args:s}),1===t.size&&window.addEventListener("message",r),window.postMessage({id:a,message:"oj-setImmediate"},"*"),a},window.clearImmediate=i);function n(){return isNaN(e)&&(e=0),e+=1}function r(e){var n=e.data;if(n&&"oj-setImmediate"===n.message){var r=n.id,o=t.get(r);if(i(r),o){var s=o.callback,a=o.args;s.apply(window,a)}}}function i(e){t&&(t.delete(e),t.size<1&&(window.removeEventListener("message",r),t=null))}}(),"undefined"!=typeof window&&(window.Symbol?(window.Symbol.asyncIterator||(window.Symbol.asyncIterator="asyncIterator"),window.Symbol.iterator||(window.Symbol.iterator="iterator")):(window.Symbol={},window.Symbol.asyncIterator="asyncIterator",window.Symbol.iterator="iterator")),function(){if("undefined"!=typeof window&&0===new window.Set([0]).size){var t=window.Set;function e(e){var n=new t;return e&&e.forEach(n.add,n),n}e.prototype=t.prototype,e.prototype.constructor=e,window.Set=e}}(),"undefined"!=typeof window&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),window.DOMTokenList&&!DOMTokenList.prototype.forEach&&(DOMTokenList.prototype.forEach=Array.prototype.forEach)),"undefined"!=typeof window&&"undefined"!==window.Node&&("isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})),o.ElementUtils={isValidCustomElementName:function(t){var e=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]).has(t),n=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t);return!e&&n&&!t.startsWith("oj-bind-",0)}},
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
o.EventSource=function(){this.Init()},o.Object.createSubclass(o.EventSource,o.Object,"oj.EventSource"),o.EventSource.prototype.Init=function(){this._eventHandlers=[],o.EventSource.superclass.Init.call(this)},o.EventSource.prototype.on=function(t,e){for(var n=!1,r=0;r<this._eventHandlers.length;r++)if(this._eventHandlers[r].eventType===t&&this._eventHandlers[r].eventHandlerFunc===e){n=!0;break}n||this._eventHandlers.push({eventType:t,eventHandlerFunc:e})},o.EventSource.prototype.off=function(t,e){for(var n=this._eventHandlers.length-1;n>=0;n--)if(this._eventHandlers[n].eventType===t&&this._eventHandlers[n].eventHandlerFunc===e){this._eventHandlers.splice(n,1);break}},o.EventSource.prototype.handleEvent=function(t,e){for(var n=0;n<this._eventHandlers.length;n++){var r=this._eventHandlers[n];if(r.eventType===t&&!1===r.eventHandlerFunc.apply(this,Array.prototype.slice.call(arguments).slice(1)))return!1}return!0},o.KeyUtils={},o.KeyUtils.equals=function(t,e){return o.Object.compareValues(t,e)};var f=n.__ojCheckpointManager;return o.CHECKPOINT_MANAGER={},o.CHECKPOINT_MANAGER.startCheckpoint=function(t,e){f&&f.startCheckpoint(t,e)},o.CHECKPOINT_MANAGER.endCheckpoint=function(t){f&&f.endCheckpoint(t)},o.CHECKPOINT_MANAGER.getRecord=function(t){return f?f.getRecord(t):void 0},o.CHECKPOINT_MANAGER.matchRecords=function(t){return f?f.matchRecords(t):[]},o.CHECKPOINT_MANAGER.dump=function(t){e.info((function(){for(var e="Checkpoint Records:",n=o.CHECKPOINT_MANAGER.matchRecords(t),r=0;r<n.length;r++){var i=n[r];e=e+"\n"+i.name;var s=i.description;null!=s&&(e=e+" ("+s+")"),e=(e+=":\n")+"start: "+i.start+"\tduration: "+i.duration}return e}))},o}));