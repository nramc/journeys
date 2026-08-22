import{Ar as md,Bt as Sd,Ci as z1,Cn as aT,Gr as q1,K as Hh,Kt as Uh,L as G1,Nr as mw,On as bh,Q as Iw,Qn as gl,S as Dl,Xn as gd,Yn as gE,Zt as Vw,a as $h,ci as vw,fn as Z,ft as N,jr as mg,li as w,mt as Nd,on as Xh,p as Bh,qt as Un,rn as We,tn as WD,tr as gw,tt as Js,u as Aw,vr as ki,x as Cw,xi as yw,zt as Rr}from"./chunk-v7JfcvWu.js";import{S as ge}from"./chunk-CnJWgBXL.js";import{J as Yt,Y as mt,bt as J,rn as Bt,sn as Tn}from"./main-6MAOTFWF.js";import{i as ke}from"./chunk-G4xImRbK.js";import{n as Nt,r as Pt}from"./chunk-DDLiEaur2.js";function X(i,g){if(i&1&&(ki(0,`mat-option`,17),aT(1),gl()),i&2){let t=g.$implicit;$h(`value`,t),gE(),Dl(` `,t,` `)}}function Y(i,g){if(i&1){let t=Cw();ki(0,`mat-form-field`,14)(1,`mat-select`,16,0),Xh(`selectionChange`,function(e){gd(t);return md(Aw(2)._changePageSize(e.value))}),vw(3,X,2,2,`mat-option`,17,yw),gl(),ki(5,`div`,18),Xh(`click`,function(){gd(t);return md(Vw(2).open())}),gl()()}if(i&2){let t=Aw(2);$h(`appearance`,t._formFieldAppearance)(`color`,t.color),gE(),$h(`value`,t.pageSize)(`disabled`,t.disabled),Hh(`aria-labelledby`,t._pageSizeLabelId),$h(`panelClass`,t.selectConfig.panelClass||``)(`disableOptionCentering`,t.selectConfig.disableOptionCentering),gE(2),Iw(t._displayedPageSizeOptions)}}function tt(i,g){if(i&1&&(ki(0,`div`,15),aT(1),gl()),i&2){let t=Aw(2);gE(),mg(t.pageSize)}}function et(i,g){if(i&1&&(ki(0,`div`,3)(1,`div`,13),aT(2),gl(),gw(3,Y,6,7,`mat-form-field`,14),gw(4,tt,2,1,`div`,15),gl()),i&2){let t=Aw();gE(),Bh(`id`,t._pageSizeLabelId),gE(),Dl(` `,t._intl.itemsPerPageLabel,` `),gE(),mw(t._displayedPageSizeOptions.length>1?3:-1),gE(),mw(t._displayedPageSizeOptions.length<=1?4:-1)}}function it(i,g){if(i&1){let t=Cw();ki(0,`button`,19),Xh(`click`,function(){gd(t);let e=Aw();return md(e._buttonClicked(0,e._previousButtonsDisabled()))}),Nd(),ki(1,`svg`,8),Uh(2,`path`,20),gl()()}if(i&2){let t=Aw();$h(`matTooltip`,t._intl.firstPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),Bh(`aria-label`,t._intl.firstPageLabel)}}function at(i,g){if(i&1){let t=Cw();ki(0,`button`,21),Xh(`click`,function(){gd(t);let e=Aw();return md(e._buttonClicked(e.getNumberOfPages()-1,e._nextButtonsDisabled()))}),Nd(),ki(1,`svg`,8),Uh(2,`path`,22),gl()()}if(i&2){let t=Aw();$h(`matTooltip`,t._intl.lastPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),Bh(`aria-label`,t._intl.lastPageLabel)}}var nt=(()=>{class i{changes=new Z;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(t,a,e)=>{if(e==0||a==0)return`0 of ${e}`;e=Math.max(e,0);let s=t*a,z=s<e?Math.min(s+a,e):s+a;return`${s+1} \u2013 ${z} of ${e}`};static ɵfac=function(a){return new(a||i)};static ɵprov=Rr({token:i,factory:i.ɵfac})}return i})();var ot=50;var rt=new N(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var st=(()=>{class i{_intl=w(nt);_changeDetectorRef=w(q1);_formFieldAppearance;_pageSizeLabelId=w(ge).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new Un(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>z1(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new We;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,a=w(rt,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:e,pageSizeOptions:s,hidePageSize:z,showFirstLastButtons:C}=a;e!=null&&(this._pageSize=e),s!=null&&(this._pageSizeOptions=s),z!=null&&(this.hidePageSize=z),C!=null&&(this.showFirstLastButtons=C)}this._formFieldAppearance=a?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,e=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(e)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:ot),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let a=this.pageIndex;t!==a&&(this.pageIndex=t,this._emitPageEvent(a))}_buttonClicked(t,a){a||this._navigate(t)}static ɵfac=function(a){return new(a||i)};static ɵcmp=WD({type:i,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,z1],length:[2,`length`,`length`,z1],pageSize:[2,`pageSize`,`pageSize`,z1],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,G1],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,G1],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,G1]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(a,e){a&1&&(ki(0,`div`,1)(1,`div`,2),gw(2,et,5,4,`div`,3),ki(3,`div`,4)(4,`div`,5),aT(5),gl(),gw(6,it,3,5,`button`,6),ki(7,`button`,7),Xh(`click`,function(){return e._buttonClicked(e.pageIndex-1,e._previousButtonsDisabled())}),Nd(),ki(8,`svg`,8),Uh(9,`path`,9),gl()(),Sd(),ki(10,`button`,10),Xh(`click`,function(){return e._buttonClicked(e.pageIndex+1,e._nextButtonsDisabled())}),Nd(),ki(11,`svg`,8),Uh(12,`path`,11),gl()(),gw(13,at,3,5,`button`,12),gl()()()),a&2&&(gE(2),mw(e.hidePageSize?-1:2),gE(3),Dl(` `,e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length),` `),gE(),mw(e.showFirstLastButtons?6:-1),gE(),$h(`matTooltip`,e._intl.previousPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),Bh(`aria-label`,e._intl.previousPageLabel),gE(3),$h(`matTooltip`,e._intl.nextPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),Bh(`aria-label`,e._intl.nextPageLabel),gE(3),mw(e.showFirstLastButtons?13:-1))},dependencies:[ke,Nt,J,Bt,mt],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2})}return i})();var It=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=bh({type:i});static ɵinj=Js({imports:[Tn,Pt,Yt,st]})}return i})();export{st as n,It as t};