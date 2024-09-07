import{c as Y,e as _,f as x}from"./chunk-O6HEJZ67.js";import{a as V,s as X}from"./chunk-ZQZLPFK4.js";import{c as U,d as y,g as h,h as b,j as v}from"./chunk-RGNDWIHZ.js";import{k as W}from"./chunk-2OUUPXAC.js";import{d as N}from"./chunk-YUHWLLNB.js";import{d as G}from"./chunk-Z66RIGB5.js";import{Ac as f,G as w,Lb as S,Mb as p,Qa as u,Vb as L,Wb as B,Xb as O,a,bc as z,ec as H,fc as $,ha as k,jb as D,k as I,na as C,oa as T,ob as M,p as g,pb as c,qa as R,sa as l,ub as j,va as E,wa as A,xa as F,xc as P}from"./chunk-CACGWYQA.js";var K=(o,e)=>({startAnimationTime:o,exitAnimationTime:e}),Q=(o,e)=>({value:o,params:e}),ee=new R("LIGHTBOX_CONFIG"),te=U("lightbox",[b("void, exit",h({opacity:0,transform:"scale(0.7)"})),b("enter",h({transform:"none"})),v("* => enter",y("{{startAnimationTime}}ms cubic-bezier(0, 0, 0.2, 1)",h({transform:"none",opacity:1}))),v("* => void, * => exit",y("{{exitAnimationTime}}ms cubic-bezier(0.4, 0.0, 0.2, 1)",h({opacity:0})))]),ie=(()=>{let e=class e{constructor(n,t,i){this._document=n,this._focusTrapFactory=t,this._elementRef=i,this.state="enter",this._savePreviouslyFocusedElement()}onAnimationDone(n){n.toState==="enter"?this._trapFocus():(this.overlayRef.dispose(),this._restoreFocus())}_trapFocus(){this._focusTrap||(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)),this._focusTrap.focusInitialElementWhenReady()}_savePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeDialogWasOpened=this._document.activeElement,this._elementRef.nativeElement.focus&&Promise.resolve().then(()=>this._elementRef.nativeElement.focus()))}_restoreFocus(){let n=this._elementFocusedBeforeDialogWasOpened;n&&typeof n.focus=="function"&&n.focus(),this._focusTrap&&this._focusTrap.destroy()}};e.\u0275fac=function(t){return new(t||e)(c(G,8),c(W),c(u))},e.\u0275cmp=E({type:e,selectors:[["lightbox"]],hostAttrs:["tabindex","-1","aria-modal","true"],hostVars:12,hostBindings:function(t,i){t&1&&$("@lightbox.done",function(d){return i.onAnimationDone(d)}),t&2&&(z("@lightbox",f(9,Q,i.state,f(6,K,i.startAnimationTime,i.exitAnimationTime))),S("id","lightbox-"+i.id)("role",i.role)("aria-labelledby",i.ariaLabel?null:i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-describedby",i.ariaDescribedBy||null))},standalone:!0,features:[P],decls:2,vars:4,consts:[["aria-label","Close",1,"g-btn-close",3,"click","innerHTML"],[3,"id","destroyRef","skipInitConfig"]],template:function(t,i){t&1&&(L(0,"i",0),H("click",function(){return i.overlayRef.detach()}),B(),O(1,"gallery",1)),t&2&&(p("innerHTML",i.closeIcon,D),M(),p("id",i.id)("destroyRef",!1)("skipInitConfig",!0))},dependencies:[_],styles:["lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}  lightbox:focus{outline:none}  lightbox gallery{height:100%;width:100%;overflow:hidden;margin:0}  lightbox gallery gallery-core{height:100%!important}  .g-backdrop{background-color:#00000052}  .fullscreen{width:100%}  .fullscreen   lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}  .g-overlay{margin:auto}@media only screen and (max-width: 480px){  .g-overlay{width:100%}  .g-overlay   lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}}  .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width: 480px){  .g-btn-close{right:.7em;top:.7em}}  .g-btn-close svg{width:100%;height:100%;opacity:.6;transition:opacity linear .15s;filter:drop-shadow(0px 0px 2px rgba(0,0,0,.8))}  .g-btn-close svg:hover{opacity:1}"],data:{animation:[te]},changeDetection:0});let o=e;return o})(),q={backdropClass:"g-backdrop",panelClass:"g-overlay",hasBackdrop:!0,keyboardShortcuts:!0,role:"lightbox",startAnimationTime:150,exitAnimationTime:75,closeIcon:`<?xml version="1.0" encoding="UTF-8"?>
<svg width="512px" height="512px" enable-background="new 0 0 47.971 47.971" version="1.1" viewBox="0 0 47.971 47.971" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#fff"/>
</svg>
`},ne=(()=>{let e=class e{constructor(n,t,i,s){this._gallery=t,this._overlay=i,this._sanitizer=s,this.opened=new g,this.closed=new g,this._config=n?a(a({},q),n):q}setConfig(n){this._config=a(a({},this._config),n)}open(n=0,t="lightbox",i){let s=i?a(a({},this._config),i):this._config,d={backdropClass:s.backdropClass,panelClass:s.panelClass,hasBackdrop:s.hasBackdrop,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:this._overlay.scrollStrategies.block(),disposeOnNavigation:!0},m=this._gallery.ref(t);m.set(n),this._overlayRef=this._overlay.create(d),this._overlayRef.attachments().subscribe(()=>this.opened.next(t)),this._overlayRef.detachments().subscribe(()=>this.closed.next(t));let Z=new V(ie),r=this._overlayRef.attach(Z);r.instance.id=t,r.instance.overlayRef=this._overlayRef,r.instance.closeIcon=this._sanitizer.bypassSecurityTrustHtml(this._config.closeIcon),r.instance.role=this._config.role,r.instance.ariaLabel=this._config.ariaLabel,r.instance.ariaLabelledBy=this._config.ariaLabelledBy,r.instance.ariaDescribedBy=this._config.ariaDescribedBy,r.instance.startAnimationTime=this._config.startAnimationTime,r.instance.exitAnimationTime=this._config.exitAnimationTime,s.hasBackdrop&&this._overlayRef.backdropClick().subscribe(()=>this.close()),s.keyboardShortcuts&&this._overlayRef.keydownEvents().subscribe(J=>{switch(J.keyCode){case 37:m.prev();break;case 39:m.next();break;case 27:this.close()}})}close(){this._overlayRef.hasAttached()&&this._overlayRef.detach()}};e.\u0275fac=function(t){return new(t||e)(l(ee,8),l(Y),l(X),l(N))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var ze=(()=>{let e=class e{constructor(n,t,i){this._lightbox=n,this._el=t,this._renderer=i,this.clickEvent=I.EMPTY,this.index=0,this.id="root"}ngOnInit(){this._renderer.setStyle(this._el.nativeElement,"cursor","pointer"),this.clickEvent=w(this._el.nativeElement,"click").pipe(k(()=>this._lightbox.open(this.index,this.id))).subscribe()}ngOnDestroy(){this.clickEvent.unsubscribe()}};e.\u0275fac=function(t){return new(t||e)(c(ne),c(u),c(j))},e.\u0275dir=F({type:e,selectors:[["","lightbox",""]],inputs:{index:[0,"lightbox","index"],id:[0,"gallery","id"]},standalone:!0});let o=e;return o})(),He=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=A({type:e}),e.\u0275inj=T({imports:[x,x]});let o=e;return o})();export{ee as a,ze as b,He as c};
