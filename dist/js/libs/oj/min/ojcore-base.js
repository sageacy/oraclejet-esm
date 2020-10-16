/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define("polyfills",[]),define("promise",["polyfills"],(function(){return Promise.polyfill=function(){},Promise})),define(["require","ojs/ojlogger","polyfills"],(function(e,t){"use strict";var n={};"undefined"!=typeof window?n=window:"undefined"!=typeof self&&(n=self);var r=n.oj,o={version:"9.2.0",revision:"2020-10-07_10-26-04",noConflict:function(){n.oj=r},_registerLegacyNamespaceProp:function(e,t){this[e]=t}};n.oj=o,o.Assert={};var s="DEBUG";o.Assert.forceDebug=function(){o.Assert[s]=!0},o.Assert.clearDebug=function(){o.Assert[s]=!1},o.Assert.isDebug=function(){return!0===o.Assert[s]},o.Assert.assert=function(e,t){if(o.Assert[s]&&!e){var n=t||"";if(arguments.length>2){n+="(";for(var r=2;r<arguments.length;r+=1)n+=arguments[r];n+=")"}o.Assert.assertionFailed(n,1)}},o.Assert.failedInAbstractFunction=function(){o.Assert[s]&&o.Assert.assertionFailed("Abstract function called",1)},o.Assert.assertPrototype=function(e,t,n){if(o.Assert[s]){var r=t.prototype;if(null!=e)o.Assert.assertType(t,"function",null,1,!1),Object.prototype.isPrototypeOf.call(r,e)||o.Assert.assertionFailed("object '"+e+"' doesn't match prototype "+r,1,n);else o.Assert.assertionFailed("null object doesn't match prototype "+r,1,n)}},o.Assert.assertPrototypeOrNull=function(e,t,n){if(o.Assert[s]&&null!=e){o.Assert.assertType(t,"function",null,1,!1);var r=t.prototype;Object.prototype.isPrototypeOf.call(r,e)||o.Assert.assertionFailed("object '"+e+"' doesn't match prototype "+r,1,n)}},o.Assert.assertPrototypes=function(e,t,n,r){if(o.Assert[s]){var i=t.prototype,a=n.prototype,l=Object.prototype.isPrototypeOf;l.call(i,e)||l.call(a,e)||o.Assert.assertionFailed("object '"+e+"' doesn't match prototype "+i+" or "+a,1,r)}},o.Assert.assertDomNodeOrNull=function(e,t){o.Assert[s]&&e&&void 0===e.nodeType&&o.Assert.assertionFailed(e+" is not a DOM Node",t+1)},o.Assert.assertDomNode=function(e,t){o.Assert[s]&&(e&&void 0!==e.nodeType||o.Assert.assertionFailed(e+" is not a DOM Node",t+1))},o.Assert.assertDomElement=function(e,t){o.Assert[s]&&(o.Assert.assertDomNode(e,1),1!==e.nodeType?o.Assert.assertionFailed(e+" is not a DOM Element",1):t&&e.nodeName!==t&&o.Assert.assertionFailed(e+" is not a "+t+" Element",1))},o.Assert.assertDomElementOrNull=function(e,t){o.Assert[s]&&null!=e&&(o.Assert.assertDomNode(e,1),1!==e.nodeType?o.Assert.assertionFailed(e+" is not a DOM Element",1):t&&e.nodeName!==t&&o.Assert.assertionFailed(e+" is not a "+t+" Element",1))},o.Assert.assertType=function(e,t,n,r,i){if(o.Assert[s]&&!(null==e&&i||typeof e===t)){var a=e+" is not of type "+t;n&&(a=n+a),r||(r=0),o.Assert.assertionFailed(a,r+1)}},o.Assert.assertObject=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"object",t,1,!1)},o.Assert.assertObjectOrNull=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"object",t,1,!0)},o.Assert.assertNonEmptyString=function(e,t){o.Assert[s]&&(o.Assert.assertType(e,"string",t,1,!1),o.Assert.assert(e.length>0,"empty string"))},o.Assert.assertString=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"string",t,1,!1)},o.Assert.assertStringOrNull=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"string",t,1,!0)},o.Assert.assertFunction=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"function",t,1,!1)},o.Assert.assertFunctionOrNull=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"function",t,1,!0)},o.Assert.assertBoolean=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"boolean",t,1,!1)},o.Assert.assertNumber=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"number",t,1,!1)},o.Assert.assertNumberOrNull=function(e,t){o.Assert[s]&&o.Assert.assertType(e,"number",t,1,!0)},o.Assert.assertArray=function(e,t){o.Assert[s]&&(Array.isArray(e)||(void 0===t&&(t=e+" is not an array"),o.Assert.assertionFailed(t,1)))},o.Assert.assertArrayOrNull=function(e,t){o.Assert[s]&&null!=e&&(Array.isArray(e)||(void 0===t&&(t=e+" is not an array"),o.Assert.assertionFailed(t,1)))},o.Assert.assertNonNumeric=function(e,t){o.Assert[s]&&(isNaN(e)||(void 0===t&&(t=e+" is convertible to a number"),o.Assert.assertionFailed(t,1)))},o.Assert.assertNumeric=function(e,t){o.Assert[s]&&isNaN(e)&&(void 0===t&&(t=e+" is not convertible to a number"),o.Assert.assertionFailed(t,1))},o.Assert.assertInSet=function(e,t,n){if(null==e||void 0===t[e.toString()]){if(void 0===n){for(var r=" is not in set: {",s=Object.keys(t),i=0;i<s.length;i++){r+=s[i],r+=","}n=e+(r+="}")}o.Assert.assertionFailed(n,1)}},o.Assert.assertionFailed=function(e,t,n){t||(t=0);var r="Assertion";throw n&&(r+=" ("+n+")"),r+=" failed: ",void 0!==e&&(r+=e),new Error(r)};var i=n.__oj_Assert_DEBUG;void 0!==i&&(o.Assert[s]=i),o.CollectionUtils={},o.CollectionUtils.copyInto=function(e,t,n,r,s){return o.CollectionUtils._copyIntoImpl(e,t,n,r,s,0)},o.CollectionUtils.mergeDeep=function(e,...t){if(!t.length)return e;const n=o.CollectionUtils.isPlainObject,r=o.CollectionUtils.mergeDeep,s=t.shift();return n(e)&&n(s)&&Object.keys(s).forEach(t=>{n(s[t])?(e[t]||Object.assign(e,{[t]:{}}),r(e[t],s[t])):Object.assign(e,{[t]:s[t]})}),r(e,...t)},o.CollectionUtils.isPlainObject=function(e){if(null!==e&&"object"==typeof e)try{var t=Object.prototype.hasOwnProperty;if(e.constructor&&t.call(e.constructor.prototype,"isPrototypeOf"))return!0}catch(e){}return!1},o.CollectionUtils._copyIntoImpl=function(e,t,n,r,s,i){var a;if(null==s&&(s=Number.MAX_VALUE),e&&t&&e!==t)for(var l=Object.keys(t),c=0;c<l.length;c++){var u=l[c];a=n?n(u):u;var f=t[u],d=!1;if(r&&i<s){var p=e[a];o.CollectionUtils.isPlainObject(f)&&(null==p||o.CollectionUtils.isPlainObject(p))&&(d=!0,e[a]=p||{},o.CollectionUtils._copyIntoImpl(e[a],f,n,!0,s,i+1))}d||(e[a]=f)}return e},o.Object=function(){this.Init()},o.Object.superclass=null,o.Object._typeName="oj.Object",o.Object._GET_FUNCTION_NAME_REGEXP=/function\s+([\w$][\w$\d]*)\s*\(/,o.Object.prototype={},o.Object.prototype.constructor=o.Object,o.Object.createSubclass=function(e,t,n){o.Assert.assertFunction(e),o.Assert.assertFunctionOrNull(t),o.Assert.assertStringOrNull(n),void 0===t&&(t=o.Object),o.Assert.assert(e!==t,"Class can't extend itself");var r=o.Object._tempSubclassConstructor;r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.superclass=t.prototype,n&&(e._typeName=n)},o.Object.copyPropertiesForClass=function(e,t){o.Assert.assertFunction(e),o.Assert.assert(null!=t,"source object cannot be null");for(var n=Object.keys(t),r=0;r<n.length;r++){var s=n[r];e.prototype[s]=t[s]}},o.Object._tempSubclassConstructor=function(){},o.Object.prototype.getClass=function(e){if(void 0===e)e=this;else if(null===e)return null;return e.constructor},o.Object.prototype.clone=function(){var e=new this.constructor;return o.CollectionUtils.copyInto(e,this),e},o.Object.prototype.toString=function(){return this.toDebugString()},o.Object.prototype.toDebugString=function(){return this.getTypeName()+" Object"},o.Object.getTypeName=function(e){o.Assert.assertFunction(e);var t=e._typeName;if(null==t){var n=e.toString(),r=o.Object._GET_FUNCTION_NAME_REGEXP.exec(n);t=r?r[1]:"anonymous",e._typeName=t}return t},o.Object.prototype.getTypeName=function(){return o.Object.getTypeName(this.constructor)},o.Object.prototype.Init=function(){o.Assert.isDebug()&&o.Assert.assert(this.getTypeName,"Not an oj.Object");var e=this.constructor;e._initialized||o.Object._initClasses(e)},o.Object.ensureClassInitialization=function(e){o.Assert.assertFunction(e),e._initialized||o.Object._initClasses(e)},o.Object.prototype.equals=function(e){return this===e},o.Object.createCallback=function(e,t){return o.Assert.assertFunction(t),t.bind(e)},o.Object._initClasses=function(e){o.Assert.isDebug()&&(o.Assert.assertFunction(e),o.Assert.assert(!e._initialized)),e._initialized=!0;var t=e.superclass;if(t){var n=t.constructor;n&&!n._initialized&&o.Object._initClasses(n)}var r=e.InitClass;r&&r.call(e)},o.Object.compareValues=function(e,t){if(e===t)return!0;if(typeof e!==typeof t)return!1;if(null===e||null===t)return!1;if(e.constructor===t.constructor){if(Array.isArray(e))return o.Object._compareArrayValues(e,t);if(e.constructor===Object)return o.Object.__innerEquals(e,t);if(e.valueOf&&"function"==typeof e.valueOf)return e.valueOf()===t.valueOf()}return!1},o.Object._compareArrayValues=function(e,t){if(e.length!==t.length)return!1;for(var n=0,r=e.length;n<r;n++)if(!o.Object.compareValues(e[n],t[n]))return!1;return!0},o.Object._compareIdIndexObject=function(e,t){if("number"==typeof e&&"number"==typeof t||"string"==typeof e&&"string"==typeof t)return e===t;if("object"==typeof e&&"object"==typeof t){if(e.id&&t.id)return e.id===t.id&&(!e.index||!t.index||e.index===t.index);if(e.index&&t.index)return e.index===t.index}return!1},o.Object._compareArrayIdIndexObject=function(e,t){if(!e)return!t||0===t.length;if(!t)return!e||0===e.length;if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++){for(var r=!1,s=0;s<t.length;s++)if(o.Object._compareIdIndexObject(e[n],t[s])){r=!0;break}if(!r)return!1}return!0},o.Object.__innerEquals=function(e,t){if(e===t)return!0;if(!(e instanceof Object&&t instanceof Object))return!1;if(e.constructor!==t.constructor)return!1;var n,r,s=Object.prototype.hasOwnProperty,i=Object.keys(e);for(r=0;r<i.length;r++)if(n=i[r],s.call(e,n)){if(!s.call(t,n))return!1;if(e[n]!==t[n]){if("object"!=typeof e[n])return!1;if(!o.Object.__innerEquals(e[n],t[n]))return!1}}var a=Object.keys(t);for(r=0;r<a.length;r++)if(n=a[r],s.call(t,n)&&!s.call(e,n))return!1;return 0!==i.length||0!==a.length||JSON.stringify(e)===JSON.stringify(t)},o.Object.isEmpty=function(e){var t;if(null==e)return!0;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},o.__isAmdLoaderPresent=function(){return"function"==typeof define&&define.amd},o.__getRequirePromise=function(e,t){return o.__isAmdLoaderPresent()?new Promise((function(n,r){t([e],n,r)})):null},o.StringUtils={},o.StringUtils._TRIM_ALL_RE=/^\s*|\s*$/g,o.StringUtils.isEmpty=function(e){return null===e||0===o.StringUtils.trim(e).length},o.StringUtils.isEmptyOrUndefined=function(e){return!(void 0!==e&&!o.StringUtils.isEmpty(e))},o.StringUtils.isString=function(e){return null!==e&&("string"==typeof e||e instanceof String)},o.StringUtils.trim=function(e){return o.StringUtils.isString(e)?e.replace(o.StringUtils._TRIM_ALL_RE,""):e},o.StringUtils.hashCode=function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t},String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var n=this.toString();("number"!=typeof t||!isFinite(t)||Math.floor(t)!==t||t>n.length)&&(t=n.length),t-=e.length;var r=n.lastIndexOf(e,t);return-1!==r&&r===t});var a={accessKey:"accesskey",autocapitalize:"autocapitalize",autofocus:"autofocus",class:"class",contentEditable:"contenteditable",dir:"dir",draggable:"draggable",enterKeyHint:"enterkeyhint",hidden:"hidden",id:"id",inputMode:"inputmode",is:"is",itemid:"itemid",itemprop:"itemprop",itemref:"itemref",itemscope:"itemscope",itemtype:"itemtype",lang:"lang",nonce:"nonce",role:"role",slot:"slot",spellcheck:"spellcheck",style:"style",tabIndex:"tabindex",title:"title",translate:"translate"},l={acceptCharset:"accept-charset",allowFullscreen:"allowfullscreen",allowPaymentRequest:"allowpaymentrequest",colSpan:"colspan",crossOrigin:"crossorigin",dateTime:"datetime",dirName:"dirname",encoding:"enctype",formAction:"formaction",formEnctype:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",for:"for",httpEquiv:"http-equiv",imageSizes:"imagesizes",imageSrcset:"imagesrcset",inputMode:"inputmode",isMap:"ismap",maxLength:"maxlength",minLength:"minlength",noModule:"nomodule",noValidate:"novalidate",readOnly:"readonly",referrerPolicy:"referrerpolicy",rowSpan:"rowspan",useMap:"usemap"};o.AgentUtils=function(){},o.AgentUtils.BROWSER={IE:"ie",FIREFOX:"firefox",SAFARI:"safari",CHROME:"chrome",EDGE:"edge",EDGE_CHROMIUM:"edge-chromium",UNKNOWN:"unknown"},o.AgentUtils.ENGINE={TRIDENT:"trident",WEBKIT:"webkit",GECKO:"gecko",BLINK:"blink",EDGE_HTML:"edgehtml",UNKNOWN:"unknown"},o.AgentUtils.OS={WINDOWS:"Windows",SOLARIS:"Solaris",MAC:"Mac",UNKNOWN:"Unknown",ANDROID:"Android",IOS:"IOS",WINDOWSPHONE:"WindowsPhone",LINUX:"Linux"},o.AgentUtils.DEVICETYPE={PHONE:"phone",TABLET:"tablet",OTHERS:"others"},o.AgentUtils.getAgentInfo=function(e){o.StringUtils.isEmptyOrUndefined(e)&&(e=navigator.userAgent),e=e.toLowerCase();var t=o.StringUtils.hashCode(e),n=o.AgentUtils._currAgentInfo;if(n&&n.hashCode===t)return{os:n.os,browser:n.browser,browserVersion:n.browserVersion,deviceType:n.deviceType,engine:n.engine,engineVersion:n.engineVersion,hashCode:n.hashCode};var r=o.AgentUtils.OS.UNKNOWN,s=o.AgentUtils.BROWSER.UNKNOWN,i=0,a=o.AgentUtils.DEVICETYPE.OTHERS,l=o.AgentUtils.ENGINE.UNKNOWN,c=0;return e.indexOf("iphone")>-1||e.indexOf("ipad")>-1||"MacIntel"===navigator.platform&&void 0!==navigator.standalone?r=o.AgentUtils.OS.IOS:e.indexOf("mac")>-1?r=o.AgentUtils.OS.MAC:e.indexOf("sunos")>-1?r=o.AgentUtils.OS.SOLARIS:e.indexOf("android")>-1?r=o.AgentUtils.OS.ANDROID:e.indexOf("linux")>-1?r=o.AgentUtils.OS.LINUX:e.indexOf("windows phone")>-1?r=o.AgentUtils.OS.WINDOWSPHONE:e.indexOf("win")>-1&&(r=o.AgentUtils.OS.WINDOWS),r===o.AgentUtils.OS.ANDROID?a=e.indexOf("mobile")>-1?o.AgentUtils.DEVICETYPE.PHONE:o.AgentUtils.DEVICETYPE.TABLET:r===o.AgentUtils.OS.IOS&&(a=e.indexOf("iphone")>-1?o.AgentUtils.DEVICETYPE.PHONE:o.AgentUtils.DEVICETYPE.TABLET),e.indexOf("msie")>-1?(s=o.AgentUtils.BROWSER.IE,i=o.AgentUtils._parseFloatVersion(e,/msie (\d+[.]\d+)/),e.indexOf("trident")&&(l=o.AgentUtils.ENGINE.TRIDENT,c=o.AgentUtils._parseFloatVersion(e,/trident\/(\d+[.]\d+)/))):e.indexOf("trident")>-1?(s=o.AgentUtils.BROWSER.IE,i=o.AgentUtils._parseFloatVersion(e,/rv:(\d+[.]\d+)/),e.indexOf("trident")&&(l=o.AgentUtils.ENGINE.TRIDENT,c=o.AgentUtils._parseFloatVersion(e,/trident\/(\d+[.]\d+)/))):e.indexOf("edge")>-1?(s=o.AgentUtils.BROWSER.EDGE,i=c=o.AgentUtils._parseFloatVersion(e,/edge\/(\d+[.]\d+)/),l=o.AgentUtils.ENGINE.EDGE_HTML):e.indexOf("edg")>-1?(s=o.AgentUtils.BROWSER.EDGE_CHROMIUM,i=o.AgentUtils._parseFloatVersion(e,/edg\/(\d+[.]\d+)/),l=o.AgentUtils.ENGINE.BLINK,c=i):e.indexOf("chrome")>-1?(s=o.AgentUtils.BROWSER.CHROME,(i=o.AgentUtils._parseFloatVersion(e,/chrome\/(\d+[.]\d+)/))>=28?(l=o.AgentUtils.ENGINE.BLINK,c=i):(l=o.AgentUtils.ENGINE.WEBKIT,c=o.AgentUtils._parseFloatVersion(e,/applewebkit\/(\d+[.]\d+)/))):e.indexOf("safari")>-1?(s=o.AgentUtils.BROWSER.SAFARI,i=o.AgentUtils._parseFloatVersion(e,/version\/(\d+[.]\d+)/),l=o.AgentUtils.ENGINE.WEBKIT,c=o.AgentUtils._parseFloatVersion(e,/applewebkit\/(\d+[.]\d+)/)):e.indexOf("firefox")>-1&&(s=o.AgentUtils.BROWSER.FIREFOX,i=o.AgentUtils._parseFloatVersion(e,/rv:(\d+[.]\d+)/),l=o.AgentUtils.ENGINE.GECKO,c=o.AgentUtils._parseFloatVersion(e,/gecko\/(\d+)/)),n={hashCode:t,os:r,browser:s,browserVersion:i,deviceType:a,engine:l,engineVersion:c},o.AgentUtils._currAgentInfo=n,{os:n.os,browser:n.browser,browserVersion:n.browserVersion,deviceType:n.deviceType,engine:n.engine,engineVersion:n.engineVersion,hashCode:n.hashCode}},o.AgentUtils._parseFloatVersion=function(e,t){var n=e.match(t);if(n){var r=n[1];if(r)return parseFloat(r)}return 0},function(){var e=/(^array)|(\|array)/,t=/(^object)|(\|object)/,n=/^\s*\[[^]*\]\s*$/,r=/^\s*\{[^]*\}\s*$/,s=/^(?:\{\{)([^]+)(?:\}\})$/,i=/^(?:\[\[)([^]+)(?:\]\])$/,c={};Object.keys(a).forEach((function(e){var t=a[e];e!==t&&(c[t]=e,l[e]=t)})),o.__AttributeUtils={},o.__AttributeUtils.getExpressionInfo=function(e){var t={};if(e){var n=e.trim(),r=s.exec(n);(r=r?r[1]:null)||(t.downstreamOnly=!0,r=(r=i.exec(n))?r[1]:null),t.expr=r}return t},o.__AttributeUtils.attributeToPropertyName=function(e){return e.toLowerCase().replace(/-(.)/g,(e,t)=>t.toUpperCase())},o.__AttributeUtils.propertyNameToAttribute=function(e){return e.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())},o.__AttributeUtils.eventTypeToEventListenerProperty=function(e){return"on"+e.substr(0,1).toUpperCase()+e.substr(1)},o.__AttributeUtils.eventListenerPropertyToEventType=function(e){return/^on[A-Z]/.test(e)?e.substr(2,1).toLowerCase()+e.substr(3):null},o.__AttributeUtils.propertyNameToChangeEventType=function(e){return e+"Changed"},o.__AttributeUtils.eventTriggerToEventType=function(e){return"oj"+e.substr(0,1).toUpperCase()+e.substr(1)},o.__AttributeUtils.coerceValue=function(s,i,a,l){var c=s.tagName.toLowerCase();if(!l)throw new Error(`Unable to parse ${i}='${a}' for ${c} with id '${s.id}'.         This attribute only supports data bound values. Check the API doc for supported types`);var u=l.toLowerCase(),f=n.test(a),d=r.test(a);if(e.test(u)&&f||t.test(u)&&d||"any"===u&&(f||d))try{return JSON.parse(a)}catch(e){throw new Error(`Unable to parse ${i}='${a}' for ${c} with id '${s.id}'           to a JSON Object. Check the value for correct JSON syntax, e.g. double quoted strings. ${e}`)}else{if("boolean"===u)return o.__AttributeUtils.coerceBooleanValue(s,i,a,l);if("number"===u){if(!isNaN(a))return Number(a)}else{if("any"===u)return a;if(u.split("|").filter(e=>"string"===e.trim()).length>0)return a}}throw new Error(`Unable to parse ${i}='${a}' for ${c} with id '${s.id}'       to a ${l}.`)},o.__AttributeUtils.coerceBooleanValue=function(e,t,n,r){if(null==n||"true"===n||""===n||n.toLowerCase()===t)return!0;if("false"===n)return!1;throw new Error("Unable to parse "+t+"='"+n+"' for "+e+" with id "+e.id+" to a "+r+".")},o.__AttributeUtils.isGlobalOrData=function(e){return Object.prototype.hasOwnProperty.call(a,e)||e.startsWith("data-")||e.startsWith("aria-")},o.__AttributeUtils.getGlobalAttrForProp=function(e){return a[e]||e},o.__AttributeUtils.getGlobalPropForAttr=function(e){return c[e]||e},o.__AttributeUtils.getNativeAttr=function(e){return l[e]||e};var u=0;o.__AttributeUtils.getUniqueId=function(e){if(e)return e;var t="_ojcustomelem"+u;return u+=1,t}}(),"undefined"!=typeof window&&window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),r=this;do{for(t=n.length;--t>=0&&n.item(t)!==r;);}while(t<0&&(r=r.parentElement));return r}),function(){function e(e){return function(t,n,r){return e.call(this,t,n,function(e){return"boolean"==typeof e?e:!!e&&e.capture}(r))}}if("undefined"!=typeof window&&!function(){let e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}()){let t;window.EventTarget?t=EventTarget.prototype:window.Node&&(t=Node.prototype),t&&(t.addEventListener=e(t.addEventListener),t.removeEventListener=e(t.removeEventListener))}}(),
/**
   * @license
   * Code taken from
   * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask
   * under "When queueMicrotask() isn't available".
   * @ignore
   */
"undefined"!=typeof window&&"function"!=typeof window.queueMicrotask&&(window.queueMicrotask=function(e){Promise.resolve().then(e).catch((function(e){setTimeout((function(){throw e}))}))}),function(){if("undefined"!=typeof window){var e;if(!((e=document.createEvent("Event")).initEvent("foo",!0,!0),e.preventDefault(),e.defaultPrevented)){var t=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(t.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}"function"!=typeof window.CustomEvent&&(n.prototype=Object.getPrototypeOf(new n("bogusEvent")),window.CustomEvent=n)}function n(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}}(),function(){function e(e){var t=document.createEvent("FocusEvent");return t.initEvent(e,!1,!1),t}"undefined"!=typeof window&&"function"!=typeof window.FocusEvent&&(e.prototype=Object.getPrototypeOf(new e("focus")),window.FocusEvent=e)}(),function(){var e,t;"undefined"!=typeof window&&!window.setImmediate&&window.postMessage&&(window.setImmediate=function(){var t=arguments[0],s=Array.prototype.slice,i=s.call(arguments,1);o.Assert.assertFunction(t);var a=n();return e||(e=new Map),e.set(a,{callback:t,args:i}),1===e.size&&window.addEventListener("message",r),window.postMessage({id:a,message:"oj-setImmediate"},"*"),a},window.clearImmediate=s);function n(){return isNaN(t)&&(t=0),t+=1}function r(t){var n=t.data;if(n&&"oj-setImmediate"===n.message){var r=n.id,o=e.get(r);if(s(r),o){var i=o.callback,a=o.args;i.apply(window,a)}}}function s(t){e&&(e.delete(t),e.size<1&&(window.removeEventListener("message",r),e=null))}}(),"undefined"!=typeof window&&(window.Symbol?(window.Symbol.asyncIterator||(window.Symbol.asyncIterator="asyncIterator"),window.Symbol.iterator||(window.Symbol.iterator="iterator")):(window.Symbol={},window.Symbol.asyncIterator="asyncIterator",window.Symbol.iterator="iterator")),function(){if("undefined"!=typeof window&&0===new window.Set([0]).size){var e=window.Set;function t(t){var n=new e;return t&&t.forEach(n.add,n),n}t.prototype=e.prototype,t.prototype.constructor=t,window.Set=t}}(),"undefined"!=typeof window&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),window.DOMTokenList&&!DOMTokenList.prototype.forEach&&(DOMTokenList.prototype.forEach=Array.prototype.forEach)),"undefined"!=typeof window&&"undefined"!==window.Node&&("isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})),o.ElementUtils={isValidCustomElementName:function(e){var t=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]).has(e),n=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(e);return!t&&n&&!e.startsWith("oj-bind-",0)}},
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
o.EventSource=function(){this.Init()},o.Object.createSubclass(o.EventSource,o.Object,"oj.EventSource"),o.EventSource.prototype.Init=function(){this._eventHandlers=[],o.EventSource.superclass.Init.call(this)},o.EventSource.prototype.on=function(e,t){for(var n=!1,r=0;r<this._eventHandlers.length;r++)if(this._eventHandlers[r].eventType===e&&this._eventHandlers[r].eventHandlerFunc===t){n=!0;break}n||this._eventHandlers.push({eventType:e,eventHandlerFunc:t})},o.EventSource.prototype.off=function(e,t){for(var n=this._eventHandlers.length-1;n>=0;n--)if(this._eventHandlers[n].eventType===e&&this._eventHandlers[n].eventHandlerFunc===t){this._eventHandlers.splice(n,1);break}},o.EventSource.prototype.handleEvent=function(e,t){for(var n=0;n<this._eventHandlers.length;n++){var r=this._eventHandlers[n];if(r.eventType===e&&!1===r.eventHandlerFunc.apply(this,Array.prototype.slice.call(arguments).slice(1)))return!1}return!0},o.KeyUtils={},o.KeyUtils.equals=function(e,t){return o.Object.compareValues(e,t)};var c=n.__ojCheckpointManager;return o.CHECKPOINT_MANAGER={},o.CHECKPOINT_MANAGER.startCheckpoint=function(e,t){c&&c.startCheckpoint(e,t)},o.CHECKPOINT_MANAGER.endCheckpoint=function(e){c&&c.endCheckpoint(e)},o.CHECKPOINT_MANAGER.getRecord=function(e){return c?c.getRecord(e):void 0},o.CHECKPOINT_MANAGER.matchRecords=function(e){return c?c.matchRecords(e):[]},o.CHECKPOINT_MANAGER.dump=function(e){t.info((function(){for(var t="Checkpoint Records:",n=o.CHECKPOINT_MANAGER.matchRecords(e),r=0;r<n.length;r++){var s=n[r];t=t+"\n"+s.name;var i=s.description;null!=i&&(t=t+" ("+i+")"),t=(t+=":\n")+"start: "+s.start+"\tduration: "+s.duration}return t}))},o}));