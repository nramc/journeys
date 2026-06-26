import{a as Re}from"./chunk-S77FF5XL.js";import{a as Ee}from"./chunk-HICAS6HE.js";import{c as Me}from"./chunk-OAZWBQ74.js";import{a as J,b as fe,c as $,d as ve,e as ye,f as Ce}from"./chunk-LHN2TVTC.js";import"./chunk-TVQVZ42C.js";import{b as ge}from"./chunk-PGIOHU3J.js";import"./chunk-X3UM4GNV.js";import"./chunk-DWIUJM2K.js";import"./chunk-C3HJ6VNK.js";import"./chunk-F6TUYDST.js";import{d as ke,f as Ie}from"./chunk-HURF4OD5.js";import{b as Te,e as dt,i as we}from"./chunk-OCUXLVQR.js";import{a as xe}from"./chunk-HC4RCNG4.js";import{a as lt,b as _e}from"./chunk-PVDIMEGN.js";import"./chunk-K5P2NEZL.js";import"./chunk-WT6DW3J6.js";import{a as De}from"./chunk-SZIXK5KX.js";import{b as le,c as de,h as be,k as pe,l as ft}from"./chunk-LMKNXU6M.js";import"./chunk-MAWOPC7Z.js";import"./chunk-3JWBKK2M.js";import"./chunk-7SNQ5TCJ.js";import{c as ee}from"./chunk-JJEZESWV.js";import"./chunk-4Q3CSSXV.js";import"./chunk-LUEXZCIQ.js";import{a as st,b as ce}from"./chunk-RO6DHE3P.js";import{c as gt,d as me,g as ue,j as he}from"./chunk-R55TY4RW.js";import{D as oe,F as re,G as se,a as ht,g as rt,h as _t,s as ne,t as ae,w as ie}from"./chunk-4X4R7TM4.js";import{a as Ut,c as te}from"./chunk-LVJQNIK7.js";import{o as Xt}from"./chunk-EH254ZFX.js";import{$ as V,Aa as O,Ab as P,Ac as at,Bc as m,Cb as G,Cc as A,Db as f,Dc as N,Eb as Vt,G as Bt,Ga as Ft,H as Y,Ha as K,I as Pt,Ja as H,Ka as jt,Kc as F,Lc as $t,M as Lt,Ob as Ot,Pb as x,Pc as qt,Rb as T,Rc as Yt,Sb as k,Tb as z,Ub as L,Vb as S,Wb as p,Xb as o,Y as St,Yb as r,Z,Zb as _,_ as At,a as Dt,bc as Gt,bd as E,cc as zt,cd as Zt,eb as Ht,ed as Kt,f as B,fc as Q,fd as it,h as Mt,j as q,ja as j,jb as d,kc as C,kd as v,la as l,ld as ot,nc as b,o as Et,ob as X,oc as tt,pb as U,pc as et,qc as nt,ra as D,rb as pt,rc as W,sa as M,sc as u,t as Rt,tc as h,ub as Nt,va as bt,vc as Qt,wc as Wt,xc as ut,yb as g,yc as Jt,za as y,zc as I}from"./chunk-OE5ARKY5.js";var Tt=["*"];function ze(a,s){a&1&&et(0)}var Qe=["tabListContainer"],We=["tabList"],Je=["tabListInner"],$e=["nextPaginator"],qe=["previousPaginator"],Ye=["content"];function Ze(a,s){}var Ke=["tabBodyWrapper"],Xe=["tabHeader"];function Ue(a,s){}function tn(a,s){if(a&1&&f(0,Ue,0,0,"ng-template",12),a&2){let t=b().$implicit;p("cdkPortalOutlet",t.templateLabel)}}function en(a,s){if(a&1&&m(0),a&2){let t=b().$implicit;A(t.textLabel)}}function nn(a,s){if(a&1){let t=Q();o(0,"div",7,2),C("click",function(){let n=D(t),i=n.$implicit,c=n.$index,w=b(),R=ut(1);return M(w._handleClick(i,R,c))})("cdkFocusChange",function(n){let i=D(t).$index,c=b();return M(c._tabFocusChanged(n,i))}),_(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),T(6,tn,1,1,null,12)(7,en,1,1),r()()()}if(a&2){let t=s.$implicit,e=s.$index,n=ut(1),i=b();at(t.labelClass),I("mdc-tab--active",i.selectedIndex===e),p("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),x("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),d(3),p("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),d(3),k(t.templateLabel?6:7)}}function an(a,s){a&1&&et(0)}function on(a,s){if(a&1){let t=Q();o(0,"mat-tab-body",13),C("_onCentered",function(){D(t);let n=b();return M(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){D(t);let i=b();return M(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){D(t);let i=b();return M(i._bodyCentered(n))}),r()}if(a&2){let t=s.$implicit,e=s.$index,n=b();at(t.bodyClass),p("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),x("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var rn=new j("MatTabContent"),sn=(()=>{class a{template=l(U);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=P({type:a,selectors:[["","matTabContent",""]],features:[F([{provide:rn,useExisting:a}])]})}return a})(),ln=new j("MatTabLabel"),Se=new j("MAT_TAB"),kt=(()=>{class a extends pe{_closestTab=l(Se,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=K(a)))(n||a)}})();static \u0275dir=P({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[F([{provide:ln,useExisting:a}]),G]})}return a})(),Ae=new j("MAT_TAB_GROUP"),It=(()=>{class a{_viewContainerRef=l(Nt);_closestTabGroup=l(Ae,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new q;position=null;origin=null;isActive=!1;constructor(){l(ae).load(me)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new be(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&nt(i,kt,5)(i,sn,7,U),e&2){let c;u(c=h())&&(n.templateLabel=c.first),u(c=h())&&(n._explicitContent=c.first)}},viewQuery:function(e,n){if(e&1&&W(U,7),e&2){let i;u(i=h())&&(n._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&x("id",null)},inputs:{disabled:[2,"disabled","disabled",v],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[F([{provide:Se,useExisting:a}]),Ft],ngContentSelectors:Tt,decls:1,vars:0,template:function(e,n){e&1&&(tt(),Vt(0,ze,1,0,"ng-template"))},encapsulation:2})}return a})(),vt="mdc-tab-indicator--active",Be="mdc-tab-indicator--no-transition",yt=class{_items;_currentItem;constructor(s){this._items=s}hide(){this._items.forEach(s=>s.deactivateInkBar()),this._currentItem=void 0}alignToElement(s){let t=this._items.find(n=>n.elementRef.nativeElement===s),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},dn=(()=>{class a{_elementRef=l(H);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(vt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,c=t.left-n.left;e.classList.add(Be),this._inkBarContentElement.style.setProperty("transform",`translateX(${c}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Be),e.classList.add(vt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(vt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=P({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",v]}})}return a})();var Fe=(()=>{class a extends dn{elementRef=l(H);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=K(a)))(n||a)}})();static \u0275dir=P({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(x("aria-disabled",!!n.disabled),I("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",v]},features:[G]})}return a})(),Pe={passive:!0},cn=650,mn=100,bn=(()=>{class a{_elementRef=l(H);_changeDetectorRef=l(it);_viewportRuler=l(de);_dir=l(_t,{optional:!0});_ngZone=l(O);_platform=l(ht);_sharedResizeObserver=l(De);_injector=l(bt);_renderer=l(pt);_animationsDisabled=rt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new q;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new q;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new y;indexFocused=new y;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Pe),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Pe))}ngAfterContentInit(){let t=this._dir?this._dir.change:Rt("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Lt(32),V(this._destroyed)),n=this._viewportRuler.change(150).pipe(V(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new re(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),X(i,{injector:this._injector}),Y(t,n,e,this._items.changes,this._itemsResized()).pipe(V(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(c=>{this.indexFocused.emit(c),this._setTabFocus(c)})}_itemsResized(){return typeof ResizeObserver!="function"?Et:this._items.changes.pipe(Z(this._items),At(t=>new Mt(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),St(1),Pt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!oe(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:c}=e.elementRef.nativeElement,w,R;this._getLayoutDirection()=="ltr"?(w=i,R=w+c):(R=this._tabListInner.nativeElement.offsetWidth-i,w=R-c);let mt=this.scrollDistance,wt=this.scrollDistance+n;w<mt?this.scrollDistance-=mt-w:R>wt&&(this.scrollDistance+=Math.min(R-wt,w-mt))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Bt(cn,mn).pipe(V(Y(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=P({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",v],selectedIndex:[2,"selectedIndex","selectedIndex",ot]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),pn=(()=>{class a extends bn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new yt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=K(a)))(n||a)}})();static \u0275cmp=g({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&nt(i,Fe,4),e&2){let c;u(c=h())&&(n._items=c)}},viewQuery:function(e,n){if(e&1&&W(Qe,7)(We,7)(Je,7)($e,5)(qe,5),e&2){let i;u(i=h())&&(n._tabListContainer=i.first),u(i=h())&&(n._tabList=i.first),u(i=h())&&(n._tabListInner=i.first),u(i=h())&&(n._nextPaginator=i.first),u(i=h())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&I("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",v]},features:[G],ngContentSelectors:Tt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(tt(),o(0,"div",5,0),C("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(c){return n._handlePaginatorPress("before",c)})("touchend",function(){return n._stopInterval()}),_(2,"div",6),r(),o(3,"div",7,1),C("keydown",function(c){return n._handleKeydown(c)}),o(5,"div",8,2),C("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),et(9),r()()(),o(10,"div",10,4),C("mousedown",function(c){return n._handlePaginatorPress("after",c)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),_(12,"div",6),r()),e&2&&(I("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),p("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),I("_mat-animation-noopable",n._animationsDisabled),d(2),x("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),I("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),p("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[gt,ie],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
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
`],encapsulation:2})}return a})(),un=new j("MAT_TABS_CONFIG"),Le=(()=>{class a extends ft{_host=l(Ct);_ngZone=l(O);_centeringSub=B.EMPTY;_leavingSub=B.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Z(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=P({type:a,selectors:[["","matTabBodyHost",""]],features:[G]})}return a})(),Ct=(()=>{class a{_elementRef=l(H);_dir=l(_t,{optional:!0});_ngZone=l(O);_injector=l(bt);_renderer=l(pt);_diAnimationsDisabled=rt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=B.EMPTY;_position;_previousPosition;_onCentering=new y;_beforeCentering=new y;_afterLeavingCenter=new y;_onCentered=new y(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=l(it);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),X(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),X(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&W(Le,5)(Ye,5),e&2){let i;u(i=h())&&(n._portalHost=i.first),u(i=h())&&(n._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&x("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(o(0,"div",1,0),f(2,Ze,0,0,"ng-template",2),r()),e&2&&I("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Le,le],styles:[`.mat-mdc-tab-body {
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
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
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
`],encapsulation:2})}return a})(),je=(()=>{class a{_elementRef=l(H);_changeDetectorRef=l(it);_ngZone=l(O);_tabsSubscription=B.EMPTY;_tabLabelSubscription=B.EMPTY;_tabBodySubscription=B.EMPTY;_diAnimationsDisabled=rt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new jt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new y;focusChange=new y;animationDone=new y;selectedTabChange=new y(!0);_groupId;_isServer=!l(ht).isBrowser;constructor(){let t=l(un,{optional:!0});this._groupId=l(se).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Z(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new xt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Y(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&nt(i,It,5),e&2){let c;u(c=h())&&(n._allTabs=c)}},viewQuery:function(e,n){if(e&1&&W(Ke,5)(Xe,5)(Ct,5),e&2){let i;u(i=h())&&(n._tabBodyWrapper=i.first),u(i=h())&&(n._tabHeader=i.first),u(i=h())&&(n._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(x("mat-align-tabs",n.alignTabs),at("mat-"+(n.color||"primary")),Jt("--mat-tab-animation-duration",n.animationDuration),I("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",v],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",v],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",v],selectedIndex:[2,"selectedIndex","selectedIndex",ot],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ot],disablePagination:[2,"disablePagination","disablePagination",v],disableRipple:[2,"disableRipple","disableRipple",v],preserveContent:[2,"preserveContent","preserveContent",v],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[F([{provide:Ae,useExisting:a}])],ngContentSelectors:Tt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(tt(),o(0,"mat-tab-header",3,0),C("indexFocused",function(c){return n._focusChanged(c)})("selectFocusedIndex",function(c){return n.selectedIndex=c}),L(2,nn,8,17,"div",4,z),r(),T(4,an,1,0),o(5,"div",5,1),L(7,on,1,10,"mat-tab-body",6,z),r()),e&2&&(p("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Ot("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),S(n._tabs),d(2),k(n._isServer?4:-1),d(),I("_mat-animation-noopable",n._animationsDisabled()),d(2),S(n._tabs))},dependencies:[pn,Fe,ne,gt,ft,Ct],styles:[`.mdc-tab {
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
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
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
`],encapsulation:2})}return a})(),xt=class{index;tab};var hn=(a,s)=>s.data==null?null:s.data.src;function _n(a,s){if(a&1&&(o(0,"div",1),_(1,"img",4),r()),a&2){let t=s.$implicit,e=s.$index,n=b();p("lightbox",e)("gallery",n.galleryId()),d(),p("src",t.type===n.GalleryItemTypes.Image?t.data==null?null:t.data.src:(t.data==null?null:t.data.thumb)??"assets/image/default-video-thumbnail.png",Ht)("matTooltip",t.data==null||t.data.args==null?null:t.data.args.title)}}function gn(a,s){a&1&&(o(0,"p",2),m(1," No media available for this journey. "),r())}function fn(a,s){if(a&1&&(Gt(0),o(1,"div",5)(2,"p",6),m(3),r()(),zt()),a&2){let t=s.$implicit;d(3),A(t==null||t.args==null?null:t.args.title)}}var He=(()=>{class a{constructor(){this.GalleryItemTypes=J,this.galleryId=E("myLightbox"),this.images=E(new dt),this.videos=E([]),this.galleryImageDef=Zt.required($),this.gallery=l(fe),this.items=Kt([]),this.galleryConfig={loadingStrategy:"lazy"}}ngOnInit(){this.items.set(this.getGalleryItems()),this.gallery.ref(this.galleryId(),Dt({imageTemplate:this.galleryImageDef().templateRef},this.galleryConfig)).load(this.items())}getGalleryItems(){let t=new Array;return this.getImageItems()?.map(e=>t.push(e)),this.getVideoItems()?.map(e=>t.push(e)),t}getImageItems(){return this.images()?.images.map(t=>({type:J.Image,data:{src:t.url,thumb:t.url,args:{title:t.title,isThumbnail:t.isThumbnail}}}))}getVideoItems(){return this.videos()?.map(t=>this.isItYoutubeVideoId(t)?this.newYoutubeItem(t):this.newVideoItem(t))}isItYoutubeVideoId(t){return t.indexOf(".")==-1&&t.indexOf("/")==-1}newYoutubeItem(t){return{type:J.Youtube,data:{src:`https://www.youtube.com/embed/${t}`,thumb:`https://img.youtube.com/vi/${t}/0.jpg`,params:{loop:1,playlist:t,rel:0,controls:1}}}}newVideoItem(t){return{type:J.Iframe,data:{src:t,thumb:"assets/image/default-video-thumbnail.png"}}}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=g({type:a,selectors:[["app-media-gallery"]],viewQuery:function(e,n){e&1&&Qt(n.galleryImageDef,$,5),e&2&&Wt()},inputs:{galleryId:[1,"galleryId"],images:[1,"images"],videos:[1,"videos"],items:[1,"items"]},outputs:{items:"itemsChange"},features:[F([{provide:ve,useValue:{keyboardShortcuts:!0,startAnimationTime:1e3,exitAnimationTime:1e3,panelClass:"fullscreen"}}])],decls:5,vars:1,consts:[[1,"flex","flex-wrap","grow","mt-2","me-0","gap-2","justify-center"],[1,"mb-1","text-center","rounded-lg","overflow-hidden","shadow-lg","border","border-gray-300",3,"lightbox","gallery"],[1,"text-gray-500","italic"],[4,"galleryImageDef"],["height","200","width","200","alt","media","loading","lazy",1,"journey-image-thumbnail",3,"src","matTooltip"],[1,"h-full","w-full","text-end","flex","flex-col","justify-end"],[1,"text-center"]],template:function(e,n){e&1&&(o(0,"div",0),L(1,_n,2,4,"div",1,hn,!1,gn,2,0,"p",2),r(),f(4,fn,4,1,"ng-container",3)),e&2&&(d(),S(n.items()))},dependencies:[Ce,$,ye,_e,lt],styles:[".journey-image-thumbnail[_ngcontent-%COMP%]{object-fit:fill}"],changeDetection:0})}}return a})();function vn(a,s){if(a&1&&(o(0,"span",4),m(1),r()),a&2){let t=s.$implicit;d(),N(" ",t," ")}}var Ne=(()=>{class a{constructor(){this.journey=E.required()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=g({type:a,selectors:[["app-view-journey-basic-details"]],inputs:{journey:[1,"journey"]},decls:6,vars:3,consts:[[1,"mt-4"],[1,"min-h-[50vh]"],[3,"title","markdownText","journeyDate"],[1,"mt-4","flex","flex-wrap","gap-2"],[1,"badge","rounded-full","border","border-primary","text-primary","px-3","py-1","shadow-sm"]],template:function(e,n){if(e&1&&(o(0,"div",0)(1,"div",1),_(2,"app-display-markdown-component",2),r(),o(3,"div",3),L(4,vn,2,1,"span",4,z),r()()),e&2){let i;d(2),p("title",((i=n.journey().geoDetails)==null?null:i.title)??"")("markdownText",n.journey().description)("journeyDate",n.journey().journeyDate),d(2),S(n.journey().tags)}},dependencies:[ge,Ee],encapsulation:2,changeDetection:0})}}return a})();function yn(a,s){a&1&&(o(0,"mat-icon",5),m(1,"check_circle"),r())}function Cn(a,s){a&1&&(o(0,"mat-icon",6),m(1,"remove_circle"),r())}function xn(a,s){if(a&1){let t=Q();o(0,"button",9),C("click",function(){D(t);let n=b();return M(n.editJourney())}),o(1,"mat-icon"),m(2,"edit"),r()()}}var Ve=(()=>{class a{constructor(){this.router=l(te),this.journey=E.required()}editJourney(){this.router.navigate(["/journey",this.journey().id,"edit"]).then()}viewInTimeline(){this.router.navigate(["/timeline"],{queryParams:{id:this.journey().id,autoplay:"true"}}).then()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=g({type:a,selectors:[["app-view-journey-header"]],inputs:{journey:[1,"journey"]},decls:14,vars:6,consts:[[1,"flex","flex-col","md:flex-row","items-center","gap-4"],[1,"text-sm","text-primary","border-2","border-gradient-primary","badge","rounded-md","px-2","py-1"],[1,"journey-date"],[1,"flex","flex-row","items-center","gap-1"],[1,"text-lg","font-semibold","text-center"],["matTooltip","Published",1,"text-success!","!overflow-visible"],["matTooltip","Not Published",1,"text-warning!","!overflow-visible"],["mat-icon-button","","matTooltip","Edit Journey",3,"click",4,"appHasWriteAccess"],["mat-icon-button","","matTooltip","Relive in Timeline",3,"click"],["mat-icon-button","","matTooltip","Edit Journey",3,"click"]],template:function(e,n){e&1&&(o(0,"h4",0)(1,"span",1)(2,"span",2),m(3),qt(4,"date"),r()(),o(5,"span",3)(6,"span",4),m(7),r(),T(8,yn,2,0,"mat-icon",5)(9,Cn,2,0,"mat-icon",6),f(10,xn,3,0,"button",7),o(11,"button",8),C("click",function(){return n.viewInTimeline()}),o(12,"mat-icon"),m(13,"play_circle"),r()()()()),e&2&&(d(3),A(Yt(4,3,n.journey().journeyDate,"dd.MM.yyyy")),d(4),A(n.journey().name),d(),k(n.journey().isPublished?8:9))},dependencies:[lt,xe,ce,st,he,ue,Xt],encapsulation:2})}}return a})();var Tn=()=>[];function kn(a,s){a&1&&(o(0,"mat-icon"),m(1,"map"),r(),o(2,"span",13),m(3,"Geo"),r())}function In(a,s){if(a&1&&(o(0,"span",14)(1,"mat-icon",16),m(2),r(),m(3),r()),a&2){let t=b(2),e=b();x("aria-label","Category: "+(t.geoDetails==null?null:t.geoDetails.category)),d(2),N(" ",e.getCategoryIconName(t.geoDetails==null?null:t.geoDetails.category)," "),d(),N(" ",e.getCategoryLabel(t.geoDetails==null?null:t.geoDetails.category)," ")}}function wn(a,s){if(a&1&&(o(0,"h6",15),m(1),r()),a&2){let t=b(2);d(),N(" ",t.geoDetails==null?null:t.geoDetails.title," ")}}function Dn(a,s){if(a&1&&(o(0,"div",8),T(1,In,4,3,"span",14),T(2,wn,2,1,"h6",15),r()),a&2){let t=b();d(),k(t.geoDetails!=null&&t.geoDetails.category?1:-1),d(),k(t.geoDetails!=null&&t.geoDetails.title?2:-1)}}function Mn(a,s){a&1&&(o(0,"mat-icon"),m(1,"bookmark_heart"),r(),o(2,"span",13),m(3,"Memories"),r())}function En(a,s){a&1&&(o(0,"mat-icon"),m(1,"photo_library"),r(),o(2,"span",13),m(3,"Images"),r())}function Rn(a,s){a&1&&(o(0,"mat-icon"),m(1,"video_library"),r(),o(2,"span",13),m(3,"Videos"),r())}function Bn(a,s){if(a&1&&(o(0,"section",0)(1,"div",1)(2,"div",2),_(3,"app-view-journey-header",3),r()(),o(4,"div",4)(5,"mat-tab-group",5)(6,"mat-tab"),f(7,kn,4,0,"ng-template",6),o(8,"div",7),T(9,Dn,3,2,"div",8),o(10,"div",9),_(11,"app-world-map",10),r()()(),o(12,"mat-tab"),f(13,Mn,4,0,"ng-template",6),o(14,"div",7),_(15,"app-view-journey-basic-details",3),r()(),o(16,"mat-tab"),f(17,En,4,0,"ng-template",6),o(18,"div",7),_(19,"app-media-gallery",11),r()(),o(20,"mat-tab"),f(21,Rn,4,0,"ng-template",6),o(22,"div",7),_(23,"app-media-gallery",12),r()()()()()),a&2){let t=s,e=b();d(3),p("journey",t),d(6),k(t.geoDetails!=null&&t.geoDetails.category||t.geoDetails!=null&&t.geoDetails.title?9:-1),d(2),p("geoJsonData",(t.geoDetails==null?null:t.geoDetails.geoJson)||(t.geoDetails==null?null:t.geoDetails.location))("iconType",(t.geoDetails==null?null:t.geoDetails.category)??e.DEFAULT_CATEGORY),d(4),p("journey",t),d(4),p("images",e.getImages(t))("videos",$t(8,Tn)),d(4),p("videos",e.getVideos(t))}}var ii=(()=>{class a{constructor(){this.route=l(Ut),this.journeyService=l(we),this.journey=ee(this.journeyService.getJourneyById(this.route.snapshot.params.id),{initialValue:null}),this.DEFAULT_CATEGORY=Te,this.getCategoryIconName=Ie,this.getCategoryLabel=ke}getImages(t){return t.imagesDetails??new dt}getVideos(t){let e=new Array;return t.videosDetails?.videos?.map(n=>e.push(n.videoId)),e}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=g({type:a,selectors:[["app-view-journey"]],decls:1,vars:1,consts:[[1,"mt-6","mb-4"],[1,"grid","grid-cols-1","gap-4","items-center"],[1,"col-span-1"],[3,"journey"],[1,"mt-6"],["mat-stretch-tabs","true","mat-align-tabs","start",1,"shadow-md","rounded-lg"],["mat-tab-label",""],[1,"p-4"],[1,"flex","flex-row","items-center","justify-center","gap-2","mb-3"],[1,"relative","h-[50vh]","md:h-[80vh]","rounded-lg","overflow-hidden"],[3,"geoJsonData","iconType"],["galleryId","imageGallery",3,"images","videos"],["galleryId","videoGallery",3,"videos"],[1,"ml-1"],[1,"inline-flex","items-center","gap-1.5","shrink-0","px-3","py-1","rounded-full","bg-primary/10","dark:bg-primary/20","border","border-primary/25","dark:border-primary/30","text-primary","text-xs","font-semibold","tracking-wide","select-none"],[1,"text-base","font-bold","gradient-text","m-0","truncate"],[1,"journey-card__icon--sm","shrink-0","opacity-80"]],template:function(e,n){if(e&1&&T(0,Bn,24,9,"section",0),e&2){let i;k((i=n.journey())?0:-1,i)}},dependencies:[je,It,st,kt,Re,He,Ne,Me,Ve],encapsulation:2})}}return a})();export{ii as ViewJourneyComponent};
