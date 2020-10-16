/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojarraydataprovider","ojs/ojeventtarget","ojs/ojtreedataprovider"],(function(e,t){"use strict";e.ArrayDataProvider;class r{constructor(t,r,a){this.treeData=t,this.options=r,this._rootDataProvider=a,this.TreeAsyncIterator=class{constructor(e,t){this._parent=e,this._baseIterable=t}next(){let e=this;return this._baseIterable[Symbol.asyncIterator]().next().then((function(t){let r=t.value.metadata;for(let a=0;a<r.length;a++)r[a]=e._parent._getNodeMetadata(t.value.data[a]);return t}))}},this.TreeAsyncIterable=class{constructor(e,t){this._parent=e,this._asyncIterator=t,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}},this._baseDataProvider=new e.ArrayDataProvider(t,r),this._mapKeyToNode=new Map,this._mapNodeToKey=new Map,this._mapArrayToSequenceNum=new Map,this._mapKoArrayToSubscriptions=new Map,null==a&&this._processTreeArray(t,[])}containsKeys(e){return this.fetchByKeys(e).then((function(t){let r=new Set;return e.keys.forEach((function(e){null!=t.results.get(e)&&r.add(e)})),Promise.resolve({containsParameters:e,results:r})}))}getCapability(e){return this._baseDataProvider.getCapability(e)}getTotalSize(){return this._baseDataProvider.getTotalSize()}isEmpty(){return this._baseDataProvider.isEmpty()}getChildDataProvider(e,t){let a=this._getNodeForKey(e);if(a){let e=this._getChildren(a);if(e){return new r(e,this.options,this._getRootDataProvider())}}return null}fetchFirst(e){if(e&&e.filterCriterion){let r=t.extend({},e);r.filterCriterion=this._getLeafNodeFilter(r.filterCriterion),r.filterCriterion.filter=e.filterCriterion.filter,e=r}let r=this._baseDataProvider.fetchFirst(e);return new this.TreeAsyncIterable(this,new this.TreeAsyncIterator(this,r))}fetchByOffset(e){let t=this._baseDataProvider.fetchByOffset(e),r=this;return t.then((function(e){let t=e.results,a=[];for(let e=0;e<t.length;e++){let s=t[e].metadata,i=t[e].data;s=r._getNodeMetadata(i),a.push({data:i,metadata:s})}return{done:e.done,fetchParameters:e.fetchParameters,results:a}}))}fetchByKeys(e){let t=this,r=new Map;return e.keys.forEach((function(e){let a=t._getNodeForKey(e);a&&r.set(e,{metadata:{key:e},data:a})})),Promise.resolve({fetchParameters:e,results:r})}_getChildren(e){let t=this.options&&this.options.childrenAttribute?this.options.childrenAttribute:"children";return this._getVal(e,t,!0)}_getRootDataProvider(){return this._rootDataProvider?this._rootDataProvider:this}_subscribeObservableArray(t,r){if("function"!=typeof t||!t.subscribe||void 0===t.destroyAll)throw new Error("Invalid data type. ArrayTreeDataProvider only supports Array or observableArray.");var a=this,s=null,i=new Array(2);i[0]=t.subscribe((function(i){let n,o,l,u=[],d=[],h=[],y=[],p=[],c=null,f=null,_=null,g=[];for(n=0;n<i.length;n++){l=i[n].index,status=i[n].status;let t=a._getId(i[n].value);if(t)for(o=0;o<i.length;o++)if(o!=n&&l===i[o].index&&status!==i[o].status&&p.indexOf(n)<0&&g.indexOf(n)<0){let r=a._getId(i[o].value);e.Object.compareValues(t,r)&&("deleted"===status?(g.push(n),p.push(o),a._releaseNode(i[n].value)):(g.push(o),p.push(n)))}}for(n=0;n<i.length;n++)if("deleted"===i[n].status&&p.indexOf(n)<0&&g.indexOf(n)<0){let e=i[n].value,t=a._getKeyForNode(e);d.push(t),u.push(e),h.push(i[n].index),a._releaseNode(e)}if(d.length>0){y=d.map((function(e){return{key:e}}));let e=new Set;d.map((function(t){e.add(t)})),_={data:u,indexes:h,keys:e,metadata:y}}u=[],d=[],h=[],y=[];let b=t(),v=[],m=[],A=[],N=[];for(n=0;n<i.length;n++)if("added"===i[n].status&&g.indexOf(n)<0){let e=i[n].value,s=a._processNode(e,r,t);p.indexOf(n)<0?(d.push(s.key),u.push(e),h.push(i[n].index),y.push({key:s.key})):(v.push(s.key),m.push(e),A.push(i[n].index),N.push({key:s.key}))}if(d.length>0){let e=new Set;d.map((function(t){e.add(t)}));let t,s=new Set,i=[],n=[];t=a.options&&a.options.keyAttributes&&"siblings"!==a.options.keyAttributesScope?r.length>0?r[r.length-1]:null:r.length>0?r:null,h.map((function(e){let r;r=e>=b.length-1?"":a._getKeyForNode(b[e+1]),s.add(r),i.push(r),n.push(t)})),f={afterKeys:s,addBeforeKeys:i,parentKeys:n,data:u,indexes:h,keys:e,metadata:y}}if(v.length>0){let e=new Set;v.map((function(t){e.add(t)})),c={data:m,indexes:A,keys:e,metadata:N}}s=new e.DataProviderMutationEvent({add:f,remove:_,update:c})}),null,"arrayChange"),i[1]=t.subscribe((function(t){s?a.dispatchEvent(s):a.dispatchEvent(new e.DataProviderRefreshEvent),s=null}),null,"change"),this._mapKoArrayToSubscriptions.set(t,i)}_unsubscribeObservableArray(e){if("function"==typeof e&&e.subscribe&&void 0!==e.destroyAll){var t=this._mapKoArrayToSubscriptions.get(e);t&&(t[0].dispose(),t[1].dispose(),this._mapKoArrayToSubscriptions.delete(e))}}_processTreeArray(e,t){let r,a=this;e instanceof Array?r=e:(this._subscribeObservableArray(e,t),r=e()),r.forEach((function(r,s){a._processNode(r,t,e)}))}_releaseTreeArray(e){let t,r=this;e instanceof Array?t=e:(this._unsubscribeObservableArray(e),t=e()),t.forEach((function(e,t){r._releaseNode(e)}))}_processNode(e,t,r){let a=this,s=a._createKeyObj(e,t,r);a._setMapEntry(s.key,e);let i=a._getChildren(e);return i&&a._processTreeArray(i,s.keyPath),s}_releaseNode(e){let t=this,r=this._getKeyForNode(e);t._deleteMapEntry(r,e);let a=t._getChildren(e);a&&t._releaseTreeArray(a)}_createKeyObj(e,t,r){let a=this._getId(e),s=t?t.slice():[];return null==a?(s.push(this._incrementSequenceNum(r)),a=s):(s.push(a),this.options&&"siblings"==this.options.keyAttributesScope&&(a=s)),{key:a,keyPath:s}}_getId(e){let t,r=null!=this.options?this.options.keyAttributes:null;if(null!=r){var a;if(Array.isArray(r))for(t=[],a=0;a<r.length;a++)t[a]=this._getVal(e,r[a]);else t="@value"==r?this._getAllVals(e):this._getVal(e,r);return t}return null}_getVal(e,t,r){if("string"==typeof t){let r=t.indexOf(".");if(r>0){let a=t.substring(0,r),s=t.substring(r+1),i=e[a];if(i)return this._getVal(i,s)}}return!0!==r&&"function"==typeof e[t]?e[t]():e[t]}_getAllVals(e){let t=this;return Object.keys(e).map((function(r){return t._getVal(e,r)}))}_getNodeMetadata(e){return{key:this._getKeyForNode(e)}}_getNodeForKey(e){return this._getRootDataProvider()._mapKeyToNode.get(JSON.stringify(e))}_getKeyForNode(e){return this._getRootDataProvider()._mapNodeToKey.get(e)}_setMapEntry(e,t){let r=this._getRootDataProvider();r._mapKeyToNode.set(JSON.stringify(e),t),r._mapNodeToKey.set(t,e)}_deleteMapEntry(e,t){let r=this._getRootDataProvider();r._mapKeyToNode.delete(JSON.stringify(e)),r._mapNodeToKey.delete(t)}_incrementSequenceNum(e){let t=this._getRootDataProvider(),r=t._mapArrayToSequenceNum.get(e)||0;return t._mapArrayToSequenceNum.set(e,r+1),r}_getLeafNodeFilter(e){let t;if(e&&e.text){t={op:"$regex",attribute:"*",value:new RegExp(e.text,"i")}}else t=e;let r=this.options&&this.options.childrenAttribute?this.options.childrenAttribute:"children";return{op:"$or",criteria:[t,{op:"$and",criteria:[{op:"$ne",attribute:r,value:null},{op:"$ne",attribute:r,value:void 0}]}]}}}
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
return e.ArrayTreeDataProvider=r,e.ArrayTreeDataProvider=r,e.EventTargetMixin.applyMixin(r),r}));