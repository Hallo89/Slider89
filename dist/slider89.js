!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Slider89=t():e.Slider89=t()}(this,(function(){return function(){var e={626:function(e){e.exports=".sl89-track{position:relative;width:200px;height:25px;background-color:hsl(0,0%,18%);}.slider89.vertical .sl89-track{height:200px;width:25px;}.sl89-thumb{position:absolute;width:16px;height:100%;background-color:hsl(0,0%,28%);cursor:pointer;}.slider89.vertical .sl89-thumb{height:16px;width:100%;}.sl89-noselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;}"}},t={};function s(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r={};return function(){"use strict";s.d(r,{default:function(){return x}});class e{static getType(e){return Array.isArray(e)?"Array":Number.isNaN(e)?"NaN":null===e?"null":typeof e}static checkTypes(t,s){let r;for(let i=0;i<s.length;i++){const n=s[i],a=n.type;if("boolean"===a&&"boolean"==typeof t||"true"===a&&!0===t||"false"===a&&!1===t||"array"===a&&Array.isArray(t)||"object"===a&&"[object Object]"===Object.prototype.toString.call(t)||"number"===a&&"number"==typeof t&&!Number.isNaN(t)||"function"===a&&"function"==typeof t||"string"===a&&"string"==typeof t){if("array"===a)for(let s=0;s<t.length&&!(r=e.checkTypes(t[s],n.descriptor));s++);else if("object"===a)for(let s in t)if(r=e.checkTypes(t[s],n.descriptor))break;if(r)return e.toTitleCase(a)+"<"+r+">";if(r=e.buildConditionTypeMessage(n.conditions,t))break;return!1}}return r||e.getType(t)}static buildConditionTypeMessage(e,t){if(e)return e.nonnegative&&t<0?"a negative number":e.positive&&t<=0?"a negative number or 0":e.integer&&t%1!=0?"a floating point number":e.filled&&""===t.trim()?"an empty string":e.keywords&&-1===e.keywords.indexOf(t)?"a different string":e.wordChar&&!Number.isNaN(Number(t))?"a number string":e.length&&t.length!==e.length?"an array of length "+t.length:e.nonempty&&0===t.length?"an empty array":void 0}static buildDescriptorTypeMessage(t){let s="";for(let r=0;r<t.length;r++){const i=t[r],n=i.type,a=i.conditions;if(s&&(s+=" OR "),"number"===n){const e=a&&a.nonnegative,t=a&&a.positive,r=a&&a.integer;e?s+="non-negative ":t&&(s+="positive "),s+=r?"integer":"number"}else if("array"===n){const t=e.buildDescriptorTypeMessage(i.descriptor);a&&a.nonempty&&(s+="non-empty "),s+="Array<"+t+">",a&&a.length&&(s+=" of length "+a.length)}else if("object"===n){const t=e.buildDescriptorTypeMessage(i.descriptor);s+="Object<"+i.keyName+", "+t+">"}else"string"===n?a&&a.keywords?(a.keywords.length>1?s+="one of the keywords":s+="the keyword",a.keywords.forEach((function(e,t,r){0!==t&&t===r.length-1?s+=" or":0!==t&&(s+=","),s+=' "'+e+'"'}))):(a&&a.filled&&(s+="non-empty "),a&&a.wordChar&&(s+="non-number "),s+="string"):s+=n;i.shape&&(s+=" ("+i.shape+")")}return s}static toTitleCase(e){return e.slice(0,1).toUpperCase()+e.slice(1)}}class t{static getTypeErrorMessage(t,s){return" Expected "+e.buildDescriptorTypeMessage(t)+", got "+s}static getMethodArgMessage(e,t){let s="";return e.optional&&(s+="optional "),s+=x.COUNTS[t]+" argument ("+e.name+")",s}static getMethodArgInfo(e,t){return x.methodData[e].args[t]}static arrayToListString(e){return'\n - "'+e.join('"\n - "')+'"\n'}}t.COUNTS=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"],t.Error=class extends Error{constructor(e,t,s=!1){t&&(e="@ "+t+": "+e),"\n"!==e[e.length-1]&&"."!==e[e.length-1]&&(e+="."),s&&(e+="\nAborting the slider construction."),super(e),this.name="Slider89"+this.constructor.name}},t.InitializationError=class extends t.Error{constructor(e){super(e,"constructor",!0)}},t.PropertyError=class extends t.Error{constructor(e,t,s){let r=e[t];void 0!==r&&(Array.isArray(r)&&(r="["+r.join(", ")+"]"),s+=".\nContinuing with the previous value ("+r+")."),super(s,t,void 0===r)}},t.PropertyTypeError=class extends t.PropertyError{constructor(e,t,s,r){super(e,t,"Type mismatch."+x.getTypeErrorMessage(s.descriptor,r))}},t.MethodArgTypeError=class extends t.Error{constructor(e,s,r){const i=x.getMethodArgInfo(e,s);super("Type mismatch on the "+t.getMethodArgMessage(i,s)+"."+x.getTypeErrorMessage(i.descriptor,r),e)}},t.MethodArgOmitError=class extends t.Error{constructor(s,r){const i=x.getMethodArgInfo(s,r);super("The "+t.getMethodArgMessage(i,r)+" has been omitted but it is required (It must be of type "+e.buildDescriptorTypeMessage(i.descriptor)+").",s)}},t.StructureError=class extends t.Error{constructor(e){super(e,"structure",!0)}},t.StructureParseError=class extends t.StructureError{constructor(e,t){super("Something has been declared wrongly and couldn't be parsed. Point of failure (before "+e+"):\n\n"+t+"\n")}};var i,n=t;i||(i={});class a extends n{constructor(){super(),this.vals={},this.initial=!1,Object.defineProperties(this.vals,{$:{value:{}},$intermediateThis:{value:{}},$intermediateVals:{value:{}}})}}a.methodData={addEvent:{args:[{name:"event type",descriptor:[{type:"string"}]},{name:"event function",descriptor:[{type:"function"}]},{name:"event namespace",optional:!0,descriptor:[{type:"string",conditions:{filled:!0,wordChar:!0}}]}]},removeEvent:{args:[{name:"event identifier/namespace",descriptor:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"string",conditions:{filled:!0,wordChar:!0}}]}]}},a.propertyData={range:{isDeepDefinedArray:!0,descriptor:[{type:"array",shape:"[startValue, endValue]",conditions:{length:2},descriptor:[{type:"number"}]},{type:"boolean"}]},values:{isDeepDefinedArray:!0,descriptor:[{type:"array",descriptor:[{type:"number"}]}]},value:{descriptor:[{type:"number"}]},precision:{descriptor:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"false"}]},step:{descriptor:[{type:"number",conditions:{positive:!0}},{type:"array",conditions:{nonempty:!0},descriptor:[{type:"number"}]},{type:"false"}]},structure:{constructorOnly:!0,descriptor:[{type:"string"},{type:"false"}]},node:{readOnly:!0},nodes:{readOnly:!0},orientation:{descriptor:[{type:"string",conditions:{keywords:["horizontal","vertical"]}}]},classList:{constructorOnly:!0,descriptor:[{type:"object",shape:"{nodeName: [...classes]}",keyName:"nodeName",descriptor:[{type:"array",descriptor:[{type:"string"}]}]},{type:"false"}]},events:{constructorOnly:!0,descriptor:[{type:"object",shape:"{eventName: [...functions]}",keyName:"eventName",descriptor:[{type:"array",descriptor:[{type:"function"}]}]},{type:"false"}]}};var o,l=a;class h extends l{constructor(){super(...arguments),this.eventList={},this.eventID=0}addEvent(e,t,s){if(!this.checkEventType(e)){const t="The specified event type ‘"+e+"’ is not valid. Available types are:"+x.arrayToListString(o.availableEventTypes);throw new x.Error(t,"addEvent")}Array.isArray(this.vals.events[e])||(this.vals.events[e]=[]),this.vals.events[e].push(t);const r=s||this.eventID,i={type:e,fn:t};return s?(Array.isArray(this.eventList[r])||(this.eventList[r]=[]),this.eventList[r].push(i)):this.eventList[r]=i,s||this.eventID++}removeEvent(e){if(!(e in this.eventList))return!1;const t=this.eventList[e];return delete this.eventList[e],Array.isArray(t)?t.reduce(this.handleRemoveEvent.bind(this),[]):this.handleRemoveEvent([],t)}handleRemoveEvent(e,t){const s=t.type,r=this.vals.events[s],i=r.splice(r.indexOf(t.fn),1)[0];return 0===r.length&&delete this.vals.events[s],e.push(i),e}invokeEvent(e,...t){if(t.unshift(this),!1!==this.vals.events&&e in this.vals.events)for(const s of this.vals.events[e])s(...t)}checkEventType(e){for(const t of Object.values(o.eventTypesSpecial))if(e.startsWith(t.prefix)){const s=e.slice(t.prefix.length);return t.fn(this,s,e),!0}return o.eventTypes.includes(e)}}o=h,h.eventTypes=["update","start","move","end"],h.eventTypesSpecial={"change:$property":{prefix:"change:",fn:(e,t,s)=>{if(!Object.prototype.hasOwnProperty.call(e.vals,t)){const e="‘"+s+"’ refers to ‘"+t+"’, which isn't a recognized property. Check its spelling and be aware that custom properties need to be initialized";throw new x.Error(e,"addEvent")}}}},h.availableEventTypes=o.eventTypes.concat(Object.keys(o.eventTypesSpecial));var c=h;class d extends c{defineDeepProperty(e,t,s,r,i){Object.defineProperty(e,t,{set:e=>{if(!this.initial)var n=i?Array.from(this[t]):this[t];if(s[t]=e,i){const s=this.properties[t];this.defineDeepArrayIntermediateVals(t,e),this.defineDeepArrayIntermediateThis(t,e,s.keySetter,s.keyGetter),this.handleInternalDeepArrayChange(t,n,e)}else this.handleInternalPropertyChange(t,n);r&&r(e,n)},get:()=>(i?this.vals.$intermediateVals:s)[t],enumerable:!0})}defineDeepArrayIntermediateThis(e,t,s,r){const i=this.vals;this.vals.$intermediateThis[e]=[];for(let n=0;n<t.length;n++)t[n],Object.defineProperty(this.vals.$intermediateThis[e],n,{set:t=>{s&&s(t,n)||(i[e][n]=t)},get:()=>r?r(i[e][n],n):i[e][n],enumerable:!0}),this.vals.$intermediateThis[e][n]=t[n]}defineDeepArrayIntermediateVals(e,t){const s=this.vals.$;this.vals.$intermediateVals[e]=[];for(let r=0;r<t.length;r++)t[r],Object.defineProperty(this.vals.$intermediateVals[e],r,{set:t=>{if(!this.initial)var i=Array.from(this[e]);s[e][r]=t,this.handleInternalDeepArrayChange(e,i,null,r)},get:()=>s[e][r],enumerable:!0})}handleInternalPropertyChange(e,t,s=!1){this.initial||"object"!=typeof this[e]&&t===this[e]||(this.domHandler.updatePotentialVariable(e),s||(null!=t||(t=this[e]),this.invokeEvent("change:"+e,this[e],t)))}handleInternalDeepArrayChange(e,t,s,r){if(!this.initial)if(this.domHandler.updatePotentialVariable(e),null!=r)this.invokeDeepArrayChangeEvent(e,t,r);else for(let r=0;r<s.length;r++)this.invokeDeepArrayChangeEvent(e,t,r)}invokeDeepArrayChangeEvent(e,t,s){t[s]!==this[e][s]&&this.invokeEvent("change:"+e,this[e],t,s)}}var u=s(626),p=s.n(u);class v{constructor(e){this.structureVars={},this.thumbChildren=[],this.vals=e}parseStructure(e,t){const s={slider:t};e=e.trim();for(const e in v.regex)v.regex[e].global&&(v.regex[e].lastIndex=0);const r=[];let i,n=0;for(;i=v.regex.tag.exec(e);){if(i.index!==n){const t="tag ‘<"+(i[1]||"")+i[2]+">’",s=e.slice(n,i.index).trim();throw new x.StructureParseError(t,s)}if(n=v.regex.tag.lastIndex,"/"!==i[1]){const e=r[r.length-1]||"slider",t=this.assembleElement(s,i[2],r,i[3],i[4],i[5]);s[i[2]]=t,s[e].appendChild(t),r.includes("thumb")&&this.thumbChildren.push(i[2]),null==i[1]&&r.push(i[2])}else{const e=r.pop();if(e!==i[2]){if(-1===r.indexOf(i[2]))throw new x.StructureError("The closing tag ‘</"+i[2]+">’ couldn't find a matching opening tag");this.closingTagError(e)}}}if(n!==e.length)throw new x.StructureParseError("end of string",e.slice(n));if(r.length>1)throw new x.StructureError("Couldn't find a matching closing tag for following elements:"+x.arrayToListString(r));return 1===r.length&&this.closingTagError(r[0]),s}assembleElement(e,t,s,r,i,n){if(Object.prototype.hasOwnProperty.call(e,t))throw new x.StructureError("Every element must have a unique name but there are mutiple elements called ‘"+t+"’");const a=document.createElement(r||"div");if(null!=i){const e=document.createTextNode(i);e.textContent=i,a.appendChild(e),v.stringHasVariable(i)&&this.parseVariables(i,e,t,s)}if(n){let e;for(;e=v.regex.attributes.exec(n);){const r=e[1],i=e[2],n=document.createAttribute(r);n.textContent=i,a.setAttributeNode(n),v.stringHasVariable(i)&&this.parseVariables(i,n,t,s)}}return a}parseVariables(e,t,s,r){const i=[];let n;for(;n=v.regex.variable.exec(e);){const a=n[1]||n[2],o=-1!==a.indexOf(".")?a.slice(0,a.indexOf(".")):a;if(!i.hasOwnProperty(o)){if(!Object.prototype.hasOwnProperty.call(this.vals,o)&&!v.checkForSpecialVariables(o,s,r))throw new x.StructureError("‘"+o+"’ is not a recognized property and cannot be used as variable.Please check its spelling or initialize it in the constructor");this.registerVariable(o,e,t),i.push(o)}}}registerVariable(e,t,s){null==this.structureVars[e]&&(this.structureVars[e]={}),null==this.structureVars[e][t]&&(this.structureVars[e][t]=new Array),this.structureVars[e][t].push(s)}closingTagError(e){throw new x.StructureError("Couldn't find a closing tag for the element ‘<"+e+">’ (Should it be a self-closing tag marked with ‘:’?)")}static stringHasVariable(e){return v.regex.variableNoFlag.test(e)}static checkForSpecialVariables(e,t,s){if(Object.prototype.hasOwnProperty.call(v.specialVariables,e)){if(v.specialVariables[e].thumbOnly&&"thumb"!==t&&!s.includes("thumb"))throw new x.StructureError("The variable ‘$"+e+"’ may only be used inside the ‘<thumb>’ tag and its children (It was found in ‘<"+s[s.length-1]+">’)");return!0}return!1}}v.specialVariables={tag_node:{getter:e=>e},thumb_index:{thumbOnly:!0,getter:(e,t,s)=>t.nodes[s].indexOf(e)},thumb_value:{thumbOnly:!0,getter:(e,t,s)=>t.values[t.nodes[s].indexOf(e)]}},v.specialVariableProxy={values:["thumb_index","thumb_value"]},v.regex=function(){const e={attr:{name:"[\\w-]+"},all:"[\\d\\D]",capName:"([\\w-]+)"};e.attr.value="(?:(?!<)"+e.all+")*?",e.tagType="(?:\\s+"+e.capName+")?",e.content='(?:\\s+"('+e.all+'+?)")?',e.attribs="(?:\\s+"+e.attr.name+"=\\["+e.attr.value+"\\])*",e.varContent="\\$((?:\\w+(?:\\.(?=\\w))?)+)";const t={variable:"\\{"+e.varContent+"\\}|"+e.varContent,attributes:"("+e.attr.name+")=\\[("+e.attr.value+")\\](?:\\s+|$)",tag:"<([/:])?"+e.capName+e.tagType+e.content+"("+e.attribs+")\\s*?>\\s*"},s={};for(let e in t)s[e]=new RegExp(t[e],"g");return s.variableNoFlag=new RegExp(t.variable),s}();var f=v;class g extends f{constructor(e,t){super(e),this.baseElements={},this.structureVarThumbStrings={},this.thumbEvents={},this.thumbEvents=t}createSliderNode(e,t,s){return t?this.createSliderFromStructure(e,t,s):this.createSliderManually(e,s)}createSliderManually(e,t){const s=document.createElement("div"),r={slider:[t],track:[s],thumb:new Array(e)};this.thumbBase=document.createElement("div"),this.thumbParent=s;for(let t=0;t<e;t++)r.thumb[t]=this.createNewThumb();return s.classList.add("sl89-track"),t.appendChild(s),r}createSliderFromStructure(e,t,s){const r=this.parseStructure(t,s);return this.parsePostProcess(r),this.expandThumbs(r,e)}expandThumbs(e,t){const s={thumb:[]};for(const[t,r]of Object.entries(e))this.thumbChildren.includes(t)?(this.baseElements[t]=e[t],s[t]=[]):"thumb"!==t&&(s[t]=[r]);this.findStructureVarStringsInThumb(this.thumbBase);for(let e=0;e<t;e++)this.addThumbToNode(s);return s}parsePostProcess(e){e.thumb?(this.thumbBase=e.thumb,e.track&&(this.thumbParent=e.thumb.parentElement),this.baseElements.thumb=this.thumbBase):this.thumbBase=this.assembleElement(e,"thumb",[],"div"),e.track||(e.track=this.assembleElement(e,"track",[],"div"),e.thumb?e.thumb.parentNode.appendChild(e.track):e.slider.appendChild(e.track)),e.thumb&&e.thumb.parentNode.removeChild(e.thumb),this.thumbParent||(this.thumbParent=e.track),e.track.classList.add("sl89-track")}findStructureVarStringsInThumb(e){for(const[e,t]of Object.entries(this.structureVars)){let s=[];for(const[e,r]of Object.entries(t))for(const t of r)if(this.nodeHasBaseElementOwner(t)){s.push(e);break}s.length>0&&(this.structureVarThumbStrings[e]=s)}}addThumbToNode(e){const t=this.createNewThumb();e.thumb.push(t),g.findNodeChildren(t).forEach(((t,s)=>{const r=this.thumbChildren[s];e[r].push(t)}))}removeThumbFromNode(e){for(const t of this.thumbChildren)e[t].pop();return e.thumb.pop()}addClasses(e,t,s,r){e.classList.add("slider89"),r&&e.classList.add("vertical"),s&&this.addClassesFromClassList(t,s)}addClassesFromClassList(e,t){const s=[];for(const[r,i]of Object.entries(t))if(Object.prototype.hasOwnProperty.call(e,r)){if(0===s.length){const t=e[r];for(const e of i)for(const s of Object.values(t))s.classList.add(e)}}else s.push(r);if(s.length>0){const t="The given object contains items which aren't nodes of this slider:"+x.arrayToListString(s)+"Following nodes are part of this slider's node pool:"+x.arrayToListString(Object.keys(e));throw new x.Error(t,"classList",!0)}}createNewThumb(){const e=this.thumbBase.cloneNode(!0);e.classList.add("sl89-thumb"),-1===e.tabIndex&&(e.tabIndex=0);for(const[t,s]of Object.entries(this.thumbEvents))e.addEventListener(t,s,{passive:!(t.startsWith("touch")||t.startsWith("key"))});return this.thumbParent.appendChild(e),e}nodeHasBaseElementOwner(e){for(const[t,s]of Object.entries(this.baseElements))if(g.getNodeOwner(e)===s)return t;return!1}static getNodeOwner(e){return e.ownerElement||e.parentElement}static injectStyleSheetIfNeeded(){if(!1===g.hasInjectedStylesheet){const e=document.createElement("style"),t=document.head.firstElementChild;e.textContent=p(),t?document.head.insertBefore(e,t):document.head.appendChild(e),g.hasInjectedStylesheet=!0}}static findNodeChildren(e,t=[]){if(0===e.childElementCount)return t;for(const s of e.children)t.push(s),g.findNodeChildren(s,t);return t}}g.hasInjectedStylesheet=!1;var m,y,b=g;m=new WeakSet,y=function*(e){for(const t of e){const e=this.nodeHasBaseElementOwner(t);if(e){const s=this.vals.nodes[e];if(t.nodeType===Node.ATTRIBUTE_NODE)for(const r of s)yield[r,r.getAttributeNode(t.name),e];else for(const t of s)yield[t,t.childNodes[0],e]}else{const s=b.getNodeOwner(t);yield[s,t,e]}}};var w,T,E=class extends b{constructor(e,t,s){super(t,s),m.add(this),this.slider=e}updatePotentialVariable(e){if(Object.prototype.hasOwnProperty.call(this.structureVars,e)){for(const[t,s]of Object.entries(this.structureVars[e]))this.replaceVariableStringInNodes(t,s);if(Object.prototype.hasOwnProperty.call(f.specialVariableProxy,e))for(const t of f.specialVariableProxy[e])this.updatePotentialVariable(t)}}updateAllVariables(){if(!1!==this.vals.structure)for(const e in this.structureVars)this.updatePotentialVariable(e)}expandAllBaseElementVariables(){for(const[e,t]of Object.entries(this.structureVarThumbStrings))for(const s of t){const t=this.structureVars[e][s];this.replaceVariableStringInNodes(s,t)}}replaceVariableStringInNodes(e,t){for(const[s,r,i]of function(e,t,s,r){if("a"===s&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?r:"a"===s?r.call(e):r?r.value:t.get(e)}(this,m,"m",y).call(this,t))r.textContent=e.replace(f.regex.variable,((e,t,r)=>this.getValueFromVariableName(t||r,s,i)))}getValueFromVariableName(e,t,s){const r=e.split(".").values(),i=r.next().value;let n;n=i in f.specialVariables?f.specialVariables[i].getter(t,this.slider,s):this.slider[i];for(const t of r)try{n=n[t]}catch(s){throw new x.StructureError("Variable ‘"+e+"’ cannot access property ‘"+t+"’ on "+n)}return n}},k=function(e,t,s,r){if("a"===s&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?r:"a"===s?r.call(e):r?r.value:t.get(e)};w=new WeakSet,T=function(e){for(const t of this.vals.nodes.thumb)t.style.removeProperty(e)};var O=class extends d{constructor(){super(),w.add(this),this.activeTouchIDs=new Map,this.mouseStart=this.mouseStart.bind(this),this.mouseMove=this.mouseMove.bind(this),this.mouseEnd=this.mouseEnd.bind(this),this.touchStart=this.touchStart.bind(this),this.touchMove=this.touchMove.bind(this),this.touchEnd=this.touchEnd.bind(this),this.keyDown=this.keyDown.bind(this),this.domHandler=new E(this,this.vals,{touchstart:this.touchStart,mousedown:this.mouseStart,keydown:this.keyDown})}getTrackPadding(e){return parseFloat(this.trackStyle.getPropertyValue("padding-"+e))}getTrackOffset(e){return parseFloat(this.trackStyle.getPropertyValue("border-"+e+"-width"))+this.getTrackPadding(e)}getDistance(e){return"vertical"===this.vals.orientation?e.getBoundingClientRect().top-this.vals.node.track.getBoundingClientRect().top-this.getTrackOffset("top"):e.getBoundingClientRect().left-this.vals.node.track.getBoundingClientRect().left-this.getTrackOffset("left")}getAbsoluteTrackSize(e){return"vertical"===this.vals.orientation?this.vals.node.track.getBoundingClientRect().height-this.getTrackOffset("top")-this.getTrackOffset("bottom")-e.getBoundingClientRect().height:this.vals.node.track.getBoundingClientRect().width-this.getTrackOffset("left")-this.getTrackOffset("right")-e.getBoundingClientRect().width}moveThumbTranslate(e,t){const s="vertical"===this.vals.orientation?"Y":"X";e.style.transform="translate"+s+"("+t+"px)"}moveThumbRelative(e,t){if("vertical"===this.vals.orientation)var s="top",r=this.getTrackPadding("top"),i=this.getTrackPadding("bottom"),n=e.clientHeight;else s="left",r=this.getTrackPadding("left"),i=this.getTrackPadding("right"),n=e.clientWidth;let a=n*t+"px";i&&(a+=" - "+i*t+"px"),r&&(a+=" + "+r*(1-t)+"px"),e.style[s]="calc("+100*t+"% - "+a+")"}applyAllRatioDistances(e){for(let t=0;t<this.vals.values.length;t++)this.applyOneRatioDistance(t,e)}applyOneRatioDistance(e,t){const{value:s,prevRatio:r,ratio:i}=this.computeRatioDistance(e,t);this.setValuesWithValueChange(e,s),x.floatIsEqual(i,r)||this.moveThumbRelative(this.vals.nodes.thumb[e],i)}computeDistanceValue(e,t,s){return null==s&&(s=this.getAbsoluteTrackSize(e)),t/s*(this.vals.range[1]-this.vals.range[0])+this.vals.range[0]}computeRatioDistance(e,t){let s,r;if(t){for(let e of["range","step"])null==t[e]&&(t[e]=this.vals[e]);null!=t.value?s=t.value:(r=(this.vals.values[e]-this.vals.range[0])/(this.vals.range[1]-this.vals.range[0]),s=(t.range[1]-t.range[0])*r+t.range[0])}else t=this.vals,s=this.vals.values[e];return!1!==t.step&&(s="number"==typeof t.step?Math.abs(t.range[1]-t.range[0])<t.step?t.range[0]:t.range[0]+Math.round((s-t.range[0])/t.step)*t.step:x.getClosestNumber(s,t.step)),{value:s,prevRatio:r,ratio:(s-t.range[0])/(t.range[1]-t.range[0])}}removeLastThumbNode(){const e=this.domHandler.removeThumbFromNode(this.vals.nodes);this.domHandler.thumbParent.removeChild(e)}addNewThumbNode(e){this.domHandler.addThumbToNode(this.vals.nodes),this.applyOneRatioDistance(e)}changeOrientationDOM(e){"vertical"===e?(k(this,w,"m",T).call(this,"left"),this.vals.node.slider.classList.add("vertical")):(k(this,w,"m",T).call(this,"top"),this.vals.node.slider.classList.remove("vertical"))}setValuesWithValueChange(e,t,...s){const r=this.vals.values[e],i=this.values[e];if(!x.floatIsEqual(t,r)){this.vals.values[e]=t,0===e&&this.handleInternalPropertyChange("value",r);const n=this.values[e];return x.floatIsEqual(n,i)||this.invokeEvent("update",n,i,e,...s),!0}return!1}touchStart(e){e.preventDefault();const t=e.changedTouches[0];if(!this.activeTouchIDs.has(t.identifier)){const s=e.currentTarget;this.activeTouchIDs.set(t.identifier,s),this.slideStart(s,t,e),s.addEventListener("touchmove",this.touchMove,{passive:!1}),s.addEventListener("touchend",this.touchEnd),s.addEventListener("touchcancel",this.touchEnd)}}touchMove(e){e.preventDefault();for(const t of e.changedTouches)if(this.activeTouchIDs.has(t.identifier)){const s=this.activeTouchIDs.get(t.identifier);this.slideMove(s,t,e)}}touchEnd(e){e.preventDefault();for(const t of e.changedTouches)if(this.activeTouchIDs.has(t.identifier)){const s=this.activeTouchIDs.get(t.identifier);this.activeTouchIDs.delete(t.identifier),this.slideEnd(s,t,e),s.removeEventListener("touchmove",this.touchMove,{passive:!1}),s.removeEventListener("touchend",this.touchEnd),s.removeEventListener("touchcancel",this.touchEnd)}}mouseStart(e){const t=e.currentTarget;document.body.classList.add("sl89-noselect"),this.slideStart(t,e,e),this.activeThumb||(this.activeThumb=t,window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseEnd))}mouseMove(e){this.slideMove(this.activeThumb,e,e)}mouseEnd(e){this.slideEnd(this.activeThumb,e,e),window.removeEventListener("mousemove",this.mouseMove),window.removeEventListener("mouseup",this.mouseEnd),this.activeThumb=null}slideStart(e,t,s){const r=this.vals.nodes.thumb.indexOf(e),i=this.getDistance(e);if(e.classList.add("active"),"vertical"===this.vals.orientation)var n="top",a=t.clientY;else n="left",a=t.clientX;this.mouseDownPos=a-i,this.moveThumbTranslate(e,i),this.invokeEvent("start",r,s),e.style.removeProperty(n)}slideMove(e,t,s){const r=this.vals.nodes.thumb.indexOf(e),i=this.getAbsoluteTrackSize(e);let n=("vertical"===this.vals.orientation?t.clientY:t.clientX)-this.mouseDownPos;n>i?n=i:n<0&&(n=0);let a=this.computeDistanceValue(e,n,i);if(!1!==this.vals.step){const e=this.computeRatioDistance(r,{value:a});a=e.value,n=e.ratio*i}this.setValuesWithValueChange(r,a,s)&&(this.moveThumbTranslate(e,n),this.invokeEvent("move",r,s))}slideEnd(e,t,s){const r=this.vals.nodes.thumb.indexOf(e);this.applyOneRatioDistance(r),e.style.removeProperty("transform"),this.invokeEvent("end",r,s),e.classList.remove("active"),document.body.classList.remove("sl89-noselect"),this.mouseDownPos=null}keyDown(e){if(!e.key.startsWith("Arrow"))return;const t=this.vals.nodes.thumb.indexOf(e.currentTarget);let s=Math.round((this.vals.range[1]-this.vals.range[0])/100);e.shiftKey&&e.ctrlKey?s*=.1:e.shiftKey&&(s*=10),"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),this.values[t]-=s):"ArrowRight"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),this.values[t]+=s)}};class x extends O{constructor(e,t,s=!1){super(),this.methods={addEvent:{funct:this.addEvent},removeEvent:{funct:this.removeEvent}},this.properties={range:{default:[0,100],setter:e=>{if(e[0]===e[1])throw new x.PropertyError(this,"range","The given range of ["+e.join(", ")+"] defines the same value for both range start and end");this.initial||this.applyAllRatioDistances({range:e})},keySetter:(e,t)=>{if(e===this.vals.range[Math.abs(t-1)])throw new x.PropertyError(this,"range","The new range of ["+e+", "+e+"] defines the same value for both range start and end");if(!this.initial){const s=Array.from(this.vals.range);s[t]=e,this.applyAllRatioDistances({range:s})}}},values:{default:()=>[this.vals.range[0]],setter:e=>{if(!this.initial)if(e.length>this.vals.values.length)for(let t=this.vals.values.length;t<e.length;t++)this.addNewThumbNode(t);else if(e.length<this.vals.values.length)for(let t=e.length;t<this.vals.values.length;t++)this.removeLastThumbNode()},postSetter:(e,t)=>{if(!this.initial){const s=t.length!==e.length;this.handleInternalPropertyChange("value",t[0]),this.handleInternalPropertyChange("node",null,!s),this.handleInternalPropertyChange("nodes",null,!s),this.domHandler.expandAllBaseElementVariables()}},keySetter:(e,t)=>(e=this.adaptValueToRange(e),this.initial?this.vals.values[t]=e:this.applyOneRatioDistance(t,{value:e}),!0),keyGetter:(e,t)=>!1!==this.vals.precision?Number(e.toFixed(this.vals.precision)):e},value:{setter:e=>(this.values[0]=e,!0),getter:e=>this.values[0]},precision:{default:!1,setter:e=>{this.initial||this.applyAllRatioDistances()}},step:{default:!1,setter:e=>{if(!1!==this.vals.precision&&"number"==typeof e&&Number(e.toFixed(this.vals.precision))!==e)throw new x.PropertyError(this,"step","The given value of "+e+" exceeds the currently set precision of "+this.vals.precision);this.initial||this.applyAllRatioDistances({step:e})}},structure:{default:!1},node:{default:{}},nodes:{default:{}},orientation:{default:"horizontal",setter:e=>{if(!this.initial)return this.changeOrientationDOM(e),this.vals.orientation=e,this.applyAllRatioDistances(),!0}},classList:{default:!1},events:{default:{},setter:e=>{if(!1!==e){const t=[];for(let s in e)this.checkEventType(s)||t.push(s);if(t.length>0)throw new x.PropertyError(this,"events","The given object contains items which are no valid event types:"+x.arrayToListString(t)+"Available event types are:"+x.arrayToListString(x.availableEventTypes))}}}},this.initial=!0,this.testInitialTarget(e),null!=t&&!1!==t||(t={}),this.testInitialConfig(t),this.initializeClassProperties(t),this.initializeCustomProperties(t),this.initializeMethods(),this.buildSlider(e,s),this.applyAllRatioDistances(),this.domHandler.updateAllVariables(),this.initial=!1}testInitialTarget(t){if(!t)throw new x.InitializationError("No first argument has been supplied. It needs to be the DOM target node for the slider");if(!t.nodeType||1!==t.nodeType)throw new x.InitializationError("The first argument must be a valid DOM node (got "+e.getType(t)+")")}testInitialConfig(t){if("object"!=typeof t||Array.isArray(t))throw new x.InitializationError("The optional second argument needs to be a configuration object (got "+e.getType(t)+")");if("value"in t&&"values"in t)throw new x.InitializationError("Only one of ‘value’ and ‘values’ may be defined at once")}initializeClassProperties(e){for(const[t,s]of Object.entries(this.properties))if(this.initializeProperty(t,s),t in e)this[t]=e[t],delete e[t];else if("default"in s){const e=s.default;(s.getter||s.keyGetter?this:this.vals)[t]="function"==typeof e?e():e}}initializeCustomProperties(e){for(const t in e){if("_"!==t[0])throw new x.InitializationError("‘"+t+"’ is not a valid property name. Check its spelling or prefix it with an underscore to use it as custom property (‘_"+t+"’)");this.defineDeepProperty(this,t,this.vals),this.vals[t]=e[t]}}initializeMethods(){const e=this;for(const[t,s]of Object.entries(this.methods)){const r=x.methodData[t].args.length;this[t]=function(){const i=Array.prototype.slice.call(arguments,0,r);return e.checkMethod(t,i),s.funct.apply(this,i)}}}buildSlider(e,t){const s=t?e:document.createElement("div");this.vals.nodes=this.domHandler.createSliderNode(this.vals.values.length,this.vals.structure,s),this.defineNodeGetters(this.vals.nodes),t||e.appendChild(this.vals.node.slider),this.domHandler.addClasses(this.vals.node.slider,this.vals.nodes,this.vals.classList,"vertical"===this.vals.orientation),b.injectStyleSheetIfNeeded(),this.trackStyle=getComputedStyle(this.vals.node.track)}initializeProperty(e,t){const s=x.propertyData[e],r="isDeepDefinedArray"in s;Object.defineProperty(this,e,{set:r=>{if("readonly"in s)throw new x.Error("Property ‘"+e+"’ is read-only (It was just set with the value ‘"+r+"’)");if("constructorOnly"in s&&!this.initial)throw new x.Error("Property ‘"+e+"’ may only be defined in the constructor (It was just set with the value ‘"+r+"’)");this.checkProp(e,r),t.setter&&t.setter(r)||(this.vals[e]=r)},get:()=>{const s=r?this.vals.$intermediateThis:this.vals;return t.getter?t.getter(s[e]):s[e]},enumerable:!0}),this.defineDeepProperty(this.vals,e,this.vals.$,t.postSetter,r)}defineNodeGetters(e){for(const t in e)Object.defineProperty(this.vals.node,t,{get:()=>e[t][0],enumerable:!0})}checkMethod(t,s){const r=x.methodData[t];for(let i=0;i<s.length;i++){const n=s[i],a=e.checkTypes(n,r.args[i].descriptor);if(a)throw new x.MethodArgTypeError(t,i,a)}if(r.args[s.length]&&!r.args[s.length].optional)throw new x.MethodArgOmitError(t,s.length)}checkProp(t,s){const r=x.propertyData[t],i=e.checkTypes(s,r.descriptor);if(i)throw new x.PropertyTypeError(this,t,r,i)}adaptValueToRange(e){if(this.vals.range[0]<this.vals.range[1]){if(e<this.vals.range[0])return this.vals.range[0];if(e>this.vals.range[1])return this.vals.range[1]}else{if(e>this.vals.range[0])return this.vals.range[0];if(e<this.vals.range[1])return this.vals.range[1]}return e}static floatIsEqual(e,t){return Math.abs(e-t)<1e-11}static getClosestNumber(e,t){return t.reduce(((t,s)=>Math.abs(t-e)<Math.abs(s-e)?t:s))}}}(),r.default}()}));