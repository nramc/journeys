import{a as rt}from"./chunk-R2W5EQ6U.js";import{b as ot}from"./chunk-SLZKH4QO.js";import{a as tt,f as it,g as nt}from"./chunk-RFIRKM3V.js";import{b as at}from"./chunk-IIYTCTZ4.js";import{g as K,h as ze,i as Ge,k as A,l as x,m as N,o as We,p as qe,q as Qe,t as V,v as Ue,z as H}from"./chunk-ABTV5DUN.js";import{b as Le,g as Pe,j as Be,p as je,s as Ne,t as Ve,u as He}from"./chunk-RDWL67WJ.js";import{a as Z}from"./chunk-K7SNHORH.js";import{a as $e,b as Ke,d as Xe,g as Je,k as et}from"./chunk-TJUQ4B53.js";import{c as Ye}from"./chunk-CSB4GUNQ.js";import{h as Ze}from"./chunk-WGCAINHC.js";import{C as Re,D as B,G as j,a as ke,g as U,h as Y,j as Se,m as P,p as $,r as Ee,y as Me,z as Fe}from"./chunk-IYBDWB6D.js";import{Aa as S,Ac as _,Ba as de,Bb as F,Cb as R,E as O,Ea as ce,Ha as me,I as oe,Ia as he,J as b,Ka as E,O as y,Ob as D,Pb as ye,Qb as ve,Vb as u,Wb as c,Xb as Ce,_ as w,a as m,b as ne,cd as we,dc as be,dd as Ie,ec as De,ha as I,ia as k,ib as ue,ic as L,k as p,ka as g,m as q,ma as r,nb as pe,ob as ge,pc as Ae,qb as fe,qc as xe,rc as Te,sa as ae,ta as re,vc as Q,wa as h,xa as se,xb as v,xc as Oe,ya as le,yb as M,zb as _e}from"./chunk-UQZIQZBC.js";function _t(n,o){}var f=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var J=(()=>{class n extends Ge{_elementRef=r(E);_focusTrapFactory=r(Fe);_config;_interactivityChecker=r(Me);_ngZone=r(de);_focusMonitor=r(Ee);_renderer=r(fe);_changeDetectorRef=r(Ie);_injector=r(h);_platform=r(ke);_document=r(se);_portalOutlet;_focusTrapped=new p;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(f,{optional:!0})||new f,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),l(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",i),l=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||pe(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=P(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=P();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=P()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&Ae(A,7),t&2){let a;xe(a=Te())&&(i._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&D("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[F],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&R(0,_t,0,0,"ng-template",0)},dependencies:[A],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),T=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new p;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!B(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}},yt=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=r(h);return()=>N(n)}}),vt=new g("DialogData"),Ct=new g("DefaultDialogConfig");function bt(n){let o=ce(n),e=new S;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var ee=(()=>{class n{_injector=r(h);_defaultOptions=r(Ct,{optional:!0});_parentDialog=r(n,{optional:!0,skipSelf:!0});_overlayContainer=r(qe);_idGenerator=r(j);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;_ariaHiddenElements=new Map;_scrollStrategy=r(yt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=O(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(w(void 0)));constructor(){}open(e,t){let i=this._defaultOptions||new f;t=m(m({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),l=Ue(this._injector,a),s=new T(l,t),d=this._attachContainer(l,s,t);if(s.containerInstance=d,!this.openDialogs.length){let W=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(y(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(W)}):this._hideNonDialogContentFromAssistiveTechnology(W)}return this._attachDialogContent(e,s,d,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){X(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){X(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),X(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new We({positionStrategy:e.positionStrategy||V().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let a=i.injector||i.viewContainerRef?.injector,l=[{provide:f,useValue:i},{provide:T,useValue:t},{provide:Qe,useValue:e}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,l.push(...i.container.providers(i))):s=J;let d=new K(s,i.viewContainerRef,h.create({parent:a||this._injector,providers:l}));return e.attach(d).instance}_attachDialogContent(e,t,i,a){if(e instanceof ge){let l=this._createInjector(a,t,i,void 0),s={$implicit:a.data,dialogRef:t};a.templateContext&&(s=m(m({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),i.attachTemplatePortal(new ze(e,null,s,l))}else{let l=this._createInjector(a,t,i,this._injector),s=i.attachComponentPortal(new K(e,a.viewContainerRef,l));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,i,a){let l=e.injector||e.viewContainerRef?.injector,s=[{provide:vt,useValue:e.data},{provide:T,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,i)):s.push(...e.providers)),e.direction&&(!l||!l.get(Y,null,{optional:!0}))&&s.push({provide:Y,useValue:bt(e.direction)}),h.create({parent:l||a,providers:s})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,l)=>{a?l.setAttribute("aria-hidden",a):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let a=t[i];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function X(n,o){let e=n.length;for(;e--;)o(n[e])}var dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=M({type:n});static \u0275inj=k({providers:[ee],imports:[H,x,Re,x]})}return n})();function Dt(n,o){}var G=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},te="mdc-dialog--open",ct="mdc-dialog--opening",mt="mdc-dialog--closing",At=150,xt=75,Tt=(()=>{class n extends J{_animationStateChanged=new S;_animationsEnabled=!U();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?ut(this._config.enterAnimationDuration)??At:0;_exitAnimationDuration=this._animationsEnabled?ut(this._config.exitAnimationDuration)??xt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ht,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ct,te)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(te),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(te),this._animationsEnabled?(this._hostElement.style.setProperty(ht,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(mt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ct,mt)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=he(n)))(i||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,i){t&2&&(De("id",i._config.id),D("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),Oe("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[F],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(u(0,"div",0)(1,"div",1),R(2,Dt,0,0,"ng-template",2),c()())},dependencies:[A],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),ht="--mat-dialog-transition-duration";function ut(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?$(n.substring(0,n.length-2)):n.endsWith("s")?$(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var z=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(z||{}),C=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new q(1);_beforeClosed=new q(1);_result;_closeFallbackTimeout;_state=z.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(b(i=>i.state==="opened"),y(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(b(i=>i.state==="closed"),y(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),oe(this.backdropClick(),this.keydownEvents().pipe(b(i=>i.keyCode===27&&!this.disableClose&&!B(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),pt(this,i.type==="keydown"?"keyboard":"mouse"))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(b(t=>t.state==="closing"),y(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=z.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=z.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function pt(n,o,e){return n._closeInteractionType=o,n.close(e)}var ie=new g("MatMdcDialogData"),Ot=new g("mat-mdc-dialog-default-options"),wt=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(h);return()=>N(n)}}),gt=(()=>{class n{_defaultOptions=r(Ot,{optional:!0});_scrollStrategy=r(wt);_parentDialog=r(n,{optional:!0,skipSelf:!0});_idGenerator=r(j);_injector=r(h);_dialog=r(ee);_animationsDisabled=U();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;dialogConfigClass=G;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=O(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(w(void 0)));constructor(){this._dialogRefConstructor=C,this._dialogContainerType=Tt,this._dialogDataToken=ie}open(e,t){let i;t=m(m({},this._defaultOptions||new G),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,ne(m({},t),{positionStrategy:V(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:f,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(l,s,d)=>(i=new this._dialogRefConstructor(l,t,d),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(i);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ft=(()=>{class n{dialogRef=r(C,{optional:!0});_elementRef=r(E);_dialog=r(gt);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=It(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){pt(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_e({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,i){t&1&&L("click",function(l){return i._onButtonClick(l)}),t&2&&D("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[me]})}return n})();function It(n,o){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var gi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=M({type:n});static \u0275inj=k({providers:[gt],imports:[dt,H,x,Se]})}return n})();function kt(n,o){n&1&&(u(0,"p",6),_(1," Code invalid. Please enter a valid code. "),c())}var Ri=(()=>{class n{constructor(){this.destroyRef=r(le),this.myAccountService=r(rt),this.loginService=r(at),this.authService=r(Ye),this.dialogRef=r(C),this.credential=r(ie),this.isCodeInvalid=we(!1)}confirmCode(e,t){this.isCodeInvalid.set(!1),e.validity.valid?(t.disabled=!0,this.credential?this.verifyCodeInUnauthenticatedContext(e.value,this.credential,t):this.verifyCodeInAuthenticatedContext(e.value,t)):this.isCodeInvalid.set(!0)}verifyCodeInUnauthenticatedContext(e,t,i){this.loginService.mfa(e,"TOTP",t).pipe(Z(this.destroyRef)).subscribe({next:a=>{this.authService.getUserContextForSuccessfulLogin(a),this.dialogRef.close(!0)},error:a=>this.onError(a,i)})}verifyCodeInAuthenticatedContext(e,t){this.myAccountService.verifyTotpCode(e).pipe(Z(this.destroyRef)).subscribe({next:i=>this.onSuccess(i),error:i=>this.onError(i,t)})}onSuccess(e){e.success?this.dialogRef.close(!0):this.isCodeInvalid.set(!0)}onError(e,t){t.disabled=!1,console.log(e),this.isCodeInvalid.set(!0)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["app-totp-code-verification"]],inputs:{isCodeInvalid:[1,"isCodeInvalid"]},outputs:{isCodeInvalid:"isCodeInvalidChange"},decls:19,vars:1,consts:[["confirmationCode",""],["confirmButton",""],[1,"bg-primary-text","text-xl","font-semibold","!p-4","rounded-t-lg","mb-2"],[1,"text-primary","mb-6"],["appearance","fill",1,"w-full"],["matInput","","inputmode","numeric","id","confirmationCode","type","text","required","","pattern","[0-9]{6,6}","maxlength","6","autocomplete","off","ngModel","",1,""],[1,"text-red-500","text-sm","text-center","mb-4"],[1,"flex","gap-2","mt-4","justify-center"],["mat-raised-button","","type","button","mat-dialog-close","false"],["mat-raised-button","","type","button",3,"click"]],template:function(t,i){if(t&1){let a=be();u(0,"mat-card")(1,"mat-card-header",2)(2,"mat-card-title"),_(3,"TOTP Code Verification"),c()(),u(4,"mat-card-content")(5,"p",3),_(6," Your security is our top priority. To ensure your account remains protected, please complete the two-factor authentication process by entering the 6-digit code from your authenticator app. "),c(),u(7,"mat-form-field",4)(8,"mat-label"),_(9,"Code"),c(),Ce(10,"input",5,0),c(),ye(12,kt,2,0,"p",6),u(13,"div",7)(14,"button",8),_(15,"Cancel"),c(),u(16,"button",9,1),L("click",function(){ae(a);let s=Q(11),d=Q(17);return re(i.confirmCode(s,d))}),_(18," Confirm "),c()()()()}t&2&&(ue(12),ve(i.isCodeInvalid()?12:-1))},dependencies:[ft,et,$e,Xe,Je,Ke,nt,it,tt,ot,Ze,He,Le,Pe,je,Ne,Ve,Be],encapsulation:2,changeDetection:0})}}return n})();export{C as a,ie as b,gt as c,ft as d,gi as e,Ri as f};
