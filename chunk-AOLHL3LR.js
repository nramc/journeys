import{a as H}from"./chunk-KGTLCIL2.js";import{a as z}from"./chunk-EFSDVRKM.js";import{c as V,g as G,h as B,i as O,j,k as R,s as W,v as D,x as Y}from"./chunk-5J5H5FZW.js";import{b as q}from"./chunk-SNVCUL6N.js";import{a as J}from"./chunk-RVB75WT6.js";import"./chunk-ZLRNIGX2.js";import{b as A}from"./chunk-4HWMNETW.js";import{e as N,g as U,h as T}from"./chunk-F5TIGKWS.js";import"./chunk-KUIIQJ2X.js";import"./chunk-IUL4I26V.js";import"./chunk-OU45453G.js";import{k as F}from"./chunk-MIMT4L35.js";import{Ab as _,Bc as k,Fa as f,Ga as p,Jb as v,Ob as d,Tb as S,Yb as i,Zb as r,_b as g,cc as P,hc as w,jc as I,mb as E,qb as l,rb as h,tc as b,ua as M,uc as a,xc as y,yc as L,zc as x}from"./chunk-Y7SRRAOL.js";function K(t,m){if(t&1&&g(0,"app-feedback-message",6),t&2){let n=I();d("message",n.feedbackMessage())}}function Q(t,m){t&1&&(i(0,"div",7),g(1,"i",30),a(2," Identity Yourself to access secured resource..! "),r())}function X(t,m){t&1&&(i(0,"div",8),g(1,"i",30),a(2," You have been successfully logged out! "),r())}function Z(t,m){t&1&&(i(0,"div",9),g(1,"i",30),a(2," Identity Yourself to access more exciting features..! "),r())}function $(t,m){t&1&&(i(0,"div"),a(1,"Username is required."),r())}function ee(t,m){t&1&&(i(0,"div"),a(1,"Username must be at most 50 characters long."),r())}function te(t,m){t&1&&(i(0,"div"),a(1,"Password is required."),r())}function ie(t,m){t&1&&(i(0,"div"),a(1,"Password must be at most 50 characters long."),r())}function ne(t,m){t&1&&(i(0,"div",29),g(1,"mat-spinner"),r())}var ve=(()=>{class t{constructor(n,o,e,u){this.authService=n,this.loginService=o,this.router=e,this.activatedRoute=u,this.feedbackMessage=_({}),this.isLoading=_(!1),this.form=new C,this.messageBanner="",this.SIGNUP_PAGE_INFO=q,this.forgotPasswordAssistanceUrl="https://github.com/nramc/journeys/issues/new?assignees=&labels=bug&projects=&template=bug-report-form.yml&title=%5BBug%5D%3A+"}ngOnInit(){this.messageBanner=this.activatedRoute.snapshot.queryParams.q}login(n){if(n.valid){this.isLoading.set(!0);let o={username:this.form.userName,password:this.form.password};this.loginService.login(o).subscribe({next:e=>this.onLoginSuccess(o,e),error:e=>{n.resetForm(),this.onLoginFailed(e)}})}}onLoginSuccess(n,o){if(this.isLoading.set(!1),o.additionalFactorRequired){let e={credential:n,options:o.securityAttributes};this.router.navigate(["mfa"],{queryParams:this.activatedRoute.snapshot.queryParams,state:e}).then(console.log)}else{let e=this.authService.getUserContextForSuccessfulLogin(o);this.onLogOnSuccess(e)}}onLoginFailed(n){this.isLoading.set(!1),console.error(n),this.feedbackMessage.set({error:"Login failed. "+n.message})}onLogOnSuccess(n){this.isLoading.set(!1),this.feedbackMessage.set({success:"Login successful for "+n.name});let o=this.activatedRoute.snapshot.queryParams.redirectUrl??"/home";this.router.navigateByUrl(o).then(console.log)}loginAsGuest(){this.isLoading.set(!0),this.loginService.loginAsGuest().subscribe({next:n=>{let o=this.authService.getUserContextForSuccessfulLogin(n);this.onLogOnSuccess(o)},error:n=>this.onLoginFailed(n)})}static{this.\u0275fac=function(o){return new(o||t)(h(A),h(J),h(U),h(N))}}static{this.\u0275cmp=M({type:t,selectors:[["app-login"]],standalone:!0,features:[k],decls:44,vars:13,consts:[["loginForm","ngForm"],["username","ngModel"],["password","ngModel"],[1,"container","h-100","mt-3","mt-md-0"],[1,"row","d-flex","justify-content-center","align-items-center","h-100","m-auto"],[1,"col-12","col-md-6","mt-sm-0"],[3,"message"],["role","alert",1,"alert","alert-warning"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-primary"],[1,"card","login-card","text-white","border","border-2","border-primary","border-opacity-50",2,"border-radius","1rem"],[1,"card-body","p-5","text-center"],[3,"ngSubmit"],[1,"fw-bold","mb-2"],[1,"text-white-50","mb-5"],[1,"form-outline","form-white","mb-2"],["type","email","id","username","name","username","required","","placeholder","Username","autofocus","","autocomplete","username","maxlength","50",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["for","username",1,"form-label","small"],["tabindex","-1",1,"text-light","ms-2",3,"routerLink"],[1,"form-text","text-danger",3,"hidden"],[4,"ngIf"],[1,"form-outline","form-white","mb-4"],["type","password","id","password","name","password","required","","maxlength","50","placeholder","Password","autocomplete","current-password",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["for","password",1,"form-label","small"],["target","_blank","tabindex","-1",1,"text-light","ms-2",3,"href"],[1,"d-flex","flex-column","gap-1"],["type","submit",1,"btn","btn-outline-dark","btn-lg",3,"disabled"],[1,"text-light"],["type","button",1,"btn","btn-success","btn-lg",3,"click"],[1,"loading-shade"],[1,"bi","bi-info-circle","pe-none","me-2"]],template:function(o,e){if(o&1){let u=P();i(0,"div",3)(1,"div",4)(2,"div",5)(3,"div"),v(4,K,1,1,"app-feedback-message",6)(5,Q,3,0,"div",7)(6,X,3,0,"div",8)(7,Z,3,0,"div",9),r(),i(8,"div",10)(9,"div",11)(10,"form",12,0),w("ngSubmit",function(){f(u);let s=b(11);return p(e.login(s))}),i(12,"h2",13),a(13,"Login"),r(),i(14,"p",14),a(15,"Please Identify Yourself!"),r(),i(16,"div",15)(17,"input",16,1),x("ngModelChange",function(s){return f(u),L(e.form.userName,s)||(e.form.userName=s),p(s)}),r(),i(19,"label",17),a(20,"Don't have an account? "),i(21,"a",18),a(22,"Sign Up"),r()(),i(23,"div",19),v(24,$,2,0,"div",20)(25,ee,2,0,"div",20),r()(),i(26,"div",21)(27,"input",22,2),x("ngModelChange",function(s){return f(u),L(e.form.password,s)||(e.form.password=s),p(s)}),r(),i(29,"label",23),a(30,"Forgot Password? "),i(31,"a",24),a(32,"Contact Us"),r()(),i(33,"div",19),v(34,te,2,0,"div",20)(35,ie,2,0,"div",20),r()(),i(36,"div",25)(37,"button",26),a(38,"Submit "),r(),i(39,"small",27),a(40,"or"),r(),i(41,"button",28),w("click",function(){return f(u),p(e.loginAsGuest())}),a(42,"Login as Guest"),r()()()()()()()(),v(43,ne,2,0,"div",29)}if(o&2){let u=b(11),c=b(18),s=b(28);l(4),S(e.feedbackMessage().success||e.feedbackMessage().error?4:e.messageBanner==="unauthenticated"?5:e.messageBanner==="logoutSuccessful"?6:7),l(13),y("ngModel",e.form.userName),l(4),d("routerLink",e.SIGNUP_PAGE_INFO.path),l(2),d("hidden",c.valid||c.pristine),l(),d("ngIf",c.errors==null?null:c.errors.required),l(),d("ngIf",c.errors==null?null:c.errors.maxlength),l(2),y("ngModel",e.form.password),l(4),d("href",e.forgotPasswordAssistanceUrl,E),l(2),d("hidden",s.valid||s.pristine),l(),d("ngIf",s.errors==null?null:s.errors.required),l(),d("ngIf",s.errors==null?null:s.errors.maxlength),l(2),d("disabled",!u.form.valid||u.submitted),l(6),S(e.isLoading()?43:-1)}},dependencies:[Y,R,V,G,B,W,D,j,O,H,F,T,z],styles:[".login-card[_ngcontent-%COMP%]{background-image:linear-gradient(to right top,#fff,#e2ddfb,#c3bdf7,#a29df2,#7d7fed,#686fea,#4f5fe6,#2c4fe2,#2647df,#203fdc,#1a37d9,#152ed5)}"]})}}return t})(),C=class{constructor(m="",n=""){this.userName=m,this.password=n}};export{ve as LoginComponent};
