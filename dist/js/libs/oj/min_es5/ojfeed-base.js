/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdataproviderscroller","ojs/ojcontext"],(function(t,e,n,o,i){"use strict";var s=function t(e,n,o){t.superclass.constructor.call(this,e,n,o)};return t.Object.createSubclass(s,o.IteratingDataProviderContentHandler,"FeedDataProviderContentHandler"),s.prototype.Init=function(){s.superclass.Init.call(this)},s.prototype.setRootAriaProperties=function(){this.m_root.setAttribute("role","feed"),this.m_root.setAttribute("aria-busy","false");var t=this;this.getDataProvider().getTotalSize().then((function(e){t.m_totalSize=e}))},s.prototype.GetChildElementTagName=function(){return"DIV"},s.prototype.handleBeforeFetch=function(){this.m_root.setAttribute("aria-busy","true")},s.prototype.handleDomScrollerFetchedData=function(t){this.m_root.setAttribute("aria-busy","false"),s.superclass.handleDomScrollerFetchedData.call(this,t)},s.prototype.afterRenderItem=function(t,e){t.key=e.key,t.setAttribute("role","article"),t.setAttribute("tabIndex",0),t.classList.add(this.m_widget.getItemElementStyleClass())},s.prototype.isSelectionEnabled=function(t){return!1},s.prototype.isFocusable=function(t){return!1},s.prototype.isSelectable=function(t){return!1},s.prototype.isCardLayout=function(){return!1},s.prototype.shouldUseGridRole=function(){return!1},s.prototype.disableAllTabbableElements=function(){},t.__registerWidget("oj.feedBaseComponent",e.oj.baseComponent,{_ComponentCreate:function(){this._super(),this._setup()},_setup:function(){var t=this;this.TAB_KEY=9,this.PAGEUP_KEY=33,this.PAGEDOWN_KEY=34,this._on(this.element,{keydown:function(e){t.HandleKeyDown(e)}}),this.readinessStack=[]},_SetupResources:function(){this._super(),this.InitContentHandler()},_ReleaseResources:function(){this._super(),this.DestroyContentHandler()},InitContentHandler:function(){},DestroyContentHandler:function(){},_VerifyConnectedForSetup:function(){return!0},refresh:function(){this.DestroyContentHandler(),this.InitContentHandler()},_destroy:function(){this._super()},getWidgetConstructor:function(){return n.__GetWidgetConstructor(this.element)},_getCurrentArticle:function(){return document.activeElement.closest("."+this.getItemStyleClass())},HandleKeyDown:function(t){var e=t.keyCode;if(e===this.PAGEUP_KEY||e===this.PAGEDOWN_KEY){var n=this._getCurrentArticle();if(n){var o=e===this.PAGEUP_KEY?n.previousElementSibling:n.nextElementSibling;o&&(t.preventDefault(),o.focus())}}},renderComplete:function(){},GetRootElement:function(){return this.element},showStatusText:function(){},hideStatusText:function(){},isLoadMoreOnScroll:function(){return"loadAll"!==this.option("scrollPolicy")},updateStatusFetchStart:function(){},updateStatusFetchEnd:function(t){},BeforeInsertItem:function(){},itemRemoveComplete:function(t,e){},_getItemRenderer:function(){return null},getItemTemplateName:function(){return"itemTemplate"},getItemTemplate:function(){return void 0===this.m_template&&(this.m_template=this.getTemplate(this.getItemTemplateName())),this.m_template},getTemplate:function(e){if(this._IsCustomElement()){var n=t.BaseCustomElementBridge.getSlotMap(this.element[0])[e];if(n&&n.length>0&&"template"===n[0].tagName.toLowerCase())return n[0]}return null},_getBusyDescription:function(t){return"The component identified by '"+this.GetRootElement().attr("id")+"', "+t},signalTaskStart:function(t){var e=this;if(this.readinessStack){if(0===this.readinessStack.length){this.readyPromise=new Promise((function(t){e.readyResolve=t}));var n=i.getContext(this.element[0]).getBusyContext(),o=null!=t?{description:this._getBusyDescription(t)}:{};e.busyStateResolve=n.addBusyState(o)}this.readinessStack.push(null!=t?t:"unknown task")}},signalTaskEnd:function(){this.readinessStack&&this.readinessStack.length>0&&(this.readinessStack.pop(),0===this.readinessStack.length&&(this.readyResolve(null),this.busyStateResolve(null),this.busyStateResolve=null))},ShouldRefresh:function(t){return null!=t.data||null!=t.item||null!=t.scrollPolicy||null!=t.scrollPolicyOptions},ClearCache:function(){},_setOptions:function(t,e){this._super(t,e),this.ShouldRefresh(t)&&this.refresh()}}),s}));