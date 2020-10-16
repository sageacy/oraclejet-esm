/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojconfig"],(function(e,r){"use strict";var n={setBundle:function(e){n._bundle=e},getResource:function(e){return n._getResourceString(e)},applyParameters:function(e,r){return null==e?null:n._format(e,r)},getTranslatedString:function(e,r){var t=n._getResourceString(e);if(null==t)return e;var u={};return arguments.length>2?u=Array.prototype.slice.call(arguments,1):2===arguments.length&&("object"==typeof(u=arguments[1])||u instanceof Array||(u=[u])),n.applyParameters(t,u)},getComponentTranslations:function(e){var r=n._getBundle()[e];if(null==r)return{};for(var t={},u=Object.keys(r),a=0;a<u.length;a++){var l=u[a];t[l]=r[l]}return t},_getResourceString:function(r){var t=r?r.split("."):[],u=n._getBundle();e.Assert.assertObject(u);for(var a=0;a<t.length&&null!=u;a++){u=u[t[a]]}return null!=u?u:null},_format:function(e,r){var n,t,u=e.length,a=[],l=null,s=!1,o=!1,i=!1,c=!1;for(t=0;t<u;t++){var f=e.charAt(t),g=!1;if(s)g=!0,s=!1;else switch(f){case"$":s=!0;break;case"{":c||(o||(n=!1,l=[]),o=!0);break;case"}":if(o&&l.length>0){var d=r[l.join("")];a.push(void 0===d?"null":d)}o=!1;break;case"[":o||(i?c=!0:i=!0);break;case"]":c?c=!1:i=!1;break;default:g=!0}g&&(o?","===f||" "===f?n=!0:n||l.push(f):c||a.push(f))}return a.join("")},_getBundle:function(){var t=n._bundle;if(t)return t;if(e.__isAmdLoaderPresent()){var u=r.getConfigBundle();return e.Assert.assert(void 0!==u,"ojtranslations module must be defined"),u}return{}}};return n}));