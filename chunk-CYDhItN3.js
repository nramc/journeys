import {t as t$1}from'./chunk-D_FPORGj.js';import {x as xn,F as Fe,N as Ne,g as gn}from'./chunk-DCkWL_m9.js';import {u}from'./chunk-DmmKNd_S.js';import {dt as r$1,D,F,R as RD,M as Mi,O as Oh,l as ll,n as nw,t as tE,k as kh,r as rw,A as Ar,d as d$1,G,ag as ue,ar as v1,m as mt,c9 as kt,y as yt,f as wt,S as St,ax as mt$1,Q as Qw,j as iw,B as gl,s as sw,aW as Mr,bu as se,aU as C1,bT as FE,du as Ct,aE as qe,by as M1,u as ul,ak as Ph,h as dl,bE as Xh,a$ as Rh,bD as Fw,aS as eg,x as dw,z as qh,v as vw,i as ag,aG as S$1,C as cd,E as ld}from'./main-34PH6VYJ.js';import {l}from'./chunk-f6nO2tqC.js';import {R,k,L,N,z,B,S}from'./chunk-CNHnKL5J.js';var fe=(()=>{class t{constructor(){this.httpClient=D(Ar),this.authService=D(d$1);}getStatistics(){let e=this.authService.getCurrentUserContext();return this.httpClient.get(l.journeyApi+"/journeys/statistics",{headers:{Authorization:`Bearer ${e.accessToken}`}})}static{this.\u0275fac=function(n){return new(n||t)};}static{this.\u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();function ye(t,c){t&1&&Ph(0,"div",2);}var ve=new S$1("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var _e=(()=>{class t{_elementRef=D(Mr);_ngZone=D(se);_changeDetectorRef=D(C1);_renderer=D(FE);_cleanupTransitionEnd;constructor(){let e=Ct(),n=D(ve,{optional:true});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode);}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=be(e||0),this._changeDetectorRef.markForCheck();}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=be(e||0),this._changeDetectorRef.markForCheck();}_bufferValue=0;animationEnd=new qe;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck();}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler);});}ngOnDestroy(){this._cleanupTransitionEnd?.();}_getPrimaryBarTransform(){return `scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return `${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}));};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=RD({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,r){n&2&&(Rh("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Fw("mat-"+r.color),eg("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()));},inputs:{color:"color",value:[2,"value","value",M1],bufferValue:[2,"bufferValue","bufferValue",M1],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,r){n&1&&(ul(0,"div",0),Ph(1,"div",1),nw(2,ye,1,0,"div",2),dl(),ul(3,"div",3),Ph(4,"span",4),dl(),ul(5,"div",5),Ph(6,"span",4),dl()),n&2&&(tE(),Xh("flex-basis",r._getBufferBarFlexBasis()),tE(),rw(r.mode==="buffer"?2:-1),tE(),Xh("transform",r._getPrimaryBarTransform()));},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return t})();function be(t,c=0,e=100){return Math.max(c,Math.min(e,t))}var xe=(t,c)=>c.name;function Ce(t,c){if(t&1){let e=dw();Mi(0,"mat-card",5)(1,"mat-card-header"),Oh(2,"div",6),Mi(3,"mat-card-title")(4,"h5",7),Qw(5),ll()()(),Mi(6,"mat-card-content")(7,"div",8)(8,"h2",9),Qw(9),ll(),Mi(10,"span",10),Qw(11),ll()(),Oh(12,"mat-progress-bar",11),ll(),Mi(13,"mat-card-actions",12)(14,"button",13),qh("click",function(r){let b=cd(e).$implicit,P=vw();return ld(P.gotoTimeline(P.type(),b.name,r))}),Mi(15,"mat-icon",14),Qw(16,"history"),ll()(),Mi(17,"button",15),qh("click",function(){let r=cd(e).$implicit,b=vw();return ld(b.gotoGallery(b.type(),r.name))}),Mi(18,"mat-icon",14),Qw(19,"photo_library"),ll()()()();}if(t&2){let e=c.$implicit,n=vw();tE(5),ag(e.name),tE(4),ag(e.count),tE(2),gl("",n.getPercentage(e.count,n.totalCount()),"%"),tE(),kh("value",n.getPercentage(e.count,n.totalCount()));}}var he=(()=>{class t{constructor(){this.router=D(ue),this.expand=v1(false),this.data=v1.required(),this.header=v1.required(),this.type=v1.required(),this.totalCount=mt(()=>this.data().map(e=>e.count).reduce((e,n)=>e+n,0));}comparatorFn(e,n){return e.name.toLowerCase().localeCompare(n.name.toLowerCase())}gotoGallery(e,n){this.router.navigate(["/gallery"],{state:this.getSearchCriteria(e,n)}).then(console.log);}gotoTimeline(e,n,r){return r.stopPropagation(),this.router.navigate(["/timeline"],{queryParams:{[e]:n}}).then(console.log),false}getSearchCriteria(e,n){let r=new t$1;switch(e){case "category":r.category=n;break;case "city":r.city=n;break;case "country":r.country=n;break;case "year":r.year=n;break}return r}getPercentage(e,n){return Math.round(e/n*100)}static{this.\u0275fac=function(n){return new(n||t)};}static{this.\u0275cmp=RD({type:t,selectors:[["app-statistics-panel"]],inputs:{expand:[1,"expand"],data:[1,"data"],header:[1,"header"],type:[1,"type"]},decls:9,vars:2,consts:[[1,"mt-3","p-2","rounded-lg","flex","flex-col"],[3,"expanded"],[1,"bg-gradient-to-r","from-blue-700","to-blue-400","rounded-lg","border-none"],[1,"text-decoration-none","text-white","px-3","py-2","w-full","text-lg","flex","justify-between","items-center"],[1,"gap-4","p-2","show","grid","grid-cols-3","max-sm:grid-cols-1","max-md:grid-cols-2"],[1,"shadow-md","hover:shadow-lg","transition-shadow","duration-300","border","border-primary","rounded-lg"],["mat-card-avatar","",1,"bg-gradient-to-r","from-blue-700","to-white","rounded-full"],[1,"text-lg","font-bold"],[1,"flex","justify-between","items-center"],[1,"text-2xl","font-bold","text-primary"],[1,"text-sm","font-medium","text-primary"],["mode","determinate",1,"mt-2","text-primary",3,"value"],[1,"inline-flex","justify-end"],["mat-icon-button","","aria-label","Timeline","matTooltip","Timeline",3,"click"],[1,"text-primary"],["mat-icon-button","","aria-label","Gallery","matTooltip","Gallery",3,"click"]],template:function(n,r){n&1&&(Mi(0,"section",0)(1,"mat-expansion-panel",1)(2,"mat-expansion-panel-header")(3,"mat-panel-title",2)(4,"div",3),Qw(5),ll()()(),Mi(6,"div",4),iw(7,Ce,20,4,"mat-card",5,xe),ll()()()),n&2&&(tE(),kh("expanded",r.expand()),tE(4),gl(" ",r.header()," "),tE(2),sw(r.data().sort(r.comparatorFn)));},dependencies:[_e,R,k,L,N,z,B,S,kt,yt,wt,St,xn,Fe,Ne,gn,mt$1],encapsulation:2});}}return t})();function Se(t,c){if(t&1&&Oh(0,"app-statistics-panel",1)(1,"app-statistics-panel",2)(2,"app-statistics-panel",3)(3,"app-statistics-panel",4),t&2){let e=vw();kh("data",e.statistics().years)("expand",true),tE(),kh("data",e.statistics().countries),tE(),kh("data",e.statistics().cities),tE(),kh("data",e.statistics().categories);}}var pn=(()=>{class t{constructor(){this.STATISTICS_PAGE_INFO=r$1,this.statisticsService=D(fe),this.statistics=F(this.statisticsService.getStatistics());}static{this.\u0275fac=function(n){return new(n||t)};}static{this.\u0275cmp=RD({type:t,selectors:[["app-statistics"]],decls:4,vars:2,consts:[[3,"pageInfo"],["type","year","header","Years",3,"data","expand"],["type","country","header","Countries",3,"data"],["type","city","header","Cities",3,"data"],["type","category","header","Categories",3,"data"]],template:function(n,r){n&1&&(Mi(0,"header"),Oh(1,"app-page-header",0),ll(),Mi(2,"main"),nw(3,Se,4,5),ll()),n&2&&(tE(),kh("pageInfo",r.STATISTICS_PAGE_INFO),tE(2),rw(r.statistics()?3:-1));},dependencies:[u,he],encapsulation:2});}}return t})();export{pn as StatisticsComponent};