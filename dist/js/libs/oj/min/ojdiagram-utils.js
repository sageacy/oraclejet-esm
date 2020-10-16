/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojmap"],(function(t){"use strict";var e=function(){};return e.getLayout=function(t){return function(o){var n;if(t.nodes&&o.getNodeCount()>0){var a=e._dataArrayToMap(t.nodes);n=t.nodeDefaults&&t.nodeDefaults.labelLayout?t.nodeDefaults.labelLayout:null;for(var i=0;i<o.getNodeCount();i++){var l=o.getNodeByIndex(i),s=a.get(l.getId());e._positionChildNodes(l.getChildNodes(),s?s.nodes:null,o,n),e._positionNodeAndLabel(l,s,o,n)}}if(t.links&&o.getLinkCount()>0){var r=e._dataArrayToMap(t.links),u=t.linkDefaults&&t.linkDefaults.path?t.linkDefaults.path:null;n=t.linkDefaults&&t.linkDefaults.labelLayout?t.linkDefaults.labelLayout:null;for(var d=0;d<o.getLinkCount();d++){var f=o.getLinkByIndex(d),L=r.get(f.getId());L&&L.path?f.setPoints(L.path):u&&u instanceof Function&&f.setPoints(u(o,f)),L&&L.coordinateSpace&&f.setCoordinateSpace(L.coordinateSpace),L&&L.labelLayout?e._setLabelPosition(f,L.labelLayout):n&&n instanceof Function&&e._setLabelPosition(f,n(o,f))}}if(t.viewport){var g=t.viewport;g instanceof Function?o.setViewport(g(o)):o.setViewport(g)}}},e._dataArrayToMap=function(e){var o=new t;if(e)for(var n=0;n<e.length;n++)o.set(e[n].id,e[n]);return o},e._positionChildNodes=function(t,o,n,a){if(t&&o)for(var i=e._dataArrayToMap(o),l=0;l<t.length;l++){var s=t[l],r=i.get(s.getId());e._positionChildNodes(s.getChildNodes(),r?r.nodes:null,n,a),e._positionNodeAndLabel(s,r,n,a)}},e._positionNodeAndLabel=function(t,o,n,a){t&&o&&(t.setPosition({x:o.x,y:o.y}),o.labelLayout?e._setLabelPosition(t,o.labelLayout):a&&a instanceof Function?e._setLabelPosition(t,a(n,t)):a&&e._setLabelPosition(t,a,t.getPosition()))},e._setLabelPosition=function(t,e,o){var n=o||{x:0,y:0};t.setLabelPosition({x:e.x+n.x,y:e.y+n.y});var a=e.rotationPointX,i=e.rotationPointY;isNaN(a)||isNaN(i)||t.setLabelRotationPoint({x:a+n.x,y:i+n.y}),t.setLabelRotationAngle(e.angle),t.setLabelHalign(e.halign),t.setLabelValign(e.valign)},e}));