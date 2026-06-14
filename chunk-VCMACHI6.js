import{b,c as U}from"./chunk-CIIFR5TV.js";import{a as Wt}from"./chunk-NDFQ44OT.js";import{a as Qt}from"./chunk-KN3SWJXY.js";import{d as qt,e as tt}from"./chunk-SGVUHSG2.js";import{a as $t,b as Gt}from"./chunk-5LNAAUSH.js";import{A as Kt,e as Et,g as Xe,l as Ze,m as Ot,n as Yt,o as Pt,p as Nt,s as Lt,t as Bt,u as Ht,w as zt}from"./chunk-LMKNXU6M.js";import{a as Re,c as Te,d as me,e as It,f as Ft,i as Rt,m as Tt}from"./chunk-3JWBKK2M.js";import{d as xt,g as Je,h as et,j as jt}from"./chunk-R55TY4RW.js";import{A as Mt,C as St,D as j,G as ue,N as Vt,a as At,g as $e,h as G,j as kt,m as Ge,s as Ue,t as pe,u as Fe}from"./chunk-4X4R7TM4.js";import{$b as S,Aa as Ke,Ab as N,Ac as Ve,Bc as f,Cb as z,Cc as T,Da as u,Db as qe,Dc as $,Ec as Qe,Fc as Ee,Ga as P,Gc as xe,H as ie,Ha as oe,Hc as Ie,I as ut,Ja as H,Kc as L,N as mt,Pb as D,Rb as de,Sb as le,Ub as Ae,Vb as ke,Wb as v,Xb as c,Yb as p,Z as Ce,Zb as F,_b as M,_c as wt,ac as vt,f as A,fa as Be,fc as ce,fd as I,ga as Q,gc as R,ha as _t,j as Y,ja as He,jb as d,ka as we,kc as g,kd as O,la as s,mc as yt,nc as m,ob as je,oc as Me,pc as he,qc as Ct,ra as y,rb as We,rc as K,sa as C,sc as V,t as ye,ta as re,tb as ft,tc as E,ua as ze,ub as bt,va as se,wa as gt,yb as k,yc as Se,za as h,zb as Dt,zc as x}from"./chunk-OE5ARKY5.js";var ma=["mat-calendar-body",""];function _a(i,o){return this._trackRow(o)}var na=(i,o)=>o.id;function ga(i,o){if(i&1&&(M(0,"tr",0)(1,"td",3),f(2),S()()),i&2){let e=m();d(),Se("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),D("colspan",e.numCols),d(),$(" ",e.label," ")}}function fa(i,o){if(i&1&&(M(0,"td",3),f(1),S()),i&2){let e=m(2);Se("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),D("colspan",e._firstRowOffset),d(),$(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function ba(i,o){if(i&1){let e=ce();M(0,"td",6)(1,"button",7),yt("click",function(t){let n=y(e).$implicit,r=m(2);return C(r._cellClicked(n,t))})("focus",function(t){let n=y(e).$implicit,r=m(2);return C(r._emitActiveDateChange(n,t))}),M(2,"span",8),f(3),S(),vt(4,"span",9),S()()}if(i&2){let e=o.$implicit,a=o.$index,t=m().$index,n=m();Se("width",n._cellWidth)("padding-top",n._cellPadding)("padding-bottom",n._cellPadding),D("data-mat-row",t)("data-mat-col",a),d(),Ve(e.cssClasses),x("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",n._isActiveCell(t,a))("mat-calendar-body-range-start",n._isRangeStart(e.compareValue))("mat-calendar-body-range-end",n._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",n._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",n._isComparisonBridgeStart(e.compareValue,t,a))("mat-calendar-body-comparison-bridge-end",n._isComparisonBridgeEnd(e.compareValue,t,a))("mat-calendar-body-comparison-start",n._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",n._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",n._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",n._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",n._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",n._isInPreview(e.compareValue)),R("tabIndex",n._isActiveCell(t,a)?0:-1),D("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",n._isSelected(e.compareValue))("aria-current",n.todayValue===e.compareValue?"date":null)("aria-describedby",n._getDescribedby(e.compareValue)),d(),x("mat-calendar-body-selected",n._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",n._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",n.todayValue===e.compareValue),d(),$(" ",e.displayValue," ")}}function Da(i,o){if(i&1&&(M(0,"tr",1),de(1,fa,2,6,"td",4),Ae(2,ba,5,49,"td",5,na),S()),i&2){let e=o.$implicit,a=o.$index,t=m();d(),le(a===0&&t._firstRowOffset?1:-1),d(),ke(e)}}function va(i,o){if(i&1&&(c(0,"th",2)(1,"span",6),f(2),p(),c(3,"span",3),f(4),p()()),i&2){let e=o.$implicit;d(2),T(e.long),d(2),T(e.narrow)}}var ya=["*"];function Ca(i,o){}function wa(i,o){if(i&1){let e=ce();c(0,"mat-month-view",4),Ie("activeDateChange",function(t){y(e);let n=m();return xe(n.activeDate,t)||(n.activeDate=t),C(t)}),g("_userSelection",function(t){y(e);let n=m();return C(n._dateSelected(t))})("dragStarted",function(t){y(e);let n=m();return C(n._dragStarted(t))})("dragEnded",function(t){y(e);let n=m();return C(n._dragEnded(t))}),p()}if(i&2){let e=m();Ee("activeDate",e.activeDate),v("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Aa(i,o){if(i&1){let e=ce();c(0,"mat-year-view",5),Ie("activeDateChange",function(t){y(e);let n=m();return xe(n.activeDate,t)||(n.activeDate=t),C(t)}),g("monthSelected",function(t){y(e);let n=m();return C(n._monthSelectedInYearView(t))})("selectedChange",function(t){y(e);let n=m();return C(n._goToDateInView(t,"month"))}),p()}if(i&2){let e=m();Ee("activeDate",e.activeDate),v("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function ka(i,o){if(i&1){let e=ce();c(0,"mat-multi-year-view",6),Ie("activeDateChange",function(t){y(e);let n=m();return xe(n.activeDate,t)||(n.activeDate=t),C(t)}),g("yearSelected",function(t){y(e);let n=m();return C(n._yearSelectedInMultiYearView(t))})("selectedChange",function(t){y(e);let n=m();return C(n._goToDateInView(t,"year"))}),p()}if(i&2){let e=m();Ee("activeDate",e.activeDate),v("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Ma(i,o){}var Sa=["button"],Va=[[["","matDatepickerToggleIcon",""]]],Ea=["[matDatepickerToggleIcon]"];function xa(i,o){i&1&&(re(),c(0,"svg",2),F(1,"path",3),p())}var Ia=[[["input","matStartDate",""]],[["input","matEndDate",""]]],Fa=["input[matStartDate]","input[matEndDate]"];var ne=(()=>{class i{changes=new Y;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,a){return`${e} \u2013 ${a}`}formatYearRangeLabel(e,a){return`${e} to ${a}`}static \u0275fac=function(a){return new(a||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ra=0,fe=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Ra++;cssClasses;constructor(o,e,a,t,n,r=o,l){this.value=o,this.displayValue=e,this.ariaLabel=a,this.enabled=t,this.compareValue=r,this.rawValue=l,this.cssClasses=n instanceof Set?Array.from(n):n}},Ta={passive:!1,capture:!0},Oe={passive:!0,capture:!0},Ut={passive:!0},ee=(()=>{class i{_elementRef=s(H);_ngZone=s(Ke);_platform=s(At);_intl=s(ne);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new h;previewChange=new h;activeDateChange=new h;dragStarted=new h;dragEnded=new h;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(se);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(We),a=s(ue);this._startDateLabelId=a.getId("mat-calendar-body-start-"),this._endDateLabelId=a.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=a.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=a.getId("mat-calendar-body-comparison-end-"),s(pe).load(xt),this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,n=[e.listen(t,"touchmove",this._touchmoveHandler,Ta),e.listen(t,"mouseenter",this._enterHandler,Oe),e.listen(t,"focus",this._enterHandler,Oe),e.listen(t,"mouseleave",this._leaveHandler,Oe),e.listen(t,"blur",this._leaveHandler,Oe),e.listen(t,"mousedown",this._mousedownHandler,Ut),e.listen(t,"touchstart",this._mousedownHandler,Ut)];this._platform.isBrowser&&n.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,a){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:a})}_emitActiveDateChange(e,a){e.enabled&&this.activeDateChange.emit({value:e.value,event:a})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let a=e.numCols,{rows:t,numCols:n}=this;(e.rows||a)&&(this._firstRowOffset=t&&t.length&&t[0].length?n-t[0].length:0),(e.cellAspectRatio||a||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(a||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,a){let t=e*this.numCols+a;return e&&(t-=this._firstRowOffset),t==this.activeCell}_focusActiveCell(e=!0){je(()=>{setTimeout(()=>{let a=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");a&&(e||(this._skipNextFocus=!0),a.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return it(e,this.startValue,this.endValue)}_isRangeEnd(e){return rt(e,this.startValue,this.endValue)}_isInRange(e){return st(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return it(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,a,t){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[a][t-1];if(!n){let r=this.rows[a-1];n=r&&r[r.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,a,t){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[a][t+1];if(!n){let r=this.rows[a+1];n=r&&r[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return rt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return st(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return it(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return rt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return st(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let a=this._getCellFromElement(e.target);a&&this._ngZone.run(()=>this.previewChange.emit({value:a.enabled?a:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let a=Xt(e),t=a?this._getCellFromElement(a):null;a!==e.target&&(this._didDragSinceMouseDown=!0),nt(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:t?.enabled?t:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let a=e.target&&this._getCellFromElement(e.target);!a||!this._isInRange(a.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:a.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let a=nt(e.target);if(!a){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}a.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let t=this._getCellFromElement(a);this.dragEnded.emit({value:t?.rawValue??null,event:e})})};_touchendHandler=e=>{let a=Xt(e);a&&this._mouseupHandler({target:a})};_getCellFromElement(e){let a=nt(e);if(a){let t=a.getAttribute("data-mat-row"),n=a.getAttribute("data-mat-col");if(t&&n)return this.rows[parseInt(t)]?.[parseInt(n)]||null}return null}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[P],attrs:ma,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(a,t){a&1&&(de(0,ga,3,6,"tr",0),Ae(1,Da,4,1,"tr",1,_a,!0),M(3,"span",2),f(4),S(),M(5,"span",2),f(6),S(),M(7,"span",2),f(8),S(),M(9,"span",2),f(10),S()),a&2&&(le(t._firstRowOffset<t.labelMinRequiredCells?0:-1),d(),ke(t.rows),d(2),R("id",t._startDateLabelId),d(),$(" ",t.startDateAccessibleName,`
`),d(),R("id",t._endDateLabelId),d(),$(" ",t.endDateAccessibleName,`
`),d(),R("id",t._comparisonStartDateLabelId),d(),Qe(" ",t.comparisonDateAccessibleName," ",t.startDateAccessibleName,`
`),d(),R("id",t._comparisonEndDateLabelId),d(),Qe(" ",t.comparisonDateAccessibleName," ",t.endDateAccessibleName,`
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
`],encapsulation:2,changeDetection:0})}return i})();function at(i){return i?.nodeName==="TD"}function nt(i){let o;return at(i)?o=i:at(i.parentNode)?o=i.parentNode:at(i.parentNode?.parentNode)&&(o=i.parentNode.parentNode),o?.getAttribute("data-mat-row")!=null?o:null}function it(i,o,e){return e!==null&&o!==e&&i<e&&i===o}function rt(i,o,e){return o!==null&&o!==e&&i>=o&&i===e}function st(i,o,e,a){return a&&o!==null&&e!==null&&o!==e&&i>=o&&i<=e}function Xt(i){let o=i.changedTouches[0];return document.elementFromPoint(o.clientX,o.clientY)}var _=class{start;end;_disableStructuralEquivalency;constructor(o,e){this.start=o,this.end=e}},B=(()=>{class i{selection;_adapter;_selectionChanged=new Y;selectionChanged=this._selectionChanged;constructor(e,a){this.selection=e,this._adapter=a,this.selection=e}updateSelection(e,a){let t=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:a,oldValue:t})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(a){ft()};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Oa=(()=>{class i extends B{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(a){return new(a||i)(we(b))};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Ya=(()=>{class i extends B{constructor(e){super(new _(null,null),e)}add(e){let{start:a,end:t}=this.selection;a==null?a=e:t==null?t=e:(a=e,t=null),super.updateSelection(new _(a,t),this)}isValid(){let{start:e,end:a}=this.selection;return e==null&&a==null?!0:e!=null&&a!=null?this._isValidDateInstance(e)&&this._isValidDateInstance(a)&&this._adapter.compareDate(e,a)<=0:(e==null||this._isValidDateInstance(e))&&(a==null||this._isValidDateInstance(a))}isComplete(){return this.selection.start!=null&&this.selection.end!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(a){return new(a||i)(we(b))};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),ia={provide:B,useFactory:()=>s(B,{optional:!0,skipSelf:!0})||new Oa(s(b))},Pa={provide:B,useFactory:()=>s(B,{optional:!0,skipSelf:!0})||new Ya(s(b))},Ye=new He("MAT_DATE_RANGE_SELECTION_STRATEGY"),Na=(()=>{class i{_dateAdapter;constructor(e){this._dateAdapter=e}selectionFinished(e,a){let{start:t,end:n}=a;return t==null?t=e:n==null&&e&&this._dateAdapter.compareDate(e,t)>=0?n=e:(t=e,n=null),new _(t,n)}createPreview(e,a){let t=null,n=null;return a.start&&!a.end&&e&&(t=a.start,n=e),new _(t,n)}createDrag(e,a,t){let n=a.start,r=a.end;if(!n||!r)return null;let l=this._dateAdapter,De=l.compareDate(n,r)!==0,W=l.getYear(t)-l.getYear(e),q=l.getMonth(t)-l.getMonth(e),ve=l.getDate(t)-l.getDate(e);return De&&l.sameDate(e,a.start)?(n=t,l.compareDate(t,r)>0&&(r=l.addCalendarYears(r,W),r=l.addCalendarMonths(r,q),r=l.addCalendarDays(r,ve))):De&&l.sameDate(e,a.end)?(r=t,l.compareDate(t,n)<0&&(n=l.addCalendarYears(n,W),n=l.addCalendarMonths(n,q),n=l.addCalendarDays(n,ve))):(n=l.addCalendarYears(n,W),n=l.addCalendarMonths(n,q),n=l.addCalendarDays(n,ve),r=l.addCalendarYears(r,W),r=l.addCalendarMonths(r,q),r=l.addCalendarDays(r,ve)),new _(n,r)}static \u0275fac=function(a){return new(a||i)(we(b))};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),ot=7,La=0,Zt=(()=>{class i{_changeDetectorRef=s(I);_dateFormats=s(U,{optional:!0});_dateAdapter=s(b,{optional:!0});_dir=s(G,{optional:!0});_rangeStrategy=s(Ye,{optional:!0});_rerenderSubscription=A.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),this._hasSameMonthAndYear(a,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof _?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new h;_userSelection=new h;dragStarted=new h;dragEnded=new h;activeDateChange=new h;_matCalendarBody;_monthLabel=u("");_weeks=u([]);_firstWeekOffset=u(0);_rangeStart=u(null);_rangeEnd=u(null);_comparisonRangeStart=u(null);_comparisonRangeEnd=u(null);_previewStart=u(null);_previewEnd=u(null);_isRange=u(!1);_todayDate=u(null);_weekdays=u([]);constructor(){s(pe).load(Fe),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ce(null)).subscribe(()=>this._init())}ngOnChanges(e){let a=e.comparisonStart||e.comparisonEnd;a&&!a.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let a=e.value,t=this._getDateFromDayOfMonth(a),n,r;this._selected instanceof _?(n=this._getDateInCurrentMonth(this._selected.start),r=this._getDateInCurrentMonth(this._selected.end)):n=r=this._getDateInCurrentMonth(this._selected),(n!==a||r!==a)&&this.selectedChange.emit(t),this._userSelection.emit({value:t,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!j(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((ot+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%ot),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:a}){if(this._rangeStrategy){let t=a?a.rawValue:null,n=this._rangeStrategy.createPreview(t,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&t){let r=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,t,e);r&&(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let a=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:a??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),a=this._dateAdapter.getDayOfWeekNames("narrow"),n=this._dateAdapter.getDayOfWeekNames("long").map((r,l)=>({long:r,narrow:a[l],id:La++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),a=this._dateAdapter.getDateNames(),t=[[]];for(let n=0,r=this._firstWeekOffset();n<e;n++,r++){r==ot&&(t.push([]),r=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),De=this._shouldEnableDate(l),W=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),q=this.dateClass?this.dateClass(l,"month"):void 0;t[t.length-1].push(new fe(n+1,a[n],W,De,q,this._getCellCompareValue(l),l))}this._weeks.set(t)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,a){return!!(e&&a&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(a)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a))}_getCellCompareValue(e){if(e){let a=this._dateAdapter.getYear(e),t=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(a,t,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof _?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["mat-month-view"]],viewQuery:function(a,t){if(a&1&&K(ee,5),a&2){let n;V(n=E())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[P],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(a,t){a&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),Ae(3,va,5,2,"th",2,na),p(),c(5,"tr",3),F(6,"th",4),p()(),c(7,"tbody",5),g("selectedValueChange",function(r){return t._dateSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("previewChange",function(r){return t._previewChanged(r)})("dragStarted",function(r){return t.dragStarted.emit(r)})("dragEnded",function(r){return t._dragEnded(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),p()()),a&2&&(d(3),ke(t._weekdays()),d(4),v("label",t._monthLabel())("rows",t._weeks())("todayValue",t._todayDate())("startValue",t._rangeStart())("endValue",t._rangeEnd())("comparisonStart",t._comparisonRangeStart())("comparisonEnd",t._comparisonRangeEnd())("previewStart",t._previewStart())("previewEnd",t._previewEnd())("isRange",t._isRange())("labelMinRequiredCells",3)("activeCell",t._dateAdapter.getDate(t.activeDate)-1)("startDateAccessibleName",t.startDateAccessibleName)("endDateAccessibleName",t.endDateAccessibleName))},dependencies:[ee],encapsulation:2,changeDetection:0})}return i})(),w=24,dt=4,Jt=(()=>{class i{_changeDetectorRef=s(I);_dateAdapter=s(b,{optional:!0});_dir=s(G,{optional:!0});_rerenderSubscription=A.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),ra(this._dateAdapter,a,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof _?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new h;yearSelected=new h;activeDateChange=new h;_matCalendarBody;_years=u([]);_todayYear=u(0);_selectedYear=u(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ce(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let a=this._dateAdapter.getYear(this._activeDate)-_e(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),t=[];for(let n=0,r=[];n<w;n++)r.push(a+n),r.length==dt&&(t.push(r.map(l=>this._createCellForYear(l))),r=[]);this._years.set(t),this._changeDetectorRef.markForCheck()}_yearSelected(e){let a=e.value,t=this._dateAdapter.createDate(a,0,1),n=this._getDateFromYear(a);this.yearSelected.emit(t),this.selectedChange.emit(n)}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromYear(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-dt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,dt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-_e(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,w-_e(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-w*10:-w);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?w*10:w);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return _e(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let a=this._dateAdapter.getMonth(this.activeDate),t=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,a,1));return this._dateAdapter.createDate(e,a,Math.min(this._dateAdapter.getDate(this.activeDate),t))}_createCellForYear(e){let a=this._dateAdapter.createDate(e,0,1),t=this._dateAdapter.getYearName(a),n=this.dateClass?this.dateClass(a,"multi-year"):void 0;return new fe(e,t,t,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(e,0,1);for(let t=a;this._dateAdapter.getYear(t)==e;t=this._dateAdapter.addCalendarDays(t,1))if(this.dateFilter(t))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof _){let a=e.start||e.end;a&&this._selectedYear.set(this._dateAdapter.getYear(a))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(a,t){if(a&1&&K(ee,5),a&2){let n;V(n=E())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(a,t){a&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),F(3,"th",2),p()(),c(4,"tbody",3),g("selectedValueChange",function(r){return t._yearSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),p()()),a&2&&(d(4),v("rows",t._years())("todayValue",t._todayYear())("startValue",t._selectedYear())("endValue",t._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",t._getActiveCell()))},dependencies:[ee],encapsulation:2,changeDetection:0})}return i})();function ra(i,o,e,a,t){let n=i.getYear(o),r=i.getYear(e),l=sa(i,a,t);return Math.floor((n-l)/w)===Math.floor((r-l)/w)}function _e(i,o,e,a){let t=i.getYear(o);return Ba(t-sa(i,e,a),w)}function sa(i,o,e){let a=0;return e?a=i.getYear(e)-w+1:o&&(a=i.getYear(o)),a}function Ba(i,o){return(i%o+o)%o}var ea=(()=>{class i{_changeDetectorRef=s(I);_dateFormats=s(U,{optional:!0});_dateAdapter=s(b,{optional:!0});_dir=s(G,{optional:!0});_rerenderSubscription=A.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),this._dateAdapter.getYear(a)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof _?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new h;monthSelected=new h;activeDateChange=new h;_matCalendarBody;_months=u([]);_yearLabel=u("");_todayMonth=u(null);_selectedMonth=u(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ce(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let a=e.value,t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),a,1);this.monthSelected.emit(t);let n=this._getDateFromMonth(a);this.selectedChange.emit(n)}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromMonth(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(a=>a.map(t=>this._createCellForMonth(t,e[t])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),t=this._dateAdapter.getNumDaysInMonth(a);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),t))}_createCellForMonth(e,a){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(t,this._dateFormats.display.monthYearA11yLabel),r=this.dateClass?this.dateClass(t,"year"):void 0;return new fe(e,a.toLocaleUpperCase(),n,this._shouldEnableMonth(e),r)}_shouldEnableMonth(e){let a=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(a,e)||this._isYearAndMonthBeforeMinDate(a,e))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(a,e,1);for(let n=t;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,a){if(this.maxDate){let t=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>t||e===t&&a>n}return!1}_isYearAndMonthBeforeMinDate(e,a){if(this.minDate){let t=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<t||e===t&&a<n}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof _?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["mat-year-view"]],viewQuery:function(a,t){if(a&1&&K(ee,5),a&2){let n;V(n=E())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(a,t){a&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),F(3,"th",2),p()(),c(4,"tbody",3),g("selectedValueChange",function(r){return t._monthSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),p()()),a&2&&(d(4),v("label",t._yearLabel())("rows",t._months())("todayValue",t._todayMonth())("startValue",t._selectedMonth())("endValue",t._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",t._dateAdapter.getMonth(t.activeDate)))},dependencies:[ee],encapsulation:2,changeDetection:0})}return i})(),oa=(()=>{class i{_intl=s(ne);calendar=s(lt);_dateAdapter=s(b,{optional:!0});_dateFormats=s(U,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(pe).load(Fe);let e=s(I);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-w))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:w))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,a=this._intl,t=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=t.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=t.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=a.switchToMultiYearViewLabel,this._prevButtonLabel=a.prevMonthLabel,this._nextButtonLabel=a.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=t.getYearName(e.activeDate),this._periodButtonDescription=t.getYearName(e.activeDate),this._periodButtonLabel=a.switchToMonthViewLabel,this._prevButtonLabel=a.prevYearLabel,this._nextButtonLabel=a.nextYearLabel):(this._periodButtonText=a.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=a.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=a.switchToMonthViewLabel,this._prevButtonLabel=a.prevMultiYearLabel,this._nextButtonLabel=a.nextMultiYearLabel)}_isSameView(e,a){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(a):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a):ra(this._dateAdapter,e,a,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let a=this._dateAdapter.getYear(this.calendar.activeDate)-_e(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),t=a+w-1,n=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1)),r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1));return[n,r]}_periodButtonLabelId=s(ue).getId("mat-calendar-period-label-");static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:ya,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(a,t){a&1&&(Me(),c(0,"div",0)(1,"div",1)(2,"span",2),f(3),p(),c(4,"button",3),g("click",function(){return t.currentPeriodClicked()}),c(5,"span",4),f(6),p(),re(),c(7,"svg",5),F(8,"polygon",6),p()(),ze(),F(9,"div",7),he(10),c(11,"button",8),g("click",function(){return t.previousClicked()}),re(),c(12,"svg",9),F(13,"path",10),p()(),ze(),c(14,"button",11),g("click",function(){return t.nextClicked()}),re(),c(15,"svg",9),F(16,"path",12),p()()()()),a&2&&(d(2),v("id",t._periodButtonLabelId),d(),T(t.periodButtonDescription),d(),D("aria-label",t.periodButtonLabel)("aria-describedby",t._periodButtonLabelId),d(2),T(t.periodButtonText),d(),x("mat-calendar-invert",t.calendar.currentView!=="month"),d(4),v("disabled",!t.previousEnabled())("matTooltip",t.prevButtonLabel),D("aria-label",t.prevButtonLabel),d(3),v("disabled",!t.nextEnabled())("matTooltip",t.nextButtonLabel),D("aria-label",t.nextButtonLabel))},dependencies:[et,Je,Wt],encapsulation:2,changeDetection:0})}return i})(),lt=(()=>{class i{_dateAdapter=s(b,{optional:!0});_dateFormats=s(U,{optional:!0});_changeDetectorRef=s(I);_elementRef=s(H);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof _?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new h;yearSelected=new h;monthSelected=new h;viewChanged=new h(!0);_userSelection=new h;_userDragDrop=new h;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let a=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),a&&(this.stateChanges.next(),this.viewChanged.emit(a))}_currentView;_activeDrag=null;stateChanges=new Y;constructor(){this._intlChanges=s(ne).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Xe(this.headerComponent||oa),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let a=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,t=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=a||t||e.dateFilter;if(n&&!n.firstChange){let r=this._getCurrentViewComponent();r&&(this._elementRef.nativeElement.contains(Ge())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),r._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let a=e.value;(this.selected instanceof _||a&&!this._dateAdapter.sameDate(a,this.selected))&&this.selectedChange.emit(a),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,a){this.activeDate=e,this.currentView=a}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["mat-calendar"]],viewQuery:function(a,t){if(a&1&&K(Zt,5)(ea,5)(Jt,5),a&2){let n;V(n=E())&&(t.monthView=n.first),V(n=E())&&(t.yearView=n.first),V(n=E())&&(t.multiYearView=n.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[L([ia]),P],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(a,t){if(a&1&&(qe(0,Ca,0,0,"ng-template",0),c(1,"div",1),de(2,wa,1,11,"mat-month-view",2)(3,Aa,1,6,"mat-year-view",3)(4,ka,1,6,"mat-multi-year-view",3),p()),a&2){let n;v("cdkPortalOutlet",t._calendarHeaderPortal),d(2),le((n=t.currentView)==="month"?2:n==="year"?3:n==="multi-year"?4:-1)}},dependencies:[Ze,Ue,Zt,ea,Jt],styles:[`.mat-calendar {
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
`],encapsulation:2,changeDetection:0})}return i})(),Ha=new He("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(se);return()=>Pt(i)}}),da=(()=>{class i{_elementRef=s(H);_animationsDisabled=$e();_changeDetectorRef=s(I);_globalModel=s(B);_dateAdapter=s(b);_ngZone=s(Ke);_rangeSelectionStrategy=s(Ye,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new Y;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(pe).load(Fe),this._closeButtonText=s(ne).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,a=s(We);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,"animationstart",this._handleAnimationEvent),a.listen(e,"animationend",this._handleAnimationEvent),a.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let a=this._model.selection,t=e.value,n=a instanceof _;if(n&&this._rangeSelectionStrategy){let r=this._rangeSelectionStrategy.selectionFinished(t,a,e.event);this._model.updateSelection(r,this)}else t&&(n||!this._dateAdapter.sameDate(t,a))&&this._model.add(t);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let a=this._elementRef.nativeElement;e.target!==a||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",a.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,a){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,a&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(a,t){if(a&1&&K(lt,5),a&2){let n;V(n=E())&&(t._calendar=n.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(a,t){a&2&&(Ve(t.color?"mat-"+t.color:""),x("mat-datepicker-content-touch",t.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!t._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(a,t){a&1&&(c(0,"div",0)(1,"mat-calendar",1),g("yearSelected",function(r){return t.datepicker._selectYear(r)})("monthSelected",function(r){return t.datepicker._selectMonth(r)})("viewChanged",function(r){return t.datepicker._viewChanged(r)})("_userSelection",function(r){return t._handleUserSelection(r)})("_userDragDrop",function(r){return t._handleUserDragDrop(r)}),p(),qe(2,Ma,0,0,"ng-template",2),c(3,"button",3),g("focus",function(){return t._closeButtonFocused=!0})("blur",function(){return t._closeButtonFocused=!1})("click",function(){return t.datepicker.close()}),f(4),p()()),a&2&&(x("mat-datepicker-content-container-with-custom-header",t.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",t._actionsPortal),D("aria-modal",!0)("aria-labelledby",t._dialogLabelId??void 0),d(),Ve(t.datepicker.panelClass),v("id",t.datepicker.id)("startAt",t.datepicker.startAt)("startView",t.datepicker.startView)("minDate",t.datepicker._getMinDate())("maxDate",t.datepicker._getMaxDate())("dateFilter",t.datepicker._getDateFilter())("headerComponent",t.datepicker.calendarHeaderComponent)("selected",t._getSelected())("dateClass",t.datepicker.dateClass)("comparisonStart",t.comparisonStart)("comparisonEnd",t.comparisonEnd)("startDateAccessibleName",t.startDateAccessibleName)("endDateAccessibleName",t.endDateAccessibleName),d(),v("cdkPortalOutlet",t._actionsPortal),d(),x("cdk-visually-hidden",!t._closeButtonFocused),v("color",t.color||"primary"),d(),T(t._closeButtonText))},dependencies:[Mt,lt,Ze,et],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
  min-height: fit-content;
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
`],encapsulation:2,changeDetection:0})}return i})(),Pe=(()=>{class i{_injector=s(se);_viewContainerRef=s(bt);_dateAdapter=s(b,{optional:!0});_dir=s(G,{optional:!0});_model=s(B);_animationsDisabled=$e();_scrollStrategy=s(Ha);_inputStateChanges=A.EMPTY;_document=s(gt);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new h;monthSelected=new h;viewChanged=new h(!0);dateClass;openedStream=new h;closedStream=new h;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Vt(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(ue).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new Y;_changeDetectorRef=s(I);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let a=e.xPosition||e.yPosition;if(a&&!a.firstChange&&this._overlayRef){let t=this._overlayRef.getConfig().positionStrategy;t instanceof Bt&&(this._setConnectedPositions(t),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Ge(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",a=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:t,location:n}=this._componentRef;t._animationDone.pipe(mt(1)).subscribe(()=>{let r=this._document.activeElement;e&&(!r||r===this._document.activeElement||n.nativeElement.contains(r))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),t._startExitAnimation()}e?setTimeout(a):a()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,a=new Xe(da,this._viewContainerRef),t=this._overlayRef=zt(this._injector,new Nt({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Yt(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(t).subscribe(n=>{n&&n.preventDefault(),this.close()}),t.keydownEvents().subscribe(n=>{let r=n.keyCode;(r===38||r===40||r===37||r===39||r===33||r===34)&&n.preventDefault()}),this._componentRef=t.attach(a),this._forwardContentValues(this._componentRef.instance),e||je(()=>{t.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Ht(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Lt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let a=this.xPosition==="end"?"end":"start",t=a==="start"?"end":"start",n=this.yPosition==="above"?"bottom":"top",r=n==="top"?"bottom":"top";return e.withPositions([{originX:a,originY:r,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:r},{originX:t,originY:r,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:r}])}_getCloseStream(e){let a=["ctrlKey","shiftKey","metaKey"];return ie(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(ut(t=>t.keyCode===27&&!j(t)||this.datepickerInput&&j(t,"altKey")&&t.keyCode===38&&a.every(n=>!j(t,n)))))}static \u0275fac=function(a){return new(a||i)};static \u0275dir=N({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",O],disabled:[2,"disabled","disabled",O],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",O],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",O]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[P]})}return i})(),Tn=(()=>{class i extends Pe{static \u0275fac=(()=>{let e;return function(t){return(e||(e=oe(i)))(t||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[L([ia,{provide:Pe,useExisting:i}]),z],decls:0,vars:0,template:function(a,t){},encapsulation:2,changeDetection:0})}return i})(),X=class{target;targetElement;value=null;constructor(o,e){this.target=o,this.targetElement=e,this.value=this.target.value}},la=(()=>{class i{_elementRef=s(H);_dateAdapter=s(b,{optional:!0});_dateFormats=s(U,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let a=e,t=this._elementRef.nativeElement;this._disabled!==a&&(this._disabled=a,this.stateChanges.next(void 0)),a&&this._isInitialized&&t.blur&&t.blur()}_disabled;dateChange=new h;dateInput=new h;stateChanges=new Y;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=A.EMPTY;_localeSubscription=A.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!a||this._matchesFilter(a)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._getMinDate();return!t||!a||this._dateAdapter.compareDate(t,a)<=0?null:{matDatepickerMin:{min:t,actual:a}}};_maxValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._getMaxDate();return!t||!a||this._dateAdapter.compareDate(t,a)>=0?null:{matDatepickerMax:{max:t,actual:a}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(a=>{if(this._shouldHandleChangeEvent(a)){let t=this._getValueFromModel(a.selection);this._lastValueValid=this._isValidValue(t),this._cvaOnChange(t),this._onTouched(),this._formatValue(t),this.dateInput.emit(new X(this,this._elementRef.nativeElement)),this.dateChange.emit(new X(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){ca(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let a=["ctrlKey","shiftKey","metaKey"];j(e,"altKey")&&e.keyCode===40&&a.every(n=>!j(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let a=e.target.value,t=this._lastValueValid,n=this._dateAdapter.parse(a,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let r=!this._dateAdapter.sameDate(n,this.value);!n||r?this._cvaOnChange(n):(a&&!this.value&&this._cvaOnChange(n),t!==this._lastValueValid&&this._validatorOnChange()),r&&(this._assignValue(n),this.dateInput.emit(new X(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new X(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,a){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),a&&this._formatValue(e)}_matchesFilter(e){let a=this._getDateFilter();return!a||a(e)}static \u0275fac=function(a){return new(a||i)};static \u0275dir=N({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",O]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[P]})}return i})();function ca(i,o){let e=Object.keys(i);for(let a of e){let{previousValue:t,currentValue:n}=i[a];if(o.isDateInstance(t)&&o.isDateInstance(n)){if(!o.sameDate(t,n))return!0}else return!0}return!1}var za={provide:Re,useExisting:Be(()=>ha),multi:!0},Ka={provide:Te,useExisting:Be(()=>ha),multi:!0},ha=(()=>{class i extends la{_formField=s(tt,{optional:!0});_closedSubscription=A.EMPTY;_openedSubscription=A.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=u(null);get min(){return this._min}set min(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._min)||(this._min=a,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._max)||(this._max=a,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let a=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==a&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=me.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(a){return new(a||i)};static \u0275dir=N({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(a,t){a&1&&g("input",function(r){return t._onInput(r)})("change",function(){return t._onChange()})("blur",function(){return t._onBlur()})("keydown",function(r){return t._onKeydown(r)}),a&2&&(R("disabled",t.disabled),D("aria-haspopup",t._datepicker?"dialog":null)("aria-owns",t._ariaOwns())("min",t.min?t._dateAdapter.toIso8601(t.min):null)("max",t.max?t._dateAdapter.toIso8601(t.max):null)("data-mat-calendar",t._datepicker?t._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[L([za,Ka,{provide:Qt,useExisting:i}]),z]})}return i})(),ja=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275dir=N({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),Wa=(()=>{class i{_intl=s(ne);_changeDetectorRef=s(I);_stateChanges=A.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new wt("tabindex"),{optional:!0}),a=Number(e);this.tabIndex=a||a===0?a:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:ye(),a=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:ye(),t=this.datepicker?ie(this.datepicker.openedStream,this.datepicker.closedStream):ye();this._stateChanges.unsubscribe(),this._stateChanges=ie(this._intl.changes,e,a,t).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(a,t,n){if(a&1&&Ct(n,ja,5),a&2){let r;V(r=E())&&(t._customIcon=r.first)}},viewQuery:function(a,t){if(a&1&&K(Sa,5),a&2){let n;V(n=E())&&(t._button=n.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(a,t){a&1&&g("click",function(r){return t._open(r)}),a&2&&(D("tabindex",null)("data-mat-calendar",t.datepicker?t.datepicker.id:null),x("mat-datepicker-toggle-active",t.datepicker&&t.datepicker.opened)("mat-accent",t.datepicker&&t.datepicker.color==="accent")("mat-warn",t.datepicker&&t.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",O],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[P],ngContentSelectors:Ea,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(a,t){a&1&&(Me(Va),c(0,"button",1,0),de(2,xa,2,0,":svg:svg",2),he(3),p()),a&2&&(v("tabIndex",t.disabled?-1:t.tabIndex)("disabled",t.disabled)("disableRipple",t.disableRipple),D("aria-haspopup",t.datepicker?"dialog":null)("aria-label",t.ariaLabel||t._intl.openCalendarLabel)("aria-expanded",t.datepicker?t.datepicker.opened:null),d(2),le(t._customIcon?-1:2))},dependencies:[Je],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2,changeDetection:0})}return i})(),qa=(()=>{class i{_changeDetectorRef=s(I);_elementRef=s(H);_dateAdapter=s(b,{optional:!0});_formField=s(tt,{optional:!0});_closedSubscription=A.EMPTY;_openedSubscription=A.EMPTY;_startInput;_endInput;get value(){return this._model?this._model.selection:null}id=s(ue).getId("mat-date-range-input-");focused=!1;get shouldLabelFloat(){return this.focused||!this.empty}controlType="mat-date-range-input";get placeholder(){let e=this._startInput?._getPlaceholder()||"",a=this._endInput?._getPlaceholder()||"";return e||a?`${e} ${this.separator} ${a}`:""}get rangePicker(){return this._rangePicker}set rangePicker(e){e&&(this._model=e.registerInput(this),this._rangePicker=e,this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe(),this._ariaOwns.set(this.rangePicker.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._startInput?._onTouched(),this._endInput?._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(this._model))}_rangePicker;_ariaOwns=u(null);get required(){return this._required??(this._isTargetRequired(this)||this._isTargetRequired(this._startInput)||this._isTargetRequired(this._endInput))??!1}set required(e){this._required=e}_required;get dateFilter(){return this._dateFilter}set dateFilter(e){let a=this._startInput,t=this._endInput,n=a&&a._matchesFilter(a.value),r=t&&t._matchesFilter(a.value);this._dateFilter=e,a&&a._matchesFilter(a.value)!==n&&a._validatorOnChange(),t&&t._matchesFilter(t.value)!==r&&t._validatorOnChange()}_dateFilter;get min(){return this._min}set min(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._min)||(this._min=a,this._revalidate())}_min=null;get max(){return this._max}set max(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._max)||(this._max=a,this._revalidate())}_max=null;get disabled(){return this._startInput&&this._endInput?this._startInput.disabled&&this._endInput.disabled:this._groupDisabled}set disabled(e){e!==this._groupDisabled&&(this._groupDisabled=e,this.stateChanges.next(void 0))}_groupDisabled=!1;get errorState(){return this._startInput&&this._endInput?this._startInput.errorState||this._endInput.errorState:!1}get empty(){let e=this._startInput?this._startInput.isEmpty():!1,a=this._endInput?this._endInput.isEmpty():!1;return e&&a}_ariaDescribedBy=null;_model;separator="\u2013";comparisonStart=null;comparisonEnd=null;ngControl;stateChanges=new Y;disableAutomaticLabeling=!0;constructor(){this._dateAdapter,this._formField?._elementRef.nativeElement.classList.contains("mat-mdc-form-field")&&this._elementRef.nativeElement.classList.add("mat-mdc-input-element","mat-mdc-form-field-input-control","mdc-text-field__input"),this.ngControl=s(It,{optional:!0,self:!0})}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){this._ariaDescribedBy=e.length?e.join(" "):null}onContainerClick(){!this.focused&&!this.disabled&&(!this._model||!this._model.selection.start?this._startInput.focus():this._endInput.focus())}ngAfterContentInit(){this._model&&this._registerModel(this._model),ie(this._startInput.stateChanges,this._endInput.stateChanges).subscribe(()=>{this.stateChanges.next(void 0)})}ngOnChanges(e){ca(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe(),this.stateChanges.complete()}getStartValue(){return this.value?this.value.start:null}getThemePalette(){return this._formField?this._formField.color:void 0}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():null}_getInputMirrorValue(e){let a=e==="start"?this._startInput:this._endInput;return a?a.getMirrorValue():""}_shouldHidePlaceholders(){return this._startInput?!this._startInput.isEmpty():!1}_handleChildValueChange(){this.stateChanges.next(void 0),this._changeDetectorRef.markForCheck()}_openDatepicker(){this._rangePicker&&this._rangePicker.open()}_shouldHideSeparator(){return(!this._formField||this._formField.getLabelId()&&!this._formField._shouldLabelFloat())&&this.empty}_getAriaLabelledby(){let e=this._formField;return e&&e._hasFloatingLabel()?e._labelId:null}_getStartDateAccessibleName(){return this._startInput._getAccessibleName()}_getEndDateAccessibleName(){return this._endInput._getAccessibleName()}_updateFocus(e){this.focused=e!==null,this.stateChanges.next()}_revalidate(){this._startInput&&this._startInput._validatorOnChange(),this._endInput&&this._endInput._validatorOnChange()}_registerModel(e){this._startInput&&this._startInput._registerModel(e),this._endInput&&this._endInput._registerModel(e)}_isTargetRequired(e){return e?.ngControl?.control?.hasValidator(me.required)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=k({type:i,selectors:[["mat-date-range-input"]],hostAttrs:["role","group",1,"mat-date-range-input"],hostVars:8,hostBindings:function(a,t){a&2&&(D("id",t.id)("aria-labelledby",t._getAriaLabelledby())("aria-describedby",t._ariaDescribedBy)("data-mat-calendar",t.rangePicker?t.rangePicker.id:null),x("mat-date-range-input-hide-placeholders",t._shouldHidePlaceholders())("mat-date-range-input-required",t.required))},inputs:{rangePicker:"rangePicker",required:[2,"required","required",O],dateFilter:"dateFilter",min:"min",max:"max",disabled:[2,"disabled","disabled",O],separator:"separator",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd"},exportAs:["matDateRangeInput"],features:[L([{provide:qt,useExisting:i}]),P],ngContentSelectors:Fa,decls:11,vars:5,consts:[["cdkMonitorSubtreeFocus","",1,"mat-date-range-input-container",3,"cdkFocusChange"],[1,"mat-date-range-input-wrapper"],["aria-hidden","true",1,"mat-date-range-input-mirror"],[1,"mat-date-range-input-separator"],[1,"mat-date-range-input-wrapper","mat-date-range-input-end-wrapper"]],template:function(a,t){a&1&&(Me(Ia),c(0,"div",0),g("cdkFocusChange",function(r){return t._updateFocus(r)}),c(1,"div",1),he(2),c(3,"span",2),f(4),p()(),c(5,"span",3),f(6),p(),c(7,"div",4),he(8,1),c(9,"span",2),f(10),p()()()),a&2&&(d(4),T(t._getInputMirrorValue("start")),d(),x("mat-date-range-input-separator-hidden",t._shouldHideSeparator()),d(),T(t.separator),d(4),T(t._getInputMirrorValue("end")))},dependencies:[Ue],styles:[`.mat-date-range-input {
  display: block;
  width: 100%;
}

.mat-date-range-input-container {
  display: flex;
  align-items: center;
}

.mat-date-range-input-separator {
  transition: opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0 4px;
  color: var(--mat-datepicker-range-input-separator-color, var(--mat-sys-on-surface));
}
.mat-form-field-disabled .mat-date-range-input-separator {
  color: var(--mat-datepicker-range-input-disabled-state-separator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
._mat-animation-noopable .mat-date-range-input-separator {
  transition: none;
}

.mat-date-range-input-separator-hidden {
  -webkit-user-select: none;
  user-select: none;
  opacity: 0;
  transition: none;
}

.mat-date-range-input-wrapper {
  position: relative;
  overflow: hidden;
  max-width: calc(50% - 4px);
}

.mat-date-range-input-end-wrapper {
  flex-grow: 1;
}

.mat-date-range-input-inner {
  position: absolute;
  top: 0;
  left: 0;
  font: inherit;
  background: transparent;
  color: currentColor;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  vertical-align: bottom;
  text-align: inherit;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
}
.mat-date-range-input-inner:-moz-ui-invalid {
  box-shadow: none;
}
.mat-date-range-input-inner::placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner::-moz-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner::-webkit-input-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner:-ms-input-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner[disabled] {
  color: var(--mat-datepicker-range-input-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {
    opacity: 0;
  }
}
._mat-animation-noopable .mat-date-range-input-inner::placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder {
  transition: none;
}

.mat-date-range-input-mirror {
  -webkit-user-select: none;
  user-select: none;
  visibility: hidden;
  white-space: nowrap;
  display: inline-block;
  min-width: 2px;
}

.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix {
  width: 200px;
}
`],encapsulation:2,changeDetection:0})}return i})();function Qa(i){return ct(i,!0)}function ta(i){return i.nodeType===Node.ELEMENT_NODE}function $a(i){return i.nodeName==="INPUT"}function Ga(i){return i.nodeName==="TEXTAREA"}function ct(i,o){if(ta(i)&&o){let a=(i.getAttribute?.("aria-labelledby")?.split(/\s+/g)||[]).reduce((t,n)=>{let r=document.getElementById(n);return r&&t.push(r),t},[]);if(a.length)return a.map(t=>ct(t,!1)).join(" ")}if(ta(i)){let e=i.getAttribute("aria-label")?.trim();if(e)return e}if($a(i)||Ga(i)){if(i.labels?.length)return Array.from(i.labels).map(t=>ct(t,!1)).join(" ");let e=i.getAttribute("placeholder")?.trim();if(e)return e;let a=i.getAttribute("title")?.trim();if(a)return a}return(i.textContent||"").replace(/\s+/g," ").trim()}var pa=(()=>{class i extends la{_rangeInput=s(qa);_elementRef=s(H);_defaultErrorStateMatcher=s($t);_injector=s(se);_rawValue=u("");_parentForm=s(Rt,{optional:!0});_parentFormGroup=s(Tt,{optional:!0});ngControl;_dir=s(G,{optional:!0});_errorStateTracker;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super(),this._errorStateTracker=new Gt(this._defaultErrorStateMatcher,null,this._parentFormGroup,this._parentForm,this.stateChanges)}ngOnInit(){let e=this._injector.get(Ft,null,{optional:!0,self:!0});e&&(this.ngControl=e,this._errorStateTracker.ngControl=e)}ngAfterContentInit(){this._register()}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._rawValue.set(this._elementRef.nativeElement.value)}isEmpty(){return this._rawValue().length===0}_getPlaceholder(){return this._elementRef.nativeElement.placeholder}focus(){this._elementRef.nativeElement.focus()}getMirrorValue(){let e=this._rawValue();return e.length>0?e:this._getPlaceholder()}updateErrorState(){this._errorStateTracker.updateErrorState()}_onInput(e){super._onInput(e),this._rangeInput._handleChildValueChange()}_openPopup(){this._rangeInput._openDatepicker()}_getMinDate(){return this._rangeInput.min}_getMaxDate(){return this._rangeInput.max}_getDateFilter(){return this._rangeInput.dateFilter}_parentDisabled(){return this._rangeInput._groupDisabled}_shouldHandleChangeEvent({source:e}){return e!==this._rangeInput._startInput&&e!==this._rangeInput._endInput}_assignValueProgrammatically(e,a){super._assignValueProgrammatically(e,a),(this===this._rangeInput._startInput?this._rangeInput._endInput:this._rangeInput._startInput)?._validatorOnChange(),this._rawValue.set(this._elementRef.nativeElement.value)}_formatValue(e){super._formatValue(e),this._rangeInput._handleChildValueChange()}_getAccessibleName(){return Qa(this._elementRef.nativeElement)}static \u0275fac=function(a){return new(a||i)};static \u0275dir=N({type:i,inputs:{errorStateMatcher:"errorStateMatcher"},features:[z]})}return i})(),On=(()=>{class i extends pa{_startValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._model?this._model.selection.end:null;return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matStartDateInvalid:{end:t,actual:a}}};_validator=me.compose([...super._getValidators(),this._startValidator]);_register(){this._rangeInput._startInput=this}_getValueFromModel(e){return e.start}_shouldHandleChangeEvent(e){return super._shouldHandleChangeEvent(e)?e.oldValue?.start?!e.selection.start||!!this._dateAdapter.compareDate(e.oldValue.start,e.selection.start):!!e.selection.start:!1}_assignValueToModel(e){if(this._model){let a=new _(e,this._model.selection.end);this._model.updateSelection(a,this),this._rangeInput._handleChildValueChange()}}_onKeydown(e){let a=this._rangeInput._endInput,t=this._elementRef.nativeElement,n=this._dir?.value!=="rtl";(e.keyCode===39&&n||e.keyCode===37&&!n)&&t.selectionStart===t.value.length&&t.selectionEnd===t.value.length?(e.preventDefault(),a._elementRef.nativeElement.setSelectionRange(0,0),a.focus()):super._onKeydown(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=oe(i)))(t||i)}})();static \u0275dir=N({type:i,selectors:[["input","matStartDate",""]],hostAttrs:["type","text",1,"mat-start-date","mat-date-range-input-inner"],hostVars:5,hostBindings:function(a,t){a&1&&g("input",function(r){return t._onInput(r)})("change",function(){return t._onChange()})("keydown",function(r){return t._onKeydown(r)})("blur",function(){return t._onBlur()}),a&2&&(R("disabled",t.disabled),D("aria-haspopup",t._rangeInput.rangePicker?"dialog":null)("aria-owns",t._rangeInput._ariaOwns()||null)("min",t._getMinDate()?t._dateAdapter.toIso8601(t._getMinDate()):null)("max",t._getMaxDate()?t._dateAdapter.toIso8601(t._getMaxDate()):null))},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[L([{provide:Re,useExisting:i,multi:!0},{provide:Te,useExisting:i,multi:!0}]),z]})}return i})(),Yn=(()=>{class i extends pa{_endValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._model?this._model.selection.start:null;return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matEndDateInvalid:{start:t,actual:a}}};_register(){this._rangeInput._endInput=this}_validator=me.compose([...super._getValidators(),this._endValidator]);_getValueFromModel(e){return e.end}_shouldHandleChangeEvent(e){return super._shouldHandleChangeEvent(e)?e.oldValue?.end?!e.selection.end||!!this._dateAdapter.compareDate(e.oldValue.end,e.selection.end):!!e.selection.end:!1}_assignValueToModel(e){if(this._model){let a=new _(this._model.selection.start,e);this._model.updateSelection(a,this)}}_moveCaretToEndOfStartInput(){let e=this._rangeInput._startInput._elementRef.nativeElement,a=e.value;a.length>0&&e.setSelectionRange(a.length,a.length),e.focus()}_onKeydown(e){let a=this._elementRef.nativeElement,t=this._dir?.value!=="rtl";e.keyCode===8&&!a.value?this._moveCaretToEndOfStartInput():(e.keyCode===37&&t||e.keyCode===39&&!t)&&a.selectionStart===0&&a.selectionEnd===0?(e.preventDefault(),this._moveCaretToEndOfStartInput()):super._onKeydown(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=oe(i)))(t||i)}})();static \u0275dir=N({type:i,selectors:[["input","matEndDate",""]],hostAttrs:["type","text",1,"mat-end-date","mat-date-range-input-inner"],hostVars:5,hostBindings:function(a,t){a&1&&g("input",function(r){return t._onInput(r)})("change",function(){return t._onChange()})("keydown",function(r){return t._onKeydown(r)})("blur",function(){return t._onBlur()}),a&2&&(R("disabled",t.disabled),D("aria-haspopup",t._rangeInput.rangePicker?"dialog":null)("aria-owns",t._rangeInput._ariaOwns()||null)("min",t._getMinDate()?t._dateAdapter.toIso8601(t._getMinDate()):null)("max",t._getMaxDate()?t._dateAdapter.toIso8601(t._getMaxDate()):null))},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[L([{provide:Re,useExisting:i,multi:!0},{provide:Te,useExisting:i,multi:!0}]),z]})}return i})(),Pn=(()=>{class i extends Pe{_forwardContentValues(e){super._forwardContentValues(e);let a=this.datepickerInput;a&&(e.comparisonStart=a.comparisonStart,e.comparisonEnd=a.comparisonEnd,e.startDateAccessibleName=a._getStartDateAccessibleName(),e.endDateAccessibleName=a._getEndDateAccessibleName())}static \u0275fac=(()=>{let e;return function(t){return(e||(e=oe(i)))(t||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-date-range-picker"]],exportAs:["matDateRangePicker"],features:[L([Pa,{provide:Ye,useFactory:()=>s(Ye,{optional:!0,skipSelf:!0})||new Na(s(b))},{provide:Pe,useExisting:i}]),z],decls:0,vars:0,template:function(a,t){},encapsulation:2,changeDetection:0})}return i})();var Nn=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=Dt({type:i});static \u0275inj=_t({providers:[ne],imports:[jt,Kt,St,Ot,da,Wa,oa,kt,Et]})}return i})();export{Tn as a,ha as b,Wa as c,qa as d,On as e,Yn as f,Pn as g,Nn as h};
