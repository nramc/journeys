import{a as At,b as Bt,c as Ht,d as Wt,e as Oe}from"./chunk-HMHVEXN7.js";import{a as $t,b as Ut,c as Gt,h as Kt}from"./chunk-VCMACHI6.js";import{a as qt}from"./chunk-EW7UGKYW.js";import{a as Qt,b as Jt,c as ze}from"./chunk-OAZWBQ74.js";import{a as Et,b as It,c as Tt,d as kt}from"./chunk-ZUZVNMQ4.js";import{c as Ft,i as Rt}from"./chunk-NLMSA6P7.js";import{a as Nt}from"./chunk-HC4RCNG4.js";import{a as jt}from"./chunk-MCTBAKMO.js";import{a as Te,b as ke}from"./chunk-DFLK5DGO.js";import{a as Lt,b as Pt,c as Vt,f as De,g as Ee}from"./chunk-SGVUHSG2.js";import{a as Ie}from"./chunk-5LNAAUSH.js";import{h as St,l as wt,m as Dt}from"./chunk-LMKNXU6M.js";import{b as ve,e as yt,g as ye,h as bt,i as xt,j as be,k as Ct,p as xe,r as Ce,s as Me,u as X}from"./chunk-3JWBKK2M.js";import{a as zt}from"./chunk-PPOO4IE7.js";import{b as dt}from"./chunk-JJEZESWV.js";import{c as Ot}from"./chunk-LUEXZCIQ.js";import{a as Z,b as Y}from"./chunk-RO6DHE3P.js";import{c as gt,d as vt,e as Mt,h as Se,j as we}from"./chunk-R55TY4RW.js";import{D as ht,F as ft,G as _t,a as ot,g as st,h as lt,j as ge,m as pt,r as ct,t as mt,u as ut}from"./chunk-4X4R7TM4.js";import{c as at}from"./chunk-LVJQNIK7.js";import{k as Re,o as Le,x as rt}from"./chunk-EH254ZFX.js";import{$ as T,Aa as Ue,Ab as w,Ac as fe,Bc as u,Cb as J,Cc as E,Da as b,Db as q,Dc as et,Eb as Ye,Fc as N,Ga as Ge,Gc as F,Ha as ce,Hc as R,Ja as ee,Jc as tt,Ka as te,Kc as re,Mc as ae,Oc as nt,Pb as $,Rb as h,Sb as f,Sc as Fe,Tb as k,Ub as O,Vb as z,Wb as p,Xb as o,Xc as G,Yb as s,Z as V,Zb as j,_ as qe,a as Be,b as He,bd as B,dc as D,ed as L,f as We,fc as S,fd as _e,ga as de,gc as ue,ha as pe,j as le,ja as $e,jb as a,kc as y,kd as K,la as m,ld as it,nc as c,oc as ne,pb as Q,pc as ie,qc as U,ra as _,rb as Ke,rc as he,sa as g,sc as x,t as Qe,tc as C,ub as Ze,xc as v,y as Je,yb as M,yc as Xe,za as W,zb as me,zc as A}from"./chunk-OE5ARKY5.js";var pn=["*"];function cn(t,l){t&1&&ie(0)}var Pe=(()=>{class t{_elementRef=m(ee);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return t})(),Ve=(()=>{class t{template=m(Q);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,selectors:[["","cdkStepLabel",""]]})}return t})();var H={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},mn=new $e("STEPPER_GLOBAL_OPTIONS"),Ne=(()=>{class t{_stepperOptions;_stepper=m(se);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=b(!1);interactedStream=new W;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=b(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=b(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=b(null);index=b(-1);isSelected=G(()=>this._stepper.selectedIndex===this.index());indicatorType=G(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??H.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?H.ERROR:this._displayDefaultIndicatorType?!n||e?H.NUMBER:r?H.EDIT:H.DONE:n&&!e?H.DONE:n&&e?i:r&&e?H.EDIT:i});isNavigable=G(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=b(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=m(mn,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["cdk-step"]],contentQueries:function(n,i,r){if(n&1&&U(r,Ve,5)(r,yt,5),n&2){let d;x(d=C())&&(i.stepLabel=d.first),x(d=C())&&(i._childForms=d)}},viewQuery:function(n,i){if(n&1&&he(Q,7),n&2){let r;x(r=C())&&(i.content=r.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",K],optional:[2,"optional","optional",K],completed:[2,"completed","completed",K],hasError:[2,"hasError","hasError",K]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Ge],ngContentSelectors:pn,decls:1,vars:0,template:function(n,i){n&1&&(ne(),Ye(0,cn,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return t})(),se=(()=>{class t{_dir=m(lt,{optional:!0});_changeDetectorRef=m(_e);_elementRef=m(ee);_destroyed=new le;_keyManager;_steps;steps=new te;_stepHeader;_sortedHeaders=new te;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=b(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=b(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new W;selectedIndexChange=new W;_groupId=m(_t).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(V(this._steps),T(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(V(this._stepHeader),T(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new ft(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Qe()).pipe(V(this._layoutDirection()),T(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()==="rtl"?"next":"previous":n>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=ht(e),i=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return(i?i.invalid||i.pending||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,n=pt();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(n,i,r){if(n&1&&U(r,Ne,5)(r,Pe,5),n&2){let d;x(d=C())&&(i._steps=d),x(d=C())&&(i._stepHeader=d)}},inputs:{linear:[2,"linear","linear",K],selectedIndex:[2,"selectedIndex","selectedIndex",it],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return t})(),Zt=(()=>{class t{_stepper=m(se);type="submit";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(n,i){n&1&&y("click",function(){return i._stepper.next()}),n&2&&ue("type",i.type)},inputs:{type:"type"}})}return t})();var Yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=me({type:t});static \u0275inj=pe({imports:[ge]})}return t})();var un=(t,l,e)=>({index:t,active:l,optional:e});function hn(t,l){if(t&1&&D(0,2),t&2){let e=c();p("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",nt(2,un,e.index,e.active,e.optional))}}function fn(t,l){if(t&1&&(o(0,"span",7),u(1),s()),t&2){let e=c(2);a(),E(e._getDefaultTextForState(e.state))}}function _n(t,l){if(t&1&&(o(0,"span",8),u(1),s()),t&2){let e=c(3);a(),E(e._intl.completedLabel)}}function gn(t,l){if(t&1&&(o(0,"span",8),u(1),s()),t&2){let e=c(3);a(),E(e._intl.editableLabel)}}function vn(t,l){if(t&1&&(h(0,_n,2,1,"span",8)(1,gn,2,1,"span",8),o(2,"mat-icon",7),u(3),s()),t&2){let e=c(2);f(e.state==="done"?0:e.state==="edit"?1:-1),a(3),E(e._getDefaultTextForState(e.state))}}function yn(t,l){if(t&1&&h(0,fn,2,1,"span",7)(1,vn,4,2),t&2){let e,n=c();f((e=n.state)==="number"?0:1)}}function bn(t,l){t&1&&(o(0,"div",4),D(1,9),s()),t&2&&(a(),p("ngTemplateOutlet",l.template))}function xn(t,l){if(t&1&&(o(0,"div",4),u(1),s()),t&2){let e=c();a(),E(e.label)}}function Cn(t,l){if(t&1&&(o(0,"div",5),u(1),s()),t&2){let e=c();a(),E(e._intl.optionalLabel)}}function Mn(t,l){if(t&1&&(o(0,"div",6),u(1),s()),t&2){let e=c();a(),E(e.errorMessage)}}var Xt=["*"];function Sn(t,l){}function wn(t,l){if(t&1&&(ie(0),q(1,Sn,0,0,"ng-template",0)),t&2){let e=c();a(),p("cdkPortalOutlet",e._portal)}}var Dn=["animatedContainer"],en=t=>({steps:t}),tn=t=>({step:t});function En(t,l){t&1&&ie(0)}function In(t,l){if(t&1&&(o(0,"div",5),D(1,9)(2,6),s()),t&2){let e=c(2),n=v(6);a(),p("ngTemplateOutlet",e.headerPrefix()),a(),p("ngTemplateOutlet",n)("ngTemplateOutletContext",ae(3,en,e.steps))}}function Tn(t,l){if(t&1&&D(0,6),t&2){let e=c(2),n=v(6);p("ngTemplateOutlet",n)("ngTemplateOutletContext",ae(2,en,e.steps))}}function kn(t,l){if(t&1&&(o(0,"div",10,2),D(2,9),s()),t&2){let e=l.$implicit,n=l.$index,i=c(2);fe("mat-horizontal-stepper-content-"+i._getAnimationDirection(n)),p("id",i._getStepContentId(n)),$("aria-labelledby",i._getStepLabelId(n))("inert",i.selectedIndex===n?null:""),a(2),p("ngTemplateOutlet",e.content)}}function On(t,l){if(t&1&&(o(0,"div",3),h(1,In,3,5,"div",5)(2,Tn,1,4,"ng-container",6),o(3,"div",7),O(4,kn,3,6,"div",8,k),s()()),t&2){let e=c();a(),f(e.headerPrefix()?1:2),a(3),z(e.steps)}}function zn(t,l){if(t&1&&D(0,9),t&2){let e=c(2);p("ngTemplateOutlet",e.headerPrefix())}}function Nn(t,l){if(t&1&&(o(0,"div",11),D(1,6),o(2,"div",12,2)(4,"div",13)(5,"div",14),D(6,9),s()()()()),t&2){let e=l.$implicit,n=l.$index,i=l.$index,r=l.$count,d=c(2),P=v(4);a(),p("ngTemplateOutlet",P)("ngTemplateOutletContext",ae(11,tn,e)),a(),A("mat-stepper-vertical-line",i!==r-1)("mat-vertical-content-container-active",d.selectedIndex===n),$("inert",d.selectedIndex===n?null:"")("aria-label",d.ariaLabel),a(2),p("id",d._getStepContentId(n)),$("aria-labelledby",d._getStepLabelId(n)),a(2),p("ngTemplateOutlet",e.content)}}function Fn(t,l){if(t&1&&(o(0,"div",4),h(1,zn,1,1,"ng-container",9),O(2,Nn,7,13,"div",11,k),s()),t&2){let e=c();a(),f(e.headerPrefix()?1:-1),a(),z(e.steps)}}function Rn(t,l){if(t&1){let e=S();o(0,"mat-step-header",15),y("click",function(){let i=_(e).step;return g(i.select())})("keydown",function(i){_(e);let r=c();return g(r._onKeydown(i))}),s()}if(t&2){let e=l.step,n=c();A("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),p("tabIndex",n._getFocusIndex()===e.index()?0:-1)("id",n._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!e.isNavigable())("color",e.color||n.color),$("role",n.orientation==="horizontal"?"tab":"button")("aria-posinset",n.orientation==="horizontal"?e.index()+1:null)("aria-setsize",n.orientation==="horizontal"?n.steps.length:null)("aria-selected",n.orientation==="horizontal"?e.isSelected():null)("aria-current",n.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",n.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",n.orientation==="vertical"?e.isSelected():null)("aria-controls",n._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function Ln(t,l){t&1&&j(0,"div",17)}function Pn(t,l){if(t&1&&(D(0,6),h(1,Ln,1,0,"div",17)),t&2){let e=l.$implicit,n=l.$index,i=l.$count;c(2);let r=v(4);p("ngTemplateOutlet",r)("ngTemplateOutletContext",ae(3,tn,e)),a(),f(n!==i-1?1:-1)}}function Vn(t,l){if(t&1&&(o(0,"div",16),O(1,Pn,2,5,null,null,k),s()),t&2){let e=l.steps,n=c();$("aria-label",n.ariaLabel),a(),z(e)}}var je=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ce(t)))(i||t)}})();static \u0275dir=w({type:t,selectors:[["","matStepLabel",""]],features:[J]})}return t})(),jn=(()=>{class t{changes=new le;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(n){return new(n||t)};static \u0275prov=de({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ae=(()=>{class t extends Pe{_intl=m(jn);_focusMonitor=m(ct);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=m(mt);e.load(vt),e.load(ut);let n=m(_e);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof je?null:this.label}_templateLabel(){return this.label instanceof je?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(n,i){n&2&&(fe("mat-"+(i.color||"primary")),A("mat-step-header-empty-label",i._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[J],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(j(0,"div",0),o(1,"div")(2,"div",1),h(3,hn,1,6,"ng-container",2)(4,yn,2,1),s()(),o(5,"div",3),h(6,bn,2,1,"div",4)(7,xn,2,1,"div",4),h(8,Cn,2,1,"div",5),h(9,Mn,2,1,"div",6),s()),n&2){let r;p("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),a(),fe(tt("mat-step-icon-state-",i.state," mat-step-icon")),A("mat-step-icon-selected",i.selected),a(2),f(i.iconOverrides&&i.iconOverrides[i.state]?3:4),a(2),A("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),a(),f((r=i._templateLabel())?6:i._stringLabel()?7:-1,r),a(2),f(i._hasOptionalLabel()?8:-1),a(),f(i._hasErrorLabel()?9:-1)}},dependencies:[gt,Re,Z],styles:[`.mat-step-header {
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
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
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
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
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
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
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
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
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
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
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
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return t})(),An=(()=>{class t{templateRef=m(Q);name;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return t})(),Bn=(()=>{class t{_template=m(Q);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,selectors:[["ng-template","matStepContent",""]]})}return t})(),Hn=(()=>{class t extends Ne{_errorStateMatcher=m(Ie,{skipSelf:!0});_viewContainerRef=m(Ze);_isSelected=We.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(qe(()=>this._stepper.selectionChange.pipe(Je(e=>e.selectedStep===this),V(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new St(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),r=!!(e&&e.invalid&&this.interacted);return i||r}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ce(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-step"]],contentQueries:function(n,i,r){if(n&1&&U(r,je,5)(r,Bn,5),n&2){let d;x(d=C())&&(i.stepLabel=d.first),x(d=C())&&(i._lazyContent=d.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[re([{provide:Ie,useExisting:t},{provide:Ne,useExisting:t}]),J],ngContentSelectors:Xt,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(ne(),q(0,wn,2,1,"ng-template"))},dependencies:[wt],encapsulation:2,changeDetection:0})}return t})(),Wn=(()=>{class t extends se{_ngZone=m(Ue);_renderer=m(Ke);_animationsDisabled=st();_cleanupTransition;_isAnimating=b(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new te;_icons;animationDone=new W;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=B(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!m(ot).isBrowser;constructor(){super();let n=m(ee).nativeElement.nodeName.toLowerCase();this.orientation=n==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(T(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(T(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(V(null),T(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&n.classList.contains("mat-horizontal-stepper-content-current"),r=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&n.classList.contains("mat-vertical-content-container-active");(i||r)&&this._animatedContainers.find(P=>P.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(n,i,r){if(n&1&&U(r,Hn,5)(r,An,5),n&2){let d;x(d=C())&&(i._steps=d),x(d=C())&&(i._icons=d)}},viewQuery:function(n,i){if(n&1&&he(Ae,5)(Dn,5),n&2){let r;x(r=C())&&(i._stepHeader=r),x(r=C())&&(i._animatedContainers=r)}},hostVars:14,hostBindings:function(n,i){n&2&&(Xe("--mat-stepper-animation-duration",i._getAnimationDuration()),A("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[re([{provide:se,useExisting:t}]),J],ngContentSelectors:Xt,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(n,i){if(n&1&&(ne(),h(0,En,1,0),h(1,On,6,1,"div",3)(2,Fn,4,1,"div",4),q(3,Rn,1,27,"ng-template",null,0,Fe)(5,Vn,3,1,"ng-template",null,1,Fe)),n&2){let r;f(i._isServer?0:-1),a(),f((r=i.orientation)==="horizontal"?1:r==="vertical"?2:-1)}},dependencies:[Re,Ae],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
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
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
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
  height: var(--mat-stepper-header-height, 72px);
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
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
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
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
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
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
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
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
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
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
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
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return t})(),nn=(()=>{class t extends Zt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ce(t)))(i||t)}})();static \u0275dir=w({type:t,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(n,i){n&2&&ue("type",i.type)},features:[J]})}return t})();var rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=me({type:t});static \u0275inj=pe({providers:[Ie],imports:[Dt,Yt,Y,Mt,Wn,Ae,ge]})}return t})();var I=(function(t){return t[t.NEW=0]="NEW",t[t.VIEW=1]="VIEW",t[t.EDIT=2]="EDIT",t})(I||{});function Un(t,l){if(t&1){let e=S();o(0,"mat-chip-row",6),y("removed",function(){let i=_(e).$implicit,r=c();return g(r.removeTag(i))}),o(1,"span"),u(2),s(),o(3,"button",7),y("click",function(){let i=_(e).$implicit,r=c();return g(r.removeTag(i))}),o(4,"mat-icon"),u(5,"cancel"),s()()()}if(t&2){let e=l.$implicit,n=c();p("highlighted",!0)("editable",!n.disabled())("removable",!n.disabled()),a(2),E(e),a(),p("disabled",n.disabled())}}var an=(()=>{class t{constructor(){this.separatorKeysCodes=[13,188,32],this.tags=L([]),this.disabled=B(!1)}addTag(e){let n=(e.value||"").toLowerCase().trim();n&&this.tags.update(i=>[...i,n]),e.chipInput.clear()}removeTag(e){this.tags.update(n=>n.filter(i=>i!==e))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-tags-input"]],inputs:{tags:[1,"tags"],disabled:[1,"disabled"]},outputs:{tags:"tagsChange"},decls:9,vars:4,consts:[["chipGrid",""],[1,"w-full"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Favorite Tags",1,"w-full","rounded-md","focus:ring-indigo-500","focus:border-indigo-500",3,"matChipInputTokenEnd","disabled","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["aria-label","Tags",1,"flex","flex-wrap","gap-2"],[1,"bg-indigo-100","text-indigo-700","border","rounded-full","px-4","py-2","shadow-sm","flex","items-center",3,"highlighted","editable","removable"],[1,"bg-indigo-100","text-indigo-700","border","rounded-full","px-4","py-2","shadow-sm","flex","items-center",3,"removed","highlighted","editable","removable"],["matChipRemove","",1,"ml-2","text-red-500","hover:text-red-700",3,"click","disabled"]],template:function(n,i){if(n&1&&(o(0,"div")(1,"div",1)(2,"mat-form-field",2)(3,"input",3),y("matChipInputTokenEnd",function(d){return i.addTag(d)}),s()()(),o(4,"div",1)(5,"mat-chip-grid",4,0),O(7,Un,6,5,"mat-chip-row",5,k),s()()()),n&2){let r=v(6);a(3),p("disabled",i.disabled())("matChipInputFor",r)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",!0),a(4),z(i.tags())}},dependencies:[Oe,Ht,Wt,At,Bt,Y,Z,Ee,De,ke,Te,X],encapsulation:2})}}return t})();var on=(()=>{class t{constructor(){this.httpClient=m(rt),this.authService=m(Ot)}enhance(e){let n=this.authService.getCurrentUserContext();return this.httpClient.post(zt.journeyApi+"/ai/enhance-narration",e,{headers:{Authorization:`Bearer ${n.accessToken}`,"Content-Type":"application/json"}})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=de({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Zn(t,l){if(t&1){let e=S();o(0,"button",14),y("click",function(){let i=_(e).$implicit,r=c(2);return g(r.enhanceNarration(i))}),u(1),s()}if(t&2){let e=l.$implicit;a(),et(" ",e," ")}}function Yn(t,l){if(t&1){let e=S();o(0,"mat-button-toggle-group",9),R("ngModelChange",function(i){_(e);let r=c();return F(r.markdownStyle,i)||(r.markdownStyle=i),g(i)}),o(1,"mat-button-toggle",10),u(2,"Edit"),s(),o(3,"mat-button-toggle",11),u(4,"Preview"),s()(),o(5,"button",12),u(6," Enhance "),o(7,"mat-icon"),u(8,"auto_awesome"),s()(),o(9,"mat-menu",null,1),O(11,Zn,2,1,"button",13,k),s()}if(t&2){let e=v(10),n=c();N("ngModel",n.markdownStyle),a(5),p("matMenuTriggerFor",e)("disabled",n.disabled()),a(6),z(n.tones)}}function Xn(t,l){t&1&&(o(0,"div"),u(1,"Memories is required."),s())}function ei(t,l){t&1&&(o(0,"div"),u(1,"Memories must be at least 10 characters long."),s())}function ti(t,l){t&1&&(o(0,"div"),u(1,"Memories must be at most 5000 characters long."),s())}var sn=(()=>{class t{constructor(){this.tones=["\u{1F30D} Adventurous","\u2764\uFE0F Romantic","\u{1F4A1} Inspirational","\u{1F3A8} Poetic","\u{1F604} Funny","\u{1F9D8} Minimalistic"],this.narrationEnhancerService=m(on),this.markdownStyle=L("Source"),this.disabled=B(!1),this.title=B(""),this.narration=L("")}enhanceNarration(e){console.log(e),this.narrationEnhancerService.enhance({narration:this.narration(),tone:e}).subscribe({next:n=>this.narration.set(n.narration)})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-narration"]],inputs:{markdownStyle:[1,"markdownStyle"],disabled:[1,"disabled"],title:[1,"title"],narration:[1,"narration"]},outputs:{markdownStyle:"markdownStyleChange",narration:"narrationChange"},decls:13,vars:10,consts:[["description","ngModel"],["toneMenu","matMenu"],[1,"flex","gap-2","flex-col"],[1,"inline-flex","gap-2","align-middle","content-center","items-center"],["for","description",1,"text-sm","font-semibold"],["rows","15","id","description","name","description","placeholder","Detailed information about the Journey","required","","minlength","10","maxlength","5000",1,"w-full","p-4","border","rounded-md","focus:outline-hidden","focus:ring","focus:ring-indigo-500","dark:bg-gray-800",3,"ngModelChange","ngModel","hidden"],[1,"h-96","overflow-auto",3,"hidden"],[3,"title","markdownText"],[1,"text-red-500","text-sm","mt-2",3,"hidden"],["name","markdownStyle","aria-label","Markdown Style","hideSingleSelectionIndicator","true",3,"ngModelChange","ngModel"],["value","Source",1,"text-sm"],["value","Preview",1,"text-sm"],["mat-raised-button","","type","button",3,"matMenuTriggerFor","disabled"],["mat-menu-item",""],["mat-menu-item","",3,"click"]],template:function(n,i){if(n&1){let r=S();o(0,"div",2)(1,"div",3)(2,"label",4),u(3,"Memories"),s(),h(4,Yn,13,3),s(),o(5,"textarea",5,0),R("ngModelChange",function(P){return _(r),F(i.narration,P)||(i.narration=P),g(P)}),s(),o(7,"div",6),j(8,"app-display-markdown-component",7),s(),o(9,"div",8),h(10,Xn,2,0,"div"),h(11,ei,2,0,"div"),h(12,ti,2,0,"div"),s()()}if(n&2){let r=v(6);a(4),f(i.disabled()?-1:4),a(),N("ngModel",i.narration),p("hidden",i.markdownStyle()==="Preview"),a(2),p("hidden",i.markdownStyle()==="Source"),a(),p("title",i.title())("markdownText",i.narration()),a(),p("hidden",r.valid||r.pristine),a(),f(r.errors!=null&&r.errors.required?10:-1),a(),f(r.errors!=null&&r.errors.minlength?11:-1),a(),f(r.errors!=null&&r.errors.maxlength?12:-1)}},dependencies:[qt,X,ve,ye,xe,Ce,Me,be,ze,Qt,Jt,kt,It,Et,Tt,we,Se,Y,Z],encapsulation:2})}}return t})();function ni(t,l){t&1&&(o(0,"div"),u(1,"Name is required."),s())}function ii(t,l){t&1&&(o(0,"div"),u(1,"Name must be at least 5 characters long."),s())}function ri(t,l){t&1&&(o(0,"div"),u(1,"Name must be at most 50 characters long."),s())}function ai(t,l){t&1&&(o(0,"div"),u(1,"Journey Date is required."),s())}function oi(t,l){if(t&1){let e=S();o(0,"button",20),y("click",function(){_(e);let i=c(2);return g(i.enableEditMode())}),u(1," Edit "),s()}if(t&2){let e=c(2);p("hidden",e.mode()!==e.OperationMode.VIEW)}}function si(t,l){if(t&1){let e=S();o(0,"form",5,0),y("ngSubmit",function(){_(e);let i=v(1),r=c();return g(r.save(i))}),o(2,"div",6)(3,"div")(4,"mat-form-field",7)(5,"mat-label"),u(6,"Journey Name"),s(),o(7,"input",8,1),R("ngModelChange",function(i){_(e);let r=c();return F(r.journey().name,i)||(r.journey().name=i),g(i)}),s(),o(9,"mat-error",9),h(10,ni,2,0,"div"),h(11,ii,2,0,"div"),h(12,ri,2,0,"div"),s()()(),o(13,"div")(14,"mat-form-field",7)(15,"mat-label"),u(16,"Journey Date"),s(),o(17,"input",10,2),y("dateChange",function(i){_(e);let r=c();return g(r.journeyDateChangeEvent(i))}),R("ngModelChange",function(i){_(e);let r=c();return F(r.journeyDateTimestamp,i)||(r.journeyDateTimestamp=i),g(i)}),s(),j(19,"mat-datepicker-toggle",11)(20,"mat-datepicker",null,3),o(22,"mat-error",9),h(23,ai,2,0,"div"),s()()()(),o(24,"div",12)(25,"app-tags-input",13),R("tagsChange",function(i){_(e);let r=c();return F(r.journey().tags,i)||(r.journey().tags=i),g(i)}),s()(),o(26,"div",12)(27,"app-narration",14),R("narrationChange",function(i){_(e);let r=c();return F(r.journey().description,i)||(r.journey().description=i),g(i)}),s()(),o(28,"div",15)(29,"button",16),u(30," Create "),s(),q(31,oi,2,1,"button",17),o(32,"button",18),u(33," Save "),s(),o(34,"button",19),u(35," Next "),s()()()}if(t&2){let e=v(1),n=v(8),i=v(18),r=v(21),d=c();a(7),N("ngModel",d.journey().name),p("readOnly",d.isReadOnly()),a(2),p("hidden",n.valid||n.pristine),a(),f(n.errors!=null&&n.errors.required?10:-1),a(),f(n.errors!=null&&n.errors.minlength?11:-1),a(),f(n.errors!=null&&n.errors.maxlength?12:-1),a(5),p("matDatepicker",r),N("ngModel",d.journeyDateTimestamp),p("readOnly",d.isReadOnly()),a(2),p("for",r),a(3),p("hidden",i.valid||i.pristine),a(),f(i.errors!=null&&i.errors.required?23:-1),a(2),N("tags",d.journey().tags),p("disabled",d.isReadOnly()),a(2),p("title",d.journey().name),N("narration",d.journey().description),p("disabled",d.isReadOnly())("markdownStyle",d.isReadOnly()?"Preview":"Source"),a(2),p("disabled",!e.form.valid)("hidden",d.mode()!==d.OperationMode.NEW),a(3),p("disabled",!e.form.valid)("hidden",d.mode()!==d.OperationMode.EDIT),a(2),p("disabled",d.journey().id==="")}}var Xr=(()=>{class t{constructor(){this.OperationMode=I,this.journeyService=m(Rt),this.notificationService=m(jt),this.router=m(at),this.datePipe=m(Le),this.mode=L(I.VIEW),this.isReadOnly=G(()=>this.mode()==I.VIEW),this.journey=L(new Ft),this.journeyDateTimestamp=b(new Date),dt(this.journey).subscribe(e=>this.journeyDateTimestamp.set(new Date(e.journeyDate)))}onError(e,n){this.notificationService.showError(e),console.error(n)}onUpdateSuccess(e){this.journey.set(e),this.mode()===I.NEW&&this.router.navigate(["/journey",this.journey().id,"edit"],{state:{mode:I.VIEW}}).then(),this.mode.set(I.VIEW),this.notificationService.showSuccess("Journey details saved successfully.")}save(e){e.valid&&(this.mode()==I.NEW?this.createJourney():this.updateJourney())}createJourney(){this.journeyService.createJourney(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError("Unexpected error while saving data",e)})}updateJourney(){this.journeyService.saveJourneyBasicDetails(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError("Unexpected error while saving data",e)})}enableEditMode(){this.mode.set(I.EDIT)}journeyDateChangeEvent(e){this.journey.update(n=>He(Be({},n),{journeyDate:this.datePipe.transform(e.value,"yyyy-MM-dd")}))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-edit-journey-memories-details"]],inputs:{mode:[1,"mode"],journey:[1,"journey"]},outputs:{mode:"modeChange",journey:"journeyChange"},features:[re([Le])],decls:1,vars:1,consts:[["journeyForm","ngForm"],["name","ngModel"],["journeyDate","ngModel"],["picker",""],[1,"content-wrapper","flex","flex-col","gap-2"],[1,"content-wrapper","flex","flex-col","gap-2",3,"ngSubmit"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],["appearance","outline",1,"w-full"],["matInput","","type","text","id","name","name","name","placeholder","Name your Journey","maxlength","50","minlength","5","required","",1,"mt-1","w-full","rounded-md","focus:ring-indigo-500","focus:border-indigo-500",3,"ngModelChange","ngModel","readOnly"],[3,"hidden"],["matInput","","required","","placeholder","dd/mm/yyyy","name","journeyDate",3,"dateChange","ngModelChange","matDatepicker","ngModel","readOnly"],["matIconSuffix","",3,"for"],[1,"w-full"],[3,"tagsChange","tags","disabled"],[3,"narrationChange","title","narration","disabled","markdownStyle"],[1,"flex","flex-wrap","justify-center","gap-2","mt-4"],["mat-raised-button","","type","submit",1,"px-6","py-2",3,"disabled","hidden"],["mat-stroked-button","","type","button","class","px-6 py-2",3,"hidden","click",4,"appHasWriteAccess"],["mat-flat-button","","type","submit",1,"px-6","py-2",3,"disabled","hidden"],["mat-stroked-button","","type","button","matStepperNext","",1,"px-6","py-2",3,"disabled"],["mat-stroked-button","","type","button",1,"px-6","py-2",3,"click","hidden"]],template:function(n,i){n&1&&h(0,si,36,23,"form",4),n&2&&f(i.journey()?0:-1)},dependencies:[X,Ct,ve,ye,bt,xe,Ce,Me,be,xt,ze,Oe,rn,nn,an,sn,ke,Te,De,Lt,Pt,Vt,Ee,Kt,$t,Ut,Gt,we,Se,Nt],encapsulation:2})}}return t})();export{je as a,Bn as b,Hn as c,Wn as d,nn as e,rn as f,I as g,Xr as h};
