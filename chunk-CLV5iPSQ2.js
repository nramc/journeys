import{An as cn$1,At as Rh,Bn as ev,Br as rg,Dr as ng,F as Gn,Fr as q,Ft as Sh,G as Iv,Gn as ge,Ht as Uh,J as Ji,Jn as gw,Jt as Vw,K as Iw,Pr as pp,Qt as WD,R as Hh,S as El,Sn as aT,Sr as mg,St as Pw,Tn as bT,U as Im,Un as gE,Ut as V,Vt as U1,W as Iu,Wn as gd,Wt as V1,X as Ki,Yr as ue,Zn as hl,Zt as W1,_ as Ct$1,_n as _p,_r as lg,at as N,bn as _u,br as mT,cn as Yw,cr as jw,d as Bh,dn as ZD,dr as ki,en as We,fi as yT,gi as yl,gt as Ow,hi as yi,hn as _,in as Xh,ir as j1,j as G1,k as Fw,kn as cg,ln as Z,lt as Nu,mr as kw,ni as w,nr as ig,nt as Mu,o as Ah,pi as yc,pn as Zm,pr as kr,r as $h,ri as wT,s as Aw,ti as vw,tt as Mr,v as Cw,w as F1,wr as mw,xi as yw,xr as md,z as Hm}from"./chunk-BAmWVHme.js";import{v as ci}from"./chunk-CJqAhjyF.js";import{A as m,H as ze$1,I as qe$1,P as pe,S as ge$1,c as Lt,d as P,o as In$1,t as Ai}from"./chunk-C2Ke3sSr.js";import{At as z,Dt as In$2,Et as Gr,J as Yt,Nt as L,Ot as Lr,Pt as N$1,Ut as gi,Wt as he,Y as mt,a as yt$1,cn as Wt,ct as G,ft as er,i as wt$1,kt as Y,lt as I,n as G$1,pt as F,r as ue$1,rn as Bt,sn as Tn$1,st as Bt$1,un as xt$1,ut as Lt$1,zt as _i}from"./main-FVCJRBMJ.js";import"./chunk-Ou_IXl0H.js";import"./chunk-h8XyJIFf.js";import{t as $o}from"./chunk-BHD6fjRZ.js";import{i as b,s as l,t as L$1}from"./chunk-BPoDB_yI.js";import{t as C}from"./chunk-BrPbM7EI.js";import"./chunk-D73HZ1Ez.js";import"./chunk-BDlhWGME.js";import"./chunk-DEPKqF2_.js";import{t as O}from"./chunk-DkLgIA3N.js";import{t as pe$1}from"./chunk-DjP_0zXh.js";import{t as Dt}from"./chunk-CGW_aRyZ.js";import{t as n4}from"./chunk-CKjBPRxi2.js";var kt=[`*`];function $e(a,s){a&1&&Ow(0)}var Je=[`tabListContainer`];var qe=[`tabList`];var Ye=[`tabListInner`];var Ze=[`nextPaginator`];var Ke=[`previousPaginator`];var Ue=[`content`];function Xe(a,s){}var tn=[`tabBodyWrapper`];var en=[`tabHeader`];function nn(a,s){}function an(a,s){if(a&1&&Ah(0,nn,0,0,`ng-template`,12),a&2){let t=Aw().$implicit;$h(`cdkPortalOutlet`,t.templateLabel)}}function on(a,s){if(a&1&&aT(0),a&2){let t=Aw().$implicit;mg(t.textLabel)}}function rn(a,s){if(a&1){let t=Cw();ki(0,`div`,7,2),Xh(`click`,function(){let n=gd(t),i=n.$implicit,m=n.$index,w=Aw(),N=Vw(1);return md(w._handleClick(i,N,m))})(`cdkFocusChange`,function(n){let i=gd(t).$index;return md(Aw()._tabFocusChanged(n,i))}),Uh(2,`span`,8)(3,`div`,9),ki(4,`span`,10)(5,`span`,11),gw(6,an,1,1,null,12)(7,on,1,1),hl()()()}if(a&2){let t=s.$implicit,e=s.$index,n=Vw(1),i=Aw();Yw(t.labelClass),lg(`mdc-tab--active`,i.selectedIndex===e),$h(`id`,i._getTabLabelId(t,e))(`disabled`,t.disabled)(`fitInkBarToContent`,i.fitInkBarToContent),Bh(`tabIndex`,i._getTabIndex(e))(`aria-posinset`,e+1)(`aria-setsize`,i._tabs.length)(`aria-controls`,i._getTabContentId(e))(`aria-selected`,i.selectedIndex===e)(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),gE(3),$h(`matRippleTrigger`,n)(`matRippleDisabled`,t.disabled||i.disableRipple),gE(3),mw(t.templateLabel?6:7)}}function sn(a,s){a&1&&Ow(0)}function ln(a,s){if(a&1){let t=Cw();ki(0,`mat-tab-body`,13),Xh(`_onCentered`,function(){gd(t);return md(Aw()._removeTabBodyWrapperHeight())})(`_onCentering`,function(n){gd(t);return md(Aw()._setTabBodyWrapperHeight(n))})(`_beforeCentering`,function(n){gd(t);return md(Aw()._bodyCentered(n))}),hl()}if(a&2){let t=s.$implicit,e=s.$index,n=Aw();Yw(t.bodyClass),$h(`id`,n._getTabContentId(e))(`content`,t.content)(`position`,t.position)(`animationDuration`,n._bodyAnimationDuration)(`preserveContent`,n.preserveContent),Bh(`tabindex`,n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)(`aria-labelledby`,n._getTabLabelId(t,e))(`aria-hidden`,n.selectedIndex!==e)}}var dn=new N(`MatTabContent`);var cn=(()=>{class a{template=w(Mr);static ɵfac=function(e){return new(e||a)};static ɵdir=ZD({type:a,selectors:[[``,`matTabContent`,``]],features:[mT([{provide:dn,useExisting:a}])]})}return a})();var mn=new N(`MatTabLabel`);var Fe=new N(`MAT_TAB`);var It=(()=>{class a extends _i{_closestTab=w(Fe,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=Iv(a)))(n||a)}})();static ɵdir=ZD({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[mT([{provide:mn,useExisting:a}]),Sh]})}return a})();var je=new N(`MAT_TAB_GROUP`);var wt=(()=>{class a{_viewContainerRef=w(Ki);_closestTabGroup=w(je,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Z;position=null;origin=null;isActive=!1;constructor(){w(P).load(xt$1)}ngOnChanges(t){(t.hasOwnProperty(`textLabel`)||t.hasOwnProperty(`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new N$1(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=WD({type:a,selectors:[[`mat-tab`]],contentQueries:function(e,n,i){if(e&1&&ng(i,It,5)(i,cn,7,Mr),e&2){let m;Pw(m=Fw())&&(n.templateLabel=m.first),Pw(m=Fw())&&(n._explicitContent=m.first)}},viewQuery:function(e,n){if(e&1&&rg(Mr,7),e&2){let i;Pw(i=Fw())&&(n._implicitContent=i.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(e,n){e&2&&Bh(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,W1],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[mT([{provide:Fe,useExisting:a}]),ev],ngContentSelectors:kt,decls:1,vars:0,template:function(e,n){e&1&&(kw(),Rh(0,$e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})}return a})();var vt=`mdc-tab-indicator--active`;var Pe=`mdc-tab-indicator--no-transition`;var Ct=class{_items;_currentItem;constructor(s){this._items=s}hide(){this._items.forEach(s=>s.deactivateInkBar()),this._currentItem=void 0}alignToElement(s){let t=this._items.find(n=>n.elementRef.nativeElement===s),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var bn=(()=>{class a{_elementRef=w(kr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(vt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,m=t.left-n.left;e.classList.add(Pe),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${m}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Pe),e.classList.add(vt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(vt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=ZD({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,W1]}})}return a})();var He=(()=>{class a extends bn{elementRef=w(kr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=Iv(a)))(n||a)}})();static ɵdir=ZD({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(Bh(`aria-disabled`,!!n.disabled),lg(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,W1]},features:[Sh]})}return a})();var Le={passive:!0};var pn=650;var un=100;function yt(a){let s=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(s)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(s)?s:``}var hn=(()=>{class a{_elementRef=w(kr);_changeDetectorRef=w(U1);_viewportRuler=w(L);_dir=w(qe$1,{optional:!0});_ngZone=w(ue);_platform=w(m);_sharedResizeObserver=w(O);_injector=w(ge);_renderer=w(yc);_animationsDisabled=Ai();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Z;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Z;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new We;indexFocused=new We;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Le),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Le))}ngAfterContentInit(){let t=this._dir?this._dir.change:Im(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Iu(32),Nu(this._destroyed)),n=this._viewportRuler.change(150).pipe(Nu(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new pe(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),_p(i,{injector:this._injector}),Hm(t,n,e,this._items.changes,this._itemsResized()).pipe(Nu(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(m=>{this.indexFocused.emit(m),this._setTabFocus(m)})}_itemsResized(){return typeof ResizeObserver!=`function`?Ct$1:this._items.changes.pipe(_u(this._items),Mu(t=>new _(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Zm(1),cn$1(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ze$1(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:m}=e.elementRef.nativeElement,w,N;this._getLayoutDirection()==`ltr`?(w=i,N=w+m):(N=this._tabListInner.nativeElement.offsetWidth-i,w=N-m);let bt=this.scrollDistance,St=this.scrollDistance+n;w<bt?this.scrollDistance-=bt-w:N>St&&(this.scrollDistance+=Math.min(N-St,w-bt))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Gn(pn,un).pipe(Nu(Hm(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=ZD({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,W1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,G1]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var _n=(()=>{class a extends hn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ct(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Iv(a)))(n||a)}})();static ɵcmp=WD({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(e,n,i){if(e&1&&ng(i,He,4),e&2){let m;Pw(m=Fw())&&(n._items=m)}},viewQuery:function(e,n){if(e&1&&rg(Je,7)(qe,7)(Ye,7)(Ze,5)(Ke,5),e&2){let i;Pw(i=Fw())&&(n._tabListContainer=i.first),Pw(i=Fw())&&(n._tabList=i.first),Pw(i=Fw())&&(n._tabListInner=i.first),Pw(i=Fw())&&(n._nextPaginator=i.first),Pw(i=Fw())&&(n._previousPaginator=i.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(e,n){e&2&&lg(`mat-mdc-tab-header-pagination-controls-enabled`,n._showPaginationControls)(`mat-mdc-tab-header-rtl`,n._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,W1]},features:[Sh],ngContentSelectors:kt,decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(e,n){e&1&&(kw(),ki(0,`div`,5,0),Xh(`click`,function(){return n._handlePaginatorClick(`before`)})(`mousedown`,function(m){return n._handlePaginatorPress(`before`,m)})(`touchend`,function(){return n._stopInterval()}),Uh(2,`div`,6),hl(),ki(3,`div`,7,1),Xh(`keydown`,function(m){return n._handleKeydown(m)}),ki(5,`div`,8,2),Xh(`cdkObserveContent`,function(){return n._onContentChanges()}),ki(7,`div`,9,3),Ow(9),hl()()(),ki(10,`div`,10,4),Xh(`mousedown`,function(m){return n._handlePaginatorPress(`after`,m)})(`click`,function(){return n._handlePaginatorClick(`after`)})(`touchend`,function(){return n._stopInterval()}),Uh(12,`div`,6),hl()),e&2&&(lg(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollBefore),$h(`matRippleDisabled`,n._disableScrollBefore||n.disableRipple),gE(3),lg(`_mat-animation-noopable`,n._animationsDisabled),gE(2),Bh(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby||null),gE(5),lg(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollAfter),$h(`matRippleDisabled`,n._disableScrollAfter||n.disableRipple))},dependencies:[Wt,In$1],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})}return a})();var fn=new N(`MAT_TABS_CONFIG`);var Ae=(()=>{class a extends gi{_host=w(xt);_ngZone=w(ue);_centeringSub=V.EMPTY;_leavingSub=V.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(_u(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Iv(a)))(n||a)}})();static ɵdir=ZD({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Sh]})}return a})();var xt=(()=>{class a{_elementRef=w(kr);_dir=w(qe$1,{optional:!0});_ngZone=w(ue);_injector=w(ge);_renderer=w(yc);_diAnimationsDisabled=Ai();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=V.EMPTY;_position;_previousPosition;_onCentering=new We;_beforeCentering=new We;_afterLeavingCenter=new We;_onCentered=new We(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=w(U1);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),_p(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),_p(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=WD({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(e,n){if(e&1&&rg(Ae,5)(Ue,5),e&2){let i;Pw(i=Fw())&&(n._portalHost=i.first),Pw(i=Fw())&&(n._contentElement=i.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(e,n){e&2&&Bh(`inert`,n._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(e,n){e&1&&(ki(0,`div`,1,0),Ah(2,Xe,0,0,`ng-template`,2),hl()),e&2&&lg(`mat-tab-body-content-left`,n._position===`left`)(`mat-tab-body-content-right`,n._position===`right`)(`mat-tab-body-content-can-animate`,n._position===`center`||n._previousPosition===`center`)},dependencies:[Ae,he],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})}return a})();var Ve=(()=>{class a{_elementRef=w(kr);_changeDetectorRef=w(U1);_ngZone=w(ue);_tabsSubscription=V.EMPTY;_tabLabelSubscription=V.EMPTY;_tabBodySubscription=V.EMPTY;_diAnimationsDisabled=Ai();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new yi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=yt(t.body),this._headerAnimationDuration=yt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=yt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new We;focusChange=new We;animationDone=new We;selectedTabChange=new We(!0);_groupId;_isServer=!w(m).isBrowser;constructor(){let t=w(fn,{optional:!0});this._groupId=w(ge$1).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(_u(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Tt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Hm(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=WD({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(e,n,i){if(e&1&&ng(i,wt,5),e&2){let m;Pw(m=Fw())&&(n._allTabs=m)}},viewQuery:function(e,n){if(e&1&&rg(tn,5)(en,5)(xt,5),e&2){let i;Pw(i=Fw())&&(n._tabBodyWrapper=i.first),Pw(i=Fw())&&(n._tabHeader=i.first),Pw(i=Fw())&&(n._tabBodies=i)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(e,n){e&2&&(Bh(`mat-align-tabs`,n.alignTabs),Yw(`mat-`+(n.color||`primary`)),cg(`--%NS%mat-tab-body-animation-duration`,n._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,n._headerAnimationDuration),lg(`mat-mdc-tab-group-dynamic-height`,n.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,n.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,n.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,W1],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,W1],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,W1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,G1],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,G1],disablePagination:[2,`disablePagination`,`disablePagination`,W1],disableRipple:[2,`disableRipple`,`disableRipple`,W1],preserveContent:[2,`preserveContent`,`preserveContent`,W1],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[mT([{provide:je,useExisting:a}])],ngContentSelectors:kt,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(e,n){e&1&&(kw(),ki(0,`mat-tab-header`,3,0),Xh(`indexFocused`,function(m){return n._focusChanged(m)})(`selectFocusedIndex`,function(m){return n.selectedIndex=m}),vw(2,rn,8,17,`div`,4,yw),hl(),gw(4,sn,1,0),ki(5,`div`,5,1),vw(7,ln,1,10,`mat-tab-body`,6,yw),hl()),e&2&&($h(`selectedIndex`,n.selectedIndex||0)(`disableRipple`,n.disableRipple)(`disablePagination`,n.disablePagination),Hh(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby),gE(2),Iw(n._tabs),gE(2),mw(n._isServer?4:-1),gE(),lg(`_mat-animation-noopable`,n._bodyAnimationsDisabled()),gE(2),Iw(n._tabs))},dependencies:[_n,He,Lt,Wt,gi,xt],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})}return a})();var Tt=class{index;tab};var gn=(a,s)=>s.data?.src;function vn(a,s){a&1&&aT(0,` YouTube `)}function yn(a,s){a&1&&aT(0,` Video `)}function Cn(a,s){if(a&1&&(ki(0,`span`,5),gw(1,vn,1,0)(2,yn,1,0),hl()),a&2){let t=Aw().$implicit,e=Aw();gE(),mw(t.type===e.GalleryItemTypes.Youtube?1:2)}}function xn(a,s){if(a&1&&(ki(0,`div`,1),Uh(1,`img`,4),gw(2,Cn,3,1,`span`,5),hl()),a&2){let t=s.$implicit,e=s.$index,n=Aw();$h(`lightbox`,e)(`gallery`,n.galleryId()),gE(),$h(`src`,t.type===n.GalleryItemTypes.Image?t.data?.src:t.data?.thumb??`assets/image/default-video-thumbnail.png`,pp)(`matTooltip`,t.data?.args?.title),gE(),mw(t.type!==n.GalleryItemTypes.Image?2:-1)}}function Tn(a,s){a&1&&(ki(0,`p`,2),aT(1,` No media available for this journey. `),hl())}function kn(a,s){if(a&1&&(yl(0),ki(1,`div`,6)(2,`p`,7),aT(3),hl()(),Ji()),a&2){let t=s.$implicit;gE(3),mg(t?.args?.title)}}var Oe=(()=>{class a{constructor(){this.GalleryItemTypes=z,this.galleryId=F1(`myLightbox`),this.images=F1(new l),this.videos=F1([]),this.galleryImageDef=V1.required(In$2),this.gallery=w(Y),this.items=j1([]),this.galleryConfig={loadingStrategy:`lazy`}}ngOnInit(){this.items.set(this.getGalleryItems()),this.gallery.ref(this.galleryId(),q({imageTemplate:this.galleryImageDef().templateRef},this.galleryConfig)).load(this.items())}getGalleryItems(){let t=new Array;return this.getImageItems()?.map(e=>t.push(e)),this.getVideoItems()?.map(e=>t.push(e)),t}getImageItems(){return this.images()?.images.map(t=>({type:z.Image,data:{src:t.url,thumb:t.url,args:{title:t.title,isThumbnail:t.isThumbnail}}}))}getVideoItems(){return this.videos()?.map(t=>this.isItYoutubeVideoId(t)?this.newYoutubeItem(t):this.newVideoItem(t))}isItYoutubeVideoId(t){return!t.includes(`.`)&&!t.includes(`/`)}newYoutubeItem(t){return{type:z.Youtube,data:{src:`https://www.youtube.com/embed/${t}`,thumb:`https://img.youtube.com/vi/${t}/0.jpg`,params:{loop:1,playlist:t,rel:0,controls:1}}}}newVideoItem(t){return{type:z.Iframe,data:{src:t,thumb:`assets/image/default-video-thumbnail.png`}}}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=WD({type:a,selectors:[[`app-media-gallery`]],viewQuery:function(e,n){e&1&&ig(n.galleryImageDef,In$2,5),e&2&&jw()},inputs:{galleryId:[1,`galleryId`],images:[1,`images`],videos:[1,`videos`],items:[1,`items`]},outputs:{items:`itemsChange`},decls:5,vars:1,consts:[[1,`flex`,`flex-wrap`,`grow`,`mt-2`,`me-0`,`gap-2`,`justify-center`],[1,`mb-1`,`text-center`,`rounded-lg`,`overflow-hidden`,`shadow-lg`,`border`,`border-gray-300`,3,`lightbox`,`gallery`],[1,`text-gray-500`,`italic`],[4,`galleryImageDef`],[`height`,`200`,`width`,`200`,`alt`,`media`,`loading`,`lazy`,1,`journey-image-thumbnail`,3,`src`,`matTooltip`],[1,`video-tag`],[1,`h-full`,`w-full`,`text-end`,`flex`,`flex-col`,`justify-end`],[1,`text-center`]],template:function(e,n){e&1&&(ki(0,`div`,0),vw(1,xn,3,5,`div`,1,gn,!1,Tn,2,0,`p`,2),hl(),Ah(4,kn,4,1,`ng-container`,3)),e&2&&(gE(),Iw(n.items()))},dependencies:[Lr,In$2,Gr,Yt,mt],styles:[`.journey-image-thumbnail[_ngcontent-%COMP%]{object-fit:fill}.mb-1.text-center.rounded-lg.overflow-hidden.shadow-lg.border.border-gray-300[_ngcontent-%COMP%]{position:relative}.video-tag[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:8px;background:#ffffffb3;color:#4b5563;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:500;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}`]})}}return a})();function In(a,s){if(a&1&&(ki(0,`span`,4),aT(1),hl()),a&2){let t=s.$implicit;gE(),El(` `,t,` `)}}var Ge=(()=>{class a{constructor(){this.journey=F1.required()}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=WD({type:a,selectors:[[`app-view-journey-basic-details`]],inputs:{journey:[1,`journey`]},decls:6,vars:3,consts:[[1,`mt-4`],[1,`min-h-[50vh]`],[3,`title`,`markdownText`,`journeyDate`],[1,`mt-4`,`flex`,`flex-wrap`,`gap-2`],[1,`badge`,`rounded-full`,`border`,`border-primary`,`text-primary`,`px-3`,`py-1`,`shadow-sm`]],template:function(e,n){e&1&&(ki(0,`div`,0)(1,`div`,1),Uh(2,`app-display-markdown-component`,2),hl(),ki(3,`div`,3),vw(4,In,2,1,`span`,4,yw),hl()()),e&2&&(gE(2),$h(`title`,n.journey().geoDetails?.title??``)(`markdownText`,n.journey().description)(`journeyDate`,n.journey().journeyDate),gE(2),Iw(n.journey().tags))},dependencies:[er,pe$1],encapsulation:2})}}return a})();function wn(a,s){a&1&&(ki(0,`mat-icon`,6),aT(1,`check_circle`),hl())}function Sn(a,s){a&1&&(ki(0,`mat-icon`,7),aT(1,`remove_circle`),hl())}function Dn(a,s){if(a&1){let t=Cw();ki(0,`button`,10),Xh(`click`,function(){gd(t);return md(Aw().editJourney())}),ki(1,`mat-icon`),aT(2,`edit`),hl(),ki(3,`span`),aT(4,`Edit journey`),hl()()}}var ze=(()=>{class a{constructor(){this.router=w(ue$1),this.journey=F1.required()}editJourney(){this.router.navigate([`/journey`,this.journey().id,`edit`]).then()}viewInTimeline(){this.router.navigate([`/timeline`],{queryParams:{id:this.journey().id,autoplay:`true`}}).then()}async shareJourney(){let t=this.journey(),e={title:t.name,text:`Explore my journey: ${t.name}`,url:window.location.href};if(navigator.share){await navigator.share(e);return}await navigator.clipboard.writeText(e.url)}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=WD({type:a,selectors:[[`app-view-journey-header`]],inputs:{journey:[1,`journey`]},decls:26,vars:7,consts:[[`journeyActionsMenu`,`matMenu`],[1,`flex`,`flex-col`,`md:flex-row`,`items-center`,`gap-4`],[1,`text-sm`,`text-primary`,`border-2`,`border-gradient-primary`,`badge`,`rounded-md`,`px-2`,`py-1`],[1,`journey-date`],[1,`flex`,`flex-row`,`items-center`,`gap-1`],[1,`text-lg`,`font-semibold`,`text-center`],[`matTooltip`,`Published`,1,`text-success!`,`!overflow-visible`],[`matTooltip`,`Not Published`,1,`text-warning!`,`!overflow-visible`],[`mat-icon-button`,``,`aria-label`,`Journey actions`,`matTooltip`,`Journey actions`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`,4,`appHasWriteAccess`],[`mat-menu-item`,``,3,`click`]],template:function(e,n){if(e&1&&(ki(0,`h4`,1)(1,`span`,2)(2,`span`,3),aT(3),wT(4,`date`),hl()(),ki(5,`span`,4)(6,`span`,5),aT(7),hl(),gw(8,wn,2,0,`mat-icon`,6)(9,Sn,2,0,`mat-icon`,7),ki(10,`button`,8)(11,`mat-icon`),aT(12,`more_vert`),hl()()()(),ki(13,`mat-menu`,null,0),Ah(15,Dn,5,0,`button`,9),ki(16,`button`,10),Xh(`click`,function(){return n.viewInTimeline()}),ki(17,`mat-icon`),aT(18,`play_circle`),hl(),ki(19,`span`),aT(20,`Relive in timeline`),hl()(),ki(21,`button`,10),Xh(`click`,function(){return n.shareJourney()}),ki(22,`mat-icon`),aT(23,`share`),hl(),ki(24,`span`),aT(25,`Share journey`),hl()()()),e&2){let i=Vw(14);gE(3),mg(bT(4,4,n.journey().journeyDate,`dd.MM.yyyy`)),gE(4),mg(n.journey().name),gE(),mw(n.journey().isPublished?8:9),gE(2),$h(`matMenuTriggerFor`,i)}},dependencies:[mt,C,yt$1,wt$1,Tn$1,Bt,Lt$1,I,G,Bt$1,ci],encapsulation:2})}}return a})();var Mn=()=>[];function Nn(a,s){a&1&&(ki(0,`mat-icon`),aT(1,`map`),hl(),ki(2,`span`,13),aT(3,`Geo`),hl())}function En(a,s){if(a&1&&(ki(0,`span`,14)(1,`mat-icon`,16),aT(2),hl(),aT(3),hl()),a&2){let t=Aw(2);Bh(`aria-label`,`Category: `+t.geoDetails?.category);let e=Aw().getIconConfigByCategory(t.geoDetails?.category);gE(2),El(` `,e?.iconName,` `),gE(),El(` `,e?.label,` `)}}function Bn(a,s){if(a&1&&(ki(0,`h6`,15),aT(1),hl()),a&2){let t=Aw(2);gE(),El(` `,t.geoDetails?.title,` `)}}function Rn(a,s){if(a&1&&(ki(0,`div`,8),gw(1,En,4,3,`span`,14),gw(2,Bn,2,1,`h6`,15),hl()),a&2){let t=Aw();gE(),mw(t.geoDetails?.category?1:-1),gE(),mw(t.geoDetails?.title?2:-1)}}function Pn(a,s){a&1&&(ki(0,`mat-icon`),aT(1,`bookmark_heart`),hl(),ki(2,`span`,13),aT(3,`Memories`),hl())}function Ln(a,s){a&1&&(ki(0,`mat-icon`),aT(1,`photo_library`),hl(),ki(2,`span`,13),aT(3,`Images`),hl())}function An(a,s){a&1&&(ki(0,`mat-icon`),aT(1,`video_library`),hl(),ki(2,`span`,13),aT(3,`Videos`),hl())}function Fn(a,s){if(a&1&&(ki(0,`section`,0)(1,`div`,1)(2,`div`,2),Uh(3,`app-view-journey-header`,3),hl()(),ki(4,`div`,4)(5,`mat-tab-group`,5)(6,`mat-tab`),Ah(7,Nn,4,0,`ng-template`,6),ki(8,`div`,7),gw(9,Rn,3,2,`div`,8),ki(10,`div`,9),Uh(11,`app-world-map`,10),hl()()(),ki(12,`mat-tab`),Ah(13,Pn,4,0,`ng-template`,6),ki(14,`div`,7),Uh(15,`app-view-journey-basic-details`,3),hl()(),ki(16,`mat-tab`),Ah(17,Ln,4,0,`ng-template`,6),ki(18,`div`,7),Uh(19,`app-media-gallery`,11),hl()(),ki(20,`mat-tab`),Ah(21,An,4,0,`ng-template`,6),ki(22,`div`,7),Uh(23,`app-media-gallery`,12),hl()()()()()),a&2){let t=s,e=Aw();gE(3),$h(`journey`,t),gE(6),mw(t.geoDetails?.category||t.geoDetails?.title?9:-1),gE(2),$h(`geoJsonData`,t.geoDetails?.geoJson||t.geoDetails?.location)(`iconType`,t.geoDetails?.category??e.DEFAULT_CATEGORY),gE(4),$h(`journey`,t),gE(4),$h(`images`,e.getImages(t))(`videos`,yT(8,Mn)),gE(4),$h(`videos`,e.getVideos(t))}}var bi=(()=>{class a{constructor(){this.route=w(G$1),this.journeyService=w(L$1),this.journey=F(this.journeyService.getJourneyById(this.route.snapshot.params.id),{initialValue:null}),this.DEFAULT_CATEGORY=b,this.getIconConfigByCategory=$o}getImages(t){return t.imagesDetails??new l}getVideos(t){let e=new Array;return t.videosDetails?.videos?.map(n=>e.push(n.videoId)),e}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=WD({type:a,selectors:[[`app-view-journey`]],decls:1,vars:1,consts:[[1,`mt-6`,`mb-4`],[1,`grid`,`grid-cols-1`,`gap-4`,`items-center`],[1,`col-span-1`],[3,`journey`],[1,`mt-6`],[`mat-stretch-tabs`,`true`,`mat-align-tabs`,`start`,1,`shadow-md`,`rounded-lg`],[`mat-tab-label`,``],[1,`p-4`],[1,`flex`,`flex-row`,`items-center`,`justify-center`,`gap-2`,`mb-3`],[1,`relative`,`h-[50vh]`,`md:h-[80vh]`,`rounded-lg`,`overflow-hidden`],[3,`geoJsonData`,`iconType`],[`galleryId`,`imageGallery`,3,`images`,`videos`],[`galleryId`,`videoGallery`,3,`videos`],[1,`ml-1`],[1,`inline-flex`,`items-center`,`gap-1.5`,`shrink-0`,`px-3`,`py-1`,`rounded-full`,`bg-primary/10`,`dark:bg-primary/20`,`border`,`border-primary/25`,`dark:border-primary/30`,`text-primary`,`text-xs`,`font-semibold`,`tracking-wide`,`select-none`],[1,`text-base`,`font-bold`,`gradient-text`,`m-0`,`truncate`],[1,`journey-card__icon--sm`,`shrink-0`,`opacity-80`]],template:function(e,n){if(e&1&&gw(0,Fn,24,9,`section`,0),e&2){let i;mw((i=n.journey())?0:-1,i)}},dependencies:[Ve,wt,wt$1,It,n4,Oe,Ge,Dt,ze],encapsulation:2})}}return a})();export{bi as ViewJourneyComponent};