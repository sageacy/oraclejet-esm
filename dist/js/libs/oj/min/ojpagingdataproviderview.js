/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojeventtarget","ojs/ojdataprovider"],(function(t,e){class i{constructor(t){this.dataProvider=t,this._KEY="key",this._KEYS="keys",this._STARTINDEX="startIndex",this._PAGESIZE="pageSize",this._OFFSET="offset",this._SIZE="size",this._PAGE="page",this._PAGECOUNT="pageCount",this._TOTALSIZE="totalsize",this._PREVIOUSPAGE="previousPage",this._BEFOREPAGE="beforePage",this._DONE="done",this._VALUE="value",this._DATA="data",this._REFRESH="refresh",this._MUTATE="mutate",this._SORTCRITERIA="sortCriteria",this._FILTERCRITERION="filterCriterion",this._METADATA="metadata",this._RESULTS="results",this._FETCHPARAMETERS="fetchParameters",this._CONTAINSPARAMETERS="containsParameters",this._CONTAINSKEYS="containsKeys",this._FETCHBYKEYS="fetchByKeys",this._FETCHBYOFFSET="fetchByOffset",this._AFTERKEYS="afterKeys",this._ADDBEFOREKEYS="addBeforeKeys",this._ADD="add",this._REMOVE="remove",this._UPDATE="update",this._INDEXES="indexes",this.AsyncIterable=class{constructor(t,e){this._parent=t,this._asyncIterator=e,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}},this.AsyncIterator=class{constructor(t,e,i,r){this._parent=t,this._nextFunc=e,this._params=i,this._clientId=r}next(){let t=this._nextFunc(this._params,this._clientId);return Promise.resolve(t)}},this.AsyncIteratorYieldResult=class{constructor(t,e){this._parent=t,this.value=e,this[t._VALUE]=e,this[t._DONE]=!1}},this.AsyncIteratorReturnResult=class{constructor(t,e){this._parent=t,this.value=e,this[t._VALUE]=e,this[t._DONE]=!0}},this.FetchListParameters=class{constructor(t,e,i,r){this._parent=t,this.size=e,this.sortCriteria=i,this.filterCriterion=r,this[t._SIZE]=e,this[t._SORTCRITERIA]=i,this[t._FILTERCRITERION]=r}},this.FetchListResult=class{constructor(t,e,i,r){this._parent=t,this.fetchParameters=e,this.data=i,this.metadata=r,this[t._FETCHPARAMETERS]=e,this[t._DATA]=i,this[t._METADATA]=r}},this.FetchByOffsetParameters=class{constructor(t,e,i,r,n){this._parent=t,this.offset=e,this.size=i,this.sortCriteria=r,this.filterCriterion=n,this[t._SIZE]=i,this[t._SORTCRITERIA]=r,this[t._OFFSET]=e,this[t._FILTERCRITERION]=n}},this.FetchByOffsetResults=class{constructor(t,e,i,r){this._parent=t,this.fetchParameters=e,this.results=i,this.done=r,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=i,this[t._DONE]=r}},this.FetchByKeysResults=class{constructor(t,e,i){this._parent=t,this.fetchParameters=e,this.results=i,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=i}},this.ContainsKeysResults=class{constructor(t,e,i){this._parent=t,this.containsParameters=e,this.results=i,this[t._CONTAINSPARAMETERS]=e,this[t._RESULTS]=i}},this.ItemMetadata=class{constructor(t,e){this._parent=t,this.key=e,this[t._KEY]=e}},this.DataProviderMutationEventDetail=class{constructor(t,e,i,r){this._parent=t,this.add=e,this.remove=i,this.update=r,this[t._ADD]=e,this[t._REMOVE]=i,this[t._UPDATE]=r}},this.DataProviderOperationEventDetail=class{constructor(t,e,i,r,n){this._parent=t,this.keys=e,this.metadata=i,this.data=r,this.indexes=n,this[t._KEYS]=e,this[t._METADATA]=i,this[t._DATA]=r,this[t._INDEXES]=n}},this.DataProviderAddOperationEventDetail=class{constructor(t,e,i,r,n,s,a){this._parent=t,this.keys=e,this.afterKeys=i,this.addBeforeKeys=r,this.metadata=n,this.data=s,this.indexes=a,this[t._KEYS]=e,this[t._AFTERKEYS]=i,this[t._ADDBEFOREKEYS]=r,this[t._METADATA]=n,this[t._DATA]=s,this[t._INDEXES]=a}};let e=this;this._addEventListeners(t),this._currentPage=-1,this._pageSize=-1,this._pageCount=-1,this._offset=0,this._mutationOffset=0,this._totalSize=-1,this._skipCriteriaCheck=!1,this._isInitialized=new Promise((function(t){e._resolveFunc=t})),this._isInitialDataLoaded=new Promise((function(t){e._dataResolveFunc=t})),this._hasMutated=!1,this._selfRefresh=!1,this._mustRefetch=!1,this._isFetchingForMutation=!1,this._mutationEventQueue=[],this._isMutating=null,this._mutationFunc=null,this._doRefreshEvent=!1,this._mutatingTotalSize=null,this._fetchMore=!1,this._isUnknownRowCount=!1,this._fetchFirstDone=!1,this._iteratorCacheMap=new Map}containsKeys(t){let e=this;return this._checkIfDataInitialized((function(){return e.dataProvider[e._CONTAINSKEYS](t).then((function(i){let r=i.results;if(e._isGlobal(t))return new e.ContainsKeysResults(e,t,r);{let i=new Set,n=e._getCurrentPageKeys();return r.forEach((function(t){-1!=n.indexOf(t)&&i.add(t)})),new e.ContainsKeysResults(e,t,i)}}))}))}fetchByKeys(t){let e=this;return this._checkIfDataInitialized((function(){let i=t.keys;if(e._isGlobal(t)){if(e.dataProvider[e._FETCHBYKEYS])return e.dataProvider[e._FETCHBYKEYS](t);throw new Error("Global scope not supported for this dataprovider")}return e._fetchByOffset(new e.FetchByOffsetParameters(e,e._offset,e._pageSize,e._currentSortCriteria,e._currentFilterCriteria)).then((function(r){let n=r.results,s=new Map;return n.map((function(t){if(i.has(t[e._METADATA][e._KEY]))return t})).forEach((function(t){t&&s.set(t[e._METADATA][e._KEY],t)})),new e.FetchByKeysResults(e,t,s)}))}))}fetchByOffset(t){let e=this;return this._checkIfDataInitialized((function(){let i=null!=t&&t[e._OFFSET]>0?t[e._OFFSET]:0;return t=new e.FetchByOffsetParameters(e,e._offset,e._pageSize,e._currentSortCriteria,e._currentFilterCriteria),e._fetchByOffset(t).then((function(r){let n=r.results.filter((function(t,e){return e>=i}));return new e.FetchByOffsetResults(e,e._getLocalParams(t),n,r.done)}))}))}fetchFirst(t){let e=this,i=null!=t?t[e._SORTCRITERIA]:null,r=null!=t?t[e._FILTERCRITERION]:null,n={};e._skipCriteriaCheck?e._skipCriteriaCheck=!1:e._isSameCriteria(i,r)||(e._currentSortCriteria=i,e._currentFilterCriteria=r,e._offset=0,0!=e._currentPage&&(n[e._PREVIOUSPAGE]=e._currentPage,e._currentPage=0,n[e._PAGE]=e._currentPage));let s=e._offset,a=e._pageSize,u=t&&t.clientId||Symbol();return this._iteratorCacheMap.set(u,{offset:s,size:a,mutationOffset:0,fetchFirstDone:!1,currentParams:e._currentParams}),new e.AsyncIterable(e,new e.AsyncIterator(e,(function(t,i){let r=e._iteratorCacheMap.get(i),s=r.offset,a=r.size,u=r.mutationOffset,_=r.fetchFirstDone,o=r.currentParams,h=new e.FetchByOffsetParameters(e,s,a,e._currentSortCriteria,e._currentFilterCriteria);0!=u&&(h=o);let c=!1;return null!=e._isInitialDataLoaded&&(c=!0),e._checkIfDataInitialized((function(){return c&&(a=e._pageSize,s=e._offset,h=new e.FetchByOffsetParameters(e,s,a,e._currentSortCriteria,e._currentFilterCriteria)),e._fetchByOffset(h).then((function(t){let r=t.results;_&&0==u&&(r=[]),0!=u&&(r=r.slice(r.length-u));let h=r.map((function(t){return t[e._DATA]})),c=r.map((function(t){return t[e._METADATA]}));s=s+c.length-u,null!=n[e._PAGE]&&(e._endItemIndex=e._offset+h.length-1,e.dispatchEvent(new CustomEvent(e._PAGE,{detail:n})),n={}),e._skipCriteriaCheck=!1;let l=new e.FetchByOffsetParameters(e,t.fetchParameters.offset-e._mutationOffset,e._pageSize,e._currentSortCriteria);return u=0,_=t[e._DONE],e._iteratorCacheMap.set(i,{offset:s,size:a,mutationOffset:u,fetchFirstDone:_,currentParams:o}),t[e._DONE]?Promise.resolve(new e.AsyncIteratorReturnResult(e,new e.FetchListResult(e,l,h,c))):Promise.resolve(new e.AsyncIteratorYieldResult(e,new e.FetchListResult(e,l,h,c)))}))}))}),t,u))}getCapability(t){return this.dataProvider.getCapability(t)}getTotalSize(){let t=this;return this._checkIfInitialized((function(){return new Promise((function(e){e(t._pageSize)}))}))}isEmpty(){return this.dataProvider.isEmpty()}getPage(){return this._currentPage}setPage(e,i){let r=this;return this._mutationBusyContext((function(){e=parseInt(e,10);let n={};n[r._PAGE]=e,n[r._PREVIOUSPAGE]=r._currentPage,r.dispatchEvent(new CustomEvent(r._BEFOREPAGE,{detail:n})),null!=i[r._PAGESIZE]&&(r._pageSize=i[r._PAGESIZE]),r._offset=parseInt(e,10)*r._pageSize,r._currentPage=e,null!=r._isInitialized&&(r._resolveFunc(!0),r._updateTotalSize());let s=new r.FetchByOffsetParameters(r,r._offset,r._pageSize,r._currentSortCriteria,r._currentFilterCriteria);return r._fetchByOffset(s).then((function(i){let s=i.results;0!==s.length?(r._endItemIndex=r._offset+s.length-1,r._skipCriteriaCheck=!0,r.dispatchEvent(new CustomEvent(r._PAGE,{detail:n})),r._updateTotalSize()):0!==r._currentPage?(r._currentPage=n[r._PREVIOUSPAGE],r._offset=r._currentPage*r._pageSize,r.dispatchEvent(new CustomEvent(r._PAGECOUNT,{detail:{previousValue:e,value:e}})),r._doRefreshEvent=!1):(r._offset=0,r._endItemIndex=0),r._doRefreshEvent?(r._hasMutated=!0,r._selfRefresh=!0,r.dispatchEvent(new t.DataProviderRefreshEvent)):(r._dataResolveFunc(!0),r._doRefreshEvent=!0),r._isInitialDataLoaded&&r._dataResolveFunc(!0)}))}))}getStartItemIndex(){return this._offset}getEndItemIndex(){return this._endItemIndex}getPageCount(){return this._pageCount}totalSize(){return this._totalSize}totalSizeConfidence(){return this._totalSizeConfidence?this._totalSizeConfidence:-1===this._totalSize?"unknown":"actual"}getGlobalIndex(t){return this._offset+t}getLocalIndex(t){return t-this._offset}_getLocalParams(t){return new this.FetchByOffsetParameters(this,this.getLocalIndex(t.offset),t.size,t.sortCriteria,t.filterCriterion)}_updateTotalSize(){let t=this,e=t._totalSize,i=t._pageCount;return this._checkIfInitialized((function(){return t.dataProvider.getTotalSize().then((function(r){if(t._totalSize=r,t._pageCount=-1,-1!==t._totalSize){if(t._isUnknownRowCount&&(t._isUnknownRowCount=!1,t._totalSizeConfidence="atLeast"),t._pageCount=Math.ceil(t._totalSize/t._pageSize),t._offset>=t._totalSize){t._offset=t._totalSize-t._totalSize%t._pageSize,t._endItemIndex=t._totalSize-1;let e=Math.floor(t._totalSize/t._pageSize);if(t._currentPage!=e){let i={};i[t._PAGE]=e,i[t._PREVIOUSPAGE]=t._currentPage,t.dispatchEvent(new CustomEvent(t._PAGE,{detail:i})),t._currentPage=e}}i!=t._pageCount?t.dispatchEvent(new CustomEvent(t._PAGECOUNT,{detail:{previousValue:i,value:t._pageCount}})):e!=t._totalSize&&t.dispatchEvent(new CustomEvent(t._TOTALSIZE,{detail:{previousValue:e,value:t._totalSize}}))}return t._pageSize}))}))}_mutationBusyContext(t){let e=this;return this._isMutating?e._isMutating.then((function(){return e._isMutating=null,t()})):t()}_setupMutationBusyContext(){let t=this;this._isMutating=new Promise((function(e){t._mutationFunc=e}))}_checkIfInitialized(t){let e=this;return this._isInitialized?e._isInitialized.then((function(i){if(i&&-1!=e._currentPage)return e._isInitialized=null,t();throw e._isInitialized=null,new Error("Paging DataProvider View incorrectly initialized")})):t()}_checkIfDataInitialized(t){let e=this;return this._isInitialDataLoaded?e._isInitialDataLoaded.then((function(i){if(i&&-1!=e._currentPage)return e._isInitialDataLoaded=null,t();throw e._isInitialDataLoaded=null,new Error("Paging DataProvider View incorrectly initialized")})):t()}_getCurrentPageKeys(){let t=this;return this._currentResults.map((function(e){return e[t._METADATA][t._KEY]}))}_isSameParams(t){return this._currentParams[this._SIZE]===t[this._SIZE]&&this._currentParams[this._OFFSET]===t[this._OFFSET]&&this._currentParams[this._SORTCRITERIA]===t[this._SORTCRITERIA]&&this._currentParams[this._FILTERCRITERION]===t[this._FILTERCRITERION]}_isSameCriteria(t,e){if(t){if(!this._currentSortCriteria||t[0].attribute!=this._currentSortCriteria[0].attribute||t[0].direction!=this._currentSortCriteria[0].direction)return!1}else if(this._currentSortCriteria)return!1;if(e){if(!this._currentFilterCriteria)return!1;for(const t in this._currentFilterCriteria)if(!this._filterCompare(this._currentFilterCriteria,e,t))return!1;for(const t in e)if(!this._filterCompare(this._currentFilterCriteria,e,t))return!1}else if(this._currentFilterCriteria)return!1;return!0}_filterCompare(t,e,i){return!(!t[i]||!e[i]||t[i]!=e[i])}_isGlobal(t){return null!=t.scope&&"global"===t.scope}_getCurrentPageData(){let t=this;return t._currentParams&&t._currentParams.offset===t._offset&&t._currentParams.size===t._pageSize?t._currentResults&&!t._hasMutated?new Promise((function(e){e(new t.FetchByOffsetResults(t,t._getLocalParams(t._currentParams),t._currentResults,t._currentIsDone))})):t._fetchByOffset(t._currentParams).then((function(t){return t})):t._fetchByOffset(new t.FetchByOffsetParameters(t,t._offset,t._pageSize,t._currentSortCriteria,t._currentFilterCriteria)).then((function(t){return t}))}_fetchByOffset(t){let e=this;return this._checkIfInitialized((function(){return e._currentParams&&e._isSameParams(t)&&(!e._hasMutated||e._selfRefresh)?(e._selfRefresh=!1,e._hasMutated=!1,new Promise((function(t){t(new e.FetchByOffsetResults(e,e._getLocalParams(e._currentParams),e._currentResults,e._currentIsDone))}))):0===(t=e._cleanFetchParams(t)).size?(e._currentIsDone=!0,e._currentResults=[],e._currentParams=t,new Promise((function(i){i(new e.FetchByOffsetResults(e,e._getLocalParams(t),[],e._currentIsDone))}))):e._fetchByOffsetHelper(t)}))}_fetchByOffsetHelper(t){let e=this;return e.dataProvider[e._FETCHBYOFFSET](t).then((function(i){e._currentIsDone=i.done,e._fetchMore?e._currentResults=e._currentResults.concat(i.results):(e._currentResults=i.results,e._currentParams=t),e._fetchMore=!1;let r=e._currentResults.length,n=e._offset+r;if(i.done)e._pageCount=Math.ceil(n/e._pageSize),e._totalSizeConfidence&&(e._totalSizeConfidence=null);else if(!i.done&&n>=e._totalSize&&e._totalSize>-1&&t.size===e._pageSize)e._totalSizeConfidence="atLeast",e._pageCount=e._pageCount+1;else{if(!i.done&&r<e._pageSize){e._fetchMore=!0;let t=new e.FetchByOffsetParameters(e,n,e._pageSize-r,e._currentSortCriteria,e._currentFilterCriteria);return e._fetchByOffsetHelper(t)}i.done||-1!==e._totalSize||(e._isUnknownRowCount=!0)}return(e._pageSize==e._currentResults.length||n>=e._totalSize&&e._totalSize>-1)&&(e._currentIsDone=!0),r>e._pageSize&&e._currentResults.splice(e._pageSize),e._hasMutated=!1,new e.FetchByOffsetResults(e,e._getLocalParams(e._currentParams),e._currentResults,e._currentIsDone)})).catch((function(t){return e._hasMutated=!1,e._fetchMore=!1,e._currentIsDone=null,e._currentResults=null,e._currentParams=null,Promise.reject(t)}))}_cleanFetchParams(t){let e=this,i=t.offset;(i>=e._offset+e._pageSize||i<e._offset)&&(i=e._offset);let r=t.size;r<=0&&(r=e._pageSize),i+r>e._offset+e._pageSize&&(r=e._offset+e._pageSize-i);let n=null===e._mutatingTotalSize?e._totalSize:e._mutatingTotalSize;return n>0&&"atLeast"!==e._totalSizeConfidence&&i+r>n&&(r=n-i),new e.FetchByOffsetParameters(e,i,r,t.sortCriteria,t.filterCriterion)}_mutationEventDataFetcher(t){let e=this;this.dataProvider.getTotalSize().then((function(i){i>0&&(e._mutatingTotalSize=i,e._offset>=i&&(e._offset=i-(i-1)%e._pageSize-1,e._endItemIndex=i-1)),e._getCurrentPageData().then((function(i){e._mustRefetch?(e._mustRefetch=!1,e._hasMutated=!0,e._mutationEventDataFetcher(t)):t(i)})).catch((function(i){if(!e._mustRefetch)return Promise.reject(i);e._mustRefetch=!1,e._hasMutated=!0,e._mutationEventDataFetcher(t)}))}))}_processMutationEventsByKey(e){let i=this,r=[],n=[],s=[],a=new Set,u=[],_=[],o=[],h=new Set,c=[],l=[],f=[],d=new Set,E=i._currentResultsForMutation.map((function(t,e){return{item:t,index:e}})),m=e.results.map((function(t,e){return{item:t,index:e}})),S=E.map((function(t){return t.item.metadata.key})),p=m.map((function(t){return t.item.metadata.key})),P=E.filter((function(t){return p.indexOf(t.item.metadata.key)<0})),g=m.filter((function(t){return S.indexOf(t.item.metadata.key)<0})),I=i._mutationEventQueue.filter((function(t){return!t.detail.add&&!t.detail.remove&&t.detail.update})).map((function(t){return t.detail.update.indexes.map(t=>t-i._pageSize*i._currentPage)}));I=I.reduce((function(t,e){return t.concat(e)}),[]),I=I.filter((function(t,e){return I.indexOf(t)===e}));let R=E.filter((function(t){let e=p.indexOf(t.item.metadata.key);return I.indexOf(e)>-1}));i._mutationEventQueue=[],g.length>0&&(g.forEach((function(t){u.push(m[t.index].item.metadata),_.push(m[t.index].item.data),o.push(t.index)})),u.map((function(t){h.add(t.key)}))),P.length>0&&(P.forEach((function(t){r.push(E[t.index].item.metadata),n.push(E[t.index].item.data),s.push(t.index)})),r.map((function(t){a.add(t.key)}))),R.length>0&&(R.forEach((function(t){c.push(m[t.index].item.metadata),l.push(m[t.index].item.data),f.push(t.index)})),c.map((function(t){d.add(t.key)})));let C=i._endItemIndex-i._offset-s.length,F=o.filter((function(t){return t>=C}));this._iteratorCacheMap.forEach(function(t,e){t.mutationOffset=F.length,this._iteratorCacheMap.set(e,t)}.bind(this));let T=null,z=null,A=null;if(o.length>0&&(T=new i.DataProviderAddOperationEventDetail(i,h,null,null,u,_,o)),s.length>0&&(z=new i.DataProviderOperationEventDetail(i,a,r,n,s)),f.length>0&&(A=new i.DataProviderOperationEventDetail(i,d,c,l,f)),null!=T||null!=z||null!=A){let e=new i.DataProviderMutationEventDetail(i,T,z,A);i.dispatchEvent(new t.DataProviderMutationEvent(e))}}_addEventListeners(e){let i=this;e.addEventListener(this._REFRESH,(function(e){i._hasMutated||(i._hasMutated=!0,i._isInitialDataLoaded=new Promise((function(t){i._dataResolveFunc=t})),i._updateTotalSize().then((function(){i.setPage(0,{pageSize:i._pageSize}).then((function(){0===i._endItemIndex&&i.dispatchEvent(new t.DataProviderRefreshEvent)}))})))})),e.addEventListener(this._MUTATE,(function(t){i._mutationEventQueue.push(t),i._setupMutationBusyContext(),i._isFetchingForMutation?i._mustRefetch=!0:(i._isFetchingForMutation=!0,i._currentResultsForMutation=i._currentResults,i._hasMutated=!0,i._mutationEventDataFetcher((function(t){i._isFetchingForMutation=!1,i._updateTotalSize().then((function(){i._mutatingTotalSize=null;let e=t.results.length;0===e?(i._mutationFunc(!0),i.setPage(i._currentPage,{pageSize:i._pageSize})):(i._endItemIndex=i._offset+e-1,i._processMutationEventsByKey(t),i._mutationFunc(!0))}))})))}))}}return t.PagingDataProviderView=i,t.PagingDataProviderView=i,t.EventTargetMixin.applyMixin(i),i}));