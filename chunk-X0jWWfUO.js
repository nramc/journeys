import{$ as Lu,At as SI,Bn as eb,Br as sC,C as Dl,Ci as zn$1,Cr as ns,D as Er,Dn as bg,E as Eg,En as bb,Et as Rm,Gr as tg,H as Jw,Hn as ej,Ir as qn,Jr as ts,Jt as Vi,Kr as tj,L as Hw,M as Ge$1,Mn as ce,Mt as Sw,Pr as qh,Q as Lr,Qr as uj,Rr as rg,Sn as aj,St as Qg,Ti as zw,Tr as og,Tt as Rb,Un as ey,Ur as ta$1,Ut as Um,Vn as eg,Vr as sg,Vt as Uh,W as K,Wr as tb,Y as Ld,Yn as fv,_ as Cl,_n as _b,_r as mD,_t as Pp,c as Av,cr as kg,ct as Ob,d as Bb,dr as kw,er as iw,et as Lw,f as Be,fi as xg,ft as Ou,gr as lw,hi as xr,ii as vt,kn as bl,kr as pg,kt as S,l as Aw,li as wl,lr as km,mi as xm,mr as lj,n as $r,nn as Xm,nr as jb,o as Am,oi as w,pn as Zw,pt as Ow,qt as Vh,rn as Xw,rt as Ml,si as wd,sr as kd,ti as vD,un as Yw,ur as ku,ut as Og,vt as Pr,x as Dd,xr as ng,yr as mg,zr as rj}from"./chunk-DljV6JqR.js";import{C as li,o as K$1}from"./chunk-CbKQVi23.js";import{C as be,E as ct,I as m,V as xi,a as Es,c as Je,r as B,s as Ii}from"./chunk-DywVkSow.js";import{C as rn,D as xn$1,F as c,Ht as hi,J as Vt,Nt as I,Wt as mt,Y as _t,a as wt,at as o,d as On$1,dn as zn$2,i as Mt,in as Bt,it as d,ln as St,m as Rn$1,mt as T,n as Ot,p as Pe$1,r as de,rt as D,s as Fn$1,sn as Pn$1,tt as g,u as Kt,xt as Z}from"./main-Y6YPIOZA.js";import{t as u}from"./chunk-DF-B0HKc.js";import"./chunk-DgmyLAE-.js";import"./chunk-Bp4_PcNa.js";import"./chunk-8guDKiRV.js";import{n as Ln$1,o as mt$1,t as $e$1}from"./chunk-6ifWSQ4S.js";import{n as De}from"./chunk-DS6RxHed.js";import{t as $o}from"./chunk-CTnh3mEZ.js";import{t as L$1}from"./chunk-D0q9nKhL.js";import{t as C}from"./chunk-EBX_7TXq.js";import{n as Nt,r as Pt}from"./chunk-C7dnwGjZ.js";var yn=(()=>{class n{constructor(){this.searchEvent=ej(),this.q=``}submitSearch(e){e.valid&&this.searchEvent.emit(this.q)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=iw({type:n,selectors:[[`app-journey-search-criteria`]],outputs:{searchEvent:`searchEvent`},decls:11,vars:1,consts:[[`searchForm`,`ngForm`],[1,`flex`,`flex-row`,`gap-4`,3,`submit`],[`appearance`,`outline`,1,`w-full`],[`placeholder`,`Use * for wildcard search`,`aria-label`,`Query`,`id`,`query`,`name`,`query`,`matInput`,``,`ngModel`,``,3,`ngModelChange`,`ngModel`],[`mat-icon-button`,``,`matSuffix`,``,`type`,`submit`,`aria-label`,`Search`],[`mat-fab`,``,`extended`,``,`routerLink`,`/journey/new`],[1,`text-primary`]],template:function(t,a){if(t&1){let i=Hw();Vi(0,`form`,1,0),pg(`submit`,function(){Dd(i);let s=tb(1);return wd(a.submitSearch(s))}),Vi(2,`mat-form-field`,2)(3,`input`,3),mD(),mD(),kg(`ngModelChange`,function(s){return Dd(i),_b(a.q,s)||(a.q=s),wd(s)}),Dl(),Vi(4,`button`,4)(5,`mat-icon`),bb(6,`search`),Dl()()(),Vi(7,`button`,5)(8,`mat-icon`,6),bb(9,`location_on`),Dl(),bb(10,` New `),Dl()()}t&2&&(SI(3),Og(`ngModel`,a.q),vD(),vD())},dependencies:[xn$1,Rn$1,Pe$1,Fn$1,On$1,rn,Kt,Ot,Pn$1,Bt,zn$2,Mt,wt,Ln$1,$e$1,mt$1,De],encapsulation:2})}}return n})();var Un=(()=>{class n{changes=new K;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,a)=>{if(a==0||t==0)return`0 of ${a}`;a=Math.max(a,0);let i=e*t,o=i<a?Math.min(i+t,a):i+t;return`${i+1} \u2013 ${o} of ${a}`};static ɵfac=function(t){return new(t||n)};static ɵprov=Lr({token:n,factory:n.ɵfac})}return n})();var Wn=50;var $n=new S(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var he=(()=>{class n{_intl=w(Un);_changeDetectorRef=w(aj);_formFieldAppearance;_pageSizeLabelId=w(be).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new zn$1(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>uj(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Ge$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=w($n,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:a,pageSizeOptions:i,hidePageSize:o,showFirstLastButtons:s}=t;a!=null&&(this._pageSize=a),i!=null&&(this._pageSizeOptions=i),o!=null&&(this.hidePageSize=o),s!=null&&(this.showFirstLastButtons=s)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,a=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(a)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Wn),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(d,m){if(d&1&&(Vi(0,`mat-option`,17),bb(1),Dl()),d&2){let r=m.$implicit;ng(`value`,r),SI(),Ml(` `,r,` `)}}function t(d,m){if(d&1){let r=Hw();Vi(0,`mat-form-field`,14)(1,`mat-select`,16,0),pg(`selectionChange`,function(g){Dd(r);let w=zw(2);return wd(w._changePageSize(g.value))}),kw(3,e,2,2,`mat-option`,17,Ow),Dl(),Vi(5,`div`,18),pg(`click`,function(){Dd(r);let g=tb(2);return wd(g.open())}),Dl()()}if(d&2){let r=zw(2);ng(`appearance`,r._formFieldAppearance)(`color`,r.color),SI(),ng(`value`,r.pageSize)(`disabled`,r.disabled),eg(`aria-labelledby`,r._pageSizeLabelId),ng(`panelClass`,r.selectConfig.panelClass||``)(`disableOptionCentering`,r.selectConfig.disableOptionCentering),SI(2),Lw(r._displayedPageSizeOptions)}}function a(d,m){if(d&1&&(Vi(0,`div`,15),bb(1),Dl()),d&2){let r=zw(2);SI(),xg(r.pageSize)}}function i(d,m){if(d&1&&(Vi(0,`div`,3)(1,`div`,13),bb(2),Dl(),Sw(3,t,6,7,`mat-form-field`,14),Sw(4,a,2,1,`div`,15),Dl()),d&2){let r=zw();SI(),tg(`id`,r._pageSizeLabelId),SI(),Ml(` `,r._intl.itemsPerPageLabel,` `),SI(),Aw(r._displayedPageSizeOptions.length>1?3:-1),SI(),Aw(r._displayedPageSizeOptions.length<=1?4:-1)}}function o(d,m){if(d&1){let r=Hw();Vi(0,`button`,19),pg(`click`,function(){Dd(r);let g=zw();return wd(g._buttonClicked(0,g._previousButtonsDisabled()))}),kd(),Vi(1,`svg`,8),rg(2,`path`,20),Dl()()}if(d&2){let r=zw();ng(`matTooltip`,r._intl.firstPageLabel)(`matTooltipDisabled`,r._previousButtonsDisabled())(`disabled`,r._previousButtonsDisabled())(`tabindex`,r._previousButtonsDisabled()?-1:null),tg(`aria-label`,r._intl.firstPageLabel)}}function s(d,m){if(d&1){let r=Hw();Vi(0,`button`,21),pg(`click`,function(){Dd(r);let g=zw();return wd(g._buttonClicked(g.getNumberOfPages()-1,g._nextButtonsDisabled()))}),kd(),Vi(1,`svg`,8),rg(2,`path`,22),Dl()()}if(d&2){let r=zw();ng(`matTooltip`,r._intl.lastPageLabel)(`matTooltipDisabled`,r._nextButtonsDisabled())(`disabled`,r._nextButtonsDisabled())(`tabindex`,r._nextButtonsDisabled()?-1:null),tg(`aria-label`,r._intl.lastPageLabel)}}return iw({type:n,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,uj],length:[2,`length`,`length`,uj],pageSize:[2,`pageSize`,`pageSize`,uj],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,lj],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,lj],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,lj]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(m,r){m&1&&(Vi(0,`div`,1)(1,`div`,2),Sw(2,i,5,4,`div`,3),Vi(3,`div`,4)(4,`div`,5),bb(5),Dl(),Sw(6,o,3,5,`button`,6),Vi(7,`button`,7),pg(`click`,function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),kd(),Vi(8,`svg`,8),rg(9,`path`,9),Dl()(),Ld(),Vi(10,`button`,10),pg(`click`,function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),kd(),Vi(11,`svg`,8),rg(12,`path`,11),Dl()(),Sw(13,s,3,5,`button`,12),Dl()()()),m&2&&(SI(2),Aw(r.hidePageSize?-1:2),SI(3),Ml(` `,r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length),` `),SI(),Aw(r.showFirstLastButtons?6:-1),SI(),ng(`matTooltip`,r._intl.previousPageLabel)(`matTooltipDisabled`,r._previousButtonsDisabled())(`disabled`,r._previousButtonsDisabled())(`tabindex`,r._previousButtonsDisabled()?-1:null),tg(`aria-label`,r._intl.previousPageLabel),SI(3),ng(`matTooltip`,r._intl.nextPageLabel)(`matTooltipDisabled`,r._nextButtonsDisabled())(`disabled`,r._nextButtonsDisabled())(`tabindex`,r._nextButtonsDisabled()?-1:null),tg(`aria-label`,r._intl.nextPageLabel),SI(3),Aw(r.showFirstLastButtons?13:-1))},dependencies:[$e$1,Nt,Z,Bt,_t],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2})})()}return n})();var _n=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Vh({type:n});static ɵinj=ta$1({imports:[Pn$1,Pt,Vt,he]})}return n})();var L=new S(`CDK_TABLE`);var Ne=(()=>{class n{template=w(xr);static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var Fe=(()=>{class n{template=w(xr);static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var vn=(()=>{class n{template=w(xr);static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var G=(()=>{class n{_table=w(L,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,a,i){if(t&1&&mg(i,Ne,5)(i,Fe,5)(i,vn,5),t&2){let o;Jw(o=Xw())&&(a.cell=o.first),Jw(o=Xw())&&(a.headerCell=o.first),Jw(o=Xw())&&(a.footerCell=o.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,lj],stickyEnd:[2,`stickyEnd`,`stickyEnd`,lj]}})}return n})();var Oe=class{constructor(l,e){e.nativeElement.classList.add(...l._columnCssClassName)}};var Dn=(()=>{class n extends Oe{constructor(){super(w(G),w(Pr))}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Uh]})}return n})();var Sn=(()=>{class n extends Oe{constructor(){let e=w(G),t=w(Pr);super(e,t);let a=e._table?._getCellRole();a&&t.nativeElement.setAttribute(`role`,a)}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Uh]})}return n})();var qe=(()=>{class n{template=w(xr);_differs=w(sC);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof we?e.headerCell.template:this instanceof Qe?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,features:[fv]})}return n})();var we=(()=>{class n extends qe{_table=w(L,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,lj]},features:[Uh,fv]})}return n})();var Qe=(()=>{class n extends qe{_table=w(L,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,lj]},features:[Uh,fv]})}return n})();var Pe=(()=>{class n extends qe{_table=w(L,{optional:!0});when;static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Uh]})}return n})();var te=(()=>{class n{_viewContainer=w(ts);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var Ge=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=iw({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,a){t&1&&sg(0,0)},dependencies:[te],encapsulation:2,changeDetection:1})}return n})();var Ke=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=iw({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,a){t&1&&sg(0,0)},dependencies:[te],encapsulation:2,changeDetection:1})}return n})();var Rn=(()=>{class n{templateRef=w(xr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var wn=[`top`,`bottom`,`left`,`right`];var $e=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(l=>this._updateCachedSizes(l)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(l,e,t=!0,a=!0,i,o,s){this._isNativeHtmlTable=l,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=a,this.direction=i,this._positionListener=o,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(l,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(l);let t=[];for(let a of l)a.nodeType===a.ELEMENT_NODE&&t.push(a,...Array.from(a.children));Pp({write:()=>{for(let a of t)this._removeStickyStyle(a,e)}},{injector:this._tableInjector})}updateStickyColumns(l,e,t,a=!0,i=!0){if(!l.length||!this._isBrowser||!(e.some(O=>O)||t.some(O=>O))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=l[0],s=o.children.length,d=this.direction===`rtl`,m=d?`right`:`left`,r=d?`left`:`right`,p=e.lastIndexOf(!0),g=t.indexOf(!0),w,nt,at;i&&this._updateStickyColumnReplayQueue({rows:[...l],stickyStartStates:[...e],stickyEndStates:[...t]}),Pp({earlyRead:()=>{w=this._getCellWidths(o,a),nt=this._getStickyStartColumnPositions(w,e),at=this._getStickyEndColumnPositions(w,t)},write:()=>{for(let O of l)for(let E=0;E<s;E++){let it=O.children[E];e[E]&&this._addStickyStyle(it,m,nt[E],E===p),t[E]&&this._addStickyStyle(it,r,at[E],E===g)}this._positionListener&&w.some(O=>!!O)&&(this._positionListener.stickyColumnsUpdated({sizes:p===-1?[]:w.slice(0,p+1).map((O,E)=>e[E]?O:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:g===-1?[]:w.slice(g).map((O,E)=>t[E+g]?O:null).reverse()}))}},{injector:this._tableInjector})}stickRows(l,e,t){if(!this._isBrowser)return;let a=t===`bottom`?l.slice().reverse():l,i=t===`bottom`?e.slice().reverse():e,o=[],s=[],d=[];Pp({earlyRead:()=>{for(let m=0,r=0;m<a.length;m++){if(!i[m])continue;o[m]=r;let p=a[m];d[m]=this._isNativeHtmlTable?Array.from(p.children):[p];let g=this._retrieveElementSize(p).height;r+=g,s[m]=g}},write:()=>{let m=i.lastIndexOf(!0);for(let r=0;r<a.length;r++){if(!i[r])continue;let p=o[r],g=r===m;for(let w of d[r])this._addStickyStyle(w,t,p,g)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:o,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:o,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(l,e){this._isNativeHtmlTable&&Pp({write:()=>{let t=l.querySelector(`tfoot`);t&&(e.some(a=>!a)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(l,e){if(!l.classList.contains(this._stickCellCss))return;for(let a of e)l.style[a]=``,l.classList.remove(this._borderCellCss[a]);wn.some(a=>e.indexOf(a)===-1&&l.style[a])?l.style.zIndex=this._getCalculatedZIndex(l):(l.style.zIndex=``,this._needsPositionStickyOnElement&&(l.style.position=``),l.classList.remove(this._stickCellCss))}_addStickyStyle(l,e,t,a){l.classList.add(this._stickCellCss),a&&l.classList.add(this._borderCellCss[e]),l.style[e]=`${t}px`,l.style.zIndex=this._getCalculatedZIndex(l),this._needsPositionStickyOnElement&&(l.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(l){let e={top:100,bottom:10,left:1,right:1},t=0;for(let a of wn)l.style[a]&&(t+=e[a]);return t?`${t}`:``}_getCellWidths(l,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],a=l.children;for(let i=0;i<a.length;i++){let o=a[i];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(l,e){let t=[],a=0;for(let i=0;i<l.length;i++)e[i]&&(t[i]=a,a+=l[i]);return t}_getStickyEndColumnPositions(l,e){let t=[],a=0;for(let i=l.length;i>0;i--)e[i]&&(t[i]=a,a+=l[i]);return t}_retrieveElementSize(l){let e=this._elemSizeCache.get(l);if(e)return e;let t=l.getBoundingClientRect(),a={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(l,a),this._resizeObserver.observe(l,{box:`border-box`})),a}_updateStickyColumnReplayQueue(l){this._removeFromStickyColumnReplayQueue(l.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(l)}_removeFromStickyColumnReplayQueue(l){let e=new Set(l);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(a=>!e.has(a));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(l){let e=!1;for(let t of l){let a=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};a.width!==this._elemSizeCache.get(t.target)?.width&&Gn(t.target)&&(e=!0),this._elemSizeCache.set(t.target,a)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Gn(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(l=>n.classList.contains(l))}function bn(n){return Error(`Could not find column with id "${n}".`)}var _e=new S(`STICKY_POSITIONING_LISTENER`);var Ye=(()=>{class n{viewContainer=w(ts);elementRef=w(Pr);constructor(){let e=w(L);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var Xe=(()=>{class n{viewContainer=w(ts);elementRef=w(Pr);constructor(){let e=w(L);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var Ze=(()=>{class n{viewContainer=w(ts);elementRef=w(Pr);constructor(){let e=w(L);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var et=(()=>{class n{viewContainer=w(ts);elementRef=w(Pr);constructor(){let e=w(L);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=lw({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var tt=(()=>{class n{_differs=w(sC);_changeDetectorRef=w(aj);_elementRef=w(Pr);_dir=w(Je,{optional:!0});_platform=w(m);_viewRepeater;_viewportRuler=w(I);_injector=w(ce);_virtualScrollViewport=w(hi,{optional:!0,host:!0});_positionListener=w(_e,{optional:!0})||w(_e,{optional:!0,skipSelf:!0});_document=w(Er);_data;_renderedRange;_onDestroy=new K;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new K;_footerRowStickyUpdates=new K;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new K;_dataStream=new K;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Ge$1;viewChange=new qn({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){w(new Qg(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,a)=>this.trackBy?this.trackBy(a.dataIndex,a.data):a)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Lu(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new d:new g,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),D(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(a,i,o)=>this._getEmbeddedViewArgs(a.item,o),a=>a.item.data,a=>{if(a.operation===o.INSERTED&&a.context){this._renderCellTemplateForItem(a.record.item.rowDef,a.context);let i=t.get(a.record.currentIndex);this._rowDefsByView.set(i,a.record.item.rowDef)}}),e.forEachIdentityChange(a=>{let i=a.currentIndex,o=t.get(i);if(this._rowDefsByView.get(o)!==a.item.rowDef){t.remove(i);let s=this._renderRow(this._rowOutlet,a.item.rowDef,i,{$implicit:a.item.data});this._rowDefsByView.set(s,a.item.rowDef)}else o.context.$implicit=a.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let a=Cn(this._headerRowOutlet,`thead`);a&&(a.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let a=Cn(this._footerRowOutlet,`tfoot`);a&&(a.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),a=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...a],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((i,o)=>{this._addStickyColumnStyles([i],this._headerRowDefs[o])}),this._rowDefs.forEach(i=>{let o=[];for(let s=0;s<t.length;s++)this._renderRows[s].rowDef===i&&o.push(t[s]);this._addStickyColumnStyles(o,i)}),a.forEach((i,o)=>{this._addStickyColumnStyles([i],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(i=>i.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),a=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let i=this._renderedRange.start;i<t;i++){let o=this._data[i],s=this._getRenderRowsForData(o,i,a.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let d=0;d<s.length;d++){let m=s[d],r=this._cachedRenderRowsMap.get(m.data);r.has(m.rowDef)?r.get(m.rowDef).push(m):r.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,a){return this._getRowDefs(e,t).map(o=>{let s=a&&a.has(o)?a.get(o):[];if(s.length){let d=s.shift();return d.dataIndex=t,d}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ie(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ie(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ie(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ie(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,s)=>{let d=!!s.getColumnsDiff();return o||d},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let a=this._headerRowDefs.reduce(e,!1);a&&this._forceRenderHeaderRows();let i=this._footerRowDefs.reduce(e,!1);return i&&this._forceRenderFooterRows(),t||a||i}_switchDataSource(e){this._data=[],D(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;D(this.dataSource)?e=this.dataSource.connect(this):km(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Rm(this.dataSource)),this._renderChangeSubscription=Um([e,this.viewChange]).pipe(Lu(this._onDestroy)).subscribe(([t,a])=>{this._data=t||[],this._renderedRange=a,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let a=Array.from(t?.columns||[]).map(s=>{let d=this._columnDefsByName.get(s);if(!d)throw bn(s);return d}),i=a.map(s=>s.sticky),o=a.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,i,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let a=0;a<e.viewContainer.length;a++){let i=e.viewContainer.get(a);t.push(i.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let a=[];if(this.multiTemplateDataRows)a=this._rowDefs.filter(i=>!i.when||i.when(t,e));else{let i=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;i&&a.push(i)}return a.length,a}_getEmbeddedViewArgs(e,t){let a=e.rowDef,i={$implicit:e.data};return{templateRef:a.template,context:i,index:t}}_renderRow(e,t,a,i={}){let o=e.viewContainer.createEmbeddedView(t.template,i,a);return this._renderCellTemplateForItem(t,i),o}_renderCellTemplateForItem(e,t){for(let a of this._getCellTemplates(e))te.mostRecentCellOutlet&&te.mostRecentCellOutlet._viewContainer.createEmbeddedView(a,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,a=e.length;t<a;t++){let o=e.get(t).context;o.count=a,o.first=t===0,o.last=t===a-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let a=this._columnDefsByName.get(t);if(!a)throw bn(t);return e.extractCellTemplate(a)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,a)=>t||a.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new $e(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Rm()).pipe(Lu(this._onDestroy)).subscribe(a=>{this._stickyStyler.direction=a,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?Am:xm;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(ey(0,t),Lu(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(a,i)=>this._measureRangeSize(a,i)}),Um([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Lu(this._onDestroy)).subscribe(([a,i])=>{if(!(!i.sizes||!i.offsets||!i.elements))for(let o=0;o<i.elements.length;o++){let s=i.elements[o];if(s){let d=i.offsets[o],m=a!==0?Math.max(a-d,d):-d;for(let r of s)r.style.top=`${-m}px`}}}),Um([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Lu(this._onDestroy)).subscribe(([a,i])=>{if(!(!i.sizes||!i.offsets||!i.elements))for(let o=0;o<i.elements.length;o++){let s=i.elements[o];if(s)for(let d of s)d.style.bottom=`${a+i.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let a=this._noDataRowOutlet.viewContainer;if(t){let i=a.createEmbeddedView(e.templateRef),o=i.rootNodes[0];if(i.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute(`role`,`row`),o.classList.add(...e._contentClassNames);let s=o.querySelectorAll(e._cellSelector);for(let d=0;d<s.length;d++)s[d].classList.add(...e._cellClassNames)}}else a.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let a=this.viewChange.value,i=this._rowOutlet.viewContainer;e.start<a.start||(e.end,a.end);let o=e.start-a.start,s=e.end-e.start,d,m;for(let g=0;g<s;g++){let w=i.get(g+o);if(w&&w.rootNodes.length){d=m=w.rootNodes[0];break}}for(let g=s-1;g>-1;g--){let w=i.get(g+o);if(w&&w.rootNodes.length){m=w.rootNodes[w.rootNodes.length-1];break}}let r=d?.getBoundingClientRect?.(),p=m?.getBoundingClientRect?.();return r&&p?p.bottom-r.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function a(s,d){s&1&&Yw(0,2)}function i(s,d){s&1&&(Vi(0,`thead`,0),sg(1,1),Dl(),Vi(2,`tbody`,0),sg(3,2)(4,3),Dl(),Vi(5,`tfoot`,0),sg(6,4),Dl())}function o(s,d){s&1&&sg(0,1)(1,2)(2,3)(3,4)}return iw({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(d,m,r){if(d&1&&mg(r,Rn,5)(r,G,5)(r,Pe,5)(r,we,5)(r,Qe,5),d&2){let p;Jw(p=Xw())&&(m._noDataRow=p.first),Jw(p=Xw())&&(m._contentColumnDefs=p),Jw(p=Xw())&&(m._contentRowDefs=p),Jw(p=Xw())&&(m._contentHeaderRowDefs=p),Jw(p=Xw())&&(m._contentFooterRowDefs=p)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(d,m){d&2&&bg(`cdk-table-fixed-layout`,m.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,lj],fixedLayout:[2,`fixedLayout`,`fixedLayout`,lj],recycleRows:[2,`recycleRows`,`recycleRows`,lj]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[Rb([{provide:L,useExisting:n},{provide:_e,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(d,m){d&1&&(Zw(e),Yw(0),Yw(1,1),Sw(2,a,1,0),Sw(3,i,7,0)(4,o,4,0)),d&2&&(SI(2),Aw(m._isServer?2:-1),SI(),Aw(m._isNativeHtmlTable?3:4))},dependencies:[Xe,Ye,et,Ze],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return n})();function Ie(n,l){return n.concat(Array.from(l))}function Cn(n,l){let e=l.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let a=t.nodeType===1?t.nodeName:null;if(a===e)return t;if(a===`TABLE`)break;t=t.parentNode}return null}var kn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Vh({type:n});static ɵinj=ta$1({imports:[mt]})}return n})();var xn=new S(`MAT_SORT_DEFAULT_OPTIONS`);var fe=(()=>{class n{_defaultOptions;_initializedStream=new zn$1(1);sortables=new Map;_stateChanges=new K;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new Ge$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,a=Kn(e.start||this.start,t),i=a.indexOf(this.direction)+1;return i>=a.length&&(i=0),a[i]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(t){return new(t||n)($r(xn,8))};static ɵdir=lw({type:n,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,lj],disabled:[2,`matSortDisabled`,`disabled`,lj]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[fv]})}return n})();function Kn(n,l){let e=[`asc`,`desc`];return n==`desc`&&e.reverse(),l||e.push(``),e}var Mn=(()=>{class n{_sort=w(fe,{optional:!0});_columnDef=w(G,{optional:!0});_changeDetectorRef=w(aj);_focusMonitor=w(ct);_elementRef=w(Pr);_ariaDescriber=w(Es,{optional:!0});_renderChanges;_animationsDisabled=Ii();_recentlyCleared=Be(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){w(B).load(St);let e=w(xn,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Xm(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`,[[``,`matSortHeaderIcon`,``]]],t=[`*`,`[matSortHeaderIcon]`];function a(o,s){o&1&&(kd(),wl(0,`svg`,3),og(1,`path`,4),bl())}function i(o,s){o&1&&(wl(0,`div`,2),Yw(1,1,null,a,2,0),bl())}return iw({type:n,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(s,d){s&1&&pg(`click`,function(){return d._toggleOnInteraction()})(`keydown`,function(r){return d._handleKeydown(r)})(`mouseleave`,function(){return d._recentlyCleared.set(null)}),s&2&&(tg(`aria-sort`,d._getAriaSortAttribute()),bg(`mat-sort-header-disabled`,d._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,lj],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,lj]},exportAs:[`matSortHeader`],ngContentSelectors:t,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(s,d){s&1&&(Zw(e),wl(0,`div`,0)(1,`div`,1),Yw(2),bl(),Sw(3,i,3,0,`div`,2),bl()),s&2&&(bg(`mat-sort-header-sorted`,d._isSorted())(`mat-sort-header-position-before`,d.arrowPosition===`before`)(`mat-sort-header-descending`,d._sort.direction===`desc`)(`mat-sort-header-ascending`,d._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,d._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,d._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,d._animationsDisabled),tg(`tabindex`,d._isDisabled()?null:0)(`role`,d._isDisabled()?null:`button`),SI(3),Aw(d._renderArrow()?3:-1))},styles:[`.mat-sort-header {
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
`],encapsulation:2})})()}return n})();var Tn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Vh({type:n});static ɵinj=ta$1({imports:[xi]})}return n})();var En=(()=>{class n extends tt{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function a(s,d){s&1&&Yw(0,2)}function i(s,d){s&1&&(Vi(0,`thead`,0),sg(1,1),Dl(),Vi(2,`tbody`,2),sg(3,3)(4,4),Dl(),Vi(5,`tfoot`,0),sg(6,5),Dl())}function o(s,d){s&1&&sg(0,1)(1,3)(2,4)(3,5)}return iw({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(d,m){d&2&&bg(`mat-table-fixed-layout`,m.fixedLayout)},exportAs:[`matTable`],features:[Rb([{provide:tt,useExisting:n},{provide:L,useExisting:n},{provide:_e,useValue:null}]),Uh],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(d,m){d&1&&(Zw(e),Yw(0),Yw(1,1),Sw(2,a,1,0),Sw(3,i,7,0)(4,o,4,0)),d&2&&(SI(2),Aw(m._isServer?2:-1),SI(),Aw(m._isNativeHtmlTable?3:4))},dependencies:[Xe,Ye,et,Ze],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})})()}return n})();var In=(()=>{class n extends Ne{static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[``,`matCellDef`,``]],features:[Rb([{provide:Ne,useExisting:n}]),Uh]})}return n})();var On=(()=>{class n extends Fe{static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[Rb([{provide:Fe,useExisting:n}]),Uh]})}return n})();var Nn=(()=>{class n extends G{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[Rb([{provide:G,useExisting:n}]),Uh]})}return n})();var Fn=(()=>{class n extends Dn{static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Uh]})}return n})();var Pn=(()=>{class n extends Sn{static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Uh]})}return n})();var zn=(()=>{class n extends we{static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,lj]},features:[Rb([{provide:we,useExisting:n}]),Uh]})}return n})();var An=(()=>{class n extends Pe{static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵdir=lw({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[Rb([{provide:Pe,useExisting:n}]),Uh]})}return n})();var Ln=(()=>{class n extends Ge{static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵcmp=iw({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[Rb([{provide:Ge,useExisting:n}]),Uh],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,a){t&1&&sg(0,0)},dependencies:[te],encapsulation:2,changeDetection:1})}return n})();var Bn=(()=>{class n extends Ke{static ɵfac=(()=>{let e;return function(a){return(e||(e=Av(n)))(a||n)}})();static ɵcmp=iw({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[Rb([{provide:Ke,useExisting:n}]),Uh],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,a){t&1&&sg(0,0)},dependencies:[te],encapsulation:2,changeDetection:1})}return n})();var Hn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Vh({type:n});static ɵinj=ta$1({imports:[kn,xi]})}return n})();var Zn=()=>[5,10,20,30];function ea(n,l){n&1&&(Vi(0,`th`,18)(1,`p`,19),bb(2,`Created`),Dl()())}function ta(n,l){if(n&1&&(Vi(0,`td`,20)(1,`p`,21),bb(2),jb(3,`date`),Dl()()),n&2){let e=l.$implicit;SI(2),xg(Bb(3,1,e.createdDate,`dd.MM.yyyy`))}}function na(n,l){n&1&&(Vi(0,`th`,22)(1,`p`,19),bb(2,`Name`),Dl()())}function aa(n,l){if(n&1&&(Vi(0,`td`,20)(1,`p`,21),bb(2),Dl()()),n&2){let e=l.$implicit;SI(2),xg(e.name)}}function ia(n,l){n&1&&(Vi(0,`th`,22)(1,`p`,19),bb(2,`Category`),Dl()())}function oa(n,l){if(n&1&&(Vi(0,`td`,20)(1,`p`,21),bb(2),Dl()()),n&2){let e=l.$implicit,t=zw();SI(2),xg(t.getCategoryLabel(e.category))}}function ra(n,l){n&1&&(Vi(0,`th`,22)(1,`p`,19),bb(2,`Journey Date`),Dl()())}function sa(n,l){if(n&1&&(Vi(0,`td`,20)(1,`p`,21),bb(2),jb(3,`date`),Dl()()),n&2){let e=l.$implicit;SI(2),xg(Bb(3,1,e.journeyDate,`dd.MM.yyyy`))}}function la(n,l){n&1&&(Vi(0,`th`,22)(1,`p`,19),bb(2,`Published ?`),Dl()())}function da(n,l){n&1&&(Vi(0,`mat-icon`,24),bb(1,`check_circle`),Dl())}function ca(n,l){n&1&&(Vi(0,`mat-icon`,25),bb(1,`remove_circle`),Dl())}function ma(n,l){if(n&1&&(Vi(0,`td`,23),Sw(1,da,2,0,`mat-icon`,24)(2,ca,2,0,`mat-icon`,25),Dl()),n&2){let e=l.$implicit;SI(),Aw(e.isPublished?1:2)}}function ua(n,l){n&1&&(Vi(0,`th`,26)(1,`p`,27),bb(2,`Action`),Dl()())}function ha(n,l){if(n&1){let e=Hw();Vi(0,`button`,32),pg(`click`,function(){Dd(e);let a=zw().$implicit,i=zw();return wd(i.editJourney(a))}),Vi(1,`mat-icon`,30),bb(2,`edit`),Dl()()}}function fa(n,l){if(n&1){let e=Hw();Vi(0,`td`,23)(1,`div`,28)(2,`button`,29),pg(`click`,function(){let a=Dd(e).$implicit,i=zw();return wd(i.viewJourney(a))}),Vi(3,`mat-icon`,30),bb(4,`visibility`),Dl()(),qh(5,ha,3,0,`button`,31),Dl()()}}function pa(n,l){n&1&&rg(0,`tr`,33)}function ga(n,l){n&1&&rg(0,`tr`,34)}var jn=(()=>{class n{constructor(){this.displayedColumns=[`createdDate`,`name`,`category`,`journeyDate`,`published`,`action`],this.paginator=rj.required(he),this.sort=rj.required(fe),this.criteria=tj.required(),this.criteria$=T(this.criteria),this.data=Be({content:[],numberOfElements:0,totalElements:0,totalPages:0}),this.resultsLength=vt(()=>this.data().totalElements),this.journeyService=w(L$1),this.router=w(de)}searchJourneys(e,t,a,i,o){let s=new K$1;return s=s.set(`q`,e),s=s.set(`sort`,t),s=s.set(`order`,a.toUpperCase()),s=s.set(`pageIndex`,i),s=s.set(`pageSize`,o),this.journeyService.getAllJourneys(s)}ngAfterViewInit(){this.sort().sortChange.subscribe(()=>this.paginator().pageIndex=0),Xm(this.criteria$,this.sort().sortChange,this.paginator().page).pipe(Ou(),ku(()=>this.searchJourneys(this.criteria(),this.sort().active,this.sort().direction,this.paginator().pageIndex,this.paginator().pageSize))).subscribe(this.data.set)}viewJourney(e){this.router.navigate([`/journey`,e.id,`view`]).then(console.log)}editJourney(e){this.router.navigate([`/journey`,e.id,`edit`]).then(console.log)}trackJourney(e,t){return`${t.id}`}getCategoryLabel(e){return $o(e)?.label??`Default`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=iw({type:n,selectors:[[`app-journeys-list`]],viewQuery:function(t,a){t&1&&Eg(a.paginator,he,5)(a.sort,fe,5),t&2&&eb(2)},inputs:{criteria:[1,`criteria`]},decls:25,vars:10,consts:[[1,`mat-elevation-z8`,`overflow-auto`],[1,`data-table-container`,`p-4`],[`mat-table`,``,`matSort`,``,`matSortActive`,`createdDate`,`matSortDisableClear`,``,`matSortDirection`,`desc`,`aria-describedby`,`Available Journeys`,1,`w-full`,3,`dataSource`,`fixedLayout`,`trackBy`],[`matColumnDef`,`createdDate`],[`mat-header-cell`,``,`mat-sort-header`,``,`disableClear`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`name`],[`mat-header-cell`,``,`mat-sort-header`,``,4,`matHeaderCellDef`],[`matColumnDef`,`category`],[`matColumnDef`,`journeyDate`],[`matColumnDef`,`published`],[`mat-cell`,``,`class`,`text-center`,4,`matCellDef`],[`matColumnDef`,`action`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`,`matHeaderRowDefSticky`],[`mat-row`,``,`class`,`hover:bg-black/5! dark:hover:bg-white/5!`,4,`matRowDef`,`matRowDefColumns`],[1,`justify-center`,`flex`],[`showFirstLastButtons`,``,`aria-label`,`Select page`,1,`w-full`,`fixed`,`overflow-auto`,`text-primary`,`fw-medium`,`pt-3`,3,`length`,`pageSize`,`pageSizeOptions`],[`mat-header-cell`,``,`mat-sort-header`,``,`disableClear`,``],[1,`font-medium`],[`mat-cell`,``],[1,`font-normal`,`text-sm`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``,1,`text-center`],[1,`text-green-600!`],[1,`text-yellow-500!`],[`mat-header-cell`,``],[1,`font-medium`,`text-center`],[1,`flex`,`gap-2`,`justify-center`],[`mat-icon-button`,``,`matTooltip`,`View`,3,`click`],[1,`text-primary`],[`mat-icon-button`,``,`matTooltip`,`Edit`,3,`click`,4,`appHasWriteAccess`],[`mat-icon-button`,``,`matTooltip`,`Edit`,3,`click`],[`mat-header-row`,``],[`mat-row`,``,1,`hover:bg-black/5!`,`dark:hover:bg-white/5!`]],template:function(t,a){t&1&&(Vi(0,`div`,0)(1,`div`,1)(2,`table`,2),Cl(3,3),qh(4,ea,3,0,`th`,4)(5,ta,4,4,`td`,5),ns(),Cl(6,6),qh(7,na,3,0,`th`,7)(8,aa,3,1,`td`,5),ns(),Cl(9,8),qh(10,ia,3,0,`th`,7)(11,oa,3,1,`td`,5),ns(),Cl(12,9),qh(13,ra,3,0,`th`,7)(14,sa,4,4,`td`,5),ns(),Cl(15,10),qh(16,la,3,0,`th`,7)(17,ma,3,1,`td`,11),ns(),Cl(18,12),qh(19,ua,3,0,`th`,13)(20,fa,6,0,`td`,11),ns(),qh(21,pa,1,0,`tr`,14)(22,ga,1,0,`tr`,15),Dl()(),Vi(23,`div`,16),rg(24,`mat-paginator`,17),Dl()()),t&2&&(SI(2),ng(`dataSource`,a.data().content)(`fixedLayout`,!1)(`trackBy`,a.trackJourney),SI(19),ng(`matHeaderRowDef`,a.displayedColumns)(`matHeaderRowDefSticky`,!0),SI(),ng(`matRowDefColumns`,a.displayedColumns),SI(2),ng(`length`,a.resultsLength())(`pageSize`,10)(`pageSizeOptions`,Ob(9,Zn)))},dependencies:[Hn,En,On,zn,Nn,In,An,Fn,Pn,Ln,Bn,Tn,fe,Mn,_n,he,C,Mt,wt,Pn$1,Bt,_t,li],styles:[`.data-table-container[_ngcontent-%COMP%]{min-height:200px}mat-paginator[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;align-content:center}`]})}}return n})();var po=(()=>{class n{constructor(){this.queryString=Be(``),this.JOURNEY_SEARCH_PAGE_INFO=c}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=iw({type:n,selectors:[[`app-search-journey`]],decls:6,vars:2,consts:[[3,`pageInfo`],[1,`container`,`mt-2`,`flex`,`flex-col`,`grow`,`justify-center`],[3,`searchEvent`],[3,`criteria`]],template:function(t,a){t&1&&(Vi(0,`main`)(1,`header`),rg(2,`app-page-header`,0),Dl(),Vi(3,`section`,1)(4,`app-journey-search-criteria`,2),pg(`searchEvent`,function(o){return a.queryString.set(o)}),Dl(),rg(5,`app-journeys-list`,3),Dl()()),t&2&&(SI(2),ng(`pageInfo`,a.JOURNEY_SEARCH_PAGE_INFO),SI(3),ng(`criteria`,a.queryString()))},dependencies:[u,yn,jn],encapsulation:2})}}return n})();export{po as SearchJourneyComponent};