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
t.TimeComponent=function(t,e,i){this.Init(t,e,i)},t.Obj.createSubclass(t.TimeComponent,t.BaseComponent),t.TimeComponent.ZOOM_BY_VALUE=1.5,t.TimeComponent.SCROLL_LINE_HEIGHT=15,t.TimeComponent.WHEEL_UNITS_PER_LINE=40,t.TimeComponent.prototype.Init=function(e,i,n){t.TimeComponent.superclass.Init.call(this,e,i,n),this.SetPanningEnabled(!0),this._virtualize=!1},t.TimeComponent.prototype.render=function(t,e,i){if(t&&(this._resources=t._resources,null==this._resources&&(this._resources=[]),this.SetOptions(t)),this.Width=e,this.Height=i,this.Options){var n=this.Parse(this.Options);this._applyParsedProperties(n)}},t.TimeComponent.prototype.SetOptions=function(e){this.Options=this.Defaults.calcOptions(e),t.Agent.isEnvironmentTest()&&(this.Options.animationOnDisplay="none",this.Options.animationOnDataChange="none")},t.TimeComponent.prototype.clearComponent=function(){this._canvas&&this._canvas.removeChildren()},t.TimeComponent.prototype._applyParsedProperties=function(t){this._start=t.start,this._end=t.end,this._inlineStyle=t.inlineStyle,this._timeDirScrollbar=t.timeDirScrollbar,this._contentDirScrollbar=t.contentDirScrollbar,this.applyStyleValues()},t.TimeComponent.sanitizeData=function(e,i){var n,o;if("series"===i||"row"===i){var s="series"===i?"items":"tasks";if(e[s].length>0)return e[s][0]._noTemplate?((n=t.JsonUtils.clone(e,null,{itemProp:!0}))[s]=n[s].map((function(t){return t._itemData})),n):e[s][0]._itemData?((n=t.JsonUtils.clone(e,null,{itemProp:!0}))[s]=n[s].map((function(e){return delete(o=t.JsonUtils.clone(e))._itemData,o})),n):e}else{if(e._noTemplate)return e._itemData;if(e._itemData)return delete(o=t.JsonUtils.clone(e))._itemData,o}return e},t.TimeComponent.prototype.applyStyleValues=function(){this._style&&this._style.parseInlineStyle(this._inlineStyle)},t.TimeComponent.prototype.isAnimationEnabled=function(){return!1},t.TimeComponent.prototype.getAdjustedStartTime=function(){return this._start},t.TimeComponent.prototype.getAdjustedEndTime=function(){return this._end},t.TimeComponent.prototype.getContentLength=function(){return this._contentLength},t.TimeComponent.prototype.setContentLength=function(t){this._canvasLength<t?this._contentLength=t:this._contentLength=this._canvasLength,this._virtualize||(this._fetchStartPos=0,this._fetchEndPos=this._contentLength)},t.TimeComponent.prototype.getCanvasSize=function(){return this._canvasSize},t.TimeComponent.prototype.getCanvasLength=function(){return this._canvasLength},t.TimeComponent.prototype.isRTL=function(){return t.Agent.isRightToLeft(this.getCtx())},t.TimeComponent.prototype.isVertical=function(){return this._isVertical},t.TimeComponent.prototype.getTimeAxis=function(){return null},t.TimeComponent.prototype.prepareViewportLength=function(){if(this.setRelativeStartPos(0),this._viewStartTime&&this._viewEndTime){if((s=this._viewEndTime-this._viewStartTime)>0){var t=this._canvasLength/s;this.setContentLength(t*(this._end-this._start)),this.setRelativeStartPos(t*(this._start-this._viewStartTime))}}else{var e=this.getTimeAxis(),i=e.getZoomLevelLengths()[e._zoomLevelOrder],n=this._start,o=this._end;if(null==this._viewStartTime)if(null!=this._viewEndTime){this._viewStartTime=this._viewEndTime-this._canvasLength/i*(o-n),this._viewStartTime<this._start&&(this._viewStartTime=this._start);var s=this._viewEndTime-this._viewStartTime;t=this._canvasLength/s;this.setContentLength(t*(this._end-this._start)),this.setRelativeStartPos(t*(this._start-this._viewStartTime))}else this._viewStartTime=this._start,this.setRelativeStartPos(0),this._viewEndTime=this._canvasLength/i*(o-n)+this._viewStartTime,this._viewEndTime>this._end&&(this._viewEndTime=this._end);else this._viewEndTime=this._canvasLength/i*(o-n)+this._viewStartTime,this._viewEndTime>this._end&&(this._viewEndTime=this._end),s=this._viewEndTime-this._viewStartTime,t=this._canvasLength/s,this.setContentLength(t*(this._end-this._start)),this.setRelativeStartPos(t*(this._start-this._viewStartTime))}},t.TimeComponent.prototype.renderTimeZoomCanvas=function(e){this._timeZoomCanvas?this._timeZoomCanvas.setClipPath(null):this._timeZoomCanvas=new t.Container(this.getCtx(),"iCanvas");var i=new t.ClipPath;this.isVertical()?(i.addRect(this._startX,this._startY,this._canvasSize,this._canvasLength),this._timeZoomCanvas.setTranslateX(this._startX),this._timeZoomCanvas.setTranslateY(this._startY+this.getAbsoluteStartPos())):(i.addRect(this._startX,this._startY,this._canvasLength,this._canvasSize),this._timeZoomCanvas.setTranslateX(this._startX+this.getAbsoluteStartPos()),this._timeZoomCanvas.setTranslateY(this._startY)),e.setClipPath(i),this._timeZoomCanvas.getParent()!=e&&e.addChild(this._timeZoomCanvas)},t.TimeComponent.prototype.getTimeZoomCanvas=function(){return this._timeZoomCanvas},t.TimeComponent.prototype.renderZoomControls=function(e){var i=this.getCtx(),n=this.getTimeAxis(),o=this.Options.translations,s=e.zoomInProps,a=s.imageSize,r=s.class,h=s.posX,m=s.posY;if(null==this.zoomin){var p=t.ToolkitUtils.getIconStyle(i,r);this.zoomin=new t.TransientButton(i,p,a,this.EventManager,this.EventManager.HandleZoomInClick),this.EventManager.associate(this.zoomin,this.zoomin)}var l=e.zoomOutProps;a=l.imageSize,r=l.class;var _=l.posX,c=l.posY;if(null==this.zoomout){p=t.ToolkitUtils.getIconStyle(i,r);this.zoomout=new t.TransientButton(i,p,a,this.EventManager,this.EventManager.HandleZoomOutClick),this.EventManager.associate(this.zoomout,this.zoomout)}this.zoomin.setTooltip(o.tooltipZoomIn),this.zoomout.setTooltip(o.tooltipZoomOut),this.zoomin.hide(),this.zoomout.hide(),t.TimeAxis.supportsTouch()&&(t.ToolkitUtils.setAttrNullNS(this.zoomin.getElem(),"role","button"),t.ToolkitUtils.setAttrNullNS(this.zoomin.getElem(),"aria-label",o.tooltipZoomIn),t.ToolkitUtils.setAttrNullNS(this.zoomout.getElem(),"role","button"),t.ToolkitUtils.setAttrNullNS(this.zoomout.getElem(),"aria-label",o.tooltipZoomOut)),this.zoomin.setTranslateX(h),this.zoomout.setTranslateX(_),this.zoomin.setTranslateY(m),this.zoomout.setTranslateY(c),this.zoomin.getParent()!=this._canvas&&this._canvas.addChild(this.zoomin),this.zoomout.getParent()!=this._canvas&&this._canvas.addChild(this.zoomout);var u=this.getContentLength();u>=n.getMaxContentLength()&&this.disableZoomButton(!0),this._canvasLength>=u&&this.disableZoomButton(!1)},t.TimeComponent.prototype.HandleMouseWheel=function(e){t.EventManager.consumeEvent(e);var i=e.wheelDelta,n=e.getNativeEvent();if(this.hasValidOptions()&&(null!=n.wheelDeltaX?e.wheelDeltaX=n.wheelDeltaX/t.TimeComponent.WHEEL_UNITS_PER_LINE:null!=n.deltaX&&(n.deltaMode==n.DOM_DELTA_LINE?e.wheelDeltaX=-n.deltaX:n.deltaMode==n.DOM_DELTA_PIXEL&&(e.wheelDeltaX=-n.deltaX/t.TimeComponent.SCROLL_LINE_HEIGHT)),i)){var o=this.getCtx().getStageAbsolutePosition();if(this._isVertical)var s=e.pageY-o.y-this.getStartYOffset();else s=e.pageX-o.x-this.getStartXOffset();var a=(this._end-this._start)/this.getContentLength();if(this.isRTL()&&!this._isVertical)var r=this._viewEndTime-a*s;else r=a*s+this._viewStartTime;e.zoomTime=r,e.zoomCompLoc=s,e.zoomWheelDelta=.02*i+1}},t.TimeComponent.prototype.handleZoomWheel=function(t,e,i,n){var o=(this._viewEndTime-this._viewStartTime)/(this._end-this._start)*this.getContentLength();this.setContentLength(t);var s=o/this.getContentLength()*(this._end-this._start);if(e){var a=(this._end-this._start)/this.getContentLength();this.isRTL()&&!this._isVertical?(this._viewEndTime=e+i*a,this._viewEndTime>this._end&&(this._viewEndTime=this._end),this._viewStartTime=this._viewEndTime-s,this._viewStartTime<this._start&&(this._viewStartTime=this._start,this._viewEndTime=this._viewStartTime+s,this._viewEndTime>this._end&&(this._viewEndTime=this._end))):(this._viewStartTime=e-i*a,this._viewStartTime<this._start&&(this._viewStartTime=this._start),this._viewEndTime=this._viewStartTime+s,this._viewEndTime>this._end&&(this._viewEndTime=this._end,this._viewStartTime=this._viewEndTime-s,this._viewStartTime<this._start&&(this._viewStartTime=this._start))),this.setRelativeStartPos(1/a*(this._start-this._viewStartTime))}else this._viewStartTime=this._start,this._viewEndTime=this._viewStartTime+s,this._viewEndTime>this._end&&(this._viewEndTime=this._end),this.setRelativeStartPos(0);this.applyTimeZoomCanvasPosition()},t.TimeComponent.prototype.zoomBy=function(t){var e=(1/t-1)/2+1;if(this._isVertical)var i=this.Height/2;else i=this.Width/2;var n=(this._end-this._start)/this.getContentLength()*i+this._viewStartTime;this.handleZoomWheel(this.getContentLength()*e,n,i,!0)},t.TimeComponent.prototype.beginPinchZoom=function(t,e,i,n){this._isVertical?this._initialPinchZoomLoc=Math.sqrt((e-n)*(e-n))+(e<n?e:n):this._initialPinchZoomLoc=Math.sqrt((t-i)*(t-i))+(t<i?t:i);var o=(this._end-this._start)/this.getContentLength();this.isRTL()&&!this._isVertical?this._initialPinchZoomTime=this._viewEndTime-o*this._initialPinchZoomLoc:this._initialPinchZoomTime=o*this._initialPinchZoomLoc+this._viewStartTime,this._initialPinchZoomDist=Math.sqrt((t-i)*(t-i)+(e-n)*(e-n)),this._initialPinchZoomLength=this.getContentLength()},t.TimeComponent.prototype.contPinchZoom=function(t,e,i,n){var o=Math.sqrt((t-i)*(t-i)+(e-n)*(e-n));o!=this._initialPinchZoomDist&&(this._triggerViewportChange=!0);var s=o/this._initialPinchZoomDist*this._initialPinchZoomLength;this.handleZoomWheel(s,this._initialPinchZoomTime,this._initialPinchZoomLoc,!1)},t.TimeComponent.prototype.endPinchZoom=function(){this._initialPinchZoomDist=null,this._initialPinchZoomLoc=null,this._initialPinchZoomLength=null,this._initialPinchZoomTime=null,this._triggerViewportChange&&(this._triggerViewportChange=!1,this.dispatchEvent(this.createViewportChangeEvent()))},t.TimeComponent.prototype.SetPanningEnabled=function(t){this._panningEnabled=t},t.TimeComponent.prototype.IsPanningEnabled=function(){return this._panningEnabled},t.TimeComponent.prototype.panZoomCanvasBy=function(t){if(this._isVertical){var e=this._timeZoomCanvas.getTranslateY()-t,i=-(this.getContentLength()-this._canvasLength-this._startY),n=this._startY;e<i?e=i:e>n&&(e=n),this._timeZoomCanvas.setTranslateY(e);var o=e-this._startY;this.setAbsoluteStartPos(o);var s=this.getContentLength()/(this._end-this._start),a=this._viewEndTime-this._viewStartTime;this._viewStartTime=this._start-o/s,this._viewEndTime=this._viewStartTime+a,this._viewEndTime>this._end&&(this._viewEndTime=this._end)}else{var r=this._timeZoomCanvas.getTranslateX()-t,h=-(this.getContentLength()-this._canvasLength-this._startX),m=this._startX;r<h?r=h:r>m&&(r=m),this._timeZoomCanvas.setTranslateX(r),this.setAbsoluteStartPos(r-this._startX),o=this.getRelativeStartPos(),s=this.getContentLength()/(this._end-this._start),a=this._viewEndTime-this._viewStartTime,this._viewStartTime=this._start-o/s,this._viewEndTime=this._viewStartTime+a,this._viewEndTime>this._end&&(this._viewEndTime=this._end)}},t.TimeComponent.prototype.handleZoom=function(e){e?this.zoomBy(1/t.TimeComponent.ZOOM_BY_VALUE):this.zoomBy(t.TimeComponent.ZOOM_BY_VALUE)},t.TimeComponent.prototype.enableZoomButton=function(t){t?this.zoomin.setEnabled(!0):this.zoomout.setEnabled(!0)},t.TimeComponent.prototype.disableZoomButton=function(t){t?(this.zoomin.setEnabled(!1),this.zoomin.setCursor(null)):(this.zoomout.setEnabled(!1),this.zoomout.setCursor(null))},t.TimeComponent.prototype.applyTimeZoomCanvasPosition=function(){this._isVertical?this._timeZoomCanvas.setTranslateY(this._startY+this.getAbsoluteStartPos()):this._timeZoomCanvas.setTranslateX(this._startX+this.getAbsoluteStartPos())},t.TimeComponent.prototype.getAbsoluteStartPos=function(){return this._startPos},t.TimeComponent.prototype.setAbsoluteStartPos=function(t){this._startPos=t},t.TimeComponent.prototype.getRelativeStartPos=function(){return this.isRTL()&&!this._isVertical?this._canvasLength-this.getContentLength()-this._startPos:this._startPos},t.TimeComponent.prototype.setRelativeStartPos=function(t){this.isRTL()&&!this._isVertical?this._startPos=this._canvasLength-this.getContentLength()-t:this._startPos=t},t.TimeComponent.prototype.getStartXOffset=function(){return this._startX},t.TimeComponent.prototype.setStartXOffset=function(t){this._startX=t},t.TimeComponent.prototype.getStartYOffset=function(){return this._startY},t.TimeComponent.prototype.setStartYOffset=function(t){this._startY=t},t.TimeComponent.prototype.getGraphicalAreaBounds=function(){return this.isVertical()?new t.Rectangle(this._startX,this._startY,this._canvasSize,this._canvasLength):new t.Rectangle(this._startX,this._startY,this._canvasLength,this._canvasSize)},t.TimeComponent.prototype.isTimeDirScrollbarOn=function(){return!0},t.TimeComponent.prototype.isContentDirScrollbarOn=function(){return!0},t.TimeComponent.prototype.getTimeDirScrollbar=function(){return this.timeDirScrollbar},t.TimeComponent.prototype.getContentDirScrollbar=function(t){return t?this.contentDirScrollbar[t]:this.contentDirScrollbar},t.TimeComponent.prototype.setTimeDirScrollbar=function(t){this.timeDirScrollbar=t},t.TimeComponent.prototype.setContentDirScrollbar=function(t,e){null!=e?(null==this.contentDirScrollbar&&(this.contentDirScrollbar=[]),this.contentDirScrollbar[e]=t):this.contentDirScrollbar=t},t.TimeComponent.prototype.getScrollbarPadding=function(){return e._SCROLLBAR_PADDING},t.TimeComponent.prototype.getTimeDirScrollbarStyle=function(){return e.getTimeDirScrollbarStyle()},t.TimeComponent.prototype.getContentDirScrollbarStyle=function(){return e.getContentDirScrollbarStyle()},t.TimeComponent.prototype.HandleEvent=function(t,e){"dvtSimpleScrollbar"==t.type&&(t=this.processScrollbarEvent(t,e)),t&&this.dispatchEvent(t)},t.TimeComponent.prototype.processScrollbarEvent=function(t,e){if(e==this.timeDirScrollbar){var i=t.newMin,n=t.newMax;this._viewStartTime=i,this._viewEndTime=n;var o=this.getContentLength()/(this._end-this._start);this.setRelativeStartPos(o*(this._start-this._viewStartTime)),this.applyTimeZoomCanvasPosition();var s=this.createViewportChangeEvent();this.dispatchEvent(s)}},t.TimeComponent.prototype.processEvent=function(t){t&&this.dispatchEvent(t)},t.TimeComponent.prototype.createViewportChangeEvent=function(){return null},t.TimeComponent.prototype.getViewportStartTime=function(){return this._viewStartTime},t.TimeComponent.prototype.setViewportStartTime=function(t){this._viewStartTime=t},t.TimeComponent.prototype.getViewportEndTime=function(){return this._viewEndTime},t.TimeComponent.prototype.setViewportEndTime=function(t){this._viewEndTime=t},t.TimeComponent.prototype.HandleKeyDown=function(t){},t.TimeComponent.prototype.HandleMouseDown=function(t){},t.TimeComponent.prototype.HandleFocus=function(t){null!=this.zoomin&&this.zoomin._onFocus(t),null!=this.zoomout&&this.zoomout._onFocus(t)},t.TimeComponent.prototype.HandleBlur=function(t){null!=this.zoomin&&this.zoomin._onBlur(t),null!=this.zoomout&&this.zoomout._onBlur(t)},t.TimeComponent.prototype.beginDragPan=function(t,e){this._currentX=t,this._currentY=e},t.TimeComponent.prototype.endDragPan=function(){this.endPan()},t.TimeComponent.prototype.setPanCursorDown=function(){this.setCursor(t.ToolkitUtils.getGrabbingCursor())},t.TimeComponent.prototype.setPanCursorUp=function(){this.setCursor(t.ToolkitUtils.getGrabCursor())},t.TimeComponent.prototype.registerAndConstructGlassPane=function(){if(this._glassPaneUsageStack||(this._glassPaneUsageStack=[]),!this._glassPane){var e=this.getGraphicalAreaBounds();this._glassPane=new t.Rect(this.getCtx(),e.x,e.y,e.w,e.h),this._glassPane.setInvisibleFill()}this._glassPaneUsageStack.push(1)},t.TimeComponent.prototype.installGlassPane=function(){return!this._glassPaneDrawn&&(this.addChild(this._glassPane),this._glassPaneDrawn=!0,!0)},t.TimeComponent.prototype.unregisterAndDestroyGlassPane=function(){this._glassPaneUsageStack.pop(),this._glassPaneDrawn&&0===this._glassPaneUsageStack.length&&(this.removeChild(this._glassPane),this._glassPaneDrawn=!1)},t.TimeComponent.prototype.HandleTouchEnd=function(t){"none"!=this._selectionMode&&this.handleShapeClick(t,"multiple"==this._selectionMode)},t.TimeComponent.prototype.handleShapeClick=function(t){},t.TimeComponent.prototype.HandleMouseClick=function(t){this.handleShapeClick(t,t.ctrlKey&&"multiple"==this._selectionMode)},t.TimeComponent.prototype.endPan=function(){this._triggerViewportChange&&(this._triggerViewportChange=!1,this.dispatchEvent(this.createViewportChangeEvent()))},t.TimeComponent.prototype.contDragPan=function(t,e){if(this._currentX&&this._currentY){var i=this._currentX-t,n=this._currentY-e;return(0!=i||0!=n)&&(this._triggerViewportChange=!0,this._currentX=t,this._currentY=e,this.panBy(i,n),!0)}return!1},t.TimeComponent.prototype.panBy=function(t,e){this.panZoomCanvasBy(t)},
/**
   * @license
   * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
t.TimeComponentEventManager=function(t){this.Init(t.getCtx(),t.processEvent,t,t),this._comp=t,this._isDragPanning=!1,this._isPinchZoom=!1},t.Obj.createSubclass(t.TimeComponentEventManager,t.EventManager),t.TimeComponentEventManager.GECKO_MOUSEWHEEL="wheel",t.TimeComponentEventManager.prototype.addListeners=function(e){t.TimeComponentEventManager.superclass.addListeners.call(this,e),t.SvgDocumentUtils.addDragListeners(this._comp,this._onDragStart,this._onDragMove,this._onDragEnd,this),t.Agent.isTouchDevice()||("firefox"===t.Agent.browser?e.addEvtListener(t.TimeComponentEventManager.GECKO_MOUSEWHEEL,this.OnMouseWheel,!1,this):e.addEvtListener(t.MouseEvent.MOUSEWHEEL,this.OnMouseWheel,!1,this))},t.TimeComponentEventManager.prototype.RemoveListeners=function(e){t.TimeComponentEventManager.superclass.RemoveListeners.call(this,e),t.Agent.isTouchDevice()||("firefox"===t.Agent.browser?e.removeEvtListener(t.TimeComponentEventManager.GECKO_MOUSEWHEEL,this.OnMouseWheel,!1,this):e.removeEvtListener(t.MouseEvent.MOUSEWHEEL,this.OnMouseWheel,!1,this))},t.TimeComponentEventManager.prototype.OnFocus=function(e){t.TimeComponentEventManager.superclass.OnFocus.call(this,e),this._comp.HandleFocus(e)},t.TimeComponentEventManager.prototype.OnBlur=function(e){t.TimeComponentEventManager.superclass.OnBlur.call(this,e),this._comp.HandleBlur(e)},t.TimeComponentEventManager.prototype.OnKeyDown=function(e){t.TimeComponentEventManager.superclass.OnKeyDown.call(this,e),this._comp.HandleKeyDown(e)},t.TimeComponentEventManager.prototype.OnClick=function(e){t.TimeComponentEventManager.superclass.OnClick.call(this,e),this._comp.HandleMouseClick(e)},t.TimeComponentEventManager.prototype.PreOnMouseDown=function(e){t.TimeComponentEventManager.superclass.PreOnMouseDown.call(this,e),this._comp.HandleMouseDown(e)},t.TimeComponentEventManager.prototype.OnMouseWheel=function(t){this._comp.HandleMouseWheel(t)},t.TimeComponentEventManager.prototype.OnTouchStartBubble=function(e){t.TimeComponentEventManager.superclass.OnTouchStartBubble.call(this,e),this._comp.HandleTouchStart(e),this._comp.getCtx().getStage().getSVGRoot().parentNode.focus()},t.TimeComponentEventManager.prototype.OnTouchEndBubble=function(e){t.TimeComponentEventManager.superclass.OnTouchEndBubble.call(this,e),this._comp.HandleTouchEnd(e)},t.TimeComponentEventManager.prototype._onDragStart=function(e){return!(!this._comp.hasValidOptions()||!this._comp.IsPanningEnabled())&&(t.Agent.isTouchDevice()?this._onTouchDragStart(e):this._onMouseDragStart(e))},t.TimeComponentEventManager.prototype._onDragMove=function(e){return!!this._comp.IsPanningEnabled()&&(t.Agent.isTouchDevice()?this._onTouchDragMove(e):this._onMouseDragMove(e))},t.TimeComponentEventManager.prototype._onDragEnd=function(e){return!!this._comp.IsPanningEnabled()&&(t.Agent.isTouchDevice()?this._onTouchDragEnd(e):this._onMouseDragEnd(e))},t.TimeComponentEventManager.prototype._getRelativePosition=function(e,i){return this._stageAbsolutePosition||(this._stageAbsolutePosition=this._context.getStageAbsolutePosition()),new t.Point(e-this._stageAbsolutePosition.x,i-this._stageAbsolutePosition.y)},t.TimeComponentEventManager.prototype._onMouseDragStart=function(e){if(e.button!=t.MouseEvent.RIGHT_CLICK_BUTTON){var i=this._getRelativePosition(e.pageX,e.pageY);if(this._comp.getGraphicalAreaBounds().containsPoint(i.x,i.y)&&!this._isDragPanning)return this.hideTooltip(),this._comp.registerAndConstructGlassPane(),this._comp.setPanCursorDown(),this._comp.beginDragPan(i.x,i.y),this._isDragPanning=!0,!0}return!1},t.TimeComponentEventManager.prototype._onMouseDragMove=function(t){var e=this._getRelativePosition(t.pageX,t.pageY);this._comp.contDragPan(e.x,e.y)&&this._isDragPanning&&this._comp.installGlassPane()},t.TimeComponentEventManager.prototype._onMouseDragEnd=function(t){if(this._isDragPanning){this._isDragPanning=!1,this._comp.endDragPan(),this._stageAbsolutePosition=null,this._comp.unregisterAndDestroyGlassPane();var e=this._getRelativePosition(t.pageX,t.pageY);this._comp.getGraphicalAreaBounds().containsPoint(e.x,e.y)?this._comp.setPanCursorUp():this._comp.setCursor("inherit")}},t.TimeComponentEventManager.prototype.OnMouseMove=function(e){t.TimeComponentEventManager.superclass.OnMouseMove.call(this,e);var i=this._getRelativePosition(e.pageX,e.pageY);this._comp.getGraphicalAreaBounds().containsPoint(i.x,i.y)?this._isDragPanning?this._comp.setPanCursorDown():this._comp.setPanCursorUp():this._comp.setCursor("inherit")},t.TimeComponentEventManager.prototype._onTouchDragStart=function(e){var i=e.touches,n=this._comp.getGraphicalAreaBounds();if(1==i.length){var o=this._getRelativePosition(i[0].pageX,i[0].pageY);if(n.containsPoint(o.x,o.y))return this._comp.beginDragPan(o.x,o.y),t.EventManager.consumeEvent(e),!0}else if(2==i.length){this._comp.endDragPan(),this._isPinchZoom=!0;var s=this._getRelativePosition(i[0].pageX,i[0].pageY),a=this._getRelativePosition(i[1].pageX,i[1].pageY);if(n.containsPoint(s.x,s.y)&&n.containsPoint(a.x,a.y))return this._comp.beginPinchZoom(s.x,s.y,a.x,a.y),t.EventManager.consumeEvent(e),!0}return!1},t.TimeComponentEventManager.prototype._onTouchDragMove=function(t){var e=t.touches;if(1==e.length){var i=this._getRelativePosition(e[0].pageX,e[0].pageY);this._comp.contDragPan(i.x,i.y),t.preventDefault()}else if(2==e.length){var n=this._getRelativePosition(e[0].pageX,e[0].pageY),o=this._getRelativePosition(e[1].pageX,e[1].pageY);this._comp.contPinchZoom(n.x,n.y,o.x,o.y),t.preventDefault()}},t.TimeComponentEventManager.prototype._onTouchDragEnd=function(t){this._isPinchZoom?(this._isPinchZoom=!1,this._comp.endPinchZoom(),t.preventDefault()):(this._comp.endDragPan(),t.preventDefault()),this._stageAbsolutePosition=null},t.TimeComponentEventManager.prototype.zoomBy=function(t){this._comp.zoomBy(t)},t.TimeComponentEventManager.prototype.panBy=function(e,i){var n=e*this._comp._canvasLength*(t.Agent.isRightToLeft(this._context)?-1:1),o=i*this._comp._canvasSize;0!=n&&(this._comp._triggerViewportChange=!0),this._comp.panBy(n,o),this._comp.endPan()},t.TimeComponentEventManager.prototype.HandleZoomInClick=function(t){this._comp.handleZoom(!0)},t.TimeComponentEventManager.prototype.HandleZoomOutClick=function(t){this._comp.handleZoom(!1)},t.TimeComponentEventManager.prototype.GetTouchResponse=function(){return t.EventManager.TOUCH_RESPONSE_TOUCH_HOLD},
/**
   * @license
   * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
t.TimeComponentKeyboardHandler=function(t){this.Init(t)},t.Obj.createSubclass(t.TimeComponentKeyboardHandler,t.KeyboardHandler),t.TimeComponentKeyboardHandler.prototype.isSelectionEvent=function(t){return this.isNavigationEvent(t)&&!t.ctrlKey},t.TimeComponentKeyboardHandler.prototype.isMultiSelectEvent=function(e){return e.keyCode==t.KeyboardEvent.SPACE&&e.ctrlKey},t.TimeComponentKeyboardHandler.prototype.processKeyDown=function(e){if(t.KeyboardEvent.isPlus(e)||t.KeyboardEvent.isEquals(e))this._eventManager.HandleZoomInClick();else if(t.KeyboardEvent.isMinus(e)||t.KeyboardEvent.isUnderscore(e))this._eventManager.HandleZoomOutClick();else{var i=e.keyCode;i==t.KeyboardEvent.PAGE_UP?(e.shiftKey?this._eventManager.panBy(-.25,0):this._eventManager.panBy(0,-.25),t.EventManager.consumeEvent(e)):i==t.KeyboardEvent.PAGE_DOWN&&(e.shiftKey?this._eventManager.panBy(.25,0):this._eventManager.panBy(0,.25),t.EventManager.consumeEvent(e))}return t.TimeComponentKeyboardHandler.superclass.processKeyDown.call(this,e)};
/**
   * @license
   * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var e=new Object;t.Obj.createSubclass(e,t.Obj),e._DEFAULT_TIME_DIR_SCROLLBAR_STYLE="height: 3px; width: 3px; color: #9E9E9E; background-color: #F0F0F0",e._DEFAULT_CONTENT_DIR_SCROLLBAR_STYLE="height: 3px; width: 3px; color: #9E9E9E; background-color: #F0F0F0",e._SCROLLBAR_PADDING=4,e.getTimeDirScrollbarStyle=function(){return new t.CSSStyle(e._DEFAULT_TIME_DIR_SCROLLBAR_STYLE)},e.getContentDirScrollbarStyle=function(){return new t.CSSStyle(e._DEFAULT_CONTENT_DIR_SCROLLBAR_STYLE)},e.getScrollbarPadding=function(){return e._SCROLLBAR_PADDING}}(dvt);
  return dvt;
});
