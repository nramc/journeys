import{a as U}from"./chunk-EXXTB3G4.js";import{c as P,g as A,h as B,i as W,j as G,k as R,s as j,v as Y,w as D}from"./chunk-XEDJDCXR.js";import{e as N,g as F}from"./chunk-K7HVF7SP.js";import{b as q}from"./chunk-GISEPMBY.js";import"./chunk-ARLEKDS5.js";import{r as V}from"./chunk-42OPBNH4.js";import{Db as L,Ia as g,Ja as f,Lb as b,Nb as c,Sb as E,Wb as t,Xb as i,Yb as p,ac as k,fc as w,hc as I,oc as h,pc as a,qb as l,rb as v,sc as S,tc as y,uc as x,wc as T,ya as M}from"./chunk-TO7D4NWA.js";function O(e,n){if(e&1&&p(0,"app-feedback-message",6),e&2){let _=I();c("message",_.feedbackMessage())}}function z(e,n){e&1&&(t(0,"div",7),p(1,"i",26),a(2," Identity Yourself to access secured resource..! "),i())}function H(e,n){e&1&&(t(0,"div",8),p(1,"i",26),a(2," You have been successfully logged out! "),i())}function J(e,n){e&1&&(t(0,"div",9),p(1,"i",26),a(2," Identity Yourself to access more exciting features..! "),i())}function K(e,n){e&1&&(t(0,"div"),a(1,"Username is required."),i())}function Q(e,n){e&1&&(t(0,"div"),a(1,"Username must be at most 50 characters long."),i())}function X(e,n){e&1&&(t(0,"div"),a(1,"Password is required."),i())}function Z(e,n){e&1&&(t(0,"div"),a(1,"Password must be at most 50 characters long."),i())}var le=(()=>{let n=class n{constructor(o,d,s){this.authService=o,this.router=d,this.activatedRoute=s,this.feedbackMessage=L({}),this.form=new C,this.messageBanner=""}ngOnInit(){this.messageBanner=this.activatedRoute.snapshot.queryParams.q}login(o){o.valid&&this.authService.login(this.form.userName,this.form.password).subscribe({next:d=>this.onLoginSuccess(d),error:d=>{o.resetForm(),this.onLoginFailed(d)}})}onLoginSuccess(o){this.feedbackMessage.set({success:"Login successful for "+o.name}),this.router.navigate(["/home"]).then()}onLoginFailed(o){console.error(o),this.feedbackMessage.set({error:"Login failed. "+o.message})}loginAsGuest(){this.authService.loginAsGuest().subscribe({next:o=>this.onLoginSuccess(o),error:o=>this.onLoginFailed(o)})}};n.\u0275fac=function(d){return new(d||n)(v(q),v(F),v(N))},n.\u0275cmp=M({type:n,selectors:[["app-login"]],standalone:!0,features:[T],decls:39,vars:10,consts:[["loginForm","ngForm"],["username","ngModel"],["password","ngModel"],[1,"container","h-100","mt-3","mt-md-0"],[1,"row","d-flex","justify-content-center","align-items-center","h-100","m-auto"],[1,"col-12","col-md-6","mt-sm-0"],[3,"message"],["role","alert",1,"alert","alert-warning"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-primary"],[1,"card","login-card","text-white","border","border-2","border-primary","border-opacity-50",2,"border-radius","1rem"],[1,"card-body","p-5","text-center"],[3,"ngSubmit"],[1,"fw-bold","mb-2"],[1,"text-white-50","mb-5"],[1,"form-outline","form-white","mb-4"],["type","email","id","username","name","username","required","","maxlength","50",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["for","username",1,"form-label"],[1,"form-text","text-danger",3,"hidden"],[4,"ngIf"],["type","password","id","password","name","password","required","","maxlength","50",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],[1,"d-flex","flex-column","gap-1"],["type","submit",1,"btn","btn-outline-dark","btn-lg",3,"disabled"],[1,"text-light"],["type","button",1,"btn","btn-success","btn-lg",3,"click"],[1,"bi","bi-info-circle","pe-none","me-2"]],template:function(d,s){if(d&1){let u=k();t(0,"div",3)(1,"div",4)(2,"div",5)(3,"div"),b(4,O,1,1,"app-feedback-message",6)(5,z,3,0,"div",7)(6,H,3,0,"div",8)(7,J,3,0,"div",9),i(),t(8,"div",10)(9,"div",11)(10,"form",12,0),w("ngSubmit",function(){g(u);let r=h(11);return f(s.login(r))}),t(12,"h2",13),a(13,"Login"),i(),t(14,"p",14),a(15,"Please Identify Yourself!"),i(),t(16,"div",15)(17,"input",16,1),x("ngModelChange",function(r){return g(u),y(s.form.userName,r)||(s.form.userName=r),f(r)}),i(),t(19,"label",17),a(20,"Username"),i(),t(21,"div",18),b(22,K,2,0,"div",19)(23,Q,2,0,"div",19),i()(),t(24,"div",15)(25,"input",20,2),x("ngModelChange",function(r){return g(u),y(s.form.password,r)||(s.form.password=r),f(r)}),i(),t(27,"label",21),a(28,"Password"),i(),t(29,"div",18),b(30,X,2,0,"div",19)(31,Z,2,0,"div",19),i()(),t(32,"div",22)(33,"button",23),a(34,"Submit "),i(),t(35,"small",24),a(36,"or"),i(),t(37,"button",25),w("click",function(){return g(u),f(s.loginAsGuest())}),a(38,"Login as Guest"),i()()()()()()()()}if(d&2){let u=h(11),m=h(18),r=h(26);l(4),E(s.feedbackMessage().success||s.feedbackMessage().error?4:s.messageBanner==="unauthenticated"?5:s.messageBanner==="logoutSuccessful"?6:7),l(13),S("ngModel",s.form.userName),l(4),c("hidden",m.valid||m.pristine),l(),c("ngIf",m.errors==null?null:m.errors.required),l(),c("ngIf",m.errors==null?null:m.errors.maxlength),l(2),S("ngModel",s.form.password),l(4),c("hidden",r.valid||r.pristine),l(),c("ngIf",r.errors==null?null:r.errors.required),l(),c("ngIf",r.errors==null?null:r.errors.maxlength),l(2),c("disabled",!u.form.valid||u.submitted)}},dependencies:[D,R,P,A,B,j,Y,G,W,U,V],styles:[".login-card[_ngcontent-%COMP%]{background-image:linear-gradient(to right top,#fff,#e2ddfb,#c3bdf7,#a29df2,#7d7fed,#686fea,#4f5fe6,#2c4fe2,#2647df,#203fdc,#1a37d9,#152ed5)}"]});let e=n;return e})(),C=class{constructor(n="",_=""){this.userName=n,this.password=_}};export{le as LoginComponent};
