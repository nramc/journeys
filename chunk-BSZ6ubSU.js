import{$r as vm,Ar as oD,B as Hn,Bt as Uh,Cr as ml,Dr as ng,G as Iv,Gn as gl,H as Ig,Hn as gE,Ht as V1,J as Ji$1,K as Iw,Kn as gr,Kt as Vw,L as He,Lr as qh,Mt as Sd,N as Gh,Nt as Sh,Qt as We$1,R as Hh,S as El,Sr as mg,Tn as bh,Tr as nD,U as Im,Un as gd,Wn as ge,X as Ki,Xn as hl,Xt as WD,Yt as W1,Z as Ks,Zt as WT,_i as ym,_r as lg,a as $n,ar as jr,at as N,bi as yt,br as mT,d as Bh,f as Bm,fi as yT,ft as Oi$1,gi as yl,gn as _p,gt as P1,ht as Ow,j as G1,jt as Rr,k as Fw,li as xm,ln as ZD,lt as Nu,mr as kw,mt as Or,ni as w,nn as Xh,nt as Mu,o as Ah,qn as gw,qr as uT,r as $h,ri as wT,s as Aw,sn as Z,sr as jw,st as Nd,ti as vw,tr as ig,tt as Mr,ur as kg,v as Cw,w as F1,wn as bT,wr as mw,x as Eg,xi as yw,xn as aT,xr as md,xt as Pw,y as Dm,yn as _u,z as Hm,zn as ev,zt as U1}from"./chunk-l5UO2fQM.js";import{i as K,v as ci}from"./chunk-CvwVXkd4.js";import{A as m,B as ys,E as ki$1,I as qe$1,S as ge$1,b as at,d as P,t as Ai$1}from"./chunk-BPdYwIzr.js";import{E as xn$1,F as c,J as Yt,Nt as L$1,Y as mt,a as yt$1,at as o,b as rn$1,bt as J,c as Kt,dn as zn,g as ke,i as wt,it as d,l as Nn$1,mt as T,n as _t,qt as li,r as ue,rn as Bt,rt as D,s as In$1,sn as Tn$1,tn as yt$2,tt as g,u as On$1,un as xt}from"./main-QHIQXI4V.js";import{t as $o}from"./chunk-CRLmlqIB.js";import"./chunk-BrCdN3v-.js";import{t as L$2}from"./chunk-BV8FJ9hD.js";import{t as C}from"./chunk-Dn0d8xT9.js";import{t as u}from"./chunk-CGUxHski.js";import"./chunk-CpBzxGBV.js";import"./chunk-7WvfQV48.js";import{i as ke$1,s as ut,t as Qt}from"./chunk-NVN6rdff.js";import{n as De}from"./chunk-DW1kklzN.js";import{n as Nt,r as Pt}from"./chunk-B0T6ui5S.js";var pi=(()=>{class t{constructor(){this.searchEvent=P1(),this.q=``}submitSearch(e){e.valid&&this.searchEvent.emit(this.q)}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=WD({type:t,selectors:[[`app-journey-search-criteria`]],outputs:{searchEvent:`searchEvent`},decls:11,vars:1,consts:[[`searchForm`,`ngForm`],[1,`flex`,`flex-row`,`gap-4`,3,`submit`],[`appearance`,`outline`,1,`w-full`],[`placeholder`,`Use * for wildcard search`,`aria-label`,`Query`,`id`,`query`,`name`,`query`,`matInput`,``,`ngModel`,``,3,`ngModelChange`,`ngModel`],[`mat-icon-button`,``,`matSuffix`,``,`type`,`submit`,`aria-label`,`Search`],[`mat-fab`,``,`extended`,``,`routerLink`,`/journey/new`],[1,`text-primary`]],template:function(i,n){if(i&1){let o=Cw();Oi$1(0,`form`,1,0),Xh(`submit`,function(){gd(o);let s=Vw(1);return md(n.submitSearch(s))}),Oi$1(2,`mat-form-field`,2)(3,`input`,3),Eg(`ngModelChange`,function(s){return gd(o),uT(n.q,s)||(n.q=s),md(s)}),hl(),nD(),nD(),Oi$1(4,`button`,4)(5,`mat-icon`),aT(6,`search`),hl()()(),Oi$1(7,`button`,5)(8,`mat-icon`,6),aT(9,`location_on`),hl(),aT(10,` New `),hl()()}i&2&&(gE(3),Ig(`ngModel`,n.q),oD(),oD())},dependencies:[xn$1,On$1,ke,Nn$1,In$1,rn$1,Kt,_t,Tn$1,Bt,zn,yt$1,wt,Qt,ke$1,ut,De],encapsulation:2})}}return t})();function ji(t,a){if(t&1&&(Oi$1(0,`mat-option`,17),aT(1),hl()),t&2){let e=a.$implicit;$h(`value`,e),gE(),El(` `,e,` `)}}function Vi(t,a){if(t&1){let e=Cw();Oi$1(0,`mat-form-field`,14)(1,`mat-select`,16,0),Xh(`selectionChange`,function(n){gd(e);return md(Aw(2)._changePageSize(n.value))}),vw(3,ji,2,2,`mat-option`,17,yw),hl(),Oi$1(5,`div`,18),Xh(`click`,function(){gd(e);return md(Vw(2).open())}),hl()()}if(t&2){let e=Aw(2);$h(`appearance`,e._formFieldAppearance)(`color`,e.color),gE(),$h(`value`,e.pageSize)(`disabled`,e.disabled),Hh(`aria-labelledby`,e._pageSizeLabelId),$h(`panelClass`,e.selectConfig.panelClass||``)(`disableOptionCentering`,e.selectConfig.disableOptionCentering),gE(2),Iw(e._displayedPageSizeOptions)}}function Ji(t,a){if(t&1&&(Oi$1(0,`div`,15),aT(1),hl()),t&2){let e=Aw(2);gE(),mg(e.pageSize)}}function Ui(t,a){if(t&1&&(Oi$1(0,`div`,3)(1,`div`,13),aT(2),hl(),gw(3,Vi,6,7,`mat-form-field`,14),gw(4,Ji,2,1,`div`,15),hl()),t&2){let e=Aw();gE(),Bh(`id`,e._pageSizeLabelId),gE(),El(` `,e._intl.itemsPerPageLabel,` `),gE(),mw(e._displayedPageSizeOptions.length>1?3:-1),gE(),mw(e._displayedPageSizeOptions.length<=1?4:-1)}}function $i(t,a){if(t&1){let e=Cw();Oi$1(0,`button`,19),Xh(`click`,function(){gd(e);let n=Aw();return md(n._buttonClicked(0,n._previousButtonsDisabled()))}),Nd(),Oi$1(1,`svg`,8),Uh(2,`path`,20),hl()()}if(t&2){let e=Aw();$h(`matTooltip`,e._intl.firstPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),Bh(`aria-label`,e._intl.firstPageLabel)}}function qi(t,a){if(t&1){let e=Cw();Oi$1(0,`button`,21),Xh(`click`,function(){gd(e);let n=Aw();return md(n._buttonClicked(n.getNumberOfPages()-1,n._nextButtonsDisabled()))}),Nd(),Oi$1(1,`svg`,8),Uh(2,`path`,22),hl()()}if(t&2){let e=Aw();$h(`matTooltip`,e._intl.lastPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),Bh(`aria-label`,e._intl.lastPageLabel)}}var Qi=(()=>{class t{changes=new Z;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,i,n)=>{if(n==0||i==0)return`0 of ${n}`;n=Math.max(n,0);let o=e*i,r=o<n?Math.min(o+i,n):o+i;return`${o+1} \u2013 ${r} of ${n}`};static ɵfac=function(i){return new(i||t)};static ɵprov=Rr({token:t,factory:t.ɵfac})}return t})();var Wi=50;var Gi=new N(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var he=(()=>{class t{_intl=w(Qi);_changeDetectorRef=w(U1);_formFieldAppearance;_pageSizeLabelId=w(ge$1).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new $n(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>G1(i,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new We$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,i=w(Gi,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:n,pageSizeOptions:o,hidePageSize:r,showFirstLastButtons:s}=i;n!=null&&(this._pageSize=n),o!=null&&(this._pageSizeOptions=o),r!=null&&(this.hidePageSize=r),s!=null&&(this.showFirstLastButtons=s)}this._formFieldAppearance=i?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let i=this.pageIndex*this.pageSize,n=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(n)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Wi),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i))}_buttonClicked(e,i){i||this._navigate(e)}static ɵfac=function(i){return new(i||t)};static ɵcmp=WD({type:t,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,G1],length:[2,`length`,`length`,G1],pageSize:[2,`pageSize`,`pageSize`,G1],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,W1],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,W1],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,W1]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(i,n){i&1&&(Oi$1(0,`div`,1)(1,`div`,2),gw(2,Ui,5,4,`div`,3),Oi$1(3,`div`,4)(4,`div`,5),aT(5),hl(),gw(6,$i,3,5,`button`,6),Oi$1(7,`button`,7),Xh(`click`,function(){return n._buttonClicked(n.pageIndex-1,n._previousButtonsDisabled())}),Nd(),Oi$1(8,`svg`,8),Uh(9,`path`,9),hl()(),Sd(),Oi$1(10,`button`,10),Xh(`click`,function(){return n._buttonClicked(n.pageIndex+1,n._nextButtonsDisabled())}),Nd(),Oi$1(11,`svg`,8),Uh(12,`path`,11),hl()(),gw(13,qi,3,5,`button`,12),hl()()()),i&2&&(gE(2),mw(n.hidePageSize?-1:2),gE(3),El(` `,n._intl.getRangeLabel(n.pageIndex,n.pageSize,n.length),` `),gE(),mw(n.showFirstLastButtons?6:-1),gE(),$h(`matTooltip`,n._intl.previousPageLabel)(`matTooltipDisabled`,n._previousButtonsDisabled())(`disabled`,n._previousButtonsDisabled())(`tabindex`,n._previousButtonsDisabled()?-1:null),Bh(`aria-label`,n._intl.previousPageLabel),gE(3),$h(`matTooltip`,n._intl.nextPageLabel)(`matTooltipDisabled`,n._nextButtonsDisabled())(`disabled`,n._nextButtonsDisabled())(`tabindex`,n._nextButtonsDisabled()?-1:null),Bh(`aria-label`,n._intl.nextPageLabel),gE(3),mw(n.showFirstLastButtons?13:-1))},dependencies:[ke$1,Nt,J,Bt,mt],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return t})();var gi=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=bh({type:t});static ɵinj=Ks({imports:[Tn$1,Pt,Yt,he]})}return t})();var Zi=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Xi=[`caption`,`colgroup, col`,`*`];function en(t,a){t&1&&kw(0,2)}function tn(t,a){t&1&&(Oi$1(0,`thead`,0),Gh(1,1),hl(),Oi$1(2,`tbody`,0),Gh(3,2)(4,3),hl(),Oi$1(5,`tfoot`,0),Gh(6,4),hl())}function nn(t,a){t&1&&Gh(0,1)(1,2)(2,3)(3,4)}var L=new N(`CDK_TABLE`);var Fe=(()=>{class t{template=w(Mr);static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`cdkCellDef`,``]]})}return t})();var Oe=(()=>{class t{template=w(Mr);static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`cdkHeaderCellDef`,``]]})}return t})();var wi=(()=>{class t{template=w(Mr);static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`cdkFooterCellDef`,``]]})}return t})();var G=(()=>{class t{_table=w(L,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(i,n,o){if(i&1&&ng(o,Fe,5)(o,Oe,5)(o,wi,5),i&2){let r;Pw(r=Fw())&&(n.cell=r.first),Pw(r=Fw())&&(n.headerCell=r.first),Pw(r=Fw())&&(n.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,W1],stickyEnd:[2,`stickyEnd`,`stickyEnd`,W1]}})}return t})();var Ie=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName)}};var Ci=(()=>{class t extends Ie{constructor(){super(w(G),w(Or))}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Sh]})}return t})();var vi=(()=>{class t extends Ie{constructor(){let e=w(G),i=w(Or);super(e,i);let n=e._table?._getCellRole();n&&i.nativeElement.setAttribute(`role`,n)}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Sh]})}return t})();var qe=(()=>{class t{template=w(Mr);_differs=w(WT);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof we?e.headerCell.template:this instanceof Qe?e.footerCell.template:e.cell.template}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,features:[ev]})}return t})();var we=(()=>{class t extends qe{_table=w(L,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,W1]},features:[Sh,ev]})}return t})();var Qe=(()=>{class t extends qe{_table=w(L,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,W1]},features:[Sh,ev]})}return t})();var Pe=(()=>{class t extends qe{_table=w(L,{optional:!0});when;static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Sh]})}return t})();var te=(()=>{class t{_viewContainer=w(Ki);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`cdkCellOutlet`,``]]})}return t})();var We=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=WD({type:t,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,n){i&1&&Gh(0,0)},dependencies:[te],encapsulation:2,changeDetection:1})}return t})();var Ge=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=WD({type:t,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,n){i&1&&Gh(0,0)},dependencies:[te],encapsulation:2,changeDetection:1})}return t})();var bi=(()=>{class t{templateRef=w(Mr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return t})();var _i=[`top`,`bottom`,`left`,`right`];var $e=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(a,e,i=!0,n=!0,o,r,s){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=n,this.direction=o,this._positionListener=r,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(a,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(a);let i=[];for(let n of a)n.nodeType===n.ELEMENT_NODE&&i.push(n,...Array.from(n.children));_p({write:()=>{for(let n of i)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(a,e,i,n=!0,o=!0){if(!a.length||!this._isBrowser||!(e.some(I=>I)||i.some(I=>I))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=a[0],s=r.children.length,u=this.direction===`rtl`,p=u?`right`:`left`,g=u?`left`:`right`,E=e.lastIndexOf(!0),w=i.indexOf(!0),C,tt,it;o&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...i]}),_p({earlyRead:()=>{C=this._getCellWidths(r,n),tt=this._getStickyStartColumnPositions(C,e),it=this._getStickyEndColumnPositions(C,i)},write:()=>{for(let I of a)for(let T=0;T<s;T++){let nt=I.children[T];e[T]&&this._addStickyStyle(nt,p,tt[T],T===E),i[T]&&this._addStickyStyle(nt,g,it[T],T===w)}this._positionListener&&C.some(I=>!!I)&&(this._positionListener.stickyColumnsUpdated({sizes:E===-1?[]:C.slice(0,E+1).map((I,T)=>e[T]?I:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:w===-1?[]:C.slice(w).map((I,T)=>i[T+w]?I:null).reverse()}))}},{injector:this._tableInjector})}stickRows(a,e,i){if(!this._isBrowser)return;let n=i===`bottom`?a.slice().reverse():a,o=i===`bottom`?e.slice().reverse():e,r=[],s=[],u=[];_p({earlyRead:()=>{for(let p=0,g=0;p<n.length;p++){if(!o[p])continue;r[p]=g;let E=n[p];u[p]=this._isNativeHtmlTable?Array.from(E.children):[E];let w=this._retrieveElementSize(E).height;g+=w,s[p]=w}},write:()=>{let p=o.lastIndexOf(!0);for(let g=0;g<n.length;g++){if(!o[g])continue;let E=r[g],w=g===p;for(let C of u[g])this._addStickyStyle(C,i,E,w)}i===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:r,elements:u}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:r,elements:u})}},{injector:this._tableInjector})}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&_p({write:()=>{let i=a.querySelector(`tfoot`);i&&(e.some(n=>!n)?this._removeStickyStyle(i,[`bottom`]):this._addStickyStyle(i,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let n of e)a.style[n]=``,a.classList.remove(this._borderCellCss[n]);_i.some(n=>e.indexOf(n)===-1&&a.style[n])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex=``,this._needsPositionStickyOnElement&&(a.style.position=``),a.classList.remove(this._stickCellCss))}_addStickyStyle(a,e,i,n){a.classList.add(this._stickCellCss),n&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${i}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},i=0;for(let n of _i)a.style[n]&&(i+=e[n]);return i?`${i}`:``}_getCellWidths(a,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],n=a.children;for(let o=0;o<n.length;o++){let r=n[o];i.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(a,e){let i=[],n=0;for(let o=0;o<a.length;o++)e[o]&&(i[o]=n,n+=a[o]);return i}_getStickyEndColumnPositions(a,e){let i=[],n=0;for(let o=a.length;o>0;o--)e[o]&&(i[o]=n,n+=a[o]);return i}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let i=a.getBoundingClientRect(),n={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(a,n),this._resizeObserver.observe(a,{box:`border-box`})),n}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a)}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(a){let e=!1;for(let i of a){let n=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};n.width!==this._elemSizeCache.get(i.target)?.width&&on(i.target)&&(e=!0),this._elemSizeCache.set(i.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function on(t){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(a=>t.classList.contains(a))}var ye=new N(`STICKY_POSITIONING_LISTENER`);var Ye=(()=>{class t{viewContainer=w(Ki);elementRef=w(Or);constructor(){let e=w(L);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`rowOutlet`,``]]})}return t})();var Ke=(()=>{class t{viewContainer=w(Ki);elementRef=w(Or);constructor(){let e=w(L);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`headerRowOutlet`,``]]})}return t})();var Ze=(()=>{class t{viewContainer=w(Ki);elementRef=w(Or);constructor(){let e=w(L);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`footerRowOutlet`,``]]})}return t})();var Xe=(()=>{class t{viewContainer=w(Ki);elementRef=w(Or);constructor(){let e=w(L);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZD({type:t,selectors:[[``,`noDataRowOutlet`,``]]})}return t})();var et=(()=>{class t{_differs=w(WT);_changeDetectorRef=w(U1);_elementRef=w(Or);_dir=w(qe$1,{optional:!0});_platform=w(m);_viewRepeater;_viewportRuler=w(L$1);_injector=w(ge);_virtualScrollViewport=w(li,{optional:!0,host:!0});_positionListener=w(ye,{optional:!0})||w(ye,{optional:!0,skipSelf:!0});_document=w(gr);_data;_renderedRange;_onDestroy=new Z;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new Z;_footerRowStickyUpdates=new Z;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new Z;_dataStream=new Z;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new We$1;viewChange=new Hn({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){w(new kg(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((i,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Nu(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new d:new g,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),D(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(n,o,r)=>this._getEmbeddedViewArgs(n.item,r),n=>n.item.data,n=>{n.operation===o.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let o=i.get(n.currentIndex);o.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=yi(this._headerRowOutlet,`thead`);n&&(n.style.display=e.length?``:`none`)}let i=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,i,`top`),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=yi(this._footerRowOutlet,`tfoot`);n&&(n.style.display=e.length?``:`none`)}let i=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,i,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...n],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r])}),this._rowDefs.forEach(o=>{let r=[];for(let s=0;s<i.length;s++)this._renderRows[s].rowDef===o&&r.push(i[s]);this._addStickyColumnStyles(r,o)}),n.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let r=this._data[o],s=this._getRenderRowsForData(r,o,n.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let u=0;u<s.length;u++){let p=s[u],g=this._cachedRenderRowsMap.get(p.data);g.has(p.rowDef)?g.get(p.rowDef).push(p):g.set(p.rowDef,[p]),e.push(p)}}return e}_getRenderRowsForData(e,i,n){return this._getRowDefs(e,i).map(r=>{let s=n&&n.has(r)?n.get(r):[];if(s.length){let u=s.shift();return u.dataIndex=i,u}else return{data:e,rowDef:r,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ne(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Ne(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ne(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ne(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,s)=>{let u=!!s.getColumnsDiff();return r||u},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||n||o}_switchDataSource(e){this._data=[],D(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;D(this.dataSource)?e=this.dataSource.connect(this):Dm(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Im(this.dataSource)),this._renderChangeSubscription=xm([e,this.viewChange]).pipe(Nu(this._onDestroy)).subscribe(([i,n])=>{this._data=i||[],this._renderedRange=n,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let n=Array.from(i?.columns||[]).map(s=>{return this._columnDefsByName.get(s)}),o=n.map(s=>s.sticky),r=n.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let n=0;n<e.viewContainer.length;n++){let o=e.viewContainer.get(n);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(r=>r.when&&r.when(i,e))||this._defaultRowDef;o&&n.push(o)}return n.length,n}_getEmbeddedViewArgs(e,i){let n=e.rowDef,o={$implicit:e.data};return{templateRef:n.template,context:o,index:i}}_renderRow(e,i,n,o={}){let r=e.viewContainer.createEmbeddedView(i.template,o,n);return this._renderCellTemplateForItem(i,o),r}_renderCellTemplateForItem(e,i){for(let n of this._getCellTemplates(e))te.mostRecentCellOutlet&&te.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,n=e.length;i<n;i++){let r=e.get(i).context;r.count=n,r.first=i===0,r.last=i===n-1,r.even=i%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[i].dataIndex,r.renderIndex=i):r.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let n=this._columnDefsByName.get(i);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,n)=>i||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,i=this._injector;this._stickyStyler=new $e(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:Im()).pipe(Nu(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<`u`?vm:ym;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Bm(0,i),Nu(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,o)=>this._measureRangeSize(n,o)}),xm([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Nu(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let s=o.elements[r];if(s){let u=o.offsets[r],p=n!==0?Math.max(n-u,u):-u;for(let g of s)g.style.top=`${-p}px`}}}),xm([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Nu(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let s=o.elements[r];if(s)for(let u of s)u.style.bottom=`${n+o.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(i){let o=n.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let s=r.querySelectorAll(e._cellSelector);for(let u=0;u<s.length;u++)s[u].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!==`vertical`)return 0;let n=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<n.start||(e.end,n.end);let r=e.start-n.start,s=e.end-e.start,u,p;for(let w=0;w<s;w++){let C=o.get(w+r);if(C&&C.rootNodes.length){u=p=C.rootNodes[0];break}}for(let w=s-1;w>-1;w--){let C=o.get(w+r);if(C&&C.rootNodes.length){p=C.rootNodes[C.rootNodes.length-1];break}}let g=u?.getBoundingClientRect?.(),E=p?.getBoundingClientRect?.();return g&&E?E.bottom-g.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(i){return new(i||t)};static ɵcmp=WD({type:t,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(i,n,o){if(i&1&&ng(o,bi,5)(o,G,5)(o,Pe,5)(o,we,5)(o,Qe,5),i&2){let r;Pw(r=Fw())&&(n._noDataRow=r.first),Pw(r=Fw())&&(n._contentColumnDefs=r),Pw(r=Fw())&&(n._contentRowDefs=r),Pw(r=Fw())&&(n._contentHeaderRowDefs=r),Pw(r=Fw())&&(n._contentFooterRowDefs=r)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(i,n){i&2&&lg(`cdk-table-fixed-layout`,n.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,W1],fixedLayout:[2,`fixedLayout`,`fixedLayout`,W1],recycleRows:[2,`recycleRows`,`recycleRows`,W1]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[mT([{provide:L,useExisting:t},{provide:ye,useValue:null}])],ngContentSelectors:Xi,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(i,n){i&1&&(Ow(Zi),kw(0),kw(1,1),gw(2,en,1,0),gw(3,tn,7,0)(4,nn,4,0)),i&2&&(gE(2),mw(n._isServer?2:-1),gE(),mw(n._isNativeHtmlTable?3:4))},dependencies:[Ke,Ye,Xe,Ze],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return t})();function Ne(t,a){return t.concat(Array.from(a))}function yi(t,a){let e=a.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let n=i.nodeType===1?i.nodeName:null;if(n===e)return i;if(n===`TABLE`)break;i=i.parentNode}return null}var Di=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=bh({type:t});static ɵinj=Ks({imports:[yt$2]})}return t})();var an=[`*`,[[``,`matSortHeaderIcon`,``]]];var rn=[`*`,`[matSortHeaderIcon]`];function sn(t,a){t&1&&(Nd(),gl(0,`svg`,3),qh(1,`path`,4),ml())}function ln(t,a){t&1&&(gl(0,`div`,2),kw(1,1,null,sn,2,0),ml())}var Si=new N(`MAT_SORT_DEFAULT_OPTIONS`);var fe=(()=>{class t{_defaultOptions;_initializedStream=new $n(1);sortables=new Map;_stateChanges=new Z;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new We$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let i=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=cn(e.start||this.start,i),o=n.indexOf(this.direction)+1;return o>=n.length&&(o=0),n[o]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(i){return new(i||t)(jr(Si,8))};static ɵdir=ZD({type:t,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,W1],disabled:[2,`matSortDisabled`,`disabled`,W1]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[ev]})}return t})();function cn(t,a){let e=[`asc`,`desc`];return t==`desc`&&e.reverse(),a||e.push(``),e}var Ri=(()=>{class t{_sort=w(fe,{optional:!0});_columnDef=w(G,{optional:!0});_changeDetectorRef=w(U1);_focusMonitor=w(at);_elementRef=w(Or);_ariaDescriber=w(ys,{optional:!0});_renderChanges;_animationsDisabled=Ai$1();_recentlyCleared=He(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){w(P).load(xt);let e=w(Si,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Hm(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),i=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?i:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(i){return new(i||t)};static ɵcmp=WD({type:t,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(i,n){i&1&&Xh(`click`,function(){return n._toggleOnInteraction()})(`keydown`,function(r){return n._handleKeydown(r)})(`mouseleave`,function(){return n._recentlyCleared.set(null)}),i&2&&(Bh(`aria-sort`,n._getAriaSortAttribute()),lg(`mat-sort-header-disabled`,n._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,W1],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,W1]},exportAs:[`matSortHeader`],ngContentSelectors:rn,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(i,n){i&1&&(Ow(an),gl(0,`div`,0)(1,`div`,1),kw(2),ml(),gw(3,ln,3,0,`div`,2),ml()),i&2&&(lg(`mat-sort-header-sorted`,n._isSorted())(`mat-sort-header-position-before`,n.arrowPosition===`before`)(`mat-sort-header-descending`,n._sort.direction===`desc`)(`mat-sort-header-ascending`,n._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,n._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,n._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,n._animationsDisabled),Bh(`tabindex`,n._isDisabled()?null:0)(`role`,n._isDisabled()?null:`button`),gE(3),mw(n._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return t})();var ki=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=bh({type:t});static ɵinj=Ks({imports:[ki$1]})}return t})();var mn=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var un=[`caption`,`colgroup, col`,`*`];function hn(t,a){t&1&&kw(0,2)}function fn(t,a){t&1&&(Oi$1(0,`thead`,0),Gh(1,1),hl(),Oi$1(2,`tbody`,2),Gh(3,3)(4,4),hl(),Oi$1(5,`tfoot`,0),Gh(6,5),hl())}function pn(t,a){t&1&&Gh(0,1)(1,3)(2,4)(3,5)}var xi=(()=>{class t extends et{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵcmp=WD({type:t,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(i,n){i&2&&lg(`mat-table-fixed-layout`,n.fixedLayout)},exportAs:[`matTable`],features:[mT([{provide:et,useExisting:t},{provide:L,useExisting:t},{provide:ye,useValue:null}]),Sh],ngContentSelectors:un,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(i,n){i&1&&(Ow(mn),kw(0),kw(1,1),gw(2,hn,1,0),gw(3,fn,7,0)(4,pn,4,0)),i&2&&(gE(2),mw(n._isServer?2:-1),gE(),mw(n._isNativeHtmlTable?3:4))},dependencies:[Ke,Ye,Xe,Ze],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return t})();var Mi=(()=>{class t extends Fe{static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`matCellDef`,``]],features:[mT([{provide:Fe,useExisting:t}]),Sh]})}return t})();var Ti=(()=>{class t extends Oe{static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`matHeaderCellDef`,``]],features:[mT([{provide:Oe,useExisting:t}]),Sh]})}return t})();var Ei=(()=>{class t extends G{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[mT([{provide:G,useExisting:t}]),Sh]})}return t})();var Ni=(()=>{class t extends Ci{static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Sh]})}return t})();var Ii=(()=>{class t extends vi{static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Sh]})}return t})();var Fi=(()=>{class t extends we{static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,W1]},features:[mT([{provide:we,useExisting:t}]),Sh]})}return t})();var Oi=(()=>{class t extends Pe{static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵdir=ZD({type:t,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[mT([{provide:Pe,useExisting:t}]),Sh]})}return t})();var Pi=(()=>{class t extends We{static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵcmp=WD({type:t,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[mT([{provide:We,useExisting:t}]),Sh],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,n){i&1&&Gh(0,0)},dependencies:[te],encapsulation:2,changeDetection:1})}return t})();var zi=(()=>{class t extends Ge{static ɵfac=(()=>{let e;return function(n){return(e||(e=Iv(t)))(n||t)}})();static ɵcmp=WD({type:t,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[mT([{provide:Ge,useExisting:t}]),Sh],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,n){i&1&&Gh(0,0)},dependencies:[te],encapsulation:2,changeDetection:1})}return t})();var Ai=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=bh({type:t});static ɵinj=Ks({imports:[Di,ki$1]})}return t})();var _n=()=>[5,10,20,30];function yn(t,a){t&1&&(Oi$1(0,`th`,18)(1,`p`,19),aT(2,`Created`),hl()())}function wn(t,a){if(t&1&&(Oi$1(0,`td`,20)(1,`p`,21),aT(2),wT(3,`date`),hl()()),t&2){let e=a.$implicit;gE(2),mg(bT(3,1,e.createdDate,`dd.MM.yyyy`))}}function Cn(t,a){t&1&&(Oi$1(0,`th`,22)(1,`p`,19),aT(2,`Name`),hl()())}function vn(t,a){if(t&1&&(Oi$1(0,`td`,20)(1,`p`,21),aT(2),hl()()),t&2){let e=a.$implicit;gE(2),mg(e.name)}}function bn(t,a){t&1&&(Oi$1(0,`th`,22)(1,`p`,19),aT(2,`Category`),hl()())}function Dn(t,a){if(t&1&&(Oi$1(0,`td`,20)(1,`p`,21),aT(2),hl()()),t&2){let e=a.$implicit,i=Aw();gE(2),mg(i.getCategoryLabel(e.category))}}function Sn(t,a){t&1&&(Oi$1(0,`th`,22)(1,`p`,19),aT(2,`Journey Date`),hl()())}function Rn(t,a){if(t&1&&(Oi$1(0,`td`,20)(1,`p`,21),aT(2),wT(3,`date`),hl()()),t&2){let e=a.$implicit;gE(2),mg(bT(3,1,e.journeyDate,`dd.MM.yyyy`))}}function kn(t,a){t&1&&(Oi$1(0,`th`,22)(1,`p`,19),aT(2,`Published ?`),hl()())}function xn(t,a){t&1&&(Oi$1(0,`mat-icon`,24),aT(1,`check_circle`),hl())}function Mn(t,a){t&1&&(Oi$1(0,`mat-icon`,25),aT(1,`remove_circle`),hl())}function Tn(t,a){if(t&1&&(Oi$1(0,`td`,23),gw(1,xn,2,0,`mat-icon`,24)(2,Mn,2,0,`mat-icon`,25),hl()),t&2){let e=a.$implicit;gE(),mw(e.isPublished?1:2)}}function En(t,a){t&1&&(Oi$1(0,`th`,26)(1,`p`,27),aT(2,`Action`),hl()())}function Nn(t,a){if(t&1){let e=Cw();Oi$1(0,`button`,32),Xh(`click`,function(){gd(e);let n=Aw().$implicit;return md(Aw().editJourney(n))}),Oi$1(1,`mat-icon`,30),aT(2,`edit`),hl()()}}function In(t,a){if(t&1){let e=Cw();Oi$1(0,`td`,23)(1,`div`,28)(2,`button`,29),Xh(`click`,function(){let n=gd(e).$implicit;return md(Aw().viewJourney(n))}),Oi$1(3,`mat-icon`,30),aT(4,`visibility`),hl()(),Ah(5,Nn,3,0,`button`,31),hl()()}}function Fn(t,a){t&1&&Uh(0,`tr`,33)}function On(t,a){t&1&&Uh(0,`tr`,34)}var Li=(()=>{class t{constructor(){this.displayedColumns=[`createdDate`,`name`,`category`,`journeyDate`,`published`,`action`],this.paginator=V1.required(he),this.sort=V1.required(fe),this.criteria=F1.required(),this.criteria$=T(this.criteria),this.data=He({content:[],numberOfElements:0,totalElements:0,totalPages:0}),this.resultsLength=yt(()=>this.data().totalElements),this.journeyService=w(L$2),this.router=w(ue)}searchJourneys(e,i,n,o,r){let s=new K;return s=s.set(`q`,e),s=s.set(`sort`,i),s=s.set(`order`,n.toUpperCase()),s=s.set(`pageIndex`,o),s=s.set(`pageSize`,r),this.journeyService.getAllJourneys(s)}ngAfterViewInit(){this.sort().sortChange.subscribe(()=>this.paginator().pageIndex=0),Hm(this.criteria$,this.sort().sortChange,this.paginator().page).pipe(_u(),Mu(()=>this.searchJourneys(this.criteria(),this.sort().active,this.sort().direction,this.paginator().pageIndex,this.paginator().pageSize))).subscribe(this.data.set)}viewJourney(e){this.router.navigate([`/journey`,e.id,`view`]).then(console.log)}editJourney(e){this.router.navigate([`/journey`,e.id,`edit`]).then(console.log)}trackJourney(e,i){return`${i.id}`}getCategoryLabel(e){return $o(e)?.label??`Default`}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=WD({type:t,selectors:[[`app-journeys-list`]],viewQuery:function(i,n){i&1&&ig(n.paginator,he,5)(n.sort,fe,5),i&2&&jw(2)},inputs:{criteria:[1,`criteria`]},decls:25,vars:10,consts:[[1,`mat-elevation-z8`,`overflow-auto`],[1,`data-table-container`,`p-4`],[`mat-table`,``,`matSort`,``,`matSortActive`,`createdDate`,`matSortDisableClear`,``,`matSortDirection`,`desc`,`aria-describedby`,`Available Journeys`,1,`w-full`,3,`dataSource`,`fixedLayout`,`trackBy`],[`matColumnDef`,`createdDate`],[`mat-header-cell`,``,`mat-sort-header`,``,`disableClear`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`name`],[`mat-header-cell`,``,`mat-sort-header`,``,4,`matHeaderCellDef`],[`matColumnDef`,`category`],[`matColumnDef`,`journeyDate`],[`matColumnDef`,`published`],[`mat-cell`,``,`class`,`text-center`,4,`matCellDef`],[`matColumnDef`,`action`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`,`matHeaderRowDefSticky`],[`mat-row`,``,`class`,`hover:bg-black/5! dark:hover:bg-white/5!`,4,`matRowDef`,`matRowDefColumns`],[1,`justify-center`,`flex`],[`showFirstLastButtons`,``,`aria-label`,`Select page`,1,`w-full`,`fixed`,`overflow-auto`,`text-primary`,`fw-medium`,`pt-3`,3,`length`,`pageSize`,`pageSizeOptions`],[`mat-header-cell`,``,`mat-sort-header`,``,`disableClear`,``],[1,`font-medium`],[`mat-cell`,``],[1,`font-normal`,`text-sm`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``,1,`text-center`],[1,`text-green-600!`],[1,`text-yellow-500!`],[`mat-header-cell`,``],[1,`font-medium`,`text-center`],[1,`flex`,`gap-2`,`justify-center`],[`mat-icon-button`,``,`matTooltip`,`View`,3,`click`],[1,`text-primary`],[`mat-icon-button`,``,`matTooltip`,`Edit`,3,`click`,4,`appHasWriteAccess`],[`mat-icon-button`,``,`matTooltip`,`Edit`,3,`click`],[`mat-header-row`,``],[`mat-row`,``,1,`hover:bg-black/5!`,`dark:hover:bg-white/5!`]],template:function(i,n){i&1&&(Oi$1(0,`div`,0)(1,`div`,1)(2,`table`,2),yl(3,3),Ah(4,yn,3,0,`th`,4)(5,wn,4,4,`td`,5),Ji$1(),yl(6,6),Ah(7,Cn,3,0,`th`,7)(8,vn,3,1,`td`,5),Ji$1(),yl(9,8),Ah(10,bn,3,0,`th`,7)(11,Dn,3,1,`td`,5),Ji$1(),yl(12,9),Ah(13,Sn,3,0,`th`,7)(14,Rn,4,4,`td`,5),Ji$1(),yl(15,10),Ah(16,kn,3,0,`th`,7)(17,Tn,3,1,`td`,11),Ji$1(),yl(18,12),Ah(19,En,3,0,`th`,13)(20,In,6,0,`td`,11),Ji$1(),Ah(21,Fn,1,0,`tr`,14)(22,On,1,0,`tr`,15),hl()(),Oi$1(23,`div`,16),Uh(24,`mat-paginator`,17),hl()()),i&2&&(gE(2),$h(`dataSource`,n.data().content)(`fixedLayout`,!1)(`trackBy`,n.trackJourney),gE(19),$h(`matHeaderRowDef`,n.displayedColumns)(`matHeaderRowDefSticky`,!0),gE(),$h(`matRowDefColumns`,n.displayedColumns),gE(2),$h(`length`,n.resultsLength())(`pageSize`,10)(`pageSizeOptions`,yT(9,_n)))},dependencies:[Ai,xi,Ti,Fi,Ei,Mi,Oi,Ni,Ii,Pi,zi,ki,fe,Ri,gi,he,C,yt$1,wt,Tn$1,Bt,mt,ci],styles:[`.data-table-container[_ngcontent-%COMP%]{min-height:200px}mat-paginator[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;align-content:center}`]})}}return t})();var Fa=(()=>{class t{constructor(){this.queryString=He(``),this.JOURNEY_SEARCH_PAGE_INFO=c}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=WD({type:t,selectors:[[`app-search-journey`]],decls:6,vars:2,consts:[[3,`pageInfo`],[1,`container`,`mt-2`,`flex`,`flex-col`,`grow`,`justify-center`],[3,`searchEvent`],[3,`criteria`]],template:function(i,n){i&1&&(Oi$1(0,`header`),Uh(1,`app-page-header`,0),hl(),Oi$1(2,`main`)(3,`section`,1)(4,`app-journey-search-criteria`,2),Xh(`searchEvent`,function(r){return n.queryString.set(r)}),hl(),Uh(5,`app-journeys-list`,3),hl()()),i&2&&(gE(),$h(`pageInfo`,n.JOURNEY_SEARCH_PAGE_INFO),gE(4),$h(`criteria`,n.queryString()))},dependencies:[u,pi,Li],encapsulation:2})}}return t})();export{Fa as SearchJourneyComponent};