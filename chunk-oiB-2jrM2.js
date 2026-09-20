import{$ as IT,A as ET,B as Ge$1,Bt as Qn,Ci as zh,Ct as NT,En as Zj,Er as nv,F as Ew,Fr as pg,Ft as Pw,Gr as sg,H as Gj,Hr as rg,Jn as es,Jr as uT,Lr as q,M as Ei,Mt as Pi,N as El,O as Dv,Pn as ag,Qr as vd,Rr as qh,Rt as Qj,Si as zD,Sr as ln$1,St as N,Tt as Nr,U as H,V as Gh,Vt as Rh,Xt as Su,Yr as ue,Z as Hw,Zn as fg,_i as yl,_r as kr,a as $j,an as Um,bi as yw,ci as ww,ct as KD,d as Au,en as Tl,et as Ic,fi as xp,g as Bw,gi as yd,gn as Xi,gt as M,hi as yE,ii as w,j as Eg,jt as Ph,k as Dw,ln as Vw,m as Bj,oi as wm,pi as xu,pn as Wh,pt as Lh,q as Hj,ri as vw,s as $w,si as wu,st as Jm,tr as ge,vi as yp,vn as Xw,vr as kw,xr as lg,xt as Mw,y as CT,yn as Y,z as Fw,zn as bt}from"./chunk-BIrwil9v.js";import{v as ci}from"./chunk-CDXY_3lS.js";import{A as m,H as ze$1,I as qe$1,P as pe,S as ge$1,c as Lt,d as P,o as In$1,t as Ai}from"./chunk-DxWNxQBo.js";import{At as z,Dt as In$2,Et as Gr,Ft as N$1,Ht as gi,J as Yt,Ot as Lr,Pt as L,Y as mt,a as yt$1,cn as Wt,ct as G,ft as sr,i as wt$1,kt as Y$1,lt as I,pt as F,qt as mi,r as le,rn as Bt,sn as Tn$1,st as Bt$1,t as G$1,un as xt$1,ut as Lt$1,zt as ce}from"./main-V6GKK4JJ.js";import"./chunk-C6zfsUDO.js";import"./chunk-CwDdvSq-.js";import{t as O}from"./chunk-trZmQlF-.js";import"./chunk-DajIv-YQ.js";import{t as $o}from"./chunk-DnKKVprM.js";import{i as b,s as l,t as L$1}from"./chunk-1ZVpn45S.js";import{t as C}from"./chunk-rvdq8zh0.js";import"./chunk-BonOlzN2.js";import"./chunk-JY4hFFkC.js";import{t as n4}from"./chunk-CEAdNmZQ.js";import{t as Dt}from"./chunk-Bdj8l0mY.js";import{t as pe$1}from"./chunk-KhwE0IzX2.js";var kt=[`*`];function $e(a,s){a&1&&Fw(0)}var Je=[`tabListContainer`];var qe=[`tabList`];var Ye=[`tabListInner`];var Ze=[`nextPaginator`];var Ke=[`previousPaginator`];var Ue=[`content`];function Xe(a,s){}var tn=[`tabBodyWrapper`];var en=[`tabHeader`];function nn(a,s){}function an(a,s){if(a&1&&Lh(0,nn,0,0,`ng-template`,12),a&2){let t=kw().$implicit;Gh(`cdkPortalOutlet`,t.templateLabel)}}function on(a,s){if(a&1&&uT(0),a&2){let t=kw().$implicit;Eg(t.textLabel)}}function rn(a,s){if(a&1){let t=Mw();Pi(0,`div`,7,2),rg(`click`,function(){let n=yd(t),i=n.$implicit,m=n.$index,w=kw(),N=$w(1);return vd(w._handleClick(i,N,m))})(`cdkFocusChange`,function(n){let i=yd(t).$index;return vd(kw()._tabFocusChanged(n,i))}),zh(2,`span`,8)(3,`div`,9),Pi(4,`span`,10)(5,`span`,11),yw(6,an,1,1,null,12)(7,on,1,1),yl()()()}if(a&2){let t=s.$implicit,e=s.$index,n=$w(1),i=kw();Xw(t.labelClass),pg(`mdc-tab--active`,i.selectedIndex===e),Gh(`id`,i._getTabLabelId(t,e))(`disabled`,t.disabled)(`fitInkBarToContent`,i.fitInkBarToContent),Wh(`tabIndex`,i._getTabIndex(e))(`aria-posinset`,e+1)(`aria-setsize`,i._tabs.length)(`aria-controls`,i._getTabContentId(e))(`aria-selected`,i.selectedIndex===e)(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),yE(3),Gh(`matRippleTrigger`,n)(`matRippleDisabled`,t.disabled||i.disableRipple),yE(3),vw(t.templateLabel?6:7)}}function sn(a,s){a&1&&Fw(0)}function ln(a,s){if(a&1){let t=Mw();Pi(0,`mat-tab-body`,13),rg(`_onCentered`,function(){yd(t);return vd(kw()._removeTabBodyWrapperHeight())})(`_onCentering`,function(n){yd(t);return vd(kw()._setTabBodyWrapperHeight(n))})(`_beforeCentering`,function(n){yd(t);return vd(kw()._bodyCentered(n))}),yl()}if(a&2){let t=s.$implicit,e=s.$index,n=kw();Xw(t.bodyClass),Gh(`id`,n._getTabContentId(e))(`content`,t.content)(`position`,t.position)(`animationDuration`,n._bodyAnimationDuration)(`preserveContent`,n.preserveContent),Wh(`tabindex`,n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)(`aria-labelledby`,n._getTabLabelId(t,e))(`aria-hidden`,n.selectedIndex!==e)}}var dn=new N(`MatTabContent`);var cn=(()=>{class a{template=w(Nr);static ɵfac=function(e){return new(e||a)};static ɵdir=KD({type:a,selectors:[[``,`matTabContent`,``]],features:[IT([{provide:dn,useExisting:a}])]})}return a})();var mn=new N(`MatTabLabel`);var Fe=new N(`MAT_TAB`);var It=(()=>{class a extends gi{_closestTab=w(Fe,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=Dv(a)))(n||a)}})();static ɵdir=KD({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[IT([{provide:mn,useExisting:a}]),Rh]})}return a})();var je=new N(`MAT_TAB_GROUP`);var wt=(()=>{class a{_viewContainerRef=w(Xi);_closestTabGroup=w(je,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Y;position=null;origin=null;isActive=!1;constructor(){w(P).load(xt$1)}ngOnChanges(t){(t.hasOwnProperty(`textLabel`)||t.hasOwnProperty(`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new N$1(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=zD({type:a,selectors:[[`mat-tab`]],contentQueries:function(e,n,i){if(e&1&&sg(i,It,5)(i,cn,7,Nr),e&2){let m;Vw(m=Hw())&&(n.templateLabel=m.first),Vw(m=Hw())&&(n._explicitContent=m.first)}},viewQuery:function(e,n){if(e&1&&ag(Nr,7),e&2){let i;Vw(i=Hw())&&(n._implicitContent=i.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(e,n){e&2&&Wh(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Qj],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[IT([{provide:Fe,useExisting:a}]),nv],ngContentSelectors:kt,decls:1,vars:0,template:function(e,n){e&1&&(Pw(),Ph(0,$e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})}return a})();var vt=`mdc-tab-indicator--active`;var Pe=`mdc-tab-indicator--no-transition`;var Ct=class{_items;_currentItem;constructor(s){this._items=s}hide(){this._items.forEach(s=>s.deactivateInkBar()),this._currentItem=void 0}alignToElement(s){let t=this._items.find(n=>n.elementRef.nativeElement===s),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var bn=(()=>{class a{_elementRef=w(kr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(vt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,m=t.left-n.left;e.classList.add(Pe),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${m}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Pe),e.classList.add(vt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(vt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=KD({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Qj]}})}return a})();var He=(()=>{class a extends bn{elementRef=w(kr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=Dv(a)))(n||a)}})();static ɵdir=KD({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(Wh(`aria-disabled`,!!n.disabled),pg(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Qj]},features:[Rh]})}return a})();var Le={passive:!0};var pn=650;var un=100;function yt(a){let s=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(s)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(s)?s:``}var hn=(()=>{class a{_elementRef=w(kr);_changeDetectorRef=w(Gj);_viewportRuler=w(L);_dir=w(qe$1,{optional:!0});_ngZone=w(ue);_platform=w(m);_sharedResizeObserver=w(O);_injector=w(ge);_renderer=w(Ic);_animationsDisabled=Ai();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Y;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Y;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Ge$1;indexFocused=new Ge$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Le),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Le))}ngAfterContentInit(){let t=this._dir?this._dir.change:wm(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(wu(32),Au(this._destroyed)),n=this._viewportRuler.change(150).pipe(Au(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new pe(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),xp(i,{injector:this._injector}),Um(t,n,e,this._items.changes,this._itemsResized()).pipe(Au(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(m=>{this.indexFocused.emit(m),this._setTabFocus(m)})}_itemsResized(){return typeof ResizeObserver!=`function`?bt:this._items.changes.pipe(Su(this._items),xu(t=>new M(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Jm(1),ln$1(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ze$1(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:m}=e.elementRef.nativeElement,w,N;this._getLayoutDirection()==`ltr`?(w=i,N=w+m):(N=this._tabListInner.nativeElement.offsetWidth-i,w=N-m);let bt=this.scrollDistance,St=this.scrollDistance+n;w<bt?this.scrollDistance-=bt-w:N>St&&(this.scrollDistance+=Math.min(N-St,w-bt))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Qn(pn,un).pipe(Au(Um(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=KD({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Qj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Zj]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var _n=(()=>{class a extends hn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ct(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Dv(a)))(n||a)}})();static ɵcmp=zD({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(e,n,i){if(e&1&&sg(i,He,4),e&2){let m;Vw(m=Hw())&&(n._items=m)}},viewQuery:function(e,n){if(e&1&&ag(Je,7)(qe,7)(Ye,7)(Ze,5)(Ke,5),e&2){let i;Vw(i=Hw())&&(n._tabListContainer=i.first),Vw(i=Hw())&&(n._tabList=i.first),Vw(i=Hw())&&(n._tabListInner=i.first),Vw(i=Hw())&&(n._nextPaginator=i.first),Vw(i=Hw())&&(n._previousPaginator=i.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(e,n){e&2&&pg(`mat-mdc-tab-header-pagination-controls-enabled`,n._showPaginationControls)(`mat-mdc-tab-header-rtl`,n._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Qj]},features:[Rh],ngContentSelectors:kt,decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(e,n){e&1&&(Pw(),Pi(0,`div`,5,0),rg(`click`,function(){return n._handlePaginatorClick(`before`)})(`mousedown`,function(m){return n._handlePaginatorPress(`before`,m)})(`touchend`,function(){return n._stopInterval()}),zh(2,`div`,6),yl(),Pi(3,`div`,7,1),rg(`keydown`,function(m){return n._handleKeydown(m)}),Pi(5,`div`,8,2),rg(`cdkObserveContent`,function(){return n._onContentChanges()}),Pi(7,`div`,9,3),Fw(9),yl()()(),Pi(10,`div`,10,4),rg(`mousedown`,function(m){return n._handlePaginatorPress(`after`,m)})(`click`,function(){return n._handlePaginatorClick(`after`)})(`touchend`,function(){return n._stopInterval()}),zh(12,`div`,6),yl()),e&2&&(pg(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollBefore),Gh(`matRippleDisabled`,n._disableScrollBefore||n.disableRipple),yE(3),pg(`_mat-animation-noopable`,n._animationsDisabled),yE(2),Wh(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby||null),yE(5),pg(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollAfter),Gh(`matRippleDisabled`,n._disableScrollAfter||n.disableRipple))},dependencies:[Wt,In$1],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})}return a})();var fn=new N(`MAT_TABS_CONFIG`);var Ae=(()=>{class a extends mi{_host=w(xt);_ngZone=w(ue);_centeringSub=H.EMPTY;_leavingSub=H.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Su(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Dv(a)))(n||a)}})();static ɵdir=KD({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Rh]})}return a})();var xt=(()=>{class a{_elementRef=w(kr);_dir=w(qe$1,{optional:!0});_ngZone=w(ue);_injector=w(ge);_renderer=w(Ic);_diAnimationsDisabled=Ai();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=H.EMPTY;_position;_previousPosition;_onCentering=new Ge$1;_beforeCentering=new Ge$1;_afterLeavingCenter=new Ge$1;_onCentered=new Ge$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=w(Gj);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),xp(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),xp(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=zD({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(e,n){if(e&1&&ag(Ae,5)(Ue,5),e&2){let i;Vw(i=Hw())&&(n._portalHost=i.first),Vw(i=Hw())&&(n._contentElement=i.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(e,n){e&2&&Wh(`inert`,n._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(e,n){e&1&&(Pi(0,`div`,1,0),Lh(2,Xe,0,0,`ng-template`,2),yl()),e&2&&pg(`mat-tab-body-content-left`,n._position===`left`)(`mat-tab-body-content-right`,n._position===`right`)(`mat-tab-body-content-can-animate`,n._position===`center`||n._previousPosition===`center`)},dependencies:[Ae,ce],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})}return a})();var Ve=(()=>{class a{_elementRef=w(kr);_changeDetectorRef=w(Gj);_ngZone=w(ue);_tabsSubscription=H.EMPTY;_tabLabelSubscription=H.EMPTY;_tabBodySubscription=H.EMPTY;_diAnimationsDisabled=Ai();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Ei;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=yt(t.body),this._headerAnimationDuration=yt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=yt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Ge$1;focusChange=new Ge$1;animationDone=new Ge$1;selectedTabChange=new Ge$1(!0);_groupId;_isServer=!w(m).isBrowser;constructor(){let t=w(fn,{optional:!0});this._groupId=w(ge$1).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Su(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Tt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Um(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=zD({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(e,n,i){if(e&1&&sg(i,wt,5),e&2){let m;Vw(m=Hw())&&(n._allTabs=m)}},viewQuery:function(e,n){if(e&1&&ag(tn,5)(en,5)(xt,5),e&2){let i;Vw(i=Hw())&&(n._tabBodyWrapper=i.first),Vw(i=Hw())&&(n._tabHeader=i.first),Vw(i=Hw())&&(n._tabBodies=i)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(e,n){e&2&&(Wh(`mat-align-tabs`,n.alignTabs),Xw(`mat-`+(n.color||`primary`)),fg(`--%NS%mat-tab-body-animation-duration`,n._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,n._headerAnimationDuration),pg(`mat-mdc-tab-group-dynamic-height`,n.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,n.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,n.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Qj],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Qj],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Qj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Zj],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,Zj],disablePagination:[2,`disablePagination`,`disablePagination`,Qj],disableRipple:[2,`disableRipple`,`disableRipple`,Qj],preserveContent:[2,`preserveContent`,`preserveContent`,Qj],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[IT([{provide:je,useExisting:a}])],ngContentSelectors:kt,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(e,n){e&1&&(Pw(),Pi(0,`mat-tab-header`,3,0),rg(`indexFocused`,function(m){return n._focusChanged(m)})(`selectFocusedIndex`,function(m){return n.selectedIndex=m}),Dw(2,rn,8,17,`div`,4,Ew),yl(),yw(4,sn,1,0),Pi(5,`div`,5,1),Dw(7,ln,1,10,`mat-tab-body`,6,Ew),yl()),e&2&&(Gh(`selectedIndex`,n.selectedIndex||0)(`disableRipple`,n.disableRipple)(`disablePagination`,n.disablePagination),qh(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby),yE(2),ww(n._tabs),yE(2),vw(n._isServer?4:-1),yE(),pg(`_mat-animation-noopable`,n._bodyAnimationsDisabled()),yE(2),ww(n._tabs))},dependencies:[_n,He,Lt,Wt,mi,xt],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})}return a})();var Tt=class{index;tab};var gn=(a,s)=>s.data?.src;function vn(a,s){a&1&&uT(0,` YouTube `)}function yn(a,s){a&1&&uT(0,` Video `)}function Cn(a,s){if(a&1&&(Pi(0,`span`,5),yw(1,vn,1,0)(2,yn,1,0),yl()),a&2){let t=kw().$implicit,e=kw();yE(),vw(t.type===e.GalleryItemTypes.Youtube?1:2)}}function xn(a,s){if(a&1&&(Pi(0,`div`,1),zh(1,`img`,4),yw(2,Cn,3,1,`span`,5),yl()),a&2){let t=s.$implicit,e=s.$index,n=kw();Gh(`lightbox`,e)(`gallery`,n.galleryId()),yE(),Gh(`src`,t.type===n.GalleryItemTypes.Image?t.data?.src:t.data?.thumb??`assets/image/default-video-thumbnail.png`,yp)(`matTooltip`,t.data?.args?.title),yE(),vw(t.type!==n.GalleryItemTypes.Image?2:-1)}}function Tn(a,s){a&1&&(Pi(0,`p`,2),uT(1,` No media available for this journey. `),yl())}function kn(a,s){if(a&1&&(El(0),Pi(1,`div`,6)(2,`p`,7),uT(3),yl()(),es()),a&2){let t=s.$implicit;yE(3),Eg(t?.args?.title)}}var Oe=(()=>{class a{constructor(){this.GalleryItemTypes=z,this.galleryId=Hj(`myLightbox`),this.images=Hj(new l),this.videos=Hj([]),this.galleryImageDef=$j.required(In$2),this.gallery=w(Y$1),this.items=Bj([]),this.galleryConfig={loadingStrategy:`lazy`}}ngOnInit(){this.items.set(this.getGalleryItems()),this.gallery.ref(this.galleryId(),q({imageTemplate:this.galleryImageDef().templateRef},this.galleryConfig)).load(this.items())}getGalleryItems(){let t=new Array;return this.getImageItems()?.map(e=>t.push(e)),this.getVideoItems()?.map(e=>t.push(e)),t}getImageItems(){return this.images()?.images.map(t=>({type:z.Image,data:{src:t.url,thumb:t.url,args:{title:t.title,isThumbnail:t.isThumbnail}}}))}getVideoItems(){return this.videos()?.map(t=>this.isItYoutubeVideoId(t)?this.newYoutubeItem(t):this.newVideoItem(t))}isItYoutubeVideoId(t){return!t.includes(`.`)&&!t.includes(`/`)}newYoutubeItem(t){return{type:z.Youtube,data:{src:`https://www.youtube.com/embed/${t}`,thumb:`https://img.youtube.com/vi/${t}/0.jpg`,params:{loop:1,playlist:t,rel:0,controls:1}}}}newVideoItem(t){return{type:z.Iframe,data:{src:t,thumb:`assets/image/default-video-thumbnail.png`}}}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=zD({type:a,selectors:[[`app-media-gallery`]],viewQuery:function(e,n){e&1&&lg(n.galleryImageDef,In$2,5),e&2&&Bw()},inputs:{galleryId:[1,`galleryId`],images:[1,`images`],videos:[1,`videos`],items:[1,`items`]},outputs:{items:`itemsChange`},decls:5,vars:1,consts:[[1,`flex`,`flex-wrap`,`grow`,`mt-2`,`me-0`,`gap-2`,`justify-center`],[1,`mb-1`,`text-center`,`rounded-lg`,`overflow-hidden`,`shadow-lg`,`border`,`border-gray-300`,3,`lightbox`,`gallery`],[1,`text-gray-500`,`italic`],[4,`galleryImageDef`],[`height`,`200`,`width`,`200`,`alt`,`media`,`loading`,`lazy`,1,`journey-image-thumbnail`,3,`src`,`matTooltip`],[1,`video-tag`],[1,`h-full`,`w-full`,`text-end`,`flex`,`flex-col`,`justify-end`],[1,`text-center`]],template:function(e,n){e&1&&(Pi(0,`div`,0),Dw(1,xn,3,5,`div`,1,gn,!1,Tn,2,0,`p`,2),yl(),Lh(4,kn,4,1,`ng-container`,3)),e&2&&(yE(),ww(n.items()))},dependencies:[Lr,In$2,Gr,Yt,mt],styles:[`.journey-image-thumbnail[_ngcontent-%COMP%]{object-fit:fill}.mb-1.text-center.rounded-lg.overflow-hidden.shadow-lg.border.border-gray-300[_ngcontent-%COMP%]{position:relative}.video-tag[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:8px;background:#ffffffb3;color:#4b5563;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:500;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}`]})}}return a})();function In(a,s){if(a&1&&(Pi(0,`span`,4),uT(1),yl()),a&2){let t=s.$implicit;yE(),Tl(` `,t,` `)}}var Ge=(()=>{class a{constructor(){this.journey=Hj.required()}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=zD({type:a,selectors:[[`app-view-journey-basic-details`]],inputs:{journey:[1,`journey`]},decls:6,vars:3,consts:[[1,`mt-4`],[1,`min-h-[50vh]`],[3,`title`,`markdownText`,`journeyDate`],[1,`mt-4`,`flex`,`flex-wrap`,`gap-2`],[1,`badge`,`rounded-full`,`border`,`border-primary`,`text-primary`,`px-3`,`py-1`,`shadow-sm`]],template:function(e,n){e&1&&(Pi(0,`div`,0)(1,`div`,1),zh(2,`app-display-markdown-component`,2),yl(),Pi(3,`div`,3),Dw(4,In,2,1,`span`,4,Ew),yl()()),e&2&&(yE(2),Gh(`title`,n.journey().geoDetails?.title??``)(`markdownText`,n.journey().description)(`journeyDate`,n.journey().journeyDate),yE(2),ww(n.journey().tags))},dependencies:[sr,pe$1],encapsulation:2})}}return a})();function wn(a,s){a&1&&(Pi(0,`mat-icon`,6),uT(1,`check_circle`),yl())}function Sn(a,s){a&1&&(Pi(0,`mat-icon`,7),uT(1,`remove_circle`),yl())}function Dn(a,s){if(a&1){let t=Mw();Pi(0,`button`,10),rg(`click`,function(){yd(t);return vd(kw().editJourney())}),Pi(1,`mat-icon`),uT(2,`edit`),yl(),Pi(3,`span`),uT(4,`Edit journey`),yl()()}}var ze=(()=>{class a{constructor(){this.router=w(le),this.journey=Hj.required()}editJourney(){this.router.navigate([`/journey`,this.journey().id,`edit`]).then()}viewInTimeline(){this.router.navigate([`/timeline`],{queryParams:{id:this.journey().id,autoplay:`true`}}).then()}async shareJourney(){let t=this.journey(),e={title:t.name,text:`Explore my journey: ${t.name}`,url:window.location.href};if(navigator.share){await navigator.share(e);return}await navigator.clipboard.writeText(e.url)}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=zD({type:a,selectors:[[`app-view-journey-header`]],inputs:{journey:[1,`journey`]},decls:26,vars:7,consts:[[`journeyActionsMenu`,`matMenu`],[1,`flex`,`flex-col`,`md:flex-row`,`items-center`,`gap-4`],[1,`text-sm`,`text-primary`,`border-2`,`border-gradient-primary`,`badge`,`rounded-md`,`px-2`,`py-1`],[1,`journey-date`],[1,`flex`,`flex-row`,`items-center`,`gap-1`],[1,`text-lg`,`font-semibold`,`text-center`],[`matTooltip`,`Published`,1,`text-success!`,`!overflow-visible`],[`matTooltip`,`Not Published`,1,`text-warning!`,`!overflow-visible`],[`mat-icon-button`,``,`aria-label`,`Journey actions`,`matTooltip`,`Journey actions`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`,4,`appHasWriteAccess`],[`mat-menu-item`,``,3,`click`]],template:function(e,n){if(e&1&&(Pi(0,`h4`,1)(1,`span`,2)(2,`span`,3),uT(3),CT(4,`date`),yl()(),Pi(5,`span`,4)(6,`span`,5),uT(7),yl(),yw(8,wn,2,0,`mat-icon`,6)(9,Sn,2,0,`mat-icon`,7),Pi(10,`button`,8)(11,`mat-icon`),uT(12,`more_vert`),yl()()()(),Pi(13,`mat-menu`,null,0),Lh(15,Dn,5,0,`button`,9),Pi(16,`button`,10),rg(`click`,function(){return n.viewInTimeline()}),Pi(17,`mat-icon`),uT(18,`play_circle`),yl(),Pi(19,`span`),uT(20,`Relive in timeline`),yl()(),Pi(21,`button`,10),rg(`click`,function(){return n.shareJourney()}),Pi(22,`mat-icon`),uT(23,`share`),yl(),Pi(24,`span`),uT(25,`Share journey`),yl()()()),e&2){let i=$w(14);yE(3),Eg(NT(4,4,n.journey().journeyDate,`dd.MM.yyyy`)),yE(4),Eg(n.journey().name),yE(),vw(n.journey().isPublished?8:9),yE(2),Gh(`matMenuTriggerFor`,i)}},dependencies:[mt,C,yt$1,wt$1,Tn$1,Bt,Lt$1,I,G,Bt$1,ci],encapsulation:2})}}return a})();var Mn=()=>[];function Nn(a,s){a&1&&(Pi(0,`mat-icon`),uT(1,`map`),yl(),Pi(2,`span`,13),uT(3,`Geo`),yl())}function En(a,s){if(a&1&&(Pi(0,`span`,14)(1,`mat-icon`,16),uT(2),yl(),uT(3),yl()),a&2){let t=kw(2);Wh(`aria-label`,`Category: `+t.geoDetails?.category);let e=kw().getIconConfigByCategory(t.geoDetails?.category);yE(2),Tl(` `,e?.iconName,` `),yE(),Tl(` `,e?.label,` `)}}function Bn(a,s){if(a&1&&(Pi(0,`h6`,15),uT(1),yl()),a&2){let t=kw(2);yE(),Tl(` `,t.geoDetails?.title,` `)}}function Rn(a,s){if(a&1&&(Pi(0,`div`,8),yw(1,En,4,3,`span`,14),yw(2,Bn,2,1,`h6`,15),yl()),a&2){let t=kw();yE(),vw(t.geoDetails?.category?1:-1),yE(),vw(t.geoDetails?.title?2:-1)}}function Pn(a,s){a&1&&(Pi(0,`mat-icon`),uT(1,`bookmark_heart`),yl(),Pi(2,`span`,13),uT(3,`Memories`),yl())}function Ln(a,s){a&1&&(Pi(0,`mat-icon`),uT(1,`photo_library`),yl(),Pi(2,`span`,13),uT(3,`Images`),yl())}function An(a,s){a&1&&(Pi(0,`mat-icon`),uT(1,`video_library`),yl(),Pi(2,`span`,13),uT(3,`Videos`),yl())}function Fn(a,s){if(a&1&&(Pi(0,`section`,0)(1,`div`,1)(2,`div`,2),zh(3,`app-view-journey-header`,3),yl()(),Pi(4,`div`,4)(5,`mat-tab-group`,5)(6,`mat-tab`),Lh(7,Nn,4,0,`ng-template`,6),Pi(8,`div`,7),yw(9,Rn,3,2,`div`,8),Pi(10,`div`,9),zh(11,`app-world-map`,10),yl()()(),Pi(12,`mat-tab`),Lh(13,Pn,4,0,`ng-template`,6),Pi(14,`div`,7),zh(15,`app-view-journey-basic-details`,3),yl()(),Pi(16,`mat-tab`),Lh(17,Ln,4,0,`ng-template`,6),Pi(18,`div`,7),zh(19,`app-media-gallery`,11),yl()(),Pi(20,`mat-tab`),Lh(21,An,4,0,`ng-template`,6),Pi(22,`div`,7),zh(23,`app-media-gallery`,12),yl()()()()()),a&2){let t=s,e=kw();yE(3),Gh(`journey`,t),yE(6),vw(t.geoDetails?.category||t.geoDetails?.title?9:-1),yE(2),Gh(`geoJsonData`,t.geoDetails?.geoJson||t.geoDetails?.location)(`iconType`,t.geoDetails?.category??e.DEFAULT_CATEGORY),yE(4),Gh(`journey`,t),yE(4),Gh(`images`,e.getImages(t))(`videos`,ET(8,Mn)),yE(4),Gh(`videos`,e.getVideos(t))}}var bi=(()=>{class a{constructor(){this.route=w(G$1),this.journeyService=w(L$1),this.journey=F(this.journeyService.getJourneyById(this.route.snapshot.params.id),{initialValue:null}),this.DEFAULT_CATEGORY=b,this.getIconConfigByCategory=$o}getImages(t){return t.imagesDetails??new l}getVideos(t){let e=new Array;return t.videosDetails?.videos?.map(n=>e.push(n.videoId)),e}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=zD({type:a,selectors:[[`app-view-journey`]],decls:1,vars:1,consts:[[1,`mt-6`,`mb-4`],[1,`grid`,`grid-cols-1`,`gap-4`,`items-center`],[1,`col-span-1`],[3,`journey`],[1,`mt-6`],[`mat-stretch-tabs`,`true`,`mat-align-tabs`,`start`,1,`shadow-md`,`rounded-lg`],[`mat-tab-label`,``],[1,`p-4`],[1,`flex`,`flex-row`,`items-center`,`justify-center`,`gap-2`,`mb-3`],[1,`relative`,`h-[50vh]`,`md:h-[80vh]`,`rounded-lg`,`overflow-hidden`],[3,`geoJsonData`,`iconType`],[`galleryId`,`imageGallery`,3,`images`,`videos`],[`galleryId`,`videoGallery`,3,`videos`],[1,`ml-1`],[1,`inline-flex`,`items-center`,`gap-1.5`,`shrink-0`,`px-3`,`py-1`,`rounded-full`,`bg-primary/10`,`dark:bg-primary/20`,`border`,`border-primary/25`,`dark:border-primary/30`,`text-primary`,`text-xs`,`font-semibold`,`tracking-wide`,`select-none`],[1,`text-base`,`font-bold`,`gradient-text`,`m-0`,`truncate`],[1,`journey-card__icon--sm`,`shrink-0`,`opacity-80`]],template:function(e,n){if(e&1&&yw(0,Fn,24,9,`section`,0),e&2){let i;vw((i=n.journey())?0:-1,i)}},dependencies:[Ve,wt,wt$1,It,n4,Oe,Ge,Dt,ze],encapsulation:2})}}return a})();export{bi as ViewJourneyComponent};