import {z as zt,O as Ot$1,H as Ht,L as Lt,c as ct$1}from'./chunk-DHsP2JOM.js';import {N as Nn$2,T as Tn$1,p as pa,W as Wa}from'./chunk-CbObNazw.js';import {p as pe$1}from'./chunk-DXv5ekmR.js';import {O as Ot,b as bt,n as nt}from'./chunk-xFT4Ndx3.js';import {aK as mh,aL as qs,cf as Yt,y as yt,c9 as kt,aM as ki,cg as h,D,bo as Wi,bv as V,aw as su,aj as xe,av as iu,bG as N,aN as lv,R as RD,aO as Eh,bB as gi,aP as Ew,b as wh,aR as rT,bl as zh,bm as Tw,bn as Cw,aH as LD,bu as se,bT as FE,aY as Ai,V as Ve$1,bw as ui,aE as qe,ar as v1,b5 as m,aW as Mr,bc as wu,ch as qr,n as nw,ci as pT,r as rw,t as tE,bE as Xh,aS as eg,bF as Qh,bp as Dr,ag as ue,ay as si$1,K as I1,m as mt,as as T,c1 as q,bM as U,L as On$1,N as In$1,P as ke,W as wn$1,X as Nn$1,Y as rt,_ as xt,$ as Pt,a2 as en$1,a3 as Kt,a as Fn$1,T as Tn$2,aV as at,aZ as P,a_ as wt,cj as z,aU as C1,bA as Wt,f as wt$1,O as Oh,M as Mi,l as ll,k as kh,bD as Fw,ck as Xw,aI as qy,aJ as _1,bH as Th,cl as _,b4 as qe$1,aD as ie,bx as ge,bW as pe,bi as im,b_ as ze,cm as ue$1,by as M1,j as iw,bR as ow,v as vw,s as sw,x as dw,z as qh,C as cd,E as ld,a$ as Rh,cn as Bh,a8 as _w,c5 as Lt$1,c6 as P$1,c7 as G,c8 as Nt,Q as Qw,a6 as dg,a7 as UE,a9 as ug,aa as WE,co as _r,aT as Fh,cp as aT,i as ag,aG as S,aQ as Dw,cq as iT,A as Ar,d as d$1,G as G$1,ab as Kw,B as gl}from'./main-AZ2R76TV.js';import {L,m as m$1}from'./chunk-BLdYcx_3.js';import {C}from'./chunk-CKim4HYa.js';import {J as Jt}from'./chunk-HlDFaiaq.js';import {N as Ne,H as He}from'./chunk-BbOfqJaD.js';import {P as Pe,q as q$1,c as ct,s as st,Q as Qt}from'./chunk-BKGhP0XY.js';import {l}from'./chunk-DCX06rK9.js';var un=["*"];function hn(t,l){t&1&&Dw(0);}var Ve=(()=>{class t{_elementRef=D(Mr);focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(n){return new(n||t)};static \u0275dir=LD({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return t})(),je=(()=>{class t{template=D(Dr);static \u0275fac=function(n){return new(n||t)};static \u0275dir=LD({type:t,selectors:[["","cdkStepLabel",""]]})}return t})();var H={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},fn=new S("STEPPER_GLOBAL_OPTIONS"),Fe=(()=>{class t{_stepperOptions;_stepper=D(de);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e);}_interacted=Ve$1(false);interactedStream=new qe;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e);}_state=Ve$1(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e);}_editable=Ve$1(true);optional=false;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e);}_completedOverride=Ve$1(null);index=Ve$1(-1);isSelected=mt(()=>this._stepper.selectedIndex===this.index());indicatorType=mt(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??H.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?H.ERROR:this._displayDefaultIndicatorType?!n||e?H.NUMBER:r?H.EDIT:H.DONE:n&&!e?H.DONE:n&&e?i:r&&e?H.EDIT:i});isNavigable=mt(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e);}_customError=Ve$1(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=D(fn,{optional:true});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==false;}select(){this._stepper.selected=this;}reset(){this._interacted.set(false),this._completedOverride()!=null&&this._completedOverride.set(false),this._customError()!=null&&this._customError.set(false),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset());}ngOnChanges(){this._stepper._stateChanged();}_markAsInteracted(){this._interacted()||(this._interacted.set(true),this.interactedStream.emit(this));}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=RD({type:t,selectors:[["cdk-step"]],contentQueries:function(n,i,r){if(n&1&&zh(r,je,5)(r,_,5),n&2){let d;Tw(d=Cw())&&(i.stepLabel=d.first),Tw(d=Cw())&&(i._childForms=d);}},viewQuery:function(n,i){if(n&1&&Qh(Dr,7),n&2){let r;Tw(r=Cw())&&(i.content=r.first);}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",_1],optional:[2,"optional","optional",_1],completed:[2,"completed","completed",_1],hasError:[2,"hasError","hasError",_1]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[qy],ngContentSelectors:un,decls:1,vars:0,template:function(n,i){n&1&&(Ew(),Th(0,hn,1,0,"ng-template"));},encapsulation:2})}return t})(),de=(()=>{class t{_dir=D(qe$1,{optional:true});_changeDetectorRef=D(C1);_elementRef=D(Mr);_destroyed=new ie;_keyManager;_steps;steps=new ui;_stepHeader;_sortedHeaders=new ui;get linear(){return this._linear()}set linear(e){this._linear.set(e);}_linear=Ve$1(false);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e);}_selectedIndex=Ve$1(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1;}selectionChange=new qe;selectedIndexChange=new qe;_groupId=D(ge).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical");}_orientation="horizontal";ngAfterContentInit(){this._steps.changes.pipe(iu(this._steps),wu(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges();});}ngAfterViewInit(){if(this._stepHeader.changes.pipe(iu(this._stepHeader),wu(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges();}),this._keyManager=new pe(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:im()).pipe(iu(this._layoutDirection()),wu(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0));}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted();}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete();}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1);}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0);}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged();}_getStepLabelId(e){return `${this._groupId}-label-${e}`}_getStepContentId(e){return `${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck();}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()==="rtl"?"next":"previous":n>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged();}_onKeydown(e){let n=ze(e),i=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin("keyboard").onKeydown(e);}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return (i?i.invalid||i.pending||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):false}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,n=ue$1();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=LD({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(n,i,r){if(n&1&&zh(r,Fe,5)(r,Ve,5),n&2){let d;Tw(d=Cw())&&(i._steps=d),Tw(d=Cw())&&(i._stepHeader=d);}},inputs:{linear:[2,"linear","linear",_1],selectedIndex:[2,"selectedIndex","selectedIndex",M1],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return t})(),en=(()=>{class t{_stepper=D(de);type="submit";static \u0275fac=function(n){return new(n||t)};static \u0275dir=LD({type:t,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(n,i){n&1&&qh("click",function(){return i._stepper.next()}),n&2&&Bh("type",i.type);},inputs:{type:"type"}})}return t})();var tn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=mh({type:t});static \u0275inj=qs({imports:[ki]})}return t})();var _n=(t,l,e)=>({index:t,active:l,optional:e});function gn(t,l){if(t&1&&Fh(0,2),t&2){let e=vw();kh("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",aT(2,_n,e.index,e.active,e.optional));}}function vn(t,l){if(t&1&&(Mi(0,"span",7),Qw(1),ll()),t&2){let e=vw(2);tE(),ag(e._getDefaultTextForState(e.state));}}function yn(t,l){if(t&1&&(Mi(0,"span",8),Qw(1),ll()),t&2){let e=vw(3);tE(),ag(e._intl.completedLabel);}}function bn(t,l){if(t&1&&(Mi(0,"span",8),Qw(1),ll()),t&2){let e=vw(3);tE(),ag(e._intl.editableLabel);}}function xn(t,l){if(t&1&&(nw(0,yn,2,1,"span",8)(1,bn,2,1,"span",8),Mi(2,"mat-icon",7),Qw(3),ll()),t&2){let e=vw(2);rw(e.state==="done"?0:e.state==="edit"?1:-1),tE(3),ag(e._getDefaultTextForState(e.state));}}function Cn(t,l){if(t&1&&nw(0,vn,2,1,"span",7)(1,xn,4,2),t&2){let n=vw();rw((n.state)==="number"?0:1);}}function Mn(t,l){t&1&&(Mi(0,"div",4),Fh(1,9),ll()),t&2&&(tE(),kh("ngTemplateOutlet",l.template));}function Sn(t,l){if(t&1&&(Mi(0,"div",4),Qw(1),ll()),t&2){let e=vw();tE(),ag(e.label);}}function wn(t,l){if(t&1&&(Mi(0,"div",5),Qw(1),ll()),t&2){let e=vw();tE(),ag(e._intl.optionalLabel);}}function Dn(t,l){if(t&1&&(Mi(0,"div",6),Qw(1),ll()),t&2){let e=vw();tE(),ag(e.errorMessage);}}var nn=["*"];function En(t,l){}function In(t,l){if(t&1&&(Dw(0),wh(1,En,0,0,"ng-template",0)),t&2){let e=vw();tE(),kh("cdkPortalOutlet",e._portal);}}var Tn=["animatedContainer"],rn=t=>({steps:t}),an=t=>({step:t});function kn(t,l){t&1&&Dw(0);}function On(t,l){if(t&1&&(Mi(0,"div",5),Fh(1,9)(2,6),ll()),t&2){let e=vw(2),n=_w(6);tE(),kh("ngTemplateOutlet",e.headerPrefix()),tE(),kh("ngTemplateOutlet",n)("ngTemplateOutletContext",iT(3,rn,e.steps));}}function zn(t,l){if(t&1&&Fh(0,6),t&2){let e=vw(2),n=_w(6);kh("ngTemplateOutlet",n)("ngTemplateOutletContext",iT(2,rn,e.steps));}}function Nn(t,l){if(t&1&&(Mi(0,"div",10,2),Fh(2,9),ll()),t&2){let e=l.$implicit,n=l.$index,i=vw(2);Fw("mat-horizontal-stepper-content-"+i._getAnimationDirection(n)),kh("id",i._getStepContentId(n)),Rh("aria-labelledby",i._getStepLabelId(n))("inert",i.selectedIndex===n?null:""),tE(2),kh("ngTemplateOutlet",e.content);}}function Fn(t,l){if(t&1&&(Mi(0,"div",3),nw(1,On,3,5,"div",5)(2,zn,1,4,"ng-container",6),Mi(3,"div",7),iw(4,Nn,3,6,"div",8,ow),ll()()),t&2){let e=vw();tE(),rw(e.headerPrefix()?1:2),tE(3),sw(e.steps);}}function Rn(t,l){if(t&1&&Fh(0,9),t&2){let e=vw(2);kh("ngTemplateOutlet",e.headerPrefix());}}function Ln(t,l){if(t&1&&(Mi(0,"div",11),Fh(1,6),Mi(2,"div",12,2)(4,"div",13)(5,"div",14),Fh(6,9),ll()()()()),t&2){let e=l.$implicit,n=l.$index,i=l.$index,r=l.$count,d=vw(2),P=_w(4);tE(),kh("ngTemplateOutlet",P)("ngTemplateOutletContext",iT(11,an,e)),tE(),eg("mat-stepper-vertical-line",i!==r-1)("mat-vertical-content-container-active",d.selectedIndex===n),Rh("inert",d.selectedIndex===n?null:"")("aria-label",d.ariaLabel),tE(2),kh("id",d._getStepContentId(n)),Rh("aria-labelledby",d._getStepLabelId(n)),tE(2),kh("ngTemplateOutlet",e.content);}}function Pn(t,l){if(t&1&&(Mi(0,"div",4),nw(1,Rn,1,1,"ng-container",9),iw(2,Ln,7,13,"div",11,ow),ll()),t&2){let e=vw();tE(),rw(e.headerPrefix()?1:-1),tE(),sw(e.steps);}}function Vn(t,l){if(t&1){let e=dw();Mi(0,"mat-step-header",15),qh("click",function(){let i=cd(e).step;return ld(i.select())})("keydown",function(i){cd(e);let r=vw();return ld(r._onKeydown(i))}),ll();}if(t&2){let e=l.step,n=vw();eg("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),kh("tabIndex",n._getFocusIndex()===e.index()?0:-1)("id",n._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!e.isNavigable())("color",e.color||n.color),Rh("role",n.orientation==="horizontal"?"tab":"button")("aria-posinset",n.orientation==="horizontal"?e.index()+1:null)("aria-setsize",n.orientation==="horizontal"?n.steps.length:null)("aria-selected",n.orientation==="horizontal"?e.isSelected():null)("aria-current",n.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",n.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",n.orientation==="vertical"?e.isSelected():null)("aria-controls",n._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:true);}}function jn(t,l){t&1&&Oh(0,"div",17);}function An(t,l){if(t&1&&(Fh(0,6),nw(1,jn,1,0,"div",17)),t&2){let e=l.$implicit,n=l.$index,i=l.$count;vw(2);let r=_w(4);kh("ngTemplateOutlet",r)("ngTemplateOutletContext",iT(3,an,e)),tE(),rw(n!==i-1?1:-1);}}function Bn(t,l){if(t&1&&(Mi(0,"div",16),iw(1,An,2,5,null,null,ow),ll()),t&2){let e=l.steps,n=vw();Rh("aria-label",n.ariaLabel),tE(),sw(e);}}var Ae=(()=>{class t extends je{static \u0275fac=(()=>{let e;return function(i){return (e||(e=lv(t)))(i||t)}})();static \u0275dir=LD({type:t,selectors:[["","matStepLabel",""]],features:[Eh]})}return t})(),Hn=(()=>{class t{changes=new ie;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(n){return new(n||t)};static \u0275prov=_r({token:t,factory:t.\u0275fac})}return t})(),Be=(()=>{class t extends Ve{_intl=D(Hn);_focusMonitor=D(at);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=false;active=false;optional=false;disableRipple=false;color;constructor(){super();let e=D(P);e.load(wt),e.load(z);let n=D(C1);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck());}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef);}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n);}_stringLabel(){return this.label instanceof Ae?null:this.label}_templateLabel(){return this.label instanceof Ae?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return !this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=RD({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(n,i){n&2&&(Fw("mat-"+(i.color||"primary")),eg("mat-step-header-empty-label",i._hasEmptyLabel()));},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[Eh],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(Oh(0,"div",0),Mi(1,"div")(2,"div",1),nw(3,gn,1,6,"ng-container",2)(4,Cn,2,1),ll()(),Mi(5,"div",3),nw(6,Mn,2,1,"div",4)(7,Sn,2,1,"div",4),nw(8,wn,2,1,"div",5),nw(9,Dn,2,1,"div",6),ll()),n&2){let r;kh("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),tE(),Fw(Xw("mat-step-icon-state-",i.state," mat-step-icon")),eg("mat-step-icon-selected",i.selected),tE(2),rw(i.iconOverrides&&i.iconOverrides[i.state]?3:4),tE(2),eg("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),tE(),rw((r=i._templateLabel())?6:i._stringLabel()?7:-1,r),tE(2),rw(i._hasOptionalLabel()?8:-1),tE(),rw(i._hasErrorLabel()?9:-1);}},dependencies:[Wt,qr,wt$1],styles:[`.mat-step-header {
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
`],encapsulation:2})}return t})(),Wn=(()=>{class t{templateRef=D(Dr);name;static \u0275fac=function(n){return new(n||t)};static \u0275dir=LD({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return t})(),Qn=(()=>{class t{_template=D(Dr);static \u0275fac=function(n){return new(n||t)};static \u0275dir=LD({type:t,selectors:[["ng-template","matStepContent",""]]})}return t})(),Jn=(()=>{class t extends Fe{_errorStateMatcher=D(h,{skipSelf:true});_viewContainerRef=D(Wi);_isSelected=V.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(su(()=>this._stepper.selectionChange.pipe(xe(e=>e.selectedStep===this),iu(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new N(this._lazyContent._template,this._viewContainerRef));});}ngOnDestroy(){this._isSelected.unsubscribe();}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),r=!!(e&&e.invalid&&this.interacted);return i||r}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??false,i=!!(e&&e().invalid()&&this.interacted);return n||i}static \u0275fac=(()=>{let e;return function(i){return (e||(e=lv(t)))(i||t)}})();static \u0275cmp=RD({type:t,selectors:[["mat-step"]],contentQueries:function(n,i,r){if(n&1&&zh(r,Ae,5)(r,Qn,5),n&2){let d;Tw(d=Cw())&&(i.stepLabel=d.first),Tw(d=Cw())&&(i._lazyContent=d.first);}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[rT([{provide:h,useExisting:t},{provide:Fe,useExisting:t}]),Eh],ngContentSelectors:nn,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(Ew(),wh(0,In,2,1,"ng-template"));},dependencies:[gi],encapsulation:2})}return t})(),qn=(()=>{class t extends de{_ngZone=D(se);_renderer=D(FE);_animationsDisabled=Ai();_cleanupTransition;_isAnimating=Ve$1(false);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new ui;_icons;animationDone=new qe;disableRipple=false;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=v1(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+"ms":/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration="";}_animationDuration="";_isServer=!D(m).isBrowser;constructor(){super();let n=D(Mr).nativeElement.nodeName.toLowerCase();this.orientation=n==="mat-vertical-stepper"?"vertical":"horizontal";}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(wu(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(wu(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(true);}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend);},200);});}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=false;this._animatedContainers.changes.pipe(iu(null),wu(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=true,this.animationDone.emit()),this._stateChanged();}));}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.();}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&n.classList.contains("mat-horizontal-stepper-content-current"),r=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&n.classList.contains("mat-vertical-content-container-active");(i||r)&&this._animatedContainers.find(P=>P.nativeElement===n)&&this._onAnimationDone();};_onAnimationDone(){this._isAnimating.set(false),this.animationDone.emit();}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=RD({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(n,i,r){if(n&1&&zh(r,Jn,5)(r,Wn,5),n&2){let d;Tw(d=Cw())&&(i._steps=d),Tw(d=Cw())&&(i._icons=d);}},viewQuery:function(n,i){if(n&1&&Qh(Be,5)(Tn,5),n&2){let r;Tw(r=Cw())&&(i._stepHeader=r),Tw(r=Cw())&&(i._animatedContainers=r);}},hostVars:14,hostBindings:function(n,i){n&2&&(Xh("--mat-stepper-animation-duration",i._getAnimationDuration()),eg("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()));},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[rT([{provide:de,useExisting:t}]),Eh],ngContentSelectors:nn,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(n,i){if(n&1&&(Ew(),nw(0,kn,1,0),nw(1,Fn,6,1,"div",3)(2,Pn,4,1,"div",4),wh(3,Vn,1,27,"ng-template",null,0,pT)(5,Bn,3,1,"ng-template",null,1,pT)),n&2){let r;rw(i._isServer?0:-1),tE(),rw((r=i.orientation)==="horizontal"?1:r==="vertical"?2:-1);}},dependencies:[qr,Be],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2})}return t})(),on=(()=>{class t extends en{static \u0275fac=(()=>{let e;return function(i){return (e||(e=lv(t)))(i||t)}})();static \u0275dir=LD({type:t,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(n,i){n&2&&Bh("type",i.type);},features:[Eh]})}return t})();var sn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=mh({type:t});static \u0275inj=qs({providers:[h],imports:[Yt,tn,yt,kt,qn,Be,ki]})}return t})();var I=(function(t){return t[t.NEW=0]="NEW",t[t.VIEW=1]="VIEW",t[t.EDIT=2]="EDIT",t})(I||{});function Zn(t,l){if(t&1){let e=dw();Mi(0,"mat-chip-row",6),qh("removed",function(){let i=cd(e).$implicit,r=vw();return ld(r.removeTag(i))}),Mi(1,"span"),Qw(2),ll(),Mi(3,"button",7),qh("click",function(){let i=cd(e).$implicit,r=vw();return ld(r.removeTag(i))}),Mi(4,"mat-icon"),Qw(5,"cancel"),ll()()();}if(t&2){let e=l.$implicit,n=vw();kh("highlighted",true)("editable",!n.disabled())("removable",!n.disabled()),tE(2),ag(e),tE(),kh("disabled",n.disabled());}}var ln=(()=>{class t{constructor(){this.separatorKeysCodes=[13,188,32],this.tags=I1([]),this.disabled=v1(false);}addTag(e){let n=(e.value||"").toLowerCase().trim();n&&this.tags.update(i=>[...i,n]),e.chipInput.clear();}removeTag(e){this.tags.update(n=>n.filter(i=>i!==e));}static{this.\u0275fac=function(n){return new(n||t)};}static{this.\u0275cmp=RD({type:t,selectors:[["app-tags-input"]],inputs:{tags:[1,"tags"],disabled:[1,"disabled"]},outputs:{tags:"tagsChange"},decls:9,vars:4,consts:[["chipGrid",""],[1,"w-full"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Favorite Tags",1,"w-full","rounded-md","focus:ring-indigo-500","focus:border-indigo-500",3,"matChipInputTokenEnd","disabled","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["aria-label","Tags",1,"flex","flex-wrap","gap-2"],[1,"bg-indigo-100","text-indigo-700","border","rounded-full","px-4","py-2","shadow-sm","flex","items-center",3,"highlighted","editable","removable"],[1,"bg-indigo-100","text-indigo-700","border","rounded-full","px-4","py-2","shadow-sm","flex","items-center",3,"removed","highlighted","editable","removable"],["matChipRemove","",1,"ml-2","text-red-500","hover:text-red-700",3,"click","disabled"]],template:function(n,i){if(n&1&&(Mi(0,"div")(1,"div",1)(2,"mat-form-field",2)(3,"input",3),qh("matChipInputTokenEnd",function(d){return i.addTag(d)}),ll()()(),Mi(4,"div",1)(5,"mat-chip-grid",4,0),iw(7,Zn,6,5,"mat-chip-row",5,ow),ll()()()),n&2){let r=_w(6);tE(3),kh("disabled",i.disabled())("matChipInputFor",r)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",true),tE(4),sw(i.tags());}},dependencies:[zt,Ot$1,Ht,Lt,ct$1,yt,wt$1,Qt,Pe,Ne,He,On$1],encapsulation:2});}}return t})();var dn=(()=>{class t{constructor(){this.httpClient=D(Ar),this.authService=D(d$1);}enhance(e){let n=this.authService.getCurrentUserContext();return this.httpClient.post(l.journeyApi+"/ai/enhance-narration",e,{headers:{Authorization:`Bearer ${n.accessToken}`,"Content-Type":"application/json"}})}static{this.\u0275fac=function(n){return new(n||t)};}static{this.\u0275prov=G$1({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();function ei(t,l){if(t&1){let e=dw();Mi(0,"button",14),qh("click",function(){let i=cd(e).$implicit,r=vw(2);return ld(r.enhanceNarration(i))}),Qw(1),ll();}if(t&2){let e=l.$implicit;tE(),gl(" ",e," ");}}function ti(t,l){if(t&1){let e=dw();Mi(0,"mat-button-toggle-group",9),dg("ngModelChange",function(i){cd(e);let r=vw();return Kw(r.markdownStyle,i)||(r.markdownStyle=i),ld(i)}),Mi(1,"mat-button-toggle",10),Qw(2,"Edit"),ll(),Mi(3,"mat-button-toggle",11),Qw(4,"Preview"),ll()(),UE(),Mi(5,"button",12),Qw(6," Enhance "),Mi(7,"mat-icon"),Qw(8,"auto_awesome"),ll()(),Mi(9,"mat-menu",null,1),iw(11,ei,2,1,"button",13,ow),ll();}if(t&2){let e=_w(10),n=vw();ug("ngModel",n.markdownStyle),WE(),tE(5),kh("matMenuTriggerFor",e)("disabled",n.disabled()),tE(6),sw(n.tones);}}function ni(t,l){t&1&&(Mi(0,"div"),Qw(1,"Memories is required."),ll());}function ii(t,l){t&1&&(Mi(0,"div"),Qw(1,"Memories must be at least 10 characters long."),ll());}function ri(t,l){t&1&&(Mi(0,"div"),Qw(1,"Memories must be at most 5000 characters long."),ll());}var pn=(()=>{class t{constructor(){this.tones=["\u{1F30D} Adventurous","\u2764\uFE0F Romantic","\u{1F4A1} Inspirational","\u{1F3A8} Poetic","\u{1F604} Funny","\u{1F9D8} Minimalistic"],this.narrationEnhancerService=D(dn),this.markdownStyle=I1("Source"),this.disabled=v1(false),this.title=v1(""),this.narration=I1("");}enhanceNarration(e){console.log(e),this.narrationEnhancerService.enhance({narration:this.narration(),tone:e}).subscribe({next:n=>this.narration.set(n.narration)});}static{this.\u0275fac=function(n){return new(n||t)};}static{this.\u0275cmp=RD({type:t,selectors:[["app-narration"]],inputs:{markdownStyle:[1,"markdownStyle"],disabled:[1,"disabled"],title:[1,"title"],narration:[1,"narration"]},outputs:{markdownStyle:"markdownStyleChange",narration:"narrationChange"},decls:13,vars:10,consts:[["description","ngModel"],["toneMenu","matMenu"],[1,"flex","gap-2","flex-col"],[1,"inline-flex","gap-2","align-middle","content-center","items-center"],["for","description",1,"text-sm","font-semibold"],["rows","15","id","description","name","description","placeholder","Detailed information about the Journey","required","","minlength","10","maxlength","5000",1,"w-full","p-4","border","rounded-md","focus:outline-hidden","focus:ring","focus:ring-indigo-500","dark:bg-gray-800",3,"ngModelChange","ngModel","hidden"],[1,"h-96","overflow-auto",3,"hidden"],[3,"title","markdownText"],[1,"text-red-500","text-sm","mt-2",3,"hidden"],["name","markdownStyle","aria-label","Markdown Style","hideSingleSelectionIndicator","true",3,"ngModelChange","ngModel"],["value","Source",1,"text-sm"],["value","Preview",1,"text-sm"],["mat-raised-button","","type","button",3,"matMenuTriggerFor","disabled"],["mat-menu-item",""],["mat-menu-item","",3,"click"]],template:function(n,i){if(n&1){let r=dw();Mi(0,"div",2)(1,"div",3)(2,"label",4),Qw(3,"Memories"),ll(),nw(4,ti,13,3),ll(),Mi(5,"textarea",5,0),dg("ngModelChange",function(P){return cd(r),Kw(i.narration,P)||(i.narration=P),ld(P)}),ll(),UE(),Mi(7,"div",6),Oh(8,"app-display-markdown-component",7),ll(),Mi(9,"div",8),nw(10,ni,2,0,"div"),nw(11,ii,2,0,"div"),nw(12,ri,2,0,"div"),ll()();}if(n&2){let r=_w(6);tE(4),rw(i.disabled()?-1:4),tE(),ug("ngModel",i.narration),kh("hidden",i.markdownStyle()==="Preview"),WE(),tE(2),kh("hidden",i.markdownStyle()==="Source"),tE(),kh("title",i.title())("markdownText",i.narration()),tE(),kh("hidden",r.valid||r.pristine),tE(),rw(r.errors?.required?10:-1),tE(),rw(r.errors?.minlength?11:-1),tE(),rw(r.errors?.maxlength?12:-1);}},dependencies:[pe$1,On$1,ke,wn$1,rt,xt,Pt,en$1,Ot,bt,nt,Lt$1,P$1,G,Nt,Fn$1,Tn$2,yt,wt$1],encapsulation:2});}}return t})();function ai(t,l){t&1&&(Mi(0,"div"),Qw(1,"Name is required."),ll());}function oi(t,l){t&1&&(Mi(0,"div"),Qw(1,"Name must be at least 5 characters long."),ll());}function si(t,l){t&1&&(Mi(0,"div"),Qw(1,"Name must be at most 50 characters long."),ll());}function li(t,l){t&1&&(Mi(0,"div"),Qw(1,"Journey Date is required."),ll());}function di(t,l){if(t&1){let e=dw();Mi(0,"button",20),qh("click",function(){cd(e);let i=vw(2);return ld(i.enableEditMode())}),Qw(1," Edit "),ll();}if(t&2){let e=vw(2);kh("hidden",e.mode()!==e.OperationMode.VIEW);}}function pi(t,l){if(t&1){let e=dw();Mi(0,"form",5,0),qh("ngSubmit",function(){cd(e);let i=_w(1),r=vw();return ld(r.save(i))}),Mi(2,"div",6)(3,"div")(4,"mat-form-field",7)(5,"mat-label"),Qw(6,"Journey Name"),ll(),Mi(7,"input",8,1),dg("ngModelChange",function(i){cd(e);let r=vw();return Kw(r.journey().name,i)||(r.journey().name=i),ld(i)}),ll(),UE(),Mi(9,"mat-error",9),nw(10,ai,2,0,"div"),nw(11,oi,2,0,"div"),nw(12,si,2,0,"div"),ll()()(),Mi(13,"div")(14,"mat-form-field",7)(15,"mat-label"),Qw(16,"Journey Date"),ll(),Mi(17,"input",10,2),qh("dateChange",function(i){cd(e);let r=vw();return ld(r.journeyDateChangeEvent(i))}),dg("ngModelChange",function(i){cd(e);let r=vw();return Kw(r.journeyDateTimestamp,i)||(r.journeyDateTimestamp=i),ld(i)}),ll(),UE(),Oh(19,"mat-datepicker-toggle",11)(20,"mat-datepicker",null,3),Mi(22,"mat-error",9),nw(23,li,2,0,"div"),ll()()()(),Mi(24,"div",12)(25,"app-tags-input",13),dg("tagsChange",function(i){cd(e);let r=vw();return Kw(r.journey().tags,i)||(r.journey().tags=i),ld(i)}),ll()(),Mi(26,"div",12)(27,"app-narration",14),dg("narrationChange",function(i){cd(e);let r=vw();return Kw(r.journey().description,i)||(r.journey().description=i),ld(i)}),ll()(),Mi(28,"div",15)(29,"button",16),Qw(30," Create "),ll(),wh(31,di,2,1,"button",17),Mi(32,"button",18),Qw(33," Save "),ll(),Mi(34,"button",19),Qw(35," Next "),ll()()();}if(t&2){let e=_w(1),n=_w(8),i=_w(18),r=_w(21),d=vw();tE(7),ug("ngModel",d.journey().name),kh("readOnly",d.isReadOnly()),WE(),tE(2),kh("hidden",n.valid||n.pristine),tE(),rw(n.errors?.required?10:-1),tE(),rw(n.errors?.minlength?11:-1),tE(),rw(n.errors?.maxlength?12:-1),tE(5),kh("matDatepicker",r),ug("ngModel",d.journeyDateTimestamp),kh("readOnly",d.isReadOnly()),WE(),tE(2),kh("for",r),tE(3),kh("hidden",i.valid||i.pristine),tE(),rw(i.errors?.required?23:-1),tE(2),ug("tags",d.journey().tags),kh("disabled",d.isReadOnly()),tE(2),kh("title",d.journey().name),ug("narration",d.journey().description),kh("disabled",d.isReadOnly())("markdownStyle",d.isReadOnly()?"Preview":"Source"),tE(2),kh("disabled",!e.form.valid)("hidden",d.mode()!==d.OperationMode.NEW),tE(3),kh("disabled",!e.form.valid)("hidden",d.mode()!==d.OperationMode.EDIT),tE(2),kh("disabled",d.journey().id==="");}}var ea=(()=>{class t{constructor(){this.OperationMode=I,this.journeyService=D(L),this.notificationService=D(Jt),this.router=D(ue),this.datePipe=D(si$1),this.mode=I1(I.VIEW),this.isReadOnly=mt(()=>this.mode()==I.VIEW),this.journey=I1(new m$1),this.journeyDateTimestamp=Ve$1(new Date),T(this.journey).subscribe(e=>this.journeyDateTimestamp.set(new Date(e.journeyDate)));}onError(e,n){this.notificationService.showError(e),console.error(n);}onUpdateSuccess(e){this.journey.set(e),this.mode()===I.NEW&&this.router.navigate(["/journey",this.journey().id,"edit"],{state:{mode:I.VIEW}}).then(),this.mode.set(I.VIEW),this.notificationService.showSuccess("Journey details saved successfully.");}save(e){e.valid&&(this.mode()==I.NEW?this.createJourney():this.updateJourney());}createJourney(){this.journeyService.createJourney(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError("Unexpected error while saving data",e)});}updateJourney(){this.journeyService.saveJourneyBasicDetails(this.journey()).subscribe({next:e=>this.onUpdateSuccess(e),error:e=>this.onError("Unexpected error while saving data",e)});}enableEditMode(){this.mode.set(I.EDIT);}journeyDateChangeEvent(e){this.journey.update(n=>q(U({},n),{journeyDate:this.datePipe.transform(e.value,"yyyy-MM-dd")}));}static{this.\u0275fac=function(n){return new(n||t)};}static{this.\u0275cmp=RD({type:t,selectors:[["app-edit-journey-memories-details"]],inputs:{mode:[1,"mode"],journey:[1,"journey"]},outputs:{mode:"modeChange",journey:"journeyChange"},features:[rT([si$1])],decls:1,vars:1,consts:[["journeyForm","ngForm"],["name","ngModel"],["journeyDate","ngModel"],["picker",""],[1,"content-wrapper","flex","flex-col","gap-2"],[1,"content-wrapper","flex","flex-col","gap-2",3,"ngSubmit"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],["appearance","outline",1,"w-full"],["matInput","","type","text","id","name","name","name","placeholder","Name your Journey","maxlength","50","minlength","5","required","",1,"mt-1","w-full","rounded-md","focus:ring-indigo-500","focus:border-indigo-500",3,"ngModelChange","ngModel","readOnly"],[3,"hidden"],["matInput","","required","","placeholder","dd/mm/yyyy","name","journeyDate",3,"dateChange","ngModelChange","matDatepicker","ngModel","readOnly"],["matIconSuffix","",3,"for"],[1,"w-full"],[3,"tagsChange","tags","disabled"],[3,"narrationChange","title","narration","disabled","markdownStyle"],[1,"flex","flex-wrap","justify-center","gap-2","mt-4"],["mat-raised-button","","type","submit",1,"px-6","py-2",3,"disabled","hidden"],["mat-stroked-button","","type","button","class","px-6 py-2",3,"hidden","click",4,"appHasWriteAccess"],["mat-flat-button","","type","submit",1,"px-6","py-2",3,"disabled","hidden"],["mat-stroked-button","","type","button","matStepperNext","",1,"px-6","py-2",3,"disabled"],["mat-stroked-button","","type","button",1,"px-6","py-2",3,"click","hidden"]],template:function(n,i){n&1&&nw(0,pi,36,23,"form",4),n&2&&rw(i.journey()?0:-1);},dependencies:[On$1,In$1,ke,wn$1,Nn$1,rt,xt,Pt,en$1,Kt,Ot,zt,sn,on,ln,pn,Ne,He,Pe,q$1,ct,st,Qt,Nn$2,Tn$1,pa,Wa,Fn$1,Tn$2,C],encapsulation:2});}}return t})();export{Ae as A,I,Jn as J,Qn as Q,ea as e,on as o,qn as q,sn as s};