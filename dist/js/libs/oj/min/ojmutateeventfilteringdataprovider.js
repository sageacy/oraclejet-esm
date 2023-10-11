/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojcachediteratorresultsdataprovider","ojs/ojdedupdataprovider","ojs/ojcomponentcore","ojs/ojeventtarget","ojs/ojdataprovider"],function(t,e,r,a,s,i){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;
/**
     * @license
     * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
     * Licensed under The Universal Permissive License (UPL), Version 1.0
     * @ignore
     */
/**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
class n{constructor(a){var s,i;this.dataProvider=a,this.MutateEventFilteringAsyncIterable=(i=class{constructor(t,e,r,a){this._parent=t,this.params=e,this.dataProviderAsyncIterator=r,this.cache=a,this[s]=()=>new this._parent.MutateEventFilteringAsyncIterator(this._parent,this.params,this.dataProviderAsyncIterator,this.cache)}},s=Symbol.asyncIterator,i),this.MutateEventFilteringAsyncIterator=class{constructor(t,e,r,a){this._parent=t,this.params=e,this.asyncIterator=r,this.cache=a}next(){let t=this;const a=this.params?.signal;if(a&&a.aborted){const t=a.reason;return Promise.reject(new DOMException(t,"AbortError"))}return new Promise((s,i)=>{if(a){const t=a.reason;a.addEventListener("abort",e=>i(new DOMException(t,"AbortError")))}return s(this.asyncIterator.next().then(a=>(t._parent.dataProvider instanceof e||t._parent.dataProvider instanceof r||t._parent.cache.addListResult(a),a)))})}},this.DataProviderMutationEventDetail=class{constructor(t,e,r){this.add=t,this.remove=e,this.update=r,this[n._ADD]=t,this[n._REMOVE]=e,this[n._UPDATE]=r}};let o=this;this.cache=a instanceof e||a instanceof r?a.cache:new t.DataCache,a.createOptimizedKeyMap&&(this.createOptimizedKeyMap=t=>a.createOptimizedKeyMap(t)),a.createOptimizedKeySet&&(this.createOptimizedKeySet=t=>a.createOptimizedKeySet(t)),a.addEventListener(n._MUTATE,t=>{if(t.detail){let e=o._processMutations(t.detail.remove),r=o._processMutations(t.detail.update);if(e&&e.keys&&e.keys.size>0||r&&r.keys&&r.keys.size>0||t.detail.add&&t.detail.add.keys&&t.detail.add.keys.size>0){let a=new o.DataProviderMutationEventDetail(t.detail.add,e,r),s=Object.assign({},t);s.detail=a,o.dispatchEvent(s)}}else o.dispatchEvent(t)}),a.addEventListener(n._REFRESH,t=>{o.cache.reset(),o.dispatchEvent(t)})}containsKeys(t){return this.dataProvider.containsKeys(t)}fetchByKeys(t){const e=t?.signal;if(e&&e.aborted){const t=e.reason;return Promise.reject(new DOMException(t,"AbortError"))}return new Promise((r,a)=>{if(e){const t=e.reason;e.addEventListener("abort",e=>a(new DOMException(t,"AbortError")))}return r(this.dataProvider.fetchByKeys(t))})}fetchByOffset(t){const e=t?.signal;if(e&&e.aborted){const t=e.reason;return Promise.reject(new DOMException(t,"AbortError"))}return new Promise((r,a)=>{if(e){const t=e.reason;e.addEventListener("abort",e=>a(new DOMException(t,"AbortError")))}return r(this.dataProvider.fetchByOffset(t))})}fetchFirst(t){const e=this.dataProvider.fetchFirst(t);return new this.MutateEventFilteringAsyncIterable(this,t,e[Symbol.asyncIterator](),this.cache)}getCapability(t){let e=this.dataProvider.getCapability(t);return"eventFiltering"===t?{type:"iterator"}:e}getTotalSize(){return this.dataProvider.getTotalSize()}isEmpty(){return this.dataProvider.isEmpty()}_processMutations(t){if(t){let e=t[n._KEYS];if(e&&e.size>0){let r=new Set,a=this.cache.getDataByKeys({keys:e});e.forEach(function(t){a.results.has(t)||r.add(t)});let s=Object.assign({},t);return r.forEach(function(t){let e=[];s.keys.forEach(function(t){e.push(t)});let r=e.indexOf(t);s.keys.delete(t),e.splice(r,1),s.data&&s.data.splice(r,1),s.indexes&&s.indexes.splice(r,1),s.metadata&&s.metadata.splice(r,1)}),s}}return t}}return n._KEY="key",n._KEYS="keys",n._DATA="data",n._METADATA="metadata",n._ITEMS="items",n._FROM="from",n._OFFSET="offset",n._REFRESH="refresh",n._MUTATE="mutate",n._SIZE="size",n._FETCHPARAMETERS="fetchParameters",n._VALUE="value",n._DONE="done",n._RESULTS="results",n._ADD="add",n._UPDATE="update",n._REMOVE="remove",n._INDEXES="indexes",s.EventTargetMixin.applyMixin(n),t._registerLegacyNamespaceProp("MutateEventFilteringDataProvider",n),n});
//# sourceMappingURL=ojmutateeventfilteringdataprovider.js.map