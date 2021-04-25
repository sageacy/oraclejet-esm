/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojvcomponent-element","ojs/ojdomutils","ojs/ojdatacollection-common"],function(e,t,o,n){"use strict";var i=function(e,t,o,n){var i,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(s<3?i(a):s>3?i(t,o,a):i(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a};e.ActionCard=class extends t.ElementVComponent{constructor(e){super(e),this.state={active:!1,focus:!1},this._rootElemRef=e=>{this._rootElem=e}}render(){var e;const n={"oj-actioncard":!0,"oj-active":this.state.active,"oj-focus-highlight":this.state.focus&&!o.recentPointer()},i=null!==(e=this.props.tabIndex)&&void 0!==e?e:0;return t.h("oj-action-card",{tabIndex:i,class:n,role:"button",onKeyup:this._handleKeyup,onMouseup:this._handleMouseup,onKeydown:this._handleKeydown,onMousedown:this._handleMousedown,onMousemove:this._handleMousemove,onTouchstart:this._handleTouchstart,onTouchend:this._handleTouchend,onTouchcancel:this._handleTouchcancel,onTouchmove:this._handleTouchmove,onFocusin:this._handleFocusin,onFocusout:this._handleFocusout,onOjAction:this._handleOjAction,ref:this._rootElemRef},this.props.children)}_isFromActiveSource(e){return n.isEventClickthroughDisabled(e,this._rootElem)}_handleOjAction(e){this._isFromActiveSource(e)&&e.stopPropagation()}_handleTouchstart(e){this._isFromActiveSource(e)||this.updateState({active:!0})}_handleTouchend(e){var t,o;this._isFromActiveSource(e)||this.state.active&&(this.updateState({active:!1}),null===(o=(t=this.props).onOjAction)||void 0===o||o.call(t,{originalEvent:e}))}_handleTouchcancel(e){this._isFromActiveSource(e)||this.updateState({active:!1})}_handleTouchmove(e){this.state.active&&(this._isFromActiveSource(e)||this.updateState({active:!1}))}_handleKeydown(e){this._isFromActiveSource(e)||e.repeat||"Enter"!==e.key&&" "!==e.key||this.updateState({active:!0})}_handleKeyup(e){var t,o;this._isFromActiveSource(e)||"Enter"!==e.key&&" "!==e.key||(this.updateState({active:!1}),null===(o=(t=this.props).onOjAction)||void 0===o||o.call(t,{originalEvent:e}))}_handleMousedown(e){this._isFromActiveSource(e)||this.updateState({active:!0})}_handleMouseup(e){var t,o;this._isFromActiveSource(e)||this.state.active&&(this.updateState({active:!1}),null===(o=(t=this.props).onOjAction)||void 0===o||o.call(t,{originalEvent:e}))}_handleMousemove(e){this.state.active&&(this._isFromActiveSource(e)||this.updateState({active:!1}))}_handleFocusin(e){this.updateState({focus:!0})}_handleFocusout(e){this.updateState({focus:!1})}},e.ActionCard.metadata={extension:{_DEFAULTS:class{},_ROOT_PROPS_MAP:{tabIndex:1,role:1}},slots:{"":{}},events:{ojAction:{bubbles:!0}}},i([t.listener({passive:!1})],e.ActionCard.prototype,"_handleOjAction",null),i([t.listener({passive:!0})],e.ActionCard.prototype,"_handleTouchstart",null),i([t.listener({passive:!1})],e.ActionCard.prototype,"_handleTouchend",null),i([t.listener({passive:!0})],e.ActionCard.prototype,"_handleTouchcancel",null),i([t.listener({passive:!0})],e.ActionCard.prototype,"_handleTouchmove",null),i([t.listener({passive:!0})],e.ActionCard.prototype,"_handleKeydown",null),i([t.listener({passive:!1})],e.ActionCard.prototype,"_handleKeyup",null),i([t.listener({passive:!0})],e.ActionCard.prototype,"_handleMousedown",null),i([t.listener({passive:!1})],e.ActionCard.prototype,"_handleMouseup",null),i([t.listener({passive:!0})],e.ActionCard.prototype,"_handleMousemove",null),i([t.listener()],e.ActionCard.prototype,"_handleFocusin",null),i([t.listener()],e.ActionCard.prototype,"_handleFocusout",null),e.ActionCard=i([t.customElement("oj-action-card")],e.ActionCard),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojactioncard.js.map