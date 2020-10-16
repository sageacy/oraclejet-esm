/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 */
define(['./DvtToolkit'], function(dvt) {
  "use strict";
  // Internal use only.  All APIs and functionality are subject to change at any time.

/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
!function(t){
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
t.TagCloud=function(t,e,i){this.Init(t,e,i)},t.Obj.createSubclass(t.TagCloud,t.BaseComponent),t.TagCloud.newInstance=function(e,i,n){return new t.TagCloud(e,i,n)},t.TagCloud.prototype.Init=function(e,i,n){t.TagCloud.superclass.Init.call(this,e,i,n),this.getCtx().getStage().getElem().setAttributeNS(null,"text-rendering","geometricPrecision"),this.EventManager=new r(this,e,this.processEvent,this),this.EventManager.addListeners(this),t.Agent.isTouchDevice()||this.EventManager.setKeyboardHandler(new h(this.EventManager)),this.Defaults=new o(e),this._items=[],this._peers=[],this.legend=null},t.TagCloud.prototype.render=function(e,i,n){isNaN(i)||isNaN(n)||(this.Width=i,this.Height=n),this.__cleanUp(),this.SetOptions(e),this.StopAnimation(),this._oldContainer=this._container,this._oldItems=this._items,this._items=[],this._itemCollection=[],this._container=new t.Container(this.getCtx()),this.addChild(this._container),s.render(this,this._container,new t.Rectangle(0,0,this.Width,this.Height)),this.SelectionHandler&&this.SelectionHandler.processInitialSelections(this.Options.selection,this.getObjects());var o=this.Options.animationDuration,a=new t.Rectangle(0,0,this.Width,this.Height);if(this._oldContainer){if("none"!==this.Options.animationOnDataChange&&e){this._deleteContainer=new t.Container(this.getCtx()),this.addChild(this._deleteContainer);var l=new t.DataAnimationHandler(this.getCtx(),this._deleteContainer);l.constructAnimation(this._oldItems,this._items),this.Animation=l.getAnimation()}}else"none"!==this.Options.animationOnDisplay&&(this.Animation=t.BlackBoxAnimationHandler.getInAnimation(this.getCtx(),t.BlackBoxAnimationHandler.ALPHA_FADE,this._container,a,o));this.Animation?(this.EventManager.hideTooltip(),this.EventManager.removeListeners(this),this.Animation.setOnEnd(this.OnRenderEnd,this),this.Animation.play()):this.OnRenderEnd(),this.UpdateAriaAttributes()},t.TagCloud.prototype.registerItems=function(t){this._items=t},t.TagCloud.prototype.getAutomation=function(){return this.Automation||(this.Automation=new e(this)),this.Automation},t.TagCloud.prototype.registerObject=function(t,e){this._peers.push(t),this._itemCollection[e]=t},t.TagCloud.prototype.getObjects=function(){return this._peers},t.TagCloud.prototype.getItems=function(){return this._itemCollection},t.TagCloud.prototype.highlight=function(e){this.Options.highlightedCategories=t.JsonUtils.clone(e),t.CategoryRolloverHandler.highlight(e,this.getObjects(),"any"===this.Options.highlightMatch),this.legend&&this.legend.highlight(e)},t.TagCloud.prototype.select=function(e){this.Options.selection=t.JsonUtils.clone(e),this.SelectionHandler&&this.SelectionHandler.processInitialSelections(this.Options.selection,this.getObjects())},t.TagCloud.prototype.SetOptions=function(e){e?this.Options=this.Defaults.calcOptions(e):this.Options||(this.Options=this.GetDefaults());var i=this.Options.selectionMode;this.SelectionHandler="single"===i?new t.SelectionHandler(this.getCtx(),t.SelectionHandler.TYPE_SINGLE):"multiple"===i?new t.SelectionHandler(this.getCtx(),t.SelectionHandler.TYPE_MULTIPLE):null,this.EventManager.setSelectionHandler(this.SelectionHandler),t.Agent.isEnvironmentTest()&&(this.Options.animationOnDisplay="none",this.Options.animationOnDataChange="none")},t.TagCloud.prototype.OnRenderEnd=function(){this._oldContainer&&(this.removeChild(this._oldContainer),this._oldContainer.destroy(),this._oldContainer=null),this._deleteContainer&&(this.removeChild(this._deleteContainer),this._deleteContainer.destroy(),this._deleteContainer=null),this.Animation&&this.EventManager.addListeners(this),this.Options.highlightedCategories&&this.Options.highlightedCategories.length>0&&this.highlight(this.Options.highlightedCategories),this.AnimationStopped||this.RenderComplete(),this.Animation=null,this.AnimationStopped=!1},t.TagCloud.prototype.__cleanUp=function(){this.EventManager.hideTooltip(),this._peers.length=0},t.TagCloud.prototype.processEvent=function(t,e){var i=t.type;if("categoryHide"==i||"categoryShow"==i){var n=t.category,o=this.Options.hiddenCategories.indexOf(n);"categoryHide"==i&&o<0&&this.Options.hiddenCategories.push(n),"categoryShow"==i&&o>=0&&this.Options.hiddenCategories.splice(o,1),this.render(this.Options,this.Width,this.Height)}else"categoryHighlight"==i&&(this!=e?this.highlight(t.categories):this.legend&&this.legend!=e&&this.legend.processEvent(t,e));t&&this.dispatchEvent(t)},t.TagCloud.prototype.isDragSupported=function(t){return this.SelectionHandler?t[0]:null},t.TagCloud.prototype.getDragRowKeys=function(t){t.isSelected()||(this.SelectionHandler.processClick(t,!1),this.EventManager.fireSelectionEvent());for(var e=[],i=this.SelectionHandler.getSelection(),o=0;o<i.length;o++){var s=i[o];s instanceof n&&e.push(s.getId())}return e},t.TagCloud.prototype.getDragFeedback=function(){for(var t=[],e=this.SelectionHandler.getSelection(),i=0;i<e.length;i++)t=t.concat(e[i].getDisplayables());return t};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var e=function(t){this._tagCloud=t};t.Obj.createSubclass(e,t.Automation),e.prototype.GetSubIdForDomElement=function(t){var e=this._tagCloud.EventManager.GetLogicalObject(t);return e&&e instanceof n?"item["+this._tagCloud.getItems().indexOf(e)+"]":null},e.prototype.getDomElementForSubId=function(e){if(e==t.Automation.TOOLTIP_SUBID)return this.GetTooltipElement(this._tagCloud);var i=e.indexOf("[");if(i>0&&"item"===e.substring(0,i)){var n=parseInt(e.substring(i+1,e.length-1)),o=this._tagCloud.getItems()[n];return o?o.getDisplayables()[0].getElem():null}return null},e.prototype.getItem=function(t){var e=this._tagCloud.getItems()[t];if(e){var i={};return i.color=e.getDatatipColor(),i.tooltip=e.getShortDesc(),i.label=e.getLabel(),i.value=e.getValue(),i.selected=e.isSelected(),i}return null},e.prototype.getItemCount=function(){return this._tagCloud.getObjects().length};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var i=function(t,e,i,n,o,s,a,l,r){this.Init(t,e,i,n,o,s,a,l,r)};t.Obj.createSubclass(i,t.BackgroundOutputText),i._HOVER_OPACITY=.3,i._HOVER_SELECTED_OPACITY=.6,i.ANIMATION_DELETE_PRIORITY=0,i.ANIMATION_UPDATE_PRIORITY=1,i.ANIMATION_INSERT_PRIORITY=2,i.prototype.Init=function(t,e,n,o,s,a,l,r,h){i.superclass.Init.call(this,e,n,o,s,a,h),this._tagCloud=t,this.alignAuto(),this.TextInstance.setStyle(l),this.TextInstance.setClassName(r),a&&this._createFeedbackStyles(a)},i.prototype.setSelected=function(t){this._isSelected!=t&&(this._isSelected=t,t?this._isShowingHoverEffect?this.setCSSStyle(this._hoverSelectedStyle):this.setCSSStyle(this._selectedStyle):this.setCSSStyle(this._normalStyle))},i.prototype.showHoverEffect=function(){this._isShowingHoverEffect||(this._isShowingHoverEffect=!0,this._isSelected?this.setCSSStyle(this._hoverSelectedStyle):this.setCSSStyle(this._hoverStyle))},i.prototype.hideHoverEffect=function(){this._isSelected?this.setCSSStyle(this._selectedStyle):this.setCSSStyle(this._normalStyle),this._isShowingHoverEffect=!1},i.prototype.animateUpdate=function(e,n){var o=new t.CustomAnimation(this.getCtx(),this,l.getAnimationDuration(this._tagCloud)),s=this.getCSSStyle(),a=n.getCSSStyle(),r=!1,h=a.getStyle(t.CSSStyle.COLOR),c=s.getStyle(t.CSSStyle.COLOR);if(h!=c){var g=this;this.setCSSStyle(s.setStyle(t.CSSStyle.COLOR,h)),o.getAnimator().addProp(t.Animator.TYPE_COLOR,this,(function(){return g.getCSSStyle().getStyle(t.CSSStyle.COLOR)}),(function(e){g.setCSSStyle(g.getCSSStyle().setStyle(t.CSSStyle.COLOR,e))}),c)}var u=parseFloat(a.getStyle(t.CSSStyle.FONT_SIZE)),S=parseFloat(s.getStyle(t.CSSStyle.FONT_SIZE));if(u!=S){r=!0;g=this;this.setFontSize(u),o.getAnimator().addProp(t.Animator.TYPE_NUMBER,this,(function(){return parseFloat(g.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE))}),this.setFontSize,S)}var d=n.getX(),p=this.getX(),y=n.getHorizAlignment(),C=this.getHorizAlignment();(p!=d||r&&C!=y)&&(C!=y&&(d=i._adjustX(n,d,y)),this.setX(d),o.getAnimator().addProp(t.Animator.TYPE_NUMBER,this,this.getX,this.setX,p));var _=n.getY(),f=this.getY();f!=_&&(this.setY(_),o.getAnimator().addProp(t.Animator.TYPE_NUMBER,this,this.getY,this.setY,f)),n.setAlpha(0),e.add(o,i.ANIMATION_UPDATE_PRIORITY)},i.prototype.animateDelete=function(e){e.add(new t.AnimFadeOut(this.getCtx(),this,l.getAnimationDuration(this._tagCloud)),i.ANIMATION_DELETE_PRIORITY)},i.prototype.animateInsert=function(e){this.setAlpha(0),e.add(new t.AnimFadeIn(this.getCtx(),this,l.getAnimationDuration(this._tagCloud)),i.ANIMATION_INSERT_PRIORITY)},i.prototype.setFontSize=function(t){i.superclass.setFontSize.call(this,t),this._createFeedbackStyles(this.getCSSStyle())},i.prototype._createFeedbackStyles=function(e){this._normalStyle=e.clone();var n=this._normalStyle.getStyle(t.CSSStyle.COLOR);this._normalStyle.setStyle(t.CSSStyle.BACKGROUND_COLOR,null),this._hoverStyle=this._normalStyle.clone();var o=i._lightenColor(n,i._HOVER_OPACITY);this._hoverStyle.setStyle(t.CSSStyle.BACKGROUND_COLOR,o),this._hoverStyle.setStyle(t.CSSStyle.COLOR,t.ColorUtils.getContrastingTextColor(o)),this._selectedStyle=this._normalStyle.clone(),this._selectedStyle.setStyle(t.CSSStyle.BACKGROUND_COLOR,n),this._selectedStyle.setStyle(t.CSSStyle.COLOR,t.ColorUtils.getContrastingTextColor(n)),this._hoverSelectedStyle=this._normalStyle.clone();var s=i._lightenColor(n,i._HOVER_SELECTED_OPACITY);this._hoverSelectedStyle.setStyle(t.CSSStyle.BACKGROUND_COLOR,s),this._hoverSelectedStyle.setStyle(t.CSSStyle.COLOR,t.ColorUtils.getContrastingTextColor(s))},i.prototype.getItemStyle=function(){return this._normalStyle},i._adjustX=function(e,i,n){var o=e.getTextDimensions();return n==t.OutputText.H_ALIGN_LEFT?i+o.w:n==t.OutputText.H_ALIGN_RIGHT?i-o.w:i},i._lightenColor=function(e,i){var n=255*(1-i)+i*t.ColorUtils.getRed(e),o=255*(1-i)+i*t.ColorUtils.getGreen(e),s=255*(1-i)+i*t.ColorUtils.getBlue(e);return t.ColorUtils.makeRGB(Math.floor(n),Math.floor(o),Math.floor(s))};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var n=function(t,e,i){this.Init(t,e,i)};t.Obj.createSubclass(n,t.Obj),n.prototype.Init=function(e,i,n){this._view=e,this._displayable=i,this._data=n,this._isSelected=!1,this._bSelectable=!1,n.url?(i.setAriaRole("link"),this._linkCallback=t.ToolkitUtils.getLinkCallback("_blank",n.url)):i.setAriaRole("img"),this._updateAriaLabel()},n.prototype.getId=function(){return this._data.id},n.prototype.getLabel=function(){return this._data.label},n.prototype.getValue=function(){return this._data.value},n.prototype.getShortDesc=function(){return this._data.shortDesc},n.prototype.getDatatip=function(){var t=this._view.getOptions().tooltip,e=t?t.renderer:null;return e?this._view.getCtx().getTooltipManager().getCustomTooltip(e,this.getDataContext()):this.getShortDesc()},n.prototype.getDataContext=function(){return{id:this.getId(),label:this.getLabel(),color:this.getDatatipColor(),value:this.getValue()}},n.prototype.getLinkCallback=function(){return this._linkCallback},n.prototype.getDatatipColor=function(){return this._displayable.getItemStyle().getStyle(t.CSSStyle.COLOR)},n.prototype.setSelectable=function(t){this._bSelectable=t},n.prototype.isSelectable=function(){return this._bSelectable},n.prototype.isSelected=function(){return this._isSelected},n.prototype.setSelected=function(t){this._isSelected=t,this._displayable.setSelected(t),this._updateAriaLabel()},n.prototype.showHoverEffect=function(){this._displayable.showHoverEffect()},n.prototype.hideHoverEffect=function(){this._displayable.hideHoverEffect()},n.prototype.getNextNavigable=function(e){var i=this._view.EventManager.getKeyboardHandler();return e.type==t.MouseEvent.CLICK||i.isMultiSelectEvent(e)?this:i.isNavigationEvent(e)?h.getNextNavigable(this,e,this._view.getObjects()):null},n.prototype.getKeyboardBoundingBox=function(t){return this._displayable.getDimensions(t)},n.prototype.getTargetElem=function(){return this._displayable.getElem()},n.prototype.showKeyboardFocusEffect=function(){this._isShowingKeyboardFocusEffect=!0,this.showHoverEffect()},n.prototype.hideKeyboardFocusEffect=function(){this._isShowingKeyboardFocusEffect&&(this._isShowingKeyboardFocusEffect=!1,this.hideHoverEffect())},n.prototype.isShowingKeyboardFocusEffect=function(){return this._isShowingKeyboardFocusEffect},n.prototype.getDisplayables=function(){return[this._displayable]},n.prototype.getAriaLabel=function(){var e=[];return this.isSelectable()&&e.push(this._view.getOptions().translations[this.isSelected()?"stateSelected":"stateUnselected"]),t.Displayable.generateAriaLabel(this.getShortDesc(),e)},n.prototype.getCategories=function(){return this._data.categories},n.prototype._updateAriaLabel=function(){t.Agent.deferAriaCreation()||this._displayable.setAriaProperty("label",this.getAriaLabel())},n.prototype.isDragAvailable=function(t){return this._view.isDragSupported(t)},n.prototype.getDragTransferable=function(t,e){return this._view.getDragRowKeys(this)},n.prototype.getDragFeedback=function(t,e){return this._view.getDragFeedback()};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var o=function(t){this.Init({alta:o.VERSION_1},t)};t.Obj.createSubclass(o,t.BaseComponentDefaults),o.VERSION_1={animationOnDisplay:"none",animationOnDataChange:"none",emptyText:null,hiddenCategories:[],hideAndShowBehavior:"none",highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",layout:"rectangular",selectionMode:"none",_statusMessageStyle:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA+"color: #333333;"),styleDefaults:{animationDuration:500,hoverBehaviorDelay:200,_style:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA+"color: #333333;")},touchResponse:"auto"};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var s={};t.Obj.createSubclass(s,t.Obj),s.render=function(t,e,i){s._renderBackground(t,e,i),s._renderLegend(t,e,i),s._adjustAvailSpace(i);var n=t.getOptions();if(n.items&&n.items.length>0){var o=s._renderItems(t,e,i);o.length>0?(t.registerItems(o),t.EventManager.setFocusObj(t.getObjects()[0])):s._renderEmptyText(t,e,i)}else s._renderEmptyText(t,e,i)},s._renderEmptyText=function(e,i,n){var o=e.getOptions(),s=o.emptyText;s||(s=o.translations.labelNoData),t.TextUtils.renderEmptyText(i,s,new t.Rectangle(n.x,n.y,n.w,n.h),e.EventManager,o._statusMessageStyle)},s._renderBackground=function(e,i,n){var o=new t.Rect(e.getCtx(),n.x,n.y,n.w,n.h);o.setInvisibleFill(),i.addChild(o)},s._renderItems=function(e,o,s){for(var l=e.getOptions(),r=[],h=l.items,c=Number.MAX_VALUE,g=-Number.MAX_VALUE,u=0;u<h.length;u++)c=Math.min(c,h[u].value),g=Math.max(g,h[u].value);var S=a.getFontSizeFunction(c,g,3),d=t.ArrayUtils.createBooleanMap(l.hiddenCategories),p=t.CSSStyle.getTextMeasurementProperties(),y=l.styleDefaults,C=y.svgStyle||y.style;!C||C instanceof Object||(C=t.CSSStyle.cssStringToObject(C));for(u=0;u<h.length;u++){var _=h[u];if(_.categories||(_.categories=[_.label]),!d||!t.ArrayUtils.hasAnyMapItem(d,_.categories)){var f=y._style.clone(),v=_.svgStyle||_.style;!v||v instanceof Object||(v=t.CSSStyle.cssStringToObject(v));var O=v&&v.color?v.color:_.color?_.color:C&&C.color?C.color:null;if(v=t.JsonUtils.merge(v,C)){for(var m=0;m<p.length;m++){var b=t.CSSStyle.cssStringToObjectProperty(p[m]);v[b]&&(f.setStyle(p[m],v[b]),delete v[b])}delete v.color}O&&f.setStyle(t.CSSStyle.COLOR,O),f.setStyle(t.CSSStyle.FONT_SIZE,S.call(null,_.value).toString());var E=_.svgClassName||_.className,A=new i(e,e.getCtx(),_.label,0,0,f,v,E,_.id),T=new n(e,A,_);e.EventManager.associate(A,T),e.registerObject(T,u),"none"!==l.selectionMode&&T.setSelectable(!0),(T.isSelectable()||_.url)&&A.setCursor(t.SelectionEffectUtils.getSelectingCursor()),r.push(A),o.addChild(A)}}return r.length>0&&("cloud"===l.layout?a.cloudLayout(s,r):a.rectangleLayout(s,r,t.Agent.isRightToLeft(e.getCtx()))),r},s._renderLegend=function(e,i,n){var o=e.getOptions(),s=o.legend;if(s&&s.sections){var a=t.JsonUtils.clone(s);a.orientation="horizontal",a.halign="center",a.hoverBehavior=o.hoverBehavior,a.hideAndShowBehavior=o.hideAndShowBehavior,a.hiddenCategories=o.hiddenCategories;var l=t.Legend.newInstance(e.getCtx(),e.processEvent,e);i.addChild(l);var r=l.getPreferredSize(a,n.w,n.h/3);l.render(a,r.w,r.h),t.LayoutUtils.position(n,"bottom",l,r.w,r.h,0),e.legend&&(e.legend.destroy(),i.removeChild(e.legend)),e.legend=l}},s._adjustAvailSpace=function(t){t.x=Math.round(t.x),t.y=Math.round(t.y),t.w=Math.round(t.w),t.h=Math.round(t.h)};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var a=function(){};t.Obj.createSubclass(a,t.Obj),a.getFontSizeFunction=function(t,e,i){return function(n){return t===e?12:12+Math.ceil((i-1)*(n-t)/(e-t)*12)}},a.cloudLayout=function(e,i){var n=[],o=10/180,s=10/180;e.w>e.h?o*=e.w/e.h:s*=e.h/e.w;for(var a=2*Math.PI/180,l=null,r=0,h=[],c=[],g=0;g<i.length;g++){var u=!1,S=0,d=4,p=(A=i[g]).getDimensions();r=Math.max(r,parseFloat(A.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE)));for(var y=-1;!u;){var C=S%180;void 0===h[C]&&(h[C]=Math.cos(S*a)),void 0===c[C]&&(c[C]=Math.sin(S*a));var _=o*S*h[C],f=s*S*c[C],v=new t.Rectangle(_,f,p.w,p.h);if(u=!0,-1!=y&&n[y].intersects(v)&&(u=!1),u)for(var O=0;O<g;O++)if(n[O].intersects(v)){y=O,u=!1;break}u&&(l=l?l.getUnion(v):v,y=-1,n[g]=v,A.setX(_),A.setY(-p.y+f)),3600===S?d=3:5400===S?d=2:10800===S&&(d=1),S+=d}}var m=Math.max(l.w/e.w,l.h/e.h),b=l.x+l.w/2,E=l.y+l.h/2;for(O=0;O<i.length;O++){var A;(A=i[O]).setX(e.x+A.getX()/m+(e.w/2-b/m)),A.setY(e.y+A.getY()/m+(e.h/2-E/m));var T=parseFloat(A.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE));A.setFontSize(T/m)}},a.rectangleLayout=function(e,i,n){for(var o=[],s=0,l=0,r=0,h=0;h<i.length;h++){var c=(A=i[h]).getDimensions();s=Math.max(s,c.w),l=Math.max(l,c.h),r=Math.max(r,parseFloat(A.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE))),o.push(new t.Dimension(c.w,c.h))}for(var g,u,S=0,d=(e.w-10)/s;d-S>.001;){g=(S+d)/2,(u=a._calculateLineBreaks(o,(e.w-10)/g)).length*(g*l+2)-2>e.h-10?d=g:S=g}g=S,(u=a._calculateLineBreaks(o,(e.w-10)/g)).push(i.length);for(h=0;h<u.length-1;h++){var p=u[h],y=u[h+1],C=0,_=0,f=!0;if(y-p>1){for(var v=0,O=p;O<y;O++)v+=o[O].w*g,_=Math.max(_,o[O].h*g);if(C=(e.w-10-v)/(y-p-1),h==u.length-2){var m=.5*_;m<C&&v+(y-p)*m<.9*(e.w-10)&&(C=m,f=!1)}}var b=5+(h+1)*(l*g+2)-2,E=n?e.w-5:5;for(O=p;O<y;O++){var A=i[O],T=parseFloat(A.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE));A.setFontSize(T*g),A.setY(e.y+b),f&&O==y-1&&O!=p?n?(A.alignLeft(),A.setX(e.x+5)):(A.alignRight(),A.setX(e.x+e.w-5)):(A.setX(e.x+E),n?(A.alignRight(),E-=o[O].w*g+C):(A.alignLeft(),E+=o[O].w*g+C))}}},a._calculateLineBreaks=function(t,e){var i=[0],n=t[0].w+2;if(t.length>1)for(var o=1;o<t.length;o++)n+t[o].w>e&&(i.push(o),n=0),n+=t[o].w+2;return i};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var l=new Object;t.Obj.createSubclass(l,t.Obj),l.getAnimationDuration=function(t){return t.getOptions().styleDefaults.animationDuration/1e3};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var r=function(t,e,i,n){this.Init(e,i,n,t),this._view=t};t.Obj.createSubclass(r,t.EventManager),r.prototype.OnClickInternal=function(t){var e=this.GetLogicalObject(t.target);this._handleLinkCallback(e)},r.prototype.HandleTouchClickInternal=function(t){var e=this.GetLogicalObject(t.target);this._handleLinkCallback(e)},r.prototype._handleLinkCallback=function(t){if(t instanceof n){var e=t.getLinkCallback();e&&e.call()}},r.prototype.ProcessKeyboardEvent=function(e){var i=!0,n=e.keyCode,o=this.getFocus();return n==t.KeyboardEvent.ENTER?this._handleLinkCallback(o):i=r.superclass.ProcessKeyboardEvent.call(this,e),i},r.prototype.ProcessRolloverEvent=function(e,i,n){var o=this._view.getOptions();if("dim"==o.hoverBehavior){var s=i.getCategories?i.getCategories():[];o.highlightedCategories=n?s.slice():null;var a=t.EventFactory.newCategoryHighlightEvent(o.highlightedCategories,n),l=t.CSSStyle.getTimeMilliseconds(o.styleDefaults.hoverBehaviorDelay);this.RolloverHandler.processEvent(a,this._view.getObjects(),l,"any"==o.highlightMatch)}},r.prototype.GetTouchResponse=function(){return this._view.getOptions().touchResponse};
/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
var h=function(t){this.Init(t)};t.Obj.createSubclass(h,t.KeyboardHandler),h.prototype.Init=function(t){h.superclass.Init.call(this,t)},h.prototype.isSelectionEvent=function(t){return this.isNavigationEvent(t)&&!t.ctrlKey},h.prototype.isMultiSelectEvent=function(e){return e.keyCode==t.KeyboardEvent.SPACE&&e.ctrlKey},h.getNextNavigable=function(e,i,n){var o=i.keyCode==t.KeyboardEvent.RIGHT_ARROW||i.keyCode==t.KeyboardEvent.DOWN_ARROW,s=n.indexOf(e)+(o?1:-1);return s<n.length&&s>=0?n[s]:null}}(dvt);
  return dvt;
});
