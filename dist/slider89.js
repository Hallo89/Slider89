(function(g,d){typeof exports=="object"&&typeof module=="object"?module.exports=d():typeof define=="function"&&define.amd?define([],d):typeof exports=="object"?exports.Slider89=d():g.Slider89=d()})(this,()=>(()=>{var w={626:h=>{h.exports=".sl89-track{position:relative;width:200px;height:25px;background-color:hsl(0,0%,18%);}.slider89.vertical .sl89-track{height:200px;width:25px;}.sl89-thumb{position:absolute;width:16px;height:100%;background-color:hsl(0,0%,28%);cursor:pointer;}.slider89.vertical .sl89-thumb{height:16px;width:100%;}.sl89-noselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;}"}},g={};function d(h){var c=g[h];if(c!==void 0)return c.exports;var f=g[h]={exports:{}};return w[h](f,f.exports,d),f.exports}d.n=h=>{var c=h&&h.__esModule?()=>h.default:()=>h;return d.d(c,{a:c}),c},d.d=(h,c)=>{for(var f in c)d.o(c,f)&&!d.o(h,f)&&Object.defineProperty(h,f,{enumerable:!0,get:c[f]})},d.o=(h,c)=>Object.prototype.hasOwnProperty.call(h,c);var m={};return(()=>{"use strict";d.d(m,{default:()=>o});class h{static getType(e){return Array.isArray(e)?"Array":Number.isNaN(e)?"NaN":e===null?"null":typeof e}static checkTypes(e,t){let s;for(const i of t){const r=i.type;if(r==="boolean"&&typeof e=="boolean"||r==="true"&&e===!0||r==="false"&&e===!1||r==="array"&&Array.isArray(e)||r==="object"&&Object.prototype.toString.call(e)==="[object Object]"||r==="number"&&typeof e=="number"&&!Number.isNaN(e)||r==="function"&&typeof e=="function"||r==="string"&&typeof e=="string"){if(r==="array"){for(const n of e)if(s=h.checkTypes(n,i.descriptor))break}else if(r==="object"){for(const n of Object.values(e))if(s=h.checkTypes(n,i.descriptor))break}if(s)return h.toTitleCase(r)+"<"+s+">";if(s=h.buildConditionTypeMessage(i.conditions,e))break;return!1}}return s||h.getType(e)}static buildConditionTypeMessage(e,t){if(e){if(e.nonnegative&&t<0)return"a negative number";if(e.positive&&t<=0)return"a negative number or 0";if(e.integer&&t%1!==0)return"a floating point number";if(e.filled&&t.trim()==="")return"an empty string";if(e.keywords&&e.keywords.indexOf(t)===-1)return"a different string";if(e.wordChar&&!Number.isNaN(Number(t)))return"a number string";if(e.length&&t.length!==e.length)return"an array of length "+t.length;if(e.nonempty&&t.length===0)return"an empty array"}}static buildDescriptorTypeMessage(e){let t="";for(const s of e){const i=s.type;if(t&&(t+=" OR "),i==="number"){const r=s.conditions?.nonnegative,n=s.conditions?.positive,a=s.conditions?.integer;r?t+="non-negative ":n&&(t+="positive "),t+=a?"integer":"number"}else if(i==="array"){const r=h.buildDescriptorTypeMessage(s.descriptor);s.conditions?.nonempty&&(t+="non-empty "),t+="Array<"+r+">",s.conditions?.length&&(t+=" of length "+s.conditions.length)}else if(i==="object"){const r=h.buildDescriptorTypeMessage(s.descriptor);t+="Object<"+s.keyName+", "+r+">"}else i==="string"?s.conditions?.keywords?(s.conditions.keywords.length>1?t+="one of the keywords":t+="the keyword",s.conditions.keywords.forEach(function(r,n,a){n!==0&&n===a.length-1?t+=" or":n!==0&&(t+=","),t+=' "'+r+'"'})):(s.conditions?.filled&&(t+="non-empty "),s.conditions?.wordChar&&(t+="non-number "),t+="string"):t+=i;s.shape&&(t+=" ("+s.shape+")")}return t}static toTitleCase(e){return e.slice(0,1).toUpperCase()+e.slice(1)}}class c{static{this.COUNTS=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"]}static{this.Error=class extends Error{constructor(e,t,s=!1){t&&(e="@ "+t+": "+e),e[e.length-1]!==`
`&&e[e.length-1]!=="."&&(e+="."),s&&(e+=`
Aborting the slider construction.`),super(e),this.name="Slider89"+this.constructor.name}}}static{this.InitializationError=class extends c.Error{constructor(e){super(e,"constructor",!0)}}}static{this.PropertyError=class extends c.Error{constructor(e,t,s){let i=e[t];i!==void 0&&(Array.isArray(i)&&(i="["+i.join(", ")+"]"),s+=`.
Continuing with the previous value (`+i+")."),super(s,t,i===void 0)}}}static{this.PropertyTypeError=class extends c.PropertyError{constructor(e,t,s,i){let r="Type mismatch."+o.getTypeErrorMessage(s.descriptor,i);super(e,t,r)}}}static{this.MethodArgTypeError=class extends c.Error{constructor(e,t,s){const i=o.getMethodArgInfo(e,t),r="Type mismatch on the "+c.getMethodArgMessage(i,t)+"."+o.getTypeErrorMessage(i.descriptor,s);super(r,e)}}}static{this.MethodArgOmitError=class extends c.Error{constructor(e,t){const s=o.getMethodArgInfo(e,t),i="The "+c.getMethodArgMessage(s,t)+" has been omitted but it is required (It must be of type "+h.buildDescriptorTypeMessage(s.descriptor)+").";super(i,e)}}}static{this.StructureError=class extends c.Error{constructor(e){super(e,"structure",!0)}}}static{this.StructureParseError=class extends c.StructureError{constructor(e,t){const s="Something has been declared wrongly and couldn't be parsed. Point of failure (before "+e+`):

`+t+`
`;super(s)}}}static getTypeErrorMessage(e,t){return" Expected "+h.buildDescriptorTypeMessage(e)+", got "+t}static getMethodArgMessage(e,t){let s="";return e.optional&&(s+="optional "),s+=o.COUNTS[t]+" argument ("+e.name+")",s}static getMethodArgInfo(e,t){return o.methodData[e].args[t]}static arrayToListString(e){return`
 - "`+e.join(`"
 - "`)+`"
`}}var f;f||(f={});class y extends c{constructor(){super(),this.vals={},this.initial=!1,Object.defineProperties(this.vals,{$:{value:{}},$intermediateThis:{value:{}},$intermediateVals:{value:{}}})}static{this.methodData={addEvent:{args:[{name:"event type",descriptor:[{type:"string"}]},{name:"event function",descriptor:[{type:"function"}]},{name:"event namespace",optional:!0,descriptor:[{type:"string",conditions:{filled:!0,wordChar:!0}}]}]},removeEvent:{args:[{name:"event identifier/namespace",descriptor:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"string",conditions:{filled:!0,wordChar:!0}}]}]}}}static{this.propertyData={range:{isDeepDefinedArray:!0,descriptor:[{type:"array",shape:"[startValue, endValue]",conditions:{length:2},descriptor:[{type:"number"}]},{type:"boolean"}]},values:{isDeepDefinedArray:!0,descriptor:[{type:"array",descriptor:[{type:"number"}]}]},value:{descriptor:[{type:"number"}]},precision:{descriptor:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"false"}]},step:{descriptor:[{type:"number",conditions:{positive:!0}},{type:"array",conditions:{nonempty:!0},descriptor:[{type:"number"}]},{type:"false"}]},structure:{constructorOnly:!0,descriptor:[{type:"string"},{type:"false"}]},node:{readOnly:!0},nodes:{readOnly:!0},orientation:{descriptor:[{type:"string",conditions:{keywords:["horizontal","vertical"]}}]},classList:{constructorOnly:!0,descriptor:[{type:"object",shape:"{nodeName: [...classes]}",keyName:"nodeName",descriptor:[{type:"array",descriptor:[{type:"string"}]}]},{type:"false"}]},events:{constructorOnly:!0,descriptor:[{type:"object",shape:"{eventName: [...functions]}",keyName:"eventName",descriptor:[{type:"array",descriptor:[{type:"function"}]}]},{type:"false"}]},plugins:{constructorOnly:!0,descriptor:[{type:"array",descriptor:[{type:"function"}]},{type:"false"}]}}}static selfCheckMethod(e,t){const s=this.methodData[e],i=Array.prototype.slice.call(t,0,s.args.length);if(i.forEach((r,n)=>{const a=s.args[n].descriptor,l=h.checkTypes(r,a);if(l)throw new this.MethodArgTypeError(e,n,l)}),s.args[i.length]&&!("optional"in s.args[i.length]))throw new this.MethodArgOmitError(e,i.length)}}class v extends y{constructor(){super(...arguments),this.eventList={},this.eventID=0}static{this.eventTypes=["update","start","move","end"]}static{this.eventTypesSpecial={"change:$property":{prefix:"change:",fn:(e,t,s)=>{if(!Object.prototype.hasOwnProperty.call(e.vals,t)){const i="‘"+s+"’ refers to ‘"+t+"’, which isn't a recognized property. Check its spelling and be aware that custom properties need to be initialized";throw new o.Error(i,"addEvent")}}}}}static{this.availableEventTypes=this.eventTypes.concat(Object.keys(this.eventTypesSpecial))}addEvent(e,t,s){if(y.selfCheckMethod("addEvent",arguments),!this.checkEventType(e)){const n="The specified event type ‘"+e+"’ is not valid. Available types are:"+o.arrayToListString(v.availableEventTypes);throw new o.Error(n,"addEvent")}Array.isArray(this.vals.events[e])||(this.vals.events[e]=[]),this.vals.events[e].push(t);const i=s||this.eventID,r={type:e,fn:t};return s?(Array.isArray(this.eventList[i])||(this.eventList[i]=[]),this.eventList[i].push(r)):this.eventList[i]=r,s||this.eventID++}removeEvent(e){if(y.selfCheckMethod("removeEvent",arguments),!(e in this.eventList))return!1;const t=this.eventList[e];return delete this.eventList[e],Array.isArray(t)?t.reduce(this.handleRemoveEvent.bind(this),[]):this.handleRemoveEvent([],t)}handleRemoveEvent(e,t){const s=t.type,i=this.vals.events[s],r=i.splice(i.indexOf(t.fn),1)[0];return i.length===0&&delete this.vals.events[s],e.push(r),e}invokeEvent(e,...t){if(t.unshift(this),this.vals.events!==!1&&e in this.vals.events)for(const s of this.vals.events[e])s(...t)}checkEventType(e){for(const t of Object.values(v.eventTypesSpecial))if(e.startsWith(t.prefix)){const s=e.slice(t.prefix.length);return t.fn(this,s,e),!0}return v.eventTypes.includes(e)}}class k extends v{defineDeepProperty(e,t,s,i,r){Object.defineProperty(e,t,{set:n=>{if(!this.initial)var a=r?Array.from(this[t]):this[t];if(s[t]=n,r){const l=this.properties[t];this.defineDeepArrayIntermediateVals(t,n),this.defineDeepArrayIntermediateThis(t,n,l.keySetter,l.keyGetter),this.handleInternalDeepArrayChange(t,a,n)}else this.handleInternalPropertyChange(t,a);i&&i(n,a)},get:()=>(r?this.vals.$intermediateVals:s)[t],enumerable:!0})}defineDeepArrayIntermediateThis(e,t,s,i){const r=this.vals;this.vals.$intermediateThis[e]=[];for(let n=0;n<t.length;n++){const a=t[n];Object.defineProperty(this.vals.$intermediateThis[e],n,{set:l=>{(!s||!s(l,n))&&(r[e][n]=l)},get:()=>i?i(r[e][n],n):r[e][n],enumerable:!0}),this.vals.$intermediateThis[e][n]=t[n]}}defineDeepArrayIntermediateVals(e,t){const s=this.vals.$;this.vals.$intermediateVals[e]=[];for(let i=0;i<t.length;i++){const r=t[i];Object.defineProperty(this.vals.$intermediateVals[e],i,{set:n=>{if(!this.initial)var a=Array.from(this[e]);s[e][i]=n,this.handleInternalDeepArrayChange(e,a,null,i)},get:()=>s[e][i],enumerable:!0})}}handleInternalPropertyChange(e,t,s=!1){!this.initial&&(typeof this[e]=="object"||t!==this[e])&&(this.domHandler.updatePotentialVariable(e),s||(t??=this[e],this.invokeEvent("change:"+e,this[e],t)))}handleInternalDeepArrayChange(e,t,s,i){if(!this.initial)if(this.domHandler.updatePotentialVariable(e),i!=null)this.invokeDeepArrayChangeEvent(e,t,i);else for(let r=0;r<s.length;r++)this.invokeDeepArrayChangeEvent(e,t,r)}invokeDeepArrayChangeEvent(e,t,s){t[s]!==this[e][s]&&this.invokeEvent("change:"+e,this[e],t,s)}}var O=d(626),x=d.n(O);class u{constructor(e){this.structureVars={},this.thumbChildren=[],this.vals=e}static{this.specialVariables={tag_node:{getter:e=>e},thumb_index:{thumbOnly:!0,getter:(e,t,s)=>t.nodes[s].indexOf(e)},thumb_value:{thumbOnly:!0,getter:(e,t,s)=>t.values[t.nodes[s].indexOf(e)]}}}static{this.specialVariableProxy={values:["thumb_index","thumb_value"]}}static{this.regex=function(){const e={attr:{name:"[\\w-]+"},all:"[\\d\\D]",capName:"([\\w-]+)"};e.attr.value="(?:(?!<)"+e.all+")*?",e.tagType="(?:\\s+"+e.capName+")?",e.content='(?:\\s+"('+e.all+'+?)")?',e.attribs="(?:\\s+"+e.attr.name+"=\\["+e.attr.value+"\\])*",e.varContent="\\$((?:\\w+(?:\\.(?=\\w))?)+)";const t={variable:"\\{"+e.varContent+"\\}|"+e.varContent,attributes:"("+e.attr.name+")=\\[("+e.attr.value+")\\](?:\\s+|$)",tag:"<([/:])?"+e.capName+e.tagType+e.content+"("+e.attribs+")\\s*?>\\s*"},s={};for(let i in t)s[i]=new RegExp(t[i],"g");return s.variableNoFlag=new RegExp(t.variable),s}()}parseStructure(e,t){const s={slider:t};e=e.trim();for(const a in u.regex)u.regex[a].global&&(u.regex[a].lastIndex=0);const i=[];let r=0,n;for(;n=u.regex.tag.exec(e);){if(n.index!==r){const a="tag ‘<"+(n[1]||"")+n[2]+">’",l=e.slice(r,n.index).trim();throw new o.StructureParseError(a,l)}if(r=u.regex.tag.lastIndex,n[1]!=="/"){const a=i[i.length-1]||"slider",l=this.assembleElement(s,n[2],i,n[3],n[4],n[5]);s[n[2]]=l,s[a].appendChild(l),i.includes("thumb")&&this.thumbChildren.push(n[2]),n[1]==null&&i.push(n[2])}else{const a=i.pop();if(a!==n[2])if(i.indexOf(n[2])!==-1)this.closingTagError(a);else throw new o.StructureError("The closing tag ‘</"+n[2]+">’ couldn't find a matching opening tag")}}if(r!==e.length)throw new o.StructureParseError("end of string",e.slice(r));if(i.length>1)throw new o.StructureError("Couldn't find a matching closing tag for following elements:"+o.arrayToListString(i));return i.length===1&&this.closingTagError(i[0]),s}assembleElement(e,t,s,i,r,n){if(Object.prototype.hasOwnProperty.call(e,t))throw new o.StructureError("Every element must have a unique name but there are mutiple elements called ‘"+t+"’");const a=document.createElement(i||"div");if(r!=null){const l=document.createTextNode(r);l.textContent=r,a.appendChild(l),u.stringHasVariable(r)&&this.parseVariables(r,l,t,s)}if(n){let l;for(;l=u.regex.attributes.exec(n);){const N=l[1],T=l[2],E=document.createAttribute(N);E.textContent=T,a.setAttributeNode(E),u.stringHasVariable(T)&&this.parseVariables(T,E,t,s)}}return a}parseVariables(e,t,s,i){const r=[];let n;for(;n=u.regex.variable.exec(e);){const a=n[1]||n[2],l=a.indexOf(".")!==-1?a.slice(0,a.indexOf(".")):a;if(!r.hasOwnProperty(l)){if(!Object.prototype.hasOwnProperty.call(this.vals,l)&&!u.checkForSpecialVariables(l,s,i))throw new o.StructureError("‘"+l+"’ is not a recognized property and cannot be used as variable.Please check its spelling or initialize it in the constructor");this.registerVariable(l,e,t),r.push(l)}}}registerVariable(e,t,s){this.structureVars[e]==null&&(this.structureVars[e]={}),this.structureVars[e][t]==null&&(this.structureVars[e][t]=new Array),this.structureVars[e][t].push(s)}closingTagError(e){throw new o.StructureError("Couldn't find a closing tag for the element ‘<"+e+">’ (Should it be a self-closing tag marked with ‘:’?)")}static stringHasVariable(e){return u.regex.variableNoFlag.test(e)}static checkForSpecialVariables(e,t,s){if(Object.prototype.hasOwnProperty.call(u.specialVariables,e)){if(u.specialVariables[e].thumbOnly&&t!=="thumb"&&!s.includes("thumb"))throw new o.StructureError("The variable ‘$"+e+"’ may only be used inside the ‘<thumb>’ tag and its children (It was found in ‘<"+s[s.length-1]+">’)");return!0}return!1}}class p extends u{constructor(e,t){super(e),this.baseElements={},this.structureVarThumbStrings={},this.thumbEvents={},this.thumbEvents=t}static{this.hasInjectedStylesheet=!1}createSliderNode(e,t,s){return t?this.createSliderFromStructure(e,t,s):this.createSliderManually(e,s)}createSliderManually(e,t){const s=document.createElement("div"),i={slider:[t],track:[s],thumb:new Array(e)};this.thumbBase=document.createElement("div"),this.thumbParent=s;for(let r=0;r<e;r++)i.thumb[r]=this.createNewThumb();return s.classList.add("sl89-track"),t.appendChild(s),i}createSliderFromStructure(e,t,s){const i=this.parseStructure(t,s);return this.parsePostProcess(i),this.expandThumbs(i,e)}expandThumbs(e,t){const s={thumb:[]};for(const[i,r]of Object.entries(e))this.thumbChildren.includes(i)?(this.baseElements[i]=e[i],s[i]=[]):i!=="thumb"&&(s[i]=[r]);this.findStructureVarStringsInThumb(this.thumbBase);for(let i=0;i<t;i++)this.addThumbToNode(s);return s}parsePostProcess(e){e.thumb?(this.thumbBase=e.thumb,e.track&&(this.thumbParent=e.thumb.parentElement),this.baseElements.thumb=this.thumbBase):this.thumbBase=this.assembleElement(e,"thumb",[],"div"),e.track||(e.track=this.assembleElement(e,"track",[],"div"),e.thumb?e.thumb.parentNode.appendChild(e.track):e.slider.appendChild(e.track)),e.thumb&&e.thumb.parentNode.removeChild(e.thumb),this.thumbParent||(this.thumbParent=e.track),e.track.classList.add("sl89-track")}findStructureVarStringsInThumb(e){for(const[t,s]of Object.entries(this.structureVars)){let i=[];for(const[r,n]of Object.entries(s))for(const a of n)if(this.nodeHasBaseElementOwner(a)){i.push(r);break}i.length>0&&(this.structureVarThumbStrings[t]=i)}}addThumbToNode(e){const t=this.createNewThumb();e.thumb.push(t),p.findNodeChildren(t).forEach((s,i)=>{const r=this.thumbChildren[i];e[r].push(s)})}removeThumbFromNode(e){for(const t of this.thumbChildren)e[t].pop();return e.thumb.pop()}addClasses(e,t,s,i){e.classList.add("slider89"),i&&e.classList.add("vertical"),s&&this.addClassesFromClassList(t,s)}addClassesFromClassList(e,t){const s=[];for(const[i,r]of Object.entries(t))if(!Object.prototype.hasOwnProperty.call(e,i))s.push(i);else if(s.length===0){const n=e[i];for(const a of r)for(const l of Object.values(n))l.classList.add(a)}if(s.length>0){const i="The given object contains items which aren't nodes of this slider:"+o.arrayToListString(s)+"Following nodes are part of this slider's node pool:"+o.arrayToListString(Object.keys(e));throw new o.Error(i,"classList",!0)}}createNewThumb(){const e=this.thumbBase.cloneNode(!0);e.classList.add("sl89-thumb"),e.tabIndex===-1&&(e.tabIndex=0);for(const[t,s]of Object.entries(this.thumbEvents))e.addEventListener(t,s,{passive:!(t.startsWith("touch")||t.startsWith("key"))});return this.thumbParent.appendChild(e),e}nodeHasBaseElementOwner(e){for(const[t,s]of Object.entries(this.baseElements))if(p.getNodeOwner(e)===s)return t;return!1}static getNodeOwner(e){return e.ownerElement||e.parentElement}static injectStyleSheetIfNeeded(){if(p.hasInjectedStylesheet===!1){const e=document.createElement("style"),t=document.head.firstElementChild;e.textContent=x(),t?document.head.insertBefore(e,t):document.head.appendChild(e),p.hasInjectedStylesheet=!0}}static findNodeChildren(e,t=[]){if(e.childElementCount===0)return t;for(const s of e.children)t.push(s),p.findNodeChildren(s,t);return t}}class D extends p{constructor(e,t,s){super(t,s),this.slider=e}updatePotentialVariable(e){if(Object.prototype.hasOwnProperty.call(this.structureVars,e)){for(const[t,s]of Object.entries(this.structureVars[e]))this.replaceVariableStringInNodes(t,s);if(Object.prototype.hasOwnProperty.call(u.specialVariableProxy,e))for(const t of u.specialVariableProxy[e])this.updatePotentialVariable(t)}}updateAllVariables(){if(this.vals.structure!==!1)for(const e in this.structureVars)this.updatePotentialVariable(e)}expandAllBaseElementVariables(){for(const[e,t]of Object.entries(this.structureVarThumbStrings))for(const s of t){const i=this.structureVars[e][s];this.replaceVariableStringInNodes(s,i)}}replaceVariableStringInNodes(e,t){for(const[s,i,r]of this.#e(t))i.textContent=e.replace(u.regex.variable,(n,a,l)=>this.getValueFromVariableName(a||l,s,r))}getValueFromVariableName(e,t,s){const i=e.split(".").values(),r=i.next().value;let n;r in u.specialVariables?n=u.specialVariables[r].getter(t,this.slider,s):n=this.slider[r];for(const a of i)try{n=n[a]}catch{throw new o.StructureError("Variable ‘"+e+"’ cannot access property ‘"+a+"’ on "+n)}return n}*#e(e){for(const t of e){const s=this.nodeHasBaseElementOwner(t);if(s){const i=this.vals.nodes[s];if(t.nodeType===Node.ATTRIBUTE_NODE)for(const r of i)yield[r,r.getAttributeNode(t.name),s];else for(const r of i)yield[r,r.childNodes[0],s]}else yield[p.getNodeOwner(t),t,s]}}}class C extends k{constructor(){super(),this.activeTouchIDs=new Map,this.mouseStart=this.mouseStart.bind(this),this.mouseMove=this.mouseMove.bind(this),this.mouseEnd=this.mouseEnd.bind(this),this.touchStart=this.touchStart.bind(this),this.touchMove=this.touchMove.bind(this),this.touchEnd=this.touchEnd.bind(this),this.keyDown=this.keyDown.bind(this),this.domHandler=new D(this,this.vals,{touchstart:this.touchStart,mousedown:this.mouseStart,keydown:this.keyDown})}getTrackPadding(e){return parseFloat(this.trackStyle.getPropertyValue("padding-"+e))}getTrackOffset(e){return parseFloat(this.trackStyle.getPropertyValue("border-"+e+"-width"))+this.getTrackPadding(e)}getDistance(e){return this.vals.orientation==="vertical"?e.getBoundingClientRect().top-this.vals.node.track.getBoundingClientRect().top-this.getTrackOffset("top"):e.getBoundingClientRect().left-this.vals.node.track.getBoundingClientRect().left-this.getTrackOffset("left")}getAbsoluteTrackSize(e){return this.vals.orientation==="vertical"?this.vals.node.track.getBoundingClientRect().height-this.getTrackOffset("top")-this.getTrackOffset("bottom")-e.getBoundingClientRect().height:this.vals.node.track.getBoundingClientRect().width-this.getTrackOffset("left")-this.getTrackOffset("right")-e.getBoundingClientRect().width}moveThumbTranslate(e,t){const s=this.vals.orientation==="vertical"?"Y":"X";e.style.transform="translate"+s+"("+t+"px)"}moveThumbRelative(e,t){if(this.vals.orientation==="vertical")var s="top",i=this.getTrackPadding("top"),r=this.getTrackPadding("bottom"),n=e.clientHeight;else var s="left",i=this.getTrackPadding("left"),r=this.getTrackPadding("right"),n=e.clientWidth;let a=n*t+"px";r&&(a+=" - "+r*t+"px"),i&&(a+=" + "+i*(1-t)+"px"),e.style[s]="calc("+t*100+"% - "+a+")"}applyAllRatioDistances(e){for(let t=0;t<this.vals.values.length;t++)this.applyOneRatioDistance(t,e)}applyOneRatioDistance(e,t){const{value:s,prevRatio:i,ratio:r}=this.computeRatioDistance(e,t);this.setValuesWithValueChange(e,s),o.floatIsEqual(r,i)||this.moveThumbRelative(this.vals.nodes.thumb[e],r)}computeDistanceValue(e,t,s){return s==null&&(s=this.getAbsoluteTrackSize(e)),t/s*(this.vals.range[1]-this.vals.range[0])+this.vals.range[0]}computeRatioDistance(e,t){let s,i;if(!t)t=this.vals,s=this.vals.values[e];else{for(let n of["range","step"])t[n]==null&&(t[n]=this.vals[n]);t.value!=null?s=t.value:(i=(this.vals.values[e]-this.vals.range[0])/(this.vals.range[1]-this.vals.range[0]),s=(t.range[1]-t.range[0])*i+t.range[0])}t.step!==!1&&(typeof t.step=="number"?Math.abs(t.range[1]-t.range[0])<t.step?s=t.range[0]:s=t.range[0]+Math.round((s-t.range[0])/t.step)*t.step:s=o.getClosestNumber(s,t.step));const r=(s-t.range[0])/(t.range[1]-t.range[0]);return{value:s,prevRatio:i,ratio:r}}removeLastThumbNode(){const e=this.domHandler.removeThumbFromNode(this.vals.nodes);this.domHandler.thumbParent.removeChild(e)}appendNewThumbNode(){this.domHandler.addThumbToNode(this.vals.nodes),this.applyOneRatioDistance(this.vals.nodes.thumb.length-1)}changeOrientationDOM(e){e==="vertical"?(this.#e("left"),this.vals.node.slider.classList.add("vertical")):(this.#e("top"),this.vals.node.slider.classList.remove("vertical"))}#e(e){for(const t of this.vals.nodes.thumb)t.style.removeProperty(e)}setValuesWithValueChange(e,t,...s){const i=this.vals.values[e],r=this.values[e];if(!o.floatIsEqual(t,i)){this.vals.values[e]=t,e===0&&this.handleInternalPropertyChange("value",i);const n=this.values[e];return o.floatIsEqual(n,r)||this.invokeEvent("update",n,r,e,...s),!0}return!1}touchStart(e){e.preventDefault();const t=e.changedTouches[0];if(!this.activeTouchIDs.has(t.identifier)){const s=e.currentTarget;this.activeTouchIDs.set(t.identifier,s),this.slideStart(s,t,e),s.addEventListener("touchmove",this.touchMove,{passive:!1}),s.addEventListener("touchend",this.touchEnd),s.addEventListener("touchcancel",this.touchEnd)}}touchMove(e){e.preventDefault();for(const t of e.changedTouches)if(this.activeTouchIDs.has(t.identifier)){const s=this.activeTouchIDs.get(t.identifier);this.slideMove(s,t,e)}}touchEnd(e){e.preventDefault();for(const t of e.changedTouches)if(this.activeTouchIDs.has(t.identifier)){const s=this.activeTouchIDs.get(t.identifier);this.activeTouchIDs.delete(t.identifier),this.slideEnd(s,t,e),s.removeEventListener("touchmove",this.touchMove,{passive:!1}),s.removeEventListener("touchend",this.touchEnd),s.removeEventListener("touchcancel",this.touchEnd)}}mouseStart(e){const t=e.currentTarget;document.body.classList.add("sl89-noselect"),this.slideStart(t,e,e),this.activeThumb||(this.activeThumb=t,window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseEnd))}mouseMove(e){this.slideMove(this.activeThumb,e,e)}mouseEnd(e){this.slideEnd(this.activeThumb,e,e),window.removeEventListener("mousemove",this.mouseMove),window.removeEventListener("mouseup",this.mouseEnd),this.activeThumb=null}slideStart(e,t,s){const i=this.vals.nodes.thumb.indexOf(e),r=this.getDistance(e);if(e.classList.add("active"),this.vals.orientation==="vertical")var n="top",a=t.clientY;else var n="left",a=t.clientX;this.mouseDownPos=a-r,this.moveThumbTranslate(e,r),this.invokeEvent("start",i,s),e.style.removeProperty(n)}slideMove(e,t,s){const i=this.vals.nodes.thumb.indexOf(e),r=this.getAbsoluteTrackSize(e);let n=(this.vals.orientation==="vertical"?t.clientY:t.clientX)-this.mouseDownPos;n>r?n=r:n<0&&(n=0);let a=this.computeDistanceValue(e,n,r);if(this.vals.step!==!1){const l=this.computeRatioDistance(i,{value:a});a=l.value,n=l.ratio*r}this.setValuesWithValueChange(i,a,s)&&(this.moveThumbTranslate(e,n),this.invokeEvent("move",i,s))}slideEnd(e,t,s){const i=this.vals.nodes.thumb.indexOf(e);this.applyOneRatioDistance(i),e.style.removeProperty("transform"),this.invokeEvent("end",i,s),e.classList.remove("active"),document.body.classList.remove("sl89-noselect"),this.mouseDownPos=null}keyDown(e){if(!e.key.startsWith("Arrow"))return;const t=this.vals.nodes.thumb.indexOf(e.currentTarget);let s=Math.round((this.vals.range[1]-this.vals.range[0])/100);e.shiftKey&&e.ctrlKey?s*=.1:e.shiftKey&&(s*=10),e.key==="ArrowLeft"||e.key==="ArrowUp"?(e.preventDefault(),this.values[t]-=s):(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),this.values[t]+=s)}}class o extends C{constructor(e,t,s=!1){super(),this.methods={addEvent:{funct:this.addEvent},removeEvent:{funct:this.removeEvent}},this.properties={range:{default:[0,100],setter:i=>{if(i[0]===i[1])throw new o.PropertyError(this,"range","The given range of ["+i.join(", ")+"] defines the same value for both range start and end");this.initial||this.applyAllRatioDistances({range:i})},keySetter:(i,r)=>{if(i===this.vals.range[Math.abs(r-1)])throw new o.PropertyError(this,"range","The new range of ["+i+", "+i+"] defines the same value for both range start and end");if(!this.initial){const n=Array.from(this.vals.range);n[r]=i,this.applyAllRatioDistances({range:n})}}},values:{default:()=>[this.vals.range[0]],setter:i=>{if(!this.initial){if(i.length>this.vals.values.length)for(let r=this.vals.values.length;r<i.length;r++)this.appendNewThumbNode();else if(i.length<this.vals.values.length)for(let r=i.length;r<this.vals.values.length;r++)this.removeLastThumbNode()}},postSetter:(i,r)=>{if(!this.initial){const n=r.length!==i.length;this.handleInternalPropertyChange("value",r[0]),this.handleInternalPropertyChange("node",null,!n),this.handleInternalPropertyChange("nodes",null,!n),this.domHandler.expandAllBaseElementVariables()}},keySetter:(i,r)=>(i=this.adaptValueToRange(i),this.initial?this.vals.values[r]=i:this.applyOneRatioDistance(r,{value:i}),!0),keyGetter:(i,r)=>this.vals.precision!==!1?Number(i.toFixed(this.vals.precision)):i},value:{setter:i=>(this.values[0]=i,!0),getter:i=>this.values[0]},precision:{default:!1,setter:i=>{this.initial||this.applyAllRatioDistances()}},step:{default:!1,setter:i=>{if(this.vals.precision!==!1&&typeof i=="number"&&Number(i.toFixed(this.vals.precision))!==i)throw new o.PropertyError(this,"step","The given value of "+i+" exceeds the currently set precision of "+this.vals.precision);this.initial||this.applyAllRatioDistances({step:i})}},structure:{default:!1},node:{default:{}},nodes:{default:{}},orientation:{default:"horizontal",setter:i=>{if(!this.initial)return this.changeOrientationDOM(i),this.vals.orientation=i,this.applyAllRatioDistances(),!0}},classList:{default:!1},events:{default:{},setter:i=>{if(i!==!1){const r=[];for(let n in i)this.checkEventType(n)||r.push(n);if(r.length>0)throw new o.PropertyError(this,"events","The given object contains items which are no valid event types:"+o.arrayToListString(r)+"Available event types are:"+o.arrayToListString(o.availableEventTypes))}}},plugins:{default:!1}},this.initial=!0,this.testInitialTarget(e),(t==null||t===!1)&&(t={}),this.testInitialConfig(t),this.initializeClassProperties(t),this.initializeCustomProperties(t),this.buildSlider(e,s),this.applyAllRatioDistances(),this.domHandler.updateAllVariables(),this.initial=!1,this.callPlugins(this.vals.plugins)}testInitialTarget(e){if(e){if(!e.nodeType||e.nodeType!==1)throw new o.InitializationError("The first argument must be a valid DOM node (got "+h.getType(e)+")")}else throw new o.InitializationError("No first argument has been supplied. It needs to be the DOM target node for the slider")}testInitialConfig(e){if(typeof e!="object"||Array.isArray(e))throw new o.InitializationError("The optional second argument needs to be a configuration object (got "+h.getType(e)+")");if("value"in e&&"values"in e)throw new o.InitializationError("Only one of ‘value’ and ‘values’ may be defined at once")}initializeClassProperties(e){for(const[t,s]of Object.entries(this.properties))if(this.initializeProperty(t,s),t in e)this[t]=e[t],delete e[t];else if("default"in s){const i=s.default;(s.getter||s.keyGetter?this:this.vals)[t]=typeof i=="function"?i():i}}initializeCustomProperties(e){for(const t in e)if(t[0]==="_")this.defineDeepProperty(this,t,this.vals),this.vals[t]=e[t];else throw new o.InitializationError("‘"+t+"’ is not a valid property name. Check its spelling or prefix it with an underscore to use it as custom property (‘_"+t+"’)")}buildSlider(e,t){const s=t?e:document.createElement("div");this.vals.nodes=this.domHandler.createSliderNode(this.vals.values.length,this.vals.structure,s),this.defineNodeGetters(this.vals.nodes),t||e.appendChild(this.vals.node.slider),this.domHandler.addClasses(this.vals.node.slider,this.vals.nodes,this.vals.classList,this.vals.orientation==="vertical"),p.injectStyleSheetIfNeeded(),this.trackStyle=getComputedStyle(this.vals.node.track)}callPlugins(e){if(e!==!1)for(const t of e)t(this)}initializeProperty(e,t){const s=o.propertyData[e],i="isDeepDefinedArray"in s;Object.defineProperty(this,e,{set:r=>{if("readonly"in s)throw new o.Error("Property ‘"+e+"’ is read-only (It was just set with the value ‘"+r+"’)");if("constructorOnly"in s&&!this.initial)throw new o.Error("Property ‘"+e+"’ may only be defined in the constructor (It was just set with the value ‘"+r+"’)");this.checkProp(e,r),(!t.setter||!t.setter(r))&&(this.vals[e]=r)},get:()=>{const r=i?this.vals.$intermediateThis:this.vals;return t.getter?t.getter(r[e]):r[e]},enumerable:!0}),this.defineDeepProperty(this.vals,e,this.vals.$,t.postSetter,i)}defineNodeGetters(e){for(const t in e)Object.defineProperty(this.vals.node,t,{get:()=>e[t][0],enumerable:!0})}checkProp(e,t){const s=o.propertyData[e],i=h.checkTypes(t,s.descriptor);if(i)throw new o.PropertyTypeError(this,e,s,i)}adaptValueToRange(e){if(this.vals.range[0]<this.vals.range[1]){if(e<this.vals.range[0])return this.vals.range[0];if(e>this.vals.range[1])return this.vals.range[1]}else{if(e>this.vals.range[0])return this.vals.range[0];if(e<this.vals.range[1])return this.vals.range[1]}return e}static floatIsEqual(e,t){return Math.abs(e-t)<1e-11}static getClosestNumber(e,t){return t.reduce((s,i)=>Math.abs(s-e)<Math.abs(i-e)?s:i)}}})(),m=m.default,m})());
