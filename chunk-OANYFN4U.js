import{a as tn,b as an,c as nn,d as rn,e as gt}from"./chunk-VF5AD6DL.js";import{a as ln}from"./chunk-OH5IASCU.js";import{a as on,b as sn,c as ft}from"./chunk-NEOWNRTY.js";import{a as Ba,b as Ya,c as za,d as Ha}from"./chunk-6MHR44F4.js";import{b as q,c as Fe,d as dn}from"./chunk-RGH7FVH7.js";import{a as Wa}from"./chunk-7XVBYKDH.js";import{c as qa,i as $a}from"./chunk-UJJF2EVG.js";import{a as Ka}from"./chunk-HYGQ356H.js";import{a as en}from"./chunk-UEXNEIYP.js";import{a as Xa,b as ht,c as _t}from"./chunk-SLZKH4QO.js";import{a as Ua,b as Ga,c as Ja,e as Za,f as pt,g as mt}from"./chunk-RFIRKM3V.js";import{a as ut}from"./chunk-B2BFUYFN.js";import{e as wa,g as Ot,h as Nt,k as qe,l as ct,m as Va,n as Ta,o as Fa,r as Ra,s as Oa,t as Na,v as Pa,z as La}from"./chunk-ABTV5DUN.js";import{a as xa,b as it,c as ka,d as Sa,e as Ft,g as rt,h as Aa,i as Rt,j as ot,k as Ea,p as st,r as lt,s as dt,u as Ve}from"./chunk-RDWL67WJ.js";import{a as Qa}from"./chunk-DV26N3KS.js";import{b as ga}from"./chunk-K7SNHORH.js";import{c as ja}from"./chunk-CSB4GUNQ.js";import{a as Ee,b as Ie}from"./chunk-F55ZGMQZ.js";import{c as Ma,d as nt,e as Ia,g as Pt,h as be,j as Te}from"./chunk-WGCAINHC.js";import{A as va,C as ya,D as ae,F as Da,G as Ae,N as Ca,a as at,g as We,h as ge,j as ke,m as Qe,r as fa,s as ba,t as fe,u as Se}from"./chunk-IYBDWB6D.js";import{c as _a}from"./chunk-5JABALM5.js";import{k as Vt,o as Tt,x as ha}from"./chunk-BRSHBHXO.js";import{$ as ia,$c as _e,Aa as h,Ac as u,Ba as Ye,Bb as X,Bc as E,Cb as ee,Cc as ce,Db as At,Dc as Et,Ea as _,Ec as L,Fc as B,Gc as Y,Ha as Z,I as Xe,Ia as Ce,Ic as ca,J as aa,Jc as te,Ka as K,La as ze,Lc as je,Nc as pa,O as na,Ob as x,Pb as b,Qb as v,Rb as re,Rc as It,Sb as N,Tb as P,Ub as m,Vb as d,Wb as c,Wc as xe,Xb as k,Yb as $,Yc as ma,Zb as U,_ as j,_b as la,a as Xt,aa as ne,b as ea,bc as G,cd as pe,dc as S,dd as T,ec as W,g as O,ga as xt,ha as ie,ia as De,ib as s,ic as y,id as F,jd as ua,k as H,ka as Le,kc as da,la as ra,lc as p,ma as l,mc as oe,nb as St,nc as se,ob as he,oc as le,pc as Q,qb as He,qc as D,rc as C,sa as g,sb as sa,ta as f,tb as tt,u as ye,ua as Be,va as kt,vc as A,wa as et,wc as Me,xa as oa,xb as M,xc as V,yb as we,z as ta,zb as I,zc as de}from"./chunk-UQZIQZBC.js";var Bn=["*"];function Yn(n,o){n&1&&se(0)}var Lt=(()=>{class n{_elementRef=l(K);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Bt=(()=>{class n{template=l(he);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var ve={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},zn=new Le("STEPPER_GLOBAL_OPTIONS"),bt=(()=>{class n{_stepperOptions;_stepper=l(Ke);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=_(!1);interactedStream=new h;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=_(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=_(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=_(null);index=_(-1);isSelected=xe(()=>this._stepper.selectedIndex===this.index());indicatorType=xe(()=>{let e=this.isSelected(),t=this.completed,a=this._state()??ve.NUMBER,i=this._editable();return this._showError()&&this.hasError&&!e?ve.ERROR:this._displayDefaultIndicatorType?!t||e?ve.NUMBER:i?ve.EDIT:ve.DONE:t&&!e?ve.DONE:t&&e?a:i&&e?ve.EDIT:a});isNavigable=xe(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=_(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=l(zn,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["cdk-step"]],contentQueries:function(t,a,i){if(t&1&&le(i,Bt,5)(i,Ft,5),t&2){let r;D(r=C())&&(a.stepLabel=r.first),D(r=C())&&(a._childForms=r)}},viewQuery:function(t,a){if(t&1&&Q(he,7),t&2){let i;D(i=C())&&(a.content=i.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",F],optional:[2,"optional","optional",F],completed:[2,"completed","completed",F],hasError:[2,"hasError","hasError",F]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Z],ngContentSelectors:Bn,decls:1,vars:0,template:function(t,a){t&1&&(oe(),At(0,Yn,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),Ke=(()=>{class n{_dir=l(ge,{optional:!0});_changeDetectorRef=l(T);_elementRef=l(K);_destroyed=new H;_keyManager;_steps;steps=new ze;_stepHeader;_sortedHeaders=new ze;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=_(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=_(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new h;selectedIndexChange=new h;_groupId=l(Ae).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(j(this._steps),ne(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,a)=>t.index.set(a)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(j(this._stepHeader),ne(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,a)=>t._elementRef.nativeElement.compareDocumentPosition(a._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Da(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:ye()).pipe(j(this._layoutDirection()),ne(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),a=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:a,selectedStep:t[e],previouslySelectedStep:t[a]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=ae(e),a=e.keyCode,i=this._keyManager;i?.activeItemIndex!=null&&!t&&(a===32||a===13)?(this.selectedIndex=i.activeItemIndex,e.preventDefault()):i?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let a=t.stepControl;return(a?a.invalid||a.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=Qe();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,a,i){if(t&1&&le(i,bt,5)(i,Lt,5),t&2){let r;D(r=C())&&(a._steps=r),D(r=C())&&(a._stepHeader=r)}},inputs:{linear:[2,"linear","linear",F],selectedIndex:[2,"selectedIndex","selectedIndex",ua],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),cn=(()=>{class n{_stepper=l(Ke);type="submit";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,a){t&1&&y("click",function(){return a._stepper.next()}),t&2&&W("type",a.type)},inputs:{type:"type"}})}return n})();var pn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=we({type:n});static \u0275inj=De({imports:[ke]})}return n})();var Hn=(n,o,e)=>({index:n,active:o,optional:e});function jn(n,o){if(n&1&&G(0,2),n&2){let e=p();m("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",pa(2,Hn,e.index,e.active,e.optional))}}function Wn(n,o){if(n&1&&(d(0,"span",7),u(1),c()),n&2){let e=p(2);s(),E(e._getDefaultTextForState(e.state))}}function Qn(n,o){if(n&1&&(d(0,"span",8),u(1),c()),n&2){let e=p(3);s(),E(e._intl.completedLabel)}}function qn(n,o){if(n&1&&(d(0,"span",8),u(1),c()),n&2){let e=p(3);s(),E(e._intl.editableLabel)}}function Kn(n,o){if(n&1&&(b(0,Qn,2,1,"span",8)(1,qn,2,1,"span",8),d(2,"mat-icon",7),u(3),c()),n&2){let e=p(2);v(e.state==="done"?0:e.state==="edit"?1:-1),s(3),E(e._getDefaultTextForState(e.state))}}function $n(n,o){if(n&1&&b(0,Wn,2,1,"span",7)(1,Kn,4,2),n&2){let e,t=p();v((e=t.state)==="number"?0:1)}}function Un(n,o){n&1&&(d(0,"div",4),G(1,9),c()),n&2&&(s(),m("ngTemplateOutlet",o.template))}function Gn(n,o){if(n&1&&(d(0,"div",4),u(1),c()),n&2){let e=p();s(),E(e.label)}}function Jn(n,o){if(n&1&&(d(0,"div",5),u(1),c()),n&2){let e=p();s(),E(e._intl.optionalLabel)}}function Zn(n,o){if(n&1&&(d(0,"div",6),u(1),c()),n&2){let e=p();s(),E(e.errorMessage)}}var mn=["*"];function Xn(n,o){}function ei(n,o){if(n&1&&(se(0),ee(1,Xn,0,0,"ng-template",0)),n&2){let e=p();s(),m("cdkPortalOutlet",e._portal)}}var ti=["animatedContainer"],un=n=>({steps:n}),hn=n=>({step:n});function ai(n,o){n&1&&se(0)}function ni(n,o){if(n&1&&(d(0,"div",5),G(1,9)(2,6),c()),n&2){let e=p(2),t=A(6);s(),m("ngTemplateOutlet",e.headerPrefix()),s(),m("ngTemplateOutlet",t)("ngTemplateOutletContext",je(3,un,e.steps))}}function ii(n,o){if(n&1&&G(0,6),n&2){let e=p(2),t=A(6);m("ngTemplateOutlet",t)("ngTemplateOutletContext",je(2,un,e.steps))}}function ri(n,o){if(n&1&&(d(0,"div",10,2),G(2,9),c()),n&2){let e=o.$implicit,t=o.$index,a=p(2);de("mat-horizontal-stepper-content-"+a._getAnimationDirection(t)),m("id",a._getStepContentId(t)),x("aria-labelledby",a._getStepLabelId(t))("inert",a.selectedIndex===t?null:""),s(2),m("ngTemplateOutlet",e.content)}}function oi(n,o){if(n&1&&(d(0,"div",3),b(1,ni,3,5,"div",5)(2,ii,1,4,"ng-container",6),d(3,"div",7),N(4,ri,3,6,"div",8,re),c()()),n&2){let e=p();s(),v(e.headerPrefix()?1:2),s(3),P(e.steps)}}function si(n,o){if(n&1&&G(0,9),n&2){let e=p(2);m("ngTemplateOutlet",e.headerPrefix())}}function li(n,o){if(n&1&&(d(0,"div",11),G(1,6),d(2,"div",12,2)(4,"div",13)(5,"div",14),G(6,9),c()()()()),n&2){let e=o.$implicit,t=o.$index,a=o.$index,i=o.$count,r=p(2),w=A(4);s(),m("ngTemplateOutlet",w)("ngTemplateOutletContext",je(10,hn,e)),s(),V("mat-stepper-vertical-line",a!==i-1)("mat-vertical-content-container-active",r.selectedIndex===t),x("inert",r.selectedIndex===t?null:""),s(2),m("id",r._getStepContentId(t)),x("aria-labelledby",r._getStepLabelId(t)),s(2),m("ngTemplateOutlet",e.content)}}function di(n,o){if(n&1&&(d(0,"div",4),b(1,si,1,1,"ng-container",9),N(2,li,7,12,"div",11,re),c()),n&2){let e=p();s(),v(e.headerPrefix()?1:-1),s(),P(e.steps)}}function ci(n,o){if(n&1){let e=S();d(0,"mat-step-header",15),y("click",function(){let a=g(e).step;return f(a.select())})("keydown",function(a){g(e);let i=p();return f(i._onKeydown(a))}),c()}if(n&2){let e=o.step,t=p();V("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),m("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),x("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function pi(n,o){n&1&&k(0,"div",17)}function mi(n,o){if(n&1&&(G(0,6),b(1,pi,1,0,"div",17)),n&2){let e=o.$implicit,t=o.$index,a=o.$count;p(2);let i=A(4);m("ngTemplateOutlet",i)("ngTemplateOutletContext",je(3,hn,e)),s(),v(t!==a-1?1:-1)}}function ui(n,o){if(n&1&&(d(0,"div",16),N(1,mi,2,5,null,null,re),c()),n&2){let e=o.steps;s(),P(e)}}var Yt=(()=>{class n extends Bt{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Ce(n)))(a||n)}})();static \u0275dir=I({type:n,selectors:[["","matStepLabel",""]],features:[X]})}return n})(),hi=(()=>{class n{changes=new H;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=ie({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),zt=(()=>{class n extends Lt{_intl=l(hi);_focusMonitor=l(fa);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=l(fe);e.load(nt),e.load(Se);let t=l(T);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof Yt?null:this.label}_templateLabel(){return this.label instanceof Yt?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,a){t&2&&(de("mat-"+(a.color||"primary")),V("mat-step-header-empty-label",a._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[X],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,a){if(t&1&&(k(0,"div",0),d(1,"div")(2,"div",1),b(3,jn,1,6,"ng-container",2)(4,$n,2,1),c()(),d(5,"div",3),b(6,Un,2,1,"div",4)(7,Gn,2,1,"div",4),b(8,Jn,2,1,"div",5),b(9,Zn,2,1,"div",6),c()),t&2){let i;m("matRippleTrigger",a._getHostElement())("matRippleDisabled",a.disableRipple),s(),de(ca("mat-step-icon-state-",a.state," mat-step-icon")),V("mat-step-icon-selected",a.selected),s(2),v(a.iconOverrides&&a.iconOverrides[a.state]?3:4),s(2),V("mat-step-label-active",a.active)("mat-step-label-selected",a.selected)("mat-step-label-error",a.state=="error"),s(),v((i=a._templateLabel())?6:a._stringLabel()?7:-1,i),s(2),v(a._hasOptionalLabel()?8:-1),s(),v(a._hasErrorLabel()?9:-1)}},dependencies:[Ma,Vt,Ee],styles:[`.mat-step-header {
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
`],encapsulation:2,changeDetection:0})}return n})(),_i=(()=>{class n{templateRef=l(he);name;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),gi=(()=>{class n{_template=l(he);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),fi=(()=>{class n extends bt{_errorStateMatcher=l(ut,{skipSelf:!0});_viewContainerRef=l(tt);_isSelected=O.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(ia(()=>this._stepper.selectionChange.pipe(ta(e=>e.selectedStep===this),j(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new Nt(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let a=this._errorStateMatcher.isErrorState(e,t),i=!!(e&&e.invalid&&this.interacted);return a||i}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Ce(n)))(a||n)}})();static \u0275cmp=M({type:n,selectors:[["mat-step"]],contentQueries:function(t,a,i){if(t&1&&le(i,Yt,5)(i,gi,5),t&2){let r;D(r=C())&&(a.stepLabel=r.first),D(r=C())&&(a._lazyContent=r.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[te([{provide:ut,useExisting:n},{provide:bt,useExisting:n}]),X],ngContentSelectors:mn,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,a){t&1&&(oe(),ee(0,ei,2,1,"ng-template"))},dependencies:[qe],encapsulation:2,changeDetection:0})}return n})(),bi=(()=>{class n extends Ke{_ngZone=l(Ye);_renderer=l(He);_animationsDisabled=We();_cleanupTransition;_isAnimating=_(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new ze;_icons;animationDone=new h;disableRipple=!1;color;labelPosition="end";headerPosition="top";headerPrefix=_e(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!l(at).isBrowser;constructor(){super();let t=l(K).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(ne(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(ne(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(j(null),ne(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let a=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),i=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(a||i)&&this._animatedContainers.find(w=>w.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,a,i){if(t&1&&le(i,fi,5)(i,_i,5),t&2){let r;D(r=C())&&(a._steps=r),D(r=C())&&(a._icons=r)}},viewQuery:function(t,a){if(t&1&&Q(zt,5)(ti,5),t&2){let i;D(i=C())&&(a._stepHeader=i),D(i=C())&&(a._animatedContainers=i)}},hostVars:14,hostBindings:function(t,a){t&2&&(Me("--mat-stepper-animation-duration",a._getAnimationDuration()),V("mat-stepper-horizontal",a.orientation==="horizontal")("mat-stepper-vertical",a.orientation==="vertical")("mat-stepper-label-position-end",a.orientation==="horizontal"&&a.labelPosition=="end")("mat-stepper-label-position-bottom",a.orientation==="horizontal"&&a.labelPosition=="bottom")("mat-stepper-header-position-bottom",a.headerPosition==="bottom")("mat-stepper-animating",a._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[te([{provide:Ke,useExisting:n}]),X],ngContentSelectors:mn,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,a){if(t&1&&(oe(),b(0,ai,1,0),b(1,oi,6,1,"div",3)(2,di,4,1,"div",4),ee(3,ci,1,27,"ng-template",null,0,It)(5,ui,3,0,"ng-template",null,1,It)),t&2){let i;v(a._isServer?0:-1),s(),v((i=a.orientation)==="horizontal"?1:i==="vertical"?2:-1)}},dependencies:[Vt,zt],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2,changeDetection:0})}return n})(),_n=(()=>{class n extends cn{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Ce(n)))(a||n)}})();static \u0275dir=I({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,a){t&2&&W("type",a.type)},features:[X]})}return n})();var gn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=we({type:n});static \u0275inj=De({providers:[ut],imports:[ct,pn,Ie,Ia,bi,zt,ke]})}return n})();var J=(function(n){return n[n.NEW=0]="NEW",n[n.VIEW=1]="VIEW",n[n.EDIT=2]="EDIT",n})(J||{});function wi(n,o){if(n&1){let e=S();d(0,"mat-chip-row",6),y("removed",function(){let a=g(e).$implicit,i=p();return f(i.removeTag(a))}),d(1,"span"),u(2),c(),d(3,"button",7),y("click",function(){let a=g(e).$implicit,i=p();return f(i.removeTag(a))}),d(4,"mat-icon"),u(5,"cancel"),c()()()}if(n&2){let e=o.$implicit,t=p();m("highlighted",!0)("editable",!t.disabled())("removable",!t.disabled()),s(2),E(e),s(),m("disabled",t.disabled())}}var fn=(()=>{class n{constructor(){this.separatorKeysCodes=[13,188,32],this.tags=pe([]),this.disabled=_e(!1)}addTag(e){let t=(e.value||"").toLowerCase().trim();t&&this.tags.update(a=>[...a,t]),e.chipInput.clear()}removeTag(e){this.tags.update(t=>t.filter(a=>a!==e))}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=M({type:n,selectors:[["app-tags-input"]],inputs:{tags:[1,"tags"],disabled:[1,"disabled"]},outputs:{tags:"tagsChange"},decls:9,vars:4,consts:[["chipGrid",""],[1,"w-full"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Favorite Tags",1,"w-full","rounded-md","focus:ring-indigo-500","focus:border-indigo-500",3,"matChipInputTokenEnd","disabled","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["aria-label","Tags",1,"flex","flex-wrap","gap-2"],[1,"bg-indigo-100","text-indigo-700","border","rounded-full","px-4","py-2","shadow-sm","flex","items-center",3,"highlighted","editable","removable"],[1,"bg-indigo-100","text-indigo-700","border","rounded-full","px-4","py-2","shadow-sm","flex","items-center",3,"removed","highlighted","editable","removable"],["matChipRemove","",1,"ml-2","text-red-500","hover:text-red-700",3,"click","disabled"]],template:function(t,a){if(t&1&&(d(0,"div")(1,"div",1)(2,"mat-form-field",2)(3,"input",3),y("matChipInputTokenEnd",function(r){return a.addTag(r)}),c()()(),d(4,"div",1)(5,"mat-chip-grid",4,0),N(7,wi,6,5,"mat-chip-row",5,re),c()()()),t&2){let i=A(6);s(3),m("disabled",a.disabled())("matChipInputFor",i)("matChipInputSeparatorKeyCodes",a.separatorKeysCodes)("matChipInputAddOnBlur",!0),s(4),P(a.tags())}},dependencies:[gt,nn,rn,tn,an,Ie,Ee,mt,pt,_t,ht,Ve],encapsulation:2})}}return n})();var bn=(()=>{class n{constructor(){this.httpClient=l(ha),this.authService=l(ja)}enhance(e){let t=this.authService.getCurrentUserContext();return this.httpClient.post(Qa.journeyApi+"/ai/enhance-narration",e,{headers:{Authorization:`Bearer ${t.accessToken}`,"Content-Type":"application/json"}})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function ki(n,o){if(n&1){let e=S();d(0,"button",14),y("click",function(){let a=g(e).$implicit,i=p(2);return f(i.enhanceNarration(a))}),u(1),c()}if(n&2){let e=o.$implicit;s(),ce(" ",e," ")}}function Si(n,o){if(n&1){let e=S();d(0,"mat-button-toggle-group",9),Y("ngModelChange",function(a){g(e);let i=p();return B(i.markdownStyle,a)||(i.markdownStyle=a),f(a)}),d(1,"mat-button-toggle",10),u(2,"Edit"),c(),d(3,"mat-button-toggle",11),u(4,"Preview"),c()(),d(5,"button",12),u(6," Enhance "),d(7,"mat-icon"),u(8,"auto_awesome"),c()(),d(9,"mat-menu",null,1),N(11,ki,2,1,"button",13,re),c()}if(n&2){let e=A(10),t=p();L("ngModel",t.markdownStyle),s(5),m("matMenuTriggerFor",e)("disabled",t.disabled()),s(6),P(t.tones)}}function Ai(n,o){n&1&&(d(0,"div"),u(1,"Memories is required."),c())}function Ei(n,o){n&1&&(d(0,"div"),u(1,"Memories must be at least 10 characters long."),c())}function Ii(n,o){n&1&&(d(0,"div"),u(1,"Memories must be at most 5000 characters long."),c())}var vn=(()=>{class n{constructor(){this.tones=["\u{1F30D} Adventurous","\u2764\uFE0F Romantic","\u{1F4A1} Inspirational","\u{1F3A8} Poetic","\u{1F604} Funny","\u{1F9D8} Minimalistic"],this.narrationEnhancerService=l(bn),this.markdownStyle=pe("Source"),this.disabled=_e(!1),this.title=_e(""),this.narration=pe("")}enhanceNarration(e){console.log(e),this.narrationEnhancerService.enhance({narration:this.narration(),tone:e}).subscribe({next:t=>this.narration.set(t.narration)})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=M({type:n,selectors:[["app-narration"]],inputs:{markdownStyle:[1,"markdownStyle"],disabled:[1,"disabled"],title:[1,"title"],narration:[1,"narration"]},outputs:{markdownStyle:"markdownStyleChange",narration:"narrationChange"},decls:13,vars:10,consts:[["description","ngModel"],["toneMenu","matMenu"],[1,"flex","gap-2","flex-col"],[1,"inline-flex","gap-2","align-middle","content-center","items-center"],["for","description",1,"text-sm","font-semibold"],["rows","15","id","description","name","description","placeholder","Detailed information about the Journey","required","","minlength","10","maxlength","5000",1,"w-full","p-4","border","rounded-md","focus:outline-hidden","focus:ring","focus:ring-indigo-500","dark:bg-gray-800",3,"ngModelChange","ngModel","hidden"],[1,"h-96","overflow-auto",3,"hidden"],[3,"title","markdownText"],[1,"text-red-500","text-sm","mt-2",3,"hidden"],["name","markdownStyle","aria-label","Markdown Style","hideSingleSelectionIndicator","true",3,"ngModelChange","ngModel"],["value","Source",1,"text-sm"],["value","Preview",1,"text-sm"],["mat-raised-button","","type","button",3,"matMenuTriggerFor","disabled"],["mat-menu-item",""],["mat-menu-item","",3,"click"]],template:function(t,a){if(t&1){let i=S();d(0,"div",2)(1,"div",3)(2,"label",4),u(3,"Memories"),c(),b(4,Si,13,3),c(),d(5,"textarea",5,0),Y("ngModelChange",function(w){return g(i),B(a.narration,w)||(a.narration=w),f(w)}),c(),d(7,"div",6),k(8,"app-display-markdown-component",7),c(),d(9,"div",8),b(10,Ai,2,0,"div"),b(11,Ei,2,0,"div"),b(12,Ii,2,0,"div"),c()()}if(t&2){let i=A(6);s(4),v(a.disabled()?-1:4),s(),L("ngModel",a.narration),m("hidden",a.markdownStyle()==="Preview"),s(2),m("hidden",a.markdownStyle()==="Source"),s(),m("title",a.title())("markdownText",a.narration()),s(),m("hidden",i.valid||i.pristine),s(),v(i.errors!=null&&i.errors.required?10:-1),s(),v(i.errors!=null&&i.errors.minlength?11:-1),s(),v(i.errors!=null&&i.errors.maxlength?12:-1)}},dependencies:[ln,Ve,it,rt,st,lt,dt,ot,ft,on,sn,Ha,Ya,Ba,za,Te,be,Ie,Ee],encapsulation:2})}}return n})();var Vi=["mat-calendar-body",""];function Ti(n,o){return this._trackRow(o)}var Sn=(n,o)=>o.id;function Fi(n,o){if(n&1&&($(0,"tr",0)(1,"td",3),u(2),U()()),n&2){let e=p();s(),Me("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),x("colspan",e.numCols),s(),ce(" ",e.label," ")}}function Ri(n,o){if(n&1&&($(0,"td",3),u(1),U()),n&2){let e=p(2);Me("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),x("colspan",e._firstRowOffset),s(),ce(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Oi(n,o){if(n&1){let e=S();$(0,"td",6)(1,"button",7),da("click",function(a){let i=g(e).$implicit,r=p(2);return f(r._cellClicked(i,a))})("focus",function(a){let i=g(e).$implicit,r=p(2);return f(r._emitActiveDateChange(i,a))}),$(2,"span",8),u(3),U(),la(4,"span",9),U()()}if(n&2){let e=o.$implicit,t=o.$index,a=p().$index,i=p();Me("width",i._cellWidth)("padding-top",i._cellPadding)("padding-bottom",i._cellPadding),x("data-mat-row",a)("data-mat-col",t),s(),de(e.cssClasses),V("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",i._isActiveCell(a,t))("mat-calendar-body-range-start",i._isRangeStart(e.compareValue))("mat-calendar-body-range-end",i._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",i._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",i._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",i._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",i._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",i._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",i._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",i._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",i._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",i._isInPreview(e.compareValue)),W("tabIndex",i._isActiveCell(a,t)?0:-1),x("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",i._isSelected(e.compareValue))("aria-current",i.todayValue===e.compareValue?"date":null)("aria-describedby",i._getDescribedby(e.compareValue)),s(),V("mat-calendar-body-selected",i._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",i._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",i.todayValue===e.compareValue),s(),ce(" ",e.displayValue," ")}}function Ni(n,o){if(n&1&&($(0,"tr",1),b(1,Ri,2,6,"td",4),N(2,Oi,5,49,"td",5,Sn),U()),n&2){let e=o.$implicit,t=o.$index,a=p();s(),v(t===0&&a._firstRowOffset?1:-1),s(),P(e)}}function Pi(n,o){if(n&1&&(d(0,"th",2)(1,"span",6),u(2),c(),d(3,"span",3),u(4),c()()),n&2){let e=o.$implicit;s(2),E(e.long),s(2),E(e.narrow)}}var Li=["*"];function Bi(n,o){}function Yi(n,o){if(n&1){let e=S();d(0,"mat-month-view",4),Y("activeDateChange",function(a){g(e);let i=p();return B(i.activeDate,a)||(i.activeDate=a),f(a)}),y("_userSelection",function(a){g(e);let i=p();return f(i._dateSelected(a))})("dragStarted",function(a){g(e);let i=p();return f(i._dragStarted(a))})("dragEnded",function(a){g(e);let i=p();return f(i._dragEnded(a))}),c()}if(n&2){let e=p();L("activeDate",e.activeDate),m("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function zi(n,o){if(n&1){let e=S();d(0,"mat-year-view",5),Y("activeDateChange",function(a){g(e);let i=p();return B(i.activeDate,a)||(i.activeDate=a),f(a)}),y("monthSelected",function(a){g(e);let i=p();return f(i._monthSelectedInYearView(a))})("selectedChange",function(a){g(e);let i=p();return f(i._goToDateInView(a,"month"))}),c()}if(n&2){let e=p();L("activeDate",e.activeDate),m("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Hi(n,o){if(n&1){let e=S();d(0,"mat-multi-year-view",6),Y("activeDateChange",function(a){g(e);let i=p();return B(i.activeDate,a)||(i.activeDate=a),f(a)}),y("yearSelected",function(a){g(e);let i=p();return f(i._yearSelectedInMultiYearView(a))})("selectedChange",function(a){g(e);let i=p();return f(i._goToDateInView(a,"year"))}),c()}if(n&2){let e=p();L("activeDate",e.activeDate),m("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function ji(n,o){}var Wi=["button"],Qi=[[["","matDatepickerToggleIcon",""]]],qi=["[matDatepickerToggleIcon]"];function Ki(n,o){n&1&&(Be(),d(0,"svg",2),k(1,"path",3),c())}var Pe=(()=>{class n{changes=new H;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ie({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),$i=0,Ge=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=$i++;cssClasses;constructor(o,e,t,a,i,r=o,w){this.value=o,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=r,this.rawValue=w,this.cssClasses=i instanceof Set?Array.from(i):i}},Ui={passive:!1,capture:!0},vt={passive:!0,capture:!0},yn={passive:!0},Ne=(()=>{class n{_elementRef=l(K);_ngZone=l(Ye);_platform=l(at);_intl=l(Pe);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new h;previewChange=new h;activeDateChange=new h;dragStarted=new h;dragEnded=new h;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=l(et);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=l(He),t=l(Ae);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),l(fe).load(nt),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,i=[e.listen(a,"touchmove",this._touchmoveHandler,Ui),e.listen(a,"mouseenter",this._enterHandler,vt),e.listen(a,"focus",this._enterHandler,vt),e.listen(a,"mouseleave",this._leaveHandler,vt),e.listen(a,"blur",this._leaveHandler,vt),e.listen(a,"mousedown",this._mousedownHandler,yn),e.listen(a,"touchstart",this._mousedownHandler,yn)];this._platform.isBrowser&&i.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=i})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:i}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?i-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/i}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/i}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){St(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Wt(e,this.startValue,this.endValue)}_isRangeEnd(e){return Qt(e,this.startValue,this.endValue)}_isInRange(e){return qt(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Wt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let i=this.rows[t][a-1];if(!i){let r=this.rows[t-1];i=r&&r[r.length-1]}return i&&!this._isRangeEnd(i.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let i=this.rows[t][a+1];if(!i){let r=this.rows[t+1];i=r&&r[0]}return i&&!this._isRangeStart(i.compareValue)}_isComparisonEnd(e){return Qt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return qt(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Wt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Qt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return qt(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Dn(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),jt(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=jt(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Dn(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=jt(e);if(t){let a=t.getAttribute("data-mat-row"),i=t.getAttribute("data-mat-col");if(a&&i)return this.rows[parseInt(a)]?.[parseInt(i)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Z],attrs:Vi,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(b(0,Fi,3,6,"tr",0),N(1,Ni,4,1,"tr",1,Ti,!0),$(3,"span",2),u(4),U(),$(5,"span",2),u(6),U(),$(7,"span",2),u(8),U(),$(9,"span",2),u(10),U()),t&2&&(v(a._firstRowOffset<a.labelMinRequiredCells?0:-1),s(),P(a.rows),s(2),W("id",a._startDateLabelId),s(),ce(" ",a.startDateAccessibleName,`
`),s(),W("id",a._endDateLabelId),s(),ce(" ",a.endDateAccessibleName,`
`),s(),W("id",a._comparisonStartDateLabelId),s(),Et(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),s(),W("id",a._comparisonEndDateLabelId),s(),Et(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Ht(n){return n?.nodeName==="TD"}function jt(n){let o;return Ht(n)?o=n:Ht(n.parentNode)?o=n.parentNode:Ht(n.parentNode?.parentNode)&&(o=n.parentNode.parentNode),o?.getAttribute("data-mat-row")!=null?o:null}function Wt(n,o,e){return e!==null&&o!==e&&n<e&&n===o}function Qt(n,o,e){return o!==null&&o!==e&&n>=o&&n===e}function qt(n,o,e,t){return t&&o!==null&&e!==null&&o!==e&&n>=o&&n<=e}function Dn(n){let o=n.changedTouches[0];return document.elementFromPoint(o.clientX,o.clientY)}var z=class{start;end;_disableStructuralEquivalency;constructor(o,e){this.start=o,this.end=e}},Je=(()=>{class n{selection;_adapter;_selectionChanged=new H;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){sa()};static \u0275prov=ie({token:n,factory:n.\u0275fac})}return n})(),Gi=(()=>{class n extends Je{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(ra(q))};static \u0275prov=ie({token:n,factory:n.\u0275fac})}return n})();var An={provide:Je,useFactory:()=>l(Je,{optional:!0,skipSelf:!0})||new Gi(l(q))};var En=new Le("MAT_DATE_RANGE_SELECTION_STRATEGY");var Kt=7,Ji=0,Cn=(()=>{class n{_changeDetectorRef=l(T);_dateFormats=l(Fe,{optional:!0});_dateAdapter=l(q,{optional:!0});_dir=l(ge,{optional:!0});_rangeStrategy=l(En,{optional:!0});_rerenderSubscription=O.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof z?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new h;_userSelection=new h;dragStarted=new h;dragEnded=new h;activeDateChange=new h;_matCalendarBody;_monthLabel=_("");_weeks=_([]);_firstWeekOffset=_(0);_rangeStart=_(null);_rangeEnd=_(null);_comparisonRangeStart=_(null);_comparisonRangeEnd=_(null);_previewStart=_(null);_previewEnd=_(null);_isRange=_(!1);_todayDate=_(null);_weekdays=_([]);constructor(){l(fe).load(Se),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(j(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),i,r;this._selected instanceof z?(i=this._getDateInCurrentMonth(this._selected.start),r=this._getDateInCurrentMonth(this._selected.end)):i=r=this._getDateInCurrentMonth(this._selected),(i!==t||r!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ae(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Kt+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Kt),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,i=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)),this.activeDrag&&a){let r=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);r&&(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),i=this._dateAdapter.getDayOfWeekNames("long").map((r,w)=>({long:r,narrow:t[w],id:Ji++}));this._weekdays.set(i.slice(e).concat(i.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let i=0,r=this._firstWeekOffset();i<e;i++,r++){r==Kt&&(a.push([]),r=0);let w=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),i+1),Nn=this._shouldEnableDate(w),Pn=this._dateAdapter.format(w,this._dateFormats.display.dateA11yLabel),Ln=this.dateClass?this.dateClass(w,"month"):void 0;a[a.length-1].push(new Ge(i+1,t[i],Pn,Nn,Ln,this._getCellCompareValue(w),w))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),i=this._dateAdapter.getDate(e);return new Date(t,a,i).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof z?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&Q(Ne,5),t&2){let i;D(i=C())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Z],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),N(3,Pi,5,2,"th",2,Sn),c(),d(5,"tr",3),k(6,"th",4),c()(),d(7,"tbody",5),y("selectedValueChange",function(r){return a._dateSelected(r)})("activeDateChange",function(r){return a._updateActiveDate(r)})("previewChange",function(r){return a._previewChanged(r)})("dragStarted",function(r){return a.dragStarted.emit(r)})("dragEnded",function(r){return a._dragEnded(r)})("keyup",function(r){return a._handleCalendarBodyKeyup(r)})("keydown",function(r){return a._handleCalendarBodyKeydown(r)}),c()()),t&2&&(s(3),P(a._weekdays()),s(4),m("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName))},dependencies:[Ne],encapsulation:2,changeDetection:0})}return n})(),R=24,$t=4,wn=(()=>{class n{_changeDetectorRef=l(T);_dateAdapter=l(q,{optional:!0});_dir=l(ge,{optional:!0});_rerenderSubscription=O.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),In(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof z?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new h;yearSelected=new h;activeDateChange=new h;_matCalendarBody;_years=_([]);_todayYear=_(0);_selectedYear=_(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(j(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-$e(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let i=0,r=[];i<R;i++)r.push(t+i),r.length==$t&&(a.push(r.map(w=>this._createCellForYear(w))),r=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),i=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-$t);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,$t);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-$e(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,R-$e(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-R*10:-R);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?R*10:R);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return $e(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),i=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Ge(e,a,a,this._shouldEnableYear(e),i)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof z){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&Q(Ne,5),t&2){let i;D(i=C())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),k(3,"th",2),c()(),d(4,"tbody",3),y("selectedValueChange",function(r){return a._yearSelected(r)})("activeDateChange",function(r){return a._updateActiveDate(r)})("keyup",function(r){return a._handleCalendarBodyKeyup(r)})("keydown",function(r){return a._handleCalendarBodyKeydown(r)}),c()()),t&2&&(s(4),m("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[Ne],encapsulation:2,changeDetection:0})}return n})();function In(n,o,e,t,a){let i=n.getYear(o),r=n.getYear(e),w=Vn(n,t,a);return Math.floor((i-w)/R)===Math.floor((r-w)/R)}function $e(n,o,e,t){let a=n.getYear(o);return Zi(a-Vn(n,e,t),R)}function Vn(n,o,e){let t=0;return e?t=n.getYear(e)-R+1:o&&(t=n.getYear(o)),t}function Zi(n,o){return(n%o+o)%o}var Mn=(()=>{class n{_changeDetectorRef=l(T);_dateFormats=l(Fe,{optional:!0});_dateAdapter=l(q,{optional:!0});_dir=l(ge,{optional:!0});_rerenderSubscription=O.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof z?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new h;monthSelected=new h;activeDateChange=new h;_matCalendarBody;_months=_([]);_yearLabel=_("");_todayMonth=_(null);_selectedMonth=_(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(j(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let i=this._getDateFromMonth(t);this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),r=this.dateClass?this.dateClass(a,"year"):void 0;return new Ge(e,t.toLocaleUpperCase(),i,this._shouldEnableMonth(e),r)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let i=a;this._dateAdapter.getMonth(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),i=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>i}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),i=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<i}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof z?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&Q(Ne,5),t&2){let i;D(i=C())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),k(3,"th",2),c()(),d(4,"tbody",3),y("selectedValueChange",function(r){return a._monthSelected(r)})("activeDateChange",function(r){return a._updateActiveDate(r)})("keyup",function(r){return a._handleCalendarBodyKeyup(r)})("keydown",function(r){return a._handleCalendarBodyKeydown(r)}),c()()),t&2&&(s(4),m("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[Ne],encapsulation:2,changeDetection:0})}return n})(),Tn=(()=>{class n{_intl=l(Pe);calendar=l(Ut);_dateAdapter=l(q,{optional:!0});_dateFormats=l(Fe,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){l(fe).load(Se);let e=l(T);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-R))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:R))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):In(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-$e(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+R-1,i=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),r=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[i,r]}_periodButtonLabelId=l(Ae).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Li,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(oe(),d(0,"div",0)(1,"div",1)(2,"span",2),u(3),c(),d(4,"button",3),y("click",function(){return a.currentPeriodClicked()}),d(5,"span",4),u(6),c(),Be(),d(7,"svg",5),k(8,"polygon",6),c()(),kt(),k(9,"div",7),se(10),d(11,"button",8),y("click",function(){return a.previousClicked()}),Be(),d(12,"svg",9),k(13,"path",10),c()(),kt(),d(14,"button",11),y("click",function(){return a.nextClicked()}),Be(),d(15,"svg",9),k(16,"path",12),c()()()()),t&2&&(s(2),m("id",a._periodButtonLabelId),s(),E(a.periodButtonDescription),s(),x("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),s(2),E(a.periodButtonText),s(),V("mat-calendar-invert",a.calendar.currentView!=="month"),s(4),m("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),x("aria-label",a.prevButtonLabel),s(3),m("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),x("aria-label",a.nextButtonLabel))},dependencies:[be,Pt,Wa],encapsulation:2,changeDetection:0})}return n})(),Ut=(()=>{class n{_dateAdapter=l(q,{optional:!0});_dateFormats=l(Fe,{optional:!0});_changeDetectorRef=l(T);_elementRef=l(K);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof z?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new h;yearSelected=new h;monthSelected=new h;viewChanged=new h(!0);_userSelection=new h;_userDragDrop=new h;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new H;constructor(){this._intlChanges=l(Pe).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Ot(this.headerComponent||Tn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,i=t||a||e.dateFilter;if(i&&!i.firstChange){let r=this._getCurrentViewComponent();r&&(this._elementRef.nativeElement.contains(Qe())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),r._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof z||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&Q(Cn,5)(Mn,5)(wn,5),t&2){let i;D(i=C())&&(a.monthView=i.first),D(i=C())&&(a.yearView=i.first),D(i=C())&&(a.multiYearView=i.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[te([An]),Z],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(ee(0,Bi,0,0,"ng-template",0),d(1,"div",1),b(2,Yi,1,11,"mat-month-view",2)(3,zi,1,6,"mat-year-view",3)(4,Hi,1,6,"mat-multi-year-view",3),c()),t&2){let i;m("cdkPortalOutlet",a._calendarHeaderPortal),s(2),v((i=a.currentView)==="month"?2:i==="year"?3:i==="multi-year"?4:-1)}},dependencies:[qe,ba,Cn,Mn,wn],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),Xi=new Le("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(et);return()=>Ta(n)}}),Fn=(()=>{class n{_elementRef=l(K);_animationsDisabled=We();_changeDetectorRef=l(T);_globalModel=l(Je);_dateAdapter=l(q);_ngZone=l(Ye);_rangeSelectionStrategy=l(En,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new H;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(l(fe).load(Se),this._closeButtonText=l(Pe).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=l(He);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,i=t instanceof z;if(i&&this._rangeSelectionStrategy){let r=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(r,this)}else a&&(i||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&Q(Ut,5),t&2){let i;D(i=C())&&(a._calendar=i.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(de(a.color?"mat-"+a.color:""),V("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(d(0,"div",0)(1,"mat-calendar",1),y("yearSelected",function(r){return a.datepicker._selectYear(r)})("monthSelected",function(r){return a.datepicker._selectMonth(r)})("viewChanged",function(r){return a.datepicker._viewChanged(r)})("_userSelection",function(r){return a._handleUserSelection(r)})("_userDragDrop",function(r){return a._handleUserDragDrop(r)}),c(),ee(2,ji,0,0,"ng-template",2),d(3,"button",3),y("focus",function(){return a._closeButtonFocused=!0})("blur",function(){return a._closeButtonFocused=!1})("click",function(){return a.datepicker.close()}),u(4),c()()),t&2&&(V("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),x("aria-modal",!0)("aria-labelledby",a._dialogLabelId??void 0),s(),de(a.datepicker.panelClass),m("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),s(),m("cdkPortalOutlet",a._actionsPortal),s(),V("cdk-visually-hidden",!a._closeButtonFocused),m("color",a.color||"primary"),s(),E(a._closeButtonText))},dependencies:[va,Ut,qe,be],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),xn=(()=>{class n{_injector=l(et);_viewContainerRef=l(tt);_dateAdapter=l(q,{optional:!0});_dir=l(ge,{optional:!0});_model=l(Je);_animationsDisabled=We();_scrollStrategy=l(Xi);_inputStateChanges=O.EMPTY;_document=l(oa);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new h;monthSelected=new h;viewChanged=new h(!0);dateClass;openedStream=new h;closedStream=new h;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Ca(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=l(Ae).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new H;_changeDetectorRef=l(T);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof Oa&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Qe(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:i}=this._componentRef;a._animationDone.pipe(na(1)).subscribe(()=>{let r=this._document.activeElement;e&&(!r||r===this._document.activeElement||i.nativeElement.contains(r))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Ot(Fn,this._viewContainerRef),a=this._overlayRef=Pa(this._injector,new Fa({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Va(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(i=>{i&&i.preventDefault(),this.close()}),a.keydownEvents().subscribe(i=>{let r=i.keyCode;(r===38||r===40||r===37||r===39||r===33||r===34)&&i.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||St(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Na(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Ra(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",i=this.yPosition==="above"?"bottom":"top",r=i==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:r,overlayX:t,overlayY:i},{originX:t,originY:i,overlayX:t,overlayY:r},{originX:a,originY:r,overlayX:a,overlayY:i},{originX:a,originY:i,overlayX:a,overlayY:r}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Xe(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(aa(a=>a.keyCode===27&&!ae(a)||this.datepickerInput&&ae(a,"altKey")&&a.keyCode===38&&t.every(i=>!ae(a,i)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",F],disabled:[2,"disabled","disabled",F],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",F],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",F]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Z]})}return n})(),Rn=(()=>{class n extends xn{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Ce(n)))(a||n)}})();static \u0275cmp=M({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[te([An,{provide:xn,useExisting:n}]),X],decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})}return n})(),Oe=class{target;targetElement;value=null;constructor(o,e){this.target=o,this.targetElement=e,this.value=this.target.value}},er=(()=>{class n{_elementRef=l(K);_dateAdapter=l(q,{optional:!0});_dateFormats=l(Fe,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new h;dateInput=new h;stateChanges=new H;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=O.EMPTY;_localeSubscription=O.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new Oe(this,this._elementRef.nativeElement)),this.dateChange.emit(new Oe(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){tr(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];ae(e,"altKey")&&e.keyCode===40&&t.every(i=>!ae(e,i))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,i=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(i),i=this._dateAdapter.getValidDateOrNull(i);let r=!this._dateAdapter.sameDate(i,this.value);!i||r?this._cvaOnChange(i):(t&&!this.value&&this._cvaOnChange(i),a!==this._lastValueValid&&this._validatorOnChange()),r&&(this._assignValue(i),this.dateInput.emit(new Oe(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Oe(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",F]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Z]})}return n})();function tr(n,o){let e=Object.keys(n);for(let t of e){let{previousValue:a,currentValue:i}=n[t];if(o.isDateInstance(a)&&o.isDateInstance(i)){if(!o.sameDate(a,i))return!0}else return!0}return!1}var ar={provide:xa,useExisting:xt(()=>Mt),multi:!0},nr={provide:ka,useExisting:xt(()=>Mt),multi:!0},Mt=(()=>{class n extends er{_formField=l(Za,{optional:!0});_closedSubscription=O.EMPTY;_openedSubscription=O.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=_(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Sa.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&y("input",function(r){return a._onInput(r)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(r){return a._onKeydown(r)}),t&2&&(W("disabled",a.disabled),x("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[te([ar,nr,{provide:Xa,useExisting:n}]),X]})}return n})(),ir=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),Zt=(()=>{class n{_intl=l(Pe);_changeDetectorRef=l(T);_stateChanges=O.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=l(new ma("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:ye(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:ye(),a=this.datepicker?Xe(this.datepicker.openedStream,this.datepicker.closedStream):ye();this._stateChanges.unsubscribe(),this._stateChanges=Xe(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,i){if(t&1&&le(i,ir,5),t&2){let r;D(r=C())&&(a._customIcon=r.first)}},viewQuery:function(t,a){if(t&1&&Q(Wi,5),t&2){let i;D(i=C())&&(a._button=i.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&y("click",function(r){return a._open(r)}),t&2&&(x("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),V("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",F],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Z],ngContentSelectors:qi,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(oe(Qi),d(0,"button",1,0),b(2,Ki,2,0,":svg:svg",2),se(3),c()),t&2&&(m("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),x("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),s(2),v(a._customIcon?-1:2))},dependencies:[Pt],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var On=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=we({type:n});static \u0275inj=De({providers:[Pe],imports:[Te,La,ya,ct,Fn,Zt,Tn,ke,wa]})}return n})();function or(n,o){n&1&&(d(0,"div"),u(1,"Name is required."),c())}function sr(n,o){n&1&&(d(0,"div"),u(1,"Name must be at least 5 characters long."),c())}function lr(n,o){n&1&&(d(0,"div"),u(1,"Name must be at most 50 characters long."),c())}function dr(n,o){n&1&&(d(0,"div"),u(1,"Journey Date is required."),c())}function cr(n,o){if(n&1){let e=S();d(0,"button",20),y("click",function(){g(e);let a=p(2);return f(a.enableEditMode())}),u(1," Edit "),c()}if(n&2){let e=p(2);m("hidden",e.mode()!==e.OperationMode.VIEW)}}function pr(n,o){if(n&1){let e=S();d(0,"form",5,0),y("ngSubmit",function(){g(e);let a=A(1),i=p();return f(i.save(a))}),d(2,"div",6)(3,"div")(4,"mat-form-field",7)(5,"mat-label"),u(6,"Journey Name"),c(),d(7,"input",8,1),Y("ngModelChange",function(a){g(e);let i=p();return B(i.journey().name,a)||(i.journey().name=a),f(a)}),c(),d(9,"mat-error",9),b(10,or,2,0,"div"),b(11,sr,2,0,"div"),b(12,lr,2,0,"div"),c()()(),d(13,"div")(14,"mat-form-field",7)(15,"mat-label"),u(16,"Journey Date"),c(),d(17,"input",10,2),y("dateChange",function(a){g(e);let i=p();return f(i.journeyDateChangeEvent(a))}),Y("ngModelChange",function(a){g(e);let i=p();return B(i.journeyDateTimestamp,a)||(i.journeyDateTimestamp=a),f(a)}),c(),k(19,"mat-datepicker-toggle",11)(20,"mat-datepicker",null,3),d(22,"mat-error",9),b(23,dr,2,0,"div"),c()()()(),d(24,"div",12)(25,"app-tags-input",13),Y("tagsChange",function(a){g(e);let i=p();return B(i.journey().tags,a)||(i.journey().tags=a),f(a)}),c()(),d(26,"div",12)(27,"app-narration",14),Y("narrationChange",function(a){g(e);let i=p();return B(i.journey().description,a)||(i.journey().description=a),f(a)}),c()(),d(28,"div",15)(29,"button",16),u(30," Create "),c(),ee(31,cr,2,1,"button",17),d(32,"button",18),u(33," Save "),c(),d(34,"button",19),u(35," Next "),c()()()}if(n&2){let e=A(1),t=A(8),a=A(18),i=A(21),r=p();s(7),L("ngModel",r.journey().name),m("readOnly",r.isReadOnly()),s(2),m("hidden",t.valid||t.pristine),s(),v(t.errors!=null&&t.errors.required?10:-1),s(),v(t.errors!=null&&t.errors.minlength?11:-1),s(),v(t.errors!=null&&t.errors.maxlength?12:-1),s(5),m("matDatepicker",i),L("ngModel",r.journeyDateTimestamp),m("readOnly",r.isReadOnly()),s(2),m("for",i),s(3),m("hidden",a.valid||a.pristine),s(),v(a.errors!=null&&a.errors.required?23:-1),s(2),L("tags",r.journey().tags),m("disabled",r.isReadOnly()),s(2),m("title",r.journey().name),L("narration",r.journey().description),m("disabled",r.isReadOnly())("markdownStyle",r.isReadOnly()?"Preview":"Source"),s(2),m("disabled",!e.form.valid)("hidden",r.mode()!==r.OperationMode.NEW),s(3),m("disabled",!e.form.valid)("hidden",r.mode()!==r.OperationMode.EDIT),s(2),m("disabled",r.journey().id==="")}}var Bs=(()=>{class n{constructor(){this.OperationMode=J,this.journeyService=l($a),this.notificationService=l(en),this.router=l(_a),this.datePipe=l(Tt),this.mode=pe(J.VIEW),this.isReadOnly=xe(()=>this.mode()==J.VIEW),this.journey=pe(new qa),this.journeyDateTimestamp=_(new Date),ga(this.journey).subscribe(e=>this.journeyDateTimestamp.set(new Date(e.journeyDate)))}onError(e,t){this.notificationService.showError(e),console.error(t)}onUpdateSuccess(e){this.journey.set(e),this.mode()===J.NEW&&this.router.navigate(["/journey",this.journey().id,"edit"],{state:{mode:J.VIEW}}).then(),this.mode.set(J.VIEW),this.notificationService.showSuccess("Journey details saved successfully.")}save(e){e.valid&&(this.mode()==J.NEW?this.createJourney():this.updateJourney())}createJourney(){this.journeyService.createJourney(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError("Unexpected error while saving data",e)})}updateJourney(){this.journeyService.saveJourneyBasicDetails(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError("Unexpected error while saving data",e)})}enableEditMode(){this.mode.set(J.EDIT)}journeyDateChangeEvent(e){this.journey.update(t=>ea(Xt({},t),{journeyDate:this.datePipe.transform(e.value,"yyyy-MM-dd")}))}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=M({type:n,selectors:[["app-edit-journey-memories-details"]],inputs:{mode:[1,"mode"],journey:[1,"journey"]},outputs:{mode:"modeChange",journey:"journeyChange"},features:[te([Tt])],decls:1,vars:1,consts:[["journeyForm","ngForm"],["name","ngModel"],["journeyDate","ngModel"],["picker",""],[1,"content-wrapper","flex","flex-col","gap-2"],[1,"content-wrapper","flex","flex-col","gap-2",3,"ngSubmit"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],["appearance","outline",1,"w-full"],["matInput","","type","text","id","name","name","name","placeholder","Name your Journey","maxlength","50","minlength","5","required","",1,"mt-1","w-full","rounded-md","focus:ring-indigo-500","focus:border-indigo-500",3,"ngModelChange","ngModel","readOnly"],[3,"hidden"],["matInput","","required","","placeholder","dd/mm/yyyy","name","journeyDate",3,"dateChange","ngModelChange","matDatepicker","ngModel","readOnly"],["matIconSuffix","",3,"for"],[1,"w-full"],[3,"tagsChange","tags","disabled"],[3,"narrationChange","title","narration","disabled","markdownStyle"],[1,"flex","flex-wrap","justify-center","gap-2","mt-4"],["mat-raised-button","","type","submit",1,"px-6","py-2",3,"disabled","hidden"],["mat-stroked-button","","type","button","class","px-6 py-2",3,"hidden","click",4,"appHasWriteAccess"],["mat-flat-button","","type","submit",1,"px-6","py-2",3,"disabled","hidden"],["mat-stroked-button","","type","button","matStepperNext","",1,"px-6","py-2",3,"disabled"],["mat-stroked-button","","type","button",1,"px-6","py-2",3,"click","hidden"]],template:function(t,a){t&1&&b(0,pr,36,23,"form",4),t&2&&v(a.journey()?0:-1)},dependencies:[Ve,Ea,it,rt,Aa,st,lt,dt,ot,Rt,ft,gt,gn,_n,fn,vn,_t,ht,pt,Ua,Ga,Ja,mt,On,Rn,Mt,Zt,dn,Te,be,Ka],encapsulation:2})}}return n})();export{Yt as a,gi as b,fi as c,bi as d,_n as e,gn as f,J as g,Bs as h};
