import{a as L}from"./chunk-OEK3JCZ4.js";import{a as D}from"./chunk-SWQG36EL.js";import{a as G}from"./chunk-JN357QYC.js";import"./chunk-4AQSK3KV.js";import{a as N}from"./chunk-6NMX424Q.js";import{i as $}from"./chunk-6IY7YVM2.js";import"./chunk-R6KC7QZL.js";import{a as M,b as O}from"./chunk-3TVQIQ7Q.js";import{c as A,l as j}from"./chunk-FIKRSNUT.js";import{p as E}from"./chunk-6TOOB3QO.js";import{$b as k,Ia as v,Ja as C,Kb as I,Mb as s,Rb as T,Tb as w,Ub as P,Vb as c,Wb as d,Xb as p,ec as S,gc as l,mb as _,oa as x,oc as m,pc as F,qb as a,qc as g,rb as u,ta as y,vc as h,ya as f}from"./chunk-ZMWQM3UH.js";var H=(r,i)=>i.name;function J(r,i){if(r&1){let o=k();c(0,"div",5),S("click",function(){let t=v(o).$implicit,n=l();return C(n.gotoGallery(n.type,t.name))}),c(1,"div",6)(2,"div",7)(3,"h5",8),m(4),d(),c(5,"button",9),S("click",function(t){let n=v(o).$implicit,b=l();return C(b.gotoTimeline(b.type,n.name,t))}),p(6,"i",10),d()(),c(7,"div",11)(8,"div",12)(9,"h2",13),m(10),d()(),c(11,"div",14)(12,"span"),m(13),d()()(),p(14,"mat-progress-bar",15),d()()}if(r&2){let o=i.$implicit,e=i.$index,t=l();s("ngClass","card-"+e),a(4),F(o.name),a(6),g(" ",o.count," "),a(3),g("",t.getPercentage(o.count,t.total),"%"),a(),s("value",t.getPercentage(o.count,t.total))}}var z=(()=>{let i=class i{comparatorFn(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}constructor(e){this.router=e,this.data=[],this.header="",this.total=0}ngOnInit(){this.total=this.data.map(e=>e.count).reduce((e,t)=>e+t)}gotoGallery(e,t){this.router.navigate(["/gallery"],{state:this.getSearchCriteria(e,t)}).then(console.log)}gotoTimeline(e,t,n){return n.stopPropagation(),this.router.navigate(["/timeline"],{queryParams:{[e]:t}}).then(console.log),!1}getSearchCriteria(e,t){let n=new L;switch(e){case"category":n.category=t;break;case"city":n.city=t;break;case"country":n.country=t;break;case"year":n.year=t;break}return n}getPercentage(e,t){return Math.round(e/t*100)}};i.\u0275fac=function(t){return new(t||i)(u(j))},i.\u0275cmp=f({type:i,selectors:[["app-statistics-panel"]],inputs:{data:"data",header:"header",type:"type"},standalone:!0,features:[h],decls:7,vars:3,consts:[[1,"mt-3","gradient-bg-light","p-2","rounded-2","d-flex","flex-column"],[1,"gradient-bg","rounded-2","border","border-primary"],["data-bs-toggle","collapse","role","button","aria-expanded","true",1,"text-decoration-none","text-light","ps-2","w-100","fs-5","d-flex",3,"href"],[1,"card-group","gap-2","show",3,"id"],[1,"card","border","border-primary","border-1","rounded-2",3,"ngClass"],[1,"card","border","border-primary","border-1","rounded-2",3,"click","ngClass"],[1,"card-statistics","p-4"],[1,"mb-4","d-inline-flex","justify-content-around","w-100"],[1,"card-title","gradient-text","mb-0"],[1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"bi","bi-clock-history"],[1,"row","align-items-center","mb-2","d-flex"],[1,"col-8"],[1,"d-flex","align-items-center","mb-0","gradient-text"],[1,"col-4","text-right","gradient-text"],["mode","determinate",3,"value"]],template:function(t,n){t&1&&(c(0,"section",0)(1,"legend",1)(2,"a",2),m(3),d()(),c(4,"div",3),w(5,J,15,5,"div",4,H),d()()),t&2&&(a(2),s("href","#"+n.header,_),a(),g(" ",n.header," "),a(),s("id",n.header),a(),P(n.data.sort(n.comparatorFn)))},dependencies:[D,E],styles:[".card[_ngcontent-%COMP%]{cursor:pointer;max-width:20rem!important;width:20rem!important;min-width:20rem!important;background-image:linear-gradient(to left top,#b7b5f5,#c5c0f7,#d2cbf8,#ded7fa,#e9e3fc,#efe9fd,#f4f0fe,#f9f6ff,#faf8ff,#fcfbff,#fdfdff,#fff)}"]});let r=i;return r})();var B=(()=>{let i=class i{constructor(e,t){this.httpClient=e,this.authService=t}getStatistics(){let e=this.authService.getCurrentUserContext();return this.httpClient.get(M.journeyApi+"/journeys/statistics",{headers:{Authorization:`Bearer ${e.accessToken}`}})}};i.\u0275fac=function(t){return new(t||i)(y(A),y(O))},i.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();function V(r,i){r&1&&(c(0,"div",1),p(1,"mat-spinner"),d())}function q(r,i){if(r&1&&p(0,"app-statistics-panel",2)(1,"app-statistics-panel",3)(2,"app-statistics-panel",4)(3,"app-statistics-panel",5),r&2){let o=l();s("data",o.statistics.years),a(),s("data",o.statistics.countries),a(),s("data",o.statistics.cities),a(),s("data",o.statistics.categories)}}function Y(r,i){r&1&&(c(0,"div",1),p(1,"mat-spinner"),d())}var dt=(()=>{let i=class i{constructor(e){this.statisticsService=e,this.STATISTICS_PAGE_INFO=$,this.statistics=void 0,this.isLoadingResults=!0}ngOnInit(){this.statisticsService.getStatistics().subscribe({next:e=>this.onSuccessCallback(e),error:e=>console.error(e)})}onSuccessCallback(e){this.statistics=e,this.isLoadingResults=!1}};i.\u0275fac=function(t){return new(t||i)(u(B))},i.\u0275cmp=f({type:i,selectors:[["app-statistics"]],standalone:!0,features:[h],decls:4,vars:2,consts:[[3,"pageInfo"],[1,"loading-shade"],["type","year","header","Years",3,"data"],["type","country","header","Countries",3,"data"],["type","city","header","Cities",3,"data"],["type","category","header","Categories",3,"data"]],template:function(t,n){t&1&&(p(0,"app-page-header",0),I(1,V,2,0,"div",1)(2,q,4,4)(3,Y,2,0,"div",1)),t&2&&(s("pageInfo",n.STATISTICS_PAGE_INFO),a(),T(n.isLoadingResults?1:n.statistics?2:3))},dependencies:[N,G,z]});let r=i;return r})();export{dt as StatisticsComponent};
