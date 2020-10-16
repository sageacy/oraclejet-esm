/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","ojs/ojobservable","ojs/ojurlpathadapter","ojs/ojlogger"],(function(t,e,r,i){"use strict";return function(){var t,o,n=[],s=function(){let e=t;const r=[];let i;for(;e;)i=e._activeState,i&&r.push({path:i.path||"",params:i.params}),e=e._childRouter;return r};function a(i,n,s){if(n=n||{},this._name="/",this._offset=0,this.beforeStateChange=new e.BehaviorSubject({accept:function(){}}),this.currentState=new e.BehaviorSubject({complete:function(){}}),this._noHistory=s&&s._noHistory||"skip"===n.history,this._noHistoryOffset=0,this._parentRouter=s,s)this._name=s._name+s._activeState.path+"/",this._offset=s._offset+1,s._noHistory&&(this._noHistoryOffset=s._noHistoryOffset+1);else{if(t)throw Error("Only one root CoreRouter instance may exist at a time");t=this,o=n.urlAdapter||new r,this._setupNavigationListener()}this._configure(i)}return a.prototype._configure=function(t){this._states=[],t&&t.forEach((function(t){var e=t.path,r=e;if("string"==typeof e)r=new RegExp("^"+e+"$");else if(!(e instanceof RegExp))throw Error("Router path must be a string or RegExp");var i={path:e,detail:t.detail,params:{},_match:r,_redirect:t.redirect};this._states.push(i)}),this)},a.prototype.sync=function(){var t=this._getRouteSegment();return this._execute(t||{path:"",params:{}}).then(t=>{var e=t,r=this._childRouter;return r?e=r.sync():this._noHistory||(n=[]),e})},a.prototype._getRouteSegment=function(){var t;this._noHistory?t=n[this._noHistoryOffset]:t=o.getRoutesForUrl()[this._offset];return t},a.prototype.go=function(){var t,e=Array.prototype.slice.call(arguments,0);if(e.forEach((function(e){var r=e.params;r&&Object.keys(r).forEach((function(e){"object"==typeof r[e]&&(t=Promise.reject('"params" object may only contain scalar values'))}))})),!t){const r=e.map(t=>t.path).join("/"),a=s(),h=o.getUrlForRoutes(a),c=a.slice(0,this._offset).concat(e),u=o.getUrlForRoutes(c);this._noHistory?(i.info(`Navigating non-history tracking router(${this._name}) to ${r}`),n=n.slice(0,this._noHistoryOffset).concat(e)):h!==u&&(i.info(`Navigating router(${this._name}) to ${r}`),window.history.pushState(null,"path",u)),t=this.sync()}return t},a.prototype._execute=function(t){var e,r=this._getPendingState(t);return r?(e=this._prepublish(r),this._isCurrentState(r)||(e=e.then(function(){Promise.resolve(!1);return this._publish(r)}.bind(this)))):e=Promise.reject("Router("+this._name+') has no state matching "'+t.path+'"'),e},a.prototype._prepublish=function(e){var r=[];this.beforeStateChange.next({state:e,accept:function(t){r.push(t)}});var n=Promise.all(r).then((function(){return e})),s=this._childRouter;return s&&(n=n.then((function(){return s._prepublish(e)}))),n=n.then(function(t){return n!==this._activeSync?Promise.reject():t}.bind(this),function(e){if(n===this._activeSync){i.info("Router sync failed: "+e);var r=function(){for(var e=t,r=[];e;){var i=e._activeState;r.push(i),e=e._childRouter}return o.getUrlForRoutes(r)}();window.history.replaceState(null,"path",r)}return Promise.reject(e)}.bind(this)),this._activeSync=n,n},a.prototype._publish=function(t){var e=[];return this._childRouter=null,this._activeState=t,this.currentState.next({state:t,complete:function(t){e.push(t)}}),Promise.all(e).then(()=>t)},a.prototype._setupNavigationListener=function(){this===t&&(this._popstateHandler=this.sync.bind(this),window.addEventListener("popstate",this._popstateHandler,!1))},a.prototype._isCurrentState=function(t){var e,r,i=this._activeState;return!!i&&(e=i,r=t,o.getUrlForRoutes([e])===o.getUrlForRoutes([r]))},a.prototype._getPendingState=function(t){var e,r,i=t.path,o=t.params||{};return this._states.some((function(t){return!!t._match.test(i)&&(e=t,!0)})),e&&e._redirect&&(i=e._redirect,e=this._getPendingState({path:i,params:o})),e&&(r={path:i,detail:e.detail,params:o,_match:e._match,_redirect:e._redirect},Object.freeze(r)),r},a.prototype.createChildRouter=function(t,e){var r=this._activeState;if(!r)throw Error("Router("+this._name+") has no current state. Call sync() on the router first.");if(this._childRouter)throw Error("Router("+this._name+") state("+r.path+") already has a child router");var i=new a(t,e,this);return this._childRouter=i,i},a.prototype.destroy=function(){this===t&&(window.removeEventListener("popstate",this._popstateHandler,!1),t=null)},a}()}));