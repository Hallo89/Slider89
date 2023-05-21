!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Slider89=t():e.Slider89=t()}(this,(function(){return function(){var e={626:function(e){e.exports=".sl89-track{position:relative;width:200px;height:25px;background-color:hsl(0,0%,18%);}.slider89.vertical .sl89-track{height:200px;width:25px;}.sl89-thumb{position:absolute;width:16px;height:100%;background-color:hsl(0,0%,28%);cursor:pointer;}.slider89.vertical .sl89-thumb{height:16px;width:100%;}.sl89-noselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;}"}},t={};function r(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var s={};return function(){"use strict";r.d(s,{default:function(){return d}});class e{static getType(e){return Array.isArray(e)?"Array":Number.isNaN(e)?"NaN":null===e?"null":typeof e}static checkTypes(t,r){let s;for(let i=0;i<r.length;i++){const n=r[i],a=n.type;if("boolean"===a&&"boolean"==typeof t||"true"===a&&!0===t||"false"===a&&!1===t||"array"===a&&Array.isArray(t)||"object"===a&&"[object Object]"===Object.prototype.toString.call(t)||"number"===a&&"number"==typeof t&&!Number.isNaN(t)||"function"===a&&"function"==typeof t||"string"===a&&"string"==typeof t){if("array"===a)for(let r=0;r<t.length&&!(s=e.checkTypes(t[r],n.descriptor));r++);else if("object"===a)for(let r in t)if(s=e.checkTypes(t[r],n.descriptor))break;if(s)return e.toTitleCase(a)+"<"+s+">";if(s=e.buildConditionTypeMessage(n.conditions,t))break;return!1}}return s||e.getType(t)}static buildConditionTypeMessage(e,t){if(e)return e.nonnegative&&t<0?"a negative number":e.positive&&t<=0?"a negative number or 0":e.integer&&t%1!=0?"a floating point number":e.filled&&""===t.trim()?"an empty string":e.keywords&&-1===e.keywords.indexOf(t)?"a different string":e.wordChar&&!Number.isNaN(Number(t))?"a number string":e.length&&t.length!==e.length?"an array of length "+t.length:void 0}static buildDescriptorTypeMessage(t){let r="";for(let s=0;s<t.length;s++){const i=t[s],n=i.type,a=i.conditions;if(r&&(r+=" OR "),"number"===n){const e=a&&a.nonnegative,t=a&&a.positive,s=a&&a.integer;e?r+="non-negative ":t&&(r+="positive "),r+=s?"integer":"number"}else if("array"===n){const t=e.buildDescriptorTypeMessage(i.descriptor);r+="Array<"+t+">",a&&a.length&&(r+=" of length "+a.length)}else if("object"===n){const t=e.buildDescriptorTypeMessage(i.descriptor);r+="Object<"+i.keyName+", "+t+">"}else"string"===n?a&&a.keywords?(a.keywords.length>1?r+="one of the keywords":r+="the keyword",a.keywords.forEach((function(e,t,s){0!==t&&t===s.length-1?r+=" or":0!==t&&(r+=","),r+=' "'+e+'"'}))):(a&&a.filled&&(r+="non-empty "),a&&a.wordChar&&(r+="non-number "),r+="string"):r+=n;i.shape&&(r+=" ("+i.shape+")")}return r}static toTitleCase(e){return e.slice(0,1).toUpperCase()+e.slice(1)}}var t=r(626),i=r.n(t);class n{static regex=function(){const e={attr:{name:"[\\w-]+"},all:"[\\d\\D]",capName:"([\\w-]+)"};e.attr.value="(?:(?!<)"+e.all+")*?",e.tagType="(?:\\s+"+e.capName+")?",e.content='(?:\\s+"('+e.all+'+?)")?',e.attribs="(?:\\s+"+e.attr.name+"=\\["+e.attr.value+"\\])*",e.varContent="\\$((?:\\w+(?:\\.(?=\\w))?)+)";const t={variable:"\\{"+e.varContent+"\\}|"+e.varContent,attributes:"("+e.attr.name+")=\\[("+e.attr.value+")\\](?:\\s+|$)",tag:"<([/:])?"+e.capName+e.tagType+e.content+"("+e.attribs+")\\s*?>\\s*"},r={};for(let e in t)r[e]=new RegExp(t[e],"g");return r.variableNoFlag=new RegExp(t.variable),r}();structureVars={};thumbChildren=[];vals;constructor(e){this.vals=e}parseStructure(e){const t={slider:document.createElement("div")};e=e.trim();for(const e in n.regex)n.regex[e].global&&(n.regex[e].lastIndex=0);const r=new Array;let s,i=0,a=!1;for(;s=n.regex.tag.exec(e);){if(s.index!==i){const t="tag ‘<"+(s[1]||"")+s[2]+">’",r=e.slice(i,s.index).trim();throw new d.StructureParseError(t,r)}if(i=n.regex.tag.lastIndex,"/"!==s[1]){const e=this.assembleElement(t,s[2],s[3],s[4],s[5]);t[s[2]]=e,t[r[r.length-1]||"slider"].appendChild(e),null==s[1]&&r.push(s[2]),"thumb"===s[2]?a=!0:!0===a&&this.thumbChildren.push(s[2])}else{const e=r.pop();if(e!==s[2]){if(-1===r.indexOf(s[2]))throw new d.StructureError("The closing tag ‘</"+s[2]+">’ couldn't find a matching opening tag");this.closingTagError(e)}"thumb"===e&&(a=!1)}}if(i!==e.length)throw new d.StructureParseError("end of string",e.slice(i));if(r.length>1)throw new d.StructureError("Couldn't find a matching closing tag for following elements:"+d.arrayToListString(r));return 1===r.length&&this.closingTagError(r[0]),t}assembleElement(e,t,r,s,i){if(t in e)throw new d.StructureError("Every element must have a unique name but there are mutiple elements called ‘"+t+"’");const a=document.createElement(r||"div");if(null!=s){const e=document.createTextNode(s);e.textContent=s,a.appendChild(e),n.stringHasVariable(s)&&this.parseVariables(s,e)}if(i){let e;for(;e=n.regex.attributes.exec(i);){const t=e[1],r=e[2],s=document.createAttribute(t);s.textContent=r,a.setAttributeNode(s),n.stringHasVariable(r)&&this.parseVariables(r,s)}}return a}parseVariables(e,t){const r=new Array;let s;for(;s=n.regex.variable.exec(e);){const i=s[1]||s[2],n=-1!==i.indexOf(".")?i.slice(0,i.indexOf(".")):i;if(!r.hasOwnProperty(n)){if(!Object.prototype.hasOwnProperty.call(this.vals,n))throw new d.StructureError("‘"+n+"’ is not a recognized property and cannot be used as variable. Please check its spelling or initialize it in the constructor");this.registerVariable(n,e,t),r.push(n)}}}registerVariable(e,t,r){null==this.structureVars[e]&&(this.structureVars[e]={}),null==this.structureVars[e][t]&&(this.structureVars[e][t]=new Array),this.structureVars[e][t].push(r)}closingTagError(e){throw new d.StructureError("Couldn't find a closing tag for the element ‘<"+e+">’ (Should it be a self-closing tag marked with ‘:’?)")}static getNodeOwner(e){return e.ownerElement||e.parentElement}static stringHasVariable(e){return n.regex.variableNoFlag.test(e)}}class a extends n{static hasInjectedStylesheet=!1;thumbBase;thumbParent;baseElements={};structureVarThumbStrings={};thumbEvents={};constructor(e,t){super(e),this.thumbEvents=t}createSliderNode(e,t){return!1===t?this.createSliderManually(e):this.createSliderFromStructure(e,t)}createSliderManually(e){const t={slider:document.createElement("div"),track:document.createElement("div"),thumb:new Array(e)};this.thumbBase=document.createElement("div"),this.thumbParent=t.track;for(let r=0;r<e;r++)t.thumb[r]=this.createNewThumb();t.slider.appendChild(t.track);for(let e in t)"slider"!==e&&"thumb"!==e&&t[e].classList.add("sl89-"+e);return t}createSliderFromStructure(e,t){const r=this.parseStructure(t);return this.parsePostProcess(r,e),r}parsePostProcess(e,t){e.thumb?(this.thumbBase=e.thumb,e.track&&(this.thumbParent=e.thumb.parentNode),this.baseElements.thumb=this.thumbBase):this.thumbBase=this.assembleElement(e,"thumb","div"),e.track||(e.track=this.assembleElement(e,"track","div"),e.thumb?e.thumb.parentNode.appendChild(e.track):e.slider.appendChild(e.track)),e.thumb&&e.thumb.parentNode.removeChild(e.thumb),this.thumbParent||(this.thumbParent=e.track),e.track.classList.add("sl89-track"),e.thumb=new Array;for(const t of this.thumbChildren)this.baseElements[t]=e[t],e[t]=new Array;this.findStructureVarStringsInThumb(this.thumbBase);for(let r=0;r<t;r++)this.addThumbToNode(e)}findStructureVarStringsInThumb(e){for(const[e,t]of Object.entries(this.structureVars)){let r=[];for(const[e,s]of Object.entries(t))for(const t of s)if(this.nodeHasBaseElementOwner(t)){r.push(e);break}r.length>0&&(this.structureVarThumbStrings[e]=r)}}addThumbToNode(e){const t=this.createNewThumb();e.thumb.push(t),a.findNodeChildren(t).forEach(((t,r)=>{const s=this.thumbChildren[r];e[s].push(t)}))}removeThumbFromNode(e){for(const t of this.thumbChildren)e[t].pop();return e.thumb.pop()}addAttributesFromTarget(e,t){const r=t.attributes;for(let t=0;t<r.length;t++)e.slider.setAttribute(r[t].name,r[t].value)}addClasses(e,t,r){e.slider.classList.add("slider89"),r&&e.slider.classList.add("vertical"),t&&this.addClassesFromClassList(e,t)}addClassesFromClassList(e,t){const r=new Array;for(let s in t){const i=t[s];if(Object.prototype.hasOwnProperty.call(e,s)){if(0===r.length)for(let t=0;t<i.length;t++)if("thumb"===s)for(let r=0;r<e[s].length;r++)e[s][r].classList.add(i[t]);else e[s].classList.add(i[t])}else r.push(s)}if(r.length>0){const t="The given object contains items which aren't nodes of this slider:"+d.arrayToListString(r)+"Following nodes are part of this slider's node pool:"+d.arrayToListString(Object.keys(e));throw new d.Error(t,"classList",!0)}}createNewThumb(){const e=this.thumbBase.cloneNode(!0);e.classList.add("sl89-thumb"),null==e.tabindex&&(e.tabIndex=0);for(const[t,r]of Object.entries(this.thumbEvents))e.addEventListener(t,r,{passive:!t.startsWith("touch")});return this.thumbParent.appendChild(e),e}nodeHasBaseElementOwner(e){for(const[t,r]of Object.entries(this.baseElements))if(n.getNodeOwner(e)===r)return t;return!1}static injectStyleSheetIfNeeded(){if(!1===a.hasInjectedStylesheet){const e=document.createElement("style"),t=document.head.firstElementChild;e.textContent=i(),t?document.head.insertBefore(e,t):document.head.appendChild(e),a.hasInjectedStylesheet=!0}}static findNodeChildren(e,t=[]){if(0===e.childElementCount)return t;for(const r of e.children)t.push(r),a.findNodeChildren(r,t);return t}}class o{static COUNTS=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"];static Error=class extends Error{constructor(e,t,r=!1){t&&(e="@ "+t+": "+e),"\n"!==e[e.length-1]&&"."!==e[e.length-1]&&(e+="."),r&&(e+="\nAborting the slider construction."),super(e),this.name="Slider89"+this.constructor.name}};static InitializationError=class extends o.Error{constructor(e){super(e,"constructor",!0)}};static PropertyError=class extends o.Error{constructor(e,t,r){let s=e[t];void 0!==s&&(Array.isArray(s)&&(s="["+s.join(", ")+"]"),r+=".\nContinuing with the previous value ("+s+")."),super(r,t,void 0===s)}};static PropertyTypeError=class extends o.PropertyError{constructor(e,t,r,s){super(e,t,"Type mismatch."+d.getTypeErrorMessage(r.descriptor,s))}};static MethodArgTypeError=class extends o.Error{constructor(e,t,r){const s=d.getMethodArgInfo(e,t);super("Type mismatch on the "+o.getMethodArgMessage(s,t)+"."+d.getTypeErrorMessage(s.descriptor,r),e)}};static MethodArgOmitError=class extends o.Error{constructor(t,r){const s=d.getMethodArgInfo(t,r);super("The "+o.getMethodArgMessage(s,r)+" has been omitted but it is required (It must be of type "+e.buildDescriptorTypeMessage(s.descriptor)+").",t)}};static StructureError=class extends o.Error{constructor(e){super(e,"structure",!0)}};static StructureParseError=class extends o.StructureError{constructor(e,t){super("Something has been declared wrongly and couldn't be parsed. Point of failure (before "+e+"):\n\n"+t+"\n")}};static getTypeErrorMessage(t,r){return" Expected "+e.buildDescriptorTypeMessage(t)+", got "+r}static getMethodArgMessage(e,t){let r="";return e.optional&&(r+="optional "),r+=d.COUNTS[t]+" argument ("+e.name+")",r}static getMethodArgInfo(e,t){return d.methodData[e].args[t]}static arrayToListString(e){return'\n - "'+e.join('"\n - "')+'"\n'}}class l extends o{static methodData={addEvent:{args:[{name:"event type",descriptor:[{type:"string"}]},{name:"event function",descriptor:[{type:"function"}]},{name:"event namespace",optional:!0,descriptor:[{type:"string",conditions:{filled:!0,wordChar:!0}}]}]},removeEvent:{args:[{name:"event identifier/namespace",descriptor:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"string",conditions:{filled:!0,wordChar:!0}}]}]}};static propertyData={range:{isDeepDefinedArray:!0,descriptor:[{type:"array",shape:"[startValue, endValue]",conditions:{length:2},descriptor:[{type:"number"}]},{type:"boolean"}]},values:{isDeepDefinedArray:!0,descriptor:[{type:"array",descriptor:[{type:"number"}]}]},value:{descriptor:[{type:"number"}]},precision:{descriptor:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"false"}]},step:{descriptor:[{type:"number",conditions:{positive:!0}},{type:"false"}]},structure:{constructorOnly:!0,descriptor:[{type:"string",conditions:{filled:!0}},{type:"false"}]},node:{readOnly:!0},orientation:{descriptor:[{type:"string",conditions:{keywords:["horizontal","vertical"]}}]},classList:{constructorOnly:!0,descriptor:[{type:"object",shape:"{nodeName: [...classes]}",keyName:"nodeName",descriptor:[{type:"array",descriptor:[{type:"string"}]}]},{type:"false"}]},events:{constructorOnly:!0,descriptor:[{type:"object",shape:"{eventName: [...functions]}",keyName:"eventName",descriptor:[{type:"array",descriptor:[{type:"function"}]}]},{type:"false"}]}};methods;properties;vals={};initial=!1;constructor(){super(),Object.defineProperties(this.vals,{$:{value:{}},$intermediateThis:{value:{}},$intermediateVals:{value:{}}})}}class h extends l{static eventTypes=["start","move","end","change:$property"];eventList={};eventID=0;addEvent(e,t,r){if(!this.checkEventType(e))throw new d.Error("The specified event type ‘"+e+"’ is not valid. Available types are:"+d.arrayToListString(h.eventTypes),"addEvent");Array.isArray(this.vals.events[e])||(this.vals.events[e]=new Array),this.vals.events[e].push(t);const s=r||this.eventID,i={type:e,fn:t};return r?(Array.isArray(this.eventList[s])||(this.eventList[s]=new Array),this.eventList[s].push(i)):this.eventList[s]=i,r||this.eventID++}removeEvent(e){const t=this.eventList[e];return!!t&&(delete this.eventList[e],Array.isArray(t)?t.reduce(this.handleRemoveEvent.bind(this),new Array):this.handleRemoveEvent(new Array,t))}handleRemoveEvent(e,t){const r=this.vals.events[t.type],s=r.splice(r.indexOf(t.fn),1)[0];return 0===r.length&&delete this.vals.events[t.type],e.push(s),e}invokeEvent(e){const t=Array.from(arguments);t[0]=this;for(let r=0;r<e.length;r++){const s=this.vals.events[e[r]];if(s)for(let e=0;e<s.length;e++)s[e].apply(this,t)}}checkEventType(e){if(0===e.indexOf("change:")){const t=e.slice("change:".length);if(!Object.prototype.hasOwnProperty.call(this.vals,t)){const r="‘"+e+"’ refers to ‘"+t+"’, which isn't a recognized property. Check its spelling and be aware that custom properties need to be initialized";throw new d.Error(r,"addEvent")}}else if(-1===h.eventTypes.indexOf(e))return!1;return!0}}class c extends h{defineDeepProperty(e,t,r,s,i){Object.defineProperty(e,t,{set:e=>{if(!this.initial)var n=i?Array.from(this[t]):this[t];r[t]=e,i?(this.defineDeepArrayIntermediateVals(t,e),this.defineDeepArrayIntermediateThis(t,e,this.properties[t].keySetter,this.properties[t].keyGetter),this.handleInternalDeepArrayChange(t,n,e)):this.handleInternalPropertyChange(t,n),s&&s(e,n)},get:()=>(i?this.vals.$intermediateVals:r)[t],enumerable:!0})}defineDeepArrayIntermediateThis(e,t,r,s){const i=this.vals;this.vals.$intermediateThis[e]=[];for(let n=0;n<t.length;n++)t[n],Object.defineProperty(this.vals.$intermediateThis[e],n,{set:function(t){r&&r(t,n)||(i[e][n]=t)},get:function(){return s?s(i[e][n],n):i[e][n]},enumerable:!0}),this.vals.$intermediateThis[e][n]=t[n]}defineDeepArrayIntermediateVals(e,t){const r=this.vals.$;this.vals.$intermediateVals[e]=[];for(let s=0;s<t.length;s++)t[s],Object.defineProperty(this.vals.$intermediateVals[e],s,{set:t=>{if(!this.initial)var i=Array.from(this[e]);r[e][s]=t,this.handleInternalDeepArrayChange(e,i,null,s)},get:()=>r[e][s],enumerable:!0})}handleInternalPropertyChange(e,t){this.initial||"object"!=typeof this[e]&&t===this[e]||(this.updatePotentialStructureVar(e),this.invokeEvent(["change:"+e],t))}handleInternalDeepArrayChange(e,t,r,s){if(!this.initial)if(this.updatePotentialStructureVar(e),null!=s)this.invokeDeepArrayChangeEvent(e,t,s);else for(let s=0;s<r.length;s++)this.invokeDeepArrayChangeEvent(e,t,s)}invokeDeepArrayChangeEvent(e,t,r){t[r]!==this[e][r]&&this.invokeEvent(["change:"+e],t,r)}updatePotentialStructureVar(e){if(Object.prototype.hasOwnProperty.call(this.domBuilder.structureVars,e))for(const[t,r]of Object.entries(this.domBuilder.structureVars[e]))this.replaceStructureVarString(t,r)}replaceStructureVarString(e,t){const r=e.replace(n.regex.variable,((e,t,r)=>this.getValueFromStructureVar(t||r)));for(const e of t)this.replaceStructureVarInNode(e,r)}replaceStructureVarInNode(e,t){const r=this.domBuilder.nodeHasBaseElementOwner(e);if(r){const s=this.vals.node[r];e.nodeType===Node.ATTRIBUTE_NODE?s.forEach((r=>{r.getAttributeNode(e.name).textContent=t})):s.forEach((e=>{e.childNodes[0].textContent=t}))}else e.textContent=t}getValueFromStructureVar(e){const t=e.split(".");let r=this[t[0]];if(t.length>1)for(let s=1;s<t.length;s++)try{r=r[t[s]]}catch(i){throw new d.StructureError("Variable ‘"+e+"’ cannot access property ‘"+t[s]+"’ on "+r)}return r}}class u extends c{activeTouchIDs=new Map;activeThumb;mouseDownPos;trackStyle;domBuilder;constructor(){super(),this.mouseStart=this.mouseStart.bind(this),this.mouseMove=this.mouseMove.bind(this),this.mouseEnd=this.mouseEnd.bind(this),this.touchStart=this.touchStart.bind(this),this.touchMove=this.touchMove.bind(this),this.touchEnd=this.touchEnd.bind(this),this.keyDown=this.keyDown.bind(this),this.domBuilder=new a(this.vals,{touchstart:this.touchStart,mousedown:this.mouseStart,keydown:this.keyDown})}getTrackPadding(e){return parseFloat(this.trackStyle["padding"+e])}getTrackOffset(e){return parseFloat(this.trackStyle["border"+e+"Width"])+this.getTrackPadding(e)}getDistance(e){return"vertical"===this.vals.orientation?e.getBoundingClientRect().top-this.vals.node.track.getBoundingClientRect().top-this.getTrackOffset("Top"):e.getBoundingClientRect().left-this.vals.node.track.getBoundingClientRect().left-this.getTrackOffset("Left")}getAbsoluteTrackSize(e){return"vertical"===this.vals.orientation?this.vals.node.track.getBoundingClientRect().height-this.getTrackOffset("Top")-this.getTrackOffset("Bottom")-e.getBoundingClientRect().height:this.vals.node.track.getBoundingClientRect().width-this.getTrackOffset("Left")-this.getTrackOffset("Right")-e.getBoundingClientRect().width}moveThumbTranslate(e,t){const r="vertical"===this.vals.orientation?"Y":"X";e.style.transform="translate"+r+"("+t+"px)"}moveThumbRelative(e,t){if("vertical"===this.vals.orientation)var r=this.getTrackPadding("Top"),s=this.getTrackPadding("Bottom"),i=e.clientHeight,n="top";else r=this.getTrackPadding("Left"),s=this.getTrackPadding("Right"),i=e.clientWidth,n="left";let a=i*t+"px";s&&(a+=" - "+s*t+"px"),r&&(a+=" + "+r*(1-t)+"px"),e.style[n]="calc("+100*t+"% - "+a+")"}applyAllRatioDistances(e){for(let t=0;t<this.vals.values.length;t++)this.applyOneRatioDistance(t,e)}applyOneRatioDistance(e,t){const{value:r,prevRatio:s,ratio:i}=this.computeRatioDistance(e,t);this.setValuesWithValueChange(e,r),d.floatIsEqual(i,s)||this.moveThumbRelative(this.vals.node.thumb[e],i)}computeDistanceValue(e,t,r){return null==r&&(r=this.getAbsoluteTrackSize(e)),t/r*(this.vals.range[1]-this.vals.range[0])+this.vals.range[0]}computeRatioDistance(e,t){let r,s;if(t){const i=["range","step"];for(let e in i)null==t[i[e]]&&(t[i[e]]=this.vals[i[e]]);null!=t.value?r=t.value:(s=(this.vals.values[e]-this.vals.range[0])/(this.vals.range[1]-this.vals.range[0]),r=(t.range[1]-t.range[0])*s+t.range[0])}else t=this.vals,r=this.vals.values[e];return!1!==t.step&&(r=Math.abs(t.range[1]-t.range[0])<t.step?t.range[0]:t.range[0]+Math.round((r-t.range[0])/t.step)*t.step),{value:r,prevRatio:s,ratio:(r-t.range[0])/(t.range[1]-t.range[0])}}removeLastThumbNode(){const e=this.domBuilder.removeThumbFromNode(this.vals.node);this.domBuilder.thumbParent.removeChild(e)}addNewThumbNode(e){this.domBuilder.addThumbToNode(this.vals.node),this.applyOneRatioDistance(e);for(const[e,t]of Object.entries(this.domBuilder.structureVarThumbStrings))for(const r of t){const t=this.domBuilder.structureVars[e][r];this.replaceStructureVarString(r,t)}}setValuesWithValueChange(e,t){const r=this.vals.values[e];return!d.floatIsEqual(t,r)&&(this.vals.values[e]=t,0===e&&this.handleInternalPropertyChange("value",r),!0)}touchStart(e){e.preventDefault();const t=e.changedTouches[0];if(!this.activeTouchIDs.has(t.identifier)){const r=e.target;this.activeTouchIDs.set(t.identifier,r),this.slideStart(r,t,e),r.addEventListener("touchmove",this.touchMove),r.addEventListener("touchend",this.touchEnd),r.addEventListener("touchcancel",this.touchEnd)}}touchMove(e){e.preventDefault();for(const t of e.changedTouches)if(this.activeTouchIDs.has(t.identifier)){const r=this.activeTouchIDs.get(t.identifier);this.slideMove(r,t,e)}}touchEnd(e){e.preventDefault();for(const t of e.changedTouches)if(this.activeTouchIDs.has(t.identifier)){const r=this.activeTouchIDs.get(t.identifier);this.activeTouchIDs.delete(t.identifier),this.slideEnd(r,t,e),r.removeEventListener("touchmove",this.touchMove),r.removeEventListener("touchend",this.touchEnd),r.removeEventListener("touchcancel",this.touchEnd)}}mouseStart(e){const t=e.currentTarget;document.body.classList.add("sl89-noselect"),this.slideStart(t,e),this.activeThumb||(this.activeThumb=t,window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseEnd))}mouseMove(e){this.slideMove(this.activeThumb,e)}mouseEnd(e){this.slideEnd(this.activeThumb,e),window.removeEventListener("mousemove",this.mouseMove),window.removeEventListener("mouseup",this.mouseEnd),this.mouseDownPos=null,this.activeThumb=null}slideStart(e,t,r=t){if(e.classList.add("active"),"vertical"===this.vals.orientation)var s="top",i=t.clientY;else s="left",i=t.clientX;const n=this.getDistance(e);this.mouseDownPos=i-n,this.moveThumbTranslate(e,n),e.style.removeProperty(s)}slideMove(e,t,r=t){const s=this.vals.node.thumb.indexOf(e),i=this.getAbsoluteTrackSize(e);let n=("vertical"===this.vals.orientation?t.clientY:t.clientX)-this.mouseDownPos;n>i?n=i:n<0&&(n=0);let a=this.computeDistanceValue(e,n,i);if(!1!==this.vals.step){const e=this.computeRatioDistance(s,{value:a});a=e.value,n=e.ratio*i}this.setValuesWithValueChange(s,a)&&(this.moveThumbTranslate(e,n),this.invokeEvent(["move"],r))}slideEnd(e,t,r=t){const s=this.vals.node.thumb.indexOf(e);this.applyOneRatioDistance(s),e.style.removeProperty("transform"),this.invokeEvent(["end"],r),e.classList.remove("active"),document.body.classList.remove("sl89-noselect")}keyDown(e){if(!e.key.startsWith("Arrow"))return;const t=this.vals.node.thumb.indexOf(e.currentTarget);let r=Math.round((this.vals.range[1]-this.vals.range[0])/100);e.shiftKey&&e.ctrlKey?r*=.1:e.shiftKey&&(r*=10),"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),this.values[t]-=r):"ArrowRight"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),this.values[t]+=r)}}class d extends u{methods={addEvent:{function:this.addEvent},removeEvent:{function:this.removeEvent}};properties={range:{default:[0,100],setter:e=>{if(e[0]===e[1])throw new d.PropertyError(this,"range","The given range of ["+e.join(", ")+"] defines the same value for both range start and end");this.initial||this.applyAllRatioDistances({range:e})},keySetter:(e,t)=>{if(e===this.vals.range[Math.abs(t-1)])throw new d.PropertyError(this,"range","The new range of ["+e+", "+e+"] defines the same value for both range start and end");if(!this.initial){const r=Array.from(this.vals.range);r[t]=e,this.applyAllRatioDistances({range:r})}}},values:{default:()=>[this.vals.range[0]],setter:e=>{if(!this.initial)if(e.length>this.vals.values.length)for(let t=this.vals.values.length;t<e.length;t++)this.addNewThumbNode(t);else if(e.length<this.vals.values.length)for(let t=e.length;t<this.vals.values.length;t++)this.removeLastThumbNode()},postSetter:(e,t)=>{this.initial||this.handleInternalPropertyChange("value",t[0])},keySetter:(e,t)=>(e=this.adaptValueToRange(e),this.initial?this.vals.values[t]=e:(0===t&&this.value,this.applyOneRatioDistance(t,{value:e})),!0),keyGetter:(e,t)=>!1!==this.vals.precision?Number(e.toFixed(this.vals.precision)):e},value:{setter:e=>(this.values[0]=e,!0),getter:e=>this.values[0]},precision:{default:!1,setter:e=>{this.initial||this.applyAllRatioDistances({precision:e})}},step:{default:!1,setter:e=>{if(!1!==this.vals.precision&&!1!==e&&Number(e.toFixed(this.vals.precision))!==e)throw new d.PropertyError(this,"step","The given value of "+e+" exceeds the currently set precision of "+this.vals.precision);this.initial||this.applyAllRatioDistances({step:e})}},structure:{default:!1},node:{default:{}},orientation:{default:"horizontal",setter:e=>{if(!this.initial)return"vertical"===e?(this.vals.node.thumb.style.removeProperty("left"),this.vals.node.slider.classList.add("vertical")):(this.vals.node.thumb.style.removeProperty("top"),this.vals.node.slider.classList.remove("vertical")),this.vals.orientation=e,this.applyAllRatioDistances(),!0}},classList:{default:!1},events:{default:{},setter:e=>{const t=new Array;for(let r in e)this.checkEventType(r)||t.push(r);if(t.length>0)throw new d.PropertyError(this,"events","The given object contains items which are no valid event types:"+d.arrayToListString(t)+"Available event types are:"+d.arrayToListString(d.eventTypes))}}};constructor(e,t,r=!1){if(super(),this.initial=!0,this.testInitialTarget(e),null!=t&&!1!==t||(t={}),this.testInitialConfig(t),this.initializeClassProperties(t),this.initializeCustomProperties(t),this.initializeMethods(),this.buildSlider(e,r),this.applyAllRatioDistances(),!1!==this.vals.structure)for(let e in this.domBuilder.structureVars)this.updatePotentialStructureVar(e);this.initial=!1}testInitialTarget(t){if(!t)throw new d.InitializationError("No first argument has been supplied. It needs to be the DOM target node for the slider");if(!t.nodeType||1!==t.nodeType)throw new d.InitializationError("The first argument must be a valid DOM node (got "+e.getType(t)+")")}testInitialConfig(t){if("object"!=typeof t||Array.isArray(t))throw new d.InitializationError("The optional second argument needs to be a configuration object (got "+e.getType(t)+")");if("value"in t&&"values"in t)throw new d.InitializationError("Only one of ‘value’ and ‘values’ may be defined at once")}initializeClassProperties(e){for(let t in this.properties){const r=t,s=this.properties[r],i=d.propertyData[r];if(Object.defineProperty(this,r,{set:e=>{if(i.readOnly)throw new d.Error("Property ‘"+r+"’ is read-only (It was just set with the value ‘"+e+"’)");if(i.constructorOnly&&!this.initial)throw new d.Error("Property ‘"+r+"’ may only be defined in the constructor (It was just set with the value ‘"+e+"’)");this.checkProp(r,e),s.setter&&s.setter(e)||(this.vals[r]=e)},get:()=>{const e=i.isDeepDefinedArray?this.vals.$intermediateThis:this.vals;return s.getter?s.getter(e[r]):e[r]},enumerable:!0}),this.defineDeepProperty(this.vals,r,this.vals.$,s.postSetter,i.isDeepDefinedArray),r in e)this[r]=e[r],delete e[r];else if("default"in s){const e=s.default;(s.getter||s.keyGetter?this:this.vals)[r]="function"==typeof e?e():e}}}initializeCustomProperties(e){for(let t in e){const r=t;if("_"!==r[0])throw new d.InitializationError("‘"+r+"’ is not a valid property name. Check its spelling or prefix it with an underscore to use it as custom property (‘_"+r+"’)");this.defineDeepProperty(this,r,this.vals),this.vals[r]=e[r]}}initializeMethods(){const e=this;for(let t in this.methods){const r=t,s=this.methods[r],i=d.methodData[r].args.length;this[r]=function(){const t=Array.prototype.slice.call(arguments,0,i);return e.checkMethod(r,t),s.function.apply(this,t)}}}buildSlider(e,t){this.vals.node=this.domBuilder.createSliderNode(this.vals.values.length,this.vals.structure),t&&this.domBuilder.addAttributesFromTarget(this.vals.node,e),this.domBuilder.addClasses(this.vals.node,this.vals.classList,"vertical"===this.vals.orientation),a.injectStyleSheetIfNeeded(),t?e.parentNode.replaceChild(this.vals.node.slider,e):e.appendChild(this.vals.node.slider),this.trackStyle=getComputedStyle(this.vals.node.track)}checkMethod(t,r){const s=d.methodData[t];for(let i in r){const n=r[i],a=e.checkTypes(n,s.args[i].descriptor);if(a)throw new d.MethodArgTypeError(t,i,a)}if(s.args[r.length]&&!s.args[r.length].optional)throw new d.MethodArgOmitError(t,r.length)}checkProp(t,r){const s=d.propertyData[t],i=e.checkTypes(r,s.descriptor);if(i)throw new d.PropertyTypeError(this,t,s,i)}adaptValueToRange(e){if(this.vals.range[0]<this.vals.range[1]){if(e<this.vals.range[0])return this.vals.range[0];if(e>this.vals.range[1])return this.vals.range[1]}else{if(e>this.vals.range[0])return this.vals.range[0];if(e<this.vals.range[1])return this.vals.range[1]}return e}static floatIsEqual(e,t){return Math.abs(e-t)<1e-11}}}(),s.default}()}));