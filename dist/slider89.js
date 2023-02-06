!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Slider89=t():e.Slider89=t()}(this,(function(){return function(){var e={977:function(e){e.exports=[".sl89-track{position:relative;width:200px;height:25px;background-color:hsl(0,0%,18%);",".slider89.vertical .sl89-track{height:200px;width:25px;",".sl89-thumb{position:absolute;width:16px;height:100%;background-color:hsl(0,0%,28%);cursor:pointer;",".slider89.vertical .sl89-thumb{height:16px;width:100%;",".sl89-noselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;"]}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var i={};return function(){"use strict";s.d(i,{default:function(){return u}});class e extends class extends class{propError(e,t,s){if(!this.initial){let s=this.vals[e];Array.isArray(s)&&(s="["+s.join(", ")+"]"),t+=".\nContinuing with the previous value ("+s+")."}this.error(t,!s&&e)}methodError(e,t,s,i){const r=this.methods[e].args[t];let n="the "+(r.optional?"optional ":"")+["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"][t]+" argument ("+r.name+") ";i&&(n+="has been omitted but it is required. It "),n+="must be "+this.typeCheck.computeTypeMsg(r.structure),i||(n+=" but it"+s),this.error(n,e)}error(e,t,s){throw"\n"!==(e="Slider89"+(t?" @ "+t:"")+": "+e)[e.length-1]&&"."!==e[e.length-1]&&(e+=".\n"),(this.initial||s)&&(e+="Aborting the slider construction."),new Error(e)}}{methods;properties;vals={};initial=!1;constructor(){super(),Object.defineProperties(this.vals,{$:{value:{}},$intermediateThis:{value:{}},$intermediateVals:{value:{}}})}}{static eventTypes=["start","move","end","change:$property"];eventList={};eventID=0;addEvent(t,s,i){this.checkEventType(t)||this.error("the specified type ‘"+t+"’ is not a valid event type. Available types are:"+enlistArray(e.eventTypes),"addEvent"),Array.isArray(this.vals.events[t])||(this.vals.events[t]=new Array),this.vals.events[t].push(s);const r=i||this.eventID,n={type:t,fn:s};return i?(Array.isArray(this.eventList[r])||(this.eventList[r]=new Array),this.eventList[r].push(n)):this.eventList[r]=n,i||this.eventID++}removeEvent(e){const t=this.eventList[e];return!!t&&(delete this.eventList[e],Array.isArray(t)?t.reduce(s,new Array):s(new Array,t));function s(e,t){const s=this.vals.events[t.type],i=s.splice(s.indexOf(t.fn),1)[0];return 0===s.length&&delete this.vals.events[t.type],e.push(i),e}}invokeEvent(e){const t=Array.from(arguments);t[0]=this;for(let s=0;s<e.length;s++){const i=this.vals.events[e[s]];if(i)for(let e=0;e<i.length;e++)i[e].apply(this,t)}}checkEventType(t){if(0===t.indexOf("change:")){const e=t.slice("change:".length);Object.prototype.hasOwnProperty.call(this.vals,e)||this.error("‘"+t+"’ refers to ‘"+e+"’, which isn't a recognized property. Check its spelling and be aware that custom properties need to be initialized","addEvent")}else if(-1===e.eventTypes.indexOf(t))return!1;return!0}}class t{static regex=function(){const e={attr:{name:"[\\w-]+"},all:"[\\d\\D]",capName:"([\\w-]+)"};e.attr.value="(?:(?!<)"+e.all+")*?",e.tagType="(?:\\s+"+e.capName+")?",e.content='(?:\\s+"('+e.all+'+?)")?',e.attribs="(?:\\s+"+e.attr.name+"=\\["+e.attr.value+"\\])*",e.varContent="\\$((?:\\w+(?:\\.(?=\\w))?)+)";const t={variable:"\\{"+e.varContent+"\\}|"+e.varContent,attributes:"("+e.attr.name+")=\\[("+e.attr.value+")\\](?:\\s+|$)",tag:"<([/:])?"+e.capName+e.tagType+e.content+"("+e.attribs+")\\s*?>\\s*"},s={};for(let e in t)s[e]=new RegExp(t[e],"g");return s.variableNoFlag=new RegExp(t.variable),s}();structureVars={};vals;constructor(e){this.vals=e}parseStructure(e){const s={slider:document.createElement("div")};e=e.trim();for(const e in t.regex)t.regex[e].global&&(t.regex[e].lastIndex=0);const i=new Array;let r,n=0;for(;r=t.regex.tag.exec(e);)if(r.index!==n&&this.parseError("tag ‘<"+(r[1]||"")+r[2]+">’",e.slice(n,r.index).trim()),n=t.regex.tag.lastIndex,"/"!==r[1]){const e=this.assembleElement(s,r[2],r[3],r[4],r[5]);s[r[2]]=e,s[i[i.length-1]||"slider"].appendChild(e),null==r[1]&&i.push(r[2])}else{const e=i.pop();e!==r[2]&&(-1!==i.indexOf(r[2])?this.closingTagError(e):propError("structure","the closing tag ‘</"+r[2]+">’ couldn't find a matching opening tag"))}return n!==e.length&&this.parseError("end of string",e.slice(n)),i.length>1?propError("structure","couldn't find a matching closing tag for following elements:"+enlistArray(i)):1===i.length&&this.closingTagError(i[0]),s}assembleElement(e,s,i,r,n){s in e&&this.propError("structure","Every element must have a unique name but there are mutiple elements called ‘"+s+"’");const a=document.createElement(i||"div");if(this.registerVariables(r,a,!1)||(a.textContent=r),n){let e;for(;e=t.regex.attributes.exec(n);){const t=e[1];let s=e[2];this.registerVariables(s,a,t)||a.setAttribute(t,s)}}return a}registerVariables(e,s,i){if(t.regex.variableNoFlag.test(e)){const r={};let n;for(;n=t.regex.variable.exec(e);){const t=n[1]||n[2],a=-1!==t.indexOf(".")?t.slice(0,t.indexOf(".")):t;if(!r.hasOwnProperty(a)){Object.prototype.hasOwnProperty.call(this.vals,a)||this.propError("structure","‘"+a+"’ is not a recognized property and cannot be used as variable. Please check its spelling or initialize it in the constructor"),null==this.structureVars[a]&&(this.structureVars[a]=new Array);const t={str:e,elem:s};i&&(t.attr=i),this.structureVars[a].push(t),r[a]=t}}return!0}return!1}parseError(e,t){propError("structure","something has been declared wrongly and couldn't be parsed. Point of failure before "+e+":\n  "+t+"\n")}closingTagError(e){propError("structure","couldn't find a matching closing tag for the element ‘<"+e+">’ (Should it be a self-closing tag marked with ‘:’?)")}}class r extends e{defineDeepProperty(e,t,s,i,r){Object.defineProperty(e,t,{set:e=>{if(!this.initial)var n=r?Array.from(this[t]):this[t];s[t]=e,r?(this.defineDeepArrayIntermediateVals(t,e),this.defineDeepArrayIntermediateThis(t,e,this.properties[t].keySetter,this.properties[t].keyGetter),this.handleInternalDeepArrayChange(t,n,e)):this.handleInternalPropertyChange(t,n),i&&i(e,n)},get:()=>(r?this.vals.$intermediateVals:s)[t],enumerable:!0})}defineDeepArrayIntermediateThis(e,t,s,i){const r=this.vals;this.vals.$intermediateThis[e]=[];for(let n=0;n<t.length;n++)t[n],Object.defineProperty(this.vals.$intermediateThis[e],n,{set:function(t){s&&s(t,n)||(r[e][n]=t)},get:function(){return i?i(r[e][n],n):r[e][n]},enumerable:!0}),this.vals.$intermediateThis[e][n]=t[n]}defineDeepArrayIntermediateVals(e,t){const s=this.vals.$;this.vals.$intermediateVals[e]=[];for(let i=0;i<t.length;i++)t[i],Object.defineProperty(this.vals.$intermediateVals[e],i,{set:t=>{if(!this.initial)var r=Array.from(this[e]);s[e][i]=t,this.handleInternalDeepArrayChange(e,r,null,i)},get:()=>s[e][i],enumerable:!0})}handleInternalPropertyChange(e,t){console.log(0,t,this[e]),this.initial||"object"!=typeof this[e]&&t===this[e]||(console.log(!0),this.updatePotentialVariable(e),this.invokeEvent(["change:"+e],t))}handleInternalDeepArrayChange(e,t,s,i){if(!this.initial)if(this.updatePotentialVariable(e),null!=i)this.invokeDeepArrayChangeEvent(e,t,i);else for(let i=0;i<s.length;i++)this.invokeDeepArrayChangeEvent(e,t,i)}invokeDeepArrayChangeEvent(e,t,s){t[s]!==this[e][s]&&this.invokeEvent(["change:"+e],t,s)}updatePotentialVariable(e){if(Object.prototype.hasOwnProperty.call(this.domBuilder.structureVars,e))for(let s in this.domBuilder.structureVars[e]){const i=this.domBuilder.structureVars[e][s],r=i.str.replace(t.regex.variable,((e,t,s)=>this.getValueFromVariable(t||s)));i.attr?i.elem.setAttribute(i.attr,r):i.elem.textContent=r}}getValueFromVariable(e){const t=e.split(".");let s=this[t[0]];if(t.length>1)for(let i=1;i<t.length;i++)try{s=s[t[i]]}catch(r){error("Variable ‘"+e+"’ cannot access property ‘"+t[i]+"’ on "+s,"structure")}return s}}class n extends r{activeThumb;activeTouchID;mouseDownPos;trackStyle;constructor(){super(),this.touchStart=this.touchStart.bind(this),this.touchMove=this.touchMove.bind(this),this.touchEnd=this.touchEnd.bind(this),this.slideStart=this.slideStart.bind(this),this.slideMove=this.slideMove.bind(this),this.slideEnd=this.slideEnd.bind(this),this.keyDown=this.keyDown.bind(this),window.addEventListener("keydown",this.keyDown)}getTrackPadding(e){return parseFloat(this.trackStyle["padding"+e])}getTrackOffset(e){return parseFloat(this.trackStyle["border"+e+"Width"])+this.getTrackPadding(e)}getDistance(e){return"vertical"===this.vals.orientation?e.getBoundingClientRect().top-this.vals.node.track.getBoundingClientRect().top-this.getTrackOffset("Top"):e.getBoundingClientRect().left-this.vals.node.track.getBoundingClientRect().left-this.getTrackOffset("Left")}getAbsoluteTrackSize(e){return"vertical"===this.vals.orientation?this.vals.node.track.getBoundingClientRect().height-this.getTrackOffset("Top")-this.getTrackOffset("Bottom")-e.getBoundingClientRect().height:this.vals.node.track.getBoundingClientRect().width-this.getTrackOffset("Left")-this.getTrackOffset("Right")-e.getBoundingClientRect().width}computeDistanceValue(e,t,s){return null==s&&(s=this.getAbsoluteTrackSize(e)),t/s*(this.vals.range[1]-this.vals.range[0])+this.vals.range[0]}moveThumb(e,t,s){if(s)e.style.transform="translate"+("vertical"===this.vals.orientation?"Y":"X")+"("+t+"px)";else{if("vertical"===this.vals.orientation)var i=this.getTrackPadding("Top"),r=this.getTrackPadding("Bottom"),n=e.clientHeight,a="top";else i=this.getTrackPadding("Left"),r=this.getTrackPadding("Right"),n=e.clientWidth,a="left";let s=n*t+"px";r&&(s+=" - "+r*t+"px"),i&&(s+=" + "+i*(1-t)+"px"),e.style[a]="calc("+100*t+"% - "+s+")"}}computeAllRatioDistances(e,t){for(let s=0;s<this.vals.values.length;s++)this.computeOneRatioDistance(s,e,t)}computeOneRatioDistance(e,t,s){let i,r;if(t){const s=["range","step"];for(let e in s)null==t[s[e]]&&(t[s[e]]=this.vals[s[e]]);null!=t.value?i=t.value:(r=(this.vals.values[e]-this.vals.range[0])/(this.vals.range[1]-this.vals.range[0]),i=(t.range[1]-t.range[0])*r+t.range[0])}else t=this.vals,i=this.vals.values[e];!1!==t.step&&(i=Math.abs(t.range[1]-t.range[0])<t.step?t.range[0]:t.range[0]+Math.round((i-t.range[0])/t.step)*t.step);const n=(i-t.range[0])/(t.range[1]-t.range[0]);if(s)return{value:i,ratio:n};{const t=this.vals.values[e];i!==t&&(this.vals.values[e]=i),n!==r&&this.moveThumb(this.vals.node.thumb[e],n),0===e&&this.handleInternalPropertyChange("value",t)}}touchStart(e){e.preventDefault(),null==this.activeTouchID&&(this.activeTouchID=e.changedTouches[0].identifier,this.slideStart.call(this,e.changedTouches[0],e),this.vals.node.thumb.addEventListener("touchmove",this.touchMove),this.vals.node.thumb.addEventListener("touchend",this.touchEnd),this.vals.node.thumb.addEventListener("touchcancel",this.touchEnd))}touchMove(e){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++)if(e.changedTouches[t].identifier===this.activeTouchID){this.slideMove.call(this,e.changedTouches[t],e);break}}touchEnd(e){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++)if(e.changedTouches[t].identifier===this.activeTouchID){this.vals.node.thumb.removeEventListener("touchmove",this.touchMove),this.vals.node.thumb.removeEventListener("touchend",this.touchEnd),this.vals.node.thumb.removeEventListener("touchcancel",this.touchEnd),this.slideEnd.call(this,e.changedTouches[t],e),this.activeTouchID=null;break}}slideStart(e,t){if(this.activeThumb=e.currentTarget,document.body.classList.add("sl89-noselect"),this.activeThumb.classList.add("active"),"vertical"===this.vals.orientation)var s="top",i=e.clientY;else s="left",i=e.clientX;const r=this.getDistance(this.activeThumb);this.mouseDownPos=i-r,this.moveThumb(this.activeThumb,r,!0),this.activeThumb.style.removeProperty(s),t||(window.addEventListener("mouseup",this.slideEnd),window.addEventListener("mousemove",this.slideMove))}slideMove(e,t){const s=this.vals.node.thumb.indexOf(this.activeThumb),i=this.getAbsoluteTrackSize(this.activeThumb);let r=("vertical"===this.vals.orientation?e.clientY:e.clientX)-this.mouseDownPos;r>i?r=i:r<0&&(r=0);let n=this.computeDistanceValue(this.activeThumb,r,i);if(!1!==this.vals.step){const e=this.computeOneRatioDistance(s,{value:n},!0);n=e.value,r=e.ratio*i}this.vals.values[s]!==n&&(this.vals.values[s]=n,this.moveThumb(this.activeThumb,r,!0),this.invokeEvent(["move"],t||e))}slideEnd(e,t){t||(window.removeEventListener("mouseup",this.slideEnd),window.removeEventListener("mousemove",this.slideMove));const s=this.vals.node.thumb.indexOf(this.activeThumb),i=this.computeDistanceValue(this.activeThumb,this.getDistance(this.activeThumb));this.computeOneRatioDistance(s,{value:i}),this.activeThumb.style.removeProperty("transform"),this.invokeEvent(["end"],t||e),this.activeThumb.classList.remove("active"),document.body.classList.remove("sl89-noselect"),this.mouseDownPos=null,this.activeThumb=null}keyDown(e){if(document.activeElement===this.vals.node.thumb){let t=Math.round((this.vals.range[1]-this.vals.range[0])/100);e.shiftKey&&e.ctrlKey?t*=.1:e.shiftKey&&(t*=10),"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),this.value-=t):"ArrowRight"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),this.value+=t)}}}var a=s(977),o=s.n(a);class l extends t{thumbBase;thumbParent;thumbCallbackTouch;thumbCallbackMouse;constructor(e,t,s){super(e),this.thumbCallbackTouch=t,this.thumbCallbackMouse=s}createSliderNode(e,t){return!1===t?this.createSliderManually(e):this.createSliderFromStructure(e,t)}createSliderManually(e){const t={slider:document.createElement("div"),track:document.createElement("div"),thumb:new Array(e)};this.thumbBase=document.createElement("div"),this.thumbParent=t.track;for(let s=0;s<e;s++)t.thumb[s]=this.createNewThumb();t.slider.appendChild(t.track);for(let e in t)"slider"!==e&&"thumb"!==e&&t[e].classList.add("sl89-"+e);return t}createSliderFromStructure(e,t){const s=this.parseStructure(t);return this.createMissingElements(s,e),s}createMissingElements(e,t){e.thumb?(this.thumbBase=e.thumb,e.track&&(this.thumbParent=e.thumb.parentNode)):this.thumbBase=this.assembleElement(e,"thumb","div"),e.track||(e.track=this.assembleElement(e,"track","div"),e.thumb?e.thumb.parentNode.appendChild(e.track):e.slider.appendChild(e.track)),e.thumb&&e.thumb.parentNode.removeChild(e.thumb),this.thumbParent||(this.thumbParent=e.track),e.track.classList.add("sl89-track"),e.thumb=new Array(t);for(let s=0;s<t;s++)e.thumb[s]=this.createNewThumb()}addAttributesFromTarget(e,t){const s=t.attributes;for(let t=0;t<s.length;t++)e.slider.setAttribute(s[t].name,s[t].value)}addClasses(e,t,s){e.slider.classList.add("slider89"),s&&e.slider.classList.add("vertical"),t&&this.addClassesFromClassList(e,t)}addClassesFromClassList(e,t){const s=new Array;for(let i in t){const r=t[i];if(Object.prototype.hasOwnProperty.call(e,i)){if(0===s.length)for(let t=0;t<r.length;t++)if("thumb"===i)for(let s=0;s<e[i].length;s++)e[i][s].classList.add(r[t]);else e[i].classList.add(r[t])}else s.push(i)}if(s.length>0){const t="the given object contains items which aren't nodes of this slider:"+enlistArray(s)+"Following nodes are part of this slider's node pool:"+enlistArray(Object.keys(e));propError("classList",t)}}createStyleSheet(){const e=function(){const e=document.head.firstElementChild;return e?document.head.insertBefore(document.createElement("style"),e).sheet:document.head.appendChild(document.createElement("style")).sheet}();for(let t=0;t<o().length;t++)e.insertRule(o()[t],0)}createNewThumb(){const e=this.thumbBase.cloneNode(!0);return e.classList.add("sl89-thumb"),null==e.tabindex&&(e.tabIndex=0),e.addEventListener("touchstart",this.thumbCallbackTouch),e.addEventListener("mousedown",this.thumbCallbackMouse),this.thumbParent.appendChild(e),e}}class h{typeMsg(e,t){let s=t?"":"but it is ";return Array.isArray(e)?s+="an array":Number.isNaN(e)?s+="NaN":s+=null===e?"null":"boolean"==typeof e?e:"of type "+typeof e,s}checkTypes(e,t,s){let i;for(let s=0;s<t.length;s++){const n=t[s],a=n.type;if("boolean"===a&&"boolean"==typeof e||"true"===a&&!0===e||"false"===a&&!1===e||"array"===a&&Array.isArray(e)||"object"===a&&"[object Object]"===Object.prototype.toString.call(e)||"number"===a&&"number"==typeof e&&!Number.isNaN(e)||"function"===a&&"function"==typeof e||"string"===a&&"string"==typeof e){if("array"==a)for(let t=0;t<e.length&&!(i=this.checkTypes(e[t],n.structure,!0));t++);else if("object"===a)for(let t in e)if(i=this.checkTypes(e[t],n.structure,!0))break;if(i)return i;if(i=r(n.conditions,e))break;return!1}}return i?" is "+i:(s?"s values are ":" is ")+this.typeMsg(e,!0);function r(e,t){if(e){if(e.nonnegative&&t<0)return"a negative number";if(e.positive&&t<=0)return"a negative number or 0";if(e.integer&&t%1!=0)return"a floating point number";if(e.filled&&""===t.trim())return"an empty string";if(e.keywords&&-1===e.keywords.indexOf(t))return"a different string";if(e.wordChar&&!Number.isNaN(Number(t)))return"a pure number string";if(e.length&&t.length!==e.length)return("array"===type?"an ":"a ")+type+" of length "+t.length}}}computeTypeMsg(e,t,s,i){let r="";for(let n=0;n<e.length;n++){const a=e[n].type,o=e[n].conditions;if(r&&(r+=" or "),"number"===a){const e=o&&o.positive,t=o&&o.nonnegative,i=o&&o.integer;t||e?(s||(r+="a "),r+=t?"non-negative":"positive"):r+=i&&!s?"an":"any",r+=" "+(i?"integer":"number"),s&&(r+="s")}else if("array"===a){const t=o&&o.length,a=this.computeTypeMsg(e[n].structure,!1,1!==t,!0);s||(r+="a"),i?r+=a:s||(r+="n"),r+=" array",s&&(r+="s"),t&&(r+=" of length "+t),i||(r+=" with "+a+" as values")}else"object"===a?r+="an object with "+this.computeTypeMsg(e[n].structure,!1,!0,!0)+" as values":"function"===a?(i||(r+="a "),r+="function reference",!i&&s&&(r+="s")):"string"===a?o&&o.keywords?(o.keywords.length>1?r+="one of the keywords":r+="the keyword",o.keywords.forEach((function(e,t,s){0!==t&&t===s.length-1?r+=" or":0!==t&&(r+=","),r+=' "'+e+'"'}))):(i||(r+="a "),o&&o.filled&&(r+="non-empty "),o&&o.wordChar&&(r+="non-number "),r+="string",!i&&s&&(r+="s")):"boolean"===a?(i||(r+="a "),r+="boolean",!i&&s&&(r+="s")):"true"!==a&&"false"!==a||(r+=a);t&&(r+=" ("+t+")",t=!1)}return r}}class u extends n{methodStructure={addEvent:{args:[{name:"event type",structure:[{type:"string"}]},{name:"event function",structure:[{type:"function"}]},{name:"event namespace",optional:!0,structure:[{type:"string",conditions:{filled:!0,wordChar:!0}}]}]},removeEvent:{args:[{name:"event identifier/namespace",structure:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"string",conditions:{filled:!0,wordChar:!0}}]}]}};propertyStructure={range:{structure:[{type:"array",conditions:{length:2},structure:[{type:"number"}]},{type:"boolean"}],shape:"[startValue, endValue]"},values:{structure:[{type:"array",structure:[{type:"number"}]}]},value:{structure:[{type:"number"}]},precision:{structure:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"false"}]},step:{structure:[{type:"number",conditions:{positive:!0}},{type:"false"}]},structure:{structure:[{type:"string",conditions:{filled:!0}},{type:"false"}]},node:{default:{}},orientation:{structure:[{type:"string",conditions:{keywords:["horizontal","vertical"]}}]},classList:{structure:[{type:"object",structure:[{type:"array",structure:[{type:"string"}]}]},{type:"false"}],shape:"{nodeName: [...classes]}"},events:{structure:[{type:"object",structure:[{type:"array",structure:[{type:"function"}]}]},{type:"false"}]}};methods={addEvent:{function:this.addEvent},removeEvent:{function:this.removeEvent}};properties={range:{isDeepDefinedArray:!0,default:[0,100],setter:e=>{e[0]===e[1]&&this.propError("range","the given range of ["+e.join(", ")+"] defines the same value for both range start and end"),this.initial||this.computeAllRatioDistances({range:e})},keySetter:(e,t)=>{if(e===this.vals.range[Math.abs(t-1)])return this.propError("range","the new range of ["+e+", "+e+"] defines the same value for both range start and end"),!0;if(!this.initial){const s=Array.from(this.vals.range);s[t]=e,this.computeAllRatioDistances({range:s})}}},values:{isDeepDefinedArray:!0,default:()=>[this.vals.range[0]],setter:e=>{if(!this.initial)if(e.length>this.vals.values.length)for(let t=this.vals.values.length;t<e.length;t++)this.vals.node.thumb.push(this.domBuilder.createNewThumb()),this.computeOneRatioDistance(t);else if(e.length<this.vals.values.length)for(let t=e.length;t<this.vals.values.length;t++)this.domBuilder.thumbParent.removeChild(this.vals.node.thumb.pop())},postSetter:(e,t)=>{this.initial||this.handleInternalPropertyChange("value",t[0])},keySetter:(e,t)=>{if(e=this.adaptValueToRange(e),this.initial)this.vals.values[t]=e;else{if(0===t)var s=this.value;this.computeOneRatioDistance(t,{value:e}),0===t&&this.handleInternalPropertyChange("value",s)}return!0},keyGetter:(e,t)=>!1!==this.vals.precision?Number(e.toFixed(this.vals.precision)):e},value:{setter:e=>(this.initial&&this.configHasValues&&this.propError("value","only one of ‘value’ and ‘values’ may be set in the constructor"),this.values[0]=e,!0),getter:e=>this.values[0]},precision:{default:!1,setter:e=>{this.initial||this.computeAllRatioDistances({precision:e})}},step:{default:!1,setter:e=>{!1!==this.vals.precision&&!1!==e&&Number(e.toFixed(this.vals.precision))!==e&&this.propError("step","the given value of "+e+" exceeds the currently set precision of "+this.vals.precision),this.initial||this.computeAllRatioDistances({step:e})}},structure:{default:!1,initial:!0},node:{default:{},static:!0},orientation:{default:"horizontal",setter:e=>{if(!this.initial)return"vertical"===e?(this.vals.node.thumb.style.removeProperty("left"),this.vals.node.slider.classList.add("vertical")):(this.vals.node.thumb.style.removeProperty("top"),this.vals.node.slider.classList.remove("vertical")),this.vals.orientation=e,this.computeAllRatioDistances(),!0}},classList:{default:!1,initial:!0},events:{default:{},initial:!0,setter:e=>{const t=new Array;for(let s in e)this.checkEventType(s)||t.push(s);if(t.length>0){const e="the given object contains items which are no valid event types:"+c(t)+"Available event types are:"+c(Slider89Events.eventTypes);this.propError("events",e)}}}};domBuilder;typeChecker;constructor(e,t={},s=!1){if(super(),this.initial=!0,this.configHasValues="values"in t,this.testInitialTarget(e),this.testInitialConfig(t),this.domBuilder=new l(this.vals,this.touchStart,this.slideStart),this.typeChecker=new h,this.initializeClassProperties(t),this.initializeCustomProperties(t),this.initializeMethods(),this.buildSlider(e,s),this.computeAllRatioDistances(),!1!==this.vals.structure)for(let e in this.domBuilder.structureVars)this.updatePotentialVariable(e);this.initial=!1}testInitialTarget(e){e?e.nodeType&&1===e.nodeType||this.error("the first argument must be a valid DOM node the slider will be placed into "+this.typeChecker.typeMsg(e),"constructor",!0):this.error("no first argument has been supplied. It needs to be the DOM target node for the slider","constructor",!0)}testInitialConfig(e){null==e||!1===e?e={}:("object"!=typeof e||Array.isArray(e))&&this.error("the optional second argument needs to be an object for configuration "+this.typeChecker.typeMsg(e),"constructor",!0)}initializeClassProperties(e){for(let t in this.properties){const s=t,i=this.properties[s];if(Object.defineProperty(this,s,{set:e=>{i.static&&this.error("property ‘"+s+"’ may only be read from but it was just set with the value ‘"+e+"’"),i.initial&&!this.initial&&this.error("property ‘"+s+"’ may only be set at init time but it was just set with the value ‘"+e+"’"),this.checkProp(s,e),i.setter&&i.setter(e)||(this.vals[s]=e)},get:()=>{const e=i.isDeepDefinedArray?this.vals.$intermediateThis:this.vals;return i.getter?i.getter(e[s]):e[s]},enumerable:!0}),this.defineDeepProperty(this.vals,s,this.vals.$,i.postSetter,i.isDeepDefinedArray),s in e)this[s]=e[s],delete e[s];else if("default"in i){const e=i.default;(i.getter||i.keyGetter?this:this.vals)[s]="function"==typeof e?e():e}}}initializeCustomProperties(e){for(let t in e){const s=t;"_"===s[0]?(this.defineDeepProperty(this,s,this.vals),this.vals[s]=e[s]):this.error("‘"+s+"’ is not a valid property name. Check its spelling or prefix it with an underscore to use it as custom property (‘_"+s+"’)")}}initializeMethods(){const e=this;for(let t in this.methods){const s=t,i=this.methods[s],r=this.methodStructure[s].args.length;this[s]=function(){const t=Array.prototype.slice.call(arguments,0,r);return e.checkMethod(s,t),i.function.apply(this,t)}}}buildSlider(e,t){this.vals.node=this.domBuilder.createSliderNode(this.vals.values.length,this.vals.structure),t&&this.domBuilder.addAttributesFromTarget(this.vals.node,e),this.domBuilder.addClasses(this.vals.node,this.vals.classList,"vertical"===this.vals.orientation),this.domBuilder.createStyleSheet(),t?e.parentNode.replaceChild(this.vals.node.slider,e):e.appendChild(this.vals.node.slider),this.trackStyle=getComputedStyle(this.vals.node.track)}checkMethod(e,t){const s=this.methodStructure[e];for(let i in t){const r=t[i],n=this.typeChecker.checkTypes(r,s.args[i].structure,!1);n&&this.methodError(e,i,n)}s.args[t.length]&&!s.args[t.length].optional&&this.methodError(e,t.length,null,!0)}checkProp(e,t){const s=this.propertyStructure[e],i=this.typeChecker.checkTypes(t,s.structure,!1);i&&this.propError(e,"property ‘"+e+"’ must be "+this.typeChecker.computeTypeMsg(s.structure,s.shape)+" but it"+i,!0)}adaptValueToRange(e){if(this.vals.range[0]<this.vals.range[1]){if(e<this.vals.range[0])return this.vals.range[0];if(e>this.vals.range[1])return this.vals.range[1]}else{if(e>this.vals.range[0])return this.vals.range[0];if(e<this.vals.range[1])return this.vals.range[1]}return e}}function c(e){return'\n - "'+e.join('"\n - "')+'"\n'}}(),i.default}()}));