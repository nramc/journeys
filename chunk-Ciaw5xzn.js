import{Ar as oD,At as Rh,Bn as ev,Br as rg,Dr as ng,En as bh,Fr as q,Ft as Sh,G as Iv,H as Ig,Hn as fT,Ht as Uh,Jn as gw,Jt as Vw,K as Iw,L as He$1,N as Gh,Nt as Rr,Qt as WD,S as El,Si as z,Sn as aT,Sr as mg,St as Pw,Tr as nD,U as Im,Un as gE,Ut as V,Vt as U1,Wn as gd,X as Ki,Xt as W,Yr as ue,Z as Ks,Zn as hl,Zr as vT,Zt as W1,_r as lg,at as N,b as ET,bi as yt,bn as _u,br as mT,ci as xe,cn as Yw,d as Bh,dn as ZD,dr as ki,en as We$1,gn as _T,gt as Ow,hi as yi,in as Xh,ir as j1,j as G1,k as Fw,kn as cg,ln as Z,lt as Nu,mr as kw,ni as w,nt as Mu,o as Ah,on as Yh,pi as yc,pr as kr,qr as uT,r as $h,s as Aw,ti as vw,tt as Mr,v as Cw,w as F1,wr as mw,x as Eg,xi as yw,xr as md}from"./chunk-BAmWVHme.js";import{D as ti,r as Fr,v as ci$1}from"./chunk-CJqAhjyF.js";import{A as m,E as ki$1,H as ze,I as qe,P as pe,S as ge,V as z$1,b as at,d as P,t as Ai,z as ue$1}from"./chunk-C2Ke3sSr.js";import{D as xt$1,Lt as Yt,O as d,Pt as N$1,Q as d$1,Ut as gi,_ as ke,a as yt$1,an as Rn$1,cn as Wt,ct as G,d as On$1,f as Pt,g as en,i as wt,l as Kt,ln as wt$1,lt as I$1,m as _,mt as T,r as ue$2,s as In$1,sn as Tn$1,st as Bt,u as Nn$1,un as xt,ut as Lt,w as wn$1,x as rt}from"./main-FVCJRBMJ.js";import{t as l}from"./chunk-Ou_IXl0H.js";import{t as Jt}from"./chunk-CPZk8UK_.js";import{c as m$1,t as L}from"./chunk-BPoDB_yI.js";import{t as C}from"./chunk-BrPbM7EI.js";import{a as q$1,i as ke$1,n as ft,s as ut,t as Qt}from"./chunk-CjYXB_R2.js";import{a as zt,i as ot,n as Ot,r as Vt,t as Ht}from"./chunk-LR-19QYE.js";import{c as ua,r as On$2,s as qa,t as Bn$1}from"./chunk-jj5py51d.js";import{t as pe$1}from"./chunk-DjP_0zXh.js";import{n as bt,r as nt,t as Dt}from"./chunk-CGW_aRyZ.js";import{n as De,t as Be$1}from"./chunk-D41rsS44.js";var fn=[`*`];function _n(t,l){t&1&&Ow(0)}var Ae=(()=>{class t{_elementRef=w(kr);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(n){return new(n||t)};static ɵdir=ZD({type:t,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return t})();var Be=(()=>{class t{template=w(Mr);static ɵfac=function(n){return new(n||t)};static ɵdir=ZD({type:t,selectors:[[``,`cdkStepLabel`,``]]})}return t})();var H={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var gn=new N(`STEPPER_GLOBAL_OPTIONS`);var Re=(()=>{class t{_stepperOptions;_stepper=w(de);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=He$1(!1);interactedStream=new We$1;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=He$1(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=He$1(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||vn(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=He$1(null);index=He$1(-1);isSelected=yt(()=>this._stepper.selectedIndex===this.index());indicatorType=yt(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??H.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?H.ERROR:this._displayDefaultIndicatorType?!n||e?H.NUMBER:r?H.EDIT:H.DONE:n&&!e?H.DONE:n&&e?i:r&&e?H.EDIT:i});isNavigable=yt(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=He$1(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&tn(this.stepControl)}constructor(){let e=w(gn,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),bn(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(n){return new(n||t)};static ɵcmp=WD({type:t,selectors:[[`cdk-step`]],contentQueries:function(n,i,r){if(n&1&&ng(r,Be,5)(r,_,5),n&2){let d;Pw(d=Fw())&&(i.stepLabel=d.first),Pw(d=Fw())&&(i._childForms=d)}},viewQuery:function(n,i){if(n&1&&rg(Mr,7),n&2){let r;Pw(r=Fw())&&(i.content=r.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,W1],optional:[2,`optional`,`optional`,W1],completed:[2,`completed`,`completed`,W1],hasError:[2,`hasError`,`hasError`,W1]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[ev],ngContentSelectors:fn,decls:1,vars:0,template:function(n,i){n&1&&(kw(),Rh(0,_n,1,0,`ng-template`))},encapsulation:2})}return t})();var de=(()=>{class t{_dir=w(qe,{optional:!0});_changeDetectorRef=w(U1);_elementRef=w(kr);_destroyed=new Z;_keyManager;_steps;steps=new yi;_stepHeader;_sortedHeaders=new yi;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=He$1(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=He$1(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new We$1;selectedIndexChange=new We$1;_groupId=w(ge).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(_u(this._steps),Nu(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(_u(this._stepHeader),Nu(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new pe(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Im()).pipe(_u(this._layoutDirection()),Nu(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()===`rtl`?`next`:`previous`:n>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=ze(e),i=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return(i?tn(i)||yn(i)||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,n=ue$1();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(n){return new(n||t)};static ɵdir=ZD({type:t,selectors:[[``,`cdkStepper`,``]],contentQueries:function(n,i,r){if(n&1&&ng(r,Re,5)(r,Ae,5),n&2){let d;Pw(d=Fw())&&(i._steps=d),Pw(d=Fw())&&(i._stepHeader=d)}},inputs:{linear:[2,`linear`,`linear`,W1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,G1],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return t})();function Le(t){return typeof t==`function`}function vn(t){return Le(t)?t().valid():t.valid}function tn(t){return Le(t)?t().invalid():t.invalid}function yn(t){return Le(t)?t().pending():t.pending}function bn(t){Le(t)?t().reset():t.reset()}var nn=(()=>{class t{_stepper=w(de);type=`submit`;static ɵfac=function(n){return new(n||t)};static ɵdir=ZD({type:t,selectors:[[`button`,`cdkStepperNext`,``]],hostVars:1,hostBindings:function(n,i){n&1&&Xh(`click`,function(){return i._stepper.next()}),n&2&&Yh(`type`,i.type)},inputs:{type:`type`}})}return t})();var rn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=bh({type:t});static ɵinj=Ks({imports:[ki$1]})}return t})();var xn=(t,l,e)=>({index:t,active:l,optional:e});function Cn(t,l){if(t&1&&Gh(0,2),t&2){let e=Aw();$h(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,ET(2,xn,e.index,e.active,e.optional))}}function Sn(t,l){if(t&1&&(ki(0,`span`,7),aT(1),hl()),t&2){let e=Aw(2);gE(),mg(e._getDefaultTextForState(e.state))}}function Mn(t,l){if(t&1&&(ki(0,`span`,8),aT(1),hl()),t&2){let e=Aw(3);gE(),mg(e._intl.completedLabel)}}function wn(t,l){if(t&1&&(ki(0,`span`,8),aT(1),hl()),t&2){let e=Aw(3);gE(),mg(e._intl.editableLabel)}}function Dn(t,l){if(t&1&&(gw(0,Mn,2,1,`span`,8)(1,wn,2,1,`span`,8),ki(2,`mat-icon`,7),aT(3),hl()),t&2){let e=Aw(2);mw(e.state===`done`?0:e.state===`edit`?1:-1),gE(3),mg(e._getDefaultTextForState(e.state))}}function En(t,l){if(t&1&&gw(0,Sn,2,1,`span`,7)(1,Dn,4,2),t&2)mw(Aw().state===`number`?0:1)}function In(t,l){t&1&&(ki(0,`div`,4),Gh(1,9),hl()),t&2&&(gE(),$h(`ngTemplateOutlet`,l.template))}function Tn(t,l){if(t&1&&(ki(0,`div`,4),aT(1),hl()),t&2){let e=Aw();gE(),mg(e.label)}}function Nn(t,l){if(t&1&&(ki(0,`div`,5),aT(1),hl()),t&2){let e=Aw();gE(),mg(e._intl.optionalLabel)}}function kn(t,l){if(t&1&&(ki(0,`div`,6),aT(1),hl()),t&2){let e=Aw();gE(),mg(e.errorMessage)}}var an=[`*`];function On(t,l){}function zn(t,l){if(t&1&&(Ow(0),Ah(1,On,0,0,`ng-template`,0)),t&2){let e=Aw();gE(),$h(`cdkPortalOutlet`,e._portal)}}var Fn=[`animatedContainer`];var on=t=>({steps:t});var sn=t=>({step:t});function Rn(t,l){t&1&&Ow(0)}function Ln(t,l){if(t&1&&(ki(0,`div`,5),Gh(1,9)(2,6),hl()),t&2){let e=Aw(2),n=Vw(6);gE(),$h(`ngTemplateOutlet`,e.headerPrefix()),gE(),$h(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,vT(3,on,e.steps))}}function Pn(t,l){if(t&1&&Gh(0,6),t&2){let e=Aw(2);$h(`ngTemplateOutlet`,Vw(6))(`ngTemplateOutletContext`,vT(2,on,e.steps))}}function Vn(t,l){if(t&1&&(ki(0,`div`,10,2),Gh(2,9),hl()),t&2){let e=l.$implicit,n=l.$index,i=Aw(2);Yw(`mat-horizontal-stepper-content-`+i._getAnimationDirection(n)),$h(`id`,i._getStepContentId(n)),Bh(`aria-labelledby`,i._getStepLabelId(n))(`inert`,i.selectedIndex===n?null:``),gE(2),$h(`ngTemplateOutlet`,e.content)}}function jn(t,l){if(t&1&&(ki(0,`div`,3),gw(1,Ln,3,5,`div`,5)(2,Pn,1,4,`ng-container`,6),ki(3,`div`,7),vw(4,Vn,3,6,`div`,8,yw),hl()()),t&2){let e=Aw();gE(),mw(e.headerPrefix()?1:2),gE(3),Iw(e.steps)}}function An(t,l){if(t&1&&Gh(0,9),t&2)$h(`ngTemplateOutlet`,Aw(2).headerPrefix())}function Bn(t,l){if(t&1&&(ki(0,`div`,11),Gh(1,6),ki(2,`div`,12,2)(4,`div`,13)(5,`div`,14),Gh(6,9),hl()()()()),t&2){let e=l.$implicit,n=l.$index,i=l.$index,r=l.$count,d=Aw(2),P=Vw(4);gE(),$h(`ngTemplateOutlet`,P)(`ngTemplateOutletContext`,vT(11,sn,e)),gE(),lg(`mat-stepper-vertical-line`,i!==r-1)(`mat-vertical-content-container-active`,d.selectedIndex===n),Bh(`inert`,d.selectedIndex===n?null:``)(`aria-label`,d.ariaLabel),gE(2),$h(`id`,d._getStepContentId(n)),Bh(`aria-labelledby`,d._getStepLabelId(n)),gE(2),$h(`ngTemplateOutlet`,e.content)}}function Hn(t,l){if(t&1&&(ki(0,`div`,4),gw(1,An,1,1,`ng-container`,9),vw(2,Bn,7,13,`div`,11,yw),hl()),t&2){let e=Aw();gE(),mw(e.headerPrefix()?1:-1),gE(),Iw(e.steps)}}function Wn(t,l){if(t&1){let e=Cw();ki(0,`mat-step-header`,15),Xh(`click`,function(){let i=gd(e).step;return md(i.select())})(`keydown`,function(i){gd(e);return md(Aw()._onKeydown(i))}),hl()}if(t&2){let e=l.step,n=Aw();lg(`mat-horizontal-stepper-header`,n.orientation===`horizontal`)(`mat-vertical-stepper-header`,n.orientation===`vertical`),$h(`tabIndex`,n._getFocusIndex()===e.index()?0:-1)(`id`,n._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,n._iconOverrides)(`disableRipple`,n.disableRipple||!e.isNavigable())(`color`,e.color||n.color),Bh(`role`,n.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,n.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,n.orientation===`horizontal`?n.steps.length:null)(`aria-selected`,n.orientation===`horizontal`?e.isSelected():null)(`aria-current`,n.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,n.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,n.orientation===`vertical`?e.isSelected():null)(`aria-controls`,n._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function Qn(t,l){t&1&&Uh(0,`div`,17)}function Jn(t,l){if(t&1&&(Gh(0,6),gw(1,Qn,1,0,`div`,17)),t&2){let e=l.$implicit,n=l.$index,i=l.$count;Aw(2);$h(`ngTemplateOutlet`,Vw(4))(`ngTemplateOutletContext`,vT(3,sn,e)),gE(),mw(n!==i-1?1:-1)}}function qn(t,l){if(t&1&&(ki(0,`div`,16),vw(1,Jn,2,5,null,null,yw),hl()),t&2){let e=l.steps;Bh(`aria-label`,Aw().ariaLabel),gE(),Iw(e)}}var He=(()=>{class t extends Be{static ɵfac=(()=>{let e;return function(i){return(e||(e=Iv(t)))(i||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`matStepLabel`,``]],features:[Sh]})}return t})();var $n=(()=>{class t{changes=new Z;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(n){return new(n||t)};static ɵprov=Rr({token:t,factory:t.ɵfac})}return t})();var We=(()=>{class t extends Ae{_intl=w($n);_focusMonitor=w(at);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=w(P);e.load(xt),e.load(z$1);let n=w(U1);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof He?null:this.label}_templateLabel(){return this.label instanceof He?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(n){return new(n||t)};static ɵcmp=WD({type:t,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(n,i){n&2&&(Yw(`mat-`+(i.color||`primary`)),lg(`mat-step-header-empty-label`,i._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Sh],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(n,i){if(n&1&&(Uh(0,`div`,0),ki(1,`div`)(2,`div`,1),gw(3,Cn,1,6,`ng-container`,2)(4,En,2,1),hl()(),ki(5,`div`,3),gw(6,In,2,1,`div`,4)(7,Tn,2,1,`div`,4),gw(8,Nn,2,1,`div`,5),gw(9,kn,2,1,`div`,6),hl()),n&2){let r;$h(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disableRipple),gE(),Yw(fT(`mat-step-icon-state-`,i.state,` mat-step-icon`)),lg(`mat-step-icon-selected`,i.selected),gE(2),mw(i.iconOverrides&&i.iconOverrides[i.state]?3:4),gE(2),lg(`mat-step-label-active`,i.active)(`mat-step-label-selected`,i.selected)(`mat-step-label-error`,i.state==`error`),gE(),mw((r=i._templateLabel())?6:i._stringLabel()?7:-1,r),gE(2),mw(i._hasOptionalLabel()?8:-1),gE(),mw(i._hasErrorLabel()?9:-1)}},dependencies:[Wt,ti,wt],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--%NS%mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--%NS%mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--%NS%mat-stepper-header-optional-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--%NS%mat-stepper-header-icon-foreground-color, var(--%NS%mat-sys-surface));
  background-color: var(--%NS%mat-stepper-header-icon-background-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--%NS%mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--%NS%mat-stepper-header-error-state-icon-foreground-color, var(--%NS%mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--%NS%mat-stepper-header-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-stepper-header-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-stepper-header-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--%NS%mat-stepper-header-selected-state-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--%NS%mat-stepper-header-error-state-label-text-color, var(--%NS%mat-sys-error));
  font-size: var(--%NS%mat-stepper-header-error-state-label-text-size, var(--%NS%mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--%NS%mat-stepper-header-selected-state-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-selected-state-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--%NS%mat-stepper-header-selected-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-selected-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--%NS%mat-stepper-header-done-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-done-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--%NS%mat-stepper-header-edit-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-edit-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}
`],encapsulation:2})}return t})();var Un=(()=>{class t{templateRef=w(Mr);name;static ɵfac=function(n){return new(n||t)};static ɵdir=ZD({type:t,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return t})();var Gn=(()=>{class t{_template=w(Mr);static ɵfac=function(n){return new(n||t)};static ɵdir=ZD({type:t,selectors:[[`ng-template`,`matStepContent`,``]]})}return t})();var Kn=(()=>{class t extends Re{_errorStateMatcher=w(d,{skipSelf:!0});_viewContainerRef=w(Ki);_isSelected=V.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Mu(()=>this._stepper.selectionChange.pipe(xe(e=>e.selectedStep===this),_u(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new N$1(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),r=!!(e&&e.invalid&&this.interacted);return i||r}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??!1,i=!!(e&&e().invalid()&&this.interacted);return n||i}static ɵfac=(()=>{let e;return function(i){return(e||(e=Iv(t)))(i||t)}})();static ɵcmp=WD({type:t,selectors:[[`mat-step`]],contentQueries:function(n,i,r){if(n&1&&ng(r,He,5)(r,Gn,5),n&2){let d;Pw(d=Fw())&&(i.stepLabel=d.first),Pw(d=Fw())&&(i._lazyContent=d.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[mT([{provide:d,useExisting:t},{provide:Re,useExisting:t}]),Sh],ngContentSelectors:an,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(n,i){n&1&&(kw(),Ah(0,zn,2,1,`ng-template`))},dependencies:[gi],encapsulation:2})}return t})();var Zn=(()=>{class t extends de{_ngZone=w(ue);_renderer=w(yc);_animationsDisabled=Ai();_cleanupTransition;_isAnimating=He$1(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new yi;_icons;animationDone=new We$1;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=F1(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!w(m).isBrowser;constructor(){super();let n=w(kr).nativeElement.nodeName.toLowerCase();this.orientation=n===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(Nu(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(Nu(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(_u(null),Nu(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation===`horizontal`&&e.propertyName===`transform`&&n.classList.contains(`mat-horizontal-stepper-content-current`),r=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&n.classList.contains(`mat-vertical-content-container-active`);(i||r)&&this._animatedContainers.find(P=>P.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(n){return new(n||t)};static ɵcmp=WD({type:t,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(n,i,r){if(n&1&&ng(r,Kn,5)(r,Un,5),n&2){let d;Pw(d=Fw())&&(i._steps=d),Pw(d=Fw())&&(i._icons=d)}},viewQuery:function(n,i){if(n&1&&rg(We,5)(Fn,5),n&2){let r;Pw(r=Fw())&&(i._stepHeader=r),Pw(r=Fw())&&(i._animatedContainers=r)}},hostVars:14,hostBindings:function(n,i){n&2&&(cg(`--%NS%mat-stepper-animation-duration`,i._getAnimationDuration()),lg(`mat-stepper-horizontal`,i.orientation===`horizontal`)(`mat-stepper-vertical`,i.orientation===`vertical`)(`mat-stepper-label-position-end`,i.orientation===`horizontal`&&i.labelPosition==`end`)(`mat-stepper-label-position-bottom`,i.orientation===`horizontal`&&i.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,i.headerPosition===`bottom`)(`mat-stepper-animating`,i._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[mT([{provide:de,useExisting:t}]),Sh],ngContentSelectors:an,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(n,i){if(n&1&&(kw(),gw(0,Rn,1,0),gw(1,jn,6,1,`div`,3)(2,Hn,4,1,`div`,4),Ah(3,Wn,1,27,`ng-template`,null,0,_T)(5,qn,3,1,`ng-template`,null,1,_T)),n&2){let r;mw(i._isServer?0:-1),gE(),mw((r=i.orientation)===`horizontal`?1:r===`vertical`?2:-1)}},dependencies:[ti,We],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--%NS%mat-stepper-container-text-font, var(--%NS%mat-sys-body-medium-font));
  background: var(--%NS%mat-stepper-container-color, var(--%NS%mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--%NS%mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
  top: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--%NS%mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return t})();var ln=(()=>{class t extends nn{static ɵfac=(()=>{let e;return function(i){return(e||(e=Iv(t)))(i||t)}})();static ɵdir=ZD({type:t,selectors:[[`button`,`matStepperNext`,``]],hostAttrs:[1,`mat-stepper-next`],hostVars:1,hostBindings:function(n,i){n&2&&Yh(`type`,i.type)},features:[Sh]})}return t})();var dn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=bh({type:t});static ɵinj=Ks({providers:[d],imports:[Yt,rn,yt$1,wt$1,Zn,We,ki$1]})}return t})();var I=(function(t){return t[t.NEW=0]=`NEW`,t[t.VIEW=1]=`VIEW`,t[t.EDIT=2]=`EDIT`,t})(I||{});function ni(t,l){if(t&1){let e=Cw();ki(0,`mat-chip-row`,8),Xh(`removed`,function(){let i=gd(e).$implicit;return md(Aw().removeTag(i))}),ki(1,`span`),aT(2),hl(),ki(3,`button`,9),Xh(`click`,function(){let i=gd(e).$implicit;return md(Aw().removeTag(i))}),ki(4,`mat-icon`),aT(5,`cancel`),hl()()()}if(t&2){let e=l.$implicit,n=Aw();$h(`highlighted`,!0)(`editable`,!n.disabled())(`removable`,!n.disabled()),gE(2),mg(e),gE(),$h(`disabled`,n.disabled())}}var pn=(()=>{class t{constructor(){this.separatorKeysCodes=[13,188,32],this.tags=j1([]),this.disabled=F1(!1)}addTag(e){let n=(e.value||``).toLowerCase().trim();n&&this.tags.update(i=>[...i,n]),e.chipInput.clear()}removeTag(e){this.tags.update(n=>n.filter(i=>i!==e))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=WD({type:t,selectors:[[`app-tags-input`]],inputs:{tags:[1,`tags`],disabled:[1,`disabled`]},outputs:{tags:`tagsChange`},decls:13,vars:4,consts:[[`chipGrid`,``],[1,`w-full`],[`appearance`,`outline`,1,`w-full`],[`for`,`favoriteTagsInput`,1,`sr-only`],[`aria-hidden`,`true`],[`matInput`,``,`id`,`favoriteTagsInput`,`placeholder`,`Favorite Tags`,1,`w-full`,`rounded-md`,`focus:ring-indigo-500`,`focus:border-indigo-500`,3,`matChipInputTokenEnd`,`disabled`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`aria-label`,`Tags`,1,`flex`,`flex-wrap`,`gap-2`],[1,`bg-indigo-100`,`text-indigo-700`,`border`,`rounded-full`,`px-4`,`py-2`,`shadow-sm`,`flex`,`items-center`,3,`highlighted`,`editable`,`removable`],[1,`bg-indigo-100`,`text-indigo-700`,`border`,`rounded-full`,`px-4`,`py-2`,`shadow-sm`,`flex`,`items-center`,3,`removed`,`highlighted`,`editable`,`removable`],[`matChipRemove`,``,1,`ml-2`,`text-red-500`,`hover:text-red-700`,3,`click`,`disabled`]],template:function(n,i){if(n&1&&(ki(0,`div`)(1,`div`,1)(2,`mat-form-field`,2)(3,`label`,3),aT(4,`Favorite Tags`),hl(),ki(5,`mat-label`,4),aT(6,`Favorite Tags`),hl(),ki(7,`input`,5),Xh(`matChipInputTokenEnd`,function(d){return i.addTag(d)}),hl()()(),ki(8,`div`,1)(9,`mat-chip-grid`,6,0),vw(11,ni,6,5,`mat-chip-row`,7,yw),hl()()()),n&2){let r=Vw(10);gE(7),$h(`disabled`,i.disabled())(`matChipInputFor`,r)(`matChipInputSeparatorKeyCodes`,i.separatorKeysCodes)(`matChipInputAddOnBlur`,!0),gE(4),Iw(i.tags())}},dependencies:[Vt,Ht,zt,Ot,ot,yt$1,wt,Qt,ke$1,q$1,Be$1,De,On$1],encapsulation:2})}}return t})();var cn=(()=>{class t{constructor(){this.httpClient=w(Fr),this.authService=w(d$1)}enhance(e){let n=this.authService.getCurrentUserContext();return this.httpClient.post(l.journeyApi+`/ai/enhance-narration`,e,{headers:{Authorization:`Bearer ${n.accessToken}`,"Content-Type":`application/json`}})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=z({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function ai(t,l){if(t&1){let e=Cw();ki(0,`button`,14),Xh(`click`,function(){let i=gd(e).$implicit;return md(Aw(2).enhanceNarration(i))}),aT(1),hl()}if(t&2){let e=l.$implicit;gE(),El(` `,e,` `)}}function oi(t,l){if(t&1){let e=Cw();ki(0,`mat-button-toggle-group`,9),Eg(`ngModelChange`,function(i){gd(e);let r=Aw();return uT(r.markdownStyle,i)||(r.markdownStyle=i),md(i)}),ki(1,`mat-button-toggle`,10),aT(2,`Edit`),hl(),ki(3,`mat-button-toggle`,11),aT(4,`Preview`),hl()(),nD(),ki(5,`button`,12),aT(6,` Enhance `),ki(7,`mat-icon`),aT(8,`auto_awesome`),hl()(),ki(9,`mat-menu`,null,1),vw(11,ai,2,1,`button`,13,yw),hl()}if(t&2){let e=Vw(10),n=Aw();Ig(`ngModel`,n.markdownStyle),oD(),gE(5),$h(`matMenuTriggerFor`,e)(`disabled`,n.disabled()),gE(6),Iw(n.tones)}}function si(t,l){t&1&&(ki(0,`div`),aT(1,`Memories is required.`),hl())}function li(t,l){t&1&&(ki(0,`div`),aT(1,`Memories must be at least 10 characters long.`),hl())}function di(t,l){t&1&&(ki(0,`div`),aT(1,`Memories must be at most 5000 characters long.`),hl())}var mn=(()=>{class t{constructor(){this.tones=[`🌍 Adventurous`,`❤️ Romantic`,`💡 Inspirational`,`🎨 Poetic`,`😄 Funny`,`🧘 Minimalistic`],this.narrationEnhancerService=w(cn),this.markdownStyle=j1(`Source`),this.disabled=F1(!1),this.title=F1(``),this.narration=j1(``)}enhanceNarration(e){console.log(e),this.narrationEnhancerService.enhance({narration:this.narration(),tone:e}).subscribe({next:n=>this.narration.set(n.narration)})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=WD({type:t,selectors:[[`app-narration`]],inputs:{markdownStyle:[1,`markdownStyle`],disabled:[1,`disabled`],title:[1,`title`],narration:[1,`narration`]},outputs:{markdownStyle:`markdownStyleChange`,narration:`narrationChange`},decls:13,vars:10,consts:[[`description`,`ngModel`],[`toneMenu`,`matMenu`],[1,`flex`,`gap-2`,`flex-col`],[1,`inline-flex`,`gap-2`,`align-middle`,`content-center`,`items-center`],[`for`,`description`,1,`text-sm`,`font-semibold`],[`rows`,`15`,`id`,`description`,`name`,`description`,`placeholder`,`Detailed information about the Journey`,`required`,``,`minlength`,`10`,`maxlength`,`5000`,1,`w-full`,`p-4`,`border`,`rounded-md`,`focus:outline-hidden`,`focus:ring`,`focus:ring-indigo-500`,`dark:bg-gray-800`,3,`ngModelChange`,`ngModel`,`hidden`],[1,`h-96`,`overflow-auto`,3,`hidden`],[3,`title`,`markdownText`],[1,`text-red-500`,`text-sm`,`mt-2`,3,`hidden`],[`name`,`markdownStyle`,`aria-label`,`Markdown Style`,`hideSingleSelectionIndicator`,`true`,3,`ngModelChange`,`ngModel`],[`value`,`Source`,1,`text-sm`],[`value`,`Preview`,1,`text-sm`],[`mat-raised-button`,``,`type`,`button`,3,`matMenuTriggerFor`,`disabled`],[`mat-menu-item`,``],[`mat-menu-item`,``,3,`click`]],template:function(n,i){if(n&1){let r=Cw();ki(0,`div`,2)(1,`div`,3)(2,`label`,4),aT(3,`Memories`),hl(),gw(4,oi,13,3),hl(),ki(5,`textarea`,5,0),Eg(`ngModelChange`,function(P){return gd(r),uT(i.narration,P)||(i.narration=P),md(P)}),hl(),nD(),ki(7,`div`,6),Uh(8,`app-display-markdown-component`,7),hl(),ki(9,`div`,8),gw(10,si,2,0,`div`),gw(11,li,2,0,`div`),gw(12,di,2,0,`div`),hl()()}if(n&2){let r=Vw(6);gE(4),mw(i.disabled()?-1:4),gE(),Ig(`ngModel`,i.narration),$h(`hidden`,i.markdownStyle()===`Preview`),oD(),gE(2),$h(`hidden`,i.markdownStyle()===`Source`),gE(),$h(`title`,i.title())(`markdownText`,i.narration()),gE(),$h(`hidden`,r.valid||r.pristine),gE(),mw(r.errors?.required?10:-1),gE(),mw(r.errors?.minlength?11:-1),gE(),mw(r.errors?.maxlength?12:-1)}},dependencies:[pe$1,On$1,ke,wn$1,rt,xt$1,Pt,en,Dt,bt,nt,Lt,I$1,G,Bt,Tn$1,Rn$1,yt$1,wt],encapsulation:2})}}return t})();function pi(t,l){t&1&&(ki(0,`div`),aT(1,`Name is required.`),hl())}function ci(t,l){t&1&&(ki(0,`div`),aT(1,`Name must be at least 5 characters long.`),hl())}function mi(t,l){t&1&&(ki(0,`div`),aT(1,`Name must be at most 50 characters long.`),hl())}function ui(t,l){t&1&&(ki(0,`div`),aT(1,`Journey Date is required.`),hl())}function hi(t,l){if(t&1){let e=Cw();ki(0,`button`,20),Xh(`click`,function(){gd(e);return md(Aw(2).enableEditMode())}),aT(1,` Edit `),hl()}if(t&2){let e=Aw(2);$h(`hidden`,e.mode()!==e.OperationMode.VIEW)}}function fi(t,l){if(t&1){let e=Cw();ki(0,`form`,5,0),Xh(`ngSubmit`,function(){gd(e);let i=Vw(1);return md(Aw().save(i))}),ki(2,`div`,6)(3,`div`)(4,`mat-form-field`,7)(5,`mat-label`),aT(6,`Journey Name`),hl(),ki(7,`input`,8,1),Eg(`ngModelChange`,function(i){gd(e);let r=Aw();return uT(r.journey().name,i)||(r.journey().name=i),md(i)}),hl(),nD(),ki(9,`mat-error`,9),gw(10,pi,2,0,`div`),gw(11,ci,2,0,`div`),gw(12,mi,2,0,`div`),hl()()(),ki(13,`div`)(14,`mat-form-field`,7)(15,`mat-label`),aT(16,`Journey Date`),hl(),ki(17,`input`,10,2),Xh(`dateChange`,function(i){gd(e);return md(Aw().journeyDateChangeEvent(i))}),Eg(`ngModelChange`,function(i){gd(e);let r=Aw();return uT(r.journeyDateTimestamp,i)||(r.journeyDateTimestamp=i),md(i)}),hl(),nD(),Uh(19,`mat-datepicker-toggle`,11)(20,`mat-datepicker`,null,3),ki(22,`mat-error`,9),gw(23,ui,2,0,`div`),hl()()()(),ki(24,`div`,12)(25,`app-tags-input`,13),Eg(`tagsChange`,function(i){gd(e);let r=Aw();return uT(r.journey().tags,i)||(r.journey().tags=i),md(i)}),hl()(),ki(26,`div`,12)(27,`app-narration`,14),Eg(`narrationChange`,function(i){gd(e);let r=Aw();return uT(r.journey().description,i)||(r.journey().description=i),md(i)}),hl()(),ki(28,`div`,15)(29,`button`,16),aT(30,` Create `),hl(),Ah(31,hi,2,1,`button`,17),ki(32,`button`,18),aT(33,` Save `),hl(),ki(34,`button`,19),aT(35,` Next `),hl()()()}if(t&2){let e=Vw(1),n=Vw(8),i=Vw(18),r=Vw(21),d=Aw();gE(7),Ig(`ngModel`,d.journey().name),$h(`readOnly`,d.isReadOnly()),oD(),gE(2),$h(`hidden`,n.valid||n.pristine),gE(),mw(n.errors?.required?10:-1),gE(),mw(n.errors?.minlength?11:-1),gE(),mw(n.errors?.maxlength?12:-1),gE(5),$h(`matDatepicker`,r),Ig(`ngModel`,d.journeyDateTimestamp),$h(`readOnly`,d.isReadOnly()),oD(),gE(2),$h(`for`,r),gE(3),$h(`hidden`,i.valid||i.pristine),gE(),mw(i.errors?.required?23:-1),gE(2),Ig(`tags`,d.journey().tags),$h(`disabled`,d.isReadOnly()),gE(2),$h(`title`,d.journey().name),Ig(`narration`,d.journey().description),$h(`disabled`,d.isReadOnly())(`markdownStyle`,d.isReadOnly()?`Preview`:`Source`),gE(2),$h(`disabled`,!e.form.valid)(`hidden`,d.mode()!==d.OperationMode.NEW),gE(3),$h(`disabled`,!e.form.valid)(`hidden`,d.mode()!==d.OperationMode.EDIT),gE(2),$h(`disabled`,d.journey().id===``)}}var aa=(()=>{class t{constructor(){this.OperationMode=I,this.journeyService=w(L),this.notificationService=w(Jt),this.router=w(ue$2),this.datePipe=w(ci$1),this.mode=j1(I.VIEW),this.isReadOnly=yt(()=>this.mode()==I.VIEW),this.journey=j1(new m$1),this.journeyDateTimestamp=He$1(new Date),T(this.journey).subscribe(e=>this.journeyDateTimestamp.set(new Date(e.journeyDate)))}onError(e,n){this.notificationService.showError(e),console.error(n)}onUpdateSuccess(e){this.journey.set(e),this.mode()===I.NEW&&this.router.navigate([`/journey`,this.journey().id,`edit`],{state:{mode:I.VIEW}}).then(),this.mode.set(I.VIEW),this.notificationService.showSuccess(`Journey details saved successfully.`)}save(e){e.valid&&(this.mode()==I.NEW?this.createJourney():this.updateJourney())}createJourney(){this.journeyService.createJourney(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError(`Unexpected error while saving data`,e)})}updateJourney(){this.journeyService.saveJourneyBasicDetails(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError(`Unexpected error while saving data`,e)})}enableEditMode(){this.mode.set(I.EDIT)}journeyDateChangeEvent(e){this.journey.update(n=>W(q({},n),{journeyDate:this.datePipe.transform(e.value,`yyyy-MM-dd`)}))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=WD({type:t,selectors:[[`app-edit-journey-memories-details`]],inputs:{mode:[1,`mode`],journey:[1,`journey`]},outputs:{mode:`modeChange`,journey:`journeyChange`},features:[mT([ci$1])],decls:1,vars:1,consts:[[`journeyForm`,`ngForm`],[`name`,`ngModel`],[`journeyDate`,`ngModel`],[`picker`,``],[1,`content-wrapper`,`flex`,`flex-col`,`gap-2`],[1,`content-wrapper`,`flex`,`flex-col`,`gap-2`,3,`ngSubmit`],[1,`grid`,`grid-cols-1`,`md:grid-cols-2`,`gap-4`],[`appearance`,`outline`,1,`w-full`],[`matInput`,``,`type`,`text`,`id`,`name`,`name`,`name`,`placeholder`,`Name your Journey`,`maxlength`,`50`,`minlength`,`5`,`required`,``,1,`mt-1`,`w-full`,`rounded-md`,`focus:ring-indigo-500`,`focus:border-indigo-500`,3,`ngModelChange`,`ngModel`,`readOnly`],[3,`hidden`],[`matInput`,``,`required`,``,`placeholder`,`dd/mm/yyyy`,`name`,`journeyDate`,3,`dateChange`,`ngModelChange`,`matDatepicker`,`ngModel`,`readOnly`],[`matIconSuffix`,``,3,`for`],[1,`w-full`],[3,`tagsChange`,`tags`,`disabled`],[3,`narrationChange`,`title`,`narration`,`disabled`,`markdownStyle`],[1,`flex`,`flex-wrap`,`justify-center`,`gap-2`,`mt-4`],[`mat-raised-button`,``,`type`,`submit`,1,`px-6`,`py-2`,3,`disabled`,`hidden`],[`mat-stroked-button`,``,`type`,`button`,`class`,`px-6 py-2`,3,`hidden`,`click`,4,`appHasWriteAccess`],[`mat-flat-button`,``,`type`,`submit`,1,`px-6`,`py-2`,3,`disabled`,`hidden`],[`mat-stroked-button`,``,`type`,`button`,`matStepperNext`,``,1,`px-6`,`py-2`,3,`disabled`],[`mat-stroked-button`,``,`type`,`button`,1,`px-6`,`py-2`,3,`click`,`hidden`]],template:function(n,i){n&1&&gw(0,fi,36,23,`form`,4),n&2&&mw(i.journey()?0:-1)},dependencies:[On$1,In$1,ke,wn$1,Nn$1,rt,xt$1,Pt,en,Kt,Dt,Vt,dn,ln,pn,mn,Be$1,De,ke$1,q$1,ft,ut,Qt,Bn$1,On$2,ua,qa,Tn$1,Rn$1,C],encapsulation:2})}}return t})();export{Zn as a,ln as c,Kn as i,He as n,aa as o,I as r,dn as s,Gn as t};