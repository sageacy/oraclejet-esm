define(["exports","ojs/ojvcomponent"],(function(a,e){"use strict";
/**
     * @license
     * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
     * The Universal Permissive License (UPL), Version 1.0
     * as shown at https://oss.oracle.com/licenses/upl/
     * @ignore
     */var t=function(a,e,t,r){var s,n=arguments.length,l=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(a,e,t,r);else for(var i=a.length-1;i>=0;i--)(s=a[i])&&(l=(n<3?s(l):n>3?s(e,t,l):s(e,t))||l);return n>3&&l&&Object.defineProperty(e,t,l),l};a.Avatar=class extends e.VComponent{render(){const a=this.props,t={"oj-avatar":!0,"oj-avatar-has-initials":!(!a.initials||a.src),"oj-avatar-image":!!a.src,["oj-avatar-bg-"+a.background]:!0,["oj-avatar-"+a.size]:!0};let r;return r=a.src?e.h("div",{class:"oj-avatar-background-image",style:{backgroundImage:`url("${a.src}")`}}):a.initials?e.h("div",{class:"oj-avatar-initials oj-avatar-background-image"},a.initials):e.h("div",{class:"oj-avatar-background-image"},e.h("div",{class:"oj-avatar-placeholder"})),e.h("div",{class:t,"aria-hidden":"true"},r)}},a.Avatar.metadata={extension:{_DEFAULTS:class{constructor(){this.background="neutral",this.initials=null,this.size="md",this.src=null}}},properties:{background:{type:"string",enumValues:["neutral","red","orange","forest","green","teal","mauve","purple"],value:"neutral"},initials:{type:"string|null",value:null},size:{type:"string",enumValues:["xxs","xs","sm","md","lg","xl","xxl"],value:"md"},src:{type:"string|null",value:null}}},a.Avatar=t([e.customElement("oj-avatar")],a.Avatar),Object.defineProperty(a,"__esModule",{value:!0})}));