"use strict";(self.webpackChunkjourney=self.webpackChunkjourney||[]).push([[76],{5507:(y,_,o)=>{o.d(_,{k:()=>d});var e=o(6911),r=o(4438);function g(a,l){if(1&a){const s=r.RV6();r.j41(0,"ngb-alert",2),r.bIt("closed",function(){r.eBV(s);const n=r.XpG();return r.Njj(n.successMessage="")}),r.nrm(1,"i",3),r.EFF(2),r.k0s()}if(2&a){const s=r.XpG();r.Y8G("dismissible",!1)("animation",!0),r.R7$(2),r.SpI(" ",s._successMessage," ")}}function u(a,l){if(1&a){const s=r.RV6();r.j41(0,"ngb-alert",4),r.bIt("closed",function(){r.eBV(s);const n=r.XpG();return r.Njj(n.errorMessage="")}),r.nrm(1,"i",5),r.EFF(2),r.k0s()}if(2&a){const s=r.XpG();r.Y8G("dismissible",!1)("animation",!0),r.R7$(2),r.SpI(" ",s._errorMessage," ")}}let d=(()=>{class a{constructor(){this._successMessage="",this._errorMessage=""}set successMessage(s){this._successMessage=s,this._errorMessage=""}set errorMessage(s){this._errorMessage=s,this._successMessage=""}static#e=this.\u0275fac=function(c){return new(c||a)};static#r=this.\u0275cmp=r.VBU({type:a,selectors:[["app-feedback-message"]],inputs:{successMessage:"successMessage",errorMessage:"errorMessage"},standalone:!0,features:[r.aNF],decls:2,vars:2,consts:[["type","success",3,"dismissible","animation"],["type","danger",3,"dismissible","animation"],["type","success",3,"closed","dismissible","animation"],[1,"bi","bi-check-circle-fill","pe-none","me-2"],["type","danger",3,"closed","dismissible","animation"],[1,"bi","bi-dash-circle","pe-none","me-2"]],template:function(c,n){1&c&&r.DNE(0,g,3,3,"ngb-alert",0)(1,u,3,3,"ngb-alert",1),2&c&&(r.vxM(0,n._successMessage?0:-1),r.R7$(),r.vxM(1,n._errorMessage?1:-1))},dependencies:[e.Cv]})}return a})()},4016:(y,_,o)=>{o.d(_,{y:()=>u});var e=o(177),r=o(4438);function g(d,a){if(1&d&&r.nrm(0,"h6",4),2&d){const l=r.XpG();r.Y8G("innerHTML",null==l.pageInfo?null:l.pageInfo.description,r.npT)}}let u=(()=>{class d{static#e=this.\u0275fac=function(s){return new(s||d)};static#r=this.\u0275cmp=r.VBU({type:d,selectors:[["app-page-header"]],inputs:{pageInfo:"pageInfo"},standalone:!0,features:[r.aNF],decls:4,vars:2,consts:[[1,"page-title-container","row","m-3","pb-3","border-bottom","border-primary-subtle","border-3"],[1,"col"],[1,"gradient-text","page-title",3,"innerHTML"],["class","text-primary opacity-75 page-description",3,"innerHTML",4,"ngIf"],[1,"text-primary","opacity-75","page-description",3,"innerHTML"]],template:function(s,c){1&s&&(r.j41(0,"div",0)(1,"div",1),r.nrm(2,"h3",2),r.DNE(3,g,1,1,"h6",3),r.k0s()()),2&s&&(r.R7$(2),r.Y8G("innerHTML",null==c.pageInfo?null:c.pageInfo.title,r.npT),r.R7$(),r.Y8G("ngIf",null==c.pageInfo?null:c.pageInfo.description))},dependencies:[e.bT],encapsulation:2})}return d})()},777:(y,_,o)=>{o.d(_,{BR:()=>l,Fk:()=>a,L_:()=>r,Vn:()=>s,bV:()=>d,fX:()=>e,oy:()=>u});const e="https://res.cloudinary.com/journeytogether/image/upload/v1712604194/journey/readonly/aeqhy3zwrwko7ba2rinr.jpg";class r{constructor(n="",f="",m="",v="",i="",p="",t="",h="",b=[],M=e,k="default",C=void 0,T=new g,D=!1,E=[]){this.id=n,this.name=f,this.title=m,this.description=v,this.city=i,this.country=p,this.journeyDate=t,this.category=h,this.tags=b,this.thumbnail=M,this.icon=k,this.location=C,this.extendedDetails=T,this.isPublished=D,this.visibilities=E}}class g{constructor(n=new u(void 0),f=new d,m=new l){this.geoDetails=n,this.imagesDetails=f,this.videosDetails=m}}class u{constructor(n){this.geoJson=n}}class d{constructor(n=[]){this.images=n}}class a{constructor(n,f,m="",v=!1,i=!1){this.url=n,this.assetId=f,this.title=m,this.isFavorite=v,this.isThumbnail=i}}class l{constructor(n=[]){this.videos=n}}class s{constructor(n){this.videoId=n}}},935:(y,_,o)=>{o.d(_,{k:()=>e});class e{constructor(g="",u="",d="",a="",l=""){this.text=g,this.city=u,this.country=d,this.category=a,this.year=l}}},1840:(y,_,o)=>{o.d(_,{Y:()=>d});var e=o(2525),r=o(4438),g=o(1626),u=o(4486);let d=(()=>{class a{constructor(s,c){this.httpClient=s,this.authService=c}getAvailableCategories(s){let c=this.authService.getCurrentUserContext();return this.httpClient.get(e.c.journeyApi+"/categories",{params:{text:s},headers:{"Content-Type":"application/vnd.journey.api.basic.v1+json",Authorization:`Bearer ${c.accessToken}`}})}static#e=this.\u0275fac=function(c){return new(c||a)(r.KVO(g.Qq),r.KVO(u.u))};static#r=this.\u0275prov=r.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},9183:(y,_,o)=>{o.d(_,{LG:()=>c});var e=o(4438),r=o(177);const g=["determinateSpinner"];function u(m,v){if(1&m&&(e.qSk(),e.j41(0,"svg",11),e.nrm(1,"circle",12),e.k0s()),2&m){const i=e.XpG();e.BMQ("viewBox",i._viewBox()),e.R7$(),e.xc7("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),e.BMQ("r",i._circleRadius())}}const d=new e.nKC("mat-progress-spinner-default-options",{providedIn:"root",factory:function a(){return{diameter:l}}}),l=100;let c=(()=>{class m{get color(){return this._color||this._defaultColor}set color(i){this._color=i}constructor(i,p,t){this._elementRef=i,this._defaultColor="primary",this._value=0,this._diameter=l,this._noopAnimations="NoopAnimations"===p&&!!t&&!t._forceAnimations,this.mode="mat-spinner"===i.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,i||0))}get diameter(){return this._diameter}set diameter(i){this._diameter=i||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(i){this._strokeWidth=i||0}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const i=2*this._circleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static#e=this.\u0275fac=function(p){return new(p||m)(e.rXU(e.aKT),e.rXU(e.bc$,8),e.rXU(d))};static#r=this.\u0275cmp=e.VBU({type:m,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(p,t){if(1&p&&e.GBs(g,5),2&p){let h;e.mGM(h=e.lsd())&&(t._determinateCircle=h.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(p,t){2&p&&(e.BMQ("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),e.HbH("mat-"+t.color),e.xc7("width",t.diameter,"px")("height",t.diameter,"px")("--mdc-circular-progress-size",t.diameter+"px")("--mdc-circular-progress-active-indicator-width",t.diameter+"px"),e.AVh("_mat-animation-noopable",t._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===t.mode))},inputs:{color:"color",mode:"mode",value:[e.Mj6.HasDecoratorInputTransform,"value","value",e.Udg],diameter:[e.Mj6.HasDecoratorInputTransform,"diameter","diameter",e.Udg],strokeWidth:[e.Mj6.HasDecoratorInputTransform,"strokeWidth","strokeWidth",e.Udg]},exportAs:["matProgressSpinner"],standalone:!0,features:[e.GFd,e.aNF],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(p,t){if(1&p&&(e.DNE(0,u,2,8,"ng-template",null,0,e.C5r),e.j41(2,"div",2,1),e.qSk(),e.j41(4,"svg",3),e.nrm(5,"circle",4),e.k0s()(),e.joV(),e.j41(6,"div",5)(7,"div",6)(8,"div",7),e.eu8(9,8),e.k0s(),e.j41(10,"div",9),e.eu8(11,8),e.k0s(),e.j41(12,"div",10),e.eu8(13,8),e.k0s()()()),2&p){const h=e.sdS(1);e.R7$(4),e.BMQ("viewBox",t._viewBox()),e.R7$(),e.xc7("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeDashOffset(),"px")("stroke-width",t._circleStrokeWidth(),"%"),e.BMQ("r",t._circleRadius()),e.R7$(4),e.Y8G("ngTemplateOutlet",h),e.R7$(2),e.Y8G("ngTemplateOutlet",h),e.R7$(2),e.Y8G("ngTemplateOutlet",h)}},dependencies:[r.T3],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0})}return m})()}}]);