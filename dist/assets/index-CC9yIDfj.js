var xt=Object.defineProperty;var Et=(r,t,s)=>t in r?xt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;var v=(r,t,s)=>Et(r,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,G=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),ot=new WeakMap;let $t=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(G&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=ot.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ot.set(s,t))}return t}toString(){return this.cssText}};const St=r=>new $t(typeof r=="string"?r:r+"",void 0,tt),V=(r,...t)=>{const s=r.length===1?r[0]:t.reduce((i,o,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1],r[0]);return new $t(s,r,tt)},wt=(r,t)=>{if(G)r.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),o=I.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,r.appendChild(i)}},it=G?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return St(s)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ct,defineProperty:kt,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Tt,getOwnPropertySymbols:Ut,getPrototypeOf:Ot}=Object,_=globalThis,rt=_.trustedTypes,Mt=rt?rt.emptyScript:"",K=_.reactiveElementPolyfillSupport,H=(r,t)=>r,Z={toAttribute(r,t){switch(t){case Boolean:r=r?Mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let s=r;switch(t){case Boolean:s=r!==null;break;case Number:s=r===null?null:Number(r);break;case Object:case Array:try{s=JSON.parse(r)}catch{s=null}}return s}},gt=(r,t)=>!Ct(r,t),nt={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:gt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=nt){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,s);o!==void 0&&kt(this.prototype,t,o)}}static getPropertyDescriptor(t,s,i){const{get:o,set:n}=Pt(this.prototype,t)??{get(){return this[s]},set(a){this[s]=a}};return{get:o,set(a){const c=o==null?void 0:o.call(this);n==null||n.call(this,a),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=Ot(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const s=this.properties,i=[...Tt(s),...Ut(s)];for(const o of i)this.createProperty(o,s[o])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[i,o]of s)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const o=this._$Eu(s,i);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)s.unshift(it(o))}else t!==void 0&&s.push(it(t));return s}static _$Eu(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Z).toAttribute(s,i.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,s){var n,a;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const c=i.getPropertyOptions(o),l=typeof c.converter=="function"?{fromAttribute:c.converter}:((n=c.converter)==null?void 0:n.fromAttribute)!==void 0?c.converter:Z;this._$Em=o;const h=l.fromAttribute(s,c.type);this[o]=h??((a=this._$Ej)==null?void 0:a.get(o))??h,this._$Em=null}}requestUpdate(t,s,i){var o;if(t!==void 0){const n=this.constructor,a=this[t];if(i??(i=n.getPropertyOptions(t)),!((i.hasChanged??gt)(a,s)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:o,wrapped:n},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??s??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o){const{wrapped:c}=a,l=this[n];c!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,a,l)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(s)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[H("elementProperties")]=new Map,P[H("finalized")]=new Map,K==null||K({ReactiveElement:P}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,L=N.trustedTypes,at=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,vt="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,bt="?"+b,Ht=`<${bt}>`,C=document,R=()=>C.createComment(""),z=r=>r===null||typeof r!="object"&&typeof r!="function",et=Array.isArray,Nt=r=>et(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,dt=/>/g,A=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,ht=/"/g,_t=/^(?:script|style|textarea|title)$/i,Rt=r=>(t,...s)=>({_$litType$:r,strings:t,values:s}),S=Rt(1),k=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ut=new WeakMap,E=C.createTreeWalker(C,129);function yt(r,t){if(!et(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}const zt=(r,t)=>{const s=r.length-1,i=[];let o,n=t===2?"<svg>":t===3?"<math>":"",a=O;for(let c=0;c<s;c++){const l=r[c];let h,f,d=-1,p=0;for(;p<l.length&&(a.lastIndex=p,f=a.exec(l),f!==null);)p=a.lastIndex,a===O?f[1]==="!--"?a=lt:f[1]!==void 0?a=dt:f[2]!==void 0?(_t.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=A):f[3]!==void 0&&(a=A):a===A?f[0]===">"?(a=o??O,d=-1):f[1]===void 0?d=-2:(d=a.lastIndex-f[2].length,h=f[1],a=f[3]===void 0?A:f[3]==='"'?ht:ct):a===ht||a===ct?a=A:a===lt||a===dt?a=O:(a=A,o=void 0);const u=a===A&&r[c+1].startsWith("/>")?" ":"";n+=a===O?l+Ht:d>=0?(i.push(h),l.slice(0,d)+vt+l.slice(d)+b+u):l+b+(d===-2?c:u)}return[yt(r,n+(r[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class D{constructor({strings:t,_$litType$:s},i){let o;this.parts=[];let n=0,a=0;const c=t.length-1,l=this.parts,[h,f]=zt(t,s);if(this.el=D.createElement(h,i),E.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=E.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(vt)){const p=f[a++],u=o.getAttribute(d).split(b),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:m[2],strings:u,ctor:m[1]==="."?It:m[1]==="?"?Lt:m[1]==="@"?Vt:B}),o.removeAttribute(d)}else d.startsWith(b)&&(l.push({type:6,index:n}),o.removeAttribute(d));if(_t.test(o.tagName)){const d=o.textContent.split(b),p=d.length-1;if(p>0){o.textContent=L?L.emptyScript:"";for(let u=0;u<p;u++)o.append(d[u],R()),E.nextNode(),l.push({type:2,index:++n});o.append(d[p],R())}}}else if(o.nodeType===8)if(o.data===bt)l.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(b,d+1))!==-1;)l.push({type:7,index:n}),d+=b.length-1}n++}}static createElement(t,s){const i=C.createElement("template");return i.innerHTML=t,i}}function T(r,t,s=r,i){var a,c;if(t===k)return t;let o=i!==void 0?(a=s._$Co)==null?void 0:a[i]:s._$Cl;const n=z(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),o!==void 0&&(t=T(r,o._$AS(r,t.values),o,i)),t}let Dt=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??C).importNode(s,!0);E.currentNode=o;let n=E.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new U(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new Bt(n,this,t)),this._$AV.push(h),l=i[++c]}a!==(l==null?void 0:l.index)&&(n=E.nextNode(),a++)}return E.currentNode=C,o}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}};class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,i,o){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=T(this,t,s),z(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=D.createElement(yt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(s);else{const a=new Dt(o,this),c=a.u(this.options);a.p(s),this.T(c),this._$AH=a}}_$AC(t){let s=ut.get(t.strings);return s===void 0&&ut.set(t.strings,s=new D(t)),s}k(t){et(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const n of t)o===s.length?s.push(i=new U(this.O(R()),this.O(R()),this,this.options)):i=s[o],i._$AI(n),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,o,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=s,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(t,s=this,i,o){const n=this.strings;let a=!1;if(n===void 0)t=T(this,t,s,0),a=!z(t)||t!==this._$AH&&t!==k,a&&(this._$AH=t);else{const c=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=T(this,c[i+l],s,l),h===k&&(h=this._$AH[l]),a||(a=!z(h)||h!==this._$AH[l]),h===$?t=$:t!==$&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!o&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class Lt extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class Vt extends B{constructor(t,s,i,o,n){super(t,s,i,o,n),this.type=5}_$AI(t,s=this){if((t=T(this,t,s,0)??$)===k)return;const i=this._$AH,o=t===$&&i!==$||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==$&&(i===$||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class Bt{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const jt={I:U},q=N.litHtmlPolyfillSupport;q==null||q(D,U),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.1");const Kt=(r,t,s)=>{const i=(s==null?void 0:s.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const n=(s==null?void 0:s.renderBefore)??null;i._$litPart$=o=new U(t.insertBefore(R(),n),n,void 0,s??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis;let y=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kt(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return k}};var mt;y._$litElement$=!0,y.finalized=!0,(mt=w.litElementHydrateSupport)==null||mt.call(w,{LitElement:y});const F=w.litElementPolyfillSupport;F==null||F({LitElement:y});(w.litElementVersions??(w.litElementVersions=[])).push("4.2.1");class Wt{constructor(t){this.storage=t,this.todos=this.storage.load("items",[]),this.listeners=[],this.nextId=this.storage.load("nextId",1)}subscribe(t){this.listeners.push(t)}notify(){this.listeners.forEach(t=>t())}addTodo(t){if(!t||t.trim()==="")return;const s={id:this.nextId++,text:t.trim(),completed:!1,createdAt:new Date().toISOString()};this.todos=[...this.todos,s],this.save(),this.notify()}toggleComplete(t){this.todos=this.todos.map(s=>s.id===t?{...s,completed:!s.completed}:s),this.save(),this.notify()}deleteTodo(t){this.todos=this.todos.filter(s=>s.id!==t),this.save(),this.notify()}updateTodo(t,s){if(s||s.trim()!==""){const i=s.trim();this.todos=this.todos.map(o=>o.id===t?{...o,text:i}:o),this.save(),this.notify()}}clearCompleted(){this.todos=this.todos.filter(t=>!t.completed),this.save(),this.notify()}clearAll(){this.todos=[],this.save(),this.notify()}get activeCount(){return this.todos.filter(t=>!t.completed).length}get completedCount(){return this.todos.filter(t=>t.completed).length}save(){this.storage.save("items",this.todos),this.storage.save("nextId",this.nextId)}}class qt{constructor(t="todos",s=null){this.storageKey=t;const i=typeof localStorage<"u"?localStorage:null;this.storage=s??i}_fullKey(t){return`${this.storageKey}_${t}`}save(t,s){if(this.storage)try{const i=this._fullKey(t),o=JSON.stringify(s);this.storage.setItem(i,o)}catch(i){console.error("Failed to save to storage:",i)}}load(t,s=null){if(!this.storage)return s;try{const i=this._fullKey(t),o=this.storage.getItem(i);return o?JSON.parse(o):s}catch(i){return console.error("Failed to load from storage:",i),s}}remove(t){if(this.storage)try{const s=this._fullKey(t);this.storage.removeItem(s)}catch{console.error("Failed to remove from localStorage:",e)}}clear(){if(this.storage)try{const t=`${this.storageKey}_`,s=[];for(let i=0;i<this.storage.length;i++){const o=this.storage.key(i);o&&o.startsWith(t)&&s.push(o)}s.forEach(i=>this.storage.removeItem(i))}catch(t){console.error("Failed to clear storage:",t)}}}class Q extends y{constructor(){super(),this.inputValue=""}handleSubmit(t){t.preventDefault();const s=this.inputValue.trim();s&&(this.dispatchEvent(new CustomEvent("add-todo",{detail:{text:s},bubbles:!0,composed:!0})),this.inputValue="")}handleInput(t){this.inputValue=t.target.value}render(){return S`
      <form @submit=${this.handleSubmit}>
        <input
          id="new-todo"
          name="todo"
          type="text"
          placeholder="What needs to be done?"
          .value=${this.inputValue}
          @input=${this.handleInput}
          aria-label="New todo"
          autofocus
        />
        <button type="submit" ?disabled=${!this.inputValue.trim()}>
          Add
        </button>
      </form>
    `}}v(Q,"properties",{inputValue:{state:!0}}),v(Q,"styles",V`
    :host {
      display: block;
      margin-bottom: var(--space-xl);
    }

    form {
      display: flex;
      gap: var(--space-sm);
    }

    input {
      flex: 1;
      padding: var(--space-md) var(--space-lg);
      font-size: var(--font-size-md);;
      border: 2px solid var(--color-border-light);
      border-radius: var(--space-sm);
      outline: none;
      transition: border-color 0.3s;
    }

    input:focus {
      border-color: var(--color-accent);
    }

    button {
      padding: var(--space-md) var(--space-2xl);
      background: var(--color-accent);
      color: white;
      border: none;
      border-radius: var(--space-sm);
      font-size: var(--font-size-md);;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: var(--color-accent-dark);
    }

    button:active {
      transform: translateY(1px);
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  `);customElements.define("todo-form",Q);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={CHILD:2},Jt=r=>(...t)=>({_$litDirective$:r,values:t});class Zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Qt}=jt,pt=()=>document.createComment(""),M=(r,t,s)=>{var n;const i=r._$AA.parentNode,o=t===void 0?r._$AB:t._$AA;if(s===void 0){const a=i.insertBefore(pt(),o),c=i.insertBefore(pt(),o);s=new Qt(a,c,r,r.options)}else{const a=s._$AB.nextSibling,c=s._$AM,l=c!==r;if(l){let h;(n=s._$AQ)==null||n.call(s,r),s._$AM=r,s._$AP!==void 0&&(h=r._$AU)!==c._$AU&&s._$AP(h)}if(a!==o||l){let h=s._$AA;for(;h!==a;){const f=h.nextSibling;i.insertBefore(h,o),h=f}}}return s},x=(r,t,s=r)=>(r._$AI(t,s),r),Xt={},Yt=(r,t=Xt)=>r._$AH=t,Gt=r=>r._$AH,J=r=>{r._$AR(),r._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=(r,t,s)=>{const i=new Map;for(let o=t;o<=s;o++)i.set(r[o],o);return i},te=Jt(class extends Zt{constructor(r){if(super(r),r.type!==Ft.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,s){let i;s===void 0?s=t:t!==void 0&&(i=t);const o=[],n=[];let a=0;for(const c of r)o[a]=i?i(c,a):a,n[a]=s(c,a),a++;return{values:n,keys:o}}render(r,t,s){return this.dt(r,t,s).values}update(r,[t,s,i]){const o=Gt(r),{values:n,keys:a}=this.dt(t,s,i);if(!Array.isArray(o))return this.ut=a,n;const c=this.ut??(this.ut=[]),l=[];let h,f,d=0,p=o.length-1,u=0,m=n.length-1;for(;d<=p&&u<=m;)if(o[d]===null)d++;else if(o[p]===null)p--;else if(c[d]===a[u])l[u]=x(o[d],n[u]),d++,u++;else if(c[p]===a[m])l[m]=x(o[p],n[m]),p--,m--;else if(c[d]===a[m])l[m]=x(o[d],n[m]),M(r,l[m+1],o[d]),d++,m--;else if(c[p]===a[u])l[u]=x(o[p],n[u]),M(r,o[d],o[p]),p--,u++;else if(h===void 0&&(h=ft(a,u,m),f=ft(c,d,p)),h.has(c[d]))if(h.has(c[p])){const g=f.get(a[u]),j=g!==void 0?o[g]:null;if(j===null){const st=M(r,o[d]);x(st,n[u]),l[u]=st}else l[u]=x(j,n[u]),M(r,o[d],j),o[g]=null;u++}else J(o[p]),p--;else J(o[d]),d++;for(;u<=m;){const g=M(r,l[m+1]);x(g,n[u]),l[u++]=g}for(;d<=p;){const g=o[d++];g!==null&&J(g)}return this.ut=a,Yt(r,l),k}});class X extends y{constructor(){super(),this.isEditing=!1,this.editValue=""}handleToggle(){this.dispatchEvent(new CustomEvent("toggle-todo",{detail:{id:this.todo.id},bubbles:!0,composed:!0}))}handleDelete(){confirm("Delete this todo?")&&this.dispatchEvent(new CustomEvent("delete-todo",{detail:{id:this.todo.id},bubbles:!0,composed:!0}))}handleEdit(){this.isEditing=!0,this.editValue=this.todo.text}handleSave(){this.editValue.trim()&&(this.dispatchEvent(new CustomEvent("update-todo",{detail:{id:this.todo.id,text:this.editValue},bubbles:!0,composed:!0})),this.isEditing=!1)}handleCancel(){this.isEditing=!1,this.editValue=""}handleKeyDown(t){t.key==="Enter"?this.handleSave():t.key==="Escape"&&this.handleCancel()}updated(t){if(t.has("isEditing")&&this.isEditing){const s=this.renderRoot.querySelector(".edit-input");s&&(s.focus(),s.select())}}render(){return this.isEditing?S`
        <div class="todo-item">
          <input
            class="edit-input"
            type="text"
            .value=${this.editValue}
            @input=${t=>this.editValue=t.target.value}
            @keydown=${this.handleKeyDown}
            autofocus
          />
          <div class="button-group">
            <button class="save-btn" @click=${this.handleSave}>Save</button>
            <button class="cancel-btn" @click=${this.handleCancel}>Cancel</button>
          </div>
        </div>
      `:S`
      <div class="todo-item">
        <input
          type="checkbox"
          class="checkbox"
          .checked=${this.todo.completed}
          @change=${this.handleToggle}
          aria-label="Toggle todo"
        />
        <span class="todo-text ${this.todo.completed?"completed":""}">
          ${this.todo.text}
        </span>
        <div class="button-group">
          <button
            class="edit-btn"
            @click=${this.handleEdit}
            ?disabled=${this.todo.completed}
            aria-label="Edit todo">
            Edit
          </button>
          <button
            class="delete-btn"
            @click=${this.handleDelete}
            aria-label="Delete todo">
            Delete
          </button>
        </div>
      </div>
    `}}v(X,"properties",{todo:{type:Object},isEditing:{state:!0},editValue:{state:!0}}),v(X,"styles",V`
    :host {
      display: block;
    }

    .todo-item {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md);
      background: var(--color-white);
      border-radius: 8px;
      margin-bottom: var(--space-sm);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .todo-item:hover {
      transform: translateX(var(--space-l));
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .checkbox {
      width: var(--space-xl);
      height: var(--space-xl);
      cursor: pointer;
    }

    .todo-text {
      flex: 1;
      font-size: 16px;
      color: var(--color-text-main);
      word-break: break-word;
    }

    .todo-text.completed {
      text-decoration: line-through;
      color: var(--color-text-completed);
    }

    .edit-input {
      flex: 1;
      padding: var(--space-sm);
      font-size: 16px;
      border: 2px solid var(--color-accent);
      border-radius: 4px;
      outline: none;
    }

    .button-group {
      display: flex;
      gap: var(--space-sm);
    }

    button {
      padding: var(--space-sm) var(--space-lg);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: background 0.2s;
    }

    .edit-btn {
      background: #4CAF50;
      color: white;
    }

    .edit-btn:hover {
      background: #45a049;
    }

    .delete-btn {
      background: var(--color-danger);
      color: white;
    }

    .delete-btn:hover {
      background: var(--color-danger-dark);
    }

    .save-btn {
      background: #2196F3;
      color: white;
    }

    .save-btn:hover {
      background: #0b7dda;
    }

    .cancel-btn {
      background: #757575;
      color: white;
    }

    .cancel-btn:hover {
      background: #616161;
    }
  `);customElements.define("todo-item",X);class Y extends y{constructor(){super(),this.todos=[]}render(){return this.todos.length===0?S`
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <p>No todos yet. Add one above!</p>
        </div>
      `:S`
      <ul class="list-container">
        ${te(this.todos,t=>t.id,t=>S`<todo-item .todo=${t}></todo-item>`)}
      </ul>
    `}}v(Y,"properties",{todos:{type:Array}}),v(Y,"styles",V`
    :host {
      display: block;
    }

    .empty-state {
      text-align: center;
      padding: var(--space-2xl) var(--space-lg);
      color: var(--color-white);
      font-size: 18px;
    }

    .empty-icon {
      font-size: 48px;
      margin-bottom: var(--space-lg);
    }

    .list-container {
      max-height: 500px;
      margin: 0;
      padding: 0;
      overflow-y: auto;
    }

    /* Custom scrollbar */
    .list-container::-webkit-scrollbar {
      width: var(--space-sm);
    }

    .list-container::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }

    .list-container::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }

    .list-container::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  `);customElements.define("todo-list",Y);class At extends y{constructor(){super(),this.storageService=new qt,this.model=new Wt(this.storageService),this.model.subscribe(()=>{this.requestUpdate()})}handleAddTodo(t){this.model.addTodo(t.detail.text)}handleToggleTodo(t){this.model.toggleComplete(t.detail.id)}handleDeleteTodo(t){this.model.deleteTodo(t.detail.id)}handleUpdateTodo(t){this.model.updateTodo(t.detail.id,t.detail.text)}handleClearCompleted(){confirm("Clear all completed todos?")&&this.model.clearCompleted()}handleClearAll(){confirm("Clear ALL todos? This cannot be undone.")&&this.model.clearAll()}render(){return S`
      <div class="app-container">
        <h1>My Tasks</h1>
        <p class="subtitle">Stay organized and productive</p>

        <div class="stats">
          <div class="stat-item">
            <div class="stat-value">${this.model.todos.length}</div>
            <div class="stat-label">Total</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.model.activeCount}</div>
            <div class="stat-label">Active</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.model.completedCount}</div>
            <div class="stat-label">Completed</div>
          </div>
        </div>

        <todo-form
          @add-todo=${this.handleAddTodo}>
        </todo-form>

        <todo-list
          .todos=${this.model.todos}
          @toggle-todo=${this.handleToggleTodo}
          @delete-todo=${this.handleDeleteTodo}
          @update-todo=${this.handleUpdateTodo}>
        </todo-list>

        <div class="actions">
          <button
            class="clear-completed"
            @click=${this.handleClearCompleted}
            ?disabled=${this.model.completedCount===0}>
            Clear Completed
          </button>
          <button
            class="clear-all"
            @click=${this.handleClearAll}
            ?disabled=${this.model.todos.length===0}>
            Clear All
          </button>
        </div>

        <div class="footer">
          Lab 9: The final battle!
        </div>
      </div>
    `}}v(At,"styles",V`
    :host {
      display: block;
    }

    .app-container {
      background: var(--color-card-bg);
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      padding: 32px;
      min-height: 400px;
    }

    h1 {
      margin: 0 0 8px 0;
      color: var(--color-text-main);
      font-size: 32px;
      font-weight: 700;
    }

    .subtitle {
      color: var(--color-text-muted);
      margin-bottom: 24px;
      font-size: 14px;
    }

    .stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background: var(--color-stats-bg);
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
      color: var(--color-accent);
    }

    .stat-label {
      font-size: 12px;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .actions {
      display: flex;
      gap: 8px;
      margin-top: 20px;
    }

    button {
      flex: 1;
      padding: 10px 16px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .clear-completed {
      background: var(--color-warning);
      color: white;
    }

    .clear-completed:hover {
      background: var(--color-warning-dark);
    }

    .clear-all {
      background: var(--color-danger);;
      color: white;
    }

    .clear-all:hover {
      background: var(--color-danger-dark);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .footer {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid var(--color-footer-border);
      text-align: center;
      color: var(--color-text-muted);
      font-size: 12px;
    }
  `);customElements.define("todo-app",At);
