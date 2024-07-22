import{a as Ye}from"./chunk-4PC4M2WG.js";import{j as Ce,k as He,l as Ue,n as z,o as G,p as $e,q as se,r as F,s as b,v as re}from"./chunk-RRHBB2PL.js";import{a as S}from"./chunk-VXFKOE2P.js";import{a as ve,c as ae,k as le,l as de,o as ce,q as qe,t as ye}from"./chunk-4PTYCNBB.js";import{a as Ge,g as oe,k as _e}from"./chunk-LHFKDAYA.js";import{a as ge,b as ne,c as R}from"./chunk-5DXZ7UWG.js";import{c as ze}from"./chunk-ARLEKDS5.js";import{d as ie,i as Be,r as Ne}from"./chunk-42OPBNH4.js";import{Aa as Ee,E as q,Eb as E,Fb as J,Ha as we,I as Oe,Ia as M,J as j,Ja as P,Lb as w,Mb as B,Nb as k,Oa as A,Pb as Fe,Qa as K,R as Y,Sa as V,Sc as Ve,Ta as ke,Wb as h,Xb as d,Yb as ee,Za as fe,a as g,ac as te,b as Ie,bc as Le,ea as W,fc as x,lc as je,mc as Me,nc as Pe,oa as T,oc as N,p as _,pa as Q,pc as u,qb as O,ra as v,rb as m,ta as p,tb as Re,ua as c,v as Te,wc as y,ya as C,yb as X,za as Z}from"./chunk-TO7D4NWA.js";function st(o,i){}var I=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var Ae=(()=>{let i=class i extends Ue{constructor(e,t,n,a,l,s,f,L){super(),this._elementRef=e,this._focusTrapFactory=t,this._config=a,this._interactivityChecker=l,this._ngZone=s,this._overlayRef=f,this._focusMonitor=L,this._platform=c(Ge),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=c(Ve),this.attachDomPortal=pe=>{this._portalOutlet.hasAttached();let nt=this._portalOutlet.attachDomPortal(pe);return this._contentAttached(),nt},this._document=n,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{e.removeEventListener("blur",n),e.removeEventListener("mousedown",n),e.removeAttribute("tabindex")};e.addEventListener("blur",n),e.addEventListener("mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(){let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElementWhenReady().then(t=>{t||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=oe(),a=this._elementRef.nativeElement;(!n||n===this._document.body||n===a||a.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let e=this._elementRef.nativeElement,t=oe();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=oe()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}};i.\u0275fac=function(t){return new(t||i)(m(V),m(de),m(ie,8),m(I),m(le),m(X),m(F),m(ce))},i.\u0275cmp=C({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&je(z,7),t&2){let a;Me(a=Pe())&&(n._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&B("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},standalone:!0,features:[J,y],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&w(0,st,0,0,"ng-template",0)},dependencies:[z],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2});let o=i;return o})(),H=class{constructor(i,r){this.overlayRef=i,this.config=r,this.closed=new _,this.disableClose=r.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=r.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!ae(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=i.detachments().subscribe(()=>{r.closeOnOverlayDetachments!==!1&&this.close()})}close(i,r){if(this.containerInstance){let e=this.closed;this.containerInstance._closeInteractionType=r?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",r=""){return this.overlayRef.updateSize({width:i,height:r}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}},rt=new v("DialogScrollStrategy",{providedIn:"root",factory:()=>{let o=c(b);return()=>o.scrollStrategies.block()}}),lt=new v("DialogData"),dt=new v("DefaultDialogConfig");var ct=0,xe=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(e,t,n,a,l,s){this._overlay=e,this._injector=t,this._defaultOptions=n,this._parentDialog=a,this._overlayContainer=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new _,this._afterOpenedAtThisLevel=new _,this._ariaHiddenElements=new Map,this.afterAllClosed=q(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(W(void 0))),this._scrollStrategy=s}open(e,t){let n=this._defaultOptions||new I;t=g(g({},n),t),t.id=t.id||`cdk-dialog-${ct++}`,t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),l=this._overlay.create(a),s=new H(l,t),f=this._attachContainer(l,s,t);return s.containerInstance=f,this._attachDialogContent(e,s,f,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){be(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){be(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),be(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new $e({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let a=n.injector||n.viewContainerRef?.injector,l=[{provide:I,useValue:n},{provide:H,useValue:t},{provide:F,useValue:e}],s;n.container?typeof n.container=="function"?s=n.container:(s=n.container.type,l.push(...n.container.providers(n))):s=Ae;let f=new Ce(s,n.viewContainerRef,A.create({parent:a||this._injector,providers:l}),n.componentFactoryResolver);return e.attach(f).instance}_attachDialogContent(e,t,n,a){if(e instanceof Re){let l=this._createInjector(a,t,n,void 0),s={$implicit:a.data,dialogRef:t};a.templateContext&&(s=g(g({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),n.attachTemplatePortal(new He(e,null,s,l))}else{let l=this._createInjector(a,t,n,this._injector),s=n.attachComponentPortal(new Ce(e,a.viewContainerRef,l,a.componentFactoryResolver));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,n,a){let l=e.injector||e.viewContainerRef?.injector,s=[{provide:lt,useValue:e.data},{provide:H,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,n)):s.push(...e.providers)),e.direction&&(!l||!l.get(ve,null,{optional:!0}))&&s.push({provide:ve,useValue:{value:e.direction,change:Te()}}),A.create({parent:l||a,providers:s})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,l)=>{a?l.setAttribute("aria-hidden",a):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let e=this._overlayContainer.getContainerElement();if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let a=t[n];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}};i.\u0275fac=function(t){return new(t||i)(p(b),p(A),p(dt,8),p(i,12),p(se),p(rt))},i.\u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();function be(o,i){let r=o.length;for(;r--;)i(o[r])}var We=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=Q({providers:[xe],imports:[re,G,qe,G]});let o=i;return o})();function ht(o,i){}var U=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},Se="mdc-dialog--open",Qe="mdc-dialog--opening",Ze="mdc-dialog--closing",mt=150,ut=75,pt=(()=>{let i=class i extends Ae{constructor(e,t,n,a,l,s,f,L,pe){super(e,t,n,a,l,s,f,pe),this._animationMode=L,this._animationStateChanged=new ke,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?Xe(this._config.enterAnimationDuration)??mt:0,this._exitAnimationDuration=this._animationsEnabled?Xe(this._config.exitAnimationDuration)??ut:0,this._animationTimer=null,this._isDestroyed=!1,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ke,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Qe,Se)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Se),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Se),this._animationsEnabled?(this._hostElement.style.setProperty(Ke,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ze)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(Qe,Ze)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._isDestroyed||(this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e}))}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer),this._isDestroyed=!0}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}};i.\u0275fac=function(t){return new(t||i)(m(V),m(de),m(ie,8),m(U),m(le),m(X),m(F),m(fe,8),m(ce))},i.\u0275cmp=C({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(Le("id",n._config.id),B("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),Fe("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},standalone:!0,features:[J,y],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(h(0,"div",0)(1,"div",1),w(2,ht,0,0,"ng-template",2),d()())},dependencies:[z],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, 4px);background-color:var(--mdc-dialog-container-color, white)}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87));font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6));font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2});let o=i;return o})(),Ke="--mat-dialog-transition-duration";function Xe(o){return o==null?null:typeof o=="number"?o:o.endsWith("ms")?_e(o.substring(0,o.length-2)):o.endsWith("s")?_e(o.substring(0,o.length-1))*1e3:o==="0"?0:null}var me=function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o}(me||{}),D=class{constructor(i,r,e){this._ref=i,this._containerInstance=e,this._afterOpened=new _,this._beforeClosed=new _,this._state=me.OPEN,this.disableClose=r.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(j(t=>t.state==="opened"),Y(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(j(t=>t.state==="closed"),Y(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Oe(this.backdropClick(),this.keydownEvents().pipe(j(t=>t.keyCode===27&&!this.disableClose&&!ae(t)))).subscribe(t=>{this.disableClose||(t.preventDefault(),Je(this,t.type==="keydown"?"keyboard":"mouse"))})}close(i){this._result=i,this._containerInstance._animationStateChanged.pipe(j(r=>r.state==="closing"),Y(1)).subscribe(r=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),r.totalTime+100)}),this._state=me.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let r=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?r.left(i.left):r.right(i.right):r.centerHorizontally(),i&&(i.top||i.bottom)?i.top?r.top(i.top):r.bottom(i.bottom):r.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",r=""){return this._ref.updateSize(i,r),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=me.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Je(o,i,r){return o._closeInteractionType=i,o.close(r)}var $=new v("MatMdcDialogData"),ft=new v("mat-mdc-dialog-default-options"),gt=new v("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let o=c(b);return()=>o.scrollStrategies.block()}});var _t=0,et=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(e,t,n,a,l,s,f,L){this._overlay=e,this._defaultOptions=a,this._scrollStrategy=l,this._parentDialog=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new _,this._afterOpenedAtThisLevel=new _,this.dialogConfigClass=U,this.afterAllClosed=q(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(W(void 0))),this._dialog=t.get(xe),this._dialogRefConstructor=D,this._dialogContainerType=pt,this._dialogDataToken=$}open(e,t){let n;t=g(g({},this._defaultOptions||new U),t),t.id=t.id||`mat-mdc-dialog-${_t++}`,t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,Ie(g({},t),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:I,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(l,s,f)=>(n=new this._dialogRefConstructor(l,t,f),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:f},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}};i.\u0275fac=function(t){return new(t||i)(p(b),p(A),p(Be,8),p(ft,8),p(gt),p(i,12),p(se),p(fe,8))},i.\u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();var ue=(()=>{let i=class i{constructor(e,t,n){this.dialogRef=e,this._elementRef=t,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=vt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Je(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}};i.\u0275fac=function(t){return new(t||i)(m(D,8),m(V),m(et))},i.\u0275dir=Ee({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&x("click",function(l){return n._onButtonClick(l)}),t&2&&B("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[we]});let o=i;return o})();function vt(o,i){let r=o.nativeElement.parentElement;for(;r&&!r.classList.contains("mat-mdc-dialog-container");)r=r.parentElement;return r?i.find(e=>e.id===r.id):null}var tt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=Q({providers:[et],imports:[We,re,G,ye,ye]});let o=i;return o})();function yt(o,i){o&1&&(h(0,"div",13),u(1," Code invalid. Please enter valid code. "),d())}var yi=(()=>{let i=class i{constructor(){this.destroyRef=c(K),this.myAccountService=c(Ye),this.loginService=c(ne),this.authService=c(R),this.dialogRef=c(D),this.credential=c($),this.isCodeInvalid=E(!1)}confirmCode(e){e.validity.valid?this.credential?this.verifyCodeInUnauthenticatedContext(e.value,this.credential):this.verifyCodeInAuthenticatedContext(e.value):console.log("Code invalid")}verifyCodeInUnauthenticatedContext(e,t){this.loginService.mfa(e,"TOTP",t).pipe(S(this.destroyRef)).subscribe({next:n=>{this.authService.getUserContextForSuccessfulLogin(n),this.dialogRef.close(!0)},error:n=>this.onError(n)})}verifyCodeInAuthenticatedContext(e){this.myAccountService.verifyTotpCode(e).pipe(S(this.destroyRef)).subscribe({next:t=>this.onSuccess(t),error:t=>this.onError(t)})}onSuccess(e){e.success?(console.log("success"),this.dialogRef.close(!0)):this.isCodeInvalid.set(!0)}onError(e){console.log(e),this.isCodeInvalid.set(!0)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=C({type:i,selectors:[["app-totp-code-verification"]],inputs:{isCodeInvalid:[1,"isCodeInvalid"]},outputs:{isCodeInvalid:"isCodeInvalidChange"},standalone:!0,features:[y],decls:20,vars:1,consts:[["confirmationCode",""],[1,"card"],[1,"card-header","bg-primary","text-light"],[1,"card-body"],[1,"card-title","text-primary"],[1,"card-text"],[1,"input-group"],[1,"input-group-text"],["type","text","required","","pattern","[0-9]{6,6}","maxlength","6","min","6","autocomplete","off",1,"form-control"],["class","form-text text-danger text-center",4,"ngIf"],[1,"d-inline-flex","gap-2","mt-4"],["mat-dialog-close","false",1,"btn","btn-outline-danger"],[1,"btn","btn-primary",3,"click"],[1,"form-text","text-danger","text-center"]],template:function(t,n){if(t&1){let a=te();h(0,"div",1)(1,"div",2),u(2," Two-Factor Authentication "),d(),h(3,"div",3)(4,"div",4),u(5,"TOTP Code Verification"),d(),h(6,"div",5)(7,"p"),u(8,"Your security is our top priority. To ensure your account remains protected, please complete the two-factor authentication process by entering the 6-digit code from your authenticator app."),d(),h(9,"div",6)(10,"span",7),u(11,"Code"),d(),ee(12,"input",8,0),d(),w(14,yt,2,0,"div",9),d(),h(15,"div",10)(16,"button",11),u(17,"Cancel"),d(),h(18,"button",12),x("click",function(){M(a);let s=N(13);return P(n.confirmCode(s))}),u(19,"Confirm"),d()()()()}t&2&&(O(14),k("ngIf",n.isCodeInvalid()))},dependencies:[ue,Ne]});let o=i;return o})();var it=(()=>{let i=class i{constructor(){this.httpClient=c(ze),this.authService=c(R)}sendConfirmationCode(e){let t=this.authService.getCurrentUserContext(),n=e?"Basic "+btoa(e.username+":"+e.password):`Bearer ${t.accessToken}`;return this.httpClient.post(ge.journeyApi+"/sendEmailCode",{},{headers:{Authorization:n}})}verifyConfirmationCode(e){let t=this.authService.getCurrentUserContext();return this.httpClient.post(ge.journeyApi+"/verifyEmailCode",{code:e},{headers:{Authorization:`Bearer ${t.accessToken}`}})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();var ji=(()=>{let i=class i{constructor(){this.destroyRef=c(K),this.emailConfirmationCodeService=c(it),this.loginService=c(ne),this.authService=c(R),this.dialogRef=c(D),this.credential=c($),this.isCodeSent=E(!1),this.canSendCode=E(!0),this.isCodeValid=E(!0)}confirmCode(e,t){this.isCodeValid.set(!0),e.validity.valid?(t.disabled=!0,this.credential?this.verifyCodeInUnauthenticatedContext(e,t):this.verifyCodeInAuthenticatedContext(e,t)):(this.isCodeValid.set(!1),console.log("invalid code"))}verifyCodeInUnauthenticatedContext(e,t){this.loginService.mfa(e.value,"EMAIL_ADDRESS",this.credential).pipe(S(this.destroyRef)).subscribe({next:n=>{this.authService.getUserContextForSuccessfulLogin(n),this.onVerificationSuccess(t)},error:n=>this.onVerificationError(n,t)})}verifyCodeInAuthenticatedContext(e,t){this.emailConfirmationCodeService.verifyConfirmationCode(e.value).pipe(S(this.destroyRef)).subscribe({next:n=>this.onVerificationSuccess(t),error:n=>this.onVerificationError(n,t)})}onVerificationSuccess(e){e.disabled=!0,console.log("code verified successfully"),this.dialogRef.close(!0)}onVerificationError(e,t){console.log(e),this.isCodeValid.set(!1),t.disabled=!1}sendCode(){this.canSendCode.set(!1),this.emailConfirmationCodeService.sendConfirmationCode(this.credential).pipe(S(this.destroyRef)).subscribe({next:e=>this.onSentSuccess(),error:e=>this.onSentError(e)})}onSentError(e){console.log(e),this.canSendCode.set(!0)}onSentSuccess(){this.isCodeSent.set(!0),setTimeout(()=>this.canSendCode.set(!0),1e3*60),console.log("Code has been sent successfully to register email")}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=C({type:i,selectors:[["app-email-code-verification"]],inputs:{isCodeSent:[1,"isCodeSent"],canSendCode:[1,"canSendCode"],isCodeValid:[1,"isCodeValid"]},outputs:{isCodeSent:"isCodeSentChange",canSendCode:"canSendCodeChange",isCodeValid:"isCodeValidChange"},standalone:!0,features:[y],decls:35,vars:3,consts:[["confirmationCode",""],["confirmButton",""],[1,"card"],[1,"card-header","bg-primary","text-light"],[1,"card-body"],[1,"card-text"],[1,"input-group"],[1,"input-group-text"],["type","text","required","","pattern","[0-9]{6,6}","maxlength","6","min","6","autocomplete","off",1,"form-control"],[1,"form-text","text-danger","text-center",3,"hidden"],[1,"d-inline-flex","gap-2","mt-4"],["mat-dialog-close","false",1,"btn","btn-outline-danger"],["cdkFocusInitial","",1,"btn","btn-primary",3,"click","disabled"],[1,"btn","btn-primary",3,"click"],[1,"mt-2"],[1,"text-success","small","fw-bold",3,"hidden"]],template:function(t,n){if(t&1){let a=te();h(0,"div",2)(1,"div",3),u(2," Email Code Confirmation Required "),d(),h(3,"div",4)(4,"div",5)(5,"p"),u(6,"To complete verification, please follow these steps:"),d(),h(7,"ol")(8,"li"),u(9,"Click the "),h(10,"code"),u(11,"Send"),d(),u(12," button to receive a verification code in your registered email "),d(),h(13,"li"),u(14,"Check your email for the verification code"),d(),h(15,"li"),u(16,'Enter the code in the field below and click "Confirm" to complete the verification'),d()(),h(17,"div",6)(18,"span",7),u(19,"Code"),d(),ee(20,"input",8,0),d(),h(22,"div",9),u(23," Code invalid. Please enter valid code. "),d()(),h(24,"div",10)(25,"button",11),u(26,"Cancel"),d(),h(27,"button",12),x("click",function(){return M(a),P(n.sendCode())}),u(28,"Send "),d(),h(29,"button",13,1),x("click",function(){M(a);let s=N(21),f=N(30);return P(n.confirmCode(s,f))}),u(31,"Confirm"),d()(),h(32,"div",14)(33,"p",15),u(34,"Code has been sent successfully to register email. If you haven't received, click Sent button again after 60 seconds."),d()()()()}t&2&&(O(22),k("hidden",n.isCodeValid()),O(5),k("disabled",!n.canSendCode()),O(6),k("hidden",!n.isCodeSent()))},dependencies:[tt,ue]});let o=i;return o})();export{D as a,et as b,ue as c,yi as d,ji as e};
