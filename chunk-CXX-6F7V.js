import {n as n4}from'./chunk-t1Jp0EHe.js';import {p as pe}from'./chunk-Bm-jfSR1.js';import {O as Ot}from'./chunk-chZiBbr6.js';import {D,ac as G,F,R as RD,f as wt$1,n as nw,r as rw,aW as Mr,aU as C1,bu as se,bv as V,aY as Ai,bw as ui,aE as qe$1,b5 as m,bx as ge,av as iu,au as sm,aJ as _1,by as M1,bz as Lt,bA as Wt,bB as gi,aP as Ew,M as Mi,z as qh,j as iw,l as ll,k as kh,bC as Ah,t as tE,s as sw,aS as eg,aR as rT,aG as S,a$ as Rh,bD as Fw,bE as Xh,bF as Qh,bm as Tw,bn as Cw,bl as zh,bo as Wi,aD as ie,aZ as P,a_ as wt$2,bG as N,aI as qy,bH as Th,bp as Dr,bI as _i,aN as lv,aH as LD,aO as Eh,bJ as z,ar as v1,al as E1,bK as Sn$1,bL as Y,K as I1,bM as U,bN as Lr,bO as Nr,bP as Yt,ax as mt,b as wh,am as Yh,an as bw,bQ as Zn,O as Oh,ag as ue,y as yt$1,a as Fn,S as St,ay as si,Q as Qw,b0 as lT,i as ag,b1 as fT,v as vw,aB as oT,bR as ow,bS as In$1,aQ as Dw,b4 as qe$2,b7 as fe,bT as FE,bs as yp,bU as he,az as fl,aA as Gi,x as dw,C as cd,E as ld,a8 as _w,b6 as L$1,bi as im,bV as gu,bc as wu,bW as pe$1,bX as wt$3,aw as su,bY as M,bZ as Hm,ad as rn$1,b_ as ze$1,b$ as Un,B as gl,ah as sp}from'./main-34PH6VYJ.js';import'./chunk-iR4YkQiM.js';import {$ as $o}from'./chunk-BEk-Z27R.js';import {L,b,l}from'./chunk-DO9u2t35.js';import {C}from'./chunk-CtcAl6oI.js';import'./chunk-CsGwkYR6.js';import {O}from'./chunk-CvyIPrSp.js';import'./chunk-CNHnKL5J.js';import'./chunk-f6nO2tqC.js';import'./chunk-DdBPorxg.js';var kt=["*"];function Ge(a,r){a&1&&Dw(0);}var ze=["tabListContainer"],Qe=["tabList"],We=["tabListInner"],$e=["nextPaginator"],Je=["previousPaginator"],qe=["content"];function Ye(a,r){}var Ze=["tabBodyWrapper"],Ke=["tabHeader"];function Ue(a,r){}function Xe(a,r){if(a&1&&wh(0,Ue,0,0,"ng-template",12),a&2){let t=vw().$implicit;kh("cdkPortalOutlet",t.templateLabel);}}function tn(a,r){if(a&1&&Qw(0),a&2){let t=vw().$implicit;ag(t.textLabel);}}function en(a,r){if(a&1){let t=dw();Mi(0,"div",7,2),qh("click",function(){let n=cd(t),i=n.$implicit,c=n.$index,w=vw(),B=_w(1);return ld(w._handleClick(i,B,c))})("cdkFocusChange",function(n){let i=cd(t).$index,c=vw();return ld(c._tabFocusChanged(n,i))}),Oh(2,"span",8)(3,"div",9),Mi(4,"span",10)(5,"span",11),nw(6,Xe,1,1,null,12)(7,tn,1,1),ll()()();}if(a&2){let t=r.$implicit,e=r.$index,n=_w(1),i=vw();Fw(t.labelClass),eg("mdc-tab--active",i.selectedIndex===e),kh("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),Rh("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),tE(3),kh("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),tE(3),rw(t.templateLabel?6:7);}}function nn(a,r){a&1&&Dw(0);}function an(a,r){if(a&1){let t=dw();Mi(0,"mat-tab-body",13),qh("_onCentered",function(){cd(t);let n=vw();return ld(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){cd(t);let i=vw();return ld(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){cd(t);let i=vw();return ld(i._bodyCentered(n))}),ll();}if(a&2){let t=r.$implicit,e=r.$index,n=vw();Fw(t.bodyClass),kh("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n._bodyAnimationDuration)("preserveContent",n.preserveContent),Rh("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e);}}var on=new S("MatTabContent"),rn=(()=>{class a{template=D(Dr);static \u0275fac=function(e){return new(e||a)};static \u0275dir=LD({type:a,selectors:[["","matTabContent",""]],features:[rT([{provide:on,useExisting:a}])]})}return a})(),sn=new S("MatTabLabel"),Se=new S("MAT_TAB"),It=(()=>{class a extends _i{_closestTab=D(Se,{optional:true});static \u0275fac=(()=>{let t;return function(n){return (t||(t=lv(a)))(n||a)}})();static \u0275dir=LD({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[rT([{provide:sn,useExisting:a}]),Eh]})}return a})(),Le=new S("MAT_TAB_GROUP"),wt=(()=>{class a{_viewContainerRef=D(Wi);_closestTabGroup=D(Le,{optional:true});disabled=false;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t);}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ie;position=null;origin=null;isActive=false;constructor(){D(P).load(wt$2);}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete();}ngOnInit(){this._contentPortal=new N(this._explicitContent||this._implicitContent,this._viewContainerRef);}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t);}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=RD({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&zh(i,It,5)(i,rn,7,Dr),e&2){let c;Tw(c=Cw())&&(n.templateLabel=c.first),Tw(c=Cw())&&(n._explicitContent=c.first);}},viewQuery:function(e,n){if(e&1&&Qh(Dr,7),e&2){let i;Tw(i=Cw())&&(n._implicitContent=i.first);}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&Rh("id",null);},inputs:{disabled:[2,"disabled","disabled",_1],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[rT([{provide:Se,useExisting:a}]),qy],ngContentSelectors:kt,decls:1,vars:0,template:function(e,n){e&1&&(Ew(),Th(0,Ge,1,0,"ng-template"));},encapsulation:2,changeDetection:1})}return a})(),vt="mdc-tab-indicator--active",Be="mdc-tab-indicator--no-transition",Ct=class{_items;_currentItem;constructor(r){this._items=r;}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0;}alignToElement(r){let t=this._items.find(n=>n.elementRef.nativeElement===r),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t;}}},ln=(()=>{class a{_elementRef=D(Mr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=false;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement());}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(vt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,c=t.left-n.left;e.classList.add(Be),this._inkBarContentElement.style.setProperty("transform",`translateX(${c}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Be),e.classList.add(vt),this._inkBarContentElement.style.setProperty("transform","");}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(vt);}ngOnInit(){this._createInkBarElement();}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null;}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement();}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement);}static \u0275fac=function(e){return new(e||a)};static \u0275dir=LD({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",_1]}})}return a})();var Ae=(()=>{class a extends ln{elementRef=D(Mr);disabled=false;focus(){this.elementRef.nativeElement.focus();}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return (t||(t=lv(a)))(n||a)}})();static \u0275dir=LD({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(Rh("aria-disabled",!!n.disabled),eg("mat-mdc-tab-disabled",n.disabled));},inputs:{disabled:[2,"disabled","disabled",_1]},features:[Eh]})}return a})(),Re={passive:true},dn=650,cn=100;function yt(a){let r=a+"";return /^[0-9]+(?:\.[0-9]+)?$/.test(r)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(r)?r:""}var mn=(()=>{class a{_elementRef=D(Mr);_changeDetectorRef=D(C1);_viewportRuler=D(L$1);_dir=D(qe$2,{optional:true});_ngZone=D(se);_platform=D(m);_sharedResizeObserver=D(O);_injector=D(fe);_renderer=D(FE);_animationsDisabled=Ai();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=false;_destroyed=new ie;_showPaginationControls=false;_disableScrollAfter=true;_disableScrollBefore=true;_tabLabelCount;_scrollDistanceChanged=false;_keyManager;_currentTextContent;_stopScrolling=new ie;disablePagination=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=true,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e));}_selectedIndex=0;selectFocusedIndex=new qe$1;indexFocused=new qe$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())]);}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Re),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Re));}ngAfterContentInit(){let t=this._dir?this._dir.change:im("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(gu(32),wu(this._destroyed)),n=this._viewportRuler.change(150).pipe(wu(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab();};this._keyManager=new pe$1(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>false),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),yp(i,{injector:this._injector}),sm(t,n,e,this._items.changes,this._itemsResized()).pipe(wu(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i();});}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());}),this._keyManager.change.subscribe(c=>{this.indexFocused.emit(c),this._setTabFocus(c);});}_itemsResized(){return typeof ResizeObserver!="function"?wt$3:this._items.changes.pipe(iu(this._items),su(t=>new M(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect();}}))),Hm(1),rn$1(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=false,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=false,this._changeDetectorRef.markForCheck());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete();}_handleKeydown(t){if(!ze$1(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));}break;default:this._keyManager?.onKeydown(t);}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck();}));}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition();}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t);}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:true}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth;}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0);}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t);}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t);}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:c}=e.elementRef.nativeElement,w,B;this._getLayoutDirection()=="ltr"?(w=i,B=w+c):(B=this._tabListInner.nativeElement.offsetWidth-i,w=B-c);let mt=this.scrollDistance,Dt=this.scrollDistance+n;w<mt?this.scrollDistance-=mt-w:B>Dt&&(this.scrollDistance+=Math.min(B-Dt,w-mt));}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=false;else {let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck());}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=true:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck());}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide();}_stopInterval(){this._stopScrolling.next();}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Un(dn,cn).pipe(wu(sm(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval();}));}_scrollTo(t){if(this.disablePagination)return {maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=true,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=LD({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",_1],selectedIndex:[2,"selectedIndex","selectedIndex",M1]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),bn=(()=>{class a extends mn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=false;ngAfterContentInit(){this._inkBar=new Ct(this._items),super.ngAfterContentInit();}_itemSelected(t){t.preventDefault();}static \u0275fac=(()=>{let t;return function(n){return (t||(t=lv(a)))(n||a)}})();static \u0275cmp=RD({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&zh(i,Ae,4),e&2){let c;Tw(c=Cw())&&(n._items=c);}},viewQuery:function(e,n){if(e&1&&Qh(ze,7)(Qe,7)(We,7)($e,5)(Je,5),e&2){let i;Tw(i=Cw())&&(n._tabListContainer=i.first),Tw(i=Cw())&&(n._tabList=i.first),Tw(i=Cw())&&(n._tabListInner=i.first),Tw(i=Cw())&&(n._nextPaginator=i.first),Tw(i=Cw())&&(n._previousPaginator=i.first);}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&eg("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl");},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",_1]},features:[Eh],ngContentSelectors:kt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(Ew(),Mi(0,"div",5,0),qh("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(c){return n._handlePaginatorPress("before",c)})("touchend",function(){return n._stopInterval()}),Oh(2,"div",6),ll(),Mi(3,"div",7,1),qh("keydown",function(c){return n._handleKeydown(c)}),Mi(5,"div",8,2),qh("cdkObserveContent",function(){return n._onContentChanges()}),Mi(7,"div",9,3),Dw(9),ll()()(),Mi(10,"div",10,4),qh("mousedown",function(c){return n._handlePaginatorPress("after",c)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),Oh(12,"div",6),ll()),e&2&&(eg("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),kh("matRippleDisabled",n._disableScrollBefore||n.disableRipple),tE(3),eg("_mat-animation-noopable",n._animationsDisabled),tE(2),Rh("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),tE(5),eg("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),kh("matRippleDisabled",n._disableScrollAfter||n.disableRipple));},dependencies:[Wt,In$1],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
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
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
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
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
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
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
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
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return a})(),pn=new S("MAT_TABS_CONFIG"),Pe=(()=>{class a extends gi{_host=D(xt);_ngZone=D(se);_centeringSub=V.EMPTY;_leavingSub=V.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(iu(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content);});}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach());});}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe();}static \u0275fac=(()=>{let t;return function(n){return (t||(t=lv(a)))(n||a)}})();static \u0275dir=LD({type:a,selectors:[["","matTabBodyHost",""]],features:[Eh]})}return a})(),xt=(()=>{class a{_elementRef=D(Mr);_dir=D(qe$2,{optional:true});_ngZone=D(se);_injector=D(fe);_renderer=D(FE);_diAnimationsDisabled=Ai();_eventCleanups;_initialized=false;_fallbackTimer;_positionIndex;_dirChangeSubscription=V.EMPTY;_position;_previousPosition;_onCentering=new qe$1;_beforeCentering=new qe$1;_afterLeavingCenter=new qe$1;_onCentered=new qe$1(true);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=false;set position(t){this._positionIndex=t,this._computePositionAnimationState();}constructor(){if(this._dir){let t=D(C1);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck();});}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(true),yp(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=true;}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe();}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone());};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted());}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)];});}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight);}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit();}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t);}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)));}_simulateTransitionEvents(){this._transitionStarted(),yp(()=>this._transitionDone(),{injector:this._injector});}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=RD({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&Qh(Pe,5)(qe,5),e&2){let i;Tw(i=Cw())&&(n._portalHost=i.first),Tw(i=Cw())&&(n._contentElement=i.first);}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&Rh("inert",n._position==="center"?null:"");},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(Mi(0,"div",1,0),wh(2,Ye,0,0,"ng-template",2),ll()),e&2&&eg("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center");},dependencies:[Pe,he],styles:[`.mat-mdc-tab-body {
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
  transition: transform var(--mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
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
`],encapsulation:2,changeDetection:1})}return a})(),Fe=(()=>{class a{_elementRef=D(Mr);_changeDetectorRef=D(C1);_ngZone=D(se);_tabsSubscription=V.EMPTY;_tabLabelSubscription=V.EMPTY;_tabBodySubscription=V.EMPTY;_diAnimationsDisabled=Ai();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ui;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck();}_fitInkBarToContent=false;stretchTabs=true;alignTabs=null;dynamicHeight=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t;}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t=="object"?(this._bodyAnimationDuration=yt(t.body),this._headerAnimationDuration=yt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=yt(t);}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t;}_contentTabIndex=null;disablePagination=false;disableRipple=false;preserveContent=false;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t;}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new qe$1;focusChange=new qe$1;animationDone=new qe$1;selectedTabChange=new qe$1(true);_groupId;_isServer=!D(m).isBrowser;constructor(){let t=D(pn,{optional:true});this._groupId=D(ge).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:false,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:false,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:false,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:true,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null;}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px";}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="");});}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex);}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck());}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=true,this.selectedTabChange.emit(this._createChangeEvent(t));});}this._changeDetectorRef.markForCheck();});}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(true));}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(iu(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges();});}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe();}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab();}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination();}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t);}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t));}_createChangeEvent(t){let e=new Tt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=sm(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck());}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return `${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px");}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit());}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n);}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e);}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex));}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=RD({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&zh(i,wt,5),e&2){let c;Tw(c=Cw())&&(n._allTabs=c);}},viewQuery:function(e,n){if(e&1&&Qh(Ze,5)(Ke,5)(xt,5),e&2){let i;Tw(i=Cw())&&(n._tabBodyWrapper=i.first),Tw(i=Cw())&&(n._tabHeader=i.first),Tw(i=Cw())&&(n._tabBodies=i);}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(e,n){e&2&&(Rh("mat-align-tabs",n.alignTabs),Fw("mat-"+(n.color||"primary")),Xh("--mat-tab-body-animation-duration",n._bodyAnimationDuration)("--mat-tab-header-animation-duration",n._headerAnimationDuration),eg("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs));},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",_1],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",_1],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",_1],selectedIndex:[2,"selectedIndex","selectedIndex",M1],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",M1],disablePagination:[2,"disablePagination","disablePagination",_1],disableRipple:[2,"disableRipple","disableRipple",_1],preserveContent:[2,"preserveContent","preserveContent",_1],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[rT([{provide:Le,useExisting:a}])],ngContentSelectors:kt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(Ew(),Mi(0,"mat-tab-header",3,0),qh("indexFocused",function(c){return n._focusChanged(c)})("selectFocusedIndex",function(c){return n.selectedIndex=c}),iw(2,en,8,17,"div",4,ow),ll(),nw(4,nn,1,0),Mi(5,"div",5,1),iw(7,an,1,10,"mat-tab-body",6,ow),ll()),e&2&&(kh("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Ah("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),tE(2),sw(n._tabs),tE(2),rw(n._isServer?4:-1),tE(),eg("_mat-animation-noopable",n._bodyAnimationsDisabled()),tE(2),sw(n._tabs));},dependencies:[bn,Ae,Lt,Wt,gi,xt],styles:[`.mdc-tab {
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
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
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
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
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
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
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
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
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
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
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
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
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
`],encapsulation:2,changeDetection:1})}return a})(),Tt=class{index;tab};var hn=(a,r)=>r.data?.src;function un(a,r){a&1&&Qw(0," YouTube ");}function _n(a,r){a&1&&Qw(0," Video ");}function fn(a,r){if(a&1&&(Mi(0,"span",5),nw(1,un,1,0)(2,_n,1,0),ll()),a&2){let t=vw().$implicit,e=vw();tE(),rw(t.type===e.GalleryItemTypes.Youtube?1:2);}}function gn(a,r){if(a&1&&(Mi(0,"div",1),Oh(1,"img",4),nw(2,fn,3,1,"span",5),ll()),a&2){let t=r.$implicit,e=r.$index,n=vw();kh("lightbox",e)("gallery",n.galleryId()),tE(),kh("src",t.type===n.GalleryItemTypes.Image?t.data?.src:t.data?.thumb??"assets/image/default-video-thumbnail.png",sp)("matTooltip",t.data?.args?.title),tE(),rw(t.type!==n.GalleryItemTypes.Image?2:-1);}}function vn(a,r){a&1&&(Mi(0,"p",2),Qw(1," No media available for this journey. "),ll());}function yn(a,r){if(a&1&&(fl(0),Mi(1,"div",6)(2,"p",7),Qw(3),ll()(),Gi()),a&2){let t=r.$implicit;tE(3),ag(t?.args?.title);}}var je=(()=>{class a{constructor(){this.GalleryItemTypes=z,this.galleryId=v1("myLightbox"),this.images=v1(new l),this.videos=v1([]),this.galleryImageDef=E1.required(Sn$1),this.gallery=D(Y),this.items=I1([]),this.galleryConfig={loadingStrategy:"lazy"};}ngOnInit(){this.items.set(this.getGalleryItems()),this.gallery.ref(this.galleryId(),U({imageTemplate:this.galleryImageDef().templateRef},this.galleryConfig)).load(this.items());}getGalleryItems(){let t=new Array;return this.getImageItems()?.map(e=>t.push(e)),this.getVideoItems()?.map(e=>t.push(e)),t}getImageItems(){return this.images()?.images.map(t=>({type:z.Image,data:{src:t.url,thumb:t.url,args:{title:t.title,isThumbnail:t.isThumbnail}}}))}getVideoItems(){return this.videos()?.map(t=>this.isItYoutubeVideoId(t)?this.newYoutubeItem(t):this.newVideoItem(t))}isItYoutubeVideoId(t){return !t.includes(".")&&!t.includes("/")}newYoutubeItem(t){return {type:z.Youtube,data:{src:`https://www.youtube.com/embed/${t}`,thumb:`https://img.youtube.com/vi/${t}/0.jpg`,params:{loop:1,playlist:t,rel:0,controls:1}}}}newVideoItem(t){return {type:z.Iframe,data:{src:t,thumb:"assets/image/default-video-thumbnail.png"}}}static{this.\u0275fac=function(e){return new(e||a)};}static{this.\u0275cmp=RD({type:a,selectors:[["app-media-gallery"]],viewQuery:function(e,n){e&1&&Yh(n.galleryImageDef,Sn$1,5),e&2&&bw();},inputs:{galleryId:[1,"galleryId"],images:[1,"images"],videos:[1,"videos"],items:[1,"items"]},outputs:{items:"itemsChange"},decls:5,vars:1,consts:[[1,"flex","flex-wrap","grow","mt-2","me-0","gap-2","justify-center"],[1,"mb-1","text-center","rounded-lg","overflow-hidden","shadow-lg","border","border-gray-300",3,"lightbox","gallery"],[1,"text-gray-500","italic"],[4,"galleryImageDef"],["height","200","width","200","alt","media","loading","lazy",1,"journey-image-thumbnail",3,"src","matTooltip"],[1,"video-tag"],[1,"h-full","w-full","text-end","flex","flex-col","justify-end"],[1,"text-center"]],template:function(e,n){e&1&&(Mi(0,"div",0),iw(1,gn,3,5,"div",1,hn,false,vn,2,0,"p",2),ll(),wh(4,yn,4,1,"ng-container",3)),e&2&&(tE(),sw(n.items()));},dependencies:[Lr,Sn$1,Nr,Yt,mt],styles:[".journey-image-thumbnail[_ngcontent-%COMP%]{object-fit:fill}.mb-1.text-center.rounded-lg.overflow-hidden.shadow-lg.border.border-gray-300[_ngcontent-%COMP%]{position:relative}.video-tag[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:8px;background:#ffffffb3;color:#4b5563;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:500;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}"]});}}return a})();function Cn(a,r){if(a&1&&(Mi(0,"span",4),Qw(1),ll()),a&2){let t=r.$implicit;tE(),gl(" ",t," ");}}var He=(()=>{class a{constructor(){this.journey=v1.required();}static{this.\u0275fac=function(e){return new(e||a)};}static{this.\u0275cmp=RD({type:a,selectors:[["app-view-journey-basic-details"]],inputs:{journey:[1,"journey"]},decls:6,vars:3,consts:[[1,"mt-4"],[1,"min-h-[50vh]"],[3,"title","markdownText","journeyDate"],[1,"mt-4","flex","flex-wrap","gap-2"],[1,"badge","rounded-full","border","border-primary","text-primary","px-3","py-1","shadow-sm"]],template:function(e,n){e&1&&(Mi(0,"div",0)(1,"div",1),Oh(2,"app-display-markdown-component",2),ll(),Mi(3,"div",3),iw(4,Cn,2,1,"span",4,ow),ll()()),e&2&&(tE(2),kh("title",n.journey().geoDetails?.title??"")("markdownText",n.journey().description)("journeyDate",n.journey().journeyDate),tE(2),sw(n.journey().tags));},dependencies:[Zn,pe],encapsulation:2});}}return a})();function xn(a,r){a&1&&(Mi(0,"mat-icon",5),Qw(1,"check_circle"),ll());}function Tn(a,r){a&1&&(Mi(0,"mat-icon",6),Qw(1,"remove_circle"),ll());}function kn(a,r){if(a&1){let t=dw();Mi(0,"button",9),qh("click",function(){cd(t);let n=vw();return ld(n.editJourney())}),Mi(1,"mat-icon"),Qw(2,"edit"),ll()();}}var Ne=(()=>{class a{constructor(){this.router=D(ue),this.journey=v1.required();}editJourney(){this.router.navigate(["/journey",this.journey().id,"edit"]).then();}viewInTimeline(){this.router.navigate(["/timeline"],{queryParams:{id:this.journey().id,autoplay:"true"}}).then();}static{this.\u0275fac=function(e){return new(e||a)};}static{this.\u0275cmp=RD({type:a,selectors:[["app-view-journey-header"]],inputs:{journey:[1,"journey"]},decls:14,vars:6,consts:[[1,"flex","flex-col","md:flex-row","items-center","gap-4"],[1,"text-sm","text-primary","border-2","border-gradient-primary","badge","rounded-md","px-2","py-1"],[1,"journey-date"],[1,"flex","flex-row","items-center","gap-1"],[1,"text-lg","font-semibold","text-center"],["matTooltip","Published",1,"text-success!","!overflow-visible"],["matTooltip","Not Published",1,"text-warning!","!overflow-visible"],["mat-icon-button","","matTooltip","Edit Journey",3,"click",4,"appHasWriteAccess"],["mat-icon-button","","matTooltip","Relive in Timeline",3,"click"],["mat-icon-button","","matTooltip","Edit Journey",3,"click"]],template:function(e,n){e&1&&(Mi(0,"h4",0)(1,"span",1)(2,"span",2),Qw(3),lT(4,"date"),ll()(),Mi(5,"span",3)(6,"span",4),Qw(7),ll(),nw(8,xn,2,0,"mat-icon",5)(9,Tn,2,0,"mat-icon",6),wh(10,kn,3,0,"button",7),Mi(11,"button",8),qh("click",function(){return n.viewInTimeline()}),Mi(12,"mat-icon"),Qw(13,"play_circle"),ll()()()()),e&2&&(tE(3),ag(fT(4,3,n.journey().journeyDate,"dd.MM.yyyy")),tE(4),ag(n.journey().name),tE(),rw(n.journey().isPublished?8:9));},dependencies:[mt,C,yt$1,wt$1,Fn,St,si],encapsulation:2});}}return a})();var In=()=>[];function wn(a,r){a&1&&(Mi(0,"mat-icon"),Qw(1,"map"),ll(),Mi(2,"span",13),Qw(3,"Geo"),ll());}function Dn(a,r){if(a&1&&(Mi(0,"span",14)(1,"mat-icon",16),Qw(2),ll(),Qw(3),ll()),a&2){let t=vw(2);Rh("aria-label","Category: "+t.geoDetails?.category);let e=vw().getIconConfigByCategory(t.geoDetails?.category);tE(2),gl(" ",e?.iconName," "),tE(),gl(" ",e?.label," ");}}function Mn(a,r){if(a&1&&(Mi(0,"h6",15),Qw(1),ll()),a&2){let t=vw(2);tE(),gl(" ",t.geoDetails?.title," ");}}function En(a,r){if(a&1&&(Mi(0,"div",8),nw(1,Dn,4,3,"span",14),nw(2,Mn,2,1,"h6",15),ll()),a&2){let t=vw();tE(),rw(t.geoDetails?.category?1:-1),tE(),rw(t.geoDetails?.title?2:-1);}}function Bn(a,r){a&1&&(Mi(0,"mat-icon"),Qw(1,"bookmark_heart"),ll(),Mi(2,"span",13),Qw(3,"Memories"),ll());}function Rn(a,r){a&1&&(Mi(0,"mat-icon"),Qw(1,"photo_library"),ll(),Mi(2,"span",13),Qw(3,"Images"),ll());}function Pn(a,r){a&1&&(Mi(0,"mat-icon"),Qw(1,"video_library"),ll(),Mi(2,"span",13),Qw(3,"Videos"),ll());}function Sn(a,r){if(a&1&&(Mi(0,"section",0)(1,"div",1)(2,"div",2),Oh(3,"app-view-journey-header",3),ll()(),Mi(4,"div",4)(5,"mat-tab-group",5)(6,"mat-tab"),wh(7,wn,4,0,"ng-template",6),Mi(8,"div",7),nw(9,En,3,2,"div",8),Mi(10,"div",9),Oh(11,"app-world-map",10),ll()()(),Mi(12,"mat-tab"),wh(13,Bn,4,0,"ng-template",6),Mi(14,"div",7),Oh(15,"app-view-journey-basic-details",3),ll()(),Mi(16,"mat-tab"),wh(17,Rn,4,0,"ng-template",6),Mi(18,"div",7),Oh(19,"app-media-gallery",11),ll()(),Mi(20,"mat-tab"),wh(21,Pn,4,0,"ng-template",6),Mi(22,"div",7),Oh(23,"app-media-gallery",12),ll()()()()()),a&2){let t=r,e=vw();tE(3),kh("journey",t),tE(6),rw(t.geoDetails?.category||t.geoDetails?.title?9:-1),tE(2),kh("geoJsonData",t.geoDetails?.geoJson||t.geoDetails?.location)("iconType",t.geoDetails?.category??e.DEFAULT_CATEGORY),tE(4),kh("journey",t),tE(4),kh("images",e.getImages(t))("videos",oT(8,In)),tE(4),kh("videos",e.getVideos(t));}}var ri=(()=>{class a{constructor(){this.route=D(G),this.journeyService=D(L),this.journey=F(this.journeyService.getJourneyById(this.route.snapshot.params.id),{initialValue:null}),this.DEFAULT_CATEGORY=b,this.getIconConfigByCategory=$o;}getImages(t){return t.imagesDetails??new l}getVideos(t){let e=new Array;return t.videosDetails?.videos?.map(n=>e.push(n.videoId)),e}static{this.\u0275fac=function(e){return new(e||a)};}static{this.\u0275cmp=RD({type:a,selectors:[["app-view-journey"]],decls:1,vars:1,consts:[[1,"mt-6","mb-4"],[1,"grid","grid-cols-1","gap-4","items-center"],[1,"col-span-1"],[3,"journey"],[1,"mt-6"],["mat-stretch-tabs","true","mat-align-tabs","start",1,"shadow-md","rounded-lg"],["mat-tab-label",""],[1,"p-4"],[1,"flex","flex-row","items-center","justify-center","gap-2","mb-3"],[1,"relative","h-[50vh]","md:h-[80vh]","rounded-lg","overflow-hidden"],[3,"geoJsonData","iconType"],["galleryId","imageGallery",3,"images","videos"],["galleryId","videoGallery",3,"videos"],[1,"ml-1"],[1,"inline-flex","items-center","gap-1.5","shrink-0","px-3","py-1","rounded-full","bg-primary/10","dark:bg-primary/20","border","border-primary/25","dark:border-primary/30","text-primary","text-xs","font-semibold","tracking-wide","select-none"],[1,"text-base","font-bold","gradient-text","m-0","truncate"],[1,"journey-card__icon--sm","shrink-0","opacity-80"]],template:function(e,n){if(e&1&&nw(0,Sn,24,9,"section",0),e&2){let i;rw((i=n.journey())?0:-1,i);}},dependencies:[Fe,wt,wt$1,It,n4,je,He,Ot,Ne],encapsulation:2});}}return a})();
export{ri as ViewJourneyComponent};