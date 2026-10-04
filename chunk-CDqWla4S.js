import{n as s,t as r}from"./chunk-C86zhvaO.js";import{$n as hv,Cr as ng,Ct as Pm,Et as Pw,F as Fi,Kn as gg,Mn as ce,Mt as S,P as Fh,Q as Ks,R as GD,S as Cu,Tn as b,Tr as pe,Tt as Pr,_i as zn,ai as xr,dn as Zy,h as Be,hi as zh,it as Lw,j as Er,l as Ah,li as yc,lt as Mp,mr as ln,mt as Nm,n as $D,nr as ig,nt as Lh,pr as lg,qt as V1,rn as Y$1,rt as Lr,ui as yl,ut as Mt$1,z as Ge}from"./chunk-ihIzuI1C.js";import{A as he,C as be,E as ct,F as le,I as m,V as xi,c as Je,k as gt,m as Qt$1,s as Ii,v as Ye,x as _e}from"./chunk-DcaJ8toe.js";import{$t as ye,It as Qt$2,Jt as st,Kt as re,Qt as wt,Rt as Xt,Ut as j$1,Yt as tt,en as yi,jt as Dt,nn as z,qt as se}from"./main-3XEFBBAG.js";var u=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var U=(()=>{class n extends tt{_elementRef=b(Pr);_focusTrapFactory=b(gt);_config;_interactivityChecker=b(_e);_ngZone=b(pe);_focusMonitor=b(ct);_renderer=b(yc);_changeDetectorRef=b(V1);_injector=b(ce);_platform=b(m);_document=b(Er);_portalOutlet;_focusTrapped=new Y$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=b(u,{optional:!0})||new u,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),r(),t.removeAttribute(`tabindex`)},a=this._renderer.listen(t,`blur`,i),r=this._renderer.listen(t,`mousedown`,i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(t){this._isDestroyed||Mp(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||e.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t==`string`?e=this._document.querySelector(t):typeof t==`boolean`?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus==`function`){let i=le(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=le();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=le()))}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){function t(e,i){}return $D({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,a){if(i&1&&lg(yi,7),i&2){let r;Lw(r=Pw())&&(a._portalOutlet=r.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,a){i&2&&zh(`id`,a._config.id||null)(`role`,a._config.role)(`aria-modal`,a._config.ariaModal)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null)},features:[Lh],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,a){i&1&&Fh(0,t,0,0,`ng-template`,0)},dependencies:[yi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var p=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Y$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,t){this.overlayRef=o,this.config=t,this.disableClose=t.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Ye(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(o,t){if(this._canClose(o)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(o),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o=``,t=``){return this.overlayRef.updateSize({width:o,height:t}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(o,t,this.componentInstance))}};var Bt=new S(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=b(ce);return()=>Qt$2(n)}});var jt=new S(`DialogData`);var zt=new S(`DefaultDialogConfig`);function Vt(n){let o=Be(n),t=new Ge;return{valueSignal:o,get value(){return o()},change:t,ngOnDestroy(){t.complete()}}}var Y=(()=>{class n{_injector=b(ce);_defaultOptions=b(zt,{optional:!0});_parentDialog=b(n,{optional:!0,skipSelf:!0});_overlayContainer=b(re);_idGenerator=b(be);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Y$1;_afterOpenedAtThisLevel=new Y$1;_ariaHiddenElements=new Map;_scrollStrategy=b(Bt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Nm(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Cu(void 0)));open(t,e){let i=this._defaultOptions||new u;e=r(r({},i),e),e.id=e.id||this._idGenerator.getId(`cdk-dialog-`),e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),r$1=Dt(this._injector,a),l=new p(r$1,e),d=this._attachContainer(r$1,l,e);if(l.containerInstance=d,!this.openDialogs.length){let z=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(Mt$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(z)}):this._hideNonDialogContentFromAssistiveTechnology(z)}return this._attachDialogContent(t,l,d,e),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){q(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){q(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),q(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new j$1({positionStrategy:t.positionStrategy||se().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let a=i.injector||i.viewContainerRef?.injector,r=[{provide:u,useValue:i},{provide:p,useValue:e},{provide:st,useValue:t}],l;i.container?typeof i.container==`function`?l=i.container:(l=i.container.type,r.push(...i.container.providers(i))):l=U;let d=new wt(l,i.viewContainerRef,ce.create({parent:a||this._injector,providers:r}));return t.attach(d).instance}_attachDialogContent(t,e,i,a){if(t instanceof xr){let r$2=this._createInjector(a,e,i,void 0),l={$implicit:a.data,dialogRef:e};a.templateContext&&(l=r(r({},l),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),i.attachTemplatePortal(new z(t,null,l,r$2))}else{let r=this._createInjector(a,e,i,this._injector),l=i.attachComponentPortal(new wt(t,a.viewContainerRef,r,null,a.bindings));e.componentRef=l,e.componentInstance=l.instance}}_createInjector(t,e,i,a){let r=t.injector||t.viewContainerRef?.injector,l=[{provide:jt,useValue:t.data},{provide:p,useValue:e}];return t.providers&&(typeof t.providers==`function`?l.push(...t.providers(e,t,i)):l.push(...t.providers)),t.direction&&(!r||!r.get(Je,null,{optional:!0}))&&l.push({provide:Je,useValue:Vt(t.direction)}),ce.create({parent:r||a,providers:l})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute(`aria-hidden`,a):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let a=e[i];a!==t&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(e){return new(e||n)};static ɵprov=Lr({token:n,factory:n.ɵfac})}return n})();function q(n,o){let t=n.length;for(;t--;)o(n[t])}var Tt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ah({type:n});static ɵinj=Ks({providers:[Y],imports:[ye,Xt,Qt$1,Xt]})}return n})();var B=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var $=`mdc-dialog--open`;var Mt=`mdc-dialog--opening`;var It=`mdc-dialog--closing`;var Ht=150;var Gt=75;var Wt=(()=>{class n extends U{_animationStateChanged=new Ge;_animationsEnabled=!Ii();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Lt(this._config.enterAnimationDuration)??Ht:0;_exitAnimationDuration=this._animationsEnabled?Lt(this._config.exitAnimationDuration)??Gt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Et,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Mt,$)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add($),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove($),this._animationsEnabled?(this._hostElement.style.setProperty(Et,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(It)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Mt,It)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),e}static ɵfac=(()=>{let t;return function(i){return(t||(t=hv(n)))(i||n)}})();static ɵcmp=(function(){function t(e,i){}return $D({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,a){i&2&&(ng(`id`,a._config.id),zh(`aria-modal`,a._config.ariaModal)(`role`,a._config.role)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null),gg(`_mat-animation-noopable`,!a._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,a._actionSectionCount>0))},features:[Lh],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,a){i&1&&(Fi(0,`div`,0)(1,`div`,1),Fh(2,t,0,0,`ng-template`,2),yl()())},dependencies:[yi],styles:[`.mat-mdc-dialog-container {
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
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
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
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
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
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
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
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
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
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
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
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
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
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
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
`],encapsulation:2,changeDetection:1})})()}return n})();var Et=`--mat-dialog-transition-duration`;function Lt(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?he(n.substring(0,n.length-2)):n.endsWith(`s`)?he(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var R=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(R||{});var j=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new zn(1);_beforeClosed=new zn(1);_result;_closeFallbackTimeout;_state=R.OPEN;_closeInteractionType;constructor(o,t,e){this._ref=o,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=o.id,o.addPanelClass(`mat-mdc-dialog-panel`),e._animationStateChanged.pipe(ln(i=>i.state===`opened`),Mt$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(ln(i=>i.state===`closed`),Mt$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Pm(this.backdropClick(),this.keydownEvents().pipe(ln(i=>i.keyCode===27&&!this.disableClose&&!Ye(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),Ft(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(o){let t=this._config.closePredicate;t&&!t(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(ln(e=>e.state===`closing`),Mt$1(1)).subscribe(e=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=R.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let t=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?t.left(o.left):t.right(o.right):t.centerHorizontally(),o&&(o.top||o.bottom)?o.top?t.top(o.top):t.bottom(o.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(o=``,t=``){return this._ref.updateSize(o,t),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=R.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Ft(n,o,t){return n._closeInteractionType=o,n.close(t)}var Qt=new S(`MatMdcDialogData`);var qt=new S(`mat-mdc-dialog-default-options`);var Ut=new S(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=b(ce);return()=>Qt$2(n)}});var Nt=(()=>{class n{_defaultOptions=b(qt,{optional:!0});_scrollStrategy=b(Ut);_parentDialog=b(n,{optional:!0,skipSelf:!0});_idGenerator=b(be);_injector=b(ce);_dialog=b(Y);_animationsDisabled=Ii();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Y$1;_afterOpenedAtThisLevel=new Y$1;dialogConfigClass=B;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Nm(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Cu(void 0)));constructor(){this._dialogRefConstructor=j,this._dialogContainerType=Wt,this._dialogDataToken=Qt}open(t,e){let i;e=r(r({},this._defaultOptions||new B),e),e.id=e.id||this._idGenerator.getId(`mat-mdc-dialog-`),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,s(r({},e),{positionStrategy:se(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()===`0`||e.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:u,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(r,l,d)=>(i=new this._dialogRefConstructor(r,e,d),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i},{provide:p,useValue:null}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static ɵfac=function(e){return new(e||n)};static ɵprov=Lr({token:n,factory:n.ɵfac})}return n})();var Fe=(()=>{class n{dialogRef=b(j,{optional:!0});_elementRef=b(Pr);_dialog=b(Nt);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Yt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&Ft(this.dialogRef,t.screenX===0&&t.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(e){return new(e||n)};static ɵdir=GD({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(e,i){e&1&&ig(`click`,function(r){return i._onButtonClick(r)}),e&2&&zh(`aria-label`,i.ariaLabel||null)(`type`,i.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[Zy]})}return n})();function Yt(n,o){let t=n.nativeElement.parentElement;for(;t&&!t.classList.contains(`mat-mdc-dialog-container`);)t=t.parentElement;return t?o.find(e=>e.id===t.id):null}var Ne=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ah({type:n});static ɵinj=Ks({providers:[Nt],imports:[Tt,ye,Xt,xi]})}return n})();export{j as a,Qt as i,Ne as n,Nt as r,Fe as t};