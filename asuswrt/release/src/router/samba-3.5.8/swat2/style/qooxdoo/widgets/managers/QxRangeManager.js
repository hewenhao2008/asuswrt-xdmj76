/* Copyright (c): 2002-2005 (Germany): United Internet, 1&1, GMX, Schlund+Partner, Alturo */
function QxRangeManager(){QxTarget.call(this);};QxRangeManager.extend(QxManager,"QxRangeManager");QxRangeManager.addProperty({name:"value",type:Number,defaultValue:0});QxRangeManager.addProperty({name:"min",type:Number,defaultValue:0});QxRangeManager.addProperty({name:"max",type:Number,defaultValue:100});proto._checkValue=function(_b1){return Math.max(this.getMin(),Math.min(this.getMax(),Math.floor(_b1)));};proto._modifyValue=function(_b1,_b2,_b3,_b4){if(this.hasEventListeners("change")){this.dispatchEvent(new QxEvent("change"));};return true;};proto._checkMax=function(_b1){return Math.floor(_b1);};proto._modifyMax=function(_b1,_b2,_b3,_b4){this.setValue(Math.min(this.getValue(),_b1));if(this.hasEventListeners("change")){this.dispatchEvent(new QxEvent("change"));};return true;};proto._checkMin=function(_b1){return Math.floor(_b1);};proto._modifyMin=function(_b1,_b2,_b3,_b4){this.setValue(Math.max(this.getValue(),_b1));if(this.hasEventListeners("change")){this.dispatchEvent(new QxEvent("change"));};return true;};