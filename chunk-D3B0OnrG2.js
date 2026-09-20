import{$ as IT,$t as Tg,B as Ge,C as DT,Ci as zh,Dr as oD,En as Zj,Er as nv,F as Ew,Fr as pg,Ft as Pw,Gr as sg,Gt as Rr,H as Gj,Hr as rg,In as bg,Jr as uT,Jt as Sh,Lr as q,M as Ei,Mt as Pi,Nr as pT,O as Dv,Pn as ag,Qr as vd,Qt as TT,Rt as Qj,Si as zD,St as N,Tt as Nr,U as H$1,Ur as sD,V as Gh,Vt as Rh,W as He$1,Xt as Su,Yr as ue,Z as Hw,Zn as fg,_i as yl,_n as Xs,_r as kr,bi as yw,ci as ww,ct as KD,d as Au,di as xe,dn as W,en as Tl,er as gT,et as Ic,gi as yd,gn as Xi,hi as yE,ii as w,j as Eg,jt as Ph,k as Dw,ln as Vw,m as Bj,oi as wm,pi as xu,pn as Wh,pt as Lh,q as Hj,qn as eg,qt as ST,ri as vw,s as $w,vn as Xw,vr as kw,xi as z,xn as Yh,xt as Mw,yi as yt,yn as Y,z as Fw}from"./chunk-BIrwil9v.js";import{D as ti,r as Fr,v as ci$1}from"./chunk-CDXY_3lS.js";import{A as m,E as ki,H as ze,I as qe,P as pe,S as ge,V as z$1,b as at,d as P,t as Ai,z as ue$1}from"./chunk-DxWNxQBo.js";import{D as xt$1,E as xn$1,Ft as N$1,Nt as Ht,O as d,Q as d$1,a as yt$1,an as Rn$1,b as rn$1,c as Kt,cn as Wt,ct as G,d as Pt,g as ke,i as wt,l as Nn$1,ln as wt$1,lt as I$1,m as _,mt as T,qt as mi$1,r as le,s as In$1,sn as Tn$1,st as Bt,u as On$1,un as xt,ut as Lt,x as rt}from"./main-V6GKK4JJ.js";import{t as l}from"./chunk-C6zfsUDO.js";import{a as q$1,i as ke$1,n as ft,s as ut,t as Qt}from"./chunk-59mw4LNY.js";import{n as De,t as Be$1}from"./chunk-BCv1xppC.js";import{c as m$1,t as L}from"./chunk-1ZVpn45S.js";import{t as C}from"./chunk-rvdq8zh0.js";import{t as Jt}from"./chunk-DmHstpnR.js";import{n as bt,r as nt,t as Dt}from"./chunk-Bdj8l0mY.js";import{a as zt,i as ot,n as Ot,r as Vt,t as Ht$1}from"./chunk-CYzbvDhN2.js";import{c as ua,r as On$2,s as qa,t as Bn$1}from"./chunk-xjobYDgI2.js";import{t as pe$1}from"./chunk-KhwE0IzX2.js";var fn=[`*`];function _n(t,l){t&1&&Fw(0)}var Ae=(()=>{class t{_elementRef=w(kr);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(n){return new(n||t)};static ɵdir=KD({type:t,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return t})();var Be=(()=>{class t{template=w(Nr);static ɵfac=function(n){return new(n||t)};static ɵdir=KD({type:t,selectors:[[``,`cdkStepLabel`,``]]})}return t})();var H={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var gn=new N(`STEPPER_GLOBAL_OPTIONS`);var Re=(()=>{class t{_stepperOptions;_stepper=w(de);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=He$1(!1);interactedStream=new Ge;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=He$1(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=He$1(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||vn(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=He$1(null);index=He$1(-1);isSelected=yt(()=>this._stepper.selectedIndex===this.index());indicatorType=yt(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??H.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?H.ERROR:this._displayDefaultIndicatorType?!n||e?H.NUMBER:r?H.EDIT:H.DONE:n&&!e?H.DONE:n&&e?i:r&&e?H.EDIT:i});isNavigable=yt(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=He$1(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&tn(this.stepControl)}constructor(){let e=w(gn,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),bn(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(n){return new(n||t)};static ɵcmp=zD({type:t,selectors:[[`cdk-step`]],contentQueries:function(n,i,r){if(n&1&&sg(r,Be,5)(r,_,5),n&2){let d;Vw(d=Hw())&&(i.stepLabel=d.first),Vw(d=Hw())&&(i._childForms=d)}},viewQuery:function(n,i){if(n&1&&ag(Nr,7),n&2){let r;Vw(r=Hw())&&(i.content=r.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,Qj],optional:[2,`optional`,`optional`,Qj],completed:[2,`completed`,`completed`,Qj],hasError:[2,`hasError`,`hasError`,Qj]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[nv],ngContentSelectors:fn,decls:1,vars:0,template:function(n,i){n&1&&(Pw(),Ph(0,_n,1,0,`ng-template`))},encapsulation:2})}return t})();var de=(()=>{class t{_dir=w(qe,{optional:!0});_changeDetectorRef=w(Gj);_elementRef=w(kr);_destroyed=new Y;_keyManager;_steps;steps=new Ei;_stepHeader;_sortedHeaders=new Ei;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=He$1(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=He$1(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new Ge;selectedIndexChange=new Ge;_groupId=w(ge).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(Su(this._steps),Au(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Su(this._stepHeader),Au(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new pe(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:wm()).pipe(Su(this._layoutDirection()),Au(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()===`rtl`?`next`:`previous`:n>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=ze(e),i=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return(i?tn(i)||yn(i)||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,n=ue$1();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(n){return new(n||t)};static ɵdir=KD({type:t,selectors:[[``,`cdkStepper`,``]],contentQueries:function(n,i,r){if(n&1&&sg(r,Re,5)(r,Ae,5),n&2){let d;Vw(d=Hw())&&(i._steps=d),Vw(d=Hw())&&(i._stepHeader=d)}},inputs:{linear:[2,`linear`,`linear`,Qj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Zj],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return t})();function Le(t){return typeof t==`function`}function vn(t){return Le(t)?t().valid():t.valid}function tn(t){return Le(t)?t().invalid():t.invalid}function yn(t){return Le(t)?t().pending():t.pending}function bn(t){Le(t)?t().reset():t.reset()}var nn=(()=>{class t{_stepper=w(de);type=`submit`;static ɵfac=function(n){return new(n||t)};static ɵdir=KD({type:t,selectors:[[`button`,`cdkStepperNext`,``]],hostVars:1,hostBindings:function(n,i){n&1&&rg(`click`,function(){return i._stepper.next()}),n&2&&eg(`type`,i.type)},inputs:{type:`type`}})}return t})();var rn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Sh({type:t});static ɵinj=Xs({imports:[ki]})}return t})();var xn=(t,l,e)=>({index:t,active:l,optional:e});function Cn(t,l){if(t&1&&Yh(0,2),t&2){let e=kw();Gh(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,TT(2,xn,e.index,e.active,e.optional))}}function Sn(t,l){if(t&1&&(Pi(0,`span`,7),uT(1),yl()),t&2){let e=kw(2);yE(),Eg(e._getDefaultTextForState(e.state))}}function Mn(t,l){if(t&1&&(Pi(0,`span`,8),uT(1),yl()),t&2){let e=kw(3);yE(),Eg(e._intl.completedLabel)}}function wn(t,l){if(t&1&&(Pi(0,`span`,8),uT(1),yl()),t&2){let e=kw(3);yE(),Eg(e._intl.editableLabel)}}function Dn(t,l){if(t&1&&(yw(0,Mn,2,1,`span`,8)(1,wn,2,1,`span`,8),Pi(2,`mat-icon`,7),uT(3),yl()),t&2){let e=kw(2);vw(e.state===`done`?0:e.state===`edit`?1:-1),yE(3),Eg(e._getDefaultTextForState(e.state))}}function En(t,l){if(t&1&&yw(0,Sn,2,1,`span`,7)(1,Dn,4,2),t&2)vw(kw().state===`number`?0:1)}function In(t,l){t&1&&(Pi(0,`div`,4),Yh(1,9),yl()),t&2&&(yE(),Gh(`ngTemplateOutlet`,l.template))}function Tn(t,l){if(t&1&&(Pi(0,`div`,4),uT(1),yl()),t&2){let e=kw();yE(),Eg(e.label)}}function Nn(t,l){if(t&1&&(Pi(0,`div`,5),uT(1),yl()),t&2){let e=kw();yE(),Eg(e._intl.optionalLabel)}}function kn(t,l){if(t&1&&(Pi(0,`div`,6),uT(1),yl()),t&2){let e=kw();yE(),Eg(e.errorMessage)}}var an=[`*`];function On(t,l){}function zn(t,l){if(t&1&&(Fw(0),Lh(1,On,0,0,`ng-template`,0)),t&2){let e=kw();yE(),Gh(`cdkPortalOutlet`,e._portal)}}var Fn=[`animatedContainer`];var on=t=>({steps:t});var sn=t=>({step:t});function Rn(t,l){t&1&&Fw(0)}function Ln(t,l){if(t&1&&(Pi(0,`div`,5),Yh(1,9)(2,6),yl()),t&2){let e=kw(2),n=$w(6);yE(),Gh(`ngTemplateOutlet`,e.headerPrefix()),yE(),Gh(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,DT(3,on,e.steps))}}function Pn(t,l){if(t&1&&Yh(0,6),t&2){let e=kw(2);Gh(`ngTemplateOutlet`,$w(6))(`ngTemplateOutletContext`,DT(2,on,e.steps))}}function Vn(t,l){if(t&1&&(Pi(0,`div`,10,2),Yh(2,9),yl()),t&2){let e=l.$implicit,n=l.$index,i=kw(2);Xw(`mat-horizontal-stepper-content-`+i._getAnimationDirection(n)),Gh(`id`,i._getStepContentId(n)),Wh(`aria-labelledby`,i._getStepLabelId(n))(`inert`,i.selectedIndex===n?null:``),yE(2),Gh(`ngTemplateOutlet`,e.content)}}function jn(t,l){if(t&1&&(Pi(0,`div`,3),yw(1,Ln,3,5,`div`,5)(2,Pn,1,4,`ng-container`,6),Pi(3,`div`,7),Dw(4,Vn,3,6,`div`,8,Ew),yl()()),t&2){let e=kw();yE(),vw(e.headerPrefix()?1:2),yE(3),ww(e.steps)}}function An(t,l){if(t&1&&Yh(0,9),t&2)Gh(`ngTemplateOutlet`,kw(2).headerPrefix())}function Bn(t,l){if(t&1&&(Pi(0,`div`,11),Yh(1,6),Pi(2,`div`,12,2)(4,`div`,13)(5,`div`,14),Yh(6,9),yl()()()()),t&2){let e=l.$implicit,n=l.$index,i=l.$index,r=l.$count,d=kw(2),P=$w(4);yE(),Gh(`ngTemplateOutlet`,P)(`ngTemplateOutletContext`,DT(11,sn,e)),yE(),pg(`mat-stepper-vertical-line`,i!==r-1)(`mat-vertical-content-container-active`,d.selectedIndex===n),Wh(`inert`,d.selectedIndex===n?null:``)(`aria-label`,d.ariaLabel),yE(2),Gh(`id`,d._getStepContentId(n)),Wh(`aria-labelledby`,d._getStepLabelId(n)),yE(2),Gh(`ngTemplateOutlet`,e.content)}}function Hn(t,l){if(t&1&&(Pi(0,`div`,4),yw(1,An,1,1,`ng-container`,9),Dw(2,Bn,7,13,`div`,11,Ew),yl()),t&2){let e=kw();yE(),vw(e.headerPrefix()?1:-1),yE(),ww(e.steps)}}function Wn(t,l){if(t&1){let e=Mw();Pi(0,`mat-step-header`,15),rg(`click`,function(){let i=yd(e).step;return vd(i.select())})(`keydown`,function(i){yd(e);return vd(kw()._onKeydown(i))}),yl()}if(t&2){let e=l.step,n=kw();pg(`mat-horizontal-stepper-header`,n.orientation===`horizontal`)(`mat-vertical-stepper-header`,n.orientation===`vertical`),Gh(`tabIndex`,n._getFocusIndex()===e.index()?0:-1)(`id`,n._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,n._iconOverrides)(`disableRipple`,n.disableRipple||!e.isNavigable())(`color`,e.color||n.color),Wh(`role`,n.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,n.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,n.orientation===`horizontal`?n.steps.length:null)(`aria-selected`,n.orientation===`horizontal`?e.isSelected():null)(`aria-current`,n.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,n.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,n.orientation===`vertical`?e.isSelected():null)(`aria-controls`,n._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function Qn(t,l){t&1&&zh(0,`div`,17)}function Jn(t,l){if(t&1&&(Yh(0,6),yw(1,Qn,1,0,`div`,17)),t&2){let e=l.$implicit,n=l.$index,i=l.$count;kw(2);Gh(`ngTemplateOutlet`,$w(4))(`ngTemplateOutletContext`,DT(3,sn,e)),yE(),vw(n!==i-1?1:-1)}}function qn(t,l){if(t&1&&(Pi(0,`div`,16),Dw(1,Jn,2,5,null,null,Ew),yl()),t&2){let e=l.steps;Wh(`aria-label`,kw().ariaLabel),yE(),ww(e)}}var He=(()=>{class t extends Be{static ɵfac=(()=>{let e;return function(i){return(e||(e=Dv(t)))(i||t)}})();static ɵdir=KD({type:t,selectors:[[``,`matStepLabel`,``]],features:[Rh]})}return t})();var $n=(()=>{class t{changes=new Y;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(n){return new(n||t)};static ɵprov=Rr({token:t,factory:t.ɵfac})}return t})();var We=(()=>{class t extends Ae{_intl=w($n);_focusMonitor=w(at);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=w(P);e.load(xt),e.load(z$1);let n=w(Gj);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof He?null:this.label}_templateLabel(){return this.label instanceof He?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(n){return new(n||t)};static ɵcmp=zD({type:t,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(n,i){n&2&&(Xw(`mat-`+(i.color||`primary`)),pg(`mat-step-header-empty-label`,i._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Rh],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(n,i){if(n&1&&(zh(0,`div`,0),Pi(1,`div`)(2,`div`,1),yw(3,Cn,1,6,`ng-container`,2)(4,En,2,1),yl()(),Pi(5,`div`,3),yw(6,In,2,1,`div`,4)(7,Tn,2,1,`div`,4),yw(8,Nn,2,1,`div`,5),yw(9,kn,2,1,`div`,6),yl()),n&2){let r;Gh(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disableRipple),yE(),Xw(gT(`mat-step-icon-state-`,i.state,` mat-step-icon`)),pg(`mat-step-icon-selected`,i.selected),yE(2),vw(i.iconOverrides&&i.iconOverrides[i.state]?3:4),yE(2),pg(`mat-step-label-active`,i.active)(`mat-step-label-selected`,i.selected)(`mat-step-label-error`,i.state==`error`),yE(),vw((r=i._templateLabel())?6:i._stringLabel()?7:-1,r),yE(2),vw(i._hasOptionalLabel()?8:-1),yE(),vw(i._hasErrorLabel()?9:-1)}},dependencies:[Wt,ti,wt],styles:[`.mat-step-header {
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
`],encapsulation:2})}return t})();var Un=(()=>{class t{templateRef=w(Nr);name;static ɵfac=function(n){return new(n||t)};static ɵdir=KD({type:t,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return t})();var Gn=(()=>{class t{_template=w(Nr);static ɵfac=function(n){return new(n||t)};static ɵdir=KD({type:t,selectors:[[`ng-template`,`matStepContent`,``]]})}return t})();var Kn=(()=>{class t extends Re{_errorStateMatcher=w(d,{skipSelf:!0});_viewContainerRef=w(Xi);_isSelected=H$1.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(xu(()=>this._stepper.selectionChange.pipe(xe(e=>e.selectedStep===this),Su(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new N$1(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),r=!!(e&&e.invalid&&this.interacted);return i||r}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??!1,i=!!(e&&e().invalid()&&this.interacted);return n||i}static ɵfac=(()=>{let e;return function(i){return(e||(e=Dv(t)))(i||t)}})();static ɵcmp=zD({type:t,selectors:[[`mat-step`]],contentQueries:function(n,i,r){if(n&1&&sg(r,He,5)(r,Gn,5),n&2){let d;Vw(d=Hw())&&(i.stepLabel=d.first),Vw(d=Hw())&&(i._lazyContent=d.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[IT([{provide:d,useExisting:t},{provide:Re,useExisting:t}]),Rh],ngContentSelectors:an,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(n,i){n&1&&(Pw(),Lh(0,zn,2,1,`ng-template`))},dependencies:[mi$1],encapsulation:2})}return t})();var Zn=(()=>{class t extends de{_ngZone=w(ue);_renderer=w(Ic);_animationsDisabled=Ai();_cleanupTransition;_isAnimating=He$1(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Ei;_icons;animationDone=new Ge;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=Hj(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!w(m).isBrowser;constructor(){super();let n=w(kr).nativeElement.nodeName.toLowerCase();this.orientation=n===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(Au(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(Au(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(Su(null),Au(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation===`horizontal`&&e.propertyName===`transform`&&n.classList.contains(`mat-horizontal-stepper-content-current`),r=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&n.classList.contains(`mat-vertical-content-container-active`);(i||r)&&this._animatedContainers.find(P=>P.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(n){return new(n||t)};static ɵcmp=zD({type:t,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(n,i,r){if(n&1&&sg(r,Kn,5)(r,Un,5),n&2){let d;Vw(d=Hw())&&(i._steps=d),Vw(d=Hw())&&(i._icons=d)}},viewQuery:function(n,i){if(n&1&&ag(We,5)(Fn,5),n&2){let r;Vw(r=Hw())&&(i._stepHeader=r),Vw(r=Hw())&&(i._animatedContainers=r)}},hostVars:14,hostBindings:function(n,i){n&2&&(fg(`--%NS%mat-stepper-animation-duration`,i._getAnimationDuration()),pg(`mat-stepper-horizontal`,i.orientation===`horizontal`)(`mat-stepper-vertical`,i.orientation===`vertical`)(`mat-stepper-label-position-end`,i.orientation===`horizontal`&&i.labelPosition==`end`)(`mat-stepper-label-position-bottom`,i.orientation===`horizontal`&&i.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,i.headerPosition===`bottom`)(`mat-stepper-animating`,i._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[IT([{provide:de,useExisting:t}]),Rh],ngContentSelectors:an,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(n,i){if(n&1&&(Pw(),yw(0,Rn,1,0),yw(1,jn,6,1,`div`,3)(2,Hn,4,1,`div`,4),Lh(3,Wn,1,27,`ng-template`,null,0,ST)(5,qn,3,1,`ng-template`,null,1,ST)),n&2){let r;vw(i._isServer?0:-1),yE(),vw((r=i.orientation)===`horizontal`?1:r===`vertical`?2:-1)}},dependencies:[ti,We],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2})}return t})();var ln=(()=>{class t extends nn{static ɵfac=(()=>{let e;return function(i){return(e||(e=Dv(t)))(i||t)}})();static ɵdir=KD({type:t,selectors:[[`button`,`matStepperNext`,``]],hostAttrs:[1,`mat-stepper-next`],hostVars:1,hostBindings:function(n,i){n&2&&eg(`type`,i.type)},features:[Rh]})}return t})();var dn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Sh({type:t});static ɵinj=Xs({providers:[d],imports:[Ht,rn,yt$1,wt$1,Zn,We,ki]})}return t})();var I=(function(t){return t[t.NEW=0]=`NEW`,t[t.VIEW=1]=`VIEW`,t[t.EDIT=2]=`EDIT`,t})(I||{});function ni(t,l){if(t&1){let e=Mw();Pi(0,`mat-chip-row`,8),rg(`removed`,function(){let i=yd(e).$implicit;return vd(kw().removeTag(i))}),Pi(1,`span`),uT(2),yl(),Pi(3,`button`,9),rg(`click`,function(){let i=yd(e).$implicit;return vd(kw().removeTag(i))}),Pi(4,`mat-icon`),uT(5,`cancel`),yl()()()}if(t&2){let e=l.$implicit,n=kw();Gh(`highlighted`,!0)(`editable`,!n.disabled())(`removable`,!n.disabled()),yE(2),Eg(e),yE(),Gh(`disabled`,n.disabled())}}var pn=(()=>{class t{constructor(){this.separatorKeysCodes=[13,188,32],this.tags=Bj([]),this.disabled=Hj(!1)}addTag(e){let n=(e.value||``).toLowerCase().trim();n&&this.tags.update(i=>[...i,n]),e.chipInput.clear()}removeTag(e){this.tags.update(n=>n.filter(i=>i!==e))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=zD({type:t,selectors:[[`app-tags-input`]],inputs:{tags:[1,`tags`],disabled:[1,`disabled`]},outputs:{tags:`tagsChange`},decls:13,vars:4,consts:[[`chipGrid`,``],[1,`w-full`],[`appearance`,`outline`,1,`w-full`],[`for`,`favoriteTagsInput`,1,`sr-only`],[`aria-hidden`,`true`],[`matInput`,``,`id`,`favoriteTagsInput`,`placeholder`,`Favorite Tags`,1,`w-full`,`rounded-md`,`focus:ring-indigo-500`,`focus:border-indigo-500`,3,`matChipInputTokenEnd`,`disabled`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`aria-label`,`Tags`,1,`flex`,`flex-wrap`,`gap-2`],[1,`bg-indigo-100`,`text-indigo-700`,`border`,`rounded-full`,`px-4`,`py-2`,`shadow-sm`,`flex`,`items-center`,3,`highlighted`,`editable`,`removable`],[1,`bg-indigo-100`,`text-indigo-700`,`border`,`rounded-full`,`px-4`,`py-2`,`shadow-sm`,`flex`,`items-center`,3,`removed`,`highlighted`,`editable`,`removable`],[`matChipRemove`,``,1,`ml-2`,`text-red-500`,`hover:text-red-700`,3,`click`,`disabled`]],template:function(n,i){if(n&1&&(Pi(0,`div`)(1,`div`,1)(2,`mat-form-field`,2)(3,`label`,3),uT(4,`Favorite Tags`),yl(),Pi(5,`mat-label`,4),uT(6,`Favorite Tags`),yl(),Pi(7,`input`,5),rg(`matChipInputTokenEnd`,function(d){return i.addTag(d)}),yl()()(),Pi(8,`div`,1)(9,`mat-chip-grid`,6,0),Dw(11,ni,6,5,`mat-chip-row`,7,Ew),yl()()()),n&2){let r=$w(10);yE(7),Gh(`disabled`,i.disabled())(`matChipInputFor`,r)(`matChipInputSeparatorKeyCodes`,i.separatorKeysCodes)(`matChipInputAddOnBlur`,!0),yE(4),ww(i.tags())}},dependencies:[Vt,Ht$1,zt,Ot,ot,yt$1,wt,Qt,ke$1,q$1,Be$1,De,xn$1],encapsulation:2})}}return t})();var cn=(()=>{class t{constructor(){this.httpClient=w(Fr),this.authService=w(d$1)}enhance(e){let n=this.authService.getCurrentUserContext();return this.httpClient.post(l.journeyApi+`/ai/enhance-narration`,e,{headers:{Authorization:`Bearer ${n.accessToken}`,"Content-Type":`application/json`}})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=z({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function ai(t,l){if(t&1){let e=Mw();Pi(0,`button`,14),rg(`click`,function(){let i=yd(e).$implicit;return vd(kw(2).enhanceNarration(i))}),uT(1),yl()}if(t&2){let e=l.$implicit;yE(),Tl(` `,e,` `)}}function oi(t,l){if(t&1){let e=Mw();Pi(0,`mat-button-toggle-group`,9),bg(`ngModelChange`,function(i){yd(e);let r=kw();return pT(r.markdownStyle,i)||(r.markdownStyle=i),vd(i)}),Pi(1,`mat-button-toggle`,10),uT(2,`Edit`),yl(),Pi(3,`mat-button-toggle`,11),uT(4,`Preview`),yl()(),oD(),Pi(5,`button`,12),uT(6,` Enhance `),Pi(7,`mat-icon`),uT(8,`auto_awesome`),yl()(),Pi(9,`mat-menu`,null,1),Dw(11,ai,2,1,`button`,13,Ew),yl()}if(t&2){let e=$w(10),n=kw();Tg(`ngModel`,n.markdownStyle),sD(),yE(5),Gh(`matMenuTriggerFor`,e)(`disabled`,n.disabled()),yE(6),ww(n.tones)}}function si(t,l){t&1&&(Pi(0,`div`),uT(1,`Memories is required.`),yl())}function li(t,l){t&1&&(Pi(0,`div`),uT(1,`Memories must be at least 10 characters long.`),yl())}function di(t,l){t&1&&(Pi(0,`div`),uT(1,`Memories must be at most 5000 characters long.`),yl())}var mn=(()=>{class t{constructor(){this.tones=[`🌍 Adventurous`,`❤️ Romantic`,`💡 Inspirational`,`🎨 Poetic`,`😄 Funny`,`🧘 Minimalistic`],this.narrationEnhancerService=w(cn),this.markdownStyle=Bj(`Source`),this.disabled=Hj(!1),this.title=Hj(``),this.narration=Bj(``)}enhanceNarration(e){console.log(e),this.narrationEnhancerService.enhance({narration:this.narration(),tone:e}).subscribe({next:n=>this.narration.set(n.narration)})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=zD({type:t,selectors:[[`app-narration`]],inputs:{markdownStyle:[1,`markdownStyle`],disabled:[1,`disabled`],title:[1,`title`],narration:[1,`narration`]},outputs:{markdownStyle:`markdownStyleChange`,narration:`narrationChange`},decls:13,vars:10,consts:[[`description`,`ngModel`],[`toneMenu`,`matMenu`],[1,`flex`,`gap-2`,`flex-col`],[1,`inline-flex`,`gap-2`,`align-middle`,`content-center`,`items-center`],[`for`,`description`,1,`text-sm`,`font-semibold`],[`rows`,`15`,`id`,`description`,`name`,`description`,`placeholder`,`Detailed information about the Journey`,`required`,``,`minlength`,`10`,`maxlength`,`5000`,1,`w-full`,`p-4`,`border`,`rounded-md`,`focus:outline-hidden`,`focus:ring`,`focus:ring-indigo-500`,`dark:bg-gray-800`,3,`ngModelChange`,`ngModel`,`hidden`],[1,`h-96`,`overflow-auto`,3,`hidden`],[3,`title`,`markdownText`],[1,`text-red-500`,`text-sm`,`mt-2`,3,`hidden`],[`name`,`markdownStyle`,`aria-label`,`Markdown Style`,`hideSingleSelectionIndicator`,`true`,3,`ngModelChange`,`ngModel`],[`value`,`Source`,1,`text-sm`],[`value`,`Preview`,1,`text-sm`],[`mat-raised-button`,``,`type`,`button`,3,`matMenuTriggerFor`,`disabled`],[`mat-menu-item`,``],[`mat-menu-item`,``,3,`click`]],template:function(n,i){if(n&1){let r=Mw();Pi(0,`div`,2)(1,`div`,3)(2,`label`,4),uT(3,`Memories`),yl(),yw(4,oi,13,3),yl(),Pi(5,`textarea`,5,0),bg(`ngModelChange`,function(P){return yd(r),pT(i.narration,P)||(i.narration=P),vd(P)}),yl(),oD(),Pi(7,`div`,6),zh(8,`app-display-markdown-component`,7),yl(),Pi(9,`div`,8),yw(10,si,2,0,`div`),yw(11,li,2,0,`div`),yw(12,di,2,0,`div`),yl()()}if(n&2){let r=$w(6);yE(4),vw(i.disabled()?-1:4),yE(),Tg(`ngModel`,i.narration),Gh(`hidden`,i.markdownStyle()===`Preview`),sD(),yE(2),Gh(`hidden`,i.markdownStyle()===`Source`),yE(),Gh(`title`,i.title())(`markdownText`,i.narration()),yE(),Gh(`hidden`,r.valid||r.pristine),yE(),vw(r.errors?.required?10:-1),yE(),vw(r.errors?.minlength?11:-1),yE(),vw(r.errors?.maxlength?12:-1)}},dependencies:[pe$1,xn$1,ke,Nn$1,rt,xt$1,Pt,rn$1,Dt,bt,nt,Lt,I$1,G,Bt,Tn$1,Rn$1,yt$1,wt],encapsulation:2})}}return t})();function pi(t,l){t&1&&(Pi(0,`div`),uT(1,`Name is required.`),yl())}function ci(t,l){t&1&&(Pi(0,`div`),uT(1,`Name must be at least 5 characters long.`),yl())}function mi(t,l){t&1&&(Pi(0,`div`),uT(1,`Name must be at most 50 characters long.`),yl())}function ui(t,l){t&1&&(Pi(0,`div`),uT(1,`Journey Date is required.`),yl())}function hi(t,l){if(t&1){let e=Mw();Pi(0,`button`,20),rg(`click`,function(){yd(e);return vd(kw(2).enableEditMode())}),uT(1,` Edit `),yl()}if(t&2){let e=kw(2);Gh(`hidden`,e.mode()!==e.OperationMode.VIEW)}}function fi(t,l){if(t&1){let e=Mw();Pi(0,`form`,5,0),rg(`ngSubmit`,function(){yd(e);let i=$w(1);return vd(kw().save(i))}),Pi(2,`div`,6)(3,`div`)(4,`mat-form-field`,7)(5,`mat-label`),uT(6,`Journey Name`),yl(),Pi(7,`input`,8,1),bg(`ngModelChange`,function(i){yd(e);let r=kw();return pT(r.journey().name,i)||(r.journey().name=i),vd(i)}),yl(),oD(),Pi(9,`mat-error`,9),yw(10,pi,2,0,`div`),yw(11,ci,2,0,`div`),yw(12,mi,2,0,`div`),yl()()(),Pi(13,`div`)(14,`mat-form-field`,7)(15,`mat-label`),uT(16,`Journey Date`),yl(),Pi(17,`input`,10,2),rg(`dateChange`,function(i){yd(e);return vd(kw().journeyDateChangeEvent(i))}),bg(`ngModelChange`,function(i){yd(e);let r=kw();return pT(r.journeyDateTimestamp,i)||(r.journeyDateTimestamp=i),vd(i)}),yl(),oD(),zh(19,`mat-datepicker-toggle`,11)(20,`mat-datepicker`,null,3),Pi(22,`mat-error`,9),yw(23,ui,2,0,`div`),yl()()()(),Pi(24,`div`,12)(25,`app-tags-input`,13),bg(`tagsChange`,function(i){yd(e);let r=kw();return pT(r.journey().tags,i)||(r.journey().tags=i),vd(i)}),yl()(),Pi(26,`div`,12)(27,`app-narration`,14),bg(`narrationChange`,function(i){yd(e);let r=kw();return pT(r.journey().description,i)||(r.journey().description=i),vd(i)}),yl()(),Pi(28,`div`,15)(29,`button`,16),uT(30,` Create `),yl(),Lh(31,hi,2,1,`button`,17),Pi(32,`button`,18),uT(33,` Save `),yl(),Pi(34,`button`,19),uT(35,` Next `),yl()()()}if(t&2){let e=$w(1),n=$w(8),i=$w(18),r=$w(21),d=kw();yE(7),Tg(`ngModel`,d.journey().name),Gh(`readOnly`,d.isReadOnly()),sD(),yE(2),Gh(`hidden`,n.valid||n.pristine),yE(),vw(n.errors?.required?10:-1),yE(),vw(n.errors?.minlength?11:-1),yE(),vw(n.errors?.maxlength?12:-1),yE(5),Gh(`matDatepicker`,r),Tg(`ngModel`,d.journeyDateTimestamp),Gh(`readOnly`,d.isReadOnly()),sD(),yE(2),Gh(`for`,r),yE(3),Gh(`hidden`,i.valid||i.pristine),yE(),vw(i.errors?.required?23:-1),yE(2),Tg(`tags`,d.journey().tags),Gh(`disabled`,d.isReadOnly()),yE(2),Gh(`title`,d.journey().name),Tg(`narration`,d.journey().description),Gh(`disabled`,d.isReadOnly())(`markdownStyle`,d.isReadOnly()?`Preview`:`Source`),yE(2),Gh(`disabled`,!e.form.valid)(`hidden`,d.mode()!==d.OperationMode.NEW),yE(3),Gh(`disabled`,!e.form.valid)(`hidden`,d.mode()!==d.OperationMode.EDIT),yE(2),Gh(`disabled`,d.journey().id===``)}}var aa=(()=>{class t{constructor(){this.OperationMode=I,this.journeyService=w(L),this.notificationService=w(Jt),this.router=w(le),this.datePipe=w(ci$1),this.mode=Bj(I.VIEW),this.isReadOnly=yt(()=>this.mode()==I.VIEW),this.journey=Bj(new m$1),this.journeyDateTimestamp=He$1(new Date),T(this.journey).subscribe(e=>this.journeyDateTimestamp.set(new Date(e.journeyDate)))}onError(e,n){this.notificationService.showError(e),console.error(n)}onUpdateSuccess(e){this.journey.set(e),this.mode()===I.NEW&&this.router.navigate([`/journey`,this.journey().id,`edit`],{state:{mode:I.VIEW}}).then(),this.mode.set(I.VIEW),this.notificationService.showSuccess(`Journey details saved successfully.`)}save(e){e.valid&&(this.mode()==I.NEW?this.createJourney():this.updateJourney())}createJourney(){this.journeyService.createJourney(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError(`Unexpected error while saving data`,e)})}updateJourney(){this.journeyService.saveJourneyBasicDetails(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError(`Unexpected error while saving data`,e)})}enableEditMode(){this.mode.set(I.EDIT)}journeyDateChangeEvent(e){this.journey.update(n=>W(q({},n),{journeyDate:this.datePipe.transform(e.value,`yyyy-MM-dd`)}))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=zD({type:t,selectors:[[`app-edit-journey-memories-details`]],inputs:{mode:[1,`mode`],journey:[1,`journey`]},outputs:{mode:`modeChange`,journey:`journeyChange`},features:[IT([ci$1])],decls:1,vars:1,consts:[[`journeyForm`,`ngForm`],[`name`,`ngModel`],[`journeyDate`,`ngModel`],[`picker`,``],[1,`content-wrapper`,`flex`,`flex-col`,`gap-2`],[1,`content-wrapper`,`flex`,`flex-col`,`gap-2`,3,`ngSubmit`],[1,`grid`,`grid-cols-1`,`md:grid-cols-2`,`gap-4`],[`appearance`,`outline`,1,`w-full`],[`matInput`,``,`type`,`text`,`id`,`name`,`name`,`name`,`placeholder`,`Name your Journey`,`maxlength`,`50`,`minlength`,`5`,`required`,``,1,`mt-1`,`w-full`,`rounded-md`,`focus:ring-indigo-500`,`focus:border-indigo-500`,3,`ngModelChange`,`ngModel`,`readOnly`],[3,`hidden`],[`matInput`,``,`required`,``,`placeholder`,`dd/mm/yyyy`,`name`,`journeyDate`,3,`dateChange`,`ngModelChange`,`matDatepicker`,`ngModel`,`readOnly`],[`matIconSuffix`,``,3,`for`],[1,`w-full`],[3,`tagsChange`,`tags`,`disabled`],[3,`narrationChange`,`title`,`narration`,`disabled`,`markdownStyle`],[1,`flex`,`flex-wrap`,`justify-center`,`gap-2`,`mt-4`],[`mat-raised-button`,``,`type`,`submit`,1,`px-6`,`py-2`,3,`disabled`,`hidden`],[`mat-stroked-button`,``,`type`,`button`,`class`,`px-6 py-2`,3,`hidden`,`click`,4,`appHasWriteAccess`],[`mat-flat-button`,``,`type`,`submit`,1,`px-6`,`py-2`,3,`disabled`,`hidden`],[`mat-stroked-button`,``,`type`,`button`,`matStepperNext`,``,1,`px-6`,`py-2`,3,`disabled`],[`mat-stroked-button`,``,`type`,`button`,1,`px-6`,`py-2`,3,`click`,`hidden`]],template:function(n,i){n&1&&yw(0,fi,36,23,`form`,4),n&2&&vw(i.journey()?0:-1)},dependencies:[xn$1,On$1,ke,Nn$1,In$1,rt,xt$1,Pt,rn$1,Kt,Dt,Vt,dn,ln,pn,mn,Be$1,De,ke$1,q$1,ft,ut,Qt,Bn$1,On$2,ua,qa,Tn$1,Rn$1,C],encapsulation:2})}}return t})();export{Zn as a,ln as c,Kn as i,He as n,aa as o,I as r,dn as s,Gn as t};