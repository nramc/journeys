import{b as I}from"./chunk-V7ALEVGW.js";import{a as C}from"./chunk-Y43Q24IB.js";import{a as b}from"./chunk-OG2A5DXH.js";import{a as D}from"./chunk-EFSDVRKM.js";import{h as x}from"./chunk-SNVCUL6N.js";import"./chunk-FUSGHHWI.js";import"./chunk-ZLRNIGX2.js";import"./chunk-4HWMNETW.js";import"./chunk-F5TIGKWS.js";import"./chunk-KUIIQJ2X.js";import"./chunk-IUL4I26V.js";import"./chunk-OU45453G.js";import{k as _}from"./chunk-MIMT4L35.js";import{Bc as S,Jb as l,Ob as p,Tb as h,Wb as y,Xb as g,Yb as r,Zb as a,_b as d,jc as v,qb as o,rb as f,ua as u,uc as c,vc as m}from"./chunk-Y7SRRAOL.js";var w=(t,s)=>s[0];function E(t,s){t&1&&(r(0,"div",1),d(1,"mat-spinner"),a())}function O(t,s){if(t&1&&(r(0,"div",9)(1,"span",10),c(2),a(),r(3,"div",11),c(4),a()()),t&2){let e=s.$implicit;o(2),m(e[1]),o(2),m(e[0])}}function F(t,s){if(t&1&&(r(0,"div",8),y(1,O,5,2,"div",9,w),a()),t&2){let e=v();o(),g(e.stats.entries())}}var H=(()=>{class t{constructor(e){this.journeyService=e,this.DASHBOARD_PAGE_INFO=x,this.stats=new Map,this.isLoadingResults=!0}ngOnInit(){this.journeyService.getAllJourneysAsGeoJson().subscribe(e=>this.onFetchSuccessCallback(e))}onFetchSuccessCallback(e){this.featureCollection=e,this.collectStats(e),this.isLoadingResults=!1}collectStats(e){this.stats.set("Journeys",e.features.length),this.stats.set("Places",this.uniqueJourneysByProperty(e,"location")),this.stats.set("Country",this.uniqueJourneysByProperty(e,"country")),this.stats.set("City",this.uniqueJourneysByProperty(e,"city"))}uniqueJourneysByProperty(e,n){return e.features.filter(i=>i.properties?.[n]).filter((i,P,A)=>A.findIndex(J=>JSON.stringify(J.properties?.[n])===JSON.stringify(i.properties?.[n]))===P).length}static{this.\u0275fac=function(n){return new(n||t)(f(C))}}static{this.\u0275cmp=u({type:t,selectors:[["app-dashboard"]],standalone:!0,features:[S],decls:8,vars:5,consts:[[3,"pageInfo"],[1,"loading-shade"],[1,"container"],[1,"row","mb-2"],["class","col-12 d-flex gap-2 flex-wrap justify-content-center align-content-center",4,"ngIf"],[1,"row"],[1,"col",2,"position","relative","height","70vh"],[3,"geoJsonData","enablePopup"],[1,"col-12","d-flex","gap-2","flex-wrap","justify-content-center","align-content-center"],[1,"text-center","border","border-primary","border-2","rounded","rounded-2","p-2",2,"min-width","75px"],[1,"fs-3","gradient-text","text-primary","fw-bold"],[1,"small","gradient-text"]],template:function(n,i){n&1&&(d(0,"app-page-header",0),l(1,E,2,0,"div",1),r(2,"section",2)(3,"div",3),l(4,F,3,0,"div",4),a(),r(5,"div",5)(6,"div",6),d(7,"app-world-map",7),a()()()),n&2&&(p("pageInfo",i.DASHBOARD_PAGE_INFO),o(),h(i.isLoadingResults?1:-1),o(3),p("ngIf",i.stats),o(3),p("geoJsonData",i.featureCollection)("enablePopup",!0))},dependencies:[b,I,_,D]})}}return t})();export{H as DashboardComponent};
