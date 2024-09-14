import{a as w,b as L}from"./chunk-4WO74TXH.js";import{a as H}from"./chunk-UJW6R6WQ.js";import{a as D}from"./chunk-OOZEX554.js";import"./chunk-M7TYRPJL.js";import"./chunk-VSQTGOJW.js";import{a as T}from"./chunk-UVLBLYUY.js";import{a as k,f as N,k as A}from"./chunk-SNVCUL6N.js";import"./chunk-RGNDWIHZ.js";import{c as v}from"./chunk-TJQDN4JZ.js";import{a as O}from"./chunk-LIE6DVSM.js";import{a as F}from"./chunk-I4GWFW3R.js";import{b as C}from"./chunk-DD3DGY4R.js";import{h as g}from"./chunk-KSKSUK6M.js";import"./chunk-K22UJB6U.js";import"./chunk-Z5ZYU6WP.js";import"./chunk-ITVK7XTE.js";import{o as b}from"./chunk-IJXI7AEK.js";import{Lb as c,Nb as m,Wb as t,Xb as r,Yb as s,Yc as S,hc as h,pb as o,rc as n,sc as I,ta as d,tc as y,va as f,yc as u}from"./chunk-BS3IBH43.js";var M=(()=>{let i=class i{constructor(){this.NEW_JOURNEY_PAGE_INFO=N,this.TIMELINE_PAGE_INFO=A}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["app-quick-links"]],standalone:!0,features:[u],decls:18,vars:2,consts:[[1,"gradient-text"],[1,"d-flex","flex-column","flex-md-row","gap-md-2","gap-0","justify-content-center","justify-content-md-start","align-content-center","align-items-center"],[1,"col-12","col-md-4"],[1,"w-100","btn","btn-outline-primary","p-0","border","border-2","m-2","border-primary","rounded-2","text-decoration-none","d-inline-flex","align-content-center","align-items-center",3,"routerLink"],[1,"p-1","text-bg-primary"],[1,"ps-1","pe-2"]],template:function(l,a){l&1&&(t(0,"section")(1,"h4",0),n(2,"Quick Links"),r(),t(3,"div",1)(4,"div",2)(5,"a",3)(6,"span",4)(7,"mat-icon"),n(8,"add_circle"),r()(),t(9,"span",5),n(10,"Create New Journey"),r()()(),t(11,"div",2)(12,"a",3)(13,"span",4)(14,"mat-icon"),n(15,"circle_notifications"),r()(),t(16,"span",5),n(17,"Upcoming Journey"),r()()()()()),l&2&&(o(5),m("routerLink",a.NEW_JOURNEY_PAGE_INFO.path),o(7),m("routerLink",a.TIMELINE_PAGE_INFO.path))},dependencies:[F,g],encapsulation:2,changeDetection:0});let e=i;return e})();function G(e,i){e&1&&(t(0,"p",17),n(1," Never lose track of a travel memory again. "),t(2,"a",18),n(3," Create Journey to store your trips, photos, and stories - forever! "),s(4,"i",16),r()())}function U(e,i){if(e&1&&(t(0,"div",11)(1,"p"),n(2,"Welcome "),t(3,"strong",12),n(4),r(),n(5,"..!,"),r(),c(6,G,5,0,"p",13),t(7,"p",14),n(8," Don't miss out! Relive the magic - See Upcoming "),t(9,"a",15),n(10,"Journiversaries (Journey + Anniversaries) "),s(11,"i",16),r()()()),e&2){let p=h().ngIf;o(4),I(p.name)}}function j(e,i){if(e&1&&(t(0,"section",8)(1,"div",9),c(2,U,12,1,"div",10),r()()),e&2){let p=i.ngIf;o(2),m("ngIf",p.isAuthenticated)}}function J(e,i){e&1&&s(0,"app-quick-links",19)}function W(e,i){if(e&1&&(t(0,"section",20)(1,"div",9)(2,"div",21),s(3,"app-timeline",22),r()()()),e&2){let p=h();o(3),m("data",p.timelineData())}}function R(e,i){e&1&&(t(0,"div",9)(1,"div",23)(2,"div",24)(3,"span",25),n(4,"Loading..."),r()(),t(5,"p",26),n(6,"Warming up the chrono-engine! (Backend server too!)"),r(),t(7,"p",27),n(8," It'll be ready for temporal displacement in a minute or two. "),s(9,"i",28)(10,"br"),n(11," In the meantime, why not explore the space-time continuum of our other pages? "),s(12,"i",29),r()()())}var se=(()=>{let i=class i{constructor(){this.HOME_PAGE_INFO=k,this.authService=d(C),this.bffService=d(T),this.timelineService=d(w),this.appVersion=O.version,this.userData=v(this.authService.getUserContext()),this.isUserAuthenticated=S(()=>this.userData()?.isAuthenticated),this.bffApiVersion=v(this.bffService.getVersion()),this.timelineData=v(this.timelineService.getTimelineForToday())}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["app-home"]],standalone:!0,features:[u],decls:13,vars:7,consts:[[3,"pageInfo"],["class","ms-3 d-flex",4,"ngIf"],["class","ms-3",4,"ngIf"],["class","container",4,"ngIf"],[1,"container","footer-section"],["class","row",4,"ngIf"],[1,"fixed-bottom","m-auto","text-primary","text-center","align-items-center","justify-content-center","align-content-center"],[1,"text-light-emphasis","ms-2","small"],[1,"ms-3","d-flex"],[1,"row"],["class","col-12 text-primary",4,"ngIf"],[1,"col-12","text-primary"],[1,"gradient-text"],["class","small",4,"hasWriteAccess"],[1,"text-primary","small"],["routerLink","/timeline","role","link",1,""],[1,"bi","bi-arrow-right-circle-fill"],[1,"small"],["routerLink","/journey/new","role","link",1,""],[1,"ms-3"],[1,"container"],[1,"col-12","d-flex","flex-column","justify-content-start"],[3,"data"],[1,"col-12","text-center","m-1"],[1,"spinner-border","text-primary"],[1,"visually-hidden","text-primary"],[1,"text-primary"],[1,"text-primary","small","opacity-75"],[1,"fs-5","fw-bolder","bi","bi-emoji-grin","pe-none","text-primary"],[1,"fs-5","fw-bolder","bi","bi-emoji-sunglasses","pe-none","text-primary"]],template:function(l,a){if(l&1&&(s(0,"app-page-header",0),c(1,j,3,1,"section",1)(2,J,1,0,"app-quick-links",2)(3,W,4,1,"section",3),t(4,"section",4),c(5,R,13,0,"div",5),t(6,"footer",6)(7,"span",7)(8,"small"),n(9),r()(),t(10,"span",7)(11,"small"),n(12),r()()()()),l&2){let _,E;m("pageInfo",a.HOME_PAGE_INFO),o(),m("ngIf",a.userData()),o(),m("ngIf",a.isUserAuthenticated()),o(),m("ngIf",a.timelineData()&&((_=a.timelineData())==null||_.images==null?null:_.images.length)),o(2),m("ngIf",!a.bffApiVersion()),o(4),y("GUI : v",a.appVersion,""),o(3),y("BFF : ",(E=a.bffApiVersion())==null?null:E.version,"")}},dependencies:[D,b,L,g,H,M],encapsulation:2});let e=i;return e})();export{se as HomeComponent};
