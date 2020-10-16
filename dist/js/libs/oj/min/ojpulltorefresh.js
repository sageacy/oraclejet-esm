/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojcontext","ojs/ojtranslation","hammerjs","ojs/ojjquery-hammer","ojs/ojcomponentcore","touchr"],(function(e,t,l,a,s){"use strict";e.PullToRefreshUtils={};e.PullToRefreshUtils;return e.PullToRefreshUtils.setupPullToRefresh=function(l,r,o){var n,i,u,d,h,f,c,p,T,g,R,v,j,P,m,U,_;U=e.DomUtils.isTouchSupported(),e.PullToRefreshUtils.tearDownPullToRefresh(l),n=t(document.createElement("div")).addClass("oj-pulltorefresh-outer"),e.PullToRefreshUtils._renderAccessibleLink(l,n,r,o),i=t(document.createElement("div")).addClass("oj-pulltorefresh-panel"),n.append(i),(u=t(l)).prepend(n),U?_="touch":(_="pan",m={recognizers:[[s.Pan,{direction:s.DIRECTION_VERTICAL}]]},u.ojHammer(m)),u.on(_+"start.pulltorefresh",(function(l){null==t.data(i[0],"data-pullstart")&&0===u[0].scrollTop&&(e.PullToRefreshUtils._handlePull(l,i,o),(T=i.find(".oj-pulltorefresh-icon")).length>0&&(g=T.parent().outerHeight(!0)),o&&!isNaN(o.threshold)&&(h=parseInt(o.threshold,10)),h=isNaN(h)?i.outerHeight(!0):Math.max(0,Math.min(h,i.outerHeight(!0))),i.css("height",0),i.removeClass("oj-pulltorefresh-transition"),U?(t.data(i[0],"data-pullstart",l.originalEvent.touches[0].clientY),t.data(i[0],"data-pullstart-horiz",l.originalEvent.touches[0].clientX)):t.data(i[0],"data-pullstart",0),d=!0)})).on(_+"move.pulltorefresh",(function(l){if(null!=(f=t.data(i[0],"data-pullstart"))&&!((c=U?l.originalEvent.touches[0].clientY-parseInt(f,10):l.gesture.deltaY)<0)&&(l.preventDefault(),null==t.data(i[0],"data-closing")))if(null==t.data(i[0],"data-loading")){if(d){if(p=U?l.originalEvent.touches[0].clientX-parseInt(t.data(i[0],"data-pullstart-horiz"),10):l.gesture.deltaX,Math.abs(p)>c)return;d=!1}i.css("height",c),e.PullToRefreshUtils._fireEvent(l,"pull",i,c),null!=T&&T.length>0&&(null!=(R=t.data(i[0],"data-lasticonclass"))&&T.removeClass(R),(j=10*Math.round(c/h*10))>=100?(P="oj-pulltorefresh-icon-full",v=a.getTranslatedString("oj-pullToRefresh.titleIconFull")):(P="oj-pulltorefresh-icon-"+j+"-percent",v=a.getTranslatedString("oj-pullToRefresh.titleIcon"+j+"percent")),T.addClass(P),T.attr("title",v),t.data(i[0],"data-lasticonclass",P),e.PullToRefreshUtils._showHideDefaultText(i,c>g))}else i.css("height",Math.max(c,h))})).on(_+"cancel.pulltorefresh",(function(){e.PullToRefreshUtils._cleanup(i)})).on(_+"end.pulltorefresh",(function(a){if(null!=(f=t.data(i[0],"data-pullstart"))&&null==t.data(i[0],"data-closing"))return null!=t.data(i[0],"data-loading")?(c=t.data(i[0],"data-panelheight"),void i.css("height",c)):void(i.outerHeight()<h?(i.addClass("oj-pulltorefresh-transition").css("height",0),e.PullToRefreshUtils._cleanup(i)):e.PullToRefreshUtils._handleRelease(a,l,i,r))}))},e.PullToRefreshUtils._handlePull=function(l,a,s){var r,o;e.PullToRefreshUtils._fireEvent(l,"pull",a,0),0===a.children().length&&(s&&(r=s.primaryText,o=s.secondaryText),e.PullToRefreshUtils._createDefaultContent(a,r,o)),a.prev().text(e.PullToRefreshUtils._getTranslatedString("oj-pullToRefresh.ariaRefreshingLink")),a.css("height","auto"),t.data(a[0],"data-panelheight",a.outerHeight())},e.PullToRefreshUtils._handleRelease=function(a,s,r,o){var n,i,u,d,h;n=t.data(r[0],"data-panelheight"),r.addClass("oj-pulltorefresh-transition").css("height",n),e.PullToRefreshUtils._fireEvent(a,"release",r,n),t.data(r[0],"data-loading",!0),(i=r.find(".oj-pulltorefresh-icon")).length>0&&(null!=(u=t.data(r[0],"data-lasticonclass"))&&i.removeClass(u),i.addClass("oj-pulltorefresh-icon-full")),d=l.getContext(s).getBusyContext().addBusyState({description:"PullToRefresh:handleRelease"}),t.data(t(s)[0],"data-pulltorefresh-busystate",d),o().then((function(){h=function(){e.PullToRefreshUtils._fireEvent(a,"complete",r,n),e.PullToRefreshUtils._cleanup(r),r.off("transitionend",h),r.prev().text(""),e.PullToRefreshUtils._resolveBusyState(s)},r.prev().text(e.PullToRefreshUtils._getTranslatedString("oj-pullToRefresh.ariaRefreshCompleteLink")),r.prev().prev().css("position",""),t.data(r[0],"data-closing",!0),r.on("transitionend",h),r.css("height",0)}),(function(){h=function(){e.PullToRefreshUtils._cleanup(r),r.off("transitionend",h),r.prev().text(""),e.PullToRefreshUtils._resolveBusyState(s)},r.prev().prev().css("position",""),t.data(r[0],"data-closing",!0),r.on("transitionend",h),r.css("height",0)}))},e.PullToRefreshUtils.tearDownPullToRefresh=function(l){t(l).children(".oj-pulltorefresh-outer").remove(),t(l).off(".pulltorefresh"),e.PullToRefreshUtils._resolveBusyState(l)},e.PullToRefreshUtils._resolveBusyState=function(e){var l,a;l=t(e)[0],(a=t.data(l,"data-pulltorefresh-busystate"))&&(a(null),t.removeData(l,"data-pulltorefresh-busystate"))},e.PullToRefreshUtils._fireEvent=function(e,l,a,s){var r=t.Event("oj"+l);r.originalEvent=e,a.trigger(r,{content:a,distance:s})},e.PullToRefreshUtils._createDefaultContent=function(e,l,a){var s,r,o,n;e.addClass("oj-pulltorefresh-content").attr("aria-hidden","true"),(s=t(document.createElement("div"))).addClass("oj-icon oj-pulltorefresh-icon oj-pulltorefresh-icon-initial"),(r=t(document.createElement("div"))).addClass("oj-pulltorefresh-icon-container"),r.append(s),t.data(e[0],"data-lasticonclass","oj-pulltorefresh-icon-initial"),e.append(r),null!=l&&(o=t(document.createElement("div")).addClass("oj-pulltorefresh-primary-text").text(l),e.append(o),null!=a&&(n=t(document.createElement("div")).addClass("oj-pulltorefresh-secondary-text").text(a),e.append(n)))},e.PullToRefreshUtils._showHideDefaultText=function(e,t){var l,a;l=e.find(".oj-pulltorefresh-primary-text"),a=e.find(".oj-pulltorefresh-secondary-text"),t?(l&&l.show(),a&&a.show()):(l&&l.hide(),a&&a.hide())},e.PullToRefreshUtils._renderAccessibleLink=function(l,a,s,r){var o,n,i;(o=t(document.createElement("a"))).text(e.PullToRefreshUtils._getTranslatedString("oj-pullToRefresh.ariaRefreshLink")),o.addClass("oj-helper-hidden-accessible").attr("href","#").focus((function(){o.css("position","static")})).blur((function(e){null!=e.relatedTarget&&o.css("position","")})).click((function(t){n=a.children().last(),e.PullToRefreshUtils._handlePull(t,n,r),e.PullToRefreshUtils._handleRelease(t,l,n,s)})),(i=t(document.createElement("div"))).addClass("oj-helper-hidden-accessible").attr("aria-live","polite"),a.append(o),a.append(i)},e.PullToRefreshUtils._getTranslatedString=function(e){var t=a.getTranslatedString(e);if(t===e){var l="oj-ojRefresher."+e.split(".")[1];t=a.getTranslatedString(l)}return t},e.PullToRefreshUtils._cleanup=function(e){t.removeData(e[0],"data-pullstart"),t.removeData(e[0],"data-pullstart-horiz"),t.removeData(e[0],"data-loading"),t.removeData(e[0],"data-closing"),e.find(".oj-pulltorefresh-icon").length>0&&e.empty()},e.PullToRefreshUtils}));