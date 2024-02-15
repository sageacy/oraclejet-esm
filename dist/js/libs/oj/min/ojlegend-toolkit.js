/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojdvt-toolkit"],function(e,t){"use strict";const i=(e,t)=>{var i=null,s=null!=t.getOptions().data;return e.categories&&e.categories.length>0?i=e.categories[0]:s||(i=e.id?e.id:e.text),i},s=(e,t)=>{var i=t.getOptions().hiddenCategories;return!(!i||i.length<=0)&&-1!==i.indexOf(e)},n=(e,t)=>{var i=t.getOptions();return"off"==e.expanded||0==e.expanded||i.expanded&&0==i.expanded.has(e.id)},a=e=>!e||0===Object.keys(e).length;class l{constructor(e,s,n,a,l,r){if(this._legend=e,this._displayables=s,this._item=n,this._category=i(this._item,this._legend),this._id=this._category?this._category:n.title?n.title:n.id,this._drillable=r,this._tooltip=a,this._datatip=l,this._isShowingKeyboardFocusEffect=!1,this._hoverBorderRadius=parseInt(e.getOptions()._hoverBorderRadius),this._drillable)for(var o=0;o<this._displayables.length;o++)this._displayables[o].setCursor(t.SelectionEffectUtils.getSelectingCursor())}static associate(e,t,i,s,n,a){if(!e||!i)return null;var r=new l(t,e,i,s,n,a);t.__registerObject(r);for(var o=0;o<e.length;o++)t.getEventManager().associate(e[o],r);return r}getData(){return this._item}getColor(){return this._item.color}getId(){return this._id}getDisplayables(){return this._displayables}getCategories(){return null!=this._category?[this._category]:null}isDrillable(){return this._drillable}getAriaLabel(){var e=[],i=this._legend.getOptions().translations,a=this._legend.getOptions().hideAndShowBehavior,l=s(this._category,this._legend),r=this.getData();return this._displayables[0]instanceof t.IconButton?(e.push(i[n(r,this._legend)?"stateCollapsed":"stateExpanded"]),t.Displayable.generateAriaLabel(r.title,e)):("off"!=a&&"none"!=a&&e.push(i[l?"stateHidden":"stateVisible"]),this.isDrillable()&&e.push(i.stateDrillable),null!=r.shortDesc?t.Displayable.generateAriaLabel(r.shortDesc,e):e.length>0?t.Displayable.generateAriaLabel(r.text,e):null)}updateAriaLabel(){!t.Agent.deferAriaCreation()&&this._displayables[0]&&this._displayables[0].setAriaProperty("label",this.getAriaLabel())}getNextNavigable(e){if(e.type==t.MouseEvent.CLICK)return this;var i=this._legend.__getKeyboardObjects();return t.KeyboardHandler.getNextNavigable(this,e,i,!0,this._legend,!0)}getKeyboardBoundingBox(e){return this._displayables[0]?this._displayables[0].getDimensions(e):new t.Rectangle(0,0,0,0)}getTargetElem(){return this._displayables[0]?this._displayables[0].getElem():null}showKeyboardFocusEffect(){this._isShowingKeyboardFocusEffect=!0,this._displayables[0]&&(this._displayables[0]instanceof t.IconButton?this._displayables[0].showKeyboardFocusEffect():this._displayables[0].addClassName("oj-legend-focus"))}hideKeyboardFocusEffect(){this._isShowingKeyboardFocusEffect=!1,this._displayables[0]&&(this._displayables[0]instanceof t.IconButton?this._displayables[0].hideKeyboardFocusEffect():this._displayables[0].removeClassName("oj-legend-focus"))}isShowingKeyboardFocusEffect(){return this._isShowingKeyboardFocusEffect}getTooltip(){return this._tooltip}getDatatip(){return this._datatip}getDatatipColor(){return this._item.color}isDragAvailable(){return!0}getDragTransferable(){return[this.getId()]}getDragFeedback(){return this.getDisplayables()}showHoverEffect(){this._displayables[0]&&this._displayables[0]instanceof t.Rect&&(this._displayables[0].addClassName("oj-legend-hover"),this._displayables[0].setRx(this._hoverBorderRadius))}hideHoverEffect(){this._displayables[0]&&this._displayables[0]instanceof t.Rect&&(this._displayables[0].removeClassName("oj-legend-hover"),this._displayables[0].setRx(0))}}class r extends t.Automation{GetSubIdForDomElement(e){var t=this._comp.getEventManager().GetLogicalObject(e);if(t&&t instanceof l){var i=t.getData(),s=this._getIndicesFromItem(i,this._comp.getOptions());if(s)return"section"+s}return null}_getIndicesFromItem(e,t){if(t.sections&&t.sections.length>0){for(var i=0;i<t.sections.length;i++){if(t.sections[i]==e)return"["+i+"]";var s=this._getIndicesFromItem(e,t.sections[i]);if(s)return"["+i+"]"+s}return null}if(t.items&&t.items.length>0){for(var n=0;n<t.items.length;n++)if(t.items[n]==e)return":item["+n+"]";return null}return null}getIndicesFromSeries(e,t){if(t.sections&&t.sections.length>0){for(var i=0;i<t.sections.length;i++){var s=this.getIndicesFromSeries(e,t.sections[i]);if(s)return"["+i+"]"+s}return null}if(t.items&&t.items.length>0){for(var n=0;n<t.items.length;n++)if(t.items[n].text==e.name)return":item["+n+"]";return null}return null}getLegendItem(e,t){var i=t.indexOf("["),s=t.indexOf("]");if(i>=0&&s>=0){var n=t.substring(i+1,s),a=t.indexOf(":"),l=(t=t.substring(s+1)).indexOf("["),r=t.indexOf("]");return l>=0&&r>=0?this.getLegendItem(e.sections[n],t):0==a?e.items[n]:e.sections[n]}}getDomElementForSubId(e){if(e==t.Automation.TOOLTIP_SUBID)return this.GetTooltipElement(this._comp);for(var i=this.getLegendItem(this._comp.getOptions(),e),s=this._comp.__getObjects(),n=0;n<s.length;n++){if(i==s[n].getData())return s[n].getDisplayables()[0].getElem()}return null}getTitle(){return this._comp.getOptions().title}getItem(e){var t,i=e.shift(),s=this._comp.getOptions();if(!s.sections||0===s.sections.length)return null;for(;null!=i;)e.length>0?s=s.sections[i]:t=s.items[i],i=e.shift();return t?{text:t.text?t.text:null}:null}getSection(e){var t,i=e.shift(),s=this._comp.getOptions();if(!s.sections||0===s.sections.length)return null;for(;null!=i;)e.length>0?s=s.sections[i]:t=s.sections[i],i=e.shift();return{title:t&&t.title?t.title:null,items:t&&t.items?this._generateItemObjects(t.items):null,sections:t&&t.sections?this._generateSectionObjects(t.sections):null}}_generateItemObjects(e){for(var t=[],i=0;i<e.length;i++)t.push({text:e[i].text});return t}_generateSectionObjects(e){for(var t=[],i=0;i<e.length;i++)t.push({title:e[i].title?e[i].title:null,items:e[i].items?this._generateItemObjects(e[i].items):null,sections:e[i].sections?this._generateSectionObjects(e[i].sections):null});return t}_getLogicalObject(e){for(var t=this._comp._peers,i=0;i<t.length;i++)if(e===t[i]._id)return t[i];return null}dispatchDrillEvent(e){var t=this._getLogicalObject(e);this._comp.getEventManager().processDrillEvent(t)}}class o extends t.BaseComponentDefaults{constructor(e){super({alta:{skin:t.CSSStyle.SKIN_ALTA,orientation:"vertical",position:null,backgroundColor:null,borderColor:null,textStyle:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA_11+"color: #333333;"),titleStyle:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA_11+"color: #737373;"),_sectionTitleStyle:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA_11+"color: #737373;"),titleHalign:"",hiddenCategories:[],hideAndShowBehavior:"off",hoverBehavior:"none",hoverBehaviorDelay:200,scrolling:"asNeeded",halign:"start",valign:"top",drilling:"off",dnd:{drag:{series:{}},drop:{legend:{}}},_color:"#a6acb1",_markerShape:"square",_lineWidth:3,layout:{outerGapWidth:3,outerGapHeight:3,titleGapWidth:17,titleGapHeight:9,symbolGapWidth:7,symbolGapHeight:4,rowGap:4,columnGap:10,sectionGapHeight:16,sectionGapWidth:24},isLayout:!1}},e)}static getGapSize(e,i){var s=Math.min(t.TextUtils.getTextStringHeight(e.getCtx(),e.getOptions().textStyle)/14,1);return Math.ceil(i*s)}getNoCloneObject(){return{sections:{items:{_getDataContext:!0}}}}}class h extends t.EventManager{constructor(e){super(e.getCtx(),e.processEvent,e,e),this._legend=e}OnClick(e){super.OnClick(e);var t=this.GetLogicalObject(e.target);if(t){var i=this.processHideShowEvent(t),s=this.handleClick(t,e);(i||s)&&e.stopPropagation()}}OnMouseOver(e){super.OnMouseOver(e);var t=this.GetLogicalObject(e.target);t&&this.UpdateActiveElement(t)}HandleTouchClickInternal(e){var t=this.GetLogicalObject(e.target);if(t){var i=e.touchEvent,s=this.processHideShowEvent(t),n=this.handleClick(t,e);(s||n)&&i&&i.preventDefault()}}processHideShowEvent(e){var i=this._legend.getOptions().hideAndShowBehavior;if("none"==i||"off"==i)return!1;var n=e.getCategories?e.getCategories():null;if(!n||n.length<=0)return!1;var a=e.getCategories()[0],l=this._legend.getOptions().hiddenCategories||[];l=l.slice();for(var r=e.getDisplayables(),o=0;o<r.length;o++){var h=r[o];h instanceof t.SimpleMarker?h.setHollow(e.getColor()):h instanceof t.Rect&&e.updateAriaLabel()}var g,d=n[0];return s(a,this._legend)?(l.splice(l.indexOf(a),1),g=t.EventFactory.newCategoryShowEvent(d,l)):(l.push(a),g=t.EventFactory.newCategoryHideEvent(d,l)),this._legend.getOptions().hiddenCategories=l,this.FireEvent(g,this._legend),!0}processDrillEvent(e){if(e&&e instanceof l&&e.isDrillable()){var i=e.getId();return this.FireEvent(t.EventFactory.newDrillEvent(i),this._legend),!0}return!1}handleClick(e,i){if(this.processDrillEvent(e))return!0;var s=e instanceof t.SimpleObjPeer?e.getParams():null;return!(!s||!s.isCollapsible)&&(this.toggleSectionCollapse(i,s.id),!0)}ProcessRolloverEvent(e,i,s){var n=this._legend.getOptions();if(("off"!==n.drilling||"none"!==n.hoverBehavior||"none"!==n.hideAndShowBehavior&&"off"!==n.hideAndShowBehavior)&&!(i.getDisplayables&&i.getDisplayables()[0]instanceof t.IconButton)){if("none"!==n.hoverBehavior){var a=i.getCategories?i.getCategories():[];n.highlightedCategories=s&&a?a.slice():null;var l=t.EventFactory.newCategoryHighlightEvent(n.highlightedCategories,s),r=t.CSSStyle.getTimeMilliseconds(n.hoverBehaviorDelay);this.RolloverHandler.processEvent(l,this._legend.__getObjects(),r,!0)}("none"!==n.drilling||"none"!==n.hideAndShowBehavior&&"off"!==n.hideAndShowBehavior)&&(s?i.showHoverEffect&&i.showHoverEffect():i.hideHoverEffect&&i.hideHoverEffect())}}onCollapseButtonClick(e,t){var i=t.getId();this.toggleSectionCollapse(e,i)}toggleSectionCollapse(e,i){for(var s=this._legend.getOptions(),n=s.expanded,a=this._legend.getOptions(),l=null,r=0;r<i.length;r++)a=a.sections[i[r]];if(n?n.has(a.id)?(s.expanded=n.delete([a.id]),l=!1):(s.expanded=n.add([a.id]),l=!0):a.expanded="off"==a.expanded?"on":"off",e.type==t.MouseEvent.CLICK){var o=this.GetLogicalObject(e.target);o.getNextNavigable&&this.setFocusObj(o.getNextNavigable(e))}var h=this._legend.getKeyboardFocus(),g=!!h&&h.isShowingKeyboardFocusEffect();this._legend.render(),h&&this._legend.setKeyboardFocus(h,g),this.hideTooltip(),null!=l&&(e=new t.EventFactory.newExpandCollapseEvent(l?"expand":"collapse",a.id,a,this._legend.getOptions()._widgetConstructor,s.expanded),this.FireEvent(e,this._legend))}GetTouchResponse(){return this._legend.getOptions()._isScrollingLegend?t.EventManager.TOUCH_RESPONSE_TOUCH_HOLD:t.EventManager.TOUCH_RESPONSE_TOUCH_START}isDndSupported(){return!0}GetDragSourceType(e){var t=this.DragSource.getDragObject();return t instanceof l&&null!=t.getData()._getDataContext?"series":null}GetDragDataContexts(e){var i=this.DragSource.getDragObject();if(i instanceof l){var s=i.getData()._getDataContext();return e&&(s=t.JsonUtils.clone(s,null,{component:!0,componentElement:!0}),t.ToolkitUtils.cleanDragDataContext(s)),[s]}return[]}GetDropTargetType(e){var t=this._legend.stageToLocal(this.getCtx().pageToStageCoords(e.pageX,e.pageY)),i=this._legend.getOptions().dnd.drop,s=this._legend.__getBounds();return Object.keys(i.legend).length>0&&s.containsPoint(t.x,t.y)?"legend":null}GetDropEventPayload(e){return{}}ShowDropEffect(e){if("legend"==this.GetDropTargetType(e)){var t=this._legend.getOptions()._dropColor,i=this._legend.getCache().getFromCache("background");i&&(i.setSolidFill(t),i.setClassName("oj-active-drop"))}}ClearDropEffect(){var e=this._legend.getCache().getFromCache("background");if(e){var i=this._legend.getOptions().backgroundColor;i?e.setSolidFill(i):e.setInvisibleFill(),t.ToolkitUtils.removeClassName(e.getElem(),"oj-invalid-drop"),t.ToolkitUtils.removeClassName(e.getElem(),"oj-active-drop")}}ShowRejectedDropEffect(e){if("legend"==this.GetDropTargetType(e)){var t=this._legend.getCache().getFromCache("background");t&&t.setClassName("oj-invalid-drop")}}}class g extends t.KeyboardHandler{constructor(e,t){super(e),this._legend=t}processKeyDown(e){var i=e.keyCode,s=this._eventManager.getFocus(),n=s&&s.getDisplayables()[0]instanceof t.IconButton,a=null;if(null==s&&i==t.KeyboardEvent.TAB){var l=this._legend.__getKeyboardObjects();l.length>0&&(t.EventManager.consumeEvent(e),a=this.getDefaultNavigable(l))}else s&&(i==t.KeyboardEvent.TAB?(t.EventManager.consumeEvent(e),a=s):i==t.KeyboardEvent.ENTER||i==t.KeyboardEvent.SPACE?(i==t.KeyboardEvent.ENTER&&this._eventManager.handleClick(s,e),n?this._eventManager.onCollapseButtonClick(e,s.getDisplayables()[0]):this._eventManager.processHideShowEvent(s),t.EventManager.consumeEvent(e)):!n||i!=t.KeyboardEvent.LEFT_ARROW&&i!=t.KeyboardEvent.RIGHT_ARROW?a=super.processKeyDown(e):(this._eventManager.onCollapseButtonClick(e,s.getDisplayables()[0]),t.EventManager.consumeEvent(e)));return a&&this._legend.container.scrollIntoView(a.getDisplayables()[0]),a}}const d={_DEFAULT_LINE_WIDTH_WITH_MARKER:2,_LINE_MARKER_SIZE_FACTOR:.6,_DEFAULT_SYMBOL_SIZE:10,_BUTTON_SIZE:12,_FOCUS_GAP:2,render:(e,i)=>{var s=e.getOptions(),n=e.getCtx(),a=t.Agent.isRightToLeft(n);e.__setBounds(i),s.isLayout||d._renderBackground(e,i);var l="redwood"===n.getThemeBehavior()?"always":"asNeeded",r=new t.SimpleScrollableContainer(n,i.w,i.h,l),h=new t.Container(n);r.getScrollingPane().addChild(h),e.addChild(r),e.container=r;var g=o.getGapSize(e,s.layout.outerGapWidth),c=o.getGapSize(e,s.layout.outerGapHeight);if(i.x+=g,i.y+=c,i.w-=2*g,i.h-=2*c,i.w<=0||i.h<=0)return new t.Dimension(0,0);var u=d._renderContents(e,h,new t.Rectangle(i.x,i.y,i.w,i.h));if(0==u.w||0==u.h)return new t.Dimension(0,0);r.prepareContentPane(),u.h>i.h?(u.h=i.h,s._isScrollingLegend=!0):s._isScrollingLegend=!1;var p=0,_=0,v=null!=s.hAlign?s.hAlign:s.halign;"center"==v?p=i.x-u.x+(i.w-u.w)/2:"end"==v&&(p=a?i.x-u.x:i.x-u.x+i.w-u.w);var y=null!=s.vAlign?s.vAlign:s.valign;"middle"==y?_=i.y-u.y+(i.h-u.h)/2:"bottom"==y&&(_=i.y-u.y+i.h-u.h);var m=new t.Rectangle(u.x+p-g,u.y+_-c,u.w+2*g,u.h+2*c);if(s.isLayout)return m;(p||_)&&h.setTranslate(p,_);for(var b=e.__getTitles(),f=0;f<b.length;f++)t.LayoutUtils.align(u,b[f].halign,b[f].text,b[f].text.getDimensions().w);return m},_renderContents:(e,t,i)=>{var s=e.getOptions();i=i.clone();var n=d._renderTitle(e,t,s.title,i,null,!0);if(n){var a=n.getDimensions(),l=o.getGapSize(e,s.layout.titleGapHeight);i.y+=a.h+l,i.h-=Math.floor(a.h+l)}var r=d._renderSections(e,t,s.sections,i,[]);return n?a.getUnion(r):r},_renderBackground:(e,i)=>{var s=e.getOptions(),n=s.backgroundColor,a=s.borderColor,l=s.dnd?s.dnd.drop.legend:{},r=s.dnd?s.dnd.drag.series:{};if(n||a||Object.keys(l).length>0||Object.keys(r).length>0){var o=new t.Rect(e.getCtx(),i.x,i.y,i.w,i.h);n?o.setSolidFill(n):o.setInvisibleFill(),a&&(o.setSolidStroke(a),o.setPixelHinting(!0)),e.addChild(o),e.getCache().putToCache("background",o)}},_renderTitle:(e,i,s,n,l,r,o,h)=>{var g=e.getOptions(),d=i.getCtx(),c=t.Agent.isRightToLeft(d);if(!s)return null;var u=new t.OutputText(d,s,n.x,n.y),p=g.titleStyle;const _=a(g.sectionTitleStyle);if(_||(p=new t.CSSStyle(g.sectionTitleStyle)),l){var v=g._sectionTitleStyle.clone();_||(v=v.merge(p)),p=l.titleStyle?v.merge(new t.CSSStyle(l.titleStyle)):v}if(u.setCSSStyle(p),t.TextUtils.fitText(u,n.w,1/0,i)){if(c&&u.setX(n.x+n.w-u.getDimensions().w),g.isLayout)i.removeChild(u);else{var y={id:o,button:h};if(y.isCollapsible=l&&("on"===l.collapsible||"boolean"==typeof l.collapsible&&l.collapsible),e.getEventManager().associate(u,new t.SimpleObjPeer(u.getUntruncatedTextString(),null,null,y)),r){var m=l&&l.titleHalign?l.titleHalign:g.titleHalign||g.sectionTitleHalign;e.__registerTitle({text:u,halign:m})}}return u}return null},_renderSections:(e,i,s,a,l)=>{if(!s||0==s.length)return new t.Rectangle(0,0,0,0);var r=e.getOptions();r.symbolWidth||r.symbolHeight?(r.symbolWidth?r.symbolHeight||(r.symbolHeight=r.symbolWidth):r.symbolWidth=r.symbolHeight,r.symbolWidth=parseInt(r.symbolWidth),r.symbolHeight=parseInt(r.symbolHeight)):(r.symbolWidth=d._DEFAULT_SYMBOL_SIZE,r.symbolHeight=d._DEFAULT_SYMBOL_SIZE);for(var h,g=o.getGapSize(e,r.layout.sectionGapHeight),c=o.getGapSize(e,r.layout.titleGapHeight),u=o.getGapSize(e,r.layout.sectionGapWidth),p=d._getRowHeight(e),_="vertical"!=r.orientation,v=null,y=a.clone(),m=0;m<s.length;m++){var b=l.concat([m]),f=n(s[m],e)?c:g;_?(h=d._renderHorizontalSection(e,i,s[m],y,p)).w>y.w?(y.w<a.w&&(a.y+=h.h+f,a.h-=h.h+f),h=h.w<=a.w?d._renderHorizontalSection(e,i,s[m],a,p):d._renderVerticalSection(e,i,s[m],a,p,b,!0),a.y+=h.h+f,a.h-=h.h+f,y=a.clone()):(y.w-=h.w+u,t.Agent.isRightToLeft(e.getCtx())||(y.x+=h.w+u)):(h=d._renderVerticalSection(e,i,s[m],a,p,b,!1),a.y+=h.h+f,a.h-=h.h+f),v=v?v.getUnion(h):h}return v},_createButton:(e,i,s,n,a,r,o,h,g,c,u)=>{var p=t.ToolkitUtils.getIconStyle(e,n[a]),_=new t.IconButton(e,"borderless",{style:p,size:d._BUTTON_SIZE},null,g,c,u);_.setTranslate(r,o);var v=l.associate([_],i,s,h,null,!1);return _.setAriaRole("button"),v.updateAriaLabel(),_},_renderVerticalSection:(e,i,s,a,l,r,h)=>{if(s){var g,c=e.getOptions(),u=o.getGapSize(e,c.layout.symbolGapWidth),p=o.getGapSize(e,c.layout.rowGap),_=o.getGapSize(e,c.layout.columnGap),v=e.getCtx(),y=t.Agent.isRightToLeft(v),m=null!=s.sections&&s.sections.length>0,b=null!=s.items&&s.items.length>0,f=a.clone();"off"!=c.scrolling&&(f.h=1/0);var C,S="on"===s.collapsible||"boolean"==typeof s.collapsible&&s.collapsible;if(S){var x=y?f.x+f.w-d._BUTTON_SIZE:f.x;if(!c.isLayout){var w=n(s,e),O=w?"closed":"open",E=c.translations[w?"tooltipExpand":"tooltipCollapse"],T=e.getEventManager();C=d._createButton(v,e,s,c._resources,O,x,f.y,E,r,T.onCollapseButtonClick,T),i.addChild(C)}g=new t.Rectangle(x,f.y,d._BUTTON_SIZE,d._BUTTON_SIZE);var D=o.getGapSize(e,c.layout.symbolGapWidth);y||(f.x+=d._BUTTON_SIZE+D),f.w-=d._BUTTON_SIZE+D}var A=d._renderTitle(e,i,s.title,f,s,!S&&r.length<=1,r,C),M=y?f.x+f.w:f.x,I=A?A.getDimensions():new t.Rectangle(M,f.y,0,0),L=g?I.getUnion(g):I;if(!b&&!m||n(s,e))return L;if(L.h>0){var F=o.getGapSize(e,c.layout.titleGapHeight);f.y+=L.h+F,f.h-=L.h+F}if(m){var R=d._renderSections(e,i,s.sections,f,r);L=L.getUnion(R)}if(!b)return L;var G=d._calcColumns(e,f,l,s.items,h),H=G.numCols,k=G.numRows,B=G.width,N=f.y;if(0==k||0==H)return L;var j=k*(l+p)-p,U=Math.min(H*(B+_)-_,f.w),P=new t.Rectangle(y?f.x+f.w-U:f.x,f.y,U,j);if(L=L.getUnion(P),c.isLayout)return L;for(var W=B-c.symbolWidth-u,K=0,z=1,V=s.items.length,Z=0;Z<V;Z++){var Y=s.items[Z];if(d._createLegendItem(e,i,Y,f,W,l,Z),f.y+=l+p,++K===k&&z!==H&&(f.y=N,f.w-=B+_,y||(f.x+=B+_),K=0,z++),K===k)break}return L}},_renderHorizontalSection:(e,i,s,n,a)=>{if(s){var l=e.getOptions(),r=l.symbolWidth,h=o.getGapSize(e,l.layout.symbolGapWidth),g=o.getGapSize(e,l.layout.columnGap),c=o.getGapSize(e,l.layout.titleGapWidth),u=null!=s.items&&s.items.length>0,p=t.Agent.isRightToLeft(e.getCtx()),_=n.clone(),v=d._renderTitle(e,i,s.title,n,s,!1),y=p?n.x+n.w:n.x,m=v?v.getDimensions():new t.Rectangle(y,n.y,0,0);if(!u)return m;m.w>0&&(_.w-=m.w+c,p||(_.x+=m.w+c));var b,f,C,S=[],x=n.w-_.w,w=s.items.length;for(C=0;C<w;C++)b=s.items[C],x+=(f=Math.ceil(t.TextUtils.getTextStringWidth(e.getCtx(),b.text,l.textStyle)))+r+h+g,S.push(f);w>0&&(x-=g);var O,E=new t.Rectangle(p?n.x+n.w-x:n.x,n.y,x,Math.max(a,m.h));if(l.isLayout||x>n.w)return i.removeChild(v),E;if(v){e.getCache().putToCache("horizRowAlign",!0),e.getCache().putToCache("sectionRect",E);var T=v.getDimensions(),D=E.y+E.h/2-T.h/2-T.y;v.setTranslate(0,D)}for(C=0;C<w;C++)b=s.items[C],d._createLegendItem(e,i,b,_,S[C],a,C),O=S[C]+r+h,_.w-=O+g,p||(_.x+=O+g);return e.getCache().putToCache("horizRowAlign",!1),e.getCache().putToCache("sectionRect",null),E}},_calcColumns:(e,i,s,n,a)=>{for(var l=e.getOptions(),r=[],h=0;h<n.length;h++)r.push(n[h].text);var g,d,c,u=t.TextUtils.getMaxTextStringWidth(e.getCtx(),r,l.textStyle),p=l.symbolWidth,_=o.getGapSize(e,l.layout.symbolGapWidth),v=o.getGapSize(e,l.layout.rowGap),y=o.getGapSize(e,l.layout.columnGap),m=Math.ceil(p+_+u);a?(c=Math.min(Math.max(Math.floor((i.w+y)/(m+y)),1),n.length),g=Math.min(Math.floor((i.h+v)/(s+v)),Math.ceil(n.length/c)),c=Math.ceil(n.length/g),g=Math.ceil(n.length/c)):i.h==1/0?(c=1,g=n.length):(g=Math.min(Math.floor((i.h+v)/(s+v)),n.length),c=Math.ceil(n.length/g),g=Math.ceil(n.length/c));var b=(i.w-y*(c-1))/c;return(d=Math.min(m,b))<p?{width:0,numCols:0,numRows:0}:{width:d,numCols:c,numRows:g}},_getRowHeight:e=>{var i=e.getOptions(),s=t.TextUtils.getTextStringHeight(e.getCtx(),i.textStyle),n=i.symbolHeight+o.getGapSize(e,i.layout.symbolGapHeight);return Math.ceil(Math.max(s,n))},_createLegendItem:(e,n,a,r,h,g,c)=>{var u,p=e.getOptions(),_=e.getCtx(),v=t.Agent.isRightToLeft(_),y=p.symbolWidth,m=o.getGapSize(e,p.layout.symbolGapWidth),b=v?r.x+r.w-y:r.x,f=v?r.x+r.w-y-m:r.x+y+m,C=d._createLegendSymbol(e,b,r.y,g,a,c),S=a.text;if(null!=S){var x=p.textStyle;(u=d._createLegendText(n,h,S,x))&&(u.setX(f),t.TextUtils.centerTextVertically(u,r.y+g/2),v&&u.alignRight());var w=e.getCache().getFromCache("sectionRect");if(e.getCache().getFromCache("horizRowAlign")&&w&&"vertical"!=p.orientation){var O=u.getDimensions().h,E=w.y+w.h/2-Math.max(p.symbolHeight,O)/2-r.y;C.setTranslate(0,E),u.setTranslate(0,E)}}n.addChild(C);var T=new t.Rect(_,v?f-h-d._FOCUS_GAP:b-d._FOCUS_GAP,r.y-d._FOCUS_GAP,y+m+h+2*d._FOCUS_GAP,g+2*d._FOCUS_GAP);T.setInvisibleFill();var D=p.hideAndShowBehavior;"none"!=D&&"off"!=D&&T.setCursor("pointer"),n.addChild(T);var A=[T,C];null!=u&&A.push(u);var M=l.associate(A,e,a,null!=u?u.getUntruncatedTextString():null,a.shortDesc,d._isItemDrillable(e,a));s(i(a,e),e)&&(C.setHollow(M.getColor()),C.setStyle().setClassName()),("none"!=D&&"off"!=D||null!=a.shortDesc)&&(T.setAriaRole("img"),M.updateAriaLabel())},_isItemDrillable:(e,t)=>"on"==t.drilling||"off"!=t.drilling&&"on"==e.getOptions().drilling,_createLegendText:(e,i,s,n)=>{var a=new t.OutputText(e.getCtx(),s);return a.setCSSStyle(n),a=t.TextUtils.fitText(a,i,1/0,e)?a:null},_createLegendSymbol:(e,n,a,l,r,o)=>{var h=e.getOptions(),g=e.getCtx(),c=null!=r.type?r.type:r.symbolType;r.markerShape||(r.markerShape=h._markerShape),r.color||(r.color=h._color),r.lineWidth||(r.lineWidth="lineWithMarker"==c?d._DEFAULT_LINE_WIDTH_WITH_MARKER:h._lineWidth);var u,p=h.symbolWidth,_=h.symbolHeight,v=a+l/2,y=n+p/2;if("line"==c)u=d._createLine(g,n,a,p,l,r);else if("lineWithMarker"==c)u=d._createLine(g,n,a,p,l,r),s(i(r,e),e)||u.addChild(d._createMarker(e,y,v,p*d._LINE_MARKER_SIZE_FACTOR,_*d._LINE_MARKER_SIZE_FACTOR,r));else if("image"==c)u=d._createImage(e,n,a,p,_,l,r);else if("_verticalBoxPlot"==c)_=Math.max(4*Math.round(_/4),4),(u=new t.Container(g)).addChild(d._createMarker(e,y,v+_/4,p,_/2,d._getBoxPlotOptions(r,"q2"))),u.addChild(d._createMarker(e,y,v-_/4,p,_/2,d._getBoxPlotOptions(r,"q3")));else if("_horizontalBoxPlot"==c){var m=t.Agent.isRightToLeft(g),b=(p=Math.max(4*Math.round(p/4),4))/4*(m?1:-1);(u=new t.Container(g)).addChild(d._createMarker(e,y+b,v,p/2,_,d._getBoxPlotOptions(r,"q2"))),u.addChild(d._createMarker(e,y-b,v,p/2,_,d._getBoxPlotOptions(r,"q3")))}else u=d._createMarker(e,y,v,p,_,r);return u},_createImage:(e,i,s,n,a,l,r)=>{var o=e.getCtx(),h=s+l/2,g=i+n/2;return new t.ImageMarker(o,g,h,n,a,null,r.source)},_createMarker:(e,i,s,n,a,l)=>{var r,o=e.getCtx(),h=l.markerShape,g=l.symbolType&&"lineWithMarker"==l.symbolType&&l.markerColor?l.markerColor:l.color,d=l.markerStyle||l.markerSvgStyle?l.markerStyle||l.markerSvgStyle:l.style||l.svgStyle,c=l.markerClassName||l.markerSvgClassName?l.markerClassName||l.markerSvgClassName:l.className||l.svgClassName,u=l.pattern;if(u&&"none"!=u?((r=new t.SimpleMarker(o,h,0,0,n,a,null,null,!0)).setFill(new t.PatternFill(u,g,"#FFFFFF")),r.setTranslate(i,s)):(r=new t.SimpleMarker(o,h,i,s,n,a,null,null,!0)).setSolidFill(g),l.borderColor){var p=l._borderWidth?l._borderWidth:1;r.setSolidStroke(l.borderColor,null,p)}return"square"!=h&&"rectangle"!=h||r.setPixelHinting(!0),r.setClassName(c).setStyle(d),r},_createLine:(e,i,s,n,a,l)=>{var r=s+a/2;n=n%2==1?n+1:n;var o,h=new t.Line(e,i,Math.round(r),i+n,Math.round(r)),g=l.lineStyle;"dashed"==g?o={dashArray:"4,2,4"}:"dotted"==g&&(o={dashArray:"2"});var d=new t.Stroke(l.color,1,l.lineWidth,!1,o);return h.setClassName(l.className||l.svgClassName).setStyle(l.style||l.svgStyle),h.setStroke(d),h.setPixelHinting(!0),h},_getBoxPlotOptions:(e,t)=>({markerShape:"rectangle",color:e._boxPlot[t+"Color"],pattern:e._boxPlot["_"+t+"Pattern"],className:e._boxPlot[t+"ClassName"]||e._boxPlot[t+"svgClassName"],style:e._boxPlot[t+"Style"]||e._boxPlot[t+"svgStyle"]})};class c extends t.BaseComponent{constructor(e,t,i){super(e,t,i),this.setId("legend1000"+Math.floor(1e9*Math.random())),this.Defaults=new o(e),this.EventManager=new h(this),this.EventManager.addListeners(this),this._peers=[],this._navigablePeers=[],this._bounds=null,this._titles=[]}static getDefaults(e){return(new o).getDefaults(e)}SetOptions(e){super.SetOptions(e),e?(this.Options=this.Defaults.calcOptions(e),this._processData(this.Options.sections)):this.Options||(this.Options=this.GetDefaults())}getPreferredSize(e,i,s){this.SetOptions(e),this.getOptions().isLayout=!0;var n=new t.Rectangle(0,0,i,s),a=d.render(this,n);return this.getOptions().isLayout=!1,new t.Dimension(a.w,a.h)}render(e,i,s){this.getCache().clearCache(),this.SetOptions(e),isNaN(i)||isNaN(s)||(this.Width=i,this.Height=s),this.getOptions().isLayout=!1;for(var n=this.getNumChildren(),a=0;a<n;a++){this.getChildAt(a).destroy()}this.removeChildren(),this._peers=[],this._navigablePeers=[],this._bounds=null,this._titles=[],t.Agent.isTouchDevice()||this.EventManager.setKeyboardHandler(new g(this.EventManager,this)),this.UpdateAriaAttributes();var l=new t.Rectangle(0,0,this.Width,this.Height);this._contentDimensions=d.render(this,l);var r=this.getOptions().highlightedCategories;return r&&r.length>0&&this.highlight(r),this.RenderComplete(),this._contentDimensions}highlight(e){this.getOptions().highlightedCategories=e&&e.length>0?e.slice():null,t.CategoryRolloverHandler.highlight(e,this.__getObjects(),!0)}processEvent(e,i){if("categoryHighlight"==e.type&&"dim"==this.getOptions().hoverBehavior){var s=this.__getObjects();this!=i&&this.highlight(e.categories);for(var n=0;n<s.length;n++)if(t.Obj.compareValues(this.getCtx(),s[n].getId(),e.categories)){this.container.scrollIntoView(s[n].getDisplayables()[0]);break}}this==i&&this.dispatchEvent(e)}__registerObject(e){if(e.getDisplayables()[0]instanceof t.IconButton)this._navigablePeers.push(e);else{var i=this.getOptions().hideAndShowBehavior;(null!=e.getDatatip()||e.isDrillable()||"none"!=i&&"off"!=i)&&this._navigablePeers.push(e),this._peers.push(e)}}__getObjects(){return this._peers}__getKeyboardObjects(){return this._navigablePeers}__setBounds(e){this._bounds=e.clone()}__getBounds(){return this._bounds}__registerTitle(e){this._titles.push(e)}__getTitles(){return this._titles}getAutomation(){return new r(this)}getKeyboardFocus(){return null!=this.EventManager?this.EventManager.getFocus():null}setKeyboardFocus(e,i){if(null!=this.EventManager){for(var s=this.__getKeyboardObjects(),n=0;n<s.length;n++)if(t.Obj.compareValues(this.getCtx(),s[n].getId(),e.getId())){this.EventManager.setFocusObj(s[n]),i&&s[n].showKeyboardFocusEffect();break}var a=this.getKeyboardFocus();if(a){var l=a.getDisplayables()[0];l.setAriaProperty("label",a.getAriaLabel()),this.getCtx().setActiveElement(l)}}}getDimensions(e){var i=new t.Rectangle(0,0,this.Width,this.Height);return e&&e!==this?this.ConvertCoordSpaceRect(i,e):i}_processData(e){let t=!1,s=!1;if(e&&!(e.length<=0)){for(var n=this.getOptions().hiddenCategories,a=0;a<e.length;a++){var l=e[a];t=t||"on"===l.collapsible,l.sections&&this._processData(l.sections);var r=l.items;if(r&&!(r.length<=0))for(var o=0;o<r.length;o++){var h=r[o];s=s||"on"===h.drilling;var g=i(h,this);"hidden"==h.categoryVisibility&&n.indexOf(g)<0&&n.push(g),h.categoryVisibility=null}}this.getCache().putToCache("hasCollapsible",t),this.getCache().putToCache("hasDrillableItem",s)}}UpdateAriaAttributes(){if(this.IsParentRoot()){var e=this.getOptions(),i=e.translations,s=e.hideAndShowBehavior;const n="on"===e.drilling||this.getCache().getFromCache("hasDrillableItem"),a=this.getCache().getFromCache("hasCollapsible");("off"!=s&&"none"!=s||"dim"==e.hoverBehavior||a||n)&&(this.getCtx().setAriaRole("application"),this.getCtx().setAriaLabel(t.ResourceUtils.format(i.labelAndValue,[i.labelDataVisualization,t.AriaUtils.processAriaLabel(this.GetComponentDescription())])))}}isNavigable(){return this._navigablePeers.length>0}static getSectionItemsCount(e){var t=0;if(e.items&&(t+=e.items.length),e.sections)for(var i=e.sections,s=0;s<i.length;s++)t+=c.getSectionItemsCount(i[s]);return t}}e.Legend=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojlegend-toolkit.js.map