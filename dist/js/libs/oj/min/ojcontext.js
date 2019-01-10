/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore-base","ojs/ojlogger"],function(e,t){e.BusyContext=function(e){this.Init(e)},e.Object.createSubclass(e.BusyContext,e.Object,"oj.BusyContext"),e.BusyContext._defaultTimeout=Number.NaN,e.BusyContext.setDefaultTimeout=function(t){isNaN(t)||(e.BusyContext._defaultTimeout=t)},e.BusyContext.prototype.Init=function(t){e.BusyContext.superclass.Init.call(this),this._hostNode=t,this._statesMap=new Map,this._mediator={getMasterWhenReadyPromise:function(){return this._masterWhenReadyPromise||(this._masterWhenReadyPromise=new Promise(this._captureWhenReadyPromiseResolver.bind(this))),this._masterWhenReadyPromise},resolveMasterWhenReadyPromise:function(){this._masterWhenReadyPromiseResolver&&this._masterWhenReadyPromiseResolver(!0),this._masterWhenReadyPromise=null,this._masterWhenReadyPromiseResolver=null,this._masterWhenReadyPromiseRejecter=null},rejectMasterWhenReadyPromise:function(e){this._masterWhenReadyPromiseRejecter&&this._masterWhenReadyPromiseRejecter(e),this._masterWhenReadyPromise=null,this._masterWhenReadyPromiseRejecter=null,this._masterWhenReadyPromiseResolver=null},getSlaveTimeoutPromise:function(e,t,s){var o,n=new Promise(function(e,n){o=window.setTimeout(function(){n(t())},s)});return this._slaveTimeoutPromiseTimers.push(o),Promise.race([e,n]).then(this._clearAllSlaveTimeouts.bind(this))},getNextTickPromise:function(){return this._nextTickPromise||(this._nextTickPromise=new Promise(function(e){window.setImmediate(function(){this._nextTickPromise=null,e(!0)}.bind(this))}.bind(this))),this._nextTickPromise},_clearAllSlaveTimeouts:function(){var e=this._slaveTimeoutPromiseTimers;this._slaveTimeoutPromiseTimers=[];for(var t=0;t<e.length;t++)window.clearTimeout(e[t]);return!0},_captureWhenReadyPromiseResolver:function(e,t){this._masterWhenReadyPromiseResolver=e,this._masterWhenReadyPromiseRejecter=t},_slaveTimeoutPromiseTimers:[]}},e.BusyContext._log=function(s){if(t.option("level")===t.LEVEL_LOG){t.log(">> Busy states: %d",s.size);var o=e.BusyContext._values(s);o.length>0&&t.log(o.join("\n"))}},e.BusyContext._values=function(e){var t=[];return e.forEach(function(e){t.push(e)}),t},e.BusyContext.prototype.addBusyState=function(s){t.log("BusyContext.addBusyState: start scope='%s'",this._getDebugScope());var o=this._statesMap,n=new e.BusyState(s[e.BusyContext._DESCRIPTION]);return t.log(">> "+n),o.set(n.id,n),this._addBusyStateToParent(),t.log("BusyContext.addBusyState: end scope='%s'",this._getDebugScope()),this._removeBusyState.bind(this,n)},e.BusyContext.prototype.dump=function(s){t.info("BusyContext.dump: start scope='%s' %s",this._getDebugScope(),s||"");var o=this._statesMap;t.info(">> Busy states: %d",o.size);var n=e.BusyContext._values(o);n.length>0&&t.info(n.join("\n")),t.info("BusyContext.dump: start scope='%s' %s",this._getDebugScope(),s||"")},e.BusyContext.prototype.getBusyStates=function(){var t=this._statesMap;return e.BusyContext._values(t)},e.BusyContext.prototype.clear=function(){t.log("BusyContext.clear: start scope='%s'",this._getDebugScope());for(var s=this._statesMap,o=e.BusyContext._values(s),n=0;n<o.length;n++){var i=o[n];try{this._removeBusyState(i)}catch(e){t.log("BusyContext.clear: %o",e)}Object.defineProperty(i,e.BusyContext._OJ_RIP,{value:!0,enumerable:!1})}t.log("BusyContext.clear: end scope='%s'",this._getDebugScope())},e.BusyContext.prototype.whenReady=function(s){var o=this._getDebugScope();t.log("BusyContext.whenReady: start, scope='%s', timeout=%d",o,s);var n=this._statesMap,i=this._mediator,r=i.getNextTickPromise(),a=e.BusyContext._BOOTSTRAP_MEDIATOR.whenReady(),u=Promise.all([r,a]).then(function(){t.log("BusyContext.whenReady: bootstrap mediator ready scope=%s",o);try{e.BusyContext._deliverThrottledUpdates()}catch(e){throw t.error("Fatal exception delivering binding updates: %o",e),e}return 0!==n.size||this._waitingOnNextTickBusynessEval?(t.log("BusyContext.whenReady: busy states returning master scope=%s",o),i.getMasterWhenReadyPromise()):(t.log("BusyContext.whenReady: resolved no busy states scope=%s",o),!0)}.bind(this));if(isNaN(s)&&!isNaN(e.BusyContext._defaultTimeout)&&(s=e.BusyContext._defaultTimeout),!isNaN(s)){u=i.getSlaveTimeoutPromise(u,function(){var i,r="whenReady timeout of "+s+"ms expired ";e.BusyContext._log(n);var a=e.BusyContext._values(n);return(i=e.BusyContext._BOOTSTRAP_MEDIATOR.isReady()?new Error(r+"with the following busy states: "+a.join(", ")):new Error(r+'while the application is loading. Busy state enabled by setting the "window.oj_whenReady = true;" global variable. Application bootstrap busy state is released by calling "oj.Context.getPageContext().getBusyContext().applicationBootstrapComplete();".')).busyStates=a,t.log("BusyContext.whenReady: rejected scope='%s'\n%s",o,i.message),i},s)}return t.log("BusyContext.whenReady: end scope='%s'",this._getDebugScope()),u},e.BusyContext.prototype.isReady=function(){t.log("BusyContext.isReady: start scope='%s'",this._getDebugScope());var s=!1;if(e.BusyContext._BOOTSTRAP_MEDIATOR.isReady()&&!this._waitingOnNextTickBusynessEval){var o=this._statesMap;s=0===o.size,e.BusyContext._log(o)}return t.log("BusyContext.isReady: end scope='%s'",this._getDebugScope()),s},e.BusyContext.prototype._removeBusyState=function(s){var o=this._getDebugScope();t.log("BusyContext._removeBusyState: start scope='%s'",o);var n=this._statesMap;if(s[e.BusyContext._OJ_RIP])t.log("Busy state has been forcefully resolved via clear:\n"+s);else{if(!n.delete(s.id))throw new Error("Busy state has already been resolved:\n"+s);t.log("BusyContext._removeBusyState: resolving busy state:\n"+s),0!==n.size||this._waitingOnNextTickBusynessEval||(this._waitingOnNextTickBusynessEval=!0,window.setImmediate(this._evalBusyness.bind(this))),t.log("BusyContext._removeBusyState: end scope='%s'",o)}},e.BusyContext.prototype._evalBusyness=function(){var s=this._getDebugScope();t.log("BusyContext._evalBusyness: begin scope='%s'",s);try{e.BusyContext._deliverThrottledUpdates()}catch(e){return t.error("Fatal exception delivering binding updates: %o",e),this._mediator.rejectMasterWhenReadyPromise(e),void(this._waitingOnNextTickBusynessEval=!1)}var o=this._statesMap,n=this._mediator;this._waitingOnNextTickBusynessEval=!1,0===o.size?(t.log("BusyContext._evalBusyness: resolving whenReady promises"),n.resolveMasterWhenReadyPromise(),this._resolveBusyStateForParent()):e.BusyContext._log(o),t.log("BusyContext._evalBusyness: end scope='%s'",s)},e.BusyContext.prototype.applicationBootstrapComplete=function(){var s=this._getDebugScope();t.log("BusyContext.applicationBootstrapComplete: begin scope='%s'",s),e.BusyContext._BOOTSTRAP_MEDIATOR.notifyComplete(),t.log("BusyContext.applicationBootstrapComplete: end scope='%s'",s)},e.BusyContext.prototype._getParentBusyContext=function(){if(this._hostNode){var t=e.Context.getContext(e.Context.getParentElement(this._hostNode));if(t)return t.getBusyContext()}return null},e.BusyContext.prototype._addBusyStateToParent=function(){if(!this._parentNotified){this._parentNotified=!0;var t=this._getParentBusyContext();if(t){var s={};s[e.BusyContext._DESCRIPTION]=this._getCompoundDescription.bind(this),this._parentResolveCallback=t.addBusyState(s)}}},e.BusyContext.prototype._resolveBusyStateForParent=function(){this._parentNotified=!1,this._parentResolveCallback&&(this._parentResolveCallback(),this._parentResolveCallback=null)},e.BusyContext.prototype._getCompoundDescription=function(){return"["+e.BusyContext._values(this._statesMap).join(", ")+"]"},e.BusyContext.prototype._getDebugScope=function(){function e(e){var t="undefined";if(e)if(e.id&&e.id.length>0)t="#"+e.id;else{t=e.nodeName,e.hasAttribute("data-oj-context")&&(t+="[data-oj-context]");var s=e.getAttribute("class");s&&(t+="."+s.split(" ").join("."))}return t}return this._debugScope||(this._hostNode?this._debugScope=e(this._hostNode.parentElement)+" > "+e(this._hostNode):this._debugScope="page"),this._debugScope},e.BusyContext.prototype.toString=function(){var e="Busy Context: [scope=";return e+=this._getDebugScope(),e+=" states="+this._getCompoundDescription()+"]"},e.BusyContext._deliverThrottledUpdates=function(){e.ComponentBinding&&e.ComponentBinding.deliverChanges()},e.BusyContext._DESCRIPTION="description",e.BusyContext._OJ_RIP="__ojRip",e.BusyContext._BOOTSTRAP_MEDIATOR=new function(){var e,t,s;"undefined"!=typeof window&&(e=window.oj_whenReady),this.whenReady=function(){return t||(t=e?new Promise(function(e){s=e}):Promise.resolve(!0))},this.isReady=function(){return!e},this.notifyComplete=function(){s?window.setImmediate(function(){e=!1,s(!0),s=null}):e=!1}},e.BusyState=function(t){this._description=t,this._addedWaitTs=e.BusyState._getTs(),this._id=this._addedWaitTs.toString(36)+"_"+Math.random().toString(36)},Object.defineProperties(e.BusyState.prototype,{id:{get:function(){return this._id},enumerable:!0},description:{get:function(){if(this._description)return this._description instanceof Function?this._description():this._description.toString()},enumerable:!0}}),e.BusyState.prototype.toString=function(){var t="Busy state: [description=",s=this.description;return null!==s&&(t+=s),t+=", elapsed="+(e.BusyState._getTs()-this._addedWaitTs)+"]"},e.BusyState._getTs=function(){return window.performance?window.performance.now():(new Date).getTime()};var s=function(e){this.Init(e)};return e.Object.createSubclass(s,e.Object,"oj.Context"),s.prototype.Init=function(e){s.superclass.Init.call(this),this._node=e},s.getContext=function(e){for(;e;){var t=e[s._OJ_CONTEXT_INSTANCE];if(t)return t;if(e.hasAttribute(s._OJ_CONTEXT_ATTRIBUTE))return t=new s(e),Object.defineProperty(e,s._OJ_CONTEXT_INSTANCE,{value:t}),t;e=s.getParentElement(e)}return s.getPageContext()},s.getPageContext=function(){return s._pageContext||(s._pageContext=new s),s._pageContext},s.prototype.getBusyContext=function(){return this._busyContext||(this._busyContext=new e.BusyContext(this._node)),this._busyContext},s.setBusyContextDefaultTimeout=function(t){e.BusyContext.setDefaultTimeout(t)},s._OJ_CONTEXT_ATTRIBUTE="data-oj-context",s._OJ_CONTEXT_INSTANCE="__ojContextInstance",s._OJ_SURROGATE_ATTR="data-oj-surrogate-id",s.getParentElement=function(e){if(e&&e.hasAttribute(s._OJ_SURROGATE_ATTR)){var t=document.getElementById(e.getAttribute(s._OJ_SURROGATE_ATTR));if(t)return t.parentElement}return e.parentElement},s});