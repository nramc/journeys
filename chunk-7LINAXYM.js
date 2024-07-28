import{b as U,d as B,e as _,f as R}from"./chunk-PTOZFQGQ.js";import{a as s,c as E}from"./chunk-SUSGIDRG.js";import{c as $}from"./chunk-G5ZNMOVD.js";import{r as V}from"./chunk-PDCKKOJZ.js";import{$b as y,Ha as g,Ia as d,Kb as p,Mb as m,Rb as S,Vb as o,Wb as a,Xb as h,Yb as P,Zb as A,a as T,ec as f,gc as u,kc as D,lc as j,mc as z,na as w,oc as C,pb as l,pc as v,sa as x,v as I,vc as F,xa as k}from"./chunk-6ZMI5GLR.js";var X=(()=>{let r=class r{constructor(t,e){this.httpClient=t,this.authService=e}getTimelineForUpcomingJourniversaries(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(s.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{upcoming:t}})}getTimelineForJourney(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(s.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{IDs:t}})}getTimelineForCity(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(s.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{city:t}})}getTimelineForCountry(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(s.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{country:t}})}getTimelineForYear(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(s.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{year:t}})}getTimelineForCategory(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(s.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{category:t}})}getTimelineForToday(){let t=this.authService.getCurrentUserContext();return t.isAuthenticated?this.httpClient.get(s.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${t.accessToken}`},params:{today:!0}}):I()}};r.\u0275fac=function(e){return new(e||r)(x($),x(E))},r.\u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();function M(i,r){if(i&1){let n=y();o(0,"button",6),f("click",function(){g(n);let e=u(2);return d(e.togglePlayer())}),h(1,"i",7),a()}}function Q(i,r){if(i&1){let n=y();o(0,"button",8),f("click",function(){g(n);let e=u(2);return d(e.togglePlayer())}),h(1,"i",9),a()}}function J(i,r){if(i&1&&(o(0,"div",2)(1,"p"),h(2,"span",3),p(3,M,2,0,"button",4)(4,Q,2,0,"button",5),a()()),i&2){let n=u();l(2),m("textContent",n.timelineData==null?null:n.timelineData.heading),l(),m("ngIf",n.isPlayerRunning),l(),m("ngIf",!n.isPlayerRunning)}}function N(i,r){if(i&1&&(o(0,"div",15)(1,"span",16),C(2),a()()),i&2){let n=u().$implicit;l(2),v(n==null||n.args==null?null:n.args.title)}}function q(i,r){if(i&1&&(P(0),p(1,N,3,1,"div",12),o(2,"div",13)(3,"p",14),C(4),a()(),A()),i&2){let n=r.$implicit;l(),m("ngIf",n==null||n.args==null?null:n.args.title),l(3),v(n==null||n.args==null?null:n.args.caption)}}function H(i,r){if(i&1){let n=y();o(0,"gallery",10),f("itemClick",function(){g(n);let e=u();return d(e.togglePlayer())}),p(1,q,5,2,"ng-container",11),a()}if(i&2){let n=u();m("items",n.images)("thumb",!1)("imageSize","contain")("dots",!0)("playerInterval",3e3)("loop",!0)("slidingDuration",500)("autoPlay",!0)}}function O(i,r){i&1&&(o(0,"div")(1,"p",17),C(2,"No events found for next 7 days."),a()())}var ne=(()=>{let r=class r{constructor(){this.images=[],this.isPlayerRunning=!0}set setImageData(t){this.timelineData=t,this.images=this.getImageItems(t)}getImageItems(t){return t&&t.images?.length>0?t.images.map(e=>new U({src:e.src,args:T({caption:e.caption,title:e.title},e.args)})):[]}togglePlayer(){this.isPlayerRunning?(this.gallery.stop(),this.isPlayerRunning=!1):(this.gallery.next(),this.gallery.play(),this.isPlayerRunning=!0)}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=k({type:r,selectors:[["app-timeline"]],viewQuery:function(e,c){if(e&1&&D(_,5),e&2){let b;j(b=z())&&(c.gallery=b.first)}},inputs:{setImageData:[0,"data","setImageData"]},standalone:!0,features:[F],decls:3,vars:2,consts:[["class","fs-5",4,"ngIf"],[1,"gallery",3,"items","thumb","imageSize","dots","playerInterval","loop","slidingDuration","autoPlay"],[1,"fs-5"],[1,"gradient-text","me-2",3,"textContent"],["class","btn btn-sm btn-outline-primary","title","Pause",3,"click",4,"ngIf"],["class","btn btn-sm btn-outline-primary","title","Play",3,"click",4,"ngIf"],["title","Pause",1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"bi","bi-pause-circle"],["title","Play",1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"bi","bi-play-circle"],[1,"gallery",3,"itemClick","items","thumb","imageSize","dots","playerInterval","loop","slidingDuration","autoPlay"],[4,"galleryImageDef"],["class","text-start d-flex flex-row w-100",4,"ngIf"],[1,"h-100","w-100","text-end","d-flex","flex-column","justify-content-end","mb-2","fs-5"],[1,"text-center","bg-light","bg-opacity-25"],[1,"text-start","d-flex","flex-row","w-100"],[1,"text-light","me-2","fs-5","bg-dark","bg-opacity-50","m-2","border","border-2","border-light","ps-2","pe-2","rounded-2"],[1,"gradient-text"]],template:function(e,c){e&1&&p(0,J,5,3,"div",0)(1,H,2,8,"gallery",1)(2,O,3,0,"div"),e&2&&(m("ngIf",c.timelineData==null?null:c.timelineData.heading),l(),S(c.images&&c.images.length>0?1:2))},dependencies:[R,_,B,V],styles:[".gallery[_ngcontent-%COMP%]{max-width:75vw}"]});let i=r;return i})();export{X as a,ne as b};
