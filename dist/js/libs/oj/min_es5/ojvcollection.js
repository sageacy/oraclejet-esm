!function(){function e(n){var a="function"==typeof Map?new Map:void 0;return(e=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(e))return a.get(e);a.set(e,i)}function i(){return t(e,arguments,s(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),r(i,e)})(n)}function t(e,n,a){return(t=d()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r(i,n.prototype),i}).apply(null,arguments)}function n(e,t,a){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(n):r.value}})(e,t,a||e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=d();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?o(e):t}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}define(["exports","ojs/ojcore-base","ojs/ojlogger","ojs/ojdomscroller"],(function(t,r,l,d){"use strict";var h,v=function(){function e(t,n,a){c(this,e),this.root=t,this.dataProvider=n,this.callback=a,this.validKeyTypes=["string","number"],this.fetching=0,this.getKey=function(e){return e.key},n&&(this.modelEventHandler=this._handleModelEvent.bind(this),n.addEventListener("mutate",this.modelEventHandler),n.addEventListener("refresh",this.modelEventHandler))}return f(e,[{key:"setFetching",value:function(e){var t=e?this.fetching+1:this.fetching-1;this.fetching=Math.max(0,t)}},{key:"isFetching",value:function(){return 0!==this.fetching}},{key:"destroy",value:function(){this.callback=null,this.dataProvider&&this.modelEventHandler&&(this.dataProvider.removeEventListener("mutate",this.modelEventHandler),this.dataProvider.removeEventListener("refresh",this.modelEventHandler))}},{key:"render",value:function(){return null==this.callback.getData()&&this.fetchRows(),this.renderFetchedData()}},{key:"postRender",value:function(){}},{key:"getDataProvider",value:function(){return this.dataProvider}},{key:"setDataProvider",value:function(e){this.dataProvider=e}},{key:"isReady",value:function(){return!this.fetching}},{key:"verifyKey",value:function(e){return this.validKeyTypes.indexOf(u(e))>-1}},{key:"handleModelRefresh",value:function(){this.callback.setData(null),this.fetchRows()}},{key:"handleItemsAdded",value:function(e){}},{key:"handleItemsRemoved",value:function(e){}},{key:"handleItemsUpdated",value:function(e){}},{key:"_handleModelEvent",value:function(e){if("refresh"===e.type)this.handleModelRefresh();else if("mutate"===e.type){var t=e.detail;t.add&&this.handleItemsAdded(t.add),t.remove&&this.handleItemsRemoved(t.remove),t.update&&this.handleItemsUpdated(t.update)}}}]),e}();(h=t.VirtualizationStrategy||(t.VirtualizationStrategy={}))[h.HIGH_WATER_MARK=0]="HIGH_WATER_MARK",h[h.VIEWPORT_ONLY=1]="VIEWPORT_ONLY";var m=function(){function e(t,n,a,r){var i=this;c(this,e),this.element=t,this.dataProvider=n,this.asyncIterator=a,this.options=r,this._handleScroll=function(e){var t=i.element,n=i._getScrollTop(t),a=t.scrollHeight-t.clientHeight;a>0&&i._handleScrollerScrollTop(n,a)},this.initialScrollTop=this.element.scrollTop,this.scrollListener=this._handleScroll.bind(this),this._getScrollEventElement().addEventListener("scroll",this.scrollListener),this.fetchSize=r.fetchSize>0?r.fetchSize:25,this.maxCount=r.maxCount>0?r.maxCount:500,this.rowCount=r.initialRowCount>0?r.initialRowCount:0,this.successCallback=r.success,this.errorCallback=r.error,this.beforeFetchCallback=r.beforeFetchNext,this.beforeFetchByOffsetCallback=r.beforeFetchByOffset,this.viewportSize=-1,this.viewportPixelSize=this.element.offsetHeight,this.currentScrollTop=0,this.currentRenderedPoint={startIndex:0,endIndex:isNaN(this.rowCount)?this.fetchSize:this.rowCount,maxCountLimit:!1,done:!1,valid:!0},this.renderedPoints=[],this.lastFetchTrigger=0}return f(e,[{key:"checkViewport",value:function(){if(this.currentRenderedPoint.done||this.currentRenderedPoint.maxCountLimit)return!0;var e=this._isRangeValid(0,this.currentRenderedPoint.end);return e||this._doFetch(),e}},{key:"_isRenderingViewportOnly",value:function(){return this.options.strategy===t.VirtualizationStrategy.VIEWPORT_ONLY}},{key:"setViewportRange",value:function(e,t){if(null==this.currentRenderedPoint.start||null==this.currentRenderedPoint.end){this.currentRenderedPoint.start=e,this.currentRenderedPoint.end=t;var n=Object.assign({},this.currentRenderedPoint);this.renderedPoints.push(n),this._log("got pixel range: "+e+" to "+t+" for renderedPoint: "+this.currentRenderedPoint.startIndex+" "+this.currentRenderedPoint.endIndex)}else!1===this.currentRenderedPoint.valid&&(this._log("current rendered point was previous marked as invalid before: "+this.currentRenderedPoint.start+" - "+this.currentRenderedPoint.end),this.currentRenderedPoint.start=e,this.currentRenderedPoint.end=t,this.currentRenderedPoint.valid=!0,this._log("... and after: "+e+" to "+t+" for renderedPoint: "+this.currentRenderedPoint.startIndex+" "+this.currentRenderedPoint.endIndex),this._syncRenderedPointsWithCurrent());this._checkRenderedPoints()&&(this.fetchPromise=null,this.currentScrollTop>=this.lastFetchTrigger&&(this.nextFetchTrigger=void 0))}},{key:"destroy",value:function(){this._getScrollEventElement().removeEventListener("scroll",this.scrollListener)}},{key:"_getScrollEventElement",value:function(){return this.element===document.body||this.element===document.documentElement?window:this.element}},{key:"_getScrollTop",value:function(e){return e===document.documentElement&&(void 0===this.useBodyScrollTop&&(this.useBodyScrollTop=this.initialScrollTop===e.scrollTop),this.useBodyScrollTop)?0+document.body.scrollTop:0+e.scrollTop}},{key:"_setRangeLocal",value:function(e,t,n,a,r,i,l){var o=this;this._log("rendering row: "+e+" to "+t+" covering range: "+(null==n?"unknown":n)+" to "+(null==a?"unknown":a)),this.beforeFetchByOffsetCallback(e,t),this.currentRenderedPoint={startIndex:e,endIndex:t,start:n,end:a,maxCountLimit:r,done:i,valid:l};var d={offset:e,size:t-e};this.fetchByOffsetPromise=this.dataProvider.fetchByOffset(d).then((function(l){var d=!0;if(null!=n&&null!=a&&(d=o._isRangeValid(n,a)),d){o._log("fetchByOffset "+e+" to "+t+" returned and result is still applicable");var s=[],u=[];l.results.forEach((function(e){s.push(e.data),u.push(e.metadata)}));var c={};c.startIndex=e,c.maxCountLimit=r,c.done=i,c.value={},c.value.data=s,c.value.metadata=u,o.successCallback(c)}else o._log("fetchByOffset "+e+" to "+t+" returned but result is NO LONGER applicable");o.fetchByOffsetPromise=null}))}},{key:"_handleScrollerScrollTop",value:function(e,t){if(this.currentScrollTop=e,!this.fetchPromise&&this.asyncIterator){if(isNaN(this.nextFetchTrigger)&&this.lastMaxScrollTop!==t&&(this.nextFetchTrigger=Math.max(0,(t-e)/2),this.lastFetchTrigger=e,this.lastMaxScrollTop=t,this._log("next fetch trigger point: "+Math.round(this.nextFetchTrigger))),null!=this.nextFetchTrigger&&e-this.lastFetchTrigger>this.nextFetchTrigger)return void this._doFetch();if(t-e<1)return void this._doFetch()}this.fetchPromise&&e>this.lastFetchTrigger||this._checkRenderedPoints()}},{key:"_isRangeValid",value:function(e,t){var n=this.currentScrollTop;return this.viewportPixelSize=this.element.offsetHeight,n>=e&&n+this.viewportPixelSize<=t}},{key:"_checkRenderedPoints",value:function(){if(null==this.currentRenderedPoint.start||null==this.currentRenderedPoint.end)return!0;if(this._isRangeValid(this.currentRenderedPoint.start,this.currentRenderedPoint.end))return!0;for(var e=0;e<this.renderedPoints.length;e++){var t=this.renderedPoints[e];if(this._isRangeValid(t.start,t.end))return this._setRangeLocal(t.startIndex,t.endIndex,t.start,t.end,t.maxCountLimit,t.done,t.valid),!1}var n=this.currentScrollTop;this.viewportPixelSize=this.element.offsetHeight;for(var a=0;a<this.renderedPoints.length;a++){var r=this.renderedPoints[a];if(n>=r.start&&a<this.renderedPoints.length-1){var i=this.renderedPoints[a+1];if(n+this.viewportPixelSize<=i.end)return this._setRangeLocal(r.startIndex,i.endIndex,r.start,i.end,i.maxCountLimit,i.done,i.valid),!1}}return this._log("scroll position is not covered by at most 2 rendered points"),!0}},{key:"_doFetch",value:function(){var e=this;this._log("fetching next set of rows from asyncIterator");var t=this.currentScrollTop,n=this._isRenderingViewportOnly()?this.beforeFetchCallback(t):0;n>-1?(-1===this.viewportSize&&(this.viewportSize=this.currentRenderedPoint.endIndex-this.currentRenderedPoint.startIndex),this.fetchPromise=this._fetchMoreRows().then((function(t){if((e._isRenderingViewportOnly()?e.beforeFetchCallback(e.currentScrollTop):0)>=n){if(t.maxCount){e._log("reached max count");var a=t.size>0?null:e.currentRenderedPoint.start,r=t.size>0?null:e.currentRenderedPoint.end;e._setRangeLocal(e.currentRenderedPoint.startIndex,e.maxCount,a,r,!0,!1,!0),e.fetchPromise=null,e.asyncIterator=null}else if(t.size>0||!0===t.done){var i=n,l=e.currentRenderedPoint.endIndex+t.size;e._setRangeLocal(i,l,null,null,!1,t.done,!0)}}else e._checkRenderedPoints()}),(function(t){e.errorCallback&&(e.errorCallback(t),e.fetchPromise=null,e.nextFetchTrigger=void 0)}))):(this._log("fetch is aborted due to beforeFetchCallback returning false"),this.nextFetchTrigger=void 0)}},{key:"_fetchMoreRows",value:function(){var e=this;if(!this.fetchPromise){var t=this.maxCount-this.rowCount;return t>0&&this.asyncIterator?(this.fetchPromise=this.asyncIterator.next().then((function(n){var a;return e.fetchPromise=null,null!=n&&(a={done:n.done,maxCountLimit:n.maxCountLimit},null!=n.value&&(a.size=n.value.data.length,e.rowCount+=n.value.data.length,t<e.fetchSize&&(a.maxCountLimit=!0,n.value.data.length>t&&(a.size=t))),(a.done||a.maxCountLimit)&&(e.asyncIterator=null)),Promise.resolve(a)})),this.fetchPromise):Promise.resolve({maxCount:this.maxCount,maxCountLimit:!0})}return this.fetchPromise}},{key:"_syncRenderedPointsWithCurrent",value:function(){var e=this;this.renderedPoints.forEach((function(t){t.startIndex===e.currentRenderedPoint.startIndex&&(t.start=e.currentRenderedPoint.start),t.endIndex===e.currentRenderedPoint.endIndex&&(t.end=e.currentRenderedPoint.end),t.startIndex===e.currentRenderedPoint.startIndex&&t.endIndex===e.currentRenderedPoint.endIndex&&(t.valid=!0)}))}},{key:"_updateRenderedPoint",value:function(e,t,n){var a=!1;e<=t.startIndex?("added"===n?(t.startIndex=t.startIndex+1,t.endIndex=t.endIndex+1):"removed"===n&&(t.startIndex=t.startIndex-1,t.endIndex=t.endIndex-1),a=!0):e<=t.endIndex&&("added"===n?t.endIndex=t.endIndex+1:"removed"===n&&(t.endIndex=t.endIndex-1),a=!0),a&&(t.valid=!1)}},{key:"_updateRenderedPoints",value:function(e,t){var n=this;this.renderedPoints.forEach((function(a){n._updateRenderedPoint(e,a,t)}))}},{key:"_handleItemsAddedOrRemoved",value:function(e,t){var n=this;e.forEach((function(e){n._updateRenderedPoint(e,n.currentRenderedPoint,t),n._updateRenderedPoints(e,t)}))}},{key:"handleItemsAdded",value:function(e){this._handleItemsAddedOrRemoved(e,"added"),this.rowCount=this.rowCount+e.length}},{key:"handleItemsRemoved",value:function(e){this._handleItemsAddedOrRemoved(e,"removed"),this.rowCount=Math.max(0,this.rowCount-e.length)}},{key:"handleItemsUpdated",value:function(e){var t=this,n=!1;e.forEach((function(e){e>=t.currentRenderedPoint.startIndex&&e<=t.currentRenderedPoint.endIndex&&(n=!0)})),n&&(this.currentRenderedPoint.start=null,this.currentRenderedPoint.end=null)}},{key:"_log",value:function(e){l.info("[VirtualizeDomScroller]=> "+e)}}]),e}(),y=function(e){a(d,e);var o=i(d);function d(e,n,a,r){var i;return c(this,d),(i=o.call(this,e,n,a)).root=e,i.dataProvider=n,i.callback=a,i.scrollPolicyOptions=r,i.fetchRows=function(){if(i.isReady()){i.setFetching(!0);var e={clientId:i._clientId};e.size=i._isLoadMoreOnScroll()?i.getFetchSize():-1,i.dataProviderAsyncIterator=i.getDataProvider().fetchFirst(e)[Symbol.asyncIterator]();var t=i.dataProviderAsyncIterator.next(),n=e.size;t.then((function(e){return function e(t){return t.done||-1!==n||"function"==typeof i.getDataProvider().getPageCount?t:i.dataProviderAsyncIterator.next().then((function(n){return t.done=n.done,t.value.data=t.value.data.concat(n.value.data),t.value.metadata=t.value.metadata.concat(t.value.metadata),e(t)}),(function(e){this._handleFetchError(e)}))}(e)}),(function(e){i._handleFetchError(e)})).then((function(e){if(i.isFetching()){if(null==i.callback)return;i.initialFetch=!0,i.callback.setData(e)}}),(function(e){i._handleFetchError(e)}))}},i._registerDomScroller=function(){var e={fetchSize:i.getFetchSize(),maxCount:i._getMaxCount(),initialRowCount:i.getFetchSize(),strategy:t.VirtualizationStrategy.HIGH_WATER_MARK,success:function(e){i.handleFetchSuccess(e)},error:function(e){i._handleFetchError(e)},beforeFetchNext:function(e){return i.handleBeforeFetchNext(e)},beforeFetchByOffset:function(e,t){i.handleBeforeFetchByOffset(e,t)}};i.domScroller=new m(i._getScroller(),i.getDataProvider(),i.dataProviderAsyncIterator,e)},i._clientId=Symbol(),i}return f(d,[{key:"postRender",value:function(){this.initialFetch=!1}},{key:"destroy",value:function(){n(s(d.prototype),"destroy",this).call(this),this.domScroller&&this.domScroller.destroy()}},{key:"_isLoadMoreOnScroll",value:function(){return!0}},{key:"_getScroller",value:function(){var e=this.scrollPolicyOptions.scroller;return null!=e?e:this.root}},{key:"getFetchSize",value:function(){return this.scrollPolicyOptions.fetchSize}},{key:"_getMaxCount",value:function(){return this.scrollPolicyOptions.maxCount}},{key:"isInitialFetch",value:function(){return this.initialFetch}},{key:"renderSkeletonsForLoadMore",value:function(){}},{key:"renderFetchedData",value:function(){if(null!=this.callback){var e=this._renderOutOfRangeData(),t=this.callback.getData();if(null==t||null==t.value)return e;var n=t.value.data,a=t.value.metadata;return n.length===a.length?(e.push(this.renderData(n,a)),this._isLoadMoreOnScroll()&&(t.done||(0===n.length&&l.info("handleFetchedData: zero data returned while done flag is false"),t.maxCountLimit||(null==this.domScroller&&this._registerDomScroller(),e.push(this.renderSkeletonsForLoadMore()))),t.maxCountLimit&&this._handleScrollerMaxRowCount()),this.setFetching(!1),e):void 0}}},{key:"handleBeforeFetchNext",value:function(e){}},{key:"handleBeforeFetchByOffset",value:function(e,t){}},{key:"handleFetchSuccess",value:function(e){null!=e&&this.callback.setData(e)}},{key:"_handleFetchError",value:function(e){l.error("an error occurred during data fetch, reason: "+e)}},{key:"_handleScrollerMaxRowCount",value:function(){}},{key:"renderData",value:function(e,t){if(null==this.callback)return null;for(var n=[],a=0;a<e.length;a++)if(null!=e[a]&&null!=t[a]){if(!this.verifyKey(t[a].key)){l.error("encounted a key with invalid data type.  Acceptable data types for key are: "+this.validKeyTypes),n=[];break}var r=this.addItem(t[a].key,a,e[a],!0);r&&n.push(r)}return n}},{key:"_renderOutOfRangeData",value:function(){var e=this,t=[],n=this.callback.getOutOfRangeData();return null!=n&&n.forEach((function(n){var a=n.data,r=n.metadata,i=e.addItem(r.key,0,a,!1);i&&t.push(i)})),t}},{key:"_handleItemsMutated",value:function(e,t,n,a,r){this.callback.updateData(function(i){var l=this,o={startIndex:i.startIndex,done:i.done,value:{data:i.value.data.slice(0),metadata:i.value.metadata.slice(0)}},d=[],s=e.indexes,u=Array.from(e[t]);null==s&&(s=u.map((function(e){return l._findIndex(i.value.metadata,e)}))),this.domScroller&&n(s);var c=isNaN(i.startIndex)?0:i.startIndex,h=Math.max(c+i.value.data.length,this.getFetchSize());return s.forEach((function(t,n){var i=u[n],l=null!=e.data?e.data[n]:null,s=null!=e.metadata?e.metadata[n]:null;t>=c&&t<=h?a(o,i,t,l,s):r&&d.push({data:l,metadata:s})})),r?{outOfRangeData:d,renderedData:o}:{renderedData:o}}.bind(this))}},{key:"_findIndex",value:function(e,t){for(var n=0;n<e.length;n++)if(r.KeyUtils.equals(t,e[n].key))return n;return-1}},{key:"handleModelRefresh",value:function(){this.domScroller&&this.domScroller.destroy(),this.domScroller=null,n(s(d.prototype),"handleModelRefresh",this).call(this)}},{key:"handleItemsAdded",value:function(e){this.callback.updateData(function(t){var n={startIndex:t.startIndex,done:t.done,maxCountLimit:t.maxCountLimit,value:{data:t.value.data.slice(0),metadata:t.value.metadata.slice(0)}},a=[],r=e.indexes,i=e.addBeforeKeys,l=e.keys;if(null==r&&null==i)n.done&&!n.maxCountLimit&&(n.value.data.push(e.data),n.value.metadata.push(e.metadata));else{var o=0;l.forEach(function(){var t=e.data[o],l=e.metadata[o],d=-1;null!=i&&null!=i[o]?d=this._findIndex(n.value.metadata,i[o]):null!=r&&null!=r[o]&&(d=r[o]),d>-1&&d<=n.value.data.length?(n.value.data.splice(d,0,t),n.value.metadata.splice(d,0,l)):n.done&&!n.maxCountLimit?(n.value.data.push(t),n.value.metadata.push(l)):a.push({data:t,metadata:l}),o++}.bind(this))}return this.domScroller&&this.domScroller.handleItemsAdded&&this.domScroller.handleItemsAdded(r),{renderedData:n,outOfRangeData:a}}.bind(this)),n(s(d.prototype),"handleItemsAdded",this).call(this,e)}},{key:"handleItemsRemoved",value:function(e){var t=this;this._handleItemsMutated(e,"keys",(function(e){t.domScroller.handleItemsRemoved(e)}),(function(e,n){var a=t._findIndex(e.value.metadata,n);a>-1&&(e.value.data.splice(a,1),e.value.metadata.splice(a,1))}),!1),n(s(d.prototype),"handleItemsRemoved",this).call(this,e)}},{key:"handleCurrentRangeItemUpdated",value:function(e){}},{key:"handleItemsUpdated",value:function(e){var t=this;this._handleItemsMutated(e,"keys",(function(e){t.domScroller.handleItemsUpdated(e)}),(function(e,n,a,r,i){e.value.data.splice(a,1,r),e.value.metadata.splice(a,1,i),t.handleCurrentRangeItemUpdated(n)}),!0),n(s(d.prototype),"handleItemsUpdated",this).call(this,e)}}]),d}(v),p=function(e){a(h,e);var u=i(h);function h(e,n,a,r){var i;return c(this,h),(i=u.call(this,e,n,a)).root=e,i.dataProvider=n,i.callback=a,i.scrollPolicyOptions=r,i.fetchRows=function(){if(i.isReady()){var e={clientId:i._clientId};e.size=i._isLoadMoreOnScroll()?i.getFetchSize():-1;var t=i.getDataProvider().fetchFirst(e)[Symbol.asyncIterator]();i._cachedIteratorsAndResults.root={iterator:t,cache:null};i._fetchNextFromIterator(t,null,e,{value:{data:[],metadata:[]}}).then(i._setNewData)}},i._fetchNextFromIterator=function(e,t,n,a){if(null==e)return Promise.resolve();i.setFetching(!0);var r=e.next(),l=n.size;return r.then((function(t){return function t(n){return n.done||-1!==l||"function"==typeof i.getDataProvider().getPageCount?n:e.next().then((function(e){return n.done=e.done,n.value.data=n.value.data.concat(e.value.data),n.value.metadata=n.value.metadata.concat(n.value.metadata),t(n)}),(function(e){this._handleFetchError(e)}))}(t)}),(function(){i._handleFetchError()})).then((function(e){if(i.isFetching()){if(i.setFetching(!1),null==i.callback||null==e)return;return i.initialFetch=!0,e.done&&i._cachedIteratorsAndResults[null===t?"root":t]&&(i._cachedIteratorsAndResults[null===t?"root":t].iterator=null),i.handleNextItemInResults(n,t,e,a)}}),(function(){i._handleFetchError()}))},i._setNewData=function(e){null!=i.callback&&i.callback.updateData(function(t){var n=e.value.data,a=e.value.metadata;return{renderedData:null==t?{value:{data:n,metadata:a},done:this._checkIteratorAndCache()}:{value:{data:t.value.data.concat(n),metadata:t.value.metadata.concat(a)},done:this._checkIteratorAndCache()}}}.bind(o(i)))},i._checkIteratorAndCache=function(){var e=i._cachedIteratorsAndResults,t=Object.keys(e).map((function(t){return e[t]})),n=!0;return t.forEach((function(e){!e||null==e.iterator&&null==e.cache||(n=!1)})),n},i.fetchMoreRows=function(){if(i.isReady()){var e=i._getLastEntryMetadata(),t=e.key;!e.isLeaf&&i._isExpanded(t)||(t=e.parentKey);var n={};n.size=i._isLoadMoreOnScroll()?i.getFetchSize():-1;var a=i._cachedIteratorsAndResults[null===t?"root":t],r=null,l=null;null!=a&&(r=a.cache,l=a.iterator);var d={value:{data:[],metadata:[]}};return i.handleNextItemInResults(n,t,r,d).then(i._fetchFromAncestors.bind(o(i),n,t,l,d))}return Promise.resolve()},i._fetchFromAncestors=function(e,t,n,a){var r=o(i);if(r._checkFinalResults(e,a))return a.done=i._checkIteratorAndCache(),Promise.resolve(a);return i._fetchNextFromIterator(n,t,e,a).then(function(t,n){if(r._checkFinalResults(e,n)||null===t)return n.done=this._checkIteratorAndCache(),Promise.resolve(n);var a=r._getItemByKey(t,n).metadata.parentKey,i=this._cachedIteratorsAndResults[null===a?"root":a],l=null,o=null;return null!=i&&(l=i.cache,o=i.iterator),this.handleNextItemInResults(e,a,l,n).then(this._fetchFromAncestors.bind(this,e,a,o,n))}.bind(o(i),t,a))},i._getLastEntryMetadata=function(){var e=i.callback.getData();if(e&&e.value.metadata.length){var t=e.value.metadata;return t[t.length-1]}return null},i._isExpanded=function(e){return i.callback.getExpanded().has(e)},i.getChildDataProvider=function(e){return null==e?i.dataProvider:i.dataProvider.getChildDataProvider(e)},i.handleNextItemInResults=function(e,t,n,a){if(null===n||0===n.value.data.length||i._checkFinalResults(e,a))return null!=n&&n.value.data.length?i._cachedIteratorsAndResults[null===t?"root":t]&&(i._cachedIteratorsAndResults[null===t?"root":t].cache=n):i._cachedIteratorsAndResults[null===t?"root":t]&&(i._cachedIteratorsAndResults[null===t?"root":t].cache=null),a.done=i._checkIteratorAndCache(),Promise.resolve(a);var r=n.value.data.shift(),l=n.value.metadata.shift(),d=i._updateMetadata(l,t,a);if(a.value.data.push(r),a.value.metadata.push(d),i._isExpanded(d.key)){var s=i.getChildDataProvider(d.key);if(null!=s){var u={clientId:i._clientId};u.size=i._isLoadMoreOnScroll()?i.getFetchSize():-1;var c=s.fetchFirst(u)[Symbol.asyncIterator]();return i._cachedIteratorsAndResults[null===d.key?"root":d.key]={iterator:c,cache:null},i._fetchNextFromIterator(c,d.key,u,a).then(i.handleNextItemInResults.bind(o(i),u,t,n,a))}}return i.handleNextItemInResults(e,t,n,a)},i._checkFinalResults=function(e,t){return t.value.data.length>=e.size&&-1!==e.size},i._updateMetadata=function(e,t,n){var a=0,r=i._getLastItemByParentKey(t,n),l=null==r?0:r.metadata.indexFromParent+1,o=null===i.getChildDataProvider(e.key);null!=t&&(a=i._getItemByKey(t,n).metadata.treeDepth+1);var d=i._isExpanded(e.key);return{key:e.key,isLeaf:o,parentKey:t,indexFromParent:l,treeDepth:a,expanded:d}},i._getIndexByKey=function(e,t){var n=-1;return t.some((function(t,a){if(t.key===e)return n=a,!0})),n},i._getLastItemByParentKey=function(e,t){var n=null;if(t&&t.value.metadata.slice().reverse().some((function(a,r){if(a.parentKey===e)return n={data:t.value.data[r],metadata:a},!0})),n)return n;var a=i.callback.getData();return a&&a.value.metadata.slice().reverse().some((function(t,r){if(t.parentKey===e)return n={data:a.value.data[r],metadata:t},!0})),n},i._getItemByKey=function(e,t){var n=null;if(t&&t.value.metadata.some((function(a,r){if(a.key===e)return n={data:t.value.data[r],metadata:a},!0})),n)return n;var a=i.callback.getData();return a&&a.value.metadata.some((function(t,r){if(t.key===e)return n={data:a.value.data[r],metadata:t},!0})),n},i.expand=function(e){var t=i.getChildDataProvider(e);if(null!==t){var n=setTimeout(function(){this.callback.getExpandingKeys().has(e)&&this.callback.updateSkeletonKeys(e)}.bind(o(i)),250),a={clientId:i._clientId,size:-1},r=t.fetchFirst(a)[Symbol.asyncIterator]();return i._fetchNextFromIterator(r,e,a,{value:{data:[],metadata:[]}}).then(function(t){null!=this.callback&&this.callback.updateExpand(function(a,r,i,l){if(n&&clearTimeout(n),r.has(e)&&(r=r.delete([e])),!i.has(e)||!l.has(e))return{expandedSkeletonKeys:r};if(null==t)return{expandedSkeletonKeys:r,expandingKeys:i.delete([e])};var o,d=t.value.data,s=t.value.metadata;if(a){var u=a.value.data,c=a.value.metadata,h=this._getIndexByKey(e,c);-1!==h&&(o={value:{data:u.slice(0,h+1).concat(d,u.slice(h+1)),metadata:c.slice(0,h+1).concat(s,c.slice(h+1))},done:a.done})}return null==o&&(o={value:{data:d,metadata:s},done:!0}),{expandedSkeletonKeys:r,expandingKeys:i=i.delete([e]),renderedData:o}}.bind(this))}.bind(o(i)))}},i.collapse=function(e,t){var n=t.value.data,a=t.value.metadata,r=i._findIndex(a,e);if(r>-1){var l=i._getLocalDescendentCount(a,r);n.splice(r+1,l),a.splice(r+1,l)}return{value:{data:n,metadata:a},done:t.done}},i._getLocalDescendentCount=function(e,t){for(var n=0,a=e[t].treeDepth,r=e.length,i=t+1;i<r;i++){if(!(e[i].treeDepth>a))return n;n+=1}return n},i._registerDomScroller=function(){var e={asyncIterator:{next:i.fetchMoreRows.bind(o(i))},fetchSize:i.getFetchSize(),fetchTrigger:i.callback.getSkeletonHeight()*i.getLoadMoreCount(),maxCount:i._getMaxCount(),initialRowCount:i.getFetchSize(),strategy:t.VirtualizationStrategy.HIGH_WATER_MARK,isOverflow:i._getOverflowFunc(),success:function(e){i.handleFetchSuccess(e)},error:function(){i._handleFetchError()},beforeFetch:function(){return i.handleBeforeFetchNext()},beforeFetchByOffset:function(){i.handleBeforeFetchByOffset()}};i.domScroller=new d(i._getScroller(),i.getDataProvider(),e)},i.getLoadMoreCount=function(){return 0},i._getOverflowFunc=function(){return i._getScroller()!==i.root?i._isLastItemInViewport.bind(o(i)):null},i._isLastItemInViewport=function(){var e="."+i.callback.getItemStyleClass()+", ."+i.callback.getGroupStyleClass(),t=i.root.querySelectorAll(e),n=t[t.length-1];if(n){var a=n.getBoundingClientRect();if(a.top>=0&&a.bottom<=document.documentElement.clientHeight)return!1}return!0},i._cachedIteratorsAndResults={},i._clientId=Symbol(),i}return f(h,[{key:"postRender",value:function(){this.initialFetch=!1}},{key:"destroy",value:function(){n(s(h.prototype),"destroy",this).call(this),this.domScroller&&this.domScroller.destroy()}},{key:"_isLoadMoreOnScroll",value:function(){return!0}},{key:"_getScroller",value:function(){var e=this.scrollPolicyOptions.scroller;return null!=e?e:this.root}},{key:"getFetchSize",value:function(){return this.scrollPolicyOptions.fetchSize}},{key:"_getMaxCount",value:function(){return this.scrollPolicyOptions.maxCount}},{key:"isInitialFetch",value:function(){return this.initialFetch}},{key:"renderSkeletonsForLoadMore",value:function(){}},{key:"renderSkeletonsForExpand",value:function(e){}},{key:"renderFetchedData",value:function(){if(null!=this.callback){var e=this._renderOutOfRangeData(),t=this.callback.getData();if(null==t||null==t.value)return e;var n=t.value.data,a=t.value.metadata;return n.length===a.length?(e.push(this.renderData(n,a)),this._isLoadMoreOnScroll()&&(t.done||(0===n.length&&l.info("handleFetchedData: zero data returned while done flag is false"),t.maxCountLimit||(null==this.domScroller&&this._registerDomScroller(),e.push(this.renderSkeletonsForLoadMore()))),t.maxCountLimit&&this._handleScrollerMaxRowCount()),e):void 0}}},{key:"handleBeforeFetchNext",value:function(){return!this.isFetching()}},{key:"handleBeforeFetchByOffset",value:function(){}},{key:"handleFetchSuccess",value:function(e){null!=e&&this._setNewData(e)}},{key:"_handleFetchError",value:function(){this.setFetching(!1)}},{key:"_handleScrollerMaxRowCount",value:function(){}},{key:"renderData",value:function(e,t){if(null==this.callback)return null;for(var n=[],a=this.callback.getSkeletonKeys(),r=0;r<e.length;r++)if(null!=e[r]&&null!=t[r]){if(!this.verifyKey(t[r].key)){l.error("encounted a key with invalid data type.  Acceptable data types for key are: "+this.validKeyTypes),n=[];break}var i=this.addItem(t[r],r,e[r],!0);i&&(n.push(i),a.has(t[r].key)&&n.push(this.renderSkeletonsForExpand(t[r].key)))}return n}},{key:"_renderOutOfRangeData",value:function(){return[]}},{key:"_handleItemsMutated",value:function(e,t,n,a){null!=this.callback&&this.callback.updateData(function(r,i){var l=this,o=i,d={startIndex:r.startIndex,done:r.done,value:{data:r.value.data.slice(0),metadata:r.value.metadata.slice(0)}},s=Array.from(e[t]),u=s.map((function(e){return l._findIndex(r.value.metadata,e)}));this.domScroller&&n(u);var c=isNaN(r.startIndex)?0:r.startIndex,h=Math.max(c+r.value.data.length,this.getFetchSize()),f=!1;if(u.forEach((function(t,n){var r=s[n],i=null!=e.data?e.data[n]:null,l=null!=e.metadata?e.metadata[n]:null;if(t>=c&&t<=h){var u=a(d,r,t,i,l,o);null!=u&&(o=u),f=!0}})),f)return o!==i?{renderedData:d,expandingKeys:o}:{renderedData:d}}.bind(this))}},{key:"_findIndex",value:function(e,t){for(var n=0;n<e.length;n++)if(r.KeyUtils.equals(t,e[n].key))return n;return-1}},{key:"handleModelRefresh",value:function(){this.domScroller&&this.domScroller.destroy(),this.domScroller=null,this._cachedIteratorsAndResults={},n(s(h.prototype),"handleModelRefresh",this).call(this)}},{key:"handleItemsAdded",value:function(e){null!=this.callback&&(this.callback.updateData(function(t,n){var a,r={startIndex:t.startIndex,done:t.done,maxCountLimit:t.maxCountLimit,value:{data:t.value.data.slice(0),metadata:t.value.metadata.slice(0)}},i=e.indexes,l=e.addBeforeKeys,o=e.parentKeys,d=[];return null==i&&null==l&&null==o?r.done&&!r.maxCountLimit&&(r.value.data.push(e.data),a=this._updateMetadata(e.metadata,null,r),r.value.metadata.push(a)):null!=o&&(null==i&&(i=[]),o.forEach(function(t,n){var o=e.data[n],s=e.metadata[n],u=-1;if(null===t||this._isExpanded(t)&&this._getItemByKey(t))if(null!=l)u=null!=l[n]?this._findIndex(r.value.metadata,l[n]):this._findIndex(r.value.metadata,this._getLastItemByParentKey(t).metadata.key)+1;else if(null!=i){var c=this._findIndex(r.value.metadata,t);u=-1===c?i[n]+1:c+i[n]+1}else u=this._findIndex(r.value.metadata,this._getLastItemByParentKey(t).metadata.key)+1;u>-1?(r.value.data.splice(u,0,o),a=this._updateMetadata(s,t,r),r.value.metadata.splice(u,0,a),-1===i.indexOf(u)&&i.push(u),this._isExpanded(s.key)&&d.push(s.key)):r.done&&!r.maxCountLimit&&(r.value.data.push(o),r.value.metadata.push(s))}.bind(this))),this.domScroller&&this.domScroller.handleItemsAdded&&this.domScroller.handleItemsAdded(i),{expandingKeys:n.add(d),renderedData:r}}.bind(this)),n(s(h.prototype),"handleItemsAdded",this).call(this,e))}},{key:"handleItemsRemoved",value:function(e){var t=this;this._handleItemsMutated(e,"keys",(function(e){t.domScroller.handleItemsRemoved&&t.domScroller.handleItemsRemoved(e)}),(function(e,n){var a=t._findIndex(e.value.metadata,n);if(a>-1){var r=t._getLocalDescendentCount(e.value.metadata,a)+1;e.value.data.splice(a,r),e.value.metadata.splice(a,r)}})),n(s(h.prototype),"handleItemsRemoved",this).call(this,e)}},{key:"handleCurrentRangeItemUpdated",value:function(){}},{key:"handleItemsUpdated",value:function(e){var t=this;this._handleItemsMutated(e,"keys",(function(e){t.domScroller.handleItemsUpdated&&t.domScroller.handleItemsUpdated(e)}),(function(e,n,a,r,i,l){var o=e.value.metadata[a],d=o.isLeaf,s=t._updateMetadata(i,o.parentKey,{value:{data:[r],metadata:[i]}});return d&&!s.isLeaf&&(l=l.add([s.key])),e.value.data.splice(a,1,r),e.value.metadata.splice(a,1,s),t.handleCurrentRangeItemUpdated(),l})),n(s(h.prototype),"handleItemsUpdated",this).call(this,e)}},{key:"checkViewport",value:function(){if(this.domScroller&&this.isReady()){var e=this.domScroller.checkViewport();null!=e&&this.fetchPromise!==e&&(this.fetchPromise=e,e.then(function(e){this.fetchPromise=null,null!=e&&this.handleFetchSuccess(e)}.bind(this)))}}}]),h}(v),g=function(e){a(n,e);var t=i(n);function n(){return c(this,n),t.apply(this,arguments)}return n}(e(HTMLElement));t.IteratingDataProviderContentHandler=y,t.IteratingTreeDataProviderContentHandler=p,t.KeyedElement=g,t.VirtualizeDomScroller=m,Object.defineProperty(t,"__esModule",{value:!0})}))}();