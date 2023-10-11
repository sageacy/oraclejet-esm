/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojdvt-toolkit","ojs/ojcontext","ojs/ojconfig","ojs/ojmap","ojs/ojlocaledata","ojs/ojcomponentcore","jquery","ojs/ojkeysetimpl","ojs/ojdomutils","ojs/ojattributegrouphandler","ojs/ojlogger","ojs/ojcustomelement","ojs/ojcustomelement-utils","ojs/ojmetadatautils","ojdnd"],function(e,t,n,r,i,s,o,a,l,h,c,d,p,u,_,f){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l;const m=function(e,t){this._path=t,this._root=e,this._delimiter="/"};m.prototype._resolveLeafObjectAndProperty=function(e,t,n,r){for(var i={};e&&t.indexOf(n)>-1;){var s=t.substring(0,t.indexOf(n));r&&void 0===e[s]&&(e[s]={}),e=e[s],t=t.substring(t.indexOf(n)+1,t.length)}return e&&(i.object=e,i.parameter=t),i},m.prototype._resolvePath=function(e){if(void 0===this._leaf){var t=this._resolveLeafObjectAndProperty(this._root,this._path,this._delimiter,e);this._leaf=t.object,this._param=t.parameter}},m.prototype.getValue=function(){return this._resolvePath(!1),void 0===this._leaf?void 0:this._leaf[this._param]},m.prototype.setValue=function(e,t){this._resolvePath(!0),!t&&this._leaf[this._param]||(this._leaf[this._param]=e)};const v=function(e){this._styleCache={},this._context=e,this._letterSpacing=null,this._wordSpacing=null,this._fontVariantNumeric=null};v._FONT_WEIGHT="font-weight",v.styleTypes={TEXT:function(e){var t={};return e&&(e.hasClass("oj-gauge-metric-label")?(t["font-size"]=!0,t.color=!0):e.hasClass("oj-treemap-node-header")?t[v._FONT_WEIGHT]=!0:e.hasClass("oj-legend-title")&&(t[v._FONT_FAMILY]=!0)),v._buildTextCssPropertiesObject(e,t)},BACKGROUND:function(e,t,n,r){return v._buildCssBackgroundPropertiesObject(e)},ANIM_DUR:function(e){var t=e.css("animation-duration");if(t)return"ms"===t.slice(-2)?t=parseInt(t.slice(0,-2),10):"s"===t.slice(-1)&&(t=1e3*parseFloat(t.slice(0,-1))),t}},v._INHERITED_FONT_COLOR="rgb(254, 0, 254)",v._INHERITED_FONT_FAMILY="Times",v._INHERITED_FONT_SIZE="1px",v._INHERITED_FONT_WEIGHT="1",v._INHERITED_FONT_STYLE="normal",v._FONT_SIZE_BUFFER=4,v.defaultStyleProcessor=function(e,t){return e.css(t)},v._buildCssBackgroundPropertiesObject=function(e){var t={};return e.css("border-top-color")&&(t.borderColor=e.css("border-top-color")),e.css("border-width")&&e.css("border-style")&&"none"!==e.css("border-style")&&(t.borderWidth=e.css("border-width")),e.css("background-color")&&(t.backgroundColor=e.css("background-color")),t},v._buildTextCssPropertiesObject=function(e,t){var n={},r=e.css("font-family");return r&&r!==v._INHERITED_FONT_FAMILY&&(n.fontFamily=r.replace(/"/g,"'")),!(r=e.css("font-size"))||r.indexOf("px")>-1&&parseFloat(r)<v._FONT_SIZE_BUFFER||t["font-size"]||(n.fontSize=r),(r=e.css(v._FONT_WEIGHT))&&r!==v._INHERITED_FONT_WEIGHT&&!t[v._FONT_WEIGHT]&&(n.fontWeight=r),(r=e.css("color"))&&r!==v._INHERITED_FONT_COLOR&&!t.color&&(n.color=r),(r=e.css("font-style"))&&r!==v._INHERITED_FONT_STYLE&&(n.fontStyle=r),n},v.prototype.processStyles=function(e,t,n,r){var i,s=null,o=null,l=e.data("no-style-cache"),h="";for(i=0;i<n.length;i++)h=h+n[i]+" ";var c,d={},p={},u=Object.keys(r);for(i=0;i<u.length;i++){var _=r[c=u[i]];_ instanceof Array||(_=[_]);var f=this._hasUncachedProperty(c,_)||l;o||s||!f||((s=a(document.createElement("div"))).css("display","none"),e.append(s),s.attr("class",h),(o=a(document.createElement("div"))).css("font-size",v._INHERITED_FONT_SIZE),o.css("color",v._INHERITED_FONT_COLOR),o.css(v._FONT_WEIGHT,v._INHERITED_FONT_WEIGHT),o.css("font-style",v._INHERITED_FONT_STYLE),s.append(o)),d[c]=_,f&&(p[c]=this._createStyleDivs(o,c,_))}if(!this._letterSpacing||!this._wordSpacing||!this._fontVariantNumeric){var m=window.getComputedStyle(e[0]);this._context.letterSpacing=m.letterSpacing,this._context.wordSpacing=m.wordSpacing,this._context.fontVariantNumeric=m.fontVariantNumeric,this._letterSpacing=m.letterSpacing,this._wordSpacing=m.wordSpacing,this._fontVariantNumeric=m.fontVariantNumeric}for(i=0;i<u.length;i++)c=u[i],this._processStyle(p[c],t,c,d[c],l);s&&s.remove()},v.prototype._createStyleDivs=function(e,t,n){this._styleCache[t]||(this._styleCache[t]={});for(var r=null,i=0;i<n.length;i++){var s=n[i].property;if(s)void 0===this._styleCache[t][s]&&(r||("oj-dvt-color-ramp"===t?r=c.ColorAttributeGroupHandler.__createAttrDiv():(r=a(document.createElement("div"))).addClass(t),e.append(r)))}return r},v.prototype._processStyle=function(e,t,n,r,i){for(var s=0;s<r.length;s++){var o=r[s],a=o.property;if(a){var l=this._styleCache[n][a];if(void 0===l&&e&&(l="oj-dvt-color-ramp"===n?c.ColorAttributeGroupHandler.__processAttrDiv(e):v._resolveStyle(e,a),i||(this._styleCache[n][a]=l)),null!=l){var h=o.path,d=new m(t,h),p=d.getValue(),u="object"==typeof p&&!Array.isArray(p);if(u&&p)for(var _=Object.keys(l),f=0;f<_.length;f++){var y=_[f];void 0===p[y]&&(p[y]=l[y])}else d.setValue(l,u)}}}},v._resolveStyle=function(e,t){var n=v.styleTypes[t],r=n?n(e):v.defaultStyleProcessor(e,t);return null==r||"string"==typeof r&&""===r.replace(/^\s+/g,"")?null:r},v.prototype._hasUncachedProperty=function(e,t){var n=this._styleCache[e];if(!n)return!0;for(var r=0;r<t.length;r++){var i=t[r].property;if(i)if(void 0===n[i])return!0}return!1},v.populateOptions=function(e,t){for(var n,r=Object.keys(t),i=0;i<r.length;i++){var s=t[r[i]];s instanceof Array||(s=[s]);for(var o=0;o<s.length;o++){var a=(n=s[o]).path,l="TEXT"===n.property||"BACKGROUND"===n.property;if(l||a.indexOf("/")>-1)l||(a=a.substring(0,a.lastIndexOf("/"))),new m(e,a).setValue({})}}},v.prototype.clearCache=function(e){this._styleCache[e]=void 0};const y=function(e,t){this._component=e,this._configMap=t,this._init()};e.Object.createSubclass(y,e.Object,"DataProviderHandler"),y.prototype._init=function(){this._dataProviderEventListeners={},this._keyDataMap={},this._fetchedData={},this._eventListeners=[]},y.prototype._fetchCollection=function(e,t,n,r,i,s){var o=this,a={data:[],keys:[]};if(s<=-1)return Promise.resolve(a);this._clientId=this._clientId||Symbol();var l={clientId:this._clientId,size:-1},h=e.fetchFirst(l)[Symbol.asyncIterator](),c=this.isTreeDataProvider(e),d=function(e){for(var s=[],l=0;l<e.value.data.length;l++){var p=t({data:e.value.data[l],key:e.value.metadata[l].key},i);s.push(p)}return Promise.all(s).then(function(e){for(var t=0;t<e.length;t++){var s=e[t].data,l=e[t].key;a.data.push(s),a.keys.push(l),o._keyDataMap[n].set(c?l.value:l,{data:s,key:l,parentKey:r,depth:i})}}).then(function(){return e.done?Promise.resolve(a):h.next().then(d)})};return h.next().then(d)},y.prototype._getDPPostProcessor=function(e,t,n,r){var i=this,s=this.isTreeDataProvider(e);r=null==r?Number.MAX_VALUE:r;var o=function(s,a){var l={value:s.data},h={value:s.key};if(a<r&&n&&n.has(h.value)){var c=e.getChildDataProvider(h.value);if(c)return i._fetchCollection(c,o,t,h.value,a+1).then(function(e){return l.children=e.data,h.children=e.keys,{data:l,key:h}})}return Promise.resolve({data:l,key:h})};return s?o:function(e){return Promise.resolve(e)}},y.prototype.fetchAllData=function(e,t,n){if(n&&this._fetchedData[t])return Promise.resolve(this._fetchedData[t]);var r=this._configMap[t];return this.clear(t,!0),this._fetchCollection(e,this._getDPPostProcessor(e,t,r.expandedKeySet,r.maxFetchDepth),t,null,0,r.maxFetchDepth).then(function(r){return n&&(this._fetchedData[t]=r,this._addDPEventListeners(e,t)),r}.bind(this))},y.prototype._getDataProviderEventHandler=function(e){var t=this,n=function(e,t,n){if(!t)return[];var r=new l(t),i=new Map,s=function(e){for(var t=0;t<e.length;t++){var o=n?e[t].value:e[t],a=r.get(o);a!==r.NOT_A_KEY&&i.set(a,t),n&&e[t].children&&s(e[t].children)}};s(e.keys);var o=[];return t.forEach(function(e){o.push(i.get(e))}),o},r=function(n){var r=t._component._GetThrottlePromise();Promise.all([n,r]).then(function(n){t._fireEvent("clearState",{dataProperty:e}),t._fetchedData[e]=n[0],t._fireEvent("dataUpdated",{data:n[0]})})};return function(i){t._fireEvent("notReady",{event:i});var s=this,o=t.isTreeDataProvider(s),a=t._keyDataMap[e];if("refresh"===i.type)r(t.fetchAllData(s,e));else if("mutate"===i.type){var h=i.detail.update,c=i.detail.remove,d=i.detail.add,p=t._fetchedData[e];if(c){var u=c.keys;if(d){var _=new l(d.keys);u=new Set([...u].filter(e=>!_.has(e)))}t._fireEvent("removeKeys",{keys:u})}var f,m=function(n,r,i,l){var h=0,c=[],d=1===i&&!l;return r.keys.forEach(function(n){var i,p=l?null:r.data[h];if(o)if(d){var u=a.get(n);u&&(u.data.value=p,i=Promise.resolve({data:u.data,key:a.get(n).key}))}else{var _={value:p},f={value:n},m=s.getChildDataProvider(n);if(m&&!l)i=t.fetchAllData(m,e).then(function(e){return _.children=e.data,f.children=e.keys,{data:_,key:f}});else i=Promise.resolve({data:_,key:f});if(!l){var v=r.parentKeys?r.parentKeys[h]:null;a.set(f.value,{data:_,key:f,parentKey:v})}}else i=Promise.resolve({data:p,key:n}),a.set(n,{data:p,key:n});c.push(i),h+=1}),Promise.all(c).then(function(e){for(var t=0;t<e.length;t++){var r,s,h,c=o?e[t].key.value:e[t].key,u=a.get(c).parentKey;if(u){var _=a.get(u);_.data.children||d||(_.data.children=[],_.key.children=[]),r=_.data.children,s=_.key.children}else r=p.data,s=p.keys;if(l)h=n[t]-t,r.splice(h,i),s.splice(h,i);else{if(d)h=n[t];else h=0===n.length||null==n[t]?r.length:n[t];r.splice(h,i,e[t].data),s.splice(h,i,e[t].key)}}return p})},v=function(e){return s.fetchByKeys({keys:e}).then(function(t){var n=[];return t.results.size>0&&e.forEach(function(e){n.push(t.results.get(e).data)}),n})},y=Promise.resolve();h&&(f=h.indexes||n(p,h.keys,o),y=Array.isArray(h.data)?m(f,h,1):v(h.keys).then(function(e){var t=Object.create(h,{data:{value:e}});return m(f,t,1)})),y.then(function(){return c?(f=c.indexes||n(p,c.keys,o),m(f,c,1,!0)):Promise.resolve()}).then(function(){return d?(f=d.indexes||n(p,d.addBeforeKeys?d.addBeforeKeys:d.afterKeys,o),Array.isArray(d.data)?m(f,d,0):v(d.keys).then(function(e){var t=Object.create(d,{data:{value:e}});return m(f,t,0)})):Promise.resolve()}).then(function(){r(Promise.resolve(p))})}}},y.prototype._addDPEventListeners=function(e,t){if(!this._dataProviderEventListeners[t]){var n=this._getDataProviderEventHandler(t);e.addEventListener("mutate",n),e.addEventListener("refresh",n),this._dataProviderEventListeners[t]={dataProvider:e,listener:n}}},y.prototype.release=function(e){var t=function(e){var t=this._dataProviderEventListeners[e];if(t){var n=t.dataProvider,r=t.listener;n.removeEventListener("mutate",r),n.removeEventListener("refresh",r),this._dataProviderEventListeners[e]=null}}.bind(this);if(e)t(e),this.clear(e);else{for(var n=Object.keys(this._dataProviderEventListeners),r=0;r<n.length;r++)t(n[r]);this.clear()}},y.prototype.fetchChildrenData=function(e,t,n,r){var i=function(t,n,r){this._keyDataMap[e].get(t).data.children=n,this._keyDataMap[e].get(t).key.children=r}.bind(this),s=t.getChildDataProvider(n);if(s){var o=this._configMap[e].maxFetchDepth,a=this._keyDataMap[e].get(n).depth,l=this._getDPPostProcessor(t,e,r,o);return this._fetchCollection(s,l,e,n,a,o).then(function(e){return i(n,e.data,e.keys),e})}return Promise.resolve({data:[],keys:[]})},y.prototype.clear=function(e,t){e&&t?(this._keyDataMap[e]=this._keyDataMap[e]||new i,this._fireEvent("reset",{dataProperty:e})):e?this._fetchedData[e]=null:(this._fetchedData={},this._keyDataMap={})},y.prototype.isDataProvider=function(t){return e.DataProviderFeatureChecker.isDataProvider(t)},y.prototype.isTreeDataProvider=function(t){return e.DataProviderFeatureChecker.isTreeDataProvider(t)},y.prototype.addEventListener=function(e){this._eventListeners.push(e)},y.prototype._fireEvent=function(e,t){for(var n=0;n<this._eventListeners.length;n++)this._eventListeners[n]({type:e,detail:t})};const g=function(e,t,n){this._component=e,this._configMap=t,this._useObjectAssign=n,this._init()};e.Object.createSubclass(g,e.Object,"TemplateHandler"),g.prototype._init=function(){this._templateEnginePromise=null,this._templates=this.getTemplates(),this._templateResults={},this._templateNodeData={},this._componentResults={},this._eventListeners=[],this._queueNextEvent=!0,this._eventUpdates=[],this._templatePropertyMap={},this._propertyValidatorMap={}},g.prototype.getTemplateEngine=function(){return this._templateEnginePromise||(this._templateEnginePromise=new Promise(e=>{const t={customElement:this._component._GetCustomElement(),needsTrackableProperties:this._component._NeedsTrackableProperties};r.__getTemplateEngine(t).then(function(t){e(t)},function(e){throw new Error("Error loading template engine: "+e)})})),this._templateEnginePromise},g.prototype.getDataSet=function(e){var t=this.getTemplate(e);return t&&t.dataset},g.prototype.getTemplate=function(e){return this._templates[e]&&this._templates[e][0]},g.prototype.getDataSetBoolean=function(e,t){var n=this.getDataSet(e),r=u.AttributeUtils.attributeToPropertyName(t),i=n&&n[r];return null!=i&&u.AttributeUtils.coerceBooleanValue(this.getTemplate(e),t,i,"Boolean")},g.prototype.getTemplates=function(){return u.CustomElementUtils.getSlotMap(this._component.element[0])},g.prototype._getPropertyValidator=function(t,n){if(!t)return null;var r=this._propertyValidatorMap[n];if(r)return r;var i=e.CustomElementBridge.getMetadata(n),s=t.content?t.content.children[0]:t.childNodes[1],o={};return r=function(n,r){var a=n.join("."),l=o[a];if(!l){l=i;for(var h=0;h<n.length;h++)l=l.properties[n[h]];o[a]=l}try{_.checkEnumValues(s,a,r,l)}catch(e){throw new u.JetElementError(t,e.message)}null!=r&&e.BaseCustomElementBridge.checkType(s,a,r,l)},this._propertyValidatorMap[n]=r,r},g.prototype._processAliasedPropertyNames=function(e,t,n){var r=this._configMap[e].getAliasedPropertyNames;if(r)for(var i=r(t),s=Object.keys(i),o=0;o<s.length;o++){var a=s[o];n[i[a]]=n[a],n[a]=void 0}return n},g.prototype._getTemplateElementProperties=function(e){var t=this._templatePropertyMap[e];return t||(t=this._component.getElementPropertyNames(e),this._templatePropertyMap[e]=t),t},g.prototype.processNodeTemplate=function(t,n,r,s,o,a,l){var h=r.getAttribute("slot"),c=this._component.options.as,d=this._component.element[0],p=this._getTemplateElementProperties(s),u=this._getPropertyValidator(r,s),_=l?t:h,f=function(n){return function(r){var i=this._processAliasedPropertyNames(t,s,r),o=this._templateNodeData[_];e.CollectionUtils.copyInto(o.get(n).data,i),this._eventUpdates.push({key:a,data:i}),this._queueNextEvent&&(this._fireEvent("notReady"),this._component._GetThrottlePromise().then(function(){this._fireEvent("dataUpdated",{dataProperty:t,templateName:h,data:this._eventUpdates.slice(0)}),this._queueNextEvent=!0,this._eventUpdates=[]}.bind(this))),this._queueNextEvent=!1}.bind(this)}.bind(this),m=n.resolveProperties(d,r,s,p,o,c,u);m.subscribe(f(a));var v={data:this._processAliasedPropertyNames(t,s,m.peek()),node:m,context:o};return this._templateNodeData[_]||(this._templateNodeData[_]=new i),this._templateNodeData[_].set(a,v),v.data},g.prototype.processTemplates=function(e,t,n,r,i,s,o){if(s&&this._templateResults[e])return this._templateResults[e];var a,l,h=this._configMap[e],c=this;if(h){a=[],l=[];var p="string"==typeof h.templateName?function(){return h.templateName}:h.templateName,u="string"==typeof h.templateElementName?function(){return h.templateElementName}:h.templateElementName,_=h.resultPath,f=this._component.element[0],m=h.processChildrenData,v=h.processOptionData||function(e){return e},y=c._templateNodeData[e];if(p&&u&&_){var g,C=function(t,r,i,s,o){var a;try{s?a=c.processNodeTemplate(e,n,s,o,i,r,!0):(c._useObjectAssign?(a=Object.assign({},t),Object.defineProperties(a,{_noTemplate:{value:!0,enumerable:!1},_dvtNoClone:{value:!0,enumerable:!1}})):((a=Object.create(t))._noTemplate=!0,a._dvtNoClone=!0),y.set(r,{data:a,context:i})),a.id=r,a._itemData=t}catch(e){d.error(e)}return a},D=function(e,t,n){for(var i=e.data,s=e.keys,o=[],a=0;a<i.length;a++){var l=r?i[a].value:i[a],h=r?s[a].value:s[a],d={data:l,key:h,index:a,componentElement:f};r&&(d.parentData=t,d.parentKey=n);var v=p(i[a]),y=u(i[a]),g=c.getTemplate(v),P=C(l,h,d,g,y);if(r&&i[a].children){var b=t.slice(0);b.push(l);var E={data:i[a].children,keys:s[a].children},T=D(E,b,h);m?m(P,i[a],T):P[_]=T}o.push(P)}return o};a.push(_),i&&y.has(i)&&(g=y.get(i).context.parentData.concat(y.get(i).context.data));var P=D(t,g||[],i);l.push(v(P))}o&&(y.get(i).data[_]=l[0])}var b={paths:a,values:l};return s&&(this._templateResults[e]=b),b},g.prototype.release=function(e){var t;if(e){var n=this._configMap[e].derivedTemplates;t=n?[e].concat(n):[e]}else t=Object.keys(this._templateNodeData);for(var r=0;r<t.length;r++){var s=this._templateNodeData[t[r]];s&&(s.forEach(function(e){e.node&&e.node.dispose()}),this._templateNodeData[t[r]]=new i)}this.clear(e)},g.prototype.clear=function(e,t){if(e)for(var n,r=this._configMap[e].derivedTemplates,s=r?[e].concat(r):[e],o=0;o<s.length;o++)n=s[o],t?this._templateNodeData[n]=this._templateNodeData[n]||new i:(this._templateResults[n]=null,this._componentResults[n]=null);else this._templateResults={},this._componentResults={},this._templateNodeData={}},g.prototype.getComponentResults=function(e){return this._componentResults[e]},g.prototype.setComponentResults=function(e,t){this._componentResults[e]=t},g.prototype.addEventListener=function(e){this._eventListeners.push(e)},g.prototype._fireEvent=function(e,t){for(var n=0;n<this._eventListeners.length;n++)this._eventListeners[n]({type:e,detail:t})},e.__registerWidget("oj.dvtBaseComponent",a.oj.baseComponent,{options:{trackResize:"on"},_ComponentCreate:function(){this._super(),this._renderCount=0,this._numDeferredObjs=0,this._optionsCopy=null,this._dataValuePromise={},this._templateMap={},this._TemplateHandler=new g(this,this._GetSimpleDataProviderConfigs(),this._UseObjectAssignForShapedData()),this._DataProviderHandler=new y(this,this._GetSimpleDataProviderConfigs()),this._DataProviderHandler.addEventListener(this._GetDPEventHandler()),this._TemplateHandler.addEventListener(this._GetDPEventHandler());for(var n=this._GetComponentStyleClasses(),r=0;r<n.length;r++)this.element.addClass(n[r]);this._referenceDiv=a(document.createElement("div")),this._referenceDiv.css("visibility","hidden"),this.element.append(this._referenceDiv),t.Agent.setAgentInfo(e.AgentUtils.getAgentInfo());var h=this.element[0].parentElement;h&&h._dvtcontext?this._context=h._dvtcontext:this._context=new t.Context(this.element[0],null,this._referenceDiv[0]);var c=Object.keys(this._GetSimpleDataProviderConfigs()),d={oj:e,KeySetImpl:l,ojMap:i,LocaleData:s,dataProviderProps:c};if(this._context.setJetProperties(d),this._context.setReadingDirection(this._GetReadingDirection()),this._context.setTooltipAttachedCallback(o.subtreeAttached),this._context.setOverlayAttachedCallback(o.subtreeAttached),this._context.setFixContextCallback(this._FixRendererContext.bind(this)),this._context.setCustomElement(this._IsCustomElement()),a(document.body).hasClass("oj-hicontrast")&&t.Agent.setHighContrast(!0),this._component=this._CreateDvtComponent(this._context,this._HandleEvent,this),this._component.setContextMenu(!!this._GetContextMenu()),t.Agent.isEnvironmentTest()){var p=this.element[0].getAttribute("data-oj-dvt-test-id");p&&p.length>0&&this._component.setId(p)}this._context.getStage().addChild(this._component),this._LoadResources(),this.options._widgetConstructor=o.__GetWidgetConstructor(this.element)},_AfterCreate:function(){this._super(),"off"!==this.options.trackResize&&this._addResizeListener(),this._ProcessOptions(),this._Render()},_SetLocaleHelpers:function(e,n){if(!1!==t.requireJS){var r={createNumberConverter:function(t){return new e.IntlNumberConverter(t)},isoToDateConverter:function(e){if("string"==typeof e){var t=n.IntlConverterUtils.isoToDate(e),r=t.toJSON()?n.IntlConverterUtils.dateToLocalIso(t):e;return n.IntlConverterUtils.isoToLocalDate(r)}return e},dateToIsoWithTimeZoneConverter:function(e){if(e instanceof Date){var t=-1*e.getTimezoneOffset(),r=t>=0?"+":"-",i=Math.floor(Math.abs(t)/60),s=Math.abs(t)%60,o=r+(2!==i.toString().length?"0"+i:i)+":"+(2!==s.toString().length?s+"0":s);return n.IntlConverterUtils.dateToLocalIso(e)+o}return e}};this._context.setLocaleHelpers(r)}},refresh:function(){this._super(),this._styleProcessor=null,this._context.setReadingDirection(this._GetReadingDirection()),this._Render()},getNodeBySubId:function(e){var t=this._component&&this._component.getAutomation?this._component.getAutomation():null;if(t){var n=this._ConvertLocatorToSubId(e);return t.getDomElementForSubId(n)}return null},getSubIdByNode:function(e){var t=this._component&&this._component.getAutomation?this._component.getAutomation():null;if(t){var n=t.getSubIdForDomElement(e);return n?this._ConvertSubIdToLocator(n):null}return null},_ConvertLocatorToSubId:function(e){return null},_ConvertSubIdToLocator:function(e){return null},_ProcessStyles:function(e){this._styleProcessor=this._styleProcessor?this._styleProcessor:new v(this._component.getCtx()),this._styleProcessor.processStyles(this.element,e,this._GetComponentStyleClasses(),this._GetChildStyleClasses())},_GetComponentStyleClasses:function(){return["oj-dvtbase"]},_GetChildStyleClasses:function(){var e={"oj-dvt-no-data-message":{path:"_statusMessageStyle",property:"TEXT"}};return e},_GetEventTypes:function(){return[]},_VerifyConnectedForSetup:function(){return!0},_ReleaseResources:function(){this._super(),this._renderNeeded=!0,this._context.hideTooltips(),this._context.releaseTooltipResources(),this._removeResizeListener(),this._CleanAllTemplates(),this._MakeReady(),this._DataProviderHandler.release(),this._TemplateHandler.release(),this._dataValuePromise={}},_destroy:function(){var e=this.element[0].parentElement;e&&e._dvtcontext&&(e._dvtcontext=null),this._component.destroy&&this._component.destroy(),this._component=null,this.element.children().remove(),this.element.removeAttr("role").removeAttr("tabIndex").removeAttr("aria-activedescendant");for(var t=this._GetComponentStyleClasses(),n=0;n<t.length;n++)this.element.removeClass(t[n]);this._super(),this._context.destroy(),this._context=null},_setOptions:function(e,t){this._superApply(arguments),this._OptionChangeHandler(e);var n=this.options.trackResize;if("off"===n&&this._resizeListener?this._removeResizeListener():"off"===n||this._resizeListener||this._addResizeListener(),this._ProcessOptions(),!this._bUserDrivenChange){var r=this._numDeferredObjs>0;if(!r){var i=this._GetEventTypes(),s=this._GetOptimizedOptions();a.each(e,function(e){if(i.indexOf(e)<0&&s.indexOf(e)<0)return r=!0,!1})}r?this._Render():this._UpdateNoRenderOptions(e)}},_GetOptimizedOptions:function(){return["highlightedCategories","selection","dataCursorPosition","scrollPosition"]},_UpdateNoRenderOptions:function(e){void 0!==e.highlightedCategories&&this._component.highlight(e.highlightedCategories),void 0!==e.selection&&this._component.select(e.selection),void 0!==e.dataCursorPosition&&this._component.positionDataCursor&&this._component.positionDataCursor(e.dataCursorPosition),void 0!==e.scrollPosition&&this._component.scroll(e.scrollPosition)},_CreateDvtComponent:function(e,t,n){return null},_HandleEvent:function(e){var t=e.type;"selection"===t?this._UserOptionChange("selection",e.selection):"categoryHide"===t||"categoryShow"===t?this._UserOptionChange("hiddenCategories",e.hiddenCategories):"categoryHighlight"===t?this._UserOptionChange("highlightedCategories",e.categories):"optionChange"===t?this._UserOptionChange(e.key,e.value,e.optionMetadata):"touchHoldRelease"===t&&this._GetContextMenu()?this._OpenContextMenu(a.Event(e.nativeEvent),"touch"):"dvtRender"===t?this._Render():"ready"===t&&0===this._numDeferredObjs&&this._MakeReady()},_BeforeResizeRender:function(){},_addResizeListener:function(){if(!this._resizeListener)if(this._resizeListener=this._handleResize.bind(this),this._IsFlowingLayoutSupported())h.addResizeListener(this.element[0],this._resizeListener,250);else{const e=this.element[0],t=e.hasAttribute("data-oj-resize-notify");this._resizeObserver=new ResizeObserver(n=>{const r=n[0].borderBoxSize,i=r?(r[0]||r).inlineSize:e.offsetWidth,s=r?(r[0]||r).blockSize:e.offsetHeight;this._resizeListener(i,s),t&&e.dispatchEvent(new Event("oj-resize"))}),this._resizeObserver.observe(e,{box:"border-box"})}},_removeResizeListener:function(){this._resizeObserver?(this._resizeObserver.disconnect(),this._resizeObserver=null):this._resizeListener&&h.removeResizeListener(this.element[0],this._resizeListener),this._resizeListener=null},_handleResize:function(e,t){var n=this.element.width(),r=this.element.height();(null==this._width||null==this._height||Math.abs(n-this._width)+Math.abs(r-this._height)>=5)&&this._Render(!0)},_LoadResources:function(){},_Render:function(e){this._context.hideTooltips(),this._NotReady(),!this._context.isReadyToRender()||this._renderNeeded&&e?(this._renderNeeded=!0,this._MakeReady()):(this._width=this._IsFlowingLayoutSupported()?null:this.element.width(),this._height=this._IsFlowingLayoutSupported()?null:this.element.height(),this._context.setDefaultFontFamily(this._referenceDiv.css("font-family")),this._context.setDefaultFontSize(this._referenceDiv.css("font-size")),this.options._width=this._width,this.options._height=this._height,this.options._locale=t.Agent.isEnvironmentTest()&&this.options._locale?this.options._locale:r.getLocale(),this._IsDraggable()&&this.element.attr("draggable",!0),v.populateOptions(this.options,this._GetChildStyleClasses()),e?0===this._numDeferredObjs&&(this._renderCount+=1,this._RenderComponent(this._optionsCopy,e)):(this._renderCount+=1,this._resolveDeferredDataItems()&&this._RenderComponent(this._optionsCopy)),this._renderNeeded=!1)},_IsDraggable:function(){return!!this.options.dnd},_NotifyShown:function(){this._super(),this._notifyShownAttached()},_NotifyAttached:function(){this._super(),this._notifyShownAttached()},_NotifyDetached:function(){this._super(),this._notifyHiddenDetached()},_NotifyHidden:function(){this._super(),this._notifyHiddenDetached()},_notifyShownAttached:function(){this._renderNeeded&&this._Render()},_notifyHiddenDetached:function(){this._context.hideTooltips(),this._MakeReady()},_UserOptionChange:function(e,t,n){this._bUserDrivenChange=!0,this.option(e,t,{_context:{writeback:!0,optionMetadata:n,internalSet:!0,skipEvent:"_"===e.charAt(0)}}),this._bUserDrivenChange=!1},_NotifyContextMenuGesture:function(e,t,n){if("touch"!==n)if("keyboard"===n){var r=this.element[0].getBoundingClientRect(),i=this._component.getKeyboardFocus()?this._component.getKeyboardFocus().getBoundingClientRect():null,s=i?"left+"+(i.left+.5*i.width-r.left)+" top+"+(i.top+.5*i.height-r.top):"center";this._OpenContextMenu(t,n,{position:{at:s}})}else this._super(e,t,n)},_GetDvtComponent:function(e){var t=o.__GetWidgetConstructor(e)("instance");return t?t._component:null},_GetStringFromIndexPath:function(e){for(var t="",n=0;n<e.length;n++)t+="["+e[n]+"]";return t},_GetIndexPath:function(e){for(var t=[],n=0;e.indexOf("[",n)>0;){var r=e.indexOf("[",n)+1,i=e.indexOf("]",n);t.push(Number(e.substring(r,i))),n=i+1}return t},_GetFirstIndex:function(e){return Number(this._GetFirstBracketedString(e))},_GetFirstBracketedString:function(e){var t=e.indexOf("[")+1,n=e.indexOf("]");return e.substring(t,n)},_GetComponentDeferredDataPaths:function(){return{}},_GetComponentNoClonePaths:function(){if(!this._noClonePaths){this._noClonePaths={};var e=this,t=this._GetComponentDeferredDataPaths().root;t&&t.forEach(function(t){e._noClonePaths[t]=!0})}return this._noClonePaths},_resolveDocumentFonts:function(){var e=document.fonts;if(e&&"loading"===e.status){this._numDeferredObjs+=1;var t=this._renderCount;e.ready.then(function(){this._renderDeferredData(t,null,[])}.bind(this))}},_resolveDeferredDataItems:function(){this._optionsCopy=t.JsonUtils.clone(this.options,null,this._GetComponentNoClonePaths()),this._ProcessStyles(this._optionsCopy),this._numDeferredObjs=0,this._FixCustomRenderers(this._optionsCopy),this._resolveDocumentFonts();for(var e=this,n=this._GetComponentDeferredDataPaths(),r=Object.keys(n),i=0;i<r.length;i++){var s=r[i];n[s].forEach(function(t){if("root"===s)e._resolveDeferredDataItem.bind(e)(e.options,e._optionsCopy,t);else{var n=e.options[s];if(n&&n instanceof Array)for(var r=0;r<n.length;r++)e._resolveDeferredDataItem.bind(e)(n[r],e._optionsCopy[s][r],t)}})}return 0===this._numDeferredObjs},_resolveDeferredDataItem:function(e,t,n){var r=new m(e,n),i=r.getValue(),s=this;if(i instanceof Function?i=Promise.resolve(i(this._GetDataContext(e))):this._IsCustomElement()&&Array.isArray(i)&&(i=Promise.resolve(i),r.setValue(i,!0)),i&&this._DataProviderHandler.isDataProvider(i)){var o=this._DataProviderHandler.isTreeDataProvider(i);i=s._dataValuePromise[n]||new Promise(function(e){var t=s._TemplateHandler.getTemplateEngine(),r=s._DataProviderHandler.fetchAllData(i,n,!0);Promise.all([t,r]).then(function(t){if(i===s._dataValuePromise[n]){var r=t[0],a=t[1],l=s._ProcessTemplates(n,a,r,o,null,!0);s._dataValuePromise[n]=null,e(l)}},function(){s._dataValuePromise[n]=null})}),s._dataValuePromise[n]=i}if(i instanceof Promise){var a=this._renderCount;i.then(function(e){var r=[n],i=[e];e.paths&&(r=e.paths,i=e.values),s._renderDeferredData(a,t,r,i)},function(){s._renderDeferredData(a,t,[n],[[]])}),this._numDeferredObjs+=1}},_renderDeferredData:function(e,t,n,r){if(this._context&&e===this._renderCount){this._numDeferredObjs-=1;for(var i=0;i<n.length;i++)new m(t,n[i]).setValue(r[i],!0);0===this._numDeferredObjs&&(this._RenderComponent(this._optionsCopy),this._optionsCopy=null)}},_ClearDataProviderState:function(e){this._DataProviderHandler.clear(e),this._TemplateHandler.release(e),this._dataValuePromise[e]=null},_OptionChangeHandler:function(e){for(var t=Object.keys(this._GetSimpleDataProviderConfigs()),n=0;n<t.length;n++){var r=t[n];Object.prototype.hasOwnProperty.call(e,r)&&this._ClearDataProviderState(r)}},getElementPropertyNames:function(t){var n=e.CustomElementBridge.getMetadata(t).properties,r=Object.keys(n).filter(function(e){return!n[e]._eventListener}),i=new Set;return r.forEach(function(e){i.add(e)}),i},_ProcessTemplates:function(e,t,n,r,i,s,o){return this._TemplateHandler.processTemplates(e,t,n,r,i,s,o)},_GetSimpleDataProviderConfigs:function(){return{}},_UseObjectAssignForShapedData:function(){return!1},_GetDPEventHandler:function(){return function(e){"notReady"===e.type?this._NotReady():"dataUpdated"===e.type?this._Render():"clearState"===e.type?this._ClearDataProviderState(e.detail.dataProperty):"reset"===e.type?this._TemplateHandler.clear(e.detail.dataProperty,!0):"removeKeys"===e.type&&this._RemoveKeys(e.detail.keys)}.bind(this)},_RemoveKeys:function(e){var t,n,r=this.options.selection,i=new l(e);if(r&&r.length>0){for(var s=(n=r.slice(0)).length-1;s>=0;s--)i.has(n[s])&&(t=!0,n.splice(s,1));t&&this._UserOptionChange("selection",n)}},_getFetchDataHandler:function(e){var t=this._GetSimpleDataProviderConfigs()[e].resultPath;return function(n,r,i,s){var o=this._DataProviderHandler.fetchChildrenData(e,n,s,r),a=this._TemplateHandler.getTemplateEngine();return Promise.all([o,a]).then(function(n){var r=this._ProcessTemplates(e,{data:n[0].data,keys:n[0].keys},n[1],!0,s,!1,!0).values[0];return i&&(i[t]=r),r}.bind(this))}.bind(this)},_RenderComponent:function(e,t){if(this._context.isReadyToRender()){this._CleanAllTemplates(t);var n=this._IsFlowingLayoutSupported()&&this._resizeListener;n&&this._removeResizeListener(),t&&this._BeforeResizeRender(),this._component.render(t?null:e,this._width,this._height),n&&this._addResizeListener(),this.element.attr("role")?this.element[0].hasAttribute("tabindex")||this.element.attr("tabindex",0):this.element.attr("tabindex",null)}else this._renderNeeded=!0,this._MakeReady()},_GetDataContext:function(e){return{}},_IsFlowingLayoutSupported:function(){return!1},whenReady:function(){if(this._ready)return Promise.resolve(!0);if(!this._promise){var e=this;this._promise=new Promise(function(t){e._promiseResolve=t})}return this._promise},_NotReady:function(){if(this._ready=!1,0===this._numDeferredObjs&&!this._readyResolveFunc){var e=n.getContext(this.element[0]).getBusyContext(),t={description:"The component identified by '"+this.element.attr("id")+"' is being loaded."};this._readyResolveFunc=e.addBusyState(t)}},_MakeReady:function(){this._promiseResolve&&(this._promiseResolve(!0),this._promiseResolve=null),this._ready=!0,this._promise=null,this._readyResolveFunc&&(this._readyResolveFunc(),this._readyResolveFunc=null)},_ProcessOptions:function(){t.Agent.isEnvironmentTest()&&(this.options=Object.assign(this.options,this.element[0].__dvtToolkit));var e=this.options.tooltip;e&&e._renderer&&(this.options.tooltip={renderer:this._GetTemplateRenderer(e._renderer,"tooltip")})},_WrapCustomElementRenderer:function(e){var t=this;return e?function(n){n._dvtcontext=t._context;var r=e(n);if(n._templateName&&n._templateCleanup&&(t._AddTemplate(n),"tooltipTemplate"===n._templateName)){const e=t._cleanTooltipTemplate();Object.defineProperty(n,"_tooltipTemplateCleanup",{value:()=>e(n._templateCleanup),enumerable:!1})}if(r&&!0!==r.preventDefault&&r.insert){var i=r.insert;return i.classList&&i.classList.contains("oj-dvtbase")?t._GetDvtComponent(i):i}return null}:null},_FixCustomRenderers:function(e){if(this._IsCustomElement())for(var t=this._GetComponentRendererOptions(),n=0;n<t.length;n++){var r=t[n].path,i=t[n].slot,s=this._TemplateHandler.getTemplates();if(i&&s[i]&&s[i][0])this._ProcessInlineTemplateRenderer(e,r,s[i][0],i);else{var o=new m(e,r),a=o.getValue();a&&o.setValue(this._WrapCustomElementRenderer(a),!0)}}},_GetComponentRendererOptions:function(){return[{path:"tooltip/renderer",slot:"tooltipTemplate"}]},_GetTemplateRenderer:function(e,t){var n=this;return function(r){var i=document.createElement("div");i.style.display="none",e({parentElement:i,context:r});var s=i.children[0];return s?(n._AddTemplate({_templateName:t,_templateCleanup:function(){a(i).remove()}}),i.removeChild(s),a(i).remove(),s):null}},_GetTemplateDataRenderer:function(e,t){var n=this;return function(r){var i=document.createElement("div");i.style.display="none",i._dvtcontext=n._context,n.element.append(i),e({parentElement:i,data:r.data});var s=i.children[0];return s?(n._AddTemplate({_templateName:t,_templateCleanup:function(){a(i).remove()}}),"http://www.w3.org/2000/svg"===s.namespaceURI?(i.removeChild(s),a(i).remove(),s):n._GetDvtComponent(s)):null}},_WrapInlineTemplateRenderer:function(e,t,n){return e},_ProcessInlineTemplateRenderer:function(e,t,n,r){var i=this._renderCount;this._numDeferredObjs+=1,this._TemplateHandler.getTemplateEngine().then(function(s){var o=function(e){return this._TemplateRenderer(e,s,n,r)}.bind(this);o=this._WrapInlineTemplateRenderer(o,r,t),this._renderDeferredData(i,e,[t],[this._WrapCustomElementRenderer(o)])}.bind(this))},_TemplateRenderer:function(e,t,n,r){var i=t.execute(this.element[0],n,e);return i&&i.length>0?(Object.defineProperty(e,"_templateCleanup",{value:()=>{i.forEach(e=>{t.clean(e,this.element[0])})},enumerable:!1}),Object.defineProperty(e,"_templateName",{value:r,enumerable:!1}),{insert:i}):{preventDefault:!0}},_CleanAllTemplates:function(e){for(var t=Object.keys(this._templateMap),n=0;n<t.length;n++){var r=t[n];this._CleanTemplate(r)}},_CleanTemplate:function(e){if(this._templateMap[e]){for(var t=this._templateMap[e].length,n=0;n<t;n++)this._templateMap[e][n]();this._templateMap[e]=[]}},_cleanTooltipTemplate:function(){return e=>{const t=this._templateMap.tooltipTemplate,n=t.findIndex(t=>t===e);-1!==n&&(t[n](),t.splice(n,1))}},_AddTemplate:function(e){var t=e._templateName;this._templateMap[t]||(this._templateMap[t]=[]),this._templateMap[t].push(e._templateCleanup)},_CompareOptionValues:function(t,n,r){switch(t){case"hiddenCategories":case"highlightedCategories":case"selection":return e.Object.compareValues(n,r);default:return this._super(t,n,r)}}},!0),e._registerLegacyNamespaceProp("AttributeGroupHandler",c.AttributeGroupHandler),e._registerLegacyNamespaceProp("ColorAttributeGroupHandler",c.ColorAttributeGroupHandler),e._registerLegacyNamespaceProp("ShapeAttributeGroupHandler",c.ShapeAttributeGroupHandler);const C={_SHAPE_REGEXP:/\d/,_SHAPE_ENUMS:{circle:!0,ellipse:!0,square:!0,rectangle:!0,diamond:!0,triangleUp:!0,triangleDown:!0,plus:!0,human:!0,star:!0},shapeParseFunction:function(e,t){var n=t||C._SHAPE_ENUMS;return function(t,r,i,s){if(e[r]){if(C._SHAPE_REGEXP.test(t))return t;if(n[t])return t;throw new Error("Found: '"+t+"'. Expected one of the following: "+Object.keys(n).toString())}return s(t)}}};return C});
//# sourceMappingURL=ojdvt-base.js.map