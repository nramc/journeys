import{Bt as Su,C as Dl,D as Em,Dr as mw,Dt as Or,F as Fw,Fr as q,Ir as qh,L as GD,Lt as Rr,Nn as cT,Ot as Ow,Qn as gr,Tr as md,Tt as Oh,Vn as eg,Xn as gl,Xr as ug,Yn as ge,Yr as ue,a as $h,b as Cw,bi as z,dn as YD,gr as ki,jr as og,mi as yd,mt as Mr,oi as w,on as Wj,pr as jw,pt as Mp,ui as xh,un as Y,vt as N,wr as mE,yi as yw}from"./chunk-BEPl3DM3.js";import{A as m$1,C as gi,L as se,S as ge$1,U as zt,t as Ai}from"./chunk-NDV7qcc8.js";import{$t as wt,Ft as Pt,Gt as j,Pt as N$1,Ut as gi$1,Yt as oe,Zt as tt,an as Rn}from"./main-5FP3SHGS.js";function pt(a,l){if(a&1){let t=Cw();ki(0,`div`,1)(1,`button`,2),eg(`click`,function(){md(t);return yd(Ow().action())}),cT(2),gl()()}if(a&2){let t=Ow();mE(2),Dl(` `,t.data.action,` `)}}var _t=[`label`];function bt(a,l){}var kt=Math.pow(2,31)-1;var _=class{_overlayRef;instance;containerInstance;_afterDismissed=new Y;_afterOpened=new Y;_onAction=new Y;_durationTimeoutId;_dismissedByAction=!1;constructor(l,t){this._overlayRef=t,this.containerInstance=l,l._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(l){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(l,kt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var dt=new N(`MatSnackBarData`);var m=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var vt=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=YD({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var yt=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=YD({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var gt=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=YD({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var St=(()=>{class a{snackBarRef=w(_);data=w(dt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(e){return new(e||a)};static ɵcmp=GD({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(e,n){e&1&&(ki(0,`div`,0),cT(1),gl(),mw(2,pt,3,1,`div`,1)),e&2&&(mE(),Dl(` `,n.data.message,`
`),mE(),yw(n.hasAction?2:-1))},dependencies:[Rn,vt,yt,gt],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return a})();var T=`_mat-snack-bar-enter`;var R=`_mat-snack-bar-exit`;var xt=(()=>{class a extends tt{_ngZone=w(ue);_elementRef=w(Rr);_changeDetectorRef=w(Wj);_platform=w(m$1);_animationsDisabled=Ai();snackBarConfig=w(m);_document=w(gr);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=w(ge);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new Y;_onExit=new Y;_onEnter=new Y;_animationState=`void`;_live;_label;_role;_liveElementId=w(ge$1).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===R?this._completeExit():t===T&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Mp(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(T)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(T)},200)))}exit(){return this._destroyed?Em(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Mp(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(R)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(R),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(s=>t.classList.add(s)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i=`mdc-snackbar__label`;n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<e.length;n++){let i=e[n],s=i.getAttribute(`aria-owns`);this._trackedModals.add(i),s?s.indexOf(t)===-1&&i.setAttribute(`aria-owns`,s+` `+t):i.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute(`aria-owns`);if(e){let n=e.replace(this._liveElementId,``).trim();n.length>0?t.setAttribute(`aria-owns`,n):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector(`[aria-hidden]`),n=t.querySelector(`[aria-live]`);if(e&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute(`aria-hidden`),n.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(e){return new(e||a)};static ɵcmp=GD({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(e,n){if(e&1&&og(gi$1,7)(_t,7),e&2){let i;Fw(i=jw())&&(n._portalOutlet=i.first),Fw(i=jw())&&(n._label=i.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(e,n){e&1&&eg(`animationend`,function(s){return n.onAnimationEnd(s.animationName)})(`animationcancel`,function(s){return n.onAnimationEnd(s.animationName)}),e&2&&ug(`mat-snack-bar-container-enter`,n._animationState===`visible`)(`mat-snack-bar-container-exit`,n._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!n._animationsDisabled)},features:[xh],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(e,n){e&1&&(ki(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Oh(4,bt,0,0,`ng-template`,4),gl(),qh(5,`div`),gl()()),e&2&&(mE(5),$h(`aria-live`,n._live)(`role`,n._role)(`id`,n._liveElementId))},dependencies:[gi$1],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return a})();var At=new N(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new m});var mt=(()=>{class a{_live=w(zt);_injector=w(ge);_breakpointObserver=w(se);_parentSnackBar=w(a,{optional:!0,skipSelf:!0});_defaultConfig=w(At);_animationsDisabled=Ai();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=St;snackBarContainerComponent=xt;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e=``,n){let i=q(q({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=ge.create({parent:n||this._injector,providers:[{provide:m,useValue:e}]}),s=new wt(this.snackBarContainerComponent,e.viewContainerRef,i),o=t.attach(s);return o.instance.snackBarConfig=e,o.instance}_attach(t,e){let n=q(q(q({},new m),this._defaultConfig),e),i=this._createOverlay(n),s=this._attachSnackBarContainer(i,n),o=new _(s,i);if(t instanceof Mr){let h=new N$1(t,null,{$implicit:n.data,snackBarRef:o});o.instance=s.attachTemplatePortal(h)}else{let ht=new wt(t,void 0,this._createInjector(n,o));o.instance=s.attachComponentPortal(ht).instance}return this._breakpointObserver.observe(gi.HandsetPortrait).pipe(Su(i.detachments())).subscribe(h=>{i.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),n.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(o,n),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new j;e.direction=t.direction;let n=oe(this._injector),i=t.direction===`rtl`,s=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!i||t.horizontalPosition===`end`&&i,o=!s&&t.horizontalPosition!==`center`;return s?n.left(`0`):o?n.right(`0`):n.centerHorizontally(),t.verticalPosition===`top`?n.top(`0`):n.bottom(`0`),e.positionStrategy=n,e.disableAnimations=this._animationsDisabled,Pt(this._injector,e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return ge.create({parent:n||this._injector,providers:[{provide:_,useValue:e},{provide:dt,useValue:t.data}]})}static ɵfac=function(e){return new(e||a)};static ɵprov=Or({token:a,factory:a.ɵfac})}return a})();var Jt=(()=>{class a{constructor(){this.snackBar=w(mt)}showSuccess(t,e=3e3){setTimeout(()=>this.snackBar.open(t,`Close`,{duration:e,panelClass:[`success-snackbar`]}))}showError(t,e=3e3){setTimeout(()=>this.snackBar.open(t,`Close`,{duration:e,panelClass:[`error-snackbar`]}))}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵprov=z({token:a,factory:a.ɵfac,providedIn:`root`})}}return a})();export{Jt as t};