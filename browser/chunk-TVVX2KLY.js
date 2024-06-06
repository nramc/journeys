import{c as G,e as _}from"./chunk-TYTFNCOD.js";import{j as N,n as W}from"./chunk-4WY7TPGL.js";import{l as V}from"./chunk-FUA4N2ML.js";import{c as P,d as y,g as h,h as b,j as v}from"./chunk-RGNDWIHZ.js";import{i as $}from"./chunk-W2LWCVAC.js";import{d as H}from"./chunk-RZVCQHV5.js";import{$b as L,Aa as R,G as I,Jb as D,Kb as p,Ra as u,Tb as M,Ub as j,Vb as S,a,cc as B,dc as O,ia as w,k as x,kb as E,oa as k,p as g,pb as A,qb as c,ra as C,ta as l,tc as z,vb as F,wc as f,ya as T}from"./chunk-K63RDP6Q.js";var q=(o,e)=>({startAnimationTime:o,exitAnimationTime:e}),Z=(o,e)=>({value:o,params:e}),J=new C("LIGHTBOX_CONFIG"),K=P("lightbox",[b("void, exit",h({opacity:0,transform:"scale(0.7)"})),b("enter",h({transform:"none"})),v("* => enter",y("{{startAnimationTime}}ms cubic-bezier(0, 0, 0.2, 1)",h({transform:"none",opacity:1}))),v("* => void, * => exit",y("{{exitAnimationTime}}ms cubic-bezier(0.4, 0.0, 0.2, 1)",h({opacity:0})))]),Q=(()=>{let e=class e{constructor(n,i,t){this._document=n,this._focusTrapFactory=i,this._elementRef=t,this.state="enter",this._savePreviouslyFocusedElement()}onAnimationDone(n){n.toState==="enter"?this._trapFocus():(this.overlayRef.dispose(),this._restoreFocus())}_trapFocus(){this._focusTrap||(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)),this._focusTrap.focusInitialElementWhenReady()}_savePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeDialogWasOpened=this._document.activeElement,this._elementRef.nativeElement.focus&&Promise.resolve().then(()=>this._elementRef.nativeElement.focus()))}_restoreFocus(){let n=this._elementFocusedBeforeDialogWasOpened;n&&typeof n.focus=="function"&&n.focus(),this._focusTrap&&this._focusTrap.destroy()}};e.\u0275fac=function(i){return new(i||e)(c(H,8),c(V),c(u))},e.\u0275cmp=T({type:e,selectors:[["lightbox"]],hostAttrs:["tabindex","-1","aria-modal","true"],hostVars:12,hostBindings:function(i,t){i&1&&O("@lightbox.done",function(d){return t.onAnimationDone(d)}),i&2&&(L("@lightbox",f(9,Z,t.state,f(6,q,t.startAnimationTime,t.exitAnimationTime))),D("id","lightbox-"+t.id)("role",t.role)("aria-labelledby",t.ariaLabel?null:t.ariaLabelledBy)("aria-label",t.ariaLabel)("aria-describedby",t.ariaDescribedBy||null))},standalone:!0,features:[z],decls:2,vars:4,consts:[["aria-label","Close",1,"g-btn-close",3,"click","innerHTML"],[3,"id","destroyRef","skipInitConfig"]],template:function(i,t){i&1&&(M(0,"i",0),B("click",function(){return t.overlayRef.detach()}),j(),S(1,"gallery",1)),i&2&&(p("innerHTML",t.closeIcon,E),A(),p("id",t.id)("destroyRef",!1)("skipInitConfig",!0))},dependencies:[_],styles:["lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}  lightbox:focus{outline:none}  lightbox gallery{height:100%;width:100%;overflow:hidden;margin:0}  lightbox gallery gallery-core{height:100%!important}  .g-backdrop{background-color:#00000052}  .fullscreen{width:100%}  .fullscreen   lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}  .g-overlay{margin:auto}@media only screen and (max-width: 480px){  .g-overlay{width:100%}  .g-overlay   lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}}  .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width: 480px){  .g-btn-close{right:.7em;top:.7em}}  .g-btn-close svg{width:100%;height:100%;opacity:.6;transition:opacity linear .15s;filter:drop-shadow(0px 0px 2px rgba(0,0,0,.8))}  .g-btn-close svg:hover{opacity:1}"],data:{animation:[K]},changeDetection:0});let o=e;return o})(),U={backdropClass:"g-backdrop",panelClass:"g-overlay",hasBackdrop:!0,keyboardShortcuts:!0,role:"lightbox",startAnimationTime:150,exitAnimationTime:75,closeIcon:`<?xml version="1.0" encoding="UTF-8"?>
<svg width="512px" height="512px" enable-background="new 0 0 47.971 47.971" version="1.1" viewBox="0 0 47.971 47.971" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#fff"/>
</svg>
`},ee=(()=>{let e=class e{constructor(n,i,t,s){this._gallery=i,this._overlay=t,this._sanitizer=s,this.opened=new g,this.closed=new g,this._config=n?a(a({},U),n):U}setConfig(n){this._config=a(a({},this._config),n)}open(n=0,i="lightbox",t){let s=t?a(a({},this._config),t):this._config,d={backdropClass:s.backdropClass,panelClass:s.panelClass,hasBackdrop:s.hasBackdrop,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:this._overlay.scrollStrategies.block(),disposeOnNavigation:!0},m=this._gallery.ref(i);m.set(n),this._overlayRef=this._overlay.create(d),this._overlayRef.attachments().subscribe(()=>this.opened.next(i)),this._overlayRef.detachments().subscribe(()=>this.closed.next(i));let X=new N(Q),r=this._overlayRef.attach(X);r.instance.id=i,r.instance.overlayRef=this._overlayRef,r.instance.closeIcon=this._sanitizer.bypassSecurityTrustHtml(this._config.closeIcon),r.instance.role=this._config.role,r.instance.ariaLabel=this._config.ariaLabel,r.instance.ariaLabelledBy=this._config.ariaLabelledBy,r.instance.ariaDescribedBy=this._config.ariaDescribedBy,r.instance.startAnimationTime=this._config.startAnimationTime,r.instance.exitAnimationTime=this._config.exitAnimationTime,s.hasBackdrop&&this._overlayRef.backdropClick().subscribe(()=>this.close()),s.keyboardShortcuts&&this._overlayRef.keydownEvents().subscribe(Y=>{switch(Y.keyCode){case 37:m.prev();break;case 39:m.next();break;case 27:this.close()}})}close(){this._overlayRef.hasAttached()&&this._overlayRef.detach()}};e.\u0275fac=function(i){return new(i||e)(l(J,8),l(G),l(W),l($))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var ze=(()=>{let e=class e{constructor(n,i,t){this._lightbox=n,this._el=i,this._renderer=t,this.clickEvent=x.EMPTY,this.index=0,this.id="root"}ngOnInit(){this._renderer.setStyle(this._el.nativeElement,"cursor","pointer"),this.clickEvent=I(this._el.nativeElement,"click").pipe(w(()=>this._lightbox.open(this.index,this.id))).subscribe()}ngOnDestroy(){this.clickEvent.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(c(ee),c(u),c(F))},e.\u0275dir=R({type:e,selectors:[["","lightbox",""]],inputs:{index:[0,"lightbox","index"],id:[0,"gallery","id"]},standalone:!0});let o=e;return o})();export{J as a,ze as b};
