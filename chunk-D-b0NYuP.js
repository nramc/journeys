import{t as r}from"./chunk-C86zhvaO.js";import{$n as hv,$r as vw,An as bw,Ar as pp,At as Rw,B as Gh,Bt as Tt,C as Db,Ct as Pm,Dt as Qh,Et as Pw,F as Fi,G as Il,Gn as gb,Hn as fd,Jn as gm,Kn as gg,L as Fw,Ln as dg,Mn as ce,Mr as qm,Mt as S,Nn as cg,On as bl,P as Fh,R as GD,Rr as sb,S as Cu,Tn as b,Tr as pe,Tt as Pr,Vn as fI,Vt as Tu,Wn as fw,X as Ji,Xn as hg,Z as Kn,ai as xr,b as Cb,bt as Ow,cr as k1,dn as Zy,ei as wg,er as hw,et as L1,f as B,fi as yu,gt as O1,hi as zh,hr as mb,ir as jh,it as Lw,li as yc,ln as Zh,lt as Mp,mr as ln,n as $D,nr as ig,nt as Lh,ot as M,p as B1,pi as yw,pr as lg,qt as V1,rn as Y,si as xw,sr as jw,t as $1,tn as Xi,ui as yl,un as Zw,vn as _u,w as Di,wr as pd,xr as mw,z as Ge$1}from"./chunk-ihIzuI1C.js";import{T as si}from"./chunk-DulbcUZj.js";import{C as be,I as m,O as ge,P as kt,c as Je$1,r as B$1,s as Ii,u as Mn,v as Ye$1}from"./chunk-DcaJ8toe.js";import{At as tr,Bt as de,Dt as R,Et as Fi$1,J as Vt,Nt as I,Ot as er,Y as _t,Zt as vi,an as Bt,b as Mt$1,cn as Pn,ct as G,en as yi,ft as ur,in as $t,kt as te,lt as Ot,nn as z,pt as F,r as de$1,st as At,t as G$1,un as St$1,ut as P,x as wt}from"./main-3XEFBBAG.js";import"./chunk-LSjFsL-o.js";import{t as $o}from"./chunk-CWctXj2r.js";import"./chunk-CDqWla4S.js";import"./chunk-Dpkb30gM.js";import{i as b$1,s as l,t as L}from"./chunk-BZXEoHcf.js";import{t as C}from"./chunk-CyCB-Hij.js";import"./chunk-Cy6fGf4l.js";import{t as r4}from"./chunk-ROIJESR9.js";import"./chunk-CuIibGqc.js";import{t as he}from"./chunk-O-x5ZHJx.js";import{t as Et$1}from"./chunk-DJlaSLjO.js";import{t as z$1}from"./chunk-CKdixqqh.js";var ta=new S(`MatTabContent`);var ea=(()=>{class a{template=b(xr);static ɵfac=function(e){return new(e||a)};static ɵdir=GD({type:a,selectors:[[``,`matTabContent`,``]],features:[gb([{provide:ta,useExisting:a}])]})}return a})();var aa=new S(`MatTabLabel`);var Ge=new S(`MAT_TAB`);var Pt=(()=>{class a extends vi{_closestTab=b(Ge,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=hv(a)))(n||a)}})();static ɵdir=GD({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[gb([{provide:aa,useExisting:a}]),Lh]})}return a})();var $e=new S(`MAT_TAB_GROUP`);var Et=(()=>{class a{_viewContainerRef=b(Ji);_closestTabGroup=b($e,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Y;position=null;origin=null;isActive=!1;constructor(){b(B$1).load(St$1)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new z(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,o){n&1&&Ow(0)}return $D({type:a,selectors:[[`mat-tab`]],contentQueries:function(o,h,y){if(o&1&&cg(y,Pt,5)(y,ea,7,xr),o&2){let x;Lw(x=Pw())&&(h.templateLabel=x.first),Lw(x=Pw())&&(h._explicitContent=x.first)}},viewQuery:function(o,h){if(o&1&&lg(xr,7),o&2){let y;Lw(y=Pw())&&(h._implicitContent=y.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(o,h){o&2&&zh(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,B1],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[gb([{provide:Ge,useExisting:a}]),Zy],ngContentSelectors:t,decls:1,vars:0,template:function(o,h){o&1&&(Rw(),jh(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var St=`mdc-tab-indicator--active`;var Ve=`mdc-tab-indicator--no-transition`;var Dt=class{_items;_currentItem;constructor(m){this._items=m}hide(){this._items.forEach(m=>m.deactivateInkBar()),this._currentItem=void 0}alignToElement(m){let t=this._items.find(n=>n.elementRef.nativeElement===m),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var na=(()=>{class a{_elementRef=b(Pr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(St);return}let n=e.getBoundingClientRect(),o=t.width/n.width,h=t.left-n.left;e.classList.add(Ve),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${h}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(Ve),e.classList.add(St),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(St)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=GD({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,B1]}})}return a})();var We=(()=>{class a extends na{elementRef=b(Pr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=hv(a)))(n||a)}})();static ɵdir=GD({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(zh(`aria-disabled`,!!n.disabled),gg(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,B1]},features:[Lh]})}return a})();var ze={passive:!0};var ia=650;var oa=100;function Mt(a){let m=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(m)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(m)?m:``}var ra=(()=>{class a{_elementRef=b(Pr);_changeDetectorRef=b(V1);_viewportRuler=b(I);_dir=b(Je$1,{optional:!0});_ngZone=b(pe);_platform=b(m);_sharedResizeObserver=b(z$1);_injector=b(ce);_renderer=b(yc);_animationsDisabled=Ii();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Y;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Y;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Ge$1;indexFocused=new Ge$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ze),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ze))}ngAfterContentInit(){let t=this._dir?this._dir.change:gm(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(yu(32),_u(this._destroyed)),n=this._viewportRuler.change(150).pipe(_u(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ge(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Mp(o,{injector:this._injector}),Pm(t,n,e,this._items.changes,this._itemsResized()).pipe(_u(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(h=>{this.indexFocused.emit(h),this._setTabFocus(h)})}_itemsResized(){return typeof ResizeObserver!=`function`?Tt:this._items.changes.pipe(Cu(this._items),Tu(t=>new M(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>e.next(o));return t.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),qm(1),ln(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Ye$1(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:h}=e.elementRef.nativeElement,y,x;this._getLayoutDirection()==`ltr`?(y=o,x=y+h):(x=this._tabListInner.nativeElement.offsetWidth-o,y=x-h);let C=this.scrollDistance,b=this.scrollDistance+n;y<C?this.scrollDistance-=C-y:x>b&&(this.scrollDistance+=Math.min(x-b,y-C))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Kn(ia,oa).pipe(_u(Pm(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(t);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=GD({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,B1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,$1]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var sa=(()=>{class a extends ra{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Dt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=hv(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],o=[`nextPaginator`],h=[`previousPaginator`];return $D({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(C,b,l){if(C&1&&cg(l,We,4),C&2){let u;Lw(u=Pw())&&(b._items=u)}},viewQuery:function(C,b){if(C&1&&lg(t,7)(e,7)(n,7)(o,5)(h,5),C&2){let l;Lw(l=Pw())&&(b._tabListContainer=l.first),Lw(l=Pw())&&(b._tabList=l.first),Lw(l=Pw())&&(b._tabListInner=l.first),Lw(l=Pw())&&(b._nextPaginator=l.first),Lw(l=Pw())&&(b._previousPaginator=l.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(C,b){C&2&&gg(`mat-mdc-tab-header-pagination-controls-enabled`,b._showPaginationControls)(`mat-mdc-tab-header-rtl`,b._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,B1]},features:[Lh],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(C,b){C&1&&(Rw(),Fi(0,`div`,5,0),ig(`click`,function(){return b._handlePaginatorClick(`before`)})(`mousedown`,function(u){return b._handlePaginatorPress(`before`,u)})(`touchend`,function(){return b._stopInterval()}),Zh(2,`div`,6),yl(),Fi(3,`div`,7,1),ig(`keydown`,function(u){return b._handleKeydown(u)}),Fi(5,`div`,8,2),ig(`cdkObserveContent`,function(){return b._onContentChanges()}),Fi(7,`div`,9,3),Ow(9),yl()()(),Fi(10,`div`,10,4),ig(`mousedown`,function(u){return b._handlePaginatorPress(`after`,u)})(`click`,function(){return b._handlePaginatorClick(`after`)})(`touchend`,function(){return b._stopInterval()}),Zh(12,`div`,6),yl()),C&2&&(gg(`mat-mdc-tab-header-pagination-disabled`,b._disableScrollBefore),Qh(`matRippleDisabled`,b._disableScrollBefore||b.disableRipple),fI(3),gg(`_mat-animation-noopable`,b._animationsDisabled),fI(2),zh(`aria-label`,b.ariaLabel||null)(`aria-labelledby`,b.ariaLabelledby||null),fI(5),gg(`mat-mdc-tab-header-pagination-disabled`,b._disableScrollAfter),Qh(`matRippleDisabled`,b._disableScrollAfter||b.disableRipple))},dependencies:[$t,Mn],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return a})();var la=new S(`MAT_TABS_CONFIG`);var Oe=(()=>{class a extends yi{_host=b(Lt);_ngZone=b(pe);_centeringSub=B.EMPTY;_leavingSub=B.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Cu(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=hv(a)))(n||a)}})();static ɵdir=GD({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Lh]})}return a})();var Lt=(()=>{class a{_elementRef=b(Pr);_dir=b(Je$1,{optional:!0});_ngZone=b(pe);_injector=b(ce);_renderer=b(yc);_diAnimationsDisabled=Ii();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=B.EMPTY;_position;_previousPosition;_onCentering=new Ge$1;_beforeCentering=new Ge$1;_afterLeavingCenter=new Ge$1;_onCentered=new Ge$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=b(V1);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Mp(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Mp(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,o){}return $D({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(o,h){if(o&1&&lg(Oe,5)(t,5),o&2){let y;Lw(y=Pw())&&(h._portalHost=y.first),Lw(y=Pw())&&(h._contentElement=y.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(o,h){o&2&&zh(`inert`,h._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(o,h){o&1&&(Fi(0,`div`,1,0),Fh(2,e,0,0,`ng-template`,2),yl()),o&2&&gg(`mat-tab-body-content-left`,h._position===`left`)(`mat-tab-body-content-right`,h._position===`right`)(`mat-tab-body-content-can-animate`,h._position===`center`||h._previousPosition===`center`)},dependencies:[Oe,de],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Qe=(()=>{class a{_elementRef=b(Pr);_changeDetectorRef=b(V1);_ngZone=b(pe);_tabsSubscription=B.EMPTY;_tabLabelSubscription=B.EMPTY;_tabBodySubscription=B.EMPTY;_diAnimationsDisabled=Ii();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Di;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=Mt(t.body),this._headerAnimationDuration=Mt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Mt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Ge$1;focusChange=new Ge$1;animationDone=new Ge$1;selectedTabChange=new Ge$1(!0);_groupId;_isServer=!b(m).isBrowser;constructor(){let t=b(la,{optional:!0});this._groupId=b(be).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=e[o];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Cu(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Nt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Pm(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function o(l,u){}function h(l,u){if(l&1&&Fh(0,o,0,0,`ng-template`,12),l&2){let r=xw().$implicit;Qh(`cdkPortalOutlet`,r.templateLabel)}}function y(l,u){if(l&1&&sb(0),l&2){let r=xw().$implicit;wg(r.textLabel)}}function x(l,u){if(l&1){let r=bw();Fi(0,`div`,7,2),ig(`click`,function(){let _=fd(r),k=_.$implicit,yt=_.$index,Ze=xw(),Ke=jw(1);return pd(Ze._handleClick(k,Ke,yt))})(`cdkFocusChange`,function(_){let k=fd(r).$index,yt=xw();return pd(yt._tabFocusChanged(_,k))}),Zh(2,`span`,8)(3,`div`,9),Fi(4,`span`,10)(5,`span`,11),fw(6,h,1,1,null,12)(7,y,1,1),yl()()()}if(l&2){let r=u.$implicit,g=u.$index,_=jw(1),k=xw();Zw(r.labelClass),gg(`mdc-tab--active`,k.selectedIndex===g),Qh(`id`,k._getTabLabelId(r,g))(`disabled`,r.disabled)(`fitInkBarToContent`,k.fitInkBarToContent),zh(`tabIndex`,k._getTabIndex(g))(`aria-posinset`,g+1)(`aria-setsize`,k._tabs.length)(`aria-controls`,k._getTabContentId(g))(`aria-selected`,k.selectedIndex===g)(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,!r.ariaLabel&&r.ariaLabelledby?r.ariaLabelledby:null),fI(3),Qh(`matRippleTrigger`,_)(`matRippleDisabled`,r.disabled||k.disableRipple),fI(3),hw(r.templateLabel?6:7)}}function C(l,u){l&1&&Ow(0)}function b(l,u){if(l&1){let r=bw();Fi(0,`mat-tab-body`,13),ig(`_onCentered`,function(){fd(r);let _=xw();return pd(_._removeTabBodyWrapperHeight())})(`_onCentering`,function(_){fd(r);let k=xw();return pd(k._setTabBodyWrapperHeight(_))})(`_beforeCentering`,function(_){fd(r);let k=xw();return pd(k._bodyCentered(_))}),yl()}if(l&2){let r=u.$implicit,g=u.$index,_=xw();Zw(r.bodyClass),Qh(`id`,_._getTabContentId(g))(`content`,r.content)(`position`,r.position)(`animationDuration`,_._bodyAnimationDuration)(`preserveContent`,_.preserveContent),zh(`tabindex`,_.contentTabIndex!=null&&_.selectedIndex===g?_.contentTabIndex:null)(`aria-labelledby`,_._getTabLabelId(r,g))(`aria-hidden`,_.selectedIndex!==g)}}return $D({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(u,r,g){if(u&1&&cg(g,Et,5),u&2){let _;Lw(_=Pw())&&(r._allTabs=_)}},viewQuery:function(u,r){if(u&1&&lg(t,5)(e,5)(Lt,5),u&2){let g;Lw(g=Pw())&&(r._tabBodyWrapper=g.first),Lw(g=Pw())&&(r._tabHeader=g.first),Lw(g=Pw())&&(r._tabBodies=g)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(u,r){u&2&&(zh(`mat-align-tabs`,r.alignTabs),Zw(`mat-`+(r.color||`primary`)),hg(`--%NS%mat-tab-body-animation-duration`,r._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,r._headerAnimationDuration),gg(`mat-mdc-tab-group-dynamic-height`,r.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,r.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,r.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,B1],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,B1],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,B1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,$1],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,$1],disablePagination:[2,`disablePagination`,`disablePagination`,B1],disableRipple:[2,`disableRipple`,`disableRipple`,B1],preserveContent:[2,`preserveContent`,`preserveContent`,B1],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[gb([{provide:$e,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(u,r){u&1&&(Rw(),Fi(0,`mat-tab-header`,3,0),ig(`indexFocused`,function(_){return r._focusChanged(_)})(`selectFocusedIndex`,function(_){return r.selectedIndex=_}),yw(2,x,8,17,`div`,4,mw),yl(),fw(4,C,1,0),Fi(5,`div`,5,1),yw(7,b,1,10,`mat-tab-body`,6,mw),yl()),u&2&&(Qh(`selectedIndex`,r.selectedIndex||0)(`disableRipple`,r.disableRipple)(`disablePagination`,r.disablePagination),Gh(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby),fI(2),vw(r._tabs),fI(2),hw(r._isServer?4:-1),fI(),gg(`_mat-animation-noopable`,r._bodyAnimationsDisabled()),fI(2),vw(r._tabs))},dependencies:[sa,We,kt,$t,yi,Lt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Nt=class{index;tab};var da=(a,m)=>m.data?.src;function ca(a,m){a&1&&sb(0,` YouTube `)}function ma(a,m){a&1&&sb(0,` Video `)}function ba(a,m){if(a&1&&(Fi(0,`span`,5),fw(1,ca,1,0)(2,ma,1,0),yl()),a&2){let t=xw().$implicit,e=xw();fI(),hw(t.type===e.GalleryItemTypes.Youtube?1:2)}}function pa(a,m){if(a&1&&(Fi(0,`div`,1),Zh(1,`img`,4),fw(2,ba,3,1,`span`,5),yl()),a&2){let t=m.$implicit,e=m.$index,n=xw();Qh(`lightbox`,e)(`gallery`,n.galleryId()),fI(),Qh(`src`,t.type===n.GalleryItemTypes.Image?t.data?.src:t.data?.thumb??`assets/image/default-video-thumbnail.png`,pp)(`matTooltip`,t.data?.args?.title),fI(),hw(t.type!==n.GalleryItemTypes.Image?2:-1)}}function ua(a,m){a&1&&(Fi(0,`p`,2),sb(1,` No media available for this journey. `),yl())}function ha(a,m){if(a&1&&(Il(0),Fi(1,`div`,6)(2,`p`,7),sb(3),yl()(),Xi()),a&2){let t=m.$implicit;fI(3),wg(t?.args?.title)}}var Je=(()=>{class a{constructor(){this.GalleryItemTypes=R,this.galleryId=O1(`myLightbox`),this.images=O1(new l),this.videos=O1([]),this.galleryImageDef=L1.required(Fi$1),this.gallery=b(te),this.items=k1([]),this.galleryConfig={loadingStrategy:`lazy`}}ngOnInit(){this.items.set(this.getGalleryItems()),this.gallery.ref(this.galleryId(),r({imageTemplate:this.galleryImageDef().templateRef},this.galleryConfig)).load(this.items())}getGalleryItems(){let t=new Array;return this.getImageItems()?.map(e=>t.push(e)),this.getVideoItems()?.map(e=>t.push(e)),t}getImageItems(){return this.images()?.images.map(t=>({type:R.Image,data:{src:t.url,thumb:t.url,args:{title:t.title,isThumbnail:t.isThumbnail}}}))}getVideoItems(){return this.videos()?.map(t=>this.isItYoutubeVideoId(t)?this.newYoutubeItem(t):this.newVideoItem(t))}isItYoutubeVideoId(t){return!t.includes(`.`)&&!t.includes(`/`)}newYoutubeItem(t){return{type:R.Youtube,data:{src:`https://www.youtube.com/embed/${t}`,thumb:`https://img.youtube.com/vi/${t}/0.jpg`,params:{loop:1,playlist:t,rel:0,controls:1}}}}newVideoItem(t){return{type:R.Iframe,data:{src:t,thumb:`assets/image/default-video-thumbnail.png`}}}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=$D({type:a,selectors:[[`app-media-gallery`]],viewQuery:function(e,n){e&1&&dg(n.galleryImageDef,Fi$1,5),e&2&&Fw()},inputs:{galleryId:[1,`galleryId`],images:[1,`images`],videos:[1,`videos`],items:[1,`items`]},outputs:{items:`itemsChange`},decls:5,vars:1,consts:[[1,`flex`,`flex-wrap`,`grow`,`mt-2`,`me-0`,`gap-2`,`justify-center`],[1,`mb-1`,`text-center`,`rounded-lg`,`overflow-hidden`,`shadow-lg`,`border`,`border-gray-300`,3,`lightbox`,`gallery`],[1,`text-gray-500`,`italic`],[4,`galleryImageDef`],[`height`,`200`,`width`,`200`,`alt`,`media`,`loading`,`lazy`,1,`journey-image-thumbnail`,3,`src`,`matTooltip`],[1,`video-tag`],[1,`h-full`,`w-full`,`text-end`,`flex`,`flex-col`,`justify-end`],[1,`text-center`]],template:function(e,n){e&1&&(Fi(0,`div`,0),yw(1,pa,3,5,`div`,1,da,!1,ua,2,0,`p`,2),yl(),Fh(4,ha,4,1,`ng-container`,3)),e&2&&(fI(),vw(n.items()))},dependencies:[tr,Fi$1,er,Vt,_t],styles:[`.journey-image-thumbnail[_ngcontent-%COMP%]{object-fit:fill}.mb-1.text-center.rounded-lg.overflow-hidden.shadow-lg.border.border-gray-300[_ngcontent-%COMP%]{position:relative}.video-tag[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:8px;background:#ffffffb3;color:#4b5563;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:500;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}`]})}}return a})();function _a(a,m){if(a&1&&(Fi(0,`span`,4),sb(1),yl()),a&2){let t=m.$implicit;fI(),bl(` `,t,` `)}}var qe=(()=>{class a{constructor(){this.journey=O1.required()}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=$D({type:a,selectors:[[`app-view-journey-basic-details`]],inputs:{journey:[1,`journey`]},decls:6,vars:3,consts:[[1,`mt-4`],[1,`min-h-[50vh]`],[3,`title`,`markdownText`,`journeyDate`],[1,`mt-4`,`flex`,`flex-wrap`,`gap-2`],[1,`badge`,`rounded-full`,`border`,`border-primary`,`text-primary`,`px-3`,`py-1`,`shadow-sm`]],template:function(e,n){e&1&&(Fi(0,`div`,0)(1,`div`,1),Zh(2,`app-display-markdown-component`,2),yl(),Fi(3,`div`,3),yw(4,_a,2,1,`span`,4,mw),yl()()),e&2&&(fI(2),Qh(`title`,n.journey().geoDetails?.title??``)(`markdownText`,n.journey().description)(`journeyDate`,n.journey().journeyDate),fI(2),vw(n.journey().tags))},dependencies:[ur,he],encapsulation:2})}}return a})();function ga(a,m){a&1&&(Fi(0,`mat-icon`,6),sb(1,`check_circle`),yl())}function fa(a,m){a&1&&(Fi(0,`mat-icon`,7),sb(1,`remove_circle`),yl())}function va(a,m){if(a&1){let t=bw();Fi(0,`button`,10),ig(`click`,function(){fd(t);let n=xw();return pd(n.editJourney())}),Fi(1,`mat-icon`),sb(2,`edit`),yl(),Fi(3,`span`),sb(4,`Edit journey`),yl()()}}var Ye=(()=>{class a{constructor(){this.router=b(de$1),this.journey=O1.required()}editJourney(){this.router.navigate([`/journey`,this.journey().id,`edit`]).then()}viewInTimeline(){this.router.navigate([`/timeline`],{queryParams:{id:this.journey().id,autoplay:`true`}}).then()}async shareJourney(){let t=this.journey(),e={title:t.name,text:`Explore my journey: ${t.name}`,url:window.location.href};if(navigator.share){await navigator.share(e);return}await navigator.clipboard.writeText(e.url)}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=$D({type:a,selectors:[[`app-view-journey-header`]],inputs:{journey:[1,`journey`]},decls:26,vars:7,consts:[[`journeyActionsMenu`,`matMenu`],[1,`flex`,`flex-col`,`md:flex-row`,`items-center`,`gap-4`],[1,`text-sm`,`text-primary`,`border-2`,`border-gradient-primary`,`badge`,`rounded-md`,`px-2`,`py-1`],[1,`journey-date`],[1,`flex`,`flex-row`,`items-center`,`gap-1`],[1,`text-lg`,`font-semibold`,`text-center`],[`matTooltip`,`Published`,1,`text-success!`,`!overflow-visible`],[`matTooltip`,`Not Published`,1,`text-warning!`,`!overflow-visible`],[`mat-icon-button`,``,`aria-label`,`Journey actions`,`matTooltip`,`Journey actions`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`,4,`appHasWriteAccess`],[`mat-menu-item`,``,3,`click`]],template:function(e,n){if(e&1&&(Fi(0,`h4`,1)(1,`span`,2)(2,`span`,3),sb(3),Db(4,`date`),yl()(),Fi(5,`span`,4)(6,`span`,5),sb(7),yl(),fw(8,ga,2,0,`mat-icon`,6)(9,fa,2,0,`mat-icon`,7),Fi(10,`button`,8)(11,`mat-icon`),sb(12,`more_vert`),yl()()()(),Fi(13,`mat-menu`,null,0),Fh(15,va,5,0,`button`,9),Fi(16,`button`,10),ig(`click`,function(){return n.viewInTimeline()}),Fi(17,`mat-icon`),sb(18,`play_circle`),yl(),Fi(19,`span`),sb(20,`Relive in timeline`),yl()(),Fi(21,`button`,10),ig(`click`,function(){return n.shareJourney()}),Fi(22,`mat-icon`),sb(23,`share`),yl(),Fi(24,`span`),sb(25,`Share journey`),yl()()()),e&2){let o=jw(14);fI(3),wg(Cb(4,4,n.journey().journeyDate,`dd.MM.yyyy`)),fI(4),wg(n.journey().name),fI(),hw(n.journey().isPublished?8:9),fI(2),Qh(`matMenuTriggerFor`,o)}},dependencies:[_t,C,Mt$1,wt,Pn,Bt,Ot,P,G,At,si],encapsulation:2})}}return a})();var ya=()=>[];function xa(a,m){a&1&&(Fi(0,`mat-icon`),sb(1,`map`),yl(),Fi(2,`span`,13),sb(3,`Geo`),yl())}function Ca(a,m){if(a&1&&(Fi(0,`span`,14)(1,`mat-icon`,16),sb(2),yl(),sb(3),yl()),a&2){let t=xw(2);zh(`aria-label`,`Category: `+t.geoDetails?.category);let e=xw().getIconConfigByCategory(t.geoDetails?.category);fI(2),bl(` `,e?.iconName,` `),fI(),bl(` `,e?.label,` `)}}function ka(a,m){if(a&1&&(Fi(0,`h6`,15),sb(1),yl()),a&2){let t=xw(2);fI(),bl(` `,t.geoDetails?.title,` `)}}function Ta(a,m){if(a&1&&(Fi(0,`div`,8),fw(1,Ca,4,3,`span`,14),fw(2,ka,2,1,`h6`,15),yl()),a&2){let t=xw();fI(),hw(t.geoDetails?.category?1:-1),fI(),hw(t.geoDetails?.title?2:-1)}}function wa(a,m){a&1&&(Fi(0,`mat-icon`),sb(1,`bookmark_heart`),yl(),Fi(2,`span`,13),sb(3,`Memories`),yl())}function Ia(a,m){a&1&&(Fi(0,`mat-icon`),sb(1,`photo_library`),yl(),Fi(2,`span`,13),sb(3,`Images`),yl())}function Sa(a,m){a&1&&(Fi(0,`mat-icon`),sb(1,`video_library`),yl(),Fi(2,`span`,13),sb(3,`Videos`),yl())}function Ma(a,m){if(a&1&&(Fi(0,`section`,0)(1,`div`,1)(2,`div`,2),Zh(3,`app-view-journey-header`,3),yl()(),Fi(4,`div`,4)(5,`mat-tab-group`,5)(6,`mat-tab`),Fh(7,xa,4,0,`ng-template`,6),Fi(8,`div`,7),fw(9,Ta,3,2,`div`,8),Fi(10,`div`,9),Zh(11,`app-world-map`,10),yl()()(),Fi(12,`mat-tab`),Fh(13,wa,4,0,`ng-template`,6),Fi(14,`div`,7),Zh(15,`app-view-journey-basic-details`,3),yl()(),Fi(16,`mat-tab`),Fh(17,Ia,4,0,`ng-template`,6),Fi(18,`div`,7),Zh(19,`app-media-gallery`,11),yl()(),Fi(20,`mat-tab`),Fh(21,Sa,4,0,`ng-template`,6),Fi(22,`div`,7),Zh(23,`app-media-gallery`,12),yl()()()()()),a&2){let t=m,e=xw();fI(3),Qh(`journey`,t),fI(6),hw(t.geoDetails?.category||t.geoDetails?.title?9:-1),fI(2),Qh(`geoJsonData`,t.geoDetails?.geoJson||t.geoDetails?.location)(`iconType`,t.geoDetails?.category??e.DEFAULT_CATEGORY),fI(4),Qh(`journey`,t),fI(4),Qh(`images`,e.getImages(t))(`videos`,mb(8,ya)),fI(4),Qh(`videos`,e.getVideos(t))}}var oi=(()=>{class a{constructor(){this.route=b(G$1),this.journeyService=b(L),this.journey=F(this.journeyService.getJourneyById(this.route.snapshot.params.id),{initialValue:null}),this.DEFAULT_CATEGORY=b$1,this.getIconConfigByCategory=$o}getImages(t){return t.imagesDetails??new l}getVideos(t){let e=new Array;return t.videosDetails?.videos?.map(n=>e.push(n.videoId)),e}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=$D({type:a,selectors:[[`app-view-journey`]],decls:1,vars:1,consts:[[1,`mt-6`,`mb-4`],[1,`grid`,`grid-cols-1`,`gap-4`,`items-center`],[1,`col-span-1`],[3,`journey`],[1,`mt-6`],[`mat-stretch-tabs`,`true`,`mat-align-tabs`,`start`,1,`shadow-md`,`rounded-lg`],[`mat-tab-label`,``],[1,`p-4`],[1,`flex`,`flex-row`,`items-center`,`justify-center`,`gap-2`,`mb-3`],[1,`relative`,`h-[50vh]`,`md:h-[80vh]`,`rounded-lg`,`overflow-hidden`],[3,`geoJsonData`,`iconType`],[`galleryId`,`imageGallery`,3,`images`,`videos`],[`galleryId`,`videoGallery`,3,`videos`],[1,`ml-1`],[1,`inline-flex`,`items-center`,`gap-1.5`,`shrink-0`,`px-3`,`py-1`,`rounded-full`,`bg-primary/10`,`dark:bg-primary/20`,`border`,`border-primary/25`,`dark:border-primary/30`,`text-primary`,`text-xs`,`font-semibold`,`tracking-wide`,`select-none`],[1,`text-base`,`font-bold`,`gradient-text`,`m-0`,`truncate`],[1,`journey-card__icon--sm`,`shrink-0`,`opacity-80`]],template:function(e,n){if(e&1&&fw(0,Ma,24,9,`section`,0),e&2){let o;hw((o=n.journey())?0:-1,o)}},dependencies:[Qe,Et,wt,Pt,r4,Je,qe,Et$1,Ye],encapsulation:2})}}return a})();export{oi as ViewJourneyComponent};