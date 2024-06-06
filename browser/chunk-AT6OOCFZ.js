import{a as it}from"./chunk-A6QHBXVY.js";import{e as nt}from"./chunk-Y4KNYWAU.js";import{b as dt}from"./chunk-RSDR5RWW.js";import{k as at,o as ot}from"./chunk-UVNJOFOG.js";import{p as et}from"./chunk-FUA4N2ML.js";import{a as tt}from"./chunk-4IQHS33H.js";import{Aa as R,Cb as G,Eb as C,Ia as S,Ib as w,Ja as T,Jb as u,Ka as y,Kb as p,La as L,Mb as Z,Nb as U,Pb as h,Pc as X,Qb as $,Ra as B,Rb as q,Sa as N,Sb as J,Tb as d,Tc as b,Ub as m,Uc as _,Vb as f,Ya as V,Zb as M,cc as x,ec as s,fc as K,gc as Q,mc as k,nc as W,oa as O,oc as A,p as j,pb as r,qb as l,r as E,ra as I,rb as H,tc as F,ua as D,xb as Y,ya as P}from"./chunk-K63RDP6Q.js";var ut=".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";var pt=["mat-icon-button",""],ft=["*"];var gt=new I("MAT_BUTTON_CONFIG");var vt=[{attribute:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{attribute:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{attribute:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{attribute:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{attribute:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{attribute:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{attribute:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],ht=(()=>{let o=class o{get ripple(){return this._rippleLoader?.getRipple(this._elementRef.nativeElement)}set ripple(t){this._rippleLoader?.attachRipple(this._elementRef.nativeElement,t)}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}constructor(t,a,e,c){this._elementRef=t,this._platform=a,this._ngZone=e,this._animationMode=c,this._focusMonitor=D(et),this._rippleLoader=D(ot),this._isFab=!1,this._disableRipple=!1,this._disabled=!1;let g=D(gt,{optional:!0}),v=t.nativeElement,z=v.classList;this.disabledInteractive=g?.disabledInteractive??!1,this._rippleLoader?.configureRipple(v,{className:"mat-mdc-button-ripple"});for(let{attribute:ct,mdcClasses:mt}of vt)v.hasAttribute(ct)&&z.add(...mt)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",a){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,a):this._elementRef.nativeElement.focus(a)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}};o.\u0275fac=function(a){H()},o.\u0275dir=R({type:o,inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",b],disabled:[2,"disabled","disabled",b],ariaDisabled:[2,"aria-disabled","ariaDisabled",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},features:[C]});let i=o;return i})();var rt=(()=>{let o=class o extends ht{constructor(t,a,e,c){super(t,a,e,c),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}};o.\u0275fac=function(a){return new(a||o)(l(B),l(tt),l(Y),l(V,8))},o.\u0275cmp=P({type:o,selectors:[["button","mat-icon-button",""]],hostVars:14,hostBindings:function(a,e){a&2&&(u("disabled",e._getDisabledAttribute())("aria-disabled",e._getAriaDisabled()),U(e.color?"mat-"+e.color:""),Z("mat-mdc-button-disabled",e.disabled)("mat-mdc-button-disabled-interactive",e.disabledInteractive)("_mat-animation-noopable",e._animationMode==="NoopAnimations")("mat-unthemed",!e.color)("mat-mdc-button-base",!0))},exportAs:["matButton"],standalone:!0,features:[G,F],attrs:pt,ngContentSelectors:ft,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(a,e){a&1&&(K(),f(0,"span",0),Q(1),f(2,"span",1)(3,"span",2))},styles:['.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',ut],encapsulation:2,changeDetection:0});let i=o;return i})();function xt(i,o){if(i&1&&(d(0,"mat-option",16),k(1),m()),i&2){let n=o.$implicit;p("value",n),r(),A(" ",n," ")}}function _t(i,o){if(i&1){let n=M();d(0,"mat-form-field",13)(1,"mat-select",15),x("selectionChange",function(a){S(n);let e=s(2);return T(e._changePageSize(a.value))}),q(2,xt,2,2,"mat-option",16,$),m()()}if(i&2){let n=s(2);p("appearance",n._formFieldAppearance)("color",n.color),r(),p("value",n.pageSize)("disabled",n.disabled)("aria-labelledby",n._pageSizeLabelId)("panelClass",n.selectConfig.panelClass||"")("disableOptionCentering",n.selectConfig.disableOptionCentering),r(),J(n._displayedPageSizeOptions)}}function yt(i,o){if(i&1&&(d(0,"div",14),k(1),m()),i&2){let n=s(2);r(),W(n.pageSize)}}function wt(i,o){if(i&1&&(d(0,"div",2)(1,"div",12),k(2),m(),w(3,_t,4,7,"mat-form-field",13)(4,yt,2,1,"div",14),m()),i&2){let n=s();r(),u("id",n._pageSizeLabelId),r(),A(" ",n._intl.itemsPerPageLabel," "),r(),h(n._displayedPageSizeOptions.length>1?3:-1),r(),h(n._displayedPageSizeOptions.length<=1?4:-1)}}function kt(i,o){if(i&1){let n=M();d(0,"button",17),x("click",function(){S(n);let a=s();return T(a.firstPage())}),y(),d(1,"svg",7),f(2,"path",18),m()()}if(i&2){let n=s();p("matTooltip",n._intl.firstPageLabel)("matTooltipDisabled",n._previousButtonsDisabled())("matTooltipPosition","above")("disabled",n._previousButtonsDisabled()),u("aria-label",n._intl.firstPageLabel)}}function zt(i,o){if(i&1){let n=M();d(0,"button",19),x("click",function(){S(n);let a=s();return T(a.lastPage())}),y(),d(1,"svg",7),f(2,"path",20),m()()}if(i&2){let n=s();p("matTooltip",n._intl.lastPageLabel)("matTooltipDisabled",n._nextButtonsDisabled())("matTooltipPosition","above")("disabled",n._nextButtonsDisabled()),u("aria-label",n._intl.lastPageLabel)}}var It=(()=>{let o=class o{constructor(){this.changes=new j,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(t,a,e)=>{if(e==0||a==0)return`0 of ${e}`;e=Math.max(e,0);let c=t*a,g=c<e?Math.min(c+a,e):c+a;return`${c+1} \u2013 ${g} of ${e}`}}};o.\u0275fac=function(a){return new(a||o)},o.\u0275prov=O({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();var Dt=50;var Pt=new I("MAT_PAGINATOR_DEFAULT_OPTIONS"),St=0,le=(()=>{let o=class o{get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>_(a,0)),this._updateDisplayedPageSizeOptions()}constructor(t,a,e){if(this._intl=t,this._changeDetectorRef=a,this._pageSizeLabelId=`mat-paginator-page-size-label-${St++}`,this._isInitialized=!1,this._initializedStream=new E(1),this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this.hidePageSize=!1,this.showFirstLastButtons=!1,this.selectConfig={},this.disabled=!1,this.page=new N,this.initialized=this._initializedStream,this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),e){let{pageSize:c,pageSizeOptions:g,hidePageSize:v,showFirstLastButtons:z}=e;c!=null&&(this._pageSize=c),g!=null&&(this._pageSizeOptions=g),v!=null&&(this.hidePageSize=v),z!=null&&(this.showFirstLastButtons=z)}this._formFieldAppearance=e?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let t=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(t)}previousPage(){if(!this.hasPreviousPage())return;let t=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(t)}firstPage(){if(!this.hasPreviousPage())return;let t=this.pageIndex;this.pageIndex=0,this._emitPageEvent(t)}lastPage(){if(!this.hasNextPage())return;let t=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(t)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,e=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(e)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Dt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}};o.\u0275fac=function(a){return new(a||o)(l(It),l(X),l(Pt,8))},o.\u0275cmp=P({type:o,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",_],length:[2,"length","length",_],pageSize:[2,"pageSize","pageSize",_],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",b],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",b],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",b]},outputs:{page:"page"},exportAs:["matPaginator"],standalone:!0,features:[C,F],decls:14,vars:14,consts:[[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(a,e){a&1&&(d(0,"div",0)(1,"div",1),w(2,wt,5,4,"div",2),d(3,"div",3)(4,"div",4),k(5),m(),w(6,kt,3,5,"button",5),d(7,"button",6),x("click",function(){return e.previousPage()}),y(),d(8,"svg",7),f(9,"path",8),m()(),L(),d(10,"button",9),x("click",function(){return e.nextPage()}),y(),d(11,"svg",7),f(12,"path",10),m()(),w(13,zt,3,5,"button",11),m()()()),a&2&&(r(2),h(e.hidePageSize?-1:2),r(3),A(" ",e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length)," "),r(),h(e.showFirstLastButtons?6:-1),r(),p("matTooltip",e._intl.previousPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("matTooltipPosition","above")("disabled",e._previousButtonsDisabled()),u("aria-label",e._intl.previousPageLabel),r(3),p("matTooltip",e._intl.nextPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("matTooltipPosition","above")("disabled",e._nextButtonsDisabled()),u("aria-label",e._intl.nextPageLabel),r(3),h(e.showFirstLastButtons?13:-1))},dependencies:[nt,it,at,rt,dt],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let i=o;return i})();export{le as a};
