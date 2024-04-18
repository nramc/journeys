"use strict";(self.webpackChunkjourney=self.webpackChunkjourney||[]).push([[142],{4016:(g,d,o)=>{o.d(d,{y:()=>a});var s=o(4438);let a=(()=>{class c{static#e=this.\u0275fac=function(u){return new(u||c)};static#t=this.\u0275cmp=s.VBU({type:c,selectors:[["app-page-header"]],inputs:{pageInfo:"pageInfo"},standalone:!0,features:[s.aNF],decls:4,vars:2,consts:[[1,"page-title-container","row","m-3","pb-3","border-bottom","border-primary-subtle","border-3"],[1,"col"],[1,"gradient-text","page-title",3,"innerHTML"],[1,"text-primary","opacity-75","page-description",3,"innerHTML"]],template:function(u,y){1&u&&(s.j41(0,"div",0)(1,"div",1),s.nrm(2,"h3",2)(3,"h6",3),s.k0s()()),2&u&&(s.R7$(2),s.Y8G("innerHTML",null==y.pageInfo?null:y.pageInfo.title,s.npT),s.R7$(),s.Y8G("innerHTML",null==y.pageInfo?null:y.pageInfo.description,s.npT))},encapsulation:2})}return c})()},7142:(g,d,o)=>{o.r(d),o.d(d,{DashboardComponent:()=>p});var s=o(1030),a=o(1057),c=o(4016),C=o(177),e=o(4438),u=o(7404);const y=(i,_)=>_[0];function n(i,_){if(1&i&&(e.j41(0,"div",8)(1,"span",9),e.EFF(2),e.k0s(),e.j41(3,"div",10),e.EFF(4),e.k0s()()),2&i){const t=_.$implicit;e.R7$(2),e.JRh(t[1]),e.R7$(2),e.JRh(t[0])}}function r(i,_){if(1&i&&(e.j41(0,"div",7),e.Z7z(1,n,5,2,"div",8,y),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.Dyx(t.stats.entries())}}let p=(()=>{class i{constructor(t){this.journeyService=t,this.DASHBOARD_PAGE_INFO=s.aY,this.stats=new Map}ngOnInit(){this.journeyService.getAllJourneysAsGeoJson().subscribe(t=>this.onFetchSuccessCallback(t))}onFetchSuccessCallback(t){this.featureCollection=t,this.collectStats(t)}collectStats(t){this.stats.set("Journeys",t.features.length),this.stats.set("Places",this.uniqueJourneysByProperty(t,"location")),this.stats.set("Country",this.uniqueJourneysByProperty(t,"country")),this.stats.set("City",this.uniqueJourneysByProperty(t,"city"))}uniqueJourneysByProperty(t,l){return t.features.filter(h=>h.properties?.[l]).filter((h,v,m)=>m.findIndex(f=>JSON.stringify(f.properties?.[l])===JSON.stringify(h.properties?.[l]))===v).length}static#e=this.\u0275fac=function(l){return new(l||i)(e.rXU(u.K))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-dashboard"]],standalone:!0,features:[e.aNF],decls:7,vars:3,consts:[[3,"pageInfo"],[1,"container"],[1,"row","mb-2"],["class","col-12 d-flex gap-2 flex-wrap justify-content-center align-content-center",4,"ngIf"],[1,"row"],[1,"col",2,"position","relative","height","70vh"],["enablePopup","true",3,"geoJsonData"],[1,"col-12","d-flex","gap-2","flex-wrap","justify-content-center","align-content-center"],[1,"text-center","border","border-primary","border-2","rounded","rounded-2","p-2",2,"min-width","75px"],[1,"fs-3","gradient-text","text-primary","fw-bold"],[1,"small","gradient-text"]],template:function(l,h){1&l&&(e.nrm(0,"app-page-header",0),e.j41(1,"section",1)(2,"div",2),e.DNE(3,r,3,0,"div",3),e.k0s(),e.j41(4,"div",4)(5,"div",5),e.nrm(6,"app-world-map",6),e.k0s()()()),2&l&&(e.Y8G("pageInfo",h.DASHBOARD_PAGE_INFO),e.R7$(3),e.Y8G("ngIf",h.stats),e.R7$(3),e.Y8G("geoJsonData",h.featureCollection))},dependencies:[c.y,a.s,C.bT]})}return i})()},7404:(g,d,o)=>{o.d(d,{K:()=>e});var s=o(1626),a=o(5312),c=o(4438),C=o(4486);let e=(()=>{class u{constructor(n,r){this.httpClient=n,this.authService=r}createJourney(n){let r=this.authService.getCurrentUserContext();return this.httpClient.post(a.c.journeyApi+"/journey",n,{headers:{Authorization:`Bearer ${r.accessToken}`}})}findJourneyByQuery(n,r,p,i,_){let t=new s.Nl;return t=t.set("q",n),t=t.set("sort",r),t=t.set("order",p.toUpperCase()),t=t.set("pageIndex",i),t=t.set("pageSize",_),console.log(t),this.getAllJourneys(t)}getAllJourneys(n){let r=this.authService.getCurrentUserContext();return this.httpClient.get(a.c.journeyApi+"/journeys",{params:n,headers:{Authorization:`Bearer ${r.accessToken}`}})}getAllJourneysAsGeoJson(){let n=this.authService.getCurrentUserContext();return this.httpClient.get(a.c.journeyApi+"/public/journeys",{headers:{Accept:"application/geo+json",Authorization:`Bearer ${n.accessToken}`}})}getJourneyById(n){let r=this.authService.getCurrentUserContext();return this.httpClient.get(a.c.journeyApi+"/journey/"+n,{headers:{Authorization:`Bearer ${r.accessToken}`}})}saveJourneyBasicDetails(n){let r=this.authService.getCurrentUserContext();return this.httpClient.put(a.c.journeyApi+"/journey/"+n.id,n,{headers:{"Content-Type":"application/vnd.journey.api.basic.v1+json",Authorization:`Bearer ${r.accessToken}`}})}saveJourneyGeoDetails(n,r){let p=this.authService.getCurrentUserContext();return this.httpClient.put(a.c.journeyApi+"/journey/"+n.id,r,{headers:{"Content-Type":"application/vnd.journey.api.geo.v1+json",Authorization:`Bearer ${p.accessToken}`}})}saveJourneyImagesDetails(n,r){let p=this.authService.getCurrentUserContext();return this.httpClient.put(a.c.journeyApi+"/journey/"+n.id,r,{headers:{"Content-Type":"application/vnd.journey.api.images.v1+json",Authorization:`Bearer ${p.accessToken}`}})}saveJourneyVideosDetails(n,r){let p=this.authService.getCurrentUserContext();return this.httpClient.put(a.c.journeyApi+"/journey/"+n.id,r,{headers:{"Content-Type":"application/vnd.journey.api.videos.v1+json",Authorization:`Bearer ${p.accessToken}`}})}publishJourney(n){let r=this.authService.getCurrentUserContext();return this.httpClient.put(a.c.journeyApi+"/journey/"+n.id,n,{headers:{"Content-Type":"application/vnd.journey.api.publish.v1+json",Authorization:`Bearer ${r.accessToken}`}})}static#e=this.\u0275fac=function(r){return new(r||u)(c.KVO(s.Qq),c.KVO(C.u))};static#t=this.\u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);