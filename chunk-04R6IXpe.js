import{n as s,t as r}from"./chunk-C86zhvaO.js";import{$n as hv,$r as vw,An as bw,At as Rw,Cr as ng,Dt as Qh,Et as Pw,F as Fi,Gn as gb,Hn as fd,Hr as tD,In as db,J,Jn as gm,Kn as gg,Lt as Tb,Mt as S,Nn as cg,On as bl,P as Fh,Q as Ks,Qr as vt,R as GD,Rr as sb,S as Cu,Tn as b,Tr as pe,Tt as Pr,Vn as fI,Vt as Tu,Wn as fw,X as Ji,Xn as hg,Y as Jh,ai as xr,bt as Ow,c as Ae,ci as yb,cr as k1,dn as Zy,ei as wg,en as XI,er as hw,f as B,fr as lb,gt as O1,h as Be,hi as zh,ir as jh,it as Lw,k as Eb,l as Ah,li as yc,ln as Zh,mn as _g,n as $D,nr as ig,nt as Lh,p as B1,pi as yw,pr as lg,qt as V1,rn as Y$1,rt as Lr,si as xw,sr as jw,t as $1,ui as yl,un as Zw,vn as _u,w as Di,wr as pd,xr as mw,z as Ge$1,zt as Tg}from"./chunk-ihIzuI1C.js";import{T as si,a as Jr,p as Tr}from"./chunk-DulbcUZj.js";import{C as be,E as ct,F as le,I as m,O as ge,V as xi,_ as Y$2,c as Je,r as B$1,s as Ii,v as Ye}from"./chunk-DcaJ8toe.js";import{F as Tt,G as xn$1,I as it$1,K as f,M as Rn$1,N as Rt,O as Kt,Q as d,Rt as Xt,T as Fn$1,V as rn,W as v,b as Mt,cn as Pn$1,ct as G,dn as kt,en as yi,in as $t,j as Pe,k as On$1,lt as Ot,mt as T,nn as z,on as En,r as de,st as At,un as St,ut as P,x as wt}from"./main-3XEFBBAG.js";import{t as l}from"./chunk-Dpkb30gM.js";import{c as m$1,t as L}from"./chunk-BZXEoHcf.js";import{t as C}from"./chunk-CyCB-Hij.js";import{t as he}from"./chunk-O-x5ZHJx.js";import{n as at$1,r as ut,t as Et}from"./chunk-DJlaSLjO.js";import{n as Ln$1,o as mt,r as ct$1,s as ne,t as $e}from"./chunk-BengtkMc.js";import{n as De,t as Be$1}from"./chunk-k4ykluS7.js";import{t as Gt}from"./chunk-Bvv4FTZT.js";import{a as Xi,i as Tt$1,n as Dt,r as Rt$1,t as At$1}from"./chunk-CAOnuhJd.js";import{a as Va,o as _a,r as Dn,t as An$1}from"./chunk-K15fS-7M.js";var nt=(()=>{class t{_elementRef=b(Pr);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(n){return new(n||t)};static ɵdir=GD({type:t,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return t})();var at=(()=>{class t{template=b(xr);static ɵfac=function(n){return new(n||t)};static ɵdir=GD({type:t,selectors:[[``,`cdkStepLabel`,``]]})}return t})();var Y={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var Nn=new S(`STEPPER_GLOBAL_OPTIONS`);var Ge=(()=>{class t{_stepperOptions;_stepper=b(Se);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Be(!1);interactedStream=new Ge$1;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Be(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Be(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||zn(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=Be(null);index=Be(-1);isSelected=vt(()=>this._stepper.selectedIndex===this.index());indicatorType=vt(()=>{let e=this.isSelected(),n=this.completed,a=this._state()??Y.NUMBER,i=this._editable();return this._showError()&&this.hasError&&!e?Y.ERROR:this._displayDefaultIndicatorType?!n||e?Y.NUMBER:i?Y.EDIT:Y.DONE:n&&!e?Y.DONE:n&&e?a:i&&e?Y.EDIT:a});isNavigable=vt(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Be(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&bn(this.stepControl)}constructor(){let e=b(Nn,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),Ln(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`*`];function n(a,i){a&1&&Ow(0)}return $D({type:t,selectors:[[`cdk-step`]],contentQueries:function(i,c,x){if(i&1&&cg(x,at,5)(x,v,5),i&2){let O;Lw(O=Pw())&&(c.stepLabel=O.first),Lw(O=Pw())&&(c._childForms=O)}},viewQuery:function(i,c){if(i&1&&lg(xr,7),i&2){let x;Lw(x=Pw())&&(c.content=x.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,B1],optional:[2,`optional`,`optional`,B1],completed:[2,`completed`,`completed`,B1],hasError:[2,`hasError`,`hasError`,B1]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[Zy],ngContentSelectors:e,decls:1,vars:0,template:function(i,c){i&1&&(Rw(),jh(0,n,1,0,`ng-template`))},encapsulation:2})})()}return t})();var Se=(()=>{class t{_dir=b(Je,{optional:!0});_changeDetectorRef=b(V1);_elementRef=b(Pr);_destroyed=new Y$1;_keyManager;_steps;steps=new Di;_stepHeader;_sortedHeaders=new Di;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=Be(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Be(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new Ge$1;selectedIndexChange=new Ge$1;_groupId=b(be).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(Cu(this._steps),_u(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,a)=>n.index.set(a)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Cu(this._stepHeader),_u(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,a)=>n._elementRef.nativeElement.compareDocumentPosition(a._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new ge(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:gm()).pipe(Cu(this._layoutDirection()),_u(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()===`rtl`?`next`:`previous`:n>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),a=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:a,selectedStep:n[e],previouslySelectedStep:n[a]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=Ye(e),a=e.keyCode,i=this._keyManager;i?.activeItemIndex!=null&&!n&&(a===32||a===13)?(this.selectedIndex=i.activeItemIndex,e.preventDefault()):i?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let a=n.stepControl;return(a?bn(a)||On(a)||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,n=le();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(n){return new(n||t)};static ɵdir=GD({type:t,selectors:[[``,`cdkStepper`,``]],contentQueries:function(n,a,i){if(n&1&&cg(i,Ge,5)(i,nt,5),n&2){let c;Lw(c=Pw())&&(a._steps=c),Lw(c=Pw())&&(a._stepHeader=c)}},inputs:{linear:[2,`linear`,`linear`,B1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,$1],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return t})();function Ue(t){return typeof t==`function`}function zn(t){return Ue(t)?t().valid():t.valid}function bn(t){return Ue(t)?t().invalid():t.invalid}function On(t){return Ue(t)?t().pending():t.pending}function Ln(t){Ue(t)?t().reset():t.reset()}var _n=(()=>{class t{_stepper=b(Se);type=`submit`;static ɵfac=function(n){return new(n||t)};static ɵdir=GD({type:t,selectors:[[`button`,`cdkStepperNext`,``]],hostVars:1,hostBindings:function(n,a){n&1&&ig(`click`,function(){return a._stepper.next()}),n&2&&ng(`type`,a.type)},inputs:{type:`type`}})}return t})();var yn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Ah({type:t});static ɵinj=Ks({imports:[xi]})}return t})();var it=(()=>{class t extends at{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=GD({type:t,selectors:[[``,`matStepLabel`,``]],features:[Lh]})}return t})();var Fn=(()=>{class t{changes=new Y$1;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(n){return new(n||t)};static ɵprov=Lr({token:t,factory:t.ɵfac})}return t})();var rt=(()=>{class t extends nt{_intl=b(Fn);_focusMonitor=b(ct);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=b(B$1);e.load(St),e.load(Y$2);let n=b(V1);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof it?null:this.label}_templateLabel(){return this.label instanceof it?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=(f,S,p)=>({index:f,active:S,optional:p});function n(f,S){if(f&1&&Jh(0,2),f&2){let p=xw();Qh(`ngTemplateOutlet`,p.iconOverrides[p.state])(`ngTemplateOutletContext`,Eb(2,e,p.index,p.active,p.optional))}}function a(f,S){if(f&1&&(Fi(0,`span`,7),sb(1),yl()),f&2){let p=xw(2);fI(),wg(p._getDefaultTextForState(p.state))}}function i(f,S){if(f&1&&(Fi(0,`span`,8),sb(1),yl()),f&2){let p=xw(3);fI(),wg(p._intl.completedLabel)}}function c(f,S){if(f&1&&(Fi(0,`span`,8),sb(1),yl()),f&2){let p=xw(3);fI(),wg(p._intl.editableLabel)}}function x(f,S){if(f&1&&(fw(0,i,2,1,`span`,8)(1,c,2,1,`span`,8),Fi(2,`mat-icon`,7),sb(3),yl()),f&2){let p=xw(2);hw(p.state===`done`?0:p.state===`edit`?1:-1),fI(3),wg(p._getDefaultTextForState(p.state))}}function O(f,S){if(f&1&&fw(0,a,2,1,`span`,7)(1,x,4,2),f&2){let X=xw();hw(X.state===`number`?0:1)}}function A(f,S){f&1&&(Fi(0,`div`,4),Jh(1,9),yl()),f&2&&(fI(),Qh(`ngTemplateOutlet`,S.template))}function Ke(f,S){if(f&1&&(Fi(0,`div`,4),sb(1),yl()),f&2){let p=xw();fI(),wg(p.label)}}function Ze(f,S){if(f&1&&(Fi(0,`div`,5),sb(1),yl()),f&2){let p=xw();fI(),wg(p._intl.optionalLabel)}}function Ye(f,S){if(f&1&&(Fi(0,`div`,6),sb(1),yl()),f&2){let p=xw();fI(),wg(p.errorMessage)}}return $D({type:t,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(S,p){S&2&&(Zw(`mat-`+(p.color||`primary`)),gg(`mat-step-header-empty-label`,p._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Lh],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(S,p){if(S&1&&(Zh(0,`div`,0),Fi(1,`div`)(2,`div`,1),fw(3,n,1,6,`ng-container`,2)(4,O,2,1),yl()(),Fi(5,`div`,3),fw(6,A,2,1,`div`,4)(7,Ke,2,1,`div`,4),fw(8,Ze,2,1,`div`,5),fw(9,Ye,2,1,`div`,6),yl()),S&2){let X;Qh(`matRippleTrigger`,p._getHostElement())(`matRippleDisabled`,p.disableRipple),fI(),Zw(db(`mat-step-icon-state-`,p.state,` mat-step-icon`)),gg(`mat-step-icon-selected`,p.selected),fI(2),hw(p.iconOverrides&&p.iconOverrides[p.state]?3:4),fI(2),gg(`mat-step-label-active`,p.active)(`mat-step-label-selected`,p.selected)(`mat-step-label-error`,p.state==`error`),fI(),hw((X=p._templateLabel())?6:p._stringLabel()?7:-1,X),fI(2),hw(p._hasOptionalLabel()?8:-1),fI(),hw(p._hasErrorLabel()?9:-1)}},dependencies:[$t,Jr,wt],styles:[`.mat-step-header {
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
`],encapsulation:2})})()}return t})();var Pn=(()=>{class t{templateRef=b(xr);name;static ɵfac=function(n){return new(n||t)};static ɵdir=GD({type:t,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return t})();var Rn=(()=>{class t{_template=b(xr);static ɵfac=function(n){return new(n||t)};static ɵdir=GD({type:t,selectors:[[`ng-template`,`matStepContent`,``]]})}return t})();var Vn=(()=>{class t extends Ge{_errorStateMatcher=b(f,{skipSelf:!0});_viewContainerRef=b(Ji);_isSelected=B.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Tu(()=>this._stepper.selectionChange.pipe(Ae(e=>e.selectedStep===this),Cu(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new z(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let a=this._errorStateMatcher.isErrorState(e,n),i=!!(e&&e.invalid&&this.interacted);return a||i}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??!1,a=!!(e&&e().invalid()&&this.interacted);return n||a}static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵcmp=(function(){let e=[`*`];function n(i,c){}function a(i,c){if(i&1&&(Ow(0),Fh(1,n,0,0,`ng-template`,0)),i&2){let x=xw();fI(),Qh(`cdkPortalOutlet`,x._portal)}}return $D({type:t,selectors:[[`mat-step`]],contentQueries:function(c,x,O){if(c&1&&cg(O,it,5)(O,Rn,5),c&2){let A;Lw(A=Pw())&&(x.stepLabel=A.first),Lw(A=Pw())&&(x._lazyContent=A.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[gb([{provide:f,useExisting:t},{provide:Ge,useExisting:t}]),Lh],ngContentSelectors:e,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(c,x){c&1&&(Rw(),Fh(0,a,2,1,`ng-template`))},dependencies:[yi],encapsulation:2})})()}return t})();var An=(()=>{class t extends Se{_ngZone=b(pe);_renderer=b(yc);_animationsDisabled=Ii();_cleanupTransition;_isAnimating=Be(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Di;_icons;animationDone=new Ge$1;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=O1(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!b(m).isBrowser;constructor(){super();let n=b(Pr).nativeElement.nodeName.toLowerCase();this.orientation=n===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(_u(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(_u(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(Cu(null),_u(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let n=e.target;if(!n)return;let a=this.orientation===`horizontal`&&e.propertyName===`transform`&&n.classList.contains(`mat-horizontal-stepper-content-current`),i=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&n.classList.contains(`mat-vertical-content-container-active`);(a||i)&&this._animatedContainers.find(x=>x.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`animatedContainer`],n=[`*`],a=m=>({steps:m}),i=m=>({step:m});function c(m,v){m&1&&Ow(0)}function x(m,v){if(m&1&&(Fi(0,`div`,5),Jh(1,9)(2,6),yl()),m&2){let r=xw(2),d=jw(6);fI(),Qh(`ngTemplateOutlet`,r.headerPrefix()),fI(),Qh(`ngTemplateOutlet`,d)(`ngTemplateOutletContext`,yb(3,a,r.steps))}}function O(m,v){if(m&1&&Jh(0,6),m&2){let r=xw(2),d=jw(6);Qh(`ngTemplateOutlet`,d)(`ngTemplateOutletContext`,yb(2,a,r.steps))}}function A(m,v){if(m&1&&(Fi(0,`div`,10,2),Jh(2,9),yl()),m&2){let r=v.$implicit,d=v.$index,w=xw(2);Zw(`mat-horizontal-stepper-content-`+w._getAnimationDirection(d)),Qh(`id`,w._getStepContentId(d)),zh(`aria-labelledby`,w._getStepLabelId(d))(`inert`,w.selectedIndex===d?null:``),fI(2),Qh(`ngTemplateOutlet`,r.content)}}function Ke(m,v){if(m&1&&(Fi(0,`div`,3),fw(1,x,3,5,`div`,5)(2,O,1,4,`ng-container`,6),Fi(3,`div`,7),yw(4,A,3,6,`div`,8,mw),yl()()),m&2){let r=xw();fI(),hw(r.headerPrefix()?1:2),fI(3),vw(r.steps)}}function Ze(m,v){if(m&1&&Jh(0,9),m&2){let r=xw(2);Qh(`ngTemplateOutlet`,r.headerPrefix())}}function Ye(m,v){if(m&1&&(Fi(0,`div`,11),Jh(1,6),Fi(2,`div`,12,2)(4,`div`,13)(5,`div`,14),Jh(6,9),yl()()()()),m&2){let r=v.$implicit,d=v.$index,w=v.$index,ue=v.$count,he=xw(2),kn=jw(4);fI(),Qh(`ngTemplateOutlet`,kn)(`ngTemplateOutletContext`,yb(11,i,r)),fI(),gg(`mat-stepper-vertical-line`,w!==ue-1)(`mat-vertical-content-container-active`,he.selectedIndex===d),zh(`inert`,he.selectedIndex===d?null:``)(`aria-label`,he.ariaLabel),fI(2),Qh(`id`,he._getStepContentId(d)),zh(`aria-labelledby`,he._getStepLabelId(d)),fI(2),Qh(`ngTemplateOutlet`,r.content)}}function f(m,v){if(m&1&&(Fi(0,`div`,4),fw(1,Ze,1,1,`ng-container`,9),yw(2,Ye,7,13,`div`,11,mw),yl()),m&2){let r=xw();fI(),hw(r.headerPrefix()?1:-1),fI(),vw(r.steps)}}function S(m,v){if(m&1){let r=bw();Fi(0,`mat-step-header`,15),ig(`click`,function(){let w=fd(r).step;return pd(w.select())})(`keydown`,function(w){fd(r);let ue=xw();return pd(ue._onKeydown(w))}),yl()}if(m&2){let r=v.step,d=xw();gg(`mat-horizontal-stepper-header`,d.orientation===`horizontal`)(`mat-vertical-stepper-header`,d.orientation===`vertical`),Qh(`tabIndex`,d._getFocusIndex()===r.index()?0:-1)(`id`,d._getStepLabelId(r.index()))(`index`,r.index())(`state`,r.indicatorType())(`label`,r.stepLabel||r.label)(`selected`,r.isSelected())(`active`,r.isNavigable())(`optional`,r.optional)(`errorMessage`,r.errorMessage)(`iconOverrides`,d._iconOverrides)(`disableRipple`,d.disableRipple||!r.isNavigable())(`color`,r.color||d.color),zh(`role`,d.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,d.orientation===`horizontal`?r.index()+1:null)(`aria-setsize`,d.orientation===`horizontal`?d.steps.length:null)(`aria-selected`,d.orientation===`horizontal`?r.isSelected():null)(`aria-current`,d.orientation===`vertical`&&r.isSelected()?`step`:null)(`aria-disabled`,d.orientation===`vertical`&&r.isSelected()?`true`:null)(`aria-expanded`,d.orientation===`vertical`?r.isSelected():null)(`aria-controls`,d._getStepContentId(r.index()))(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,!r.ariaLabel&&r.ariaLabelledby?r.ariaLabelledby:null)(`aria-disabled`,r.isNavigable()?null:!0)}}function p(m,v){m&1&&Zh(0,`div`,17)}function X(m,v){if(m&1&&(Jh(0,6),fw(1,p,1,0,`div`,17)),m&2){let r=v.$implicit,d=v.$index,w=v.$count;xw(2);let ue=jw(4);Qh(`ngTemplateOutlet`,ue)(`ngTemplateOutletContext`,yb(3,i,r)),fI(),hw(d!==w-1?1:-1)}}function In(m,v){if(m&1&&(Fi(0,`div`,16),yw(1,X,2,5,null,null,mw),yl()),m&2){let r=v.steps,d=xw();zh(`aria-label`,d.ariaLabel),fI(),vw(r)}}return $D({type:t,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(v,r,d){if(v&1&&cg(d,Vn,5)(d,Pn,5),v&2){let w;Lw(w=Pw())&&(r._steps=w),Lw(w=Pw())&&(r._icons=w)}},viewQuery:function(v,r){if(v&1&&lg(rt,5)(e,5),v&2){let d;Lw(d=Pw())&&(r._stepHeader=d),Lw(d=Pw())&&(r._animatedContainers=d)}},hostVars:14,hostBindings:function(v,r){v&2&&(hg(`--%NS%mat-stepper-animation-duration`,r._getAnimationDuration()),gg(`mat-stepper-horizontal`,r.orientation===`horizontal`)(`mat-stepper-vertical`,r.orientation===`vertical`)(`mat-stepper-label-position-end`,r.orientation===`horizontal`&&r.labelPosition==`end`)(`mat-stepper-label-position-bottom`,r.orientation===`horizontal`&&r.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,r.headerPosition===`bottom`)(`mat-stepper-animating`,r._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[gb([{provide:Se,useExisting:t}]),Lh],ngContentSelectors:n,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(v,r){if(v&1&&(Rw(),fw(0,c,1,0),fw(1,Ke,6,1,`div`,3)(2,f,4,1,`div`,4),Fh(3,S,1,27,`ng-template`,null,0,Tb)(5,In,3,1,`ng-template`,null,1,Tb)),v&2){let d;hw(r._isServer?0:-1),fI(),hw((d=r.orientation)===`horizontal`?1:d===`vertical`?2:-1)}},dependencies:[Jr,rt],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2})})()}return t})();var xn=(()=>{class t extends _n{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=GD({type:t,selectors:[[`button`,`matStepperNext`,``]],hostAttrs:[1,`mat-stepper-next`],hostVars:1,hostBindings:function(n,a){n&2&&ng(`type`,a.type)},features:[Lh]})}return t})();var Sn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Ah({type:t});static ɵinj=Ks({providers:[f],imports:[Xt,yn,Mt,kt,An,rt,xi]})}return t})();var F;(function(t){t[t.NEW=0]=`NEW`,t[t.VIEW=1]=`VIEW`,t[t.EDIT=2]=`EDIT`})(F||(F={}));function Qn(t,D){if(t&1){let e=bw();Fi(0,`mat-chip-row`,8),ig(`removed`,function(){let a=fd(e).$implicit,i=xw();return pd(i.removeTag(a))}),Fi(1,`span`),sb(2),yl(),Fi(3,`button`,9),ig(`click`,function(){let a=fd(e).$implicit,i=xw();return pd(i.removeTag(a))}),Fi(4,`mat-icon`),sb(5,`cancel`),yl()()()}if(t&2){let e=D.$implicit,n=xw();Qh(`highlighted`,!0)(`editable`,!n.disabled())(`removable`,!n.disabled()),fI(2),wg(e),fI(),Qh(`disabled`,n.disabled())}}var Cn=(()=>{class t{constructor(){this.separatorKeysCodes=[13,188,32],this.tags=k1([]),this.disabled=O1(!1)}addTag(e){let n=(e.value||``).toLowerCase().trim();n&&this.tags.update(a=>[...a,n]),e.chipInput.clear()}removeTag(e){this.tags.update(n=>n.filter(a=>a!==e))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=$D({type:t,selectors:[[`app-tags-input`]],inputs:{tags:[1,`tags`],disabled:[1,`disabled`]},outputs:{tags:`tagsChange`},decls:13,vars:4,consts:[[`chipGrid`,``],[1,`w-full`],[`appearance`,`outline`,1,`w-full`],[`for`,`favoriteTagsInput`,1,`sr-only`],[`aria-hidden`,`true`],[`matInput`,``,`id`,`favoriteTagsInput`,`placeholder`,`Favorite Tags`,1,`w-full`,`rounded-md`,`focus:ring-indigo-500`,`focus:border-indigo-500`,3,`matChipInputTokenEnd`,`disabled`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`aria-label`,`Tags`,1,`flex`,`flex-wrap`,`gap-2`],[1,`bg-indigo-100`,`text-indigo-700`,`border`,`rounded-full`,`px-4`,`py-2`,`shadow-sm`,`flex`,`items-center`,3,`highlighted`,`editable`,`removable`],[1,`bg-indigo-100`,`text-indigo-700`,`border`,`rounded-full`,`px-4`,`py-2`,`shadow-sm`,`flex`,`items-center`,3,`removed`,`highlighted`,`editable`,`removable`],[`matChipRemove`,``,1,`ml-2`,`text-red-500`,`hover:text-red-700`,3,`click`,`disabled`]],template:function(n,a){if(n&1&&(Fi(0,`div`)(1,`div`,1)(2,`mat-form-field`,2)(3,`label`,3),sb(4,`Favorite Tags`),yl(),Fi(5,`mat-label`,4),sb(6,`Favorite Tags`),yl(),Fi(7,`input`,5),ig(`matChipInputTokenEnd`,function(c){return a.addTag(c)}),yl()()(),Fi(8,`div`,1)(9,`mat-chip-grid`,6,0),yw(11,Qn,6,5,`mat-chip-row`,7,mw),yl()()()),n&2){let i=jw(10);fI(7),Qh(`disabled`,a.disabled())(`matChipInputFor`,i)(`matChipInputSeparatorKeyCodes`,a.separatorKeysCodes)(`matChipInputAddOnBlur`,!0),fI(4),vw(a.tags())}},dependencies:[Tt$1,Dt,Rt$1,At$1,Xi,Mt,wt,Ln$1,$e,ne,Be$1,De,xn$1],encapsulation:2})}}return t})();var Mn=(()=>{class t{constructor(){this.httpClient=b(Tr),this.authService=b(d)}enhance(e){let n=this.authService.getCurrentUserContext();return this.httpClient.post(l.journeyApi+`/ai/enhance-narration`,e,{headers:{Authorization:`Bearer ${n.accessToken}`,"Content-Type":`application/json`}})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=J({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function qn(t,D){if(t&1){let e=bw();Fi(0,`button`,14),ig(`click`,function(){let a=fd(e).$implicit,i=xw(2);return pd(i.enhanceNarration(a))}),sb(1),yl()}if(t&2){let e=D.$implicit;fI(),bl(` `,e,` `)}}function Gn(t,D){if(t&1){let e=bw();Fi(0,`mat-button-toggle-group`,9),XI(),_g(`ngModelChange`,function(a){fd(e);let i=xw();return lb(i.markdownStyle,a)||(i.markdownStyle=a),pd(a)}),Fi(1,`mat-button-toggle`,10),sb(2,`Edit`),yl(),Fi(3,`mat-button-toggle`,11),sb(4,`Preview`),yl()(),Fi(5,`button`,12),sb(6,` Enhance `),Fi(7,`mat-icon`),sb(8,`auto_awesome`),yl()(),Fi(9,`mat-menu`,null,1),yw(11,qn,2,1,`button`,13,mw),yl()}if(t&2){let e=jw(10),n=xw();Tg(`ngModel`,n.markdownStyle),tD(),fI(5),Qh(`matMenuTriggerFor`,e)(`disabled`,n.disabled()),fI(6),vw(n.tones)}}function Un(t,D){t&1&&(Fi(0,`div`),sb(1,`Memories is required.`),yl())}function Kn(t,D){t&1&&(Fi(0,`div`),sb(1,`Memories must be at least 10 characters long.`),yl())}function Zn(t,D){t&1&&(Fi(0,`div`),sb(1,`Memories must be at most 5000 characters long.`),yl())}var wn=(()=>{class t{constructor(){this.tones=[`🌍 Adventurous`,`❤️ Romantic`,`💡 Inspirational`,`🎨 Poetic`,`😄 Funny`,`🧘 Minimalistic`],this.narrationEnhancerService=b(Mn),this.markdownStyle=k1(`Source`),this.disabled=O1(!1),this.title=O1(``),this.narration=k1(``)}enhanceNarration(e){console.log(e),this.narrationEnhancerService.enhance({narration:this.narration(),tone:e}).subscribe({next:n=>this.narration.set(n.narration)})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=$D({type:t,selectors:[[`app-narration`]],inputs:{markdownStyle:[1,`markdownStyle`],disabled:[1,`disabled`],title:[1,`title`],narration:[1,`narration`]},outputs:{markdownStyle:`markdownStyleChange`,narration:`narrationChange`},decls:13,vars:10,consts:[[`description`,`ngModel`],[`toneMenu`,`matMenu`],[1,`flex`,`gap-2`,`flex-col`],[1,`inline-flex`,`gap-2`,`align-middle`,`content-center`,`items-center`],[`for`,`description`,1,`text-sm`,`font-semibold`],[`rows`,`15`,`id`,`description`,`name`,`description`,`placeholder`,`Detailed information about the Journey`,`required`,``,`minlength`,`10`,`maxlength`,`5000`,1,`w-full`,`p-4`,`border`,`rounded-md`,`focus:outline-hidden`,`focus:ring`,`focus:ring-indigo-500`,`dark:bg-gray-800`,3,`ngModelChange`,`ngModel`,`hidden`],[1,`h-96`,`overflow-auto`,3,`hidden`],[3,`title`,`markdownText`],[1,`text-red-500`,`text-sm`,`mt-2`,3,`hidden`],[`name`,`markdownStyle`,`aria-label`,`Markdown Style`,`hideSingleSelectionIndicator`,`true`,3,`ngModelChange`,`ngModel`],[`value`,`Source`,1,`text-sm`],[`value`,`Preview`,1,`text-sm`],[`mat-raised-button`,``,`type`,`button`,3,`matMenuTriggerFor`,`disabled`],[`mat-menu-item`,``],[`mat-menu-item`,``,3,`click`]],template:function(n,a){if(n&1){let i=bw();Fi(0,`div`,2)(1,`div`,3)(2,`label`,4),sb(3,`Memories`),yl(),fw(4,Gn,13,3),yl(),Fi(5,`textarea`,5,0),XI(),_g(`ngModelChange`,function(x){return fd(i),lb(a.narration,x)||(a.narration=x),pd(x)}),yl(),Fi(7,`div`,6),Zh(8,`app-display-markdown-component`,7),yl(),Fi(9,`div`,8),fw(10,Un,2,0,`div`),fw(11,Kn,2,0,`div`),fw(12,Zn,2,0,`div`),yl()()}if(n&2){let i=jw(6);fI(4),hw(a.disabled()?-1:4),fI(),Tg(`ngModel`,a.narration),Qh(`hidden`,a.markdownStyle()===`Preview`),tD(),fI(2),Qh(`hidden`,a.markdownStyle()===`Source`),fI(),Qh(`title`,a.title())(`markdownText`,a.narration()),fI(),Qh(`hidden`,i.valid||i.pristine),fI(),hw(i.errors?.required?10:-1),fI(),hw(i.errors?.minlength?11:-1),fI(),hw(i.errors?.maxlength?12:-1)}},dependencies:[he,xn$1,Pe,Fn$1,it$1,Rt,Tt,rn,Et,ut,at$1,Ot,P,G,At,Pn$1,En,Mt,wt],encapsulation:2})}}return t})();function Yn(t,D){t&1&&(Fi(0,`div`),sb(1,`Name is required.`),yl())}function Xn(t,D){t&1&&(Fi(0,`div`),sb(1,`Name must be at least 5 characters long.`),yl())}function ea(t,D){t&1&&(Fi(0,`div`),sb(1,`Name must be at most 50 characters long.`),yl())}function ta(t,D){t&1&&(Fi(0,`div`),sb(1,`Journey Date is required.`),yl())}function na(t,D){if(t&1){let e=bw();Fi(0,`button`,20),ig(`click`,function(){fd(e);let a=xw(2);return pd(a.enableEditMode())}),sb(1,` Edit `),yl()}if(t&2){let e=xw(2);Qh(`hidden`,e.mode()!==e.OperationMode.VIEW)}}function aa(t,D){if(t&1){let e=bw();Fi(0,`form`,5,0),ig(`ngSubmit`,function(){fd(e);let a=jw(1),i=xw();return pd(i.save(a))}),Fi(2,`div`,6)(3,`div`)(4,`mat-form-field`,7)(5,`mat-label`),sb(6,`Journey Name`),yl(),Fi(7,`input`,8,1),XI(),_g(`ngModelChange`,function(a){fd(e);let i=xw();return lb(i.journey().name,a)||(i.journey().name=a),pd(a)}),yl(),Fi(9,`mat-error`,9),fw(10,Yn,2,0,`div`),fw(11,Xn,2,0,`div`),fw(12,ea,2,0,`div`),yl()()(),Fi(13,`div`)(14,`mat-form-field`,7)(15,`mat-label`),sb(16,`Journey Date`),yl(),Fi(17,`input`,10,2),XI(),ig(`dateChange`,function(a){fd(e);let i=xw();return pd(i.journeyDateChangeEvent(a))}),_g(`ngModelChange`,function(a){fd(e);let i=xw();return lb(i.journeyDateTimestamp,a)||(i.journeyDateTimestamp=a),pd(a)}),yl(),Zh(19,`mat-datepicker-toggle`,11)(20,`mat-datepicker`,null,3),Fi(22,`mat-error`,9),fw(23,ta,2,0,`div`),yl()()()(),Fi(24,`div`,12)(25,`app-tags-input`,13),_g(`tagsChange`,function(a){fd(e);let i=xw();return lb(i.journey().tags,a)||(i.journey().tags=a),pd(a)}),yl()(),Fi(26,`div`,12)(27,`app-narration`,14),_g(`narrationChange`,function(a){fd(e);let i=xw();return lb(i.journey().description,a)||(i.journey().description=a),pd(a)}),yl()(),Fi(28,`div`,15)(29,`button`,16),sb(30,` Create `),yl(),Fh(31,na,2,1,`button`,17),Fi(32,`button`,18),sb(33,` Save `),yl(),Fi(34,`button`,19),sb(35,` Next `),yl()()()}if(t&2){let e=jw(1),n=jw(8),a=jw(18),i=jw(21),c=xw();fI(7),Tg(`ngModel`,c.journey().name),Qh(`readOnly`,c.isReadOnly()),tD(),fI(2),Qh(`hidden`,n.valid||n.pristine),fI(),hw(n.errors?.required?10:-1),fI(),hw(n.errors?.minlength?11:-1),fI(),hw(n.errors?.maxlength?12:-1),fI(5),Qh(`matDatepicker`,i),Tg(`ngModel`,c.journeyDateTimestamp),Qh(`readOnly`,c.isReadOnly()),tD(),fI(2),Qh(`for`,i),fI(3),Qh(`hidden`,a.valid||a.pristine),fI(),hw(a.errors?.required?23:-1),fI(2),Tg(`tags`,c.journey().tags),Qh(`disabled`,c.isReadOnly()),fI(2),Qh(`title`,c.journey().name),Tg(`narration`,c.journey().description),Qh(`disabled`,c.isReadOnly())(`markdownStyle`,c.isReadOnly()?`Preview`:`Source`),fI(2),Qh(`disabled`,!e.form.valid)(`hidden`,c.mode()!==c.OperationMode.NEW),fI(3),Qh(`disabled`,!e.form.valid)(`hidden`,c.mode()!==c.OperationMode.EDIT),fI(2),Qh(`disabled`,c.journey().id===``)}}var Gi=(()=>{class t{constructor(){this.OperationMode=F,this.journeyService=b(L),this.notificationService=b(Gt),this.router=b(de),this.datePipe=b(si),this.mode=k1(F.VIEW),this.isReadOnly=vt(()=>this.mode()==F.VIEW),this.journey=k1(new m$1),this.journeyDateTimestamp=Be(new Date),T(this.journey).subscribe(e=>this.journeyDateTimestamp.set(new Date(e.journeyDate)))}onError(e,n){this.notificationService.showError(e),console.error(n)}onUpdateSuccess(e){this.journey.set(e),this.mode()===F.NEW&&this.router.navigate([`/journey`,this.journey().id,`edit`],{state:{mode:F.VIEW}}).then(),this.mode.set(F.VIEW),this.notificationService.showSuccess(`Journey details saved successfully.`)}save(e){e.valid&&(this.mode()==F.NEW?this.createJourney():this.updateJourney())}createJourney(){this.journeyService.createJourney(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError(`Unexpected error while saving data`,e)})}updateJourney(){this.journeyService.saveJourneyBasicDetails(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError(`Unexpected error while saving data`,e)})}enableEditMode(){this.mode.set(F.EDIT)}journeyDateChangeEvent(e){this.journey.update(n=>s(r({},n),{journeyDate:this.datePipe.transform(e.value,`yyyy-MM-dd`)}))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=$D({type:t,selectors:[[`app-edit-journey-memories-details`]],inputs:{mode:[1,`mode`],journey:[1,`journey`]},outputs:{mode:`modeChange`,journey:`journeyChange`},features:[gb([si])],decls:1,vars:1,consts:[[`journeyForm`,`ngForm`],[`name`,`ngModel`],[`journeyDate`,`ngModel`],[`picker`,``],[1,`content-wrapper`,`flex`,`flex-col`,`gap-2`],[1,`content-wrapper`,`flex`,`flex-col`,`gap-2`,3,`ngSubmit`],[1,`grid`,`grid-cols-1`,`md:grid-cols-2`,`gap-4`],[`appearance`,`outline`,1,`w-full`],[`matInput`,``,`type`,`text`,`id`,`name`,`name`,`name`,`placeholder`,`Name your Journey`,`maxlength`,`50`,`minlength`,`5`,`required`,``,1,`mt-1`,`w-full`,`rounded-md`,`focus:ring-indigo-500`,`focus:border-indigo-500`,3,`ngModelChange`,`ngModel`,`readOnly`],[3,`hidden`],[`matInput`,``,`required`,``,`placeholder`,`dd/mm/yyyy`,`name`,`journeyDate`,3,`dateChange`,`ngModelChange`,`matDatepicker`,`ngModel`,`readOnly`],[`matIconSuffix`,``,3,`for`],[1,`w-full`],[3,`tagsChange`,`tags`,`disabled`],[3,`narrationChange`,`title`,`narration`,`disabled`,`markdownStyle`],[1,`flex`,`flex-wrap`,`justify-center`,`gap-2`,`mt-4`],[`mat-raised-button`,``,`type`,`submit`,1,`px-6`,`py-2`,3,`disabled`,`hidden`],[`mat-stroked-button`,``,`type`,`button`,`class`,`px-6 py-2`,3,`hidden`,`click`,4,`appHasWriteAccess`],[`mat-flat-button`,``,`type`,`submit`,1,`px-6`,`py-2`,3,`disabled`,`hidden`],[`mat-stroked-button`,``,`type`,`button`,`matStepperNext`,``,1,`px-6`,`py-2`,3,`disabled`],[`mat-stroked-button`,``,`type`,`button`,1,`px-6`,`py-2`,3,`click`,`hidden`]],template:function(n,a){n&1&&fw(0,aa,36,23,`form`,4),n&2&&hw(a.journey()?0:-1)},dependencies:[xn$1,Rn$1,Pe,Fn$1,On$1,it$1,Rt,Tt,rn,Kt,Et,Tt$1,Sn,xn,Cn,wn,Be$1,De,$e,ne,ct$1,mt,Ln$1,An$1,Dn,_a,Va,Pn$1,En,C],encapsulation:2})}}return t})();export{Sn as a,xn as c,Rn as i,F as n,Vn as o,Gi as r,it as s,An as t};