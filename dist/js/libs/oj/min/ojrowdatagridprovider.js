/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","ojs/ojdatagridprovider","ojs/ojeventtarget","ojs/ojdatacollection-common"],function(e,t,s,i,o){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var n=function(e,t,s,i){return new(s||(s=Promise))(function(o,n){function a(e){try{l(i.next(e))}catch(e){n(e)}}function r(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(a,r)}l((i=i.apply(e,t||[])).next())})};class a{constructor(e,t){if(this.dataProvider=e,this.options=t,this.version=0,this.keyCache=[],this.lastRowKeyCached=!1,this.GridItem=class{constructor(e,t){this.metadata=e,this.data=t}},this.GridBodyItem=class{constructor(e,t,s,i,o,n){this.rowExtent=e,this.columnExtent=t,this.rowIndex=s,this.columnIndex=i,this.metadata=o,this.data=n}},this.GridHeaderItem=class{constructor(e,t,s,i,o,n){this.index=e,this.extent=t,this.level=s,this.depth=i,this.metadata=o,this.data=n}},this.GridHeaderMetadata=class{constructor(e,t,s,i){this.sortDirection=e,this.expanded=t,this.treeDepth=s,this.showRequired=i}},this.FetchByOffsetGridResults=class{constructor(e,t,s,i,o,n,a,r,l,d,h,u){this.fetchParameters=e,this.rowDone=t,this.columnDone=s,this.rowOffset=i,this.columnOffset=o,this.rowCount=n,this.columnCount=a,this.totalRowCount=r,this.totalColumnCount=l,this.results=d,this.version=h,this.next=u}},this.sortable=null==t?void 0:t.sortable,this.sortCriteria=null,this.supportsFilteredRowCount="exact"===e.getCapability("fetchFirst").totalFilteredRowCount,null==t?void 0:t.expandedObservable){null==t||t.expandedObservable.subscribe(e=>{this.expandedState=e.value})}e.addEventListener("mutate",this._handleUnderlyingMutation.bind(this)),e.addEventListener("refresh",this._handleUnderlyingRefresh.bind(this))}fetchByOffset(e){var t;return n(this,void 0,void 0,function*(){const s=e.rowOffset;let i=e.rowCount,o={results:[],done:!1,fetchParameters:null};0!=i&&(o=yield this.dataProvider.fetchByOffset({offset:s,size:i}));let n=-1;if(!this.isSameFetchParameters(o.fetchParameters)||null==this.totalRowCount){if(this.supportsFilteredRowCount){let e=yield this.dataProvider.fetchFirst({size:1,includeFilteredRowCount:"enabled"})[Symbol.asyncIterator]().next();null!=e.value.totalFilteredRowCount&&(n=e.value.totalFilteredRowCount)}else this.isUnfiltered(o.fetchParameters)&&(n=yield this.dataProvider.getTotalSize());this.totalRowCount=n}this.updateKeyCache(o,s),this.setupLayout(o.results),this.sortCriteria=null===(t=o.fetchParameters)||void 0===t?void 0:t.sortCriteria;const a=e.columnOffset,r=a+e.columnCount>=this.columns.databody.length,l=Math.max(Math.min(e.columnCount,this.columns.databody.length-a),0);i=Math.min(e.rowCount,o.results.length);const d=o.done;this.lastRowKeyCached=o.done;const h=this.version,u=e.fetchRegions,c=null==u||u.has("all"),v=c||(null==u?void 0:u.has("databody")),m=c||(null==u?void 0:u.has("rowHeader")),f=c||(null==u?void 0:u.has("columnHeader")),p=c||(null==u?void 0:u.has("rowEndHeader")),w=c||(null==u?void 0:u.has("columnEndHeader")),y=c||(null==u?void 0:u.has("rowHeaderLabel")),b=c||(null==u?void 0:u.has("columnHeaderLabel")),C=c||(null==u?void 0:u.has("rowEndHeaderLabel")),H=c||(null==u?void 0:u.has("columnEndHeaderLabel")),g=v?this.getDatabodyResults(o.results,s,i,a,l):void 0,E=m?this.getRowHeaderResults("rowHeader",o.results,s,i):void 0,R=p?this.getRowHeaderResults("rowEndHeader",o.results,s,i):void 0,x=f?this.getColumnHeaderResults("column",a,l):void 0,L=w?this.getColumnHeaderResults("columnEnd",a,l):void 0,O=y?this.getRowHeaderLabelResults():void 0,P=C?this.getRowEndHeaderLabelResults():void 0,F={databody:g,columnHeader:x,columnHeaderLabel:b?this.getColumnHeaderLabelResults("column"):void 0,columnEndHeader:L,columnEndHeaderLabel:H?this.getColumnHeaderLabelResults("columnEnd"):void 0,rowHeader:E,rowHeaderLabel:O,rowEndHeader:R,rowEndHeaderLabel:P};return new this.FetchByOffsetGridResults(e,d,r,s,a,i,l,this.totalRowCount,this.columns.databody.length,F,h,null)})}updateKeyCache(e,t){let s=e.fetchParameters;this.isSameFetchParameters(s)||this._clearKeyCache(),this.currentFetchParameters=s,e.results.forEach((e,s)=>{this.keyCache[t+s]=e.metadata.key})}_clearKeyCache(){this.keyCache=[]}isKeyCacheSparse(){for(let e=0;e<this.keyCache.length;e++)if(void 0===this.keyCache[e])return!0;return!1}isSameFetchParameters(e){var s,i;let o=null==e?void 0:e.sortCriteria,n=null==e?void 0:e.filterCriterion,a=null===(s=this.currentFetchParameters)||void 0===s?void 0:s.sortCriteria,r=null===(i=this.currentFetchParameters)||void 0===i?void 0:i.filterCriterion;return!!t.Object.compareValues(o,a)&&!!t.Object.compareValues(n,r)}isUnfiltered(e){return null==e||null==e.filterCriterion}setupLayout(e){this.setupColumns(e),this.setupColumnHeaders(),this.setupHeaderLabels()}setupColumns(e){var t,s,i,o,n,a;if(null==this.columns){this.columns={};const r=e[0];if(this.columns.rowHeader=this.getFromOptions(null===(s=null===(t=this.options)||void 0===t?void 0:t.columns)||void 0===s?void 0:s.rowHeader,r),this.columns.rowEndHeader=this.getFromOptions(null===(o=null===(i=this.options)||void 0===i?void 0:i.columns)||void 0===o?void 0:o.rowEndHeader,r),null===(a=null===(n=this.options)||void 0===n?void 0:n.columns)||void 0===a?void 0:a.databody){let e=this.options.columns.databody;this.columns.databody="function"==typeof e?e(r):e}else if(null==r)this.columns.databody=[];else{const e=Object.keys(r.data);this.columns.databody=e.filter(e=>{var t,s;return!(null===(t=this.columns.rowHeader)||void 0===t?void 0:t.includes(e))&&!(null===(s=this.columns.rowEndHeader)||void 0===s?void 0:s.includes(e))})}}}setupColumnHeaders(){var e,t,s,i,o,n,a,r;if(null==this.columnHeaders){this.columnHeaders={};const l=this.getFromOptions(null===(t=null===(e=this.options)||void 0===e?void 0:e.columnHeaders)||void 0===t?void 0:t.column,null===(s=this.columns)||void 0===s?void 0:s.databody,null===(i=this.columns)||void 0===i?void 0:i.databody,e=>({data:e}));this.columnHeaders.column=this.parseNestedHeaders(l);const d=this.getFromOptions(null===(n=null===(o=this.options)||void 0===o?void 0:o.columnHeaders)||void 0===n?void 0:n.columnEnd,null===(a=this.columns)||void 0===a?void 0:a.databody,null===(r=this.columns)||void 0===r?void 0:r.databody,e=>({data:e}));this.columnHeaders.columnEnd=this.parseNestedHeaders(d)}}setupHeaderLabels(){var e,t,s,i,o,n,a,r,l,d,h,u,c,v,m,f;null==this.headerLabels&&(this.headerLabels={},this.headerLabels.row=this.getFromOptions(null===(t=null===(e=this.options)||void 0===e?void 0:e.headerLabels)||void 0===t?void 0:t.row,null===(s=this.columns)||void 0===s?void 0:s.rowHeader,null===(i=this.columns)||void 0===i?void 0:i.rowHeader,e=>e),this.headerLabels.rowEnd=this.getFromOptions(null===(n=null===(o=this.options)||void 0===o?void 0:o.headerLabels)||void 0===n?void 0:n.rowEnd,null===(a=this.columns)||void 0===a?void 0:a.rowEndHeader,null===(r=this.columns)||void 0===r?void 0:r.rowEndHeader,e=>e),this.headerLabels.column=this.getFromOptions(null===(d=null===(l=this.options)||void 0===l?void 0:l.headerLabels)||void 0===d?void 0:d.column,null===(u=null===(h=this.columnHeaders)||void 0===h?void 0:h.column)||void 0===u?void 0:u.headerArray),this.headerLabels.columnEnd=this.getFromOptions(null===(v=null===(c=this.options)||void 0===c?void 0:c.headerLabels)||void 0===v?void 0:v.columnEnd,null===(f=null===(m=this.columnHeaders)||void 0===m?void 0:m.columnEnd)||void 0===f?void 0:f.headerArray))}getFromOptions(e,t,s,i){if(null!=e)return"function"==typeof e?e(t):s&&"attributeName"===e?s.map(i):e}parseNestedHeaders(e){if(null==e)return;"string"==typeof e[0]&&(e=e.map(e=>({data:e})));let t=[],s=1;const i=(e,o,n)=>{let a=0;return e.forEach(e=>{let r=e.depth||1,l=1;e.children&&(l=i(e.children,o,n+r));let d={index:o,extent:l,level:n,depth:r,data:e.data};t.push(d),s=Math.max(s,n+1),a+=l,o+=l}),a};return i(e,0,0),{headerArray:t,levelCount:s}}getCapability(e){return"version"===e?"monotonicallyIncreasing":null}isEmpty(){return"unknown"}setDataProvider(e){this.dataProvider=e}getDatabodyResults(e,t,s,i,o){if((null==e?void 0:e.length)>0){const n=[];for(let a=0;a<s;a++){const s=e[a];for(let e=0;e<o;e++){const o=this.columns.databody[i+e],r={data:s.data[o]};let l={rowItem:s};const d=new this.GridBodyItem(1,1,t+a,i+e,l,r);n.push(d)}}return n}}getRowHeaderResults(e,t,s,i){const o=this.columns[e];if((null==t?void 0:t.length)>0&&(null==o?void 0:o.length)>0){const e=[];for(let n=o.length-1;n>=0;n--){const a=o[n];for(let o=0;o<i;o++){const i=s+o,r=t[o],l={data:r.data[a]};let d,h=r.metadata.treeDepth;this.expandedState&&!1===r.metadata.isLeaf&&(d=this.expandedState.has(r.metadata.key)?"expanded":"collapsed");const u={rowItem:r,expanded:d,treeDepth:h},c=new this.GridHeaderItem(i,1,n,1,u,l);e.push(c)}}return e}}getSortState(e){let t=this.columns.databody[e];if(this.sortCriteria&&this.sortCriteria.length>0&&t){let e=this.sortCriteria[0];if(e.attribute===t)return e.direction}return"unsorted"}getColumnHeaderResults(e,t,s){var i,o;if(null===(i=this.columnHeaders)||void 0===i?void 0:i[e]){const i=[],n=[],a=this.columnHeaders[e].levelCount;for(let r=0;r<s;r++){const s=t+r;for(let t=0;t<a;t++){if(null===(o=n[s])||void 0===o?void 0:o[t])continue;const r=this.getColumnHeaderItem(s,t,this.columnHeaders[e].headerArray),l={data:r.data},d=r.index,h=r.extent,u=r.level,c=r.depth;let v;v=this.sortable&&"column"===e&&t+c===a?new this.GridHeaderMetadata(this.getSortState(d)):{};const m=new this.GridHeaderItem(d,h,u,c,v,l);i.push(m);for(let e=d;e<d+h;e++){null==n[e]&&(n[e]=[]);for(let s=t;s<t+c;s++)n[e][s]=!0}}}return i}}getColumnHeaderItem(e,t,s){return s.find(s=>{let i=s.index,o=s.extent,n=s.level,a=s.depth;return e>=i&&e<i+o&&t>=n&&t<n+a})}getRowHeaderLabelResults(){var e,t;let s;if("attributeName"===(null===(e=this.headerLabels)||void 0===e?void 0:e.row)?s=this.columns.rowHeader:(null===(t=this.headerLabels)||void 0===t?void 0:t.row)&&(s=this.headerLabels.row),s){let e=[];for(let t=s.length-1;t>=0;t--)e.push(new this.GridItem({},{data:s[t]}));return e}}getRowEndHeaderLabelResults(){var e,t;let s;if("attributeName"===(null===(e=this.headerLabels)||void 0===e?void 0:e.rowEnd)?s=this.columns.rowEndHeader:(null===(t=this.headerLabels)||void 0===t?void 0:t.rowEnd)&&(s=this.headerLabels.rowEnd),s){let e=[];for(let t=s.length-1;t>=0;t--)e.push(new this.GridItem({},{data:s[t]}));return e}}getColumnHeaderLabelResults(e){var t;if(null===(t=this.headerLabels)||void 0===t?void 0:t[e]){let t=[];for(let s=this.headerLabels[e].length-1;s>=0;s--)t.push(new this.GridItem({},{data:this.headerLabels[e][s]}));return t}}_handleUnderlyingMutation(e){this.version++;let t,i,n,a,r=e.detail,l=!1,d=this.isKeyCacheSparse(),h=this.lastRowKeyCached&&!d;if(r.remove&&r.remove.keys.size>0&&([l,t,a]=this._convertEventDetail(r.remove,"remove",d)),null==a||a.sort((e,t)=>t.index-e.index).forEach(e=>{this.keyCache.splice(e.index,1)}),!l&&r.add&&r.add.keys.size>0){let e=o.getAddEventKeysResult(this.keyCache,r.add,h);if(l=d&&e.length!==this.keyCache.length+r.add.keys.size,!l){let t=[];r.add.keys.forEach(s=>{let i=e.indexOf(s);t.push({offset:i,count:1})}),n={axis:"row",ranges:t,version:this.version},this.keyCache=e}}!l&&r.update&&r.update.keys.size>0&&([l,i]=this._convertEventDetail(r.update,"update",d)),l?(this.resetInternal(),this.dispatchEvent(new s.DataGridProviderRefreshEvent)):(t&&this.dispatchEvent(new s.DataGridProviderRemoveEvent(t)),n&&this.dispatchEvent(new s.DataGridProviderAddEvent(n)),i&&this.dispatchEvent(new s.DataGridProviderUpdateEvent(i)))}_convertEventDetail(e,t,s){let i,o=[],n=!1,a=0;if(e.keys.forEach(t=>{var i;let r=null===(i=e.indexes)||void 0===i?void 0:i[a],l=this.keyCache.indexOf(t);-1!=l?o.push({index:l,key:t}):null!=r?o.push({index:r,key:t}):s&&(n=!0),a++}),o.length>0)if("remove"===t||"add"===t){i={axis:"row",ranges:o.map(e=>({offset:e.index,count:1})),version:this.version}}else if("update"===t){i={ranges:o.map(e=>({rowOffset:e.index,rowCount:1,columnOffset:0,columnCount:-1})),version:this.version}}return[n,i,o]}_handleUnderlyingRefresh(e){this.version++,this.resetInternal(),this.dispatchEvent(new s.DataGridProviderRefreshEvent)}resetInternal(){this._clearKeyCache(),this.totalRowCount=null,this.currentFetchParameters=null,this.sortCriteria=null,this.lastRowKeyCached=!1}}i.EventTargetMixin.applyMixin(a),e.RowDataGridProvider=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojrowdatagridprovider.js.map