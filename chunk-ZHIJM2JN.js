import{f as I,g as at,h as it,j as O,l as st,p as ot}from"./chunk-2KWCZQSF.js";import{c as nt,d as D,g as y,h as E,j as T}from"./chunk-2PPFUFFT.js";import{a as rt}from"./chunk-H4VMZNAY.js";import{H as tt,L as et,a as G,u as Y,v as J}from"./chunk-HI24ZEE2.js";import{d as $}from"./chunk-65UXW6KM.js";import{Aa as F,Ec as M,Fa as b,Fb as A,Gc as R,Hb as v,Jb as V,Ka as L,Mb as x,Oa as z,Wb as H,Wc as X,a as d,bc as q,ca as P,fc as k,gc as p,hc as Q,ja as _,lc as U,ma as g,n as c,nc as Z,pa as s,qb as h,qc as W,rc as K,sc as S,tb as N,xc as B,yc as C,za as j,zc as w}from"./chunk-INLK7QV6.js";function ht(a,l){if(a&1){let t=U();k(0,"div",1)(1,"button",2),W("click",function(){j(t);let n=S();return F(n.action())}),M(2),p()()}if(a&2){let t=S();h(2),R(" ",t.data.action," ")}}var pt=["label"];function ft(a,l){}var _t=Math.pow(2,31)-1,f=class{_overlayRef;instance;containerInstance;_afterDismissed=new c;_afterOpened=new c;_onAction=new c;_durationTimeoutId;_dismissedByAction=!1;constructor(l,t){this._overlayRef=t,this.containerInstance=l,l._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(l){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(l,_t))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ct=new g("MatSnackBarData"),m=class{politeness="assertive";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},bt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=v({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),vt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=v({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),kt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=v({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),yt=(()=>{class a{snackBarRef=s(f);data=s(ct);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=A({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(k(0,"div",0),M(1),p(),x(2,ht,3,1,"div",1)),e&2&&(h(),R(" ",n.data.message,`
`),h(),q(n.hasAction?2:-1))},dependencies:[rt,bt,vt,kt],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}return a})(),gt={snackBarState:nt("state",[E("void, hidden",y({transform:"scale(0.8)",opacity:0})),E("visible",y({transform:"scale(1)",opacity:1})),T("* => visible",D("150ms cubic-bezier(0, 0, 0.2, 1)")),T("* => void, * => hidden",D("75ms cubic-bezier(0.4, 0.0, 1, 1)",y({opacity:0})))])},At=(()=>{class a extends it{_ngZone=s(L);_elementRef=s(z);_changeDetectorRef=s(X);_platform=s(G);snackBarConfig=s(m);_document=s($);_trackedModals=new Set;_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new c;_onExit=new c;_onEnter=new c;_animationState="void";_live;_label;_role;_liveElementId=s(et).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){let{fromState:e,toState:n}=t;if((n==="void"&&e!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){let i=this._onEnter;this._ngZone.run(()=>{i.next(),i.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(o=>t.classList.add(o)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let i=e[n],o=i.getAttribute("aria-owns");this._trackedModals.add(i),o?o.indexOf(t)===-1&&i.setAttribute("aria-owns",o+" "+t):i.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=A({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&(B(O,7),B(pt,7)),e&2){let i;C(i=w())&&(n._portalOutlet=i.first),C(i=w())&&(n._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:1,hostBindings:function(e,n){e&1&&K("@state.done",function(o){return n.onAnimationEnd(o)}),e&2&&Z("@state",n._animationState)},features:[V],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(k(0,"div",1)(1,"div",2,0)(3,"div",3),x(4,ft,0,0,"ng-template",4),p(),Q(5,"div"),p()()),e&2&&(h(5),H("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[O],styles:[".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],encapsulation:2,data:{animation:[gt.snackBarState]}})}return a})();function xt(){return new m}var St=new g("mat-snack-bar-default-options",{providedIn:"root",factory:xt}),lt=(()=>{class a{_overlay=s(ot);_live=s(tt);_injector=s(b);_breakpointObserver=s(Y);_parentSnackBar=s(a,{optional:!0,skipSelf:!0});_defaultConfig=s(St);_snackBarRefAtThisLevel=null;simpleSnackBarComponent=yt;snackBarContainerComponent=At;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let i=d(d({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=b.create({parent:n||this._injector,providers:[{provide:m,useValue:e}]}),o=new I(this.snackBarContainerComponent,e.viewContainerRef,i),r=t.attach(o);return r.instance.snackBarConfig=e,r.instance}_attach(t,e){let n=d(d(d({},new m),this._defaultConfig),e),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),r=new f(o,i);if(t instanceof N){let u=new at(t,null,{$implicit:n.data,snackBarRef:r});r.instance=o.attachTemplatePortal(u)}else{let u=this._createInjector(n,r),dt=new I(t,void 0,u),mt=o.attachComponentPortal(dt);r.instance=mt.instance}return this._breakpointObserver.observe(J.HandsetPortrait).pipe(P(i.detachments())).subscribe(u=>{i.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){let e=new st;e.direction=t.direction;let n=this._overlay.position().global(),i=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!i||t.horizontalPosition==="end"&&i,r=!o&&t.horizontalPosition!=="center";return o?n.left("0"):r?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return b.create({parent:n||this._injector,providers:[{provide:f,useValue:e},{provide:ct,useValue:t.data}]})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Jt=(()=>{class a{constructor(){this.snackBar=s(lt)}showSuccess(t,e=3e3){setTimeout(()=>this.snackBar.open(t,"Close",{duration:e,panelClass:["success-snackbar"]}))}showError(t,e=3e3){setTimeout(()=>this.snackBar.open(t,"Close",{duration:e,panelClass:["error-snackbar"]}))}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{Jt as a};
