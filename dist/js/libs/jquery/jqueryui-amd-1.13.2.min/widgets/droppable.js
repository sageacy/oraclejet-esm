/*!
 * jQuery UI Droppable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./draggable","./mouse","../version","../widget"],e):"object"==typeof module&&module.exports?(require("./draggable"),require("./mouse"),require("../version"),require("../widget"),module.exports=e(require("jquery"))):e(jQuery)}((function(e){"use strict";return e.widget("ui.droppable",{version:"1.13.2",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept="function"==typeof i?i:function(e){return e.is(i)},this.proportions=function(){if(!arguments.length)return e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});e=arguments[0]},this._addToManager(t.scope),t.addClasses&&this._addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;t<e.length;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t)},_setOption:function(t,i){if("accept"===t)this.accept="function"==typeof i?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,o=!1;return!(!s||(s.currentItem||s.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function(){var i=e(this).droppable("instance");if(i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t))return o=!0,!1})),!o&&(!!this.accept.call(this.element[0],s.currentItem||s.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",t,this.ui(s)),this.element)))},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&e<t+i}return function(t,i,s,o){if(!i.offset)return!1;var r=(t.positionAbs||t.position.absolute).left+t.margins.left,n=(t.positionAbs||t.position.absolute).top+t.margins.top,a=r+t.helperProportions.width,l=n+t.helperProportions.height,p=i.offset.left,u=i.offset.top,d=p+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return p<=r&&a<=d&&u<=n&&l<=c;case"intersect":return p<r+t.helperProportions.width/2&&a-t.helperProportions.width/2<d&&u<n+t.helperProportions.height/2&&l-t.helperProportions.height/2<c;case"pointer":return e(o.pageY,u,i.proportions().height)&&e(o.pageX,p,i.proportions().width);case"touch":return(n>=u&&n<=c||l>=u&&l<=c||n<u&&l>c)&&(r>=p&&r<=d||a>=p&&a<=d||r<p&&a>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,i){var s,o,r=e.ui.ddmanager.droppables[t.options.scope]||[],n=i?i.type:null,a=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;s<r.length;s++)if(!(r[s].options.disabled||t&&!r[s].accept.call(r[s].element[0],t.currentItem||t.element))){for(o=0;o<a.length;o++)if(a[o]===r[s].element[0]){r[s].proportions().height=0;continue e}r[s].visible="none"!==r[s].element.css("display"),r[s].visible&&("mousedown"===n&&r[s]._activate.call(r[s],i),r[s].offset=r[s].element.offset(),r[s].proportions({width:r[s].element[0].offsetWidth,height:r[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),(function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))})),s},dragStart:function(t,i){t.element.parentsUntil("body").on("scroll.droppable",(function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}))},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],(function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,o,r,n=e.ui.intersect(t,this,this.options.tolerance,i),a=!n&&this.isover?"isout":n&&!this.isover?"isover":null;a&&(this.options.greedy&&(o=this.options.scope,(r=this.element.parents(":data(ui-droppable)").filter((function(){return e(this).droppable("instance").options.scope===o}))).length&&((s=e(r[0]).droppable("instance")).greedyChild="isover"===a)),s&&"isover"===a&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[a]=!0,this["isout"===a?"isover":"isout"]=!1,this["isover"===a?"_over":"_out"].call(this,i),s&&"isout"===a&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}}))},dragStop:function(t,i){t.element.parentsUntil("body").off("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},!1!==e.uiBackCompat&&e.widget("ui.droppable",e.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),e.ui.droppable}));