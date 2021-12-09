!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Slider89=t():e.Slider89=t()}(this,(function(){return(()=>{var e={977:e=>{e.exports=[".sl89-track{position:relative;width:200px;height:25px;background-color:hsl(0,0%,18%);",".slider89.vertical .sl89-track{height:200px;width:25px;",".sl89-thumb{position:absolute;width:16px;height:100%;background-color:hsl(0,0%,28%);cursor:pointer;",".slider89.vertical .sl89-thumb{height:16px;width:100%;",".sl89-noselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;"]}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";n.d(r,{default:()=>e});const e=function(){const e=n(977),t=["start","move","end","change:$property"],r=function(){const e={attr:{name:"[\\w-]+"},all:"[\\d\\D]",capName:"([\\w-]+)"};e.attr.value="(?:(?!<)"+e.all+")*?",e.tagType="(?:\\s+"+e.capName+")?",e.content='(?:\\s+"('+e.all+'+?)")?',e.attribs="(?:\\s+"+e.attr.name+"=\\["+e.attr.value+"\\])*",e.varContent="\\$((?:\\w+(?:\\.(?=\\w))?)+)";const t={variable:"\\{"+e.varContent+"\\}|"+e.varContent,attributes:"("+e.attr.name+")=\\[("+e.attr.value+")\\](?:\\s+|$)",tag:"<([/:])?"+e.capName+e.tagType+e.content+"("+e.attribs+")\\s*?>\\s*"};for(let e in t)t[e]=new RegExp(t[e],"g");return t}();function o(e){return Number.isNaN&&Number.isNaN(e)||!Number.isNaN&&"number"==typeof e&&e!=e}function i(e){return'\n - "'+e.join('"\n - "')+'"\n'}function s(e,t){let n=t?"":"but it is ";return Array.isArray(e)?n+="an array":o(e)?n+="NaN":n+=null===e?"null":"boolean"==typeof e?e:"of type "+typeof e,n}function a(e,t,n){let r;for(let n=0;n<t.length;n++){const s=t[n],l=s.type;if("boolean"===l&&"boolean"==typeof e||"true"===l&&!0===e||"false"===l&&!1===e||"array"===l&&Array.isArray(e)||"object"===l&&"[object Object]"===Object.prototype.toString.call(e)||"number"===l&&"number"==typeof e&&!o(e)||"function"===l&&"function"==typeof e||"string"===l&&"string"==typeof e){if("array"==l)for(let t=0;t<e.length&&!(r=a(e[t],s.structure,!0));t++);else if("object"===l)for(let t in e)if(r=a(e[t],s.structure,!0))break;if(r)return r;if(r=i(s.conditions,e))break;return!1}}return r?" is "+r:(n?"s values are ":" is ")+s(e,!0);function i(e,t){if(e){if(e.nonnegative&&t<0)return"a negative number";if(e.integer&&t%1!=0)return"a floating point number";if(e.filled&&""===t.trim())return"an empty string";if(e.keywords&&-1===e.keywords.indexOf(t))return"a different string";if(e.wordChar&&!o(Number(t)))return"a pure number string";if(e.length&&t.length!==e.length)return("array"===type?"an ":"a ")+type+" of length "+t.length}}}function l(e,t,n,r){let o="";for(let i=0;i<e.length;i++){const s=e[i].type,a=e[i].conditions;if(o&&(o+=" or "),"number"===s){const e=a&&a.nonnegative,t=a&&a.integer;e?(n||(o+="a "),o+="non-negative"):o+=t&&!n?"an":"any",o+=" "+(t?"integer":"number"),n&&(o+="s")}else if("array"===s){const t=a&&a.length,s=l(e[i].structure,!1,1!==t,!0);n||(o+="a"),r?o+=s:n||(o+="n"),o+=" array",n&&(o+="s"),t&&(o+=" of length "+t),r||(o+=" with "+s+" as values")}else"object"===s?o+="an object with "+l(e[i].structure,!1,!0,!0)+" as values":"function"===s?(r||(o+="a "),o+="function reference",!r&&n&&(o+="s")):"string"===s?a&&a.keywords?(a.keywords.length>1?o+="one of the keywords":o+="the keyword",a.keywords.forEach((function(e,t,n){0!==t&&t===n.length-1?o+=" or":0!==t&&(o+=","),o+=' "'+e+'"'}))):(r||(o+="a "),a&&a.filled&&(o+="non-empty "),a&&a.wordChar&&(o+="non-number "),o+="string",!r&&n&&(o+="s")):"boolean"===s?(r||(o+="a "),o+="boolean",!r&&n&&(o+="s")):"true"!==s&&"false"!==s||(o+=s);t&&(o+=" ("+t+")",t=!1)}return o}return function n(o,c,u){o?o.nodeType&&1===o.nodeType||j("the first argument must be a valid DOM node the slider will be placed into "+s(o),"constructor",!0):j("no first argument has been supplied. It needs to be the DOM target node for the slider","constructor",!0),null==c||!1===c?c={}:("object"!=typeof c||Array.isArray(c))&&j("the optional second argument needs to be an object for configuration "+s(c),"constructor",!0);const d=this;let f,h,p,g,m=!1,y=0;const v={},b={},w={};Object.defineProperty(w,"$",{value:{}});const x={addEvent:{function:function(e,n,r){A(e)||j("the specified type ‘"+e+"’ is not a valid event type. Available types are:"+i(t),"addEvent"),Array.isArray(w.events[e])||(w.events[e]=new Array),w.events[e].push(n);const o=r||y,s={type:e,fn:n};return r?(Array.isArray(b[o])||(b[o]=new Array),b[o].push(s)):b[o]=s,r||y++},args:[{name:"event type",structure:[{type:"string"}]},{name:"event function",structure:[{type:"function"}]},{name:"event namespace",optional:!0,structure:[{type:"string",conditions:{filled:!0,wordChar:!0}}]}]},removeEvent:{function:function(e){const t=b[e];return!!t&&(delete b[e],Array.isArray(t)?t.reduce(n,new Array):n(new Array,t));function n(e,t){const n=w.events[t.type],r=n.splice(n.indexOf(t.fn),1)[0];return 0===n.length&&delete w.events[t.type],e.push(r),e}},args:[{name:"event identifier/namespace",structure:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"string",conditions:{filled:!0,wordChar:!0}}]}]}},k={range:{default:[0,100],structure:[{type:"array",conditions:{length:2},structure:[{type:"number"}]},{type:"boolean"}],shape:"[startValue, endValue]",setter:function(e){e[0]===e[1]&&X("range","the given range of ["+e.join(", ")+"] defines the same value for both range start and end"),m||P({range:e})}},value:{default:function(){return w.range[0]},structure:[{type:"number"}],setter:function(e){if((w.range[0]>w.range[1]&&(e>w.range[0]||e<w.range[1])||w.range[1]>w.range[0]&&(e<w.range[0]||e>w.range[1]))&&X("value","the given value of "+e+" exceeds the currently set range of ["+w.range.join(", ")+"]"),!m)return P({value:e}),!0},getter:function(e){return!1!==w.precision?Number(e.toFixed(w.precision)):e}},precision:{default:!1,structure:[{type:"number",conditions:{nonnegative:!0,integer:!0}},{type:"false"}],setter:function(e){if(!1!==e)for(let t=0;t<w.range.length;t++)Number(w.range[t].toFixed(e))!==w.range[t]&&X("range","the given range "+["start","end"][t]+" of `"+w.range[t]+"` exceeds the currently set precision of "+e);m||P({precision:e})}},step:{default:!1,structure:[{type:"number",conditions:{nonnegative:!0}},{type:"false"}],setter:function(e){!1!==w.precision&&!1!==e&&Number(e.toFixed(w.precision))!==e&&X("step","the given value of "+e+" exceeds the currently set precision of "+w.precision),m||P({step:e})}},structure:{default:!1,structure:[{type:"string",conditions:{filled:!0}},{type:"false"}],initial:!0},node:{default:{},static:!0},orientation:{default:"horizontal",structure:[{type:"string",conditions:{keywords:["horizontal","vertical"]}}]},classList:{default:!1,structure:[{type:"object",structure:[{type:"array",structure:[{type:"string"}]}]},{type:"false"}],initial:!0,shape:"{nodeName: [...classes]}"},events:{default:{},structure:[{type:"object",structure:[{type:"array",structure:[{type:"function"}]}]},{type:"false"}],initial:!0,setter:function(e){const n=new Array;for(let t in e)A(t)||n.push(t);n.length>0&&X("events","the given object contains items which are no valid event types:"+i(n)+"Available event types are:"+i(t))}}};function j(e,t,n){throw"\n"!==(e="Slider89"+(t?" @ "+t:"")+": "+e)[e.length-1]&&"."!==e[e.length-1]&&(e+=".\n"),(m||n)&&(e+="Aborting the slider construction."),new Error(e)}function A(e){if(0===e.indexOf("change:")){const t=e.slice("change:".length);Object.prototype.hasOwnProperty.call(w,t)||j("‘"+e+"’ refers to ‘"+t+"’, which isn't a recognized property. Check its spelling and be aware that custom properties need to be initialized","addEvent")}else if(-1===t.indexOf(e))return!1;return!0}function O(e,t,n){Object.defineProperty(e,t,{set:function(e){n[t]=e,Object.prototype.hasOwnProperty.call(v,t)&&function(e){for(let t in v[e]){const n=v[e][t],o=n.str.replace(r.variable,(function(e,t,n){return E(t||n)}));n.attr?n.node.setAttribute(n.attr,o):n.node.textContent=o}}(t),m||z(["change:"+t])},get:function(){return n[t]},enumerable:!0})}function E(e){const t=e.split(".");let n=d[t[0]];if(t.length>1)for(let e=1;e<t.length;e++)n=n[t[e]];return n}function L(e){return parseFloat(g["padding"+e])}function C(){return"vertical"===w.orientation?w.node.track.clientHeight-L("Top")-L("Bottom")-w.node.thumb.clientHeight:w.node.track.clientWidth-L("Left")-L("Right")-w.node.thumb.clientWidth}function N(e,t){return null==t&&(t=C()),e/t*(w.range[1]-w.range[0])+w.range[0]}function T(e,t){if(t)w.node.thumb.style.transform="translate"+("vertical"===w.orientation?"Y":"X")+"("+e+"px)";else{if("vertical"===w.orientation)var n=L("Top"),r=L("Bottom"),o=w.node.thumb.clientHeight,i="top";else n=L("Left"),r=L("Right"),o=w.node.thumb.clientWidth,i="left";let t=o*e+"px";r&&(t+=" - "+r*e+"px"),n&&(t+=" + "+n*(1-e)+"px"),w.node.thumb.style[i]="calc("+100*e+"% - "+t+")"}}function P(e){let t,n;if(e){const r=["range","step"];for(let t in r)null==e[r[t]]&&(e[r[t]]=w[r[t]]);null!=e.value?t=e.value:(n=(w.value-w.range[0])/(w.range[1]-w.range[0]),t=(e.range[1]-e.range[0])*n+e.range[0])}else e=w,t=w.value;!1!==e.step&&(t=e.range[1]-e.range[0]<e.step?e.range[0]:e.range[0]+Math.round((t-e.range[0])/e.step)*e.step);const r=(t-e.range[0])/(e.range[1]-e.range[0]);t!==w.value&&(w.value=t),r!==n&&T(r)}function z(e){for(let t=0;t<e.length;t++){const n=w.events[e[t]];if(n)for(let e=0;e<n.length;e++)n[e].call(d)}}function D(e){e.preventDefault(),null==h&&(h=e.changedTouches[0].identifier,$.call(this,e.changedTouches[0],!0),w.node.thumb.addEventListener("touchmove",F),w.node.thumb.addEventListener("touchend",S),w.node.thumb.addEventListener("touchcancel",S))}function F(e){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++)if(e.changedTouches[t].identifier===h){M.call(this,e.changedTouches[t],!0);break}}function S(e){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++)if(e.changedTouches[t].identifier===h){w.node.thumb.removeEventListener("touchmove",F),w.node.thumb.removeEventListener("touchend",S),w.node.thumb.removeEventListener("touchcancel",S),R.call(this,e.changedTouches[t],!0),h=null;break}}function $(e,t){if(document.body.classList.add("sl89-noselect"),w.node.thumb.classList.add("active"),z(["start"]),f=this,"vertical"===w.orientation)var n="Top",r="top",o=e.clientY;else n="Left",r="left",o=e.clientX;const i=f["offset"+n]-L(n);p=o-i,T(i,!0),f.style.removeProperty(r),t||(window.addEventListener("mouseup",R),window.addEventListener("mousemove",M))}function M(e){const t=C();let n=("vertical"===w.orientation?e.clientY:e.clientX)-p;if(n>t?n=t:n<0&&(n=0),w.step){const e=t/((w.range[1]-w.range[0])/w.step);if(n=Math.round(n/e)*e,n>t)return}const r=N(n,t);w.value!==r&&(w.value=r,T(n,!0),z(["move"]))}function R(e,t){t||(window.removeEventListener("mouseup",R),window.removeEventListener("mousemove",M)),P({value:N(function(){const e=w.node.thumb.style.transform,t="vertical"===w.orientation?"translateY(":"translateX(",n=e.slice(e.indexOf(t)+t.length);return parseFloat(n.slice(0,n.indexOf(")")))}())}),f.style.removeProperty("transform"),p=null,f=null,z(["end"]),w.node.thumb.classList.remove("active"),document.body.classList.remove("sl89-noselect")}function X(e,t,n){if(!m){let n=w[e];Array.isArray(n)&&(n="["+n.join(", ")+"]"),t+=".\nContinuing with the previous value ("+n+")."}j(t,!n&&e)}function Y(e,t,n,r){const o=x[e].args[t];let i="the "+(o.optional?"optional ":"")+["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"][t]+" argument ("+o.name+") ";r&&(i+="has been omitted but it is required. It "),i+="must be "+l(o.structure),r||(i+=" but it"+n),j(i,e)}function B(e,t){const n=x[e];for(let r in t){const o=a(t[r],n.args[r].structure,!1);o&&Y(e,r,o)}n.args[t.length]&&!n.args[t.length].optional&&Y(e,t.length,null,!0)}function H(e,t){const n=k[e],r=a(t,n.structure,!1);r&&X(e,"property ‘"+e+"’ must be "+l(n.structure,n.shape)+" but it"+r,!0)}m=!0,function(){for(let e in k){const t=e,n=k[t];if(Object.defineProperty(d,t,{set:function(e){if(n.static)j("property ‘"+t+"’ may only be read from but it was just set with the value ‘"+e+"’");else if(!n.initial||m){let r;H(t,e),n.setter&&(r=n.setter(e)),void 0===r&&(w[t]=e)}else j("property ‘"+t+"’ may only be set at init time but it was just set with the value ‘"+e+"’")},get:function(){return n.getter?n.getter(w[t]):w[t]}}),O(w,t,w.$),t in c)d[t]=c[t],delete c[t];else{const e=n.default;w[t]="function"==typeof e?e():e}}for(let e in c){const t=e;"_"===t[0]?(O(d,t,w),w[t]=c[t]):j("‘"+t+"’ is not a valid property name. Check its spelling or prefix it with an underscore to use it as custom property (‘_"+t+"’)")}for(let e in x){const t=e,r=x[t];n.prototype[t]=function(){const e=Array.prototype.slice.call(arguments,0,r.args.length);return B(t,e),r.function.apply(this,e)}}}(),function(){if(!1===w.structure){w.node.slider=document.createElement("div"),w.node.track=document.createElement("div"),w.node.thumb=document.createElement("div"),w.node.track.appendChild(w.node.thumb),w.node.slider.appendChild(w.node.track);for(let e in w.node)"slider"!==e&&w.node[e].classList.add("sl89-"+e)}else w.node=function(e){const t={slider:document.createElement("div")},n={};["track","thumb"].forEach((function(e){n[e]="sl89-"+e})),e=e.trim();const o=new Array;let s,a=0;for(;s=r.tag.exec(e);)if(s.index!==a&&l("tag ‘<"+(s[1]||"")+s[2]+">’",e.slice(a,s.index).trim()),a=r.tag.lastIndex,"/"!==s[1]){const e=u(s[2],s[3],s[4],s[5]);t[s[2]]=e,t[o[o.length-1]||"slider"].appendChild(e),null==s[1]&&o.push(s[2])}else{const e=o.pop();e!==s[2]&&(-1!==o.indexOf(s[2])?c(e):X("structure","the closing tag ‘</"+s[2]+">’ couldn't find a matching opening tag"))}return a!==e.length&&l("end of string",e.slice(a)),o.length>1?X("structure","couldn't find a matching closing tag for following elements:"+i(o)):1===o.length&&c(o[0]),function(){const e=t.track,n=t.thumb;e||(t.track=u("track","div")),n||(t.thumb=u("thumb","div")),e||n?!e&&n?(t.thumb.parentNode.appendChild(t.track),t.track.appendChild(t.thumb)):e&&!n&&t.track.appendChild(t.thumb):(t.track.appendChild(t.thumb),t.slider.appendChild(t.track))}(),t;function l(e,t){X("structure","something has been declared wrongly and couldn't be parsed. Point of failure before "+e+":\n  "+t+"\n")}function c(e){X("structure","couldn't find a matching closing tag for the element ‘<"+e+">’ (Should it be a self-closing tag marked with ‘:’?)")}function u(e,o,i,s){e in t&&X("structure","Every element must have a unique name but there are mutiple elements called ‘"+e+"’");const a=document.createElement(o||"div");if(i&&(a.textContent=d(i,a,!1)),s){let t;for(;t=r.attributes.exec(s);){const r=t[1];let o=t[2];e in n&&"class"===r&&-1===o.split(" ").indexOf(n[e])&&(o+=" "+n[e]),a.setAttribute(r,d(o,a,r))}}return e in n&&!a.getAttribute("class")&&a.setAttribute("class",n[e]),a}function d(e,t,n){if(r.variable.test(e)){const o={};e=e.replace(r.variable,(function(r,i,s){const a=i||s;if(!o.hasOwnProperty(a)){const r=-1!==a.indexOf(".")?a.slice(0,a.indexOf(".")):a;Object.prototype.hasOwnProperty.call(w,r)||X("structure","‘"+r+"’ is not a recognized property and cannot be used as variable. Please check its spelling or initialize it in the constructor"),null==v[r]&&(v[r]=new Array);const i={str:e,node:t};n&&(i.attr=n),v[r].push(i),o[a]=i}return E(a)}))}return e}}(w.structure);const t=w.node;if(u){const e=o.attributes;for(let n=0;n<e.length;n++)t.slider.setAttribute(e[n].name,e[n].value)}if(t.slider.classList.add("slider89"),"vertical"===w.orientation&&t.slider.classList.add("vertical"),w.classList){const e=new Array;for(let n in w.classList){const r=w.classList[n];if(Object.prototype.hasOwnProperty.call(t,n)){if(0===e.length)for(let e=0;e<r.length;e++)t[n].classList.add(r[e])}else e.push(n)}e.length>0&&X("classList","the given object contains items which aren't nodes of this slider:"+i(e)+"Following nodes are part of this slider's node pool:"+i(Object.keys(t)))}!function(){const t=function(){const e=document.head.firstElementChild;return e?document.head.insertBefore(document.createElement("style"),e).sheet:document.head.appendChild(document.createElement("style")).sheet}();for(let n=0;n<e.length;n++)t.insertRule(e[n],0)}(),u?o.parentNode.replaceChild(t.slider,o):o.appendChild(t.slider),g=getComputedStyle(t.track),P(),t.thumb.addEventListener("touchstart",D),t.thumb.addEventListener("mousedown",$)}(),m=!1}}()})(),r.default})()}));