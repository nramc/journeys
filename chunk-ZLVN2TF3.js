import{a as B}from"./chunk-OEK3JCZ4.js";import{a as H}from"./chunk-IOGCOYSH.js";import{a as q}from"./chunk-OG2A5DXH.js";import{a as z}from"./chunk-EFSDVRKM.js";import{j as G}from"./chunk-SNVCUL6N.js";import{c as O}from"./chunk-FUSGHHWI.js";import{a as R}from"./chunk-ZLRNIGX2.js";import{b as L}from"./chunk-4HWMNETW.js";import{g as N}from"./chunk-F5TIGKWS.js";import"./chunk-KUIIQJ2X.js";import"./chunk-IUL4I26V.js";import{c as $}from"./chunk-OU45453G.js";import{i as M}from"./chunk-MIMT4L35.js";import{$c as D,Ab as I,Bc as y,Fa as S,Ga as v,Jb as P,Ob as a,Sa as g,Tb as k,Wb as F,Xb as E,Yb as o,Zb as s,_b as c,cc as j,ga as b,hc as _,jc as d,ma as T,mb as w,qb as r,ra as C,sa as f,ua as u,uc as l,vc as A,wc as h}from"./chunk-Y7SRRAOL.js";var V=(()=>{class i{constructor(t,e){this.httpClient=t,this.authService=e}getStatistics(){let t=this.authService.getCurrentUserContext();return this.httpClient.get(R.journeyApi+"/journeys/statistics",{headers:{Authorization:`Bearer ${t.accessToken}`}})}static{this.\u0275fac=function(e){return new(e||i)(C($),C(L))}}static{this.\u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var J=(i,p)=>p.name;function K(i,p){if(i&1){let t=j();o(0,"a",5),_("click",function(){let n=S(t).$implicit,m=d();return v(m.gotoGallery(m.type(),n.name))}),o(1,"div",6)(2,"div",7)(3,"h5",8),l(4),s(),o(5,"button",9),_("click",function(n){let m=S(t).$implicit,x=d();return v(x.gotoTimeline(x.type(),m.name,n))}),c(6,"i",10),s()(),o(7,"div",11)(8,"div",12)(9,"h2",13),l(10),s()(),o(11,"div",14)(12,"span"),l(13),s()()(),c(14,"mat-progress-bar",15),s()()}if(i&2){let t=p.$implicit,e=p.$index,n=d();a("ngClass","card-"+e),r(4),A(t.name),r(6),h(" ",t.count," "),r(3),h("",n.getPercentage(t.count,n.totalCount()),"%"),r(),a("value",n.getPercentage(t.count,n.totalCount()))}}var Y=(()=>{class i{constructor(){this.router=f(N),this.data=g.required(),this.header=g.required(),this.type=g.required(),this.totalCount=D(()=>this.data().map(t=>t.count).reduce((t,e)=>t+e))}comparatorFn(t,e){return t.name.toLowerCase().localeCompare(e.name.toLowerCase())}gotoGallery(t,e){this.router.navigate(["/gallery"],{state:this.getSearchCriteria(t,e)}).then(console.log)}gotoTimeline(t,e,n){return n.stopPropagation(),this.router.navigate(["/timeline"],{queryParams:{[t]:e}}).then(console.log),!1}getSearchCriteria(t,e){let n=new B;switch(t){case"category":n.category=e;break;case"city":n.city=e;break;case"country":n.country=e;break;case"year":n.year=e;break}return n}getPercentage(t,e){return Math.round(t/e*100)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-statistics-panel"]],inputs:{data:[1,"data"],header:[1,"header"],type:[1,"type"]},standalone:!0,features:[y],decls:7,vars:3,consts:[[1,"mt-3","p-2","rounded-2","d-flex","flex-column"],[1,"gradient-bg","rounded-2","border","border-primary"],["data-bs-toggle","collapse","aria-expanded","true",1,"text-decoration-none","text-light","ps-2","w-100","fs-5","d-flex","toggle-link","d-inline-flex","align-items-center","justify-content-between",3,"href"],[1,"card-group","gap-2","show","ps-2",3,"id"],[1,"text-decoration-none","card","border","border-primary","border-1","rounded-2",3,"ngClass"],[1,"text-decoration-none","card","border","border-primary","border-1","rounded-2",3,"click","ngClass"],[1,"card-statistics","p-4"],[1,"mb-4","d-inline-flex","justify-content-around","w-100"],[1,"card-title","gradient-text","mb-0"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"bi","bi-clock-history"],[1,"row","align-items-center","mb-2","d-flex"],[1,"col-8"],[1,"d-flex","align-items-center","mb-0","gradient-text"],[1,"col-4","text-right","gradient-text"],["mode","determinate",3,"value"]],template:function(e,n){e&1&&(o(0,"section",0)(1,"legend",1)(2,"a",2),l(3),s()(),o(4,"div",3),F(5,K,15,5,"a",4,J),s()()),e&2&&(r(2),a("href","#"+n.header(),w),r(),h(" ",n.header()," "),r(),a("id",n.header()),r(),E(n.data().sort(n.comparatorFn)))},dependencies:[H,M],styles:[".card[_ngcontent-%COMP%]{cursor:pointer;max-width:20rem!important;width:20rem!important;min-width:20rem!important;background-image:linear-gradient(to left top,#f9f6ff,#faf8ff,#fcfbff,#fdfdff,#fff)}"],changeDetection:0})}}return i})();function Q(i,p){i&1&&(o(0,"div",1),c(1,"mat-spinner"),s())}function W(i,p){if(i&1&&c(0,"app-statistics-panel",2)(1,"app-statistics-panel",3)(2,"app-statistics-panel",4)(3,"app-statistics-panel",5),i&2){let t=d();a("data",t.statistics().years),r(),a("data",t.statistics().countries),r(),a("data",t.statistics().cities),r(),a("data",t.statistics().categories)}}function X(i,p){i&1&&(o(0,"div",1),c(1,"mat-spinner"),s())}var xt=(()=>{class i{constructor(){this.STATISTICS_PAGE_INFO=G,this.isLoadingResults=I(!0),this.statisticsService=f(V),this.statistics=O(this.statisticsService.getStatistics().pipe(b(t=>{this.isLoadingResults.set(!1)})))}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-statistics"]],standalone:!0,features:[y],decls:4,vars:2,consts:[[3,"pageInfo"],[1,"loading-shade"],["type","year","header","Years",3,"data"],["type","country","header","Countries",3,"data"],["type","city","header","Cities",3,"data"],["type","category","header","Categories",3,"data"]],template:function(e,n){e&1&&(c(0,"app-page-header",0),P(1,Q,2,0,"div",1)(2,W,4,4)(3,X,2,0,"div",1)),e&2&&(a("pageInfo",n.STATISTICS_PAGE_INFO),r(),k(n.isLoadingResults()?1:n.statistics()?2:3))},dependencies:[q,z,Y],changeDetection:0})}}return i})();export{xt as StatisticsComponent};
