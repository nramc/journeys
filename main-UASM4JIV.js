import{a as We}from"./chunk-DHWCVBNL.js";import"./chunk-RMFYC2YU.js";import{a as Be,b as je,c as Ge,d as O}from"./chunk-6MHR44F4.js";import{a as Qe}from"./chunk-RGH7FVH7.js";import"./chunk-GROMJMAO.js";import{a as Ue}from"./chunk-2F4PKYR2.js";import{b as ze}from"./chunk-MYTWCO75.js";import"./chunk-EKVAOTXH.js";import{a as vt}from"./chunk-4VAFS4EM.js";import{a as _t}from"./chunk-7XVBYKDH.js";import{a as Re,b as Ne,c as Pe}from"./chunk-2MJXHDZF.js";import"./chunk-VCYILZPG.js";import"./chunk-PMYUCPMS.js";import"./chunk-NHLM6S44.js";import{a as bt}from"./chunk-XRXQ6LCZ.js";import{a as ve}from"./chunk-PRJUFUX6.js";import{a as ut,c as be,d as ft,e as we,g as Ce,h as ye,i as Me,j as xe,k as ke,l as Se,m as Te}from"./chunk-BS35BKX7.js";import"./chunk-B2BFUYFN.js";import{a as Le,b as Q,c as Oe,e as Ft}from"./chunk-ABTV5DUN.js";import"./chunk-SWCMG7GH.js";import{u as Fe}from"./chunk-RDWL67WJ.js";import{c as L}from"./chunk-K7SNHORH.js";import{a as Ve,b as gt,c as N}from"./chunk-CSB4GUNQ.js";import{a as x,b as w}from"./chunk-F55ZGMQZ.js";import{g as F,j as He}from"./chunk-WGCAINHC.js";import{D as Ie,M as R,a as W,d as fe,g as ge,h as _e,j as ht,p as Ot,r as De,y as Ae,z as Ee}from"./chunk-IYBDWB6D.js";import{b as ce,c as U,d as z,e as le,f as me,g as pe,h as he,i as ue}from"./chunk-5JABALM5.js";import{s as pt,t as ie,u as re,w as ae,y as se,z as de}from"./chunk-BRSHBHXO.js";import{$c as $,Aa as it,Ac as m,Ba as rt,Bb as J,Bc as X,Ca as qt,Cb as G,Cc as ee,Ea as Jt,Ga as Zt,I as Ht,Ia as at,J as q,Jc as H,Ka as j,La as Yt,N as Ut,O as zt,Ob as It,P as St,Pb as k,Qb as S,T as Wt,Tc as ne,Ub as l,Vb as i,Wb as r,Wc as oe,Xb as p,_ as Tt,_c as lt,aa as y,dc as Z,dd as mt,ha as et,ia as nt,ib as s,ic as v,k as E,ka as Dt,l as Gt,lc as f,ma as a,mc as T,nb as Et,nc as b,oa as Qt,ob as Xt,oc as Y,pc as Lt,qb as $t,qc as D,rc as A,sa as P,ta as B,tb as Kt,v as Vt,vc as V,wa as At,wc as ct,xa as ot,xb as c,xc as M,yb as st,z as I,zb as dt,zc as te}from"./chunk-UQZIQZBC.js";var wt=(()=>{class e{constructor(){this.loadingSubject=new Gt(!1),this.loading$=this.loadingSubject.asObservable()}showLoading(){this.loadingSubject.next(!0)}hideLoading(){this.loadingSubject.next(!1)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=et({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function pn(e,h){e&1&&(i(0,"div",0),p(1,"mat-spinner"),r())}var qe=(()=>{class e{constructor(){this.loadingService=a(wt),this.isLoading=L(this.loadingService.loading$,{initialValue:!1})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-loading-spinner"]],decls:1,vars:1,consts:[[1,"spinner-overlay"]],template:function(n,o){n&1&&k(0,pn,2,0,"div",0),n&2&&S(o.isLoading()?0:-1)},dependencies:[ve],styles:[".spinner-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#3459e61a;display:flex;justify-content:center;align-items:center;z-index:1000}"],changeDetection:0})}}return e})();var Mt=["*"],un=["content"],fn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],gn=["mat-drawer","mat-drawer-content","*"];function _n(e,h){if(e&1){let t=Z();i(0,"div",1),v("click",function(){P(t);let o=f();return B(o._onBackdropClicked())}),r()}if(e&2){let t=f();M("mat-drawer-shown",t._isShowingBackdrop())}}function vn(e,h){e&1&&(i(0,"mat-drawer-content"),b(1,2),r())}var bn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],wn=["mat-sidenav","mat-sidenav-content","*"];function Cn(e,h){if(e&1){let t=Z();i(0,"div",1),v("click",function(){P(t);let o=f();return B(o._onBackdropClicked())}),r()}if(e&2){let t=f();M("mat-drawer-shown",t._isShowingBackdrop())}}function yn(e,h){e&1&&(i(0,"mat-sidenav-content"),b(1,2),r())}var Mn=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var xn=new Dt("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Pt=new Dt("MAT_DRAWER_CONTAINER"),Ct=(()=>{class e extends Q{_platform=a(W);_changeDetectorRef=a(mt);_container=a(Nt);constructor(){let t=a(j),n=a(Le),o=a(rt);super(t,n,o)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:n}=this._container;return t!=null&&t.mode!=="over"&&t.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,o){n&2&&(ct("margin-left",o._container._contentMargins.left,"px")("margin-right",o._container._contentMargins.right,"px"),M("mat-drawer-content-hidden",o._shouldBeHidden()))},features:[H([{provide:Q,useExisting:e}]),J],ngContentSelectors:Mt,decls:1,vars:0,template:function(n,o){n&1&&(T(),b(0))},encapsulation:2,changeDetection:0})}return e})(),Rt=(()=>{class e{_elementRef=a(j);_focusTrapFactory=a(Ee);_focusMonitor=a(De);_platform=a(W);_ngZone=a(rt);_renderer=a($t);_interactivityChecker=a(Ae);_doc=a(ot);_container=a(Pt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=R(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=R(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(R(t))}_opened=Jt(!1);_openedVia=null;_animationStarted=new E;_animationEnd=new E;openedChange=new it(!0);_openedStream=this.openedChange.pipe(q(t=>t),I(()=>{}));openedStart=this._animationStarted.pipe(q(()=>this.opened),St(void 0));_closedStream=this.openedChange.pipe(q(t=>!t),I(()=>{}));closedStart=this._animationStarted.pipe(q(()=>!this.opened),St(void 0));_destroyed=new E;onPositionChanged=new it;_content;_modeChanged=new E;_injector=a(At);_changeDetectorRef=a(mt);constructor(){this.openedChange.pipe(y(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,n=this._elementRef.nativeElement;return[t.listen(n,"keydown",o=>{o.keyCode===27&&!this.disableClose&&!Ie(o)&&this._ngZone.run(()=>{this.close(),o.stopPropagation(),o.preventDefault()})}),t.listen(n,"transitionend",this._handleTransitionEvent),t.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,n){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{d(),u(),t.removeAttribute("tabindex")},d=this._renderer.listen(t,"blur",o),u=this._renderer.listen(t,"mousedown",o)})),t.focus(n)}_focusByCssSelector(t,n){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,n)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Et(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,n){t&&n&&(this._openedVia=n);let o=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),o}_setOpen(t,n,o){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&n&&this._restoreFocus(o),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(zt(1)).subscribe(u=>d(u?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,o=n.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),o.insertBefore(this._anchor,n)),o.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=t=>{let n=this._elementRef.nativeElement;t.target===n&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["mat-drawer"]],viewQuery:function(n,o){if(n&1&&Lt(un,5),n&2){let d;D(d=A())&&(o._content=d.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,o){n&2&&(It("align",null)("tabIndex",o.mode!=="side"?"-1":null),ct("visibility",!o._container&&!o.opened?"hidden":null),M("mat-drawer-end",o.position==="end")("mat-drawer-over",o.mode==="over")("mat-drawer-push",o.mode==="push")("mat-drawer-side",o.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Mt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,o){n&1&&(T(),i(0,"div",1,0),b(2),r())},dependencies:[Q],encapsulation:2,changeDetection:0})}return e})(),Nt=(()=>{class e{_dir=a(_e,{optional:!0});_element=a(j);_ngZone=a(rt);_changeDetectorRef=a(mt);_animationDisabled=ge();_transitionsEnabled=!1;_allDrawers;_drawers=new Yt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=R(t)}_autosize=a(xn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:R(t)}_backdropOverride=null;backdropClick=new it;_start=null;_end=null;_left=null;_right=null;_destroyed=new E;_doCheckSubject=new E;_contentMargins={left:null,right:null};_contentMarginChanges=new E;get scrollable(){return this._userContent||this._content}_injector=a(At);constructor(){let t=a(W),n=a(Oe);this._dir?.change.pipe(y(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(y(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Tt(this._allDrawers),y(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Tt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ut(10),y(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let o=this._left._getWidth();t+=o,n-=o}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let o=this._right._getWidth();n+=o,t-=o}}t=t||null,n=n||null,(t!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:t,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(y(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(y(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(y(this._drawers.changes)).subscribe(()=>{Et({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(y(Ht(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let n=this._element.nativeElement.classList,o="mat-drawer-container-has-open";t?n.add(o):n.remove(o)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["mat-drawer-container"]],contentQueries:function(n,o,d){if(n&1&&Y(d,Ct,5)(d,Rt,5),n&2){let u;D(u=A())&&(o._content=u.first),D(u=A())&&(o._allDrawers=u)}},viewQuery:function(n,o){if(n&1&&Lt(Ct,5),n&2){let d;D(d=A())&&(o._userContent=d.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,o){n&2&&M("mat-drawer-container-explicit-backdrop",o._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[H([{provide:Pt,useExisting:e}])],ngContentSelectors:gn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,o){n&1&&(T(fn),k(0,_n,1,2,"div",0),b(1),b(2,1),k(3,vn,2,0,"mat-drawer-content")),n&2&&(S(o.hasBackdrop?0:-1),s(3),S(o._content?-1:3))},dependencies:[Ct],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return e})(),yt=(()=>{class e extends Ct{static \u0275fac=(()=>{let t;return function(o){return(t||(t=at(e)))(o||e)}})();static \u0275cmp=c({type:e,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[H([{provide:Q,useExisting:e}]),J],ngContentSelectors:Mt,decls:1,vars:0,template:function(n,o){n&1&&(T(),b(0))},encapsulation:2,changeDetection:0})}return e})(),Bt=(()=>{class e extends Rt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=R(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Ot(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Ot(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(o){return(t||(t=at(e)))(o||e)}})();static \u0275cmp=c({type:e,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,o){n&2&&(It("tabIndex",o.mode!=="side"?"-1":null)("align",null),ct("top",o.fixedInViewport?o.fixedTopGap:null,"px")("bottom",o.fixedInViewport?o.fixedBottomGap:null,"px"),M("mat-drawer-end",o.position==="end")("mat-drawer-over",o.mode==="over")("mat-drawer-push",o.mode==="push")("mat-drawer-side",o.mode==="side")("mat-sidenav-fixed",o.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[H([{provide:Rt,useExisting:e}]),J],ngContentSelectors:Mt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,o){n&1&&(T(),i(0,"div",1,0),b(2),r())},dependencies:[Q],encapsulation:2,changeDetection:0})}return e})(),Je=(()=>{class e extends Nt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(o){return(t||(t=at(e)))(o||e)}})();static \u0275cmp=c({type:e,selectors:[["mat-sidenav-container"]],contentQueries:function(n,o,d){if(n&1&&Y(d,yt,5)(d,Bt,5),n&2){let u;D(u=A())&&(o._content=u.first),D(u=A())&&(o._allDrawers=u)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,o){n&2&&M("mat-drawer-container-explicit-backdrop",o._backdropOverride)},exportAs:["matSidenavContainer"],features:[H([{provide:Pt,useExisting:e},{provide:Nt,useExisting:e}]),J],ngContentSelectors:wn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,o){n&1&&(T(bn),k(0,Cn,1,2,"div",0),b(1),b(2,1),k(3,yn,2,0,"mat-sidenav-content")),n&2&&(S(o.hasBackdrop?0:-1),s(3),S(o._content?-1:3))},dependencies:[yt],styles:[Mn],encapsulation:2,changeDetection:0})}return e})(),Ze=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=st({type:e});static \u0275inj=nt({imports:[Ft,ht,Ft]})}return e})();var kn=["*",[["mat-toolbar-row"]]],Sn=["*","mat-toolbar-row"],Tn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=dt({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),Ye=(()=>{class e{_elementRef=a(j);_platform=a(W);_document=a(ot);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["mat-toolbar"]],contentQueries:function(n,o,d){if(n&1&&Y(d,Tn,5),n&2){let u;D(u=A())&&(o._toolbarRows=u)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,o){n&2&&(te(o.color?"mat-"+o.color:""),M("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Sn,decls:2,vars:0,template:function(n,o){n&1&&(T(kn),b(0),b(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return e})();var Xe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=st({type:e});static \u0275inj=nt({imports:[ht]})}return e})();function Dn(e,h){if(e&1&&(i(0,"div",1)(1,"mat-icon"),m(2),r(),i(3,"span"),m(4),r()()),e&2){let t=f();s(2),X(t.pageInfo().icon),s(2),X(t.pageInfo().name)}}function An(e,h){if(e&1&&(i(0,"div",2)(1,"mat-icon"),m(2),r(),i(3,"span",3),m(4),r()()),e&2){let t=f();s(2),X(t.pageInfo().icon),s(2),X(t.pageInfo().name)}}var $e=(()=>{class e{constructor(){this.showLabel=$(!0),this.pageInfo=$.required()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-navigation-menu-item"]],inputs:{showLabel:[1,"showLabel"],pageInfo:[1,"pageInfo"]},decls:3,vars:2,consts:[["routerLinkActive","active",1,"mb-2",3,"routerLink"],[1,"flex","items-center","gap-2"],[1,"flex","items-center","flex-col"],[1,"text-[0.6rem]","text-center","truncate","w-full","overflow-hidden","text-ellipsis","whitespace-nowrap"]],template:function(n,o){n&1&&(i(0,"a",0),k(1,Dn,5,2,"div",1)(2,An,5,2,"div",2),r()),n&2&&(l("routerLink",o.pageInfo().path),s(),S(o.showLabel()?1:2))},dependencies:[w,x,z,le,vt],encapsulation:2})}}return e})();var xt=(()=>{class e{constructor(){this.viewContainer=a(Kt),this.templateRef=a(Xt),this.authService=a(N),this.userContext=L(this.authService.getUserContext(),{initialValue:new Ve}),this.isUserAuthenticated=oe(()=>this.userContext().isAuthenticated),Zt(()=>{this.isUserAuthenticated()?this.viewContainer.clear():this.viewContainer.createEmbeddedView(this.templateRef)})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=dt({type:e,selectors:[["","appHasAnonymous",""]]})}}return e})();function En(e,h){if(e&1&&(i(0,"mat-list-item"),p(1,"app-navigation-menu-item",1),r()),e&2){let t=f();s(),l("pageInfo",t.DASHBOARD)("showLabel",t.showLabel())}}function In(e,h){if(e&1&&(i(0,"mat-list-item"),p(1,"app-navigation-menu-item",1),r()),e&2){let t=f();s(),l("pageInfo",t.GALLERY)("showLabel",t.showLabel())}}function Ln(e,h){if(e&1&&(i(0,"mat-list-item"),p(1,"app-navigation-menu-item",1),r()),e&2){let t=f();s(),l("pageInfo",t.JOURNEY_SEARCH)("showLabel",t.showLabel())}}function On(e,h){if(e&1&&(i(0,"mat-list-item"),p(1,"app-navigation-menu-item",1),r()),e&2){let t=f();s(),l("pageInfo",t.STATISTICS)("showLabel",t.showLabel())}}function Fn(e,h){if(e&1&&(i(0,"mat-list-item"),p(1,"app-navigation-menu-item",1),r()),e&2){let t=f();s(),l("pageInfo",t.TIMELINE)("showLabel",t.showLabel())}}function Rn(e,h){if(e&1&&(i(0,"mat-list-item"),p(1,"app-navigation-menu-item",1),r()),e&2){let t=f();s(),l("pageInfo",t.LOGIN)("showLabel",t.showLabel())}}var Ke=(()=>{class e{constructor(){this.HOME=ut,this.DASHBOARD=Ce,this.GALLERY=ye,this.JOURNEY_SEARCH=we,this.STATISTICS=Me,this.TIMELINE=xe,this.TOOLS=ke,this.ABOUT=Te,this.USER_MANUAL=Se,this.LOGIN=be,this.authService=a(N),this.isUserAuthenticated=L(this.authService.isUserAuthenticatedAsObservable(),{initialValue:!1}),this.showLabel=$(!0),this.navigationLinkClick=lt()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-navigation-menu"]],inputs:{showLabel:[1,"showLabel"]},outputs:{navigationLinkClick:"navigationLinkClick"},decls:15,vars:8,consts:[[3,"click","keydown.enter"],[3,"pageInfo","showLabel"],[4,"appHasAuthenticated"],[4,"appHasAnonymous"]],template:function(n,o){n&1&&(i(0,"mat-nav-list",0),v("click",function(){return o.navigationLinkClick.emit()})("keydown.enter",function(){return o.navigationLinkClick.emit()}),i(1,"mat-list-item"),p(2,"app-navigation-menu-item",1),r(),G(3,En,2,2,"mat-list-item",2)(4,In,2,2,"mat-list-item",2)(5,Ln,2,2,"mat-list-item",2)(6,On,2,2,"mat-list-item",2)(7,Fn,2,2,"mat-list-item",2),i(8,"mat-list-item"),p(9,"app-navigation-menu-item",1),r(),i(10,"mat-list-item"),p(11,"app-navigation-menu-item",1),r(),G(12,Rn,2,2,"mat-list-item",3),i(13,"mat-list-item"),p(14,"app-navigation-menu-item",1),r()()),n&2&&(s(2),l("pageInfo",o.HOME)("showLabel",o.showLabel()),s(7),l("pageInfo",o.TOOLS)("showLabel",o.showLabel()),s(2),l("pageInfo",o.ABOUT)("showLabel",o.showLabel()),s(3),l("pageInfo",o.USER_MANUAL)("showLabel",o.showLabel()))},dependencies:[Ze,w,Pe,Ne,Re,O,Xe,$e,bt,xt],encapsulation:2})}}return e})();var tn=(()=>{class e{constructor(){this.themeService=a(Ue),document.body.classList.toggle("dark",this.themeService.isDarkMode())}toggleTheme(){this.themeService.toggle(),document.body.classList.toggle("dark")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-theme-toggle"]],decls:3,vars:2,consts:[["mat-icon-button","",3,"click","matTooltip"],[1,"text-primary"]],template:function(n,o){n&1&&(i(0,"button",0),v("click",function(){return o.toggleTheme()}),i(1,"mat-icon",1),m(2),r()()),n&2&&(l("matTooltip",o.themeService.isDarkMode()?"Switch to light mode":"Switch to dark mode"),s(2),ee(" ",o.themeService.isDarkMode()?"dark_mode":"light_mode"," "))},dependencies:[w,x,F,_t],encapsulation:2,changeDetection:0})}}return e})();function Nn(e,h){e&1&&(i(0,"button",10)(1,"mat-icon",11),m(2,"lock_person"),r()())}function Pn(e,h){if(e&1&&(i(0,"button",12)(1,"mat-icon",13),m(2,"account_circle"),r()()),e&2){f();let t=V(1);l("matMenuTriggerFor",t)}}function Bn(e,h){if(e&1&&(i(0,"button",14)(1,"mat-icon",15),m(2,"power_settings_new"),r()()),e&2){let t=f();l("routerLink",t.LOGOUT_PAGE_INFO.path)}}var en=(()=>{class e{constructor(){this.LOGOUT_PAGE_INFO=ft}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-toolbar-actions"]],decls:25,vars:0,consts:[["accountMenu","matMenu"],["mat-menu-item","","routerLink","/my-account/profile"],[1,"flex","items-center"],["mat-menu-item","","routerLink","/my-account/securitySettings"],["mat-menu-item","","routerLink","/my-account/delete"],[1,"inline-flex"],["mat-icon-button","","routerLink","/login",4,"appHasAnonymous"],[1,"contents"],["mat-icon-button","",3,"matMenuTriggerFor",4,"appHasAuthenticated"],["mat-icon-button","",3,"routerLink",4,"appHasAuthenticated"],["mat-icon-button","","routerLink","/login"],["matTooltip","Login",1,"text-primary"],["mat-icon-button","",3,"matMenuTriggerFor"],["matTooltip","My Account",1,"text-primary"],["mat-icon-button","",3,"routerLink"],["matTooltip","Logout",1,"text-primary"]],template:function(n,o){n&1&&(i(0,"mat-menu",null,0)(2,"button",1)(3,"div",2)(4,"mat-icon"),m(5,"person"),r(),i(6,"span"),m(7,"My Profile"),r()()(),i(8,"button",3)(9,"div",2)(10,"mat-icon"),m(11,"settings"),r(),i(12,"span"),m(13,"Security Settings"),r()()(),i(14,"button",4)(15,"div",2)(16,"mat-icon"),m(17,"delete"),r(),i(18,"span"),m(19,"Delete Account"),r()()()(),i(20,"div",5),G(21,Nn,3,0,"button",6),p(22,"app-theme-toggle",7),G(23,Pn,3,1,"button",8)(24,Bn,3,1,"button",9),r())},dependencies:[w,x,F,O,je,Be,Ge,vt,_t,z,tn,xt,bt],encapsulation:2})}}return e})();var nn=(()=>{class e{constructor(){this.HOME_PAGE_INFO=ut,this.LOGOUT_PAGE_INFO=ft,this.toggleNavigation=lt()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-toolbar"]],outputs:{toggleNavigation:"toggleNavigation"},decls:14,vars:2,consts:[["color","primary",1,"toolbar","flex","justify-between","align-middle"],[1,"app-brand-section","flex","justify-between","align-bottom"],["mat-icon-button","",3,"click"],[1,"app-brand",3,"routerLink"],["ngSrc","assets/logo/journey-logo-180x180.png","alt","Journey","height","180","width","180","priority","",1,"brand-logo"],[1,"app-name",3,"routerLink"],[1,"app-title","text-primary","dark:text-primary-dark"],[1,"app-tagline"],[1,"inline-flex"]],template:function(n,o){n&1&&(i(0,"mat-toolbar",0)(1,"div",1)(2,"button",2),v("click",function(){return o.toggleNavigation.emit()}),i(3,"mat-icon"),m(4,"menu"),r()(),i(5,"a",3),p(6,"img",4),r(),i(7,"a",5)(8,"h1",6),m(9,"Journey"),r(),i(10,"h6",7),m(11,"Your Portal to the Past"),r()()(),i(12,"div",8),p(13,"app-toolbar-actions"),r()()),n&2&&(s(5),l("routerLink",o.HOME_PAGE_INFO.path),s(2),l("routerLink",o.HOME_PAGE_INFO.path))},dependencies:[x,F,O,Ye,z,pt,en],styles:[".app-brand-section[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;align-content:center}.app-brand-section[_ngcontent-%COMP%]   .app-brand[_ngcontent-%COMP%], .app-brand-section[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%]{text-decoration:none}.app-brand-section[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%}.app-brand-section[_ngcontent-%COMP%]   .app-tagline[_ngcontent-%COMP%]{font-size:.9rem;color:gray}"]})}}return e})();var on=(()=>{class e{scrollToTop(){document.getElementsByTagName("main")[0]?.scrollIntoView({behavior:"smooth"})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-scroll-to-top"]],decls:3,vars:0,consts:[["mat-icon-button","","color","primary",3,"click"]],template:function(n,o){n&1&&(i(0,"button",0),v("click",function(){return o.scrollToTop()}),i(1,"mat-icon"),m(2,"keyboard_control_key"),r()())},dependencies:[He,F,w,x],styles:["[_nghost-%COMP%]{position:fixed;float:right;cursor:pointer;right:14px;bottom:14px;z-index:100;opacity:.75}[_nghost-%COMP%]:hover{opacity:1}.mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:transparent}"]})}}return e})();var rn=(()=>{class e{constructor(){this.title="Journey",this.observer=a(fe),this.isMobile=L(this.observer.observe(["(max-width: 768px)"]).pipe(I(t=>t.matches)),{initialValue:!1})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-root"]],decls:12,vars:3,consts:[["navigationMenu",""],[1,"app-container","h-screen","flex","flex-col"],[1,"border-b-4","border-b-primary",3,"toggleNavigation"],[1,"grow","h-full","contents"],["position","start",3,"mode"],[3,"navigationLinkClick"],["id","navMenuWithoutLabel","mode","side","position","start",1,"max-sm:hidden",3,"opened"],[3,"showLabel"],[1,"max-sm:mt-3","max-sm:ms-0","ms-18","grow","p-4","mb-auto"],[1,"contents"]],template:function(n,o){if(n&1){let d=Z();i(0,"div",1)(1,"app-toolbar",2),v("toggleNavigation",function(){P(d);let kt=V(4);return B(kt.toggle())}),r(),i(2,"mat-sidenav-container",3)(3,"mat-sidenav",4,0)(5,"app-navigation-menu",5),v("navigationLinkClick",function(){P(d);let kt=V(4);return B(kt.toggle())}),r()(),i(6,"mat-sidenav",6),p(7,"app-navigation-menu",7),r(),i(8,"mat-sidenav-content",8),p(9,"router-outlet",9),r()(),p(10,"app-loading-spinner")(11,"app-scroll-to-top"),r()}if(n&2){let d=V(4);s(3),l("mode",o.isMobile()?"over":"push"),s(3),l("opened",!d.opened&&!o.isMobile()),s(),l("showLabel",!1)}},dependencies:[ce,qe,Ke,Je,yt,Bt,nn,Fe,w,on],styles:[".app-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column}"],changeDetection:0})}}return e})();var an=(()=>{class e{constructor(){this.router=a(U)}handleError(t){return t&&t instanceof ae&&this.handleHttpError(t),Vt(()=>t)}handleHttpError(t){switch(t.status){case 401:this.router.navigate(["/login"],{queryParams:{q:"unauthenticated"}}).then(()=>console.log("Authentication required, redirected to login page"));break;case 403:this.router.navigate(["/accessDenied"],{queryParams:{q:"unauthorized"}}).then(()=>console.log("Authentication required, redirected to login page"));break;default:console.log("no http handler defined")}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=et({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var g=()=>sn(),K=()=>dn(),_=()=>sn(),tt=()=>dn();function sn(){let e=a(U).getCurrentNavigation()?.initialUrl.toString(),h=a(U).createUrlTree(["/login"],{queryParams:{redirectUrl:e}});return a(N).isUserAuthenticatedAsObservable().pipe(I(t=>t?!0:h))}function dn(){let e=a(U).createUrlTree(["/accessDenied"]);return a(N).getUserContext().pipe(I(h=>h.roles.some(t=>t==gt.MAINTAINER||t==gt.ADMINISTRATOR||t==gt.AUTHENTICATED_USER)?!0:e))}var cn=[{path:"home",loadComponent:()=>import("./chunk-FSXBGMFR.js").then(e=>e.HomeComponent),title:"Journey"},{path:"signup",loadComponent:()=>import("./chunk-OYCFBGHW.js").then(e=>e.SignupComponent),title:"Signup"},{path:"activation",loadComponent:()=>import("./chunk-RABDP4XX.js").then(e=>e.AccountActivationComponent),title:"Account Activation"},{path:"login",loadComponent:()=>import("./chunk-RJP4FBVT.js").then(e=>e.LoginComponent),title:"Login"},{path:"mfa",loadComponent:()=>import("./chunk-4JZ4GLYM.js").then(e=>e.DisplayMfaOptionsComponent),title:"Login"},{path:"accessDenied",loadComponent:()=>import("./chunk-ZMZIB7H5.js").then(e=>e.AccessDeniedComponent),title:"Access Denied"},{path:"logout",loadComponent:()=>import("./chunk-GX6DIL2U.js").then(e=>e.LogoutComponent),title:"Logout",canActivate:[g],canMatch:[_]},{path:"journey",canActivate:[g],canMatch:[_],children:[{path:"",title:"Journey",loadComponent:()=>import("./chunk-PJVKCP5Z.js").then(e=>e.SearchJourneyComponent),canActivate:[g],canMatch:[_]},{path:"new",loadComponent:()=>import("./chunk-E6BY6HHI.js").then(e=>e.CreateJourneyComponent),title:"New Journey",canActivate:[g,K],canMatch:[_,tt]},{path:":id/view",loadComponent:()=>import("./chunk-VF2MXRPN.js").then(e=>e.ViewJourneyComponent),title:"View Journey",canActivate:[g],canMatch:[_]},{path:":id/edit",loadComponent:()=>import("./chunk-QPJDMXGR.js").then(e=>e.EditJourneyComponent),title:"Edit Journey",canActivate:[g,K],canMatch:[_,tt]}]},{path:"my-account",canActivate:[g],canMatch:[_],children:[{path:"profile",loadComponent:()=>import("./chunk-D4WZCKCV.js").then(e=>e.MyProfilePageComponent),title:"My Profile",canActivate:[g],canMatch:[_]},{path:"securitySettings",loadComponent:()=>import("./chunk-ISAAFLX7.js").then(e=>e.MyAccountSettingsPageComponent),title:"My Settings",canActivate:[g],canMatch:[_]},{path:"delete",loadComponent:()=>import("./chunk-W3FACB64.js").then(e=>e.DeleteMyAccountPageComponent),title:"Delete Account",canActivate:[g,K],canMatch:[_,tt]},{path:"",loadComponent:()=>import("./chunk-FJELII4X.js").then(e=>e.MyAccountPageComponent),title:"My Account",canActivate:[g,K],canMatch:[_,tt]}]},{path:"dashboard",loadComponent:()=>import("./chunk-OGAJL2FR.js").then(e=>e.DashboardComponent),title:"Dashboard",canActivate:[g],canMatch:[_]},{path:"gallery",loadComponent:()=>import("./chunk-KMMOJDPI.js").then(e=>e.GalleryComponent),title:"Gallery",canActivate:[g],canMatch:[_]},{path:"statistics",loadComponent:()=>import("./chunk-APP22W76.js").then(e=>e.StatisticsComponent),title:"Statistics",canActivate:[g],canMatch:[_]},{path:"timeline",loadComponent:()=>import("./chunk-DPW2YAPI.js").then(e=>e.TimelinePageComponent),title:"Timeline",canActivate:[g],canMatch:[_]},{path:"tools",loadComponent:()=>import("./chunk-URUG3UXP.js").then(e=>e.ToolsComponent),title:"Tools"},{path:"user-manual",children:[{path:"",title:"User Manual",loadComponent:()=>import("./chunk-354FLPBX.js").then(e=>e.UserManualComponent)}]},{path:"aboutUs",loadComponent:()=>import("./chunk-TFRIO5SH.js").then(e=>e.AboutComponent),title:"About"},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",redirectTo:"/home"}];var jn="X-Async-Process",ln=(e,h)=>{let t=a(wt);return e.headers.has(jn)||t.showLoading(),h(e).pipe(Wt(()=>t.hideLoading()))};var mn={providers:[ne(),Qt(re,pt,ze.forRoot(),O,w),{provide:We,useValue:{panelClass:"fullscreen",keyboardShortcuts:!0}},{provide:qt,useClass:an},se(de([ln])),me(cn,he(),ue(),pe({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"})),{provide:Qe,useValue:"en-GB"}]};ie(rn,mn).catch(e=>console.error(e));
