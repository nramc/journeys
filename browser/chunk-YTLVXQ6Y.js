import{b as E,d as V,e as h,f as R}from"./chunk-TYTFNCOD.js";import{a as o,b as B}from"./chunk-JLYNBBLC.js";import{c as U}from"./chunk-W2LWCVAC.js";import{r as $}from"./chunk-RZVCQHV5.js";import{Ia as y,Ib as g,Ja as f,Kb as c,Pb as A,Tb as a,Ub as m,Vb as C,Wb as k,Xb as D,Zb as x,a as I,cc as _,ec as u,ic as j,jc as P,kc as z,mc as p,nc as v,oa as w,pb as s,ta as d,tc as F,v as b,ya as S}from"./chunk-K63RDP6Q.js";function M(i,n){if(i&1){let r=x();a(0,"div",2)(1,"p"),C(2,"span",3),a(3,"button",4),_("click",function(){y(r);let e=u();return f(e.togglePlayer())}),C(4,"i",5),m()()()}if(i&2){let r=u();s(2),c("textContent",r.timelineData==null?null:r.timelineData.heading)}}function Q(i,n){if(i&1&&(a(0,"div",11)(1,"span",12),p(2),m()()),i&2){let r=u().$implicit;s(2),v(r==null||r.args==null?null:r.args.title)}}function N(i,n){if(i&1&&(k(0),g(1,Q,3,1,"div",8),a(2,"div",9)(3,"p",10),p(4),m()(),D()),i&2){let r=n.$implicit;s(),c("ngIf",r==null||r.args==null?null:r.args.title),s(3),v(r==null||r.args==null?null:r.args.caption)}}function q(i,n){if(i&1){let r=x();a(0,"gallery",6),_("itemClick",function(){y(r);let e=u();return f(e.togglePlayer())}),g(1,N,5,2,"ng-container",7),m()}if(i&2){let r=u();c("items",r.images)("thumb",!1)("imageSize","contain")("dots",!0)("playerInterval",3e3)("loop",!0)("slidingDuration",500)("autoPlay",!0)}}function H(i,n){i&1&&(a(0,"div")(1,"p",13),p(2,"No events found for next 7 days."),m()())}var K=(()=>{let n=class n{constructor(){this.images=[],this.isPlayerRunning=!0}set setImageData(t){this.timelineData=t,this.images=this.getImageItems(t)}getImageItems(t){return t&&t.images?.length>0?t.images.map(e=>new E({src:e.src,args:I({caption:e.caption,title:e.title},e.args)})):[]}togglePlayer(){this.isPlayerRunning?(this.gallery.stop(),this.isPlayerRunning=!1):(this.gallery.next(),this.gallery.play(),this.isPlayerRunning=!0)}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=S({type:n,selectors:[["app-timeline"]],viewQuery:function(e,l){if(e&1&&j(h,5),e&2){let T;P(T=z())&&(l.gallery=T.first)}},inputs:{setImageData:[0,"data","setImageData"]},standalone:!0,features:[F],decls:3,vars:2,consts:[["class","fs-5",4,"ngIf"],[1,"gallery",3,"items","thumb","imageSize","dots","playerInterval","loop","slidingDuration","autoPlay"],[1,"fs-5"],[1,"gradient-text","me-2",3,"textContent"],["title","Toggle Timeline Player",1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"bi","bi-play-circle"],[1,"gallery",3,"itemClick","items","thumb","imageSize","dots","playerInterval","loop","slidingDuration","autoPlay"],[4,"galleryImageDef"],["class","text-start d-flex flex-row w-100",4,"ngIf"],[1,"h-100","w-100","text-end","d-flex","flex-column","justify-content-end","mb-2","fs-5"],[1,"text-center","bg-light","bg-opacity-25"],[1,"text-start","d-flex","flex-row","w-100"],[1,"text-light","me-2","fs-5","bg-dark","bg-opacity-50","m-2","border","border-2","border-light","ps-2","pe-2","rounded-2"],[1,"gradient-text"]],template:function(e,l){e&1&&g(0,M,5,1,"div",0)(1,q,2,8,"gallery",1)(2,H,3,0,"div"),e&2&&(c("ngIf",l.timelineData==null?null:l.timelineData.heading),s(),A(l.images&&l.images.length>0?1:2))},dependencies:[R,h,V,$],styles:[".gallery[_ngcontent-%COMP%]{max-width:75vw}"]});let i=n;return i})();var ie=(()=>{let n=class n{constructor(t,e){this.httpClient=t,this.authService=e}getTimelineForUpcomingEvents(){let t=this.authService.getCurrentUserContext();return this.httpClient.get(o.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${t.accessToken}`},params:{upcoming:"true"}})}getTimelineForJourney(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(o.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{IDs:t}})}getTimelineForCity(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(o.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{city:t}})}getTimelineForCountry(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(o.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{country:t}})}getTimelineForYear(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(o.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{year:t}})}getTimelineForCategory(t){let e=this.authService.getCurrentUserContext();return this.httpClient.get(o.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${e.accessToken}`},params:{category:t}})}getTimelineForToday(){let t=this.authService.getCurrentUserContext();return t.isAuthenticated?(console.log("authenticated..!"),this.httpClient.get(o.journeyApi+"/timeline",{headers:{Authorization:`Bearer ${t.accessToken}`},params:{today:!0}})):(console.log("not authenticated..!"),b())}};n.\u0275fac=function(e){return new(e||n)(d(U),d(B))},n.\u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();export{K as a,ie as b};
