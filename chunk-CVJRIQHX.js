import{a as N,b as M}from"./chunk-ZOEMJFYC.js";import{a as I}from"./chunk-2SNHFQHX.js";import"./chunk-PK7HXBYD.js";import{g as O,j as w,n as P,o as R,p as V,x as W}from"./chunk-5L65BU43.js";import{k as E}from"./chunk-SNVCUL6N.js";import"./chunk-RGNDWIHZ.js";import"./chunk-ZBOZTG5O.js";import"./chunk-P7PPGZS3.js";import{e as J}from"./chunk-XEJULNW6.js";import"./chunk-7FBRJZ3K.js";import"./chunk-5XB5PZR3.js";import{r as T}from"./chunk-4NTYDSMY.js";import{Ha as p,Ia as g,Lb as x,Nb as c,Wb as i,Xb as r,Yb as v,ac as D,fc as S,hc as u,pb as m,qb as d,rc as o,uc as C,vc as F,wc as _,xa as y,yc as b}from"./chunk-7FH2CJX7.js";function q(s,a){if(s&1){let l=D();i(0,"div",4)(1,"div",6)(2,"select",7),_("ngModelChange",function(e){p(l);let n=u();return F(n.numberOfDaysJourniversaries,e)||(n.numberOfDaysJourniversaries=e),g(e)}),S("change",function(){p(l);let e=u();return g(e.getDataForUpcomingJourniversaries())}),i(3,"option",8),o(4,"Tomorrow"),r(),i(5,"option",9),o(6,"Next One Week"),r(),i(7,"option",10),o(8,"Next Two Week"),r(),i(9,"option",11),o(10,"Next Three Week"),r(),i(11,"option",12),o(12,"Next One Month"),r(),i(13,"option",13),o(14,"Next Two Months"),r(),i(15,"option",14),o(16,"Next Three Months"),r()(),i(17,"label",15),o(18,"Choose interval to display Journiversaries"),r()()()}if(s&2){let l=u();m(2),C("ngModel",l.numberOfDaysJourniversaries)}}var z=(()=>{let a=class a{constructor(t,e){this.timelineService=t,this.activatedRoute=e,this.TIMELINE_PAGE_INFO=E,this.upcomingJourniversaries=!1,this.numberOfDaysJourniversaries=7}ngOnInit(){let t=this.activatedRoute.snapshot.queryParams.id,e=this.activatedRoute.snapshot.queryParams.city,n=this.activatedRoute.snapshot.queryParams.country,h=this.activatedRoute.snapshot.queryParams.year,f=this.activatedRoute.snapshot.queryParams.category;t?this.getDataForJourney(t):e?this.getDataForCity(e):n?this.getDataForCountry(n):h?this.getDataForYear(h):f?this.getDataForCategory(f):(this.upcomingJourniversaries=!0,this.getDataForUpcomingJourniversaries())}getDataForJourney(t){this.timelineService.getTimelineForJourney(t).subscribe({next:e=>this.timelineData=e,error:e=>console.error(e)})}getDataForCity(t){this.timelineService.getTimelineForCity(t).subscribe({next:e=>this.timelineData=e,error:e=>console.error(e)})}getDataForCountry(t){this.timelineService.getTimelineForCountry(t).subscribe({next:e=>this.timelineData=e,error:e=>console.error(e)})}getDataForYear(t){this.timelineService.getTimelineForYear(t).subscribe({next:e=>this.timelineData=e,error:e=>console.error(e)})}getDataForCategory(t){this.timelineService.getTimelineForCategory(t).subscribe({next:e=>this.timelineData=e,error:e=>console.error(e)})}getDataForUpcomingJourniversaries(){this.timelineService.getTimelineForUpcomingJourniversaries(this.numberOfDaysJourniversaries).subscribe({next:t=>this.timelineData=t,error:t=>console.error(t)})}};a.\u0275fac=function(e){return new(e||a)(d(N),d(J))},a.\u0275cmp=y({type:a,selectors:[["app-timeline-page"]],standalone:!0,features:[b],decls:6,vars:3,consts:[[3,"pageInfo"],[1,"mt-2","container"],[1,"row","d-flex","flex-column"],["class","col",4,"ngIf"],[1,"col"],[3,"data"],[1,"form-floating","mb-2"],["id","numberOfDaysJourniversariesSelect","name","numberOfDaysJourniversariesSelect","aria-label","Journiversaries days",1,"form-select","ignore-highlight","text-primary",3,"ngModelChange","change","ngModel"],["value","1"],["value","7"],["value","14"],["value","21"],["value","30"],["value","60"],["value","90"],["for","numberOfDaysJourniversariesSelect"]],template:function(e,n){e&1&&(v(0,"app-page-header",0),i(1,"section",1)(2,"div",2),x(3,q,19,1,"div",3),i(4,"div",4),v(5,"app-timeline",5),r()()()),e&2&&(c("pageInfo",n.TIMELINE_PAGE_INFO),m(3),c("ngIf",n.upcomingJourniversaries),m(2),c("data",n.timelineData))},dependencies:[M,I,T,W,R,V,P,O,w]});let s=a;return s})();export{z as TimelinePageComponent};
