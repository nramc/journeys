import{D as m}from"./chunk-RZVCQHV5.js";import{Ra as l,Xa as p,oa as d,ta as f}from"./chunk-K63RDP6Q.js";var u;try{u=typeof Intl<"u"&&Intl.v8BreakIterator}catch{u=!1}var b=(()=>{let e=class e{constructor(o){this._platformId=o,this.isBrowser=this._platformId?m(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||u)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(h){return new(h||e)(f(p))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var r;function E(){if(r==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>r=!0}))}finally{r=r||!1}return r}function B(t){return E()?t:!!t.capture}var i=function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t}(i||{}),s,n;function R(){if(n==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return n=!1,n;if("scrollBehavior"in document.documentElement.style)n=!0;else{let t=Element.prototype.scrollTo;t?n=!/\{\s*\[native code\]\s*\}/.test(t.toString()):n=!1}}return n}function j(){if(typeof document!="object"||!document)return i.NORMAL;if(s==null){let t=document.createElement("div"),e=t.style;t.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";let a=document.createElement("div"),o=a.style;o.width="2px",o.height="1px",t.appendChild(a),document.body.appendChild(t),s=i.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,s=t.scrollLeft===0?i.NEGATED:i.INVERTED),t.remove()}return s}var c;function y(){if(c==null){let t=typeof document<"u"?document.head:null;c=!!(t&&(t.createShadowRoot||t.attachShadow))}return c}function L(t){if(y()){let e=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function M(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let e=t.shadowRoot.activeElement;if(e===t)break;t=e}return t}function P(t){return t.composedPath?t.composedPath()[0]:t.target}function _(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function O(t){return t!=null&&`${t}`!="false"}function V(t,e=0){return w(t)?Number(t):e}function w(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function x(t){return Array.isArray(t)?t:[t]}function G(t){return t==null?"":typeof t=="string"?t:`${t}px`}function C(t){return t instanceof l?t.nativeElement:t}export{b as a,B as b,i as c,R as d,j as e,L as f,M as g,P as h,_ as i,O as j,V as k,x as l,G as m,C as n};
