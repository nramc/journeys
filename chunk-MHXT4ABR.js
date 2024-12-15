import{a as Q}from"./chunk-ZHIJM2JN.js";import{a as N}from"./chunk-K7Y6ZZ33.js";import{a as H}from"./chunk-IPLSUCNB.js";import{b as U}from"./chunk-WTO4EC35.js";import{a as K}from"./chunk-YJ3QRXBN.js";import"./chunk-2KWCZQSF.js";import"./chunk-4SIJYGGU.js";import"./chunk-2PPFUFFT.js";import{b as T,g as q,h as G,i as O,j,k as B,p as D,s as R,u as W}from"./chunk-ZWL263BF.js";import"./chunk-LSAJOEEM.js";import{c as V}from"./chunk-FMC26DVU.js";import{c as z}from"./chunk-GKHTDWFE.js";import{a as J}from"./chunk-H4VMZNAY.js";import"./chunk-HI24ZEE2.js";import{a as k,c as F,d as A}from"./chunk-IBLWUD3D.js";import"./chunk-6OB4FHE2.js";import{j as P,y as I}from"./chunk-65UXW6KM.js";import{Aa as v,Dc as c,Ec as s,Fb as E,Ic as y,Jc as w,Kc as b,Mb as f,Xb as m,fc as t,gc as n,hc as x,lc as M,mb as C,pa as u,qb as l,qc as _,sc as S,yb as L,za as h}from"./chunk-INLK7QV6.js";function X(i,g){i&1&&(t(0,"div",24),x(1,"mat-spinner"),n())}function Y(i,g){i&1&&(t(0,"div"),s(1,"Username is required."),n())}function Z(i,g){i&1&&(t(0,"div"),s(1,"Username must be at most 50 characters long."),n())}function $(i,g){if(i&1&&(t(0,"div",25),f(1,Y,2,0,"div",26)(2,Z,2,0,"div",26),n()),i&2){S();let e=c(18);l(),m("ngIf",e.errors==null?null:e.errors.required),l(),m("ngIf",e.errors==null?null:e.errors.maxlength)}}function ee(i,g){i&1&&(t(0,"div"),s(1,"Password is required."),n())}function te(i,g){i&1&&(t(0,"div"),s(1,"Password must be at most 50 characters long."),n())}function ie(i,g){if(i&1&&(t(0,"div",25),f(1,ee,2,0,"div",26)(2,te,2,0,"div",26),n()),i&2){S();let e=c(29);l(),m("ngIf",e.errors==null?null:e.errors.required),l(),m("ngIf",e.errors==null?null:e.errors.maxlength)}}var _e=(()=>{class i{constructor(){this.SIGNUP_PAGE_INFO=U,this.forgotPasswordAssistanceUrl="https://github.com/nramc/journeys/issues/new?assignees=&labels=bug&projects=&template=bug-report-form.yml&title=%5BBug%5D%3A+",this.authService=u(z),this.loginService=u(K),this.router=u(F),this.activatedRoute=u(k),this.notificationService=u(Q),this.isServiceAvailable=V(u(H).getVersion(),{initialValue:null}),this.form=L({username:"",password:""})}login(e){e.valid&&this.loginService.login(this.form()).subscribe({next:o=>this.onLoginSuccess(this.form(),o),error:o=>{e.resetForm(),this.onLoginFailed(o)}})}onLoginSuccess(e,o){if(o.additionalFactorRequired){let r={credential:e,options:o.securityAttributes};this.router.navigate(["mfa"],{queryParams:this.activatedRoute.snapshot.queryParams,state:r}).then(console.log)}else{let r=this.authService.getUserContextForSuccessfulLogin(o);this.onLogOnSuccess(r)}}onLoginFailed(e){console.error(e),this.notificationService.showError("Login failed. "+e.message)}onLogOnSuccess(e){this.notificationService.showSuccess("Login successful!");let o=this.activatedRoute.snapshot.queryParams.redirectUrl??"/home";this.router.navigateByUrl(o).then(console.log)}loginAsGuest(){this.loginService.loginAsGuest().subscribe({next:e=>{let o=this.authService.getUserContextForSuccessfulLogin(e);this.onLogOnSuccess(o)},error:e=>this.onLoginFailed(e)})}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=E({type:i,selectors:[["app-login"]],decls:38,vars:7,consts:[["loginForm","ngForm"],["username","ngModel"],["password","ngModel"],[1,"flex","min-h-full","flex-col","justify-center","px-6","py-12","lg:px-8"],["class","mask-with-spinner",4,"ngIf"],[1,"sm:mx-auto","sm:w-full","sm:max-w-sm"],["ngSrc","assets/logo/journey-logo-64x64.png","alt","Journey","height","64","width","64",1,"mx-auto","h-10","w-auto"],[1,"text-primary","text-center","text-2xl/9","font-bold","tracking-tight"],[1,"mt-10","sm:mx-auto","sm:w-full","sm:max-w-sm"],[1,"space-y-6",3,"ngSubmit"],[1,"flex","items-center","justify-between"],["for","username",1,"block","text-sm/6","font-medium"],[1,"text-xs"],["tabindex","-1",1,"text-primary","ms-2","hover:underline","font-bold",3,"routerLink"],[1,"mt-2"],["type","email","name","username","id","username","required","","placeholder","Username","autocomplete","username","maxlength","50",1,"block","w-full","rounded-md","bg-white","px-3","py-1.5","text-base","text-gray-900","outline","outline-1","-outline-offset-1","outline-gray-300","placeholder:text-gray-400","focus:outline-2","focus:-outline-offset-2","focus:outline-indigo-600","sm:text-sm/6",3,"ngModelChange","ngModel"],["class","text-sm text-danger",4,"ngIf"],["for","password",1,"block","text-sm/6","font-medium"],["target","_blank","tabindex","-1",1,"text-primary","font-bold","ms-2","hover:underline",3,"href"],["type","password","name","password","id","password","required","","maxlength","50","placeholder","Password","autocomplete","current-password",1,"w-full","rounded-md","bg-white","px-3","py-1.5","text-base","text-gray-900","outline","outline-1","-outline-offset-1","outline-gray-300","placeholder:text-gray-400","focus:outline-2","focus:-outline-offset-2","focus:outline-indigo-600","sm:text-sm/6",3,"ngModelChange","ngModel"],[1,"flex","flex-col","gap-1","text-center"],["mat-flat-button","","type","submit"],[1,"text-dark"],["mat-stroked-button","","type","button",3,"click"],[1,"mask-with-spinner"],[1,"text-sm","text-danger"],[4,"ngIf"]],template:function(o,r){if(o&1){let d=M();t(0,"div",3),f(1,X,2,0,"div",4),t(2,"div",5),x(3,"img",6),t(4,"h2",7),s(5,"Sign in to your account"),n()(),t(6,"div",8)(7,"form",9,0),_("ngSubmit",function(){h(d);let a=c(8);return v(r.login(a))}),t(9,"div")(10,"div",10)(11,"label",11),s(12,"Email address"),n(),t(13,"div",12)(14,"a",13),s(15,"Don't have an account?"),n()()(),t(16,"div",14)(17,"input",15,1),b("ngModelChange",function(a){return h(d),w(r.form().username,a)||(r.form().username=a),v(a)}),n()(),f(19,$,3,2,"div",16),n(),t(20,"div")(21,"div",10)(22,"label",17),s(23,"Password"),n(),t(24,"div",12)(25,"a",18),s(26,"Forgot Password?"),n()()(),t(27,"div",14)(28,"input",19,2),b("ngModelChange",function(a){return h(d),w(r.form().password,a)||(r.form().password=a),v(a)}),n()(),f(30,ie,3,2,"div",16),n(),t(31,"div",20)(32,"button",21),s(33,"Sign In"),n(),t(34,"small",22),s(35,"or"),n(),t(36,"button",23),_("click",function(){return h(d),v(r.loginAsGuest())}),s(37,"Explore as Guest"),n()()()()()}if(o&2){let d=c(8),p=c(18),a=c(29);l(),m("ngIf",!r.isServiceAvailable()),l(13),m("routerLink",r.SIGNUP_PAGE_INFO.path),l(3),y("ngModel",r.form().username),l(2),m("ngIf",p.invalid&&(p.dirty||d.submitted)),l(6),m("href",r.forgotPasswordAssistanceUrl,C),l(3),y("ngModel",r.form().password),l(2),m("ngIf",a.invalid&&(a.dirty||d.submitted))}},dependencies:[W,B,T,q,G,D,R,j,O,P,A,I,N,J],styles:[".mask-with-spinner[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background-color:#3459e61a;display:flex;justify-content:center;align-items:center;z-index:1000}"],changeDetection:0})}}return i})();export{_e as LoginComponent};
