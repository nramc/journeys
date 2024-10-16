import{a as Ht}from"./chunk-MSQHH3PV.js";import{a as tt}from"./chunk-AOMZEFOI.js";import{a as Gt}from"./chunk-LDRZWZFG.js";import{a as nt,b as Nt,c as Vt,e as S,f as k,k as zt,l as W,m as x,n as y,q as Z}from"./chunk-JA4JGXDI.js";import{b as jt}from"./chunk-R6MPEOK3.js";import{B as Q,D as Bt,E as it,I as ot,a as Pt,f as $,i as q,k as et,x as U,y as Y}from"./chunk-A2N4MVAO.js";import{d as H,f as Ft,k as Mt}from"./chunk-T74QBNJG.js";import{Ac as A,Bb as Dt,C as F,Ca as gt,Cb as z,Da as ft,Ea as _t,G as ut,H as I,Hb as D,Ja as _,Ka as vt,Kb as At,Lb as w,Ma as yt,Mb as xt,Na as V,O as M,Ob as Ot,Ra as E,Vc as Lt,Xa as J,Xb as u,Yb as m,Zb as Tt,a as p,aa as j,b as ht,bc as It,cc as Et,gc as G,ka as P,la as B,mc as wt,n as g,na as f,nc as St,ob as Ct,oc as kt,pa as c,pb as l,qa as d,rb as bt,sa as b,sc as Rt,t as mt,ta as N,tc as v,ua as pt}from"./chunk-VRY62XD3.js";function ie(o,n){}var C=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var rt=(()=>{class o extends Vt{constructor(t,e,i,a,r,s,h,T){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=a,this._interactivityChecker=r,this._ngZone=s,this._overlayRef=h,this._focusMonitor=T,this._platform=d(Pt),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=d(Lt),this._injector=d(_),this._isDestroyed=!1,this.attachDomPortal=X=>{this._portalOutlet.hasAttached();let Jt=this._portalOutlet.attachDomPortal(X);return this._contentAttached(),Jt},this._document=i,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{t.removeEventListener("blur",i),t.removeEventListener("mousedown",i),t.removeAttribute("tabindex")};t.addEventListener("blur",i),t.addEventListener("mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(){this._isDestroyed||At(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=$(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let t=this._elementRef.nativeElement,e=$();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=$()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static{this.\u0275fac=function(e){return new(e||o)(l(E),l(Y),l(H,8),l(C),l(U),l(V),l(x),l(Q))}}static{this.\u0275cmp=b({type:o,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&wt(S,7),e&2){let a;St(a=kt())&&(i._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&w("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},standalone:!0,features:[z,A],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&D(0,ie,0,0,"ng-template",0)},dependencies:[S],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}}return o})(),R=class{constructor(n,t){this.overlayRef=n,this.config=t,this.closed=new g,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!q(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this.containerInstance){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}},oe=new f("DialogScrollStrategy",{providedIn:"root",factory:()=>{let o=d(y);return()=>o.scrollStrategies.block()}}),ne=new f("DialogData"),ae=new f("DefaultDialogConfig");var se=0,lt=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,i,a,r,s){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=a,this._overlayContainer=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new g,this._afterOpenedAtThisLevel=new g,this._ariaHiddenElements=new Map,this.afterAllClosed=F(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(j(void 0))),this._scrollStrategy=s}open(t,e){let i=this._defaultOptions||new C;e=p(p({},i),e),e.id=e.id||`cdk-dialog-${se++}`,e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),r=this._overlay.create(a),s=new R(r,e),h=this._attachContainer(r,s,e);return s.containerInstance=h,this._attachDialogContent(t,s,h,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){at(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){at(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),at(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new zt({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let a=i.injector||i.viewContainerRef?.injector,r=[{provide:C,useValue:i},{provide:R,useValue:e},{provide:x,useValue:t}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,r.push(...i.container.providers(i))):s=rt;let h=new nt(s,i.viewContainerRef,_.create({parent:a||this._injector,providers:r}),i.componentFactoryResolver);return t.attach(h).instance}_attachDialogContent(t,e,i,a){if(t instanceof bt){let r=this._createInjector(a,e,i,void 0),s={$implicit:a.data,dialogRef:e};a.templateContext&&(s=p(p({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),i.attachTemplatePortal(new Nt(t,null,s,r))}else{let r=this._createInjector(a,e,i,this._injector),s=i.attachComponentPortal(new nt(t,a.viewContainerRef,r,a.componentFactoryResolver));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,i,a){let r=t.injector||t.viewContainerRef?.injector,s=[{provide:ne,useValue:t.data},{provide:R,useValue:e}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(e,t,i)):s.push(...t.providers)),t.direction&&(!r||!r.get(it,null,{optional:!0}))&&s.push({provide:it,useValue:{value:t.direction,change:mt()}}),_.create({parent:r||a,providers:s})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute("aria-hidden",a):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let t=this._overlayContainer.getContainerElement();if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let a=e[i];a!==t&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static{this.\u0275fac=function(e){return new(e||o)(c(y),c(_),c(ae,8),c(o,12),c(W),c(oe))}}static{this.\u0275prov=P({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function at(o,n){let t=o.length;for(;t--;)n(o[t])}var qt=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=N({type:o})}static{this.\u0275inj=B({providers:[lt],imports:[Z,k,Bt,k]})}}return o})();function re(o,n){}var L=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},ct="mdc-dialog--open",Ut="mdc-dialog--opening",Yt="mdc-dialog--closing",le=150,ce=75,de=(()=>{class o extends rt{constructor(t,e,i,a,r,s,h,T,X){super(t,e,i,a,r,s,h,X),this._animationMode=T,this._animationStateChanged=new yt,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?Wt(this._config.enterAnimationDuration)??le:0,this._exitAnimationDuration=this._animationsEnabled?Wt(this._config.exitAnimationDuration)??ce:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Qt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ut,ct)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ct),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ct),this._animationsEnabled?(this._hostElement.style.setProperty(Qt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(Ut,Yt)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static{this.\u0275fac=function(e){return new(e||o)(l(E),l(Y),l(H,8),l(L),l(U),l(V),l(x),l(J,8),l(Q))}}static{this.\u0275cmp=b({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&(Et("id",i._config.id),w("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),Ot("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},standalone:!0,features:[z,A],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(u(0,"div",0)(1,"div",1),D(2,re,0,0,"ng-template",2),m()())},dependencies:[S],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2})}}return o})(),Qt="--mat-dialog-transition-duration";function Wt(o){return o==null?null:typeof o=="number"?o:o.endsWith("ms")?et(o.substring(0,o.length-2)):o.endsWith("s")?et(o.substring(0,o.length-1))*1e3:o==="0"?0:null}var K=function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o}(K||{}),O=class{constructor(n,t,e){this._ref=n,this._containerInstance=e,this._afterOpened=new g,this._beforeClosed=new g,this._state=K.OPEN,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(I(i=>i.state==="opened"),M(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(I(i=>i.state==="closed"),M(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ut(this.backdropClick(),this.keydownEvents().pipe(I(i=>i.keyCode===27&&!this.disableClose&&!q(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),Zt(this,i.type==="keydown"?"keyboard":"mouse"))})}close(n){this._result=n,this._containerInstance._animationStateChanged.pipe(I(t=>t.state==="closing"),M(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=K.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=K.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Zt(o,n,t){return o._closeInteractionType=n,o.close(t)}var dt=new f("MatMdcDialogData"),he=new f("mat-mdc-dialog-default-options"),me=new f("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let o=d(y);return()=>o.scrollStrategies.block()}});var ue=0,Kt=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,i,a,r,s,h,T){this._overlay=t,this._defaultOptions=a,this._scrollStrategy=r,this._parentDialog=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new g,this._afterOpenedAtThisLevel=new g,this.dialogConfigClass=L,this.afterAllClosed=F(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(j(void 0))),this._dialog=e.get(lt),this._dialogRefConstructor=O,this._dialogContainerType=de,this._dialogDataToken=dt}open(t,e){let i;e=p(p({},this._defaultOptions||new L),e),e.id=e.id||`mat-mdc-dialog-${ue++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,ht(p({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:C,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(r,s,h)=>(i=new this._dialogRefConstructor(r,e,h),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static{this.\u0275fac=function(e){return new(e||o)(c(y),c(_),c(Ft,8),c(he,8),c(me),c(o,12),c(W),c(J,8))}}static{this.\u0275prov=P({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var Xt=(()=>{class o{constructor(t,e,i){this.dialogRef=t,this._elementRef=e,this._dialog=i,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=pe(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){Zt(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static{this.\u0275fac=function(e){return new(e||o)(l(O,8),l(E),l(Kt))}}static{this.\u0275dir=pt({type:o,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,i){e&1&&G("click",function(r){return i._onButtonClick(r)}),e&2&&w("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[gt]})}}return o})();function pe(o,n){let t=o.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?n.find(e=>e.id===t.id):null}var si=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=N({type:o})}static{this.\u0275inj=B({providers:[Kt],imports:[qt,Z,k,ot,ot]})}}return o})();function ge(o,n){o&1&&(u(0,"div",13),v(1," Code invalid. Please enter valid code. "),m())}var vi=(()=>{class o{constructor(){this.destroyRef=d(vt),this.myAccountService=d(Ht),this.loginService=d(Gt),this.authService=d(jt),this.dialogRef=d(O),this.credential=d(dt),this.isCodeInvalid=Dt(!1)}confirmCode(t){t.validity.valid?this.credential?this.verifyCodeInUnauthenticatedContext(t.value,this.credential):this.verifyCodeInAuthenticatedContext(t.value):console.log("Code invalid")}verifyCodeInUnauthenticatedContext(t,e){this.loginService.mfa(t,"TOTP",e).pipe(tt(this.destroyRef)).subscribe({next:i=>{this.authService.getUserContextForSuccessfulLogin(i),this.dialogRef.close(!0)},error:i=>this.onError(i)})}verifyCodeInAuthenticatedContext(t){this.myAccountService.verifyTotpCode(t).pipe(tt(this.destroyRef)).subscribe({next:e=>this.onSuccess(e),error:e=>this.onError(e)})}onSuccess(t){t.success?this.dialogRef.close(!0):this.isCodeInvalid.set(!0)}onError(t){console.log(t),this.isCodeInvalid.set(!0)}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=b({type:o,selectors:[["app-totp-code-verification"]],inputs:{isCodeInvalid:[1,"isCodeInvalid"]},outputs:{isCodeInvalid:"isCodeInvalidChange"},standalone:!0,features:[A],decls:20,vars:1,consts:[["confirmationCode",""],[1,"card"],[1,"card-header","bg-primary","text-light"],[1,"card-body"],[1,"card-title","text-primary"],[1,"card-text"],[1,"input-group"],[1,"input-group-text"],["type","text","required","","pattern","[0-9]{6,6}","maxlength","6","min","6","autocomplete","off",1,"form-control"],["class","form-text text-danger text-center",4,"ngIf"],[1,"d-inline-flex","gap-2","mt-4"],["mat-dialog-close","false",1,"btn","btn-outline-danger"],[1,"btn","btn-primary",3,"click"],[1,"form-text","text-danger","text-center"]],template:function(e,i){if(e&1){let a=It();u(0,"div",1)(1,"div",2),v(2," Two-Factor Authentication "),m(),u(3,"div",3)(4,"div",4),v(5,"TOTP Code Verification"),m(),u(6,"div",5)(7,"p"),v(8,"Your security is our top priority. To ensure your account remains protected, please complete the two-factor authentication process by entering the 6-digit code from your authenticator app."),m(),u(9,"div",6)(10,"span",7),v(11,"Code"),m(),Tt(12,"input",8,0),m(),D(14,ge,2,0,"div",9),m(),u(15,"div",10)(16,"button",11),v(17,"Cancel"),m(),u(18,"button",12),G("click",function(){ft(a);let s=Rt(13);return _t(i.confirmCode(s))}),v(19,"Confirm"),m()()()()}e&2&&(Ct(14),xt("ngIf",i.isCodeInvalid()))},dependencies:[Xt,Mt],changeDetection:0})}}return o})();export{O as a,dt as b,Kt as c,Xt as d,si as e,vi as f};
