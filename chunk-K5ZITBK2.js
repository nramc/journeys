import{b as v}from"./chunk-66T3XKOH.js";import{a as g}from"./chunk-V3XPYBTQ.js";import"./chunk-TTLIPRBJ.js";import"./chunk-E5QCM6A7.js";import{i as h}from"./chunk-42K4P2AR.js";import"./chunk-T3OIREQZ.js";import{g as y}from"./chunk-WTO4EC35.js";import"./chunk-P4C6YQ3V.js";import{c as f}from"./chunk-GX5PCDDC.js";import"./chunk-U6VOSXN3.js";import"./chunk-G6LWCROE.js";import"./chunk-UVG5L6RS.js";import"./chunk-OO6UETQH.js";import"./chunk-OBJFDV2T.js";import"./chunk-INCHVP6V.js";import"./chunk-TJFKVA4M.js";import{$c as p,Cc as o,Db as c,Dc as l,Vb as d,dc as t,ec as n,fc as m,na as u,pb as r}from"./chunk-BGW2GSJU.js";var B=(()=>{class a{constructor(){this.DASHBOARD_PAGE_INFO=y,this.journeyService=u(h),this.featureCollection=f(this.journeyService.getAllJourneysAsGeoJson()),this.totalJourneys=p(()=>this.featureCollection()?.features.length),this.totalCountry=p(()=>this.uniqueJourneysByProperty(this.featureCollection(),"country")),this.totalCity=p(()=>this.uniqueJourneysByProperty(this.featureCollection(),"city"))}uniqueJourneysByProperty(s,i){return s?.features.filter(e=>e.properties?.[i]).filter((e,C,S)=>S.findIndex(x=>JSON.stringify(x.properties?.[i])===JSON.stringify(e.properties?.[i]))===C).length}static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275cmp=c({type:a,selectors:[["app-dashboard"]],decls:21,vars:6,consts:[[3,"pageInfo"],[1,"container"],[1,"flex","mb-2","gap-2","flex-wrap","justify-center","content-center"],[1,"text-center","border-primary","border-2","rounded-sm","rounded-2","p-2",2,"min-width","75px"],[1,"fs-6","gradient-text","text-primary","fw-bold"],[1,"small","gradient-text","text-primary","fw-bold"],[1,"relative",2,"height","70vh"],[3,"geoJsonData","enablePopup"]],template:function(i,e){i&1&&(t(0,"header"),m(1,"app-page-header",0),n(),t(2,"main",1)(3,"section",2)(4,"div",3)(5,"span",4),o(6,"Journeys"),n(),t(7,"div",5),o(8),n()(),t(9,"div",3)(10,"span",4),o(11,"Country"),n(),t(12,"div",5),o(13),n()(),t(14,"div",3)(15,"span",4),o(16,"City"),n(),t(17,"div",5),o(18),n()()(),t(19,"section",6),m(20,"app-world-map",7),n()()),i&2&&(r(),d("pageInfo",e.DASHBOARD_PAGE_INFO),r(7),l(e.totalJourneys()),r(5),l(e.totalCountry()),r(5),l(e.totalCity()),r(2),d("geoJsonData",e.featureCollection())("enablePopup",!0))},dependencies:[g,v],encapsulation:2,changeDetection:0})}}return a})();export{B as DashboardComponent};
