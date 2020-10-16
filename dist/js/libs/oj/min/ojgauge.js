/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojconfig","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtGauge","ojs/ojlogger","ojs/ojconverterutils-i18n","ojs/ojconverter-number","ojs/ojlabelledbyutils","ojs/ojvalidation-number"],(function(e,t,r,n,s,a,o,i,l,u){"use strict";var p={properties:{borderColor:{type:"string"},color:{type:"string"},label:{type:"object",properties:{style:{type:"object",value:{}},text:{type:"string",value:""}}},max:{type:"number",value:100},metricLabel:{type:"object",properties:{converter:{type:"object"},rendered:{type:"string",enumValues:["off","on"],value:"off"},scaling:{type:"string",enumValues:["auto","billion","million","none","quadrillion","thousand","trillion"],value:"auto"},style:{type:"object",value:{}},text:{type:"string",value:""},textType:{type:"string",enumValues:["number","percent"],value:"number"}}},min:{type:"number",value:0},rotation:{type:"number",enumValues:["0","180","270","90"],value:0},size:{type:"number",value:1},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},thresholds:{type:"Array<Object>",value:[]},tooltip:{type:"object",properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},type:{type:"string",value:"circle"},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["auto","none"],value:"auto"}},methods:{getMetricLabel:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}},g={properties:{changed:{type:"boolean",writeback:!0,value:!1},changedState:{type:"object",properties:{borderColor:{type:"string",value:""},color:{type:"string"},shape:{type:"string",value:"star"},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},hoverState:{type:"object",properties:{borderColor:{type:"string",value:""},color:{type:"string"},shape:{type:"string",value:"star"},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},labelledBy:{type:"string"},max:{type:"number",value:5},min:{type:"number",value:0},orientation:{type:"string",enumValues:["horizontal","vertical"],value:"horizontal"},preserveAspectRatio:{type:"string",enumValues:["meet","none"],value:"meet"},readonly:{type:"boolean",value:!1},selectedState:{type:"object",properties:{borderColor:{type:"string",value:""},color:{type:"string"},shape:{type:"string",value:"star"},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},step:{type:"number",value:1},thresholds:{type:"Array<Object>",value:[]},tooltip:{type:"object",properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},transientValue:{type:"number",writeback:!0,readOnly:!0},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},unselectedState:{type:"object",properties:{borderColor:{type:"string",value:""},color:{type:"string"},shape:{type:"string",value:"star"},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["auto","none"],value:"auto"}},methods:{refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}},d={properties:{angleExtent:{type:"number",value:360},animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},borderColor:{type:"string"},borderRadius:{type:"string",value:"auto"},center:{type:"object",properties:{renderer:{type:"function"}}},color:{type:"string"},describedBy:{type:"string"},indicatorSize:{type:"number",value:1},innerRadius:{type:"number",value:.7},label:{type:"object",properties:{position:{type:"string",enumValues:["auto","center","start"],value:"auto"},style:{type:"object",value:{}},text:{type:"string",value:""}}},labelledBy:{type:"string"},max:{type:"number",value:100},metricLabel:{type:"object",properties:{converter:{type:"object"},position:{type:"string",enumValues:["auto","center","insideIndicatorEdge","outsideIndicatorEdge","outsidePlotArea","withLabel"],value:"auto"},rendered:{type:"string",enumValues:["auto","off","on"],value:"auto"},scaling:{type:"string",enumValues:["auto","billion","million","none","quadrillion","thousand","trillion"],value:"auto"},style:{type:"object",value:{}},text:{type:"string",value:""},textType:{type:"string",enumValues:["number","percent"],value:"number"}}},min:{type:"number",value:0},orientation:{type:"string",enumValues:["circular","horizontal","vertical"],value:"horizontal"},plotArea:{type:"object",properties:{borderColor:{type:"string"},borderRadius:{type:"string",value:"auto"},color:{type:"string"},rendered:{type:"string",enumValues:["auto","off","on"],value:"auto"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},readonly:{type:"boolean",value:!1},referenceLines:{type:"Array<Object>",value:[]},startAngle:{type:"number",value:90},step:{type:"number"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},thresholdDisplay:{type:"string",enumValues:["all","currentOnly","onIndicator"],value:"onIndicator"},thresholds:{type:"Array<Object>",value:[]},tooltip:{type:"object",properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},transientValue:{type:"number",writeback:!0,readOnly:!0},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["auto","none"],value:"auto"}},methods:{getMetricLabel:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};e.__registerWidget("oj.dvtBaseGauge",t.oj.dvtBaseComponent,{_labelledByUpdatedForSet:u._labelledByUpdatedForSet,_describedByUpdated:u._describedByUpdated,_ComponentCreate:function(){this._super(),this._SetLocaleHelpers(l,i)},_ProcessStyles:function(){this._super(),this.options._thresholdColors=[this.options._threshold1,this.options._threshold2,this.options._threshold3],this.options._threshold1=null,this.options._threshold2=null,this.options._threshold3=null},_AfterCreate:function(){this._super();var e={_context:{writeback:!0,internalSet:!0,readOnly:!0}};if(this.option("rawValue",this.options.value,e),this._SupportsOjLabel()){var t=this.options.labelledBy;this._labelledByUpdatedForSet(this.element[0].id,null,t,this.element)}},_GetContentElement:function(){return this.element},_GetChildStyleClasses:function(){var e=this._super();return e["oj-gauge-metric-label"]={path:"metricLabel/style",property:"TEXT"},e["oj-gauge-label"]={path:"label/style",property:"TEXT"},e["oj-gauge-threshold1"]={path:"_threshold1",property:"color"},e["oj-gauge-threshold2"]={path:"_threshold2",property:"color"},e["oj-gauge-threshold3"]={path:"_threshold3",property:"color"},e},_GetEventTypes:function(){return["input","optionChange"]},_HandleEvent:function(e){if("valueChange"===e.type){var t=e.newValue;e.complete?this._UserOptionChange("value",t):(this._trigger("input",null,{value:t}),this._UserOptionChange("rawValue",t))}else this._super(e)},_SupportsOjLabel:function(){return!1},_setOption:function(e,t,r){var n=this.options[e];if("rawValue"!==e){if("value"===e){var s={_context:{writeback:!0,internalSet:!0,readOnly:!0}};this.option("rawValue",t,s)}var a;if(this._SupportsOjLabel())"labelledBy"===e&&(a=this.element,this._labelledByUpdatedForSet(a[0].id,n,t,a)),"describedBy"===e&&this._describedByUpdated(n,t);this._super(e,t,r)}else o.error("'rawValue' is a read-only option and cannot be set")},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-dialgauge-tooltip"!==t&&"oj-ledgauge-tooltip"!==t&&"oj-ratinggauge-tooltip"!==t&&"oj-statusmetergauge-tooltip"!==t||(t="tooltip"),"oj-ratinggauge-item"===t&&null!=e.index&&(t="item["+e.index+"]"),t}},!0),e.__registerWidget("oj.ojDialGauge",t.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{rawValue:void 0},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),a.DialGauge.newInstance(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"===e&&(t.subId="oj-dialgauge-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-dialgauge"),e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._setImages(),this._super()},_setImages:function(){var e=this.options.background;null==e&&(e="circleAlta",this.options.background="circleAlta");var t=this.options.indicator;if(null==t&&(t="needleAlta",this.options.indicator="needleAlta"),"string"==typeof e){var n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"),width:200,height:200},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"),width:400,height:400}];"rectangleAlta"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"),width:200,height:154},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"),width:400,height:309}]:"domeAlta"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"),width:200,height:154},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"),width:400,height:309}]:"circleAntique"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"),width:200,height:200},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"),width:400,height:400}]:"rectangleAntique"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"),width:200,height:168},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"),width:400,height:335}]:"domeAntique"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"),width:200,height:176},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"),width:400,height:352}]:"circleLight"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/light-circle-200x200.png"),width:200,height:200},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/light-circle-400x400.png"),width:400,height:400}]:"rectangleLight"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"),width:200,height:154},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"),width:400,height:307}]:"domeLight"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/light-dome-200x200.png"),width:200,height:138},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/light-dome-400x400.png"),width:400,height:276}]:"circleDark"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"),width:200,height:200},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"),width:400,height:400}]:"rectangleDark"===e?n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"),width:200,height:154},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"),width:400,height:307}]:"domeDark"===e&&(n=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"),width:200,height:138},{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"),width:400,height:276}]),this.options._backgroundImages=n}if("string"==typeof t){var s=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"),width:374,height:575}];"needleAntique"===t?s=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"),width:81,height:734}]:"needleDark"===t?s=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"),width:454,height:652}]:"needleLight"===t&&(s=[{src:r.getResourceUrl("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"),width:454,height:652}]),this.options._indicatorImages=s}},getMetricLabel:function(){return this._component.getAutomation().getMetricLabel()}}),e.__registerWidget("oj.ojLedGauge",t.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{borderColor:"",color:"#393737",label:{style:{},text:""},metricLabel:{converter:null,rendered:"off",scaling:"auto",style:{},text:"",textType:"number"},max:100,min:0,rotation:0,size:1,svgClassName:"",svgStyle:{},thresholds:[],tooltip:{renderer:null},type:"circle",value:null,visualEffects:"auto"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),a.LedGauge.newInstance(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"===e&&(t.subId="oj-ledgauge-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-ledgauge"),e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},getMetricLabel:function(){return this._component.getAutomation().getMetricLabel()}}),e.__registerWidget("oj.ojRatingGauge",t.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{changed:!1,changedState:{borderColor:"",color:"",shape:"star",source:"",svgClassName:"",svgStyle:{}},hoverState:{borderColor:"",color:"",shape:"star",source:"",svgClassName:"",svgStyle:{}},labelledBy:null,describedBy:null,max:5,min:0,orientation:"horizontal",preserveAspectRatio:"meet",rawValue:null,readonly:!1,disabled:!1,selectedState:{borderColor:"",color:"",shape:"star",source:"",svgClassName:"",svgStyle:{}},step:1,thresholds:[],tooltip:{renderer:null},unselectedState:{borderColor:"",color:"",shape:"star",source:"",svgClassName:"",svgStyle:{}},value:null,visualEffects:"auto"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),a.RatingGauge.newInstance(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"===e?t.subId="oj-ratinggauge-tooltip":0===e.indexOf("item")&&(t.subId="oj-ratinggauge-item",t.index=this._GetFirstIndex(e)),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-ratinggauge"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-rating-gauge-hover"]=[{path:"hoverState/color",property:"fill"},{path:"hoverState/borderColor",property:"stroke"}],e["oj-rating-gauge-selected"]=[{path:"selectedState/color",property:"fill"},{path:"selectedState/borderColor",property:"stroke"}],e["oj-rating-gauge-unselected"]=[{path:"unselectedState/color",property:"fill"},{path:"unselectedState/borderColor",property:"stroke"}],e["oj-rating-gauge-changed"]=[{path:"changedState/color",property:"fill"},{path:"changedState/borderColor",property:"stroke"}],e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},_SupportsOjLabel:function(){return this._IsCustomElement()},_UserOptionChange:function(e,t){this._superApply(arguments),"value"===e&&this._UserOptionChange("changed",!0)}}),e.__registerWidget("oj.ojStatusMeterGauge",t.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{angleExtent:360,animationOnDataChange:"none",animationOnDisplay:"none",animationDuration:void 0,borderColor:"",borderRadius:"auto",center:{renderer:null},color:"#393737",indicatorSize:1,innerRadius:.7,label:{position:"auto",style:{},text:""},labelledBy:null,describedBy:null,max:100,metricLabel:{converter:null,position:"auto",rendered:"auto",scaling:"auto",style:{},text:"",textType:"number"},min:0,orientation:"horizontal",plotArea:{borderColor:void 0,borderRadius:"auto",color:void 0,rendered:"auto",svgClassName:"",svgStyle:{}},rawValue:null,readonly:!1,referenceLines:[],startAngle:90,step:null,svgClassName:"",svgStyle:{},tooltip:{renderer:null},thresholdDisplay:"onIndicator",thresholds:[],value:null,visualEffects:"auto"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),a.StatusMeterGauge.newInstance(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"===e&&(t.subId="oj-statusmetergauge-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-statusmetergauge"),e},_GetComponentRendererOptions:function(){return[{path:"tooltip/renderer",slot:"tooltipTemplate"},{path:"center/renderer",slot:"centerTemplate"}]},_SupportsOjLabel:function(){return this._IsCustomElement()},_ProcessOptions:function(){this._super();var e=this.options.center;e&&e._renderer&&(e.renderer=this._GetTemplateRenderer(e._renderer,"center"))},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-statusmetergauge"]={path:"animationDuration",property:"ANIM_DUR"},e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},getMetricLabel:function(){return this._component.getAutomation().getMetricLabel()}}),function(){p.extension._WIDGET_NAME="ojLedGauge";e.CustomElementBridge.register("oj-led-gauge",{metadata:p,parseFunction:s.shapeParseFunction({type:!0},{arrow:!0,square:!0,rectangle:!0,circle:!0,diamond:!0,triangle:!0,human:!0,star:!0})})}(),function(){g.extension._WIDGET_NAME="ojRatingGauge",g.extension._ALIASED_PROPS={transientValue:"rawValue"};var t=/\d/,r={circle:!0,square:!0,diamond:!0,triangle:!0,human:!0,star:!0},n={circle:!0,square:!0,diamond:!0,triangle:!0,human:!0,star:!0,dot:!0,none:!0},s={"changed-state.shape":!0,"hover-state.shape":!0,"selected-state.shape":!0,"unselected-state.shape":!0};e.CustomElementBridge.register("oj-rating-gauge",{metadata:g,parseFunction:function(e,a,o,i){if(s[a]||"unselected-state.shape"===a){if(t.test(e))return e;if(s[a]&&!r[a])throw new Error("Found: "+e+". Expected: "+r.toString());if("unselected-state.shape"!==a||n[a])return e;throw new Error("Found: "+e+". Expected: "+n.toString())}return i(e)}})}(),d.extension._WIDGET_NAME="ojStatusMeterGauge",d.extension._ALIASED_PROPS={transientValue:"rawValue"},e.CustomElementBridge.register("oj-status-meter-gauge",{metadata:d})}));