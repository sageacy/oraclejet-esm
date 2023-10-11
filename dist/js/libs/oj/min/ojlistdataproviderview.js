/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojdataprovider","ojs/ojeventtarget"],function(t,e,s){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;
/**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
class i{constructor(t,s){var r;this.dataProvider=t,this.options=s,this._noFilterSupport=!1,this.AsyncIterable=(r=class{constructor(t,e){this._parent=t,this._asyncIterator=e,this[Symbol.asyncIterator]=()=>this._asyncIterator}},Symbol.asyncIterator,r),this.AsyncIterator=class{constructor(t,e,s){this._parent=t,this._nextFunc=e,this._params=s}next(){const t=this._params?.signal;if(t&&t.aborted){const e=t.reason;return Promise.reject(new DOMException(e,"AbortError"))}return new Promise((e,s)=>{if(t){const e=t.reason;t.addEventListener("abort",t=>s(new DOMException(e,"AbortError")))}return e(this._nextFunc(this._params))})}},this.AsyncIteratorYieldResult=class{constructor(t,e){this._parent=t,this.value=e,this[i._VALUE]=e,this[i._DONE]=!1}},this.AsyncIteratorReturnResult=class{constructor(t,e){this._parent=t,this.value=e,this[i._VALUE]=e,this[i._DONE]=!0}},this.FetchListResult=class{constructor(t,e,s,r,n){this._parent=t,this.fetchParameters=e,this.data=s,this.metadata=r,this.totalFilteredRowCount=n,this[i._FETCHPARAMETERS]=e,this[i._DATA]=s,this[i._METADATA]=r,e&&"enabled"===e.includeFilteredRowCount&&(this[i._TOTALFILTEREDROWCOUNR]=n)}},this.Item=class{constructor(t,e,s){this._parent=t,this.metadata=e,this.data=s,this[i._METADATA]=e,this[i._DATA]=s}},this.ItemMetadata=class{constructor(t,e){this._parent=t,this.key=e,this[i._KEY]=e}},this.FetchListParameters=class{constructor(t,e,s,r,n,h,a){this._parent=t,this.params=e,this.size=s,this.sortCriteria=r,this.filterCriterion=n,this.attributes=h,this.signal=a,e&&Object.keys(e).forEach(t=>{this[t]=e[t]}),this[i._SIZE]=s,r&&(this[i._SORTCRITERIA]=r),n&&(this[i._FILTERCRITERION]=n),h&&(this[i._FETCHATTRIBUTES]=h),a&&(this[i._SIGNAL]=a)}},this.FetchByKeysParameters=class{constructor(t,e,s,r){this._parent=t,this.keys=e,this.params=s,this.attributes=r,s&&Object.keys(s).forEach(t=>{this[t]=s[t]}),e&&(this[i._KEYS]=e),r&&(this[i._FETCHATTRIBUTES]=r)}},this.FetchByOffsetParameters=class{constructor(t,e,s,r,n,h,a,_){this._parent=t,this.offset=e,this.params=s,this.size=r,this.sortCriteria=n,this.filterCriterion=h,this.attributes=a,this.signal=_,s&&Object.keys(s).forEach(t=>{this[t]=s[t]}),r&&(this[i._SIZE]=r),n&&(this[i._SORTCRITERIA]=n),e&&(this[i._OFFSET]=e),h&&(this[i._FILTERCRITERION]=h),a&&(this[i._FETCHATTRIBUTES]=a),_&&(this[i._SIGNAL]=_)}},this.FetchByKeysResults=class{constructor(t,e,s){this._parent=t,this.fetchParameters=e,this.results=s,this[i._FETCHPARAMETERS]=e,this[i._RESULTS]=s}},this.ContainsKeysResults=class{constructor(t,e,s){this._parent=t,this.containsParameters=e,this.results=s,this[i._CONTAINSPARAMETERS]=e,this[i._RESULTS]=s}},this.FetchByOffsetResults=class{constructor(t,e,s,r,n){this._parent=t,this.fetchParameters=e,this.results=s,this.done=r,this.totalFilteredRowCount=n,this[i._FETCHPARAMETERS]=e,this[i._RESULTS]=s,this[i._DONE]=r,e&&"enabled"===e.includeFilteredRowCount&&(this[i._TOTALFILTEREDROWCOUNR]=n)}},this[i._INTERNAL_FROM]=null==this.options?null:this.options[i._FROM],this[i._INTERNAL_OFFSET]=null==this.options?0:this.options[i._OFFSET]>0?this.options[i._OFFSET]:0,this[i._INTERNAL_SORTCRITERIA]=null==this.options?null:this.options[i._SORTCRITERIA],this[i._INTERNAL_DATAMAPPING]=null==this.options?null:this.options[i._DATAMAPPING],this[i._INTERNAL_FETCHATTRIBUTES]=null==this.options?null:this.options[i._FETCHATTRIBUTES],this[i._INTERNAL_FILTERCRITERION]=null==this.options?null:this.options[i._FILTERCRITERION],this._addEventListeners(t),t.getCapability&&!t.getCapability("filter")&&(this._noFilterSupport=!0),Object.defineProperty(this,"from",{set(t){this[i._INTERNAL_FROM]=t,this.dispatchEvent(new e.DataProviderRefreshEvent)},get(){return this[i._INTERNAL_FROM]},enumerable:!0}),Object.defineProperty(this,"offset",{set(t){this[i._INTERNAL_OFFSET]=t,this.dispatchEvent(new e.DataProviderRefreshEvent)},get(){return this[i._INTERNAL_OFFSET]},enumerable:!0}),Object.defineProperty(this,"sortCriteria",{set(t){this[i._INTERNAL_SORTCRITERIA]=t,this.dispatchEvent(new e.DataProviderRefreshEvent)},get(){return this[i._INTERNAL_SORTCRITERIA]},enumerable:!0}),Object.defineProperty(this,"dataMapping",{set(t){this[i._INTERNAL_DATAMAPPING]=t,this.dispatchEvent(new e.DataProviderRefreshEvent)},get(){return this[i._INTERNAL_DATAMAPPING]},enumerable:!0}),Object.defineProperty(this,"attributes",{set(t){this[i._INTERNAL_FETCHATTRIBUTES]=t,this.dispatchEvent(new e.DataProviderRefreshEvent)},get(){return this[i._INTERNAL_FETCHATTRIBUTES]},enumerable:!0}),Object.defineProperty(this,"filterCriterion",{set(t){this[i._INTERNAL_FILTERCRITERION]=t,this.dispatchEvent(new e.DataProviderRefreshEvent)},get(){return this[i._INTERNAL_FILTERCRITERION]},enumerable:!0})}containsKeys(t){return this.dataProvider[i._CONTAINSKEYS]?this.dataProvider[i._CONTAINSKEYS](t):this.fetchByKeys(t).then(e=>{const s=new Set;return t[i._KEYS].forEach(t=>{null!=e[i._RESULTS].get(t)&&s.add(t)}),Promise.resolve(new this.ContainsKeysResults(this,t,s))})}fetchByKeys(t){const e=null!=t?t[i._KEYS]:null;let s=null!=t?t[i._FETCHATTRIBUTES]:null;null==s&&(s=this[i._INTERNAL_FETCHATTRIBUTES]);const r=t?.signal;if(r&&r.aborted){const t=r.reason;return Promise.reject(new DOMException(t,"AbortError"))}return new Promise((n,h)=>{if(r){const t=r.reason;r.addEventListener("abort",e=>h(new DOMException(t,"AbortError")))}const a=new this.FetchByKeysParameters(this,e,t,s);if(this.dataProvider[i._FETCHBYKEYS])return n(this.dataProvider[i._FETCHBYKEYS](a).then(t=>{const e=t[i._RESULTS],s=new Map;return e.forEach((t,e)=>{const i=this._getMappedItems([t]);s.set(e,i[0])}),new this.FetchByKeysResults(this,a,s)}));{const e=new this.FetchListParameters(this,null,i._DEFAULT_SIZE,null,null,s),r=new Map,h=this.dataProvider[i._FETCHFIRST](e)[Symbol.asyncIterator]();return n(this._fetchNextSet(t,h,r).then(t=>{const e=new Map;return t.forEach((t,s)=>{const i=this._getMappedItems([t]);e.set(s,i[0])}),new this.FetchByKeysResults(this,a,e)}))}})}fetchByOffset(t){const e=null!=t?t[i._OFFSET]:null,s=null!=t?t[i._SIZE]:null;let r=null!=t?t[i._FETCHATTRIBUTES]:null;null==r&&(r=this[i._INTERNAL_FETCHATTRIBUTES]);let n=null!=t?t[i._SORTCRITERIA]:null;null==n&&(n=this[i._INTERNAL_SORTCRITERIA]);const h=this._getMappedSortCriteria(n),a=this._combineFilters(t),_=t?.signal;if(_&&_.aborted){const t=_.reason;return Promise.reject(new DOMException(t,"AbortError"))}return new Promise((n,E)=>{if(_){const t=_.reason;_.addEventListener("abort",e=>E(new DOMException(t,"AbortError")))}const l=this._getMappedFilterCriterion(a),T=new this.FetchByOffsetParameters(this,e,t,s,h,l,r);return n(this.dataProvider[i._FETCHBYOFFSET](T).then(t=>{const e=t[i._RESULTS],s=t[i._DONE],r=t[i._TOTALFILTEREDROWCOUNR],n=new Array;return e.forEach(t=>{const e=this._getMappedItems([t]);n.push(e[0])}),new this.FetchByOffsetResults(this,T,n,s,r)}))})}fetchFirst(t){const e={};e[i._ITEMS]=[],e[i._DONE]=!1,e[i._STARTINDEX]=0,e[i._LASTDONEHASDATA]=!1;const s=null!=t?t[i._SIZE]:null,r=t?.signal;let n=null!=t?t[i._SORTCRITERIA]:null;null==n&&(n=this[i._INTERNAL_SORTCRITERIA]);const h=this._getMappedSortCriteria(n),a=this._combineFilters(t),_=this._getMappedFilterCriterion(a);let E=null!=t?t[i._FETCHATTRIBUTES]:null;if(null==E&&(E=this[i._INTERNAL_FETCHATTRIBUTES]),null==this[i._INTERNAL_FROM]&&this[i._INTERNAL_OFFSET]>0){let n=this[i._INTERNAL_OFFSET];return new this.AsyncIterable(this,new this.AsyncIterator(this,(t=>()=>{const e=new this.FetchByOffsetParameters(this,n,null,s,h,_,E,r);return this.dataProvider[i._FETCHBYOFFSET](e).then(e=>{const r=e.results;n+=r.length;const h=this._getMappedItems(r);this._cacheResult(t,h),t[i._DONE]=e[i._DONE];const a=h.map(t=>t[i._DATA]),_=h.map(t=>t[i._METADATA]),E=e[i._FETCHPARAMETERS],l=null!=E?E[i._SORTCRITERIA]:null,T=null!=E?E[i._FILTERCRITERION]:null,o=this._getUnmappedSortCriteria(l),R=this._getUnmappedFilterCriterion(T),A=new this.FetchByOffsetParameters(this,this[i._INTERNAL_OFFSET],null,s,o,R);return t[i._DONE]?Promise.resolve(new this.AsyncIteratorReturnResult(this,new this.FetchListResult(this,A,a,_))):Promise.resolve(new this.AsyncIteratorYieldResult(this,new this.FetchListResult(this,A,a,_)))})})(e),t))}{const n=new this.FetchListParameters(this,t,s,h,_,E,r),a=this.dataProvider[i._FETCHFIRST](n)[Symbol.asyncIterator]();return new this.AsyncIterable(this,new this.AsyncIterator(this,((e,s)=>()=>e[i._LASTDONEHASDATA]?(e[i._LASTDONEHASDATA]=!1,Promise.resolve(new this.AsyncIteratorReturnResult(this,new this.FetchListResult(this,t,[],[],this._totalFilteredRowCount)))):s.next().then(r=>{let n=r[i._VALUE];n||(n={data:[],metadata:[],fetchParameters:null});const h=n[i._DATA],a=n.totalFilteredRowCount,E=n[i._METADATA],l=h.map((t,e)=>new this.Item(this,E[e],h[e]));this._noFilterSupport&&this._filterResult(_,l),this._totalFilteredRowCount=a;const T=this._getMappedItems(l);this._cacheResult(e,T),e[i._DONE]=r[i._DONE];const o=null!=t?t[i._SIZE]:null,R=(null!=t&&t[i._OFFSET],n[i._FETCHPARAMETERS]),A=null!=R?R[i._SORTCRITERIA]:null,I=null!=R?R[i._FILTERCRITERION]:null,c=this._getUnmappedSortCriteria(A),u=this._getUnmappedFilterCriterion(I),N=new this.FetchListParameters(this,t,o,c,u);return this._fetchUntilKey(N,this[i._INTERNAL_FROM],e,s).then(()=>this._fetchUntilOffset(N,this[i._INTERNAL_OFFSET]+e[i._STARTINDEX],h.length,e,s,a))}))(e,a),t))}}getCapability(t){return this.dataProvider.getCapability(t)}getTotalSize(){return this.dataProvider.getTotalSize()}isEmpty(){return this.dataProvider.isEmpty()}_fetchNextSet(e,s,r){return s.next().then(n=>{let h=n[i._VALUE];h||(h={data:[],metadata:[],fetchParameters:null});const a=h[i._DATA],_=h[i._METADATA],E=_.map(t=>t[i._KEY]);let l=!0;return e[i._KEYS].forEach(e=>{r.has(e)||E.map((s,i)=>{t.Object.compareValues(s,e)&&r.set(e,new this.Item(this,_[i],a[i]))}),r.has(e)||(l=!1)}),l||n[i._DONE]?r:this._fetchNextSet(e,s,r)})}_fetchUntilKey(e,s,r,n){if(null!=s){const e=r[i._ITEMS].filter(e=>{if(t.KeyUtils.equals(e[i._METADATA][i._KEY],s))return!0});if(e.length>0){const t=r[i._ITEMS].indexOf(e[0]);r[i._ITEMS]=r[i._ITEMS].slice(t,r[i._ITEMS].length)}else{if(!r[i._DONE])return n.next().then(t=>{let e=t[i._VALUE];e||(e={data:[],metadata:[],fetchParameters:null});const s=e[i._DATA],h=e[i._METADATA],a=s.map((t,e)=>new this.Item(this,h[e],s[e])),_=this._getMappedItems(a);return this._cacheResult(r,_),r[i._DONE]=t[i._DONE],this._fetchUntilKey(t[i._FETCHPARAMETERS],_[i._KEYS],r,n)});r[i._ITEMS]=[]}}return Promise.resolve(null)}_fetchUntilOffset(t,e,s,r,n,h){const a=null!=t&&t[i._SIZE]>0?t[i._SIZE]:s;e=e>0?e:0;const _=r[i._ITEMS].slice(e,e+a);if(this._noFilterSupport){const e=this._getMappedFilterCriterion(t[i._FILTERCRITERION]);this._filterResult(e,_)}return t&&t[i._SIZE]>0&&_.length<a&&!r[i._DONE]?n.next().then(s=>{let a=s[i._VALUE];a||(a={data:[],metadata:[],fetchParameters:null});const _=a[i._DATA],E=a[i._METADATA],l=_.map((t,e)=>new this.Item(this,E[e],_[e]));if(this._noFilterSupport){const e=this._getMappedFilterCriterion(t[i._FILTERCRITERION]);this._filterResult(e,l)}s.done&&l.length>0&&(r[i._LASTDONEHASDATA]=!0);const T=this._getMappedItems(l);return this._cacheResult(r,T),r[i._DONE]=s[i._DONE],this._fetchUntilOffset(t,e,_.length,r,n,h)}):this._createResultPromise(t,r,_,h)}_createResultPromise(t,e,s,r){e[i._STARTINDEX]=e[i._STARTINDEX]+s.length;const n=s.map(t=>t[i._DATA]),h=s.map(t=>t[i._METADATA]);let a=!1;return e[i._DONE]&&0===n.length&&(a=!0),a?Promise.resolve(new this.AsyncIteratorReturnResult(this,new this.FetchListResult(this,t,n,h,r))):Promise.resolve(new this.AsyncIteratorYieldResult(this,new this.FetchListResult(this,t,n,h,r)))}_cacheResult(t,e){e.forEach(e=>{t[i._ITEMS].push(e)})}_filterResult(t,s){if(t){t.filter||(t=e.FilterFactory.getFilter({filterDef:t}));let r=s.length-1;for(;r>=0;)t.filter(s[r][i._DATA])||s.splice(r,1),r--}}_getMappedItems(t){if(null!=this[i._INTERNAL_DATAMAPPING]){const e=this[i._INTERNAL_DATAMAPPING][i._MAPFIELDS];if(null!=e&&null!=t&&t.length>0){return t.map(t=>e.bind(this)(t))}}return t}_combineFilters(t){const s=[];let r,n=0;return null!=t&&null!=t[i._FILTERCRITERION]&&(s[n]=t[i._FILTERCRITERION],n++),null!=this[i._INTERNAL_FILTERCRITERION]&&(s[n]=this[i._INTERNAL_FILTERCRITERION]),r=0==s.length?null:1==s.length?s[0]:e.FilterFactory.getFilter({filterDef:{op:"$and",criteria:s}}),r}_getMappedFilterCriterion(t){if(null!=this[i._INTERNAL_DATAMAPPING]){const e=this[i._INTERNAL_DATAMAPPING][i._MAPFILTERCRITERION];if(null!=e&&null!=t)return e(t)}return t}_getMappedSortCriteria(t){if(null!=this[i._INTERNAL_DATAMAPPING]){const e=this[i._INTERNAL_DATAMAPPING][i._MAPSORTCRITERIA];if(null!=e&&null!=t&&t.length>0)return e(t)}return t}_getUnmappedSortCriteria(t){if(null!=this[i._INTERNAL_DATAMAPPING]){const e=this[i._INTERNAL_DATAMAPPING][i._UNMAPSORTCRITERIA];if(null!=e&&null!=t&&t.length>0)return e(t)}return t}_getUnmappedFilterCriterion(t){if(null!=this[i._INTERNAL_DATAMAPPING]){const e=this[i._INTERNAL_DATAMAPPING][i._UNMAPFILTERCRITERION];if(null!=e&&null!=t)return e(t)}return t}_addEventListeners(t){t[i._ADDEVENTLISTENER](i._REFRESH,t=>{this.dispatchEvent(t)}),t[i._ADDEVENTLISTENER](i._MUTATE,t=>{this.dispatchEvent(t)})}}return i._KEY="key",i._KEYS="keys",i._DATA="data",i._STARTINDEX="startIndex",i._SORT="sort",i._INTERNAL_SORTCRITERIA="_sortCriteria",i._SORTCRITERIA="sortCriteria",i._INTERNAL_FILTERCRITERION="_filterCriterion",i._FILTERCRITERION="filterCriterion",i._METADATA="metadata",i._ITEMS="items",i._INTERNAL_FROM="_from",i._INTERNAL_OFFSET="_offset",i._FROM="from",i._OFFSET="offset",i._REFRESH="refresh",i._MUTATE="mutate",i._SIZE="size",i._FETCHPARAMETERS="fetchParameters",i._VALUE="value",i._DONE="done",i._LASTDONEHASDATA="lastDoneHasData",i._INTERNAL_DATAMAPPING="_dataMapping",i._DATAMAPPING="dataMapping",i._MAPFIELDS="mapFields",i._MAPSORTCRITERIA="mapSortCriteria",i._MAPFILTERCRITERION="mapFilterCriterion",i._UNMAPSORTCRITERIA="unmapSortCriteria",i._UNMAPFILTERCRITERION="unmapFilterCriterion",i._RESULTS="results",i._CONTAINSPARAMETERS="containsParameters",i._DEFAULT_SIZE=25,i._CONTAINSKEYS="containsKeys",i._FETCHBYKEYS="fetchByKeys",i._FETCHBYOFFSET="fetchByOffset",i._FETCHFIRST="fetchFirst",i._ADDEVENTLISTENER="addEventListener",i._INTERNAL_FETCHATTRIBUTES="_attributes",i._FETCHATTRIBUTES="attributes",i._TOTALFILTEREDROWCOUNR="totalFilteredRowCount",i._SIGNAL="signal",s.EventTargetMixin.applyMixin(i),t._registerLegacyNamespaceProp("ListDataProviderView",i),i});
//# sourceMappingURL=ojlistdataproviderview.js.map