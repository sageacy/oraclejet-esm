/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojeditablevalue","ojs/ojradiocheckbox","ojs/ojoption","ojs/ojdataprovider","ojs/ojcore-base","ojs/ojlogger","ojs/ojlabelledbyutils"],function(e,t,i,n,o,a,s,r,l,d){"use strict";var u,p;t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,d=d&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d,(u={properties:{describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string"},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string"},validatorHint:{type:"Array<string>|string"}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},optionRenderer:{type:"function"},options:{type:"object"},optionsKeys:{type:"object",properties:{label:{type:"string"},value:{type:"string"}}},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},translations:{type:"object",value:{},properties:{readonlyNoValue:{type:"string"},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},value:{type:"any",writeback:!0}},methods:{getProperty:{},refresh:{},reset:{},setProperties:{},setProperty:{},showMessages:{},validate:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateEnd:{},ojAnimateStart:{}},extension:{}}).extension._WIDGET_NAME="ojRadioset",u.extension._ALIASED_PROPS={readonly:"readOnly"},u.extension._TRACK_CHILDREN="immediate",r.CustomElementBridge.register("oj-radioset",{metadata:r.CollectionUtils.mergeDeep(u,{properties:{readonly:{binding:{consume:{name:"readonly"}}},userAssistanceDensity:{binding:{consume:{name:"userAssistanceDensity"}}},labelEdge:{binding:{consume:{name:"labelEdge"}}}}})}),p={doValueChangeCheck:!1},r.__registerWidget("oj.ojRadioset",t.oj.editableValue,{version:"1.0.0",defaultElement:"<div>",widgetEventPrefix:"oj",_WRAPPER_CLASS_NAMES:"oj-radioset-wrapper oj-form-control-container",options:{disabled:!1,readOnly:!1,labelledBy:null,optionRenderer:null,options:null,optionsKeys:{},required:!1,value:void 0},refresh:function(){this._super(),this._setup()},widget:function(){return this.uiRadioset},validate:n.EditableValueUtils.validate,_InitOptions:function(e,t){var i,o;this._super(e,t),this._IsCustomElement()||(n.EditableValueUtils.initializeOptionsFromDom([{attribute:"disabled",validateOption:!0},{attribute:"readonly",option:"readOnly",validateOption:!0},{attribute:"required",coerceDomValue:!0,validateOption:!0},{attribute:"title"}],t,this),void 0===t.value&&(this.$radios=this._findRadiosWithMatchingName(),void 0!==(o=0===(i=this.$radios.filter(":checked")).length?void 0:i.val())&&this.option("value",o,{_context:{writeback:!0,internalSet:!0}}),void 0===this.options.value&&(this.options.value=null)))},_ComponentCreate:function(){const e=this.element;if(this._super(),e.uniqueId(),this._externalTabIndex=this.element.attr("tabindex")||0,this.element.removeAttr("tabindex"),r.RadioCheckboxUtils.generateOptionsFromData.call(this),this._processOjOptions(),this.$radios=this._findRadiosWithMatchingName(),e.is("fieldset"))throw new Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");this.$radios._ojRadioCheckbox().attr("data-oj-internal",""),this.uiRadioset=e.addClass("oj-radioset oj-component").attr("role","radiogroup");const t=e.contents().filter(function(){return!(this.getAttribute&&"contextMenu"===this.getAttribute("slot"))});t.length>0?t.wrapAll(`<div class='${this._WRAPPER_CLASS_NAMES}'></div>`):e.append(`<div class='${this._WRAPPER_CLASS_NAMES}'></div>`),this._updateReadonlyState(),this._on(this._events),this._setup()},_ResetComponentState:function(){this._processOjOptions(),this.$radios=this._findRadiosWithMatchingName(),this.$radios.filter(".oj-radio").each(function(){var e=void 0!==t(this).attr("disabled")&&!!t(this).prop("disabled");t(this)._ojRadioCheckbox("option","disabled",e)}),this.$radios.not(".oj-radio")._ojRadioCheckbox()},GetFocusElement:function(){if(!0===this.options.readOnly){const e=this._GetReadonlyFocusElement();if(e)return e}const e=this._GetContentElement().not(":disabled").filter(":checked")[0];return e||this._GetContentElement().not(":disabled").first()[0]},_GetReadonlyFocusElement:function(){return this.widget()[0].querySelector(".oj-form-control-container")},_IsRequired:function(){return this.options.required},_SetDisabledDom:function(e){},_refreshRequired:n.EditableValueUtils._refreshRequired,_processOjOptions:function(){if(this._IsCustomElement()){var e,t,i=this._customOptionRenderer.bind(this),n=this.element[0],o=n.querySelector(".oj-radioset-wrapper"),a=this.options.value;o||(o=n);var s=n.querySelector("[data-no-value-span]");if(s)(a&&""!==a||!this.options.readOnly)&&s.parentElement.removeChild(s);else if((!a||""===a)&&this.options.readOnly){var r=document.createElement("span");r.setAttribute("data-no-value-span",""),r.setAttribute("class","oj-choice-item");var l=this.getTranslatedString("readonlyNoValue");null!==l&&(r.textContent=l),o.appendChild(r)}var d=this.element.children("oj-option").add(this.element.children(".oj-radioset-wrapper").find("oj-option"));for(e=0,t=d.length;e<t;e++)d[e].customOptionRenderer=i,this.options.readOnly?this._processReadonlyOptions(d[e]):this._initInputLabelFromOjOption(d[e])}},_processReadonlyOptions:function(e){const i=this.options.value,n=e.value,o=this.element.get(0),a=t(e).parentsUntil(o,"span.oj-choice-item").get(0);null==a?e.classList.add("oj-helper-hidden"):a.classList.add("oj-helper-hidden"),i===n&&(e.classList.remove("oj-helper-hidden"),this._initReadonlyLabelFromOjOption(e,a))},_initInputLabelFromOjOption:function(e){var i,n,o=e;t(o).uniqueId();var a=o.getAttribute("id"),s=a+"|rb",r=document.getElementById(s);if(null!==r){var l=o;do{l=l.parentElement}while(l&&!l.classList.contains("oj-choice-item"));l&&l.classList.contains("oj-helper-hidden")&&l.classList.contains("oj-choice-item")&&"SPAN"===l.tagName&&l.classList.remove("oj-helper-hidden"),o&&o.classList.contains("oj-helper-hidden")&&o.classList.remove("oj-helper-hidden"),r&&r.parentElement.classList.contains("oj-helper-hidden")&&r.parentElement.classList.remove("oj-helper-hidden")}else(r=document.createElement("input")).setAttribute("type","radio"),r.setAttribute("value",o.value),r.setAttribute("id",s),r.setAttribute("tabindex",this._externalTabIndex),"LABEL"===o.parentElement.nodeName?((n=o.parentElement).setAttribute("for",s),n.parentElement.insertBefore(r,n),n.parentElement.classList.remove("oj-helper-hidden")):((n=document.createElement("label")).setAttribute("for",s),(i=document.createElement("span")).setAttribute("class","oj-choice-item"),o.parentElement.insertBefore(i,o),i.appendChild(r),i.appendChild(n),n.appendChild(o)),o.classList.remove("oj-helper-hidden");var d=this.element[0].id,u=o.getAttribute("aria-label"),p=o.getAttribute("aria-labelledby");r.setAttribute("data-oj-option-id",a),d&&""!==d&&r.setAttribute("name",d),u&&""!==u?r.setAttribute("aria-label",u):r.removeAttribute("aria-label"),p&&""!==p?r.setAttribute("aria-labelledby",p):r.removeAttribute("aria-labelledby"),o.disabled?r.setAttribute("disabled",!0):r.removeAttribute("disabled")},_initReadonlyLabelFromOjOption:function(e,i){var n,o,a=e;if(i){t(a).uniqueId();var s=a.getAttribute("id")+"|rb",r=document.getElementById(s);null!==r&&r.parentElement.classList.add("oj-helper-hidden"),i.classList.remove("oj-helper-hidden")}else n=document.createElement("span"),o=document.createElement("label"),n.setAttribute("class","oj-choice-item"),a.parentElement.insertBefore(n,a),o.appendChild(a),n.appendChild(o)},_customOptionRenderer:function(e){var i=e,n=i.getAttribute("id")+"|rb",o=document.getElementById(n);null!==o&&o.classList.contains("oj-radio")&&t(o)._ojRadioCheckbox("option","disabled",i.disabled)},_labelledByUpdatedForSet:d._labelledByUpdatedForSet,_findRadiosWithMatchingName:function(){var e,t,i=this.element,n=i.find("input[type=radio]:first");return 0===n.length&&l.warn("Could not find any input type=radio within this element"),void 0===(e=n.attr("name"))?i.find("input[type=radio]").not("[name]"):(t='input[type=radio][name="'+e+'"]',i.find(t))},_NotifyContextMenuGesture:function(e,t,i){var n=this.element.find("input[type=radio]"),o=n.filter(":checked"),a=o.length?o:n.filter(":enabled").first();this._OpenContextMenu(t,i,{launcher:a})},_GetMessagingLauncherElement:function(){return this.widget()},_setup:function(){this._propagateDisabled(this.options.disabled),this.element.hasClass("oj-choice-direction-column")||this.element.hasClass("oj-choice-direction-row")||this.element.addClass("oj-choice-direction-column"),this.options.readOnly?this.element.addClass("oj-read-only"):this.element.removeClass("oj-read-only"),this._refreshRequired(this.options.required);var e=this.widget();this._labelledByUpdatedForSet(e[0].id,null,this.options.labelledBy,e)},_events:{change:function(e){this._HandleChangeEvent(e)},"click .oj-choice-item":function(e){this.widget()[0].classList.contains("oj-choice-direction-row")||"INPUT"===e.target.tagName||t(e.target).find("input").click()}},_HandleChangeEvent:function(e){var t=this._GetDisplayValue();this._SetValue(t,e,p)},_GetDisplayValue:function(e){return this._GetElementValue()},_SetDisplayValue:function(e){var i,n,o=this.$radios.length,a=-1,s=this.$radios.get(),l=[];for(i=0;i<o;i++)if(l[i]=this._GetOptionValue(s[i]),l[i]===e){a=i;break}if(-1===a)for(i=0;i<o;i++)if(r.Object.compareValues(l[i],e)){a=i;break}for(i=0;i<o;i++){var d=(n=t(this.$radios[i]))._ojRadioCheckbox("option","checked");i===a?d||n._ojRadioCheckbox("option","checked",!0):d&&n._ojRadioCheckbox("option","checked",!1)}},_GetElementValue:function(){var e=this.$radios.filter(":checked");return 0===e.length?null:this._GetOptionValue(e[0])},_GetOptionValue:function(e){var t,i;return this._IsCustomElement()?(t=document.getElementById(e.getAttribute("data-oj-option-id")))&&(i=t.value):i=e.value,i},_GetDefaultStyleClass:function(){return"oj-radioset"},_GetContentElement:function(){return null!=this.$radios||(this.$radios=this._findRadiosWithMatchingName()),this.$radios},_AriaRequiredUnsupported:function(){return!0},_ShowHelpHintsLocation:function(){return"above"},_AfterSetOptionRequired:n.EditableValueUtils._AfterSetOptionRequired,_propagateDisabled:function(e){var i=!!e;this.$radios.each(function(){t(this).data("oj-_ojRadioCheckbox").__setAncestorComponentDisabled(i)}),this.$radios._ojRadioCheckbox("refreshDisabled")},_updateReadonlyState:function(){const e=this.element[0].querySelector(".oj-radioset-wrapper");if(this.options.readOnly)return e.setAttribute("tabindex",this._externalTabIndex),e.setAttribute("aria-readonly","true"),this.element.addClass("oj-read-only"),void this.element.removeAttr("role").removeAttr("aria-labelledby");e.removeAttribute("tabindex"),e.removeAttribute("aria-readonly"),this.element.removeClass("oj-read-only"),this.element.attr("role","radiogroup"),this._labelledByUpdatedForSet(this.widget()[0].id,null,this.options.labelledBy,this.widget())},_setOption:function(e,t,i){var n=this.options.labelledBy;switch(this._super(e,t,i),e){case"disabled":this._propagateDisabled(t);break;case"readOnly":var o=this.options.value;this._updateReadonlyState(),this._ResetComponentState(),null!=o&&this._SetDisplayValue(o);break;case"value":this._processOjOptions();break;case"labelledBy":var a=this.widget();this._labelledByUpdatedForSet(a[0].id,n,t,a);break;case"options":r.RadioCheckboxUtils.generateOptionsFromData.call(this);break;case"optionsKeys":case"optionRenderer":r.RadioCheckboxUtils.renderOptions.call(this)}},_AfterSetOption:function(e,t,i){this._superApply(arguments),"required"===e&&this._AfterSetOptionRequired(e)},getNodeBySubId:function(e){var t,i,n,o=this._super(e);if(!o)switch(t=this.$radios.get(),e.subId){case"oj-radioset-inputs":o=t;break;case"oj-radioset-radio":if(void 0!==(i=e.value)){var a=t.length,s=-1,l=[];for(n=0;n<a;n++)if(l[n]=this._GetOptionValue(t[n]),l[n]===i){s=n;break}if(-1===s)for(n=0;n<a;n++)if(r.Object.compareValues(l[n],i)){s=n;break}-1!==s&&(o=t[s])}}return o||null},getSubIdByNode:function(e){for(var t=this._GetContentElement()[0].parentElement.parentElement.parentElement,i=e;i&&i!==t;){if("LABEL"===i.nodeName&&(i=document.getElementById(i.for)),"INPUT"===i.nodeName)return{subId:"oj-radioset-radio",value:this._GetOptionValue(i)};i=i.parentElement}return this._super(e)},_destroy:function(){var e=this._super(),i=this.element[0].firstElementChild;return this.$radios&&this.$radios._ojRadioCheckbox("destroy"),t(i).contents().unwrap(),r.RadioCheckboxUtils.removeDataListener.call(this),e}})});
//# sourceMappingURL=ojradioset.js.map