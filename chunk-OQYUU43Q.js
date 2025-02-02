import{a as ee,b as te,c as ie,d as oe,e as ne,f as re}from"./chunk-IISKBEEL.js";import"./chunk-FJDNKBZW.js";import{b as Y}from"./chunk-YUWLRQ2A.js";import{a as K,f as Q,g as X}from"./chunk-3L7FTIZC.js";import"./chunk-BFKDL6AO.js";import{a as Z}from"./chunk-Z6JRJPTO.js";import"./chunk-3W4XQ2AS.js";import"./chunk-ESNPP4F3.js";import"./chunk-2PPFUFFT.js";import{b as O,g as j,h as F,i as U,j as N,k as L,p as P,s as q,t as B,u as W}from"./chunk-6V4FY2EC.js";import{a as M}from"./chunk-P4C6YQ3V.js";import{a as c}from"./chunk-GX5PCDDC.js";import{a as z,b as G,d as H,g as $,k as J}from"./chunk-U6VOSXN3.js";import{a as A}from"./chunk-WMLNNED6.js";import{c as x}from"./chunk-G6LWCROE.js";import{a as b}from"./chunk-UVG5L6RS.js";import"./chunk-OO6UETQH.js";import{a as T,c as k}from"./chunk-OBJFDV2T.js";import{c as R}from"./chunk-INCHVP6V.js";import{j as S}from"./chunk-TJFKVA4M.js";import{Bc as E,Cc as a,Db as y,Fa as h,Kb as u,Vb as d,dc as n,ec as r,fc as I,ha as w,jc as C,na as s,oc as p,pb as l,qb as g,qc as V,xa as m,ya as f,zb as v}from"./chunk-BGW2GSJU.js";var se=(()=>{class o{constructor(){this.httpClient=s(R),this.authService=s(x)}sendConfirmationCode(e){let t=this.authService.getCurrentUserContext(),i=e?"Basic "+btoa(e.username+":"+e.password):`Bearer ${t.accessToken}`;return this.httpClient.post(M.journeyApi+"/sendEmailCode",{},{headers:{Authorization:i}})}verifyConfirmationCode(e){let t=this.authService.getCurrentUserContext();return this.httpClient.post(M.journeyApi+"/verifyEmailCode",{code:e},{headers:{Authorization:`Bearer ${t.accessToken}`}})}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function pe(o,_){o&1&&(n(0,"p",16),a(1," Code invalid. Please enter a valid code. "),r())}function ue(o,_){o&1&&(n(0,"p",17),a(1," Code has been sent successfully to the registered email. If you haven't received it, click Send again after 60 seconds. "),r())}var le=(()=>{class o{constructor(){this.destroyRef=s(h),this.emailConfirmationCodeService=s(se),this.loginService=s(Z),this.authService=s(x),this.dialogRef=s(ee),this.credential=s(te),this.isCodeSent=v(!1),this.canSendCode=v(!0),this.isCodeValid=v(!0)}confirmCode(e,t){this.isCodeValid.set(!0),e.validity.valid?this.verifyCode(t,e):this.isCodeValid.set(!1)}verifyCode(e,t){e.disabled=!0,this.credential?this.verifyCodeInUnauthenticatedContext(t,e):this.verifyCodeInAuthenticatedContext(t,e)}verifyCodeInUnauthenticatedContext(e,t){this.loginService.mfa(e.value,"EMAIL_ADDRESS",this.credential).pipe(c(this.destroyRef)).subscribe({next:i=>{this.authService.getUserContextForSuccessfulLogin(i),this.onVerificationSuccess(t)},error:i=>this.onVerificationError(i,t)})}verifyCodeInAuthenticatedContext(e,t){this.emailConfirmationCodeService.verifyConfirmationCode(e.value).pipe(c(this.destroyRef)).subscribe({next:i=>this.onVerificationSuccess(t),error:i=>this.onVerificationError(i,t)})}onVerificationSuccess(e){e.disabled=!0,console.log("code verified successfully"),this.dialogRef.close(!0)}onVerificationError(e,t){console.log(e),this.isCodeValid.set(!1),t.disabled=!1}sendCode(){this.canSendCode.set(!1),this.emailConfirmationCodeService.sendConfirmationCode(this.credential).pipe(c(this.destroyRef)).subscribe({next:e=>this.onSentSuccess(),error:e=>this.onSentError(e)})}onSentError(e){console.log(e),this.canSendCode.set(!0)}onSentSuccess(){this.isCodeSent.set(!0),setTimeout(()=>this.canSendCode.set(!0),1e3*60),console.log("Code has been sent successfully to register email")}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=y({type:o,selectors:[["app-email-code-verification"]],inputs:{isCodeSent:[1,"isCodeSent"],canSendCode:[1,"canSendCode"],isCodeValid:[1,"isCodeValid"]},outputs:{isCodeSent:"isCodeSentChange",canSendCode:"canSendCodeChange",isCodeValid:"isCodeValidChange"},decls:34,vars:3,consts:[["codeForm","ngForm"],["confirmationCode",""],["confirmButton",""],[1,"space-y-6",3,"submit"],[1,"bg-gradient-to-r","from-blue-500","to-blue-700","text-white","text-xl","font-semibold","!p-4","rounded-t-lg"],[1,"text-primary"],[1,"list-decimal","list-inside","text-base","mb-4"],[1,"px-1","rounded-sm","font-bold","italic","text-sm"],["appearance","fill",1,"w-full"],["matInput","","type","text","inputmode","numeric","id","confirmationCode","name","confirmationCode","required","","pattern","[0-9]{6,6}","maxlength","6","ngModel","","autocomplete","off",1,""],["class","text-red-500 text-sm text-center mt-2",4,"ngIf"],[1,"flex","space-x-4","mt-6","justify-center"],["mat-raised-button","","type","button","mat-dialog-close","false"],["mat-raised-button","","type","button",3,"click","disabled"],["mat-raised-button","","type","submit"],["class","text-green-600 text-sm font-bold mt-4",4,"ngIf"],[1,"text-red-500","text-sm","text-center","mt-2"],[1,"text-green-600","text-sm","font-bold","mt-4"]],template:function(t,i){if(t&1){let D=C();n(0,"form",3,0),p("submit",function(){m(D);let ce=E(23),me=E(31);return f(i.confirmCode(ce,me))}),n(2,"mat-card")(3,"mat-card-header",4)(4,"mat-card-title"),a(5,"Email Code Confirmation Required"),r()(),n(6,"mat-card-content",5)(7,"p"),a(8,"To complete verification, please follow below steps:"),r(),n(9,"ol",6)(10,"li"),a(11,"Click the "),n(12,"code",7),a(13,"Send"),r(),a(14," button to receive a verification code in your registered email. "),r(),n(15,"li"),a(16,"Check your email for the verification code."),r(),n(17,"li"),a(18,'Enter the code in the field below and click "Confirm" to complete the verification.'),r()(),n(19,"mat-form-field",8)(20,"mat-label"),a(21,"Code"),r(),I(22,"input",9,1),r(),u(24,pe,2,0,"p",10),n(25,"div",11)(26,"button",12),a(27,"Cancel"),r(),n(28,"button",13),p("click",function(){return m(D),f(i.sendCode())}),a(29,"Send"),r(),n(30,"button",14,2),a(32,"Confirm"),r()(),u(33,ue,2,0,"p",15),r()()()}t&2&&(l(24),d("ngIf",!i.isCodeValid()),l(4),d("disabled",!i.canSendCode()),l(5),d("ngIf",i.isCodeSent()))},dependencies:[ne,oe,W,L,O,j,F,P,q,B,N,U,S,b,X,Q,K,J,z,H,$,G,Y],encapsulation:2,changeDetection:0})}}return o})();function Ce(o,_){if(o&1){let e=C();n(0,"div",5)(1,"button",6),p("click",function(){m(e);let i=V();return f(i.continueWithTotpVerification())}),a(2," Using Mobile Authenticator "),n(3,"mat-icon",7),a(4,"screen_lock_portrait"),r()()()}}function he(o,_){if(o&1){let e=C();n(0,"div",5)(1,"button",6),p("click",function(){m(e);let i=V();return f(i.continueWithEmailCodeVerification())}),a(2," Using Email Code "),n(3,"mat-icon",7),a(4,"mail_lock"),r()()()}}var Xe=(()=>{class o{constructor(e,t,i){this.router=e,this.dialog=t,this.activatedRoute=i,this.destroyRef=s(h),this.mfaOptions=this.router.getCurrentNavigation()?.extras?.state}continueWithTotpVerification(){this.dialog.open(re,{data:this.mfaOptions.credential,disableClose:!0}).afterClosed().pipe(c(this.destroyRef)).subscribe(t=>this.onCloseCallback(t))}continueWithEmailCodeVerification(){this.dialog.open(le,{data:this.mfaOptions.credential,disableClose:!0}).afterClosed().pipe(c(this.destroyRef)).subscribe(t=>this.onCloseCallback(t))}onCloseCallback(e){if(e===!0){let t=this.activatedRoute.snapshot.queryParams.redirectUrl??"/home";this.router.navigateByUrl(t).then(console.log)}}static{this.\u0275fac=function(t){return new(t||o)(g(k),g(ie),g(T))}}static{this.\u0275cmp=y({type:o,selectors:[["app-display-mfa-options"]],decls:7,vars:2,consts:[[1,"container","mx-auto","h-full","w-full","mt-4"],[1,"flex","flex-col","items-center","justify-center","space-y-4"],[1,"p-2"],[1,"text-lg","font-bold","text-primary"],["class","w-full px-4 text-center",4,"ngIf"],[1,"w-full","px-4","text-center"],["mat-flat-button","","type","button",1,"flex","items-center","justify-center","md:w-1/2","w-full","p-3","text-sm","font-bold","rounded-full",3,"click"],[1,"ml-2"]],template:function(t,i){t&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"h5",3),a(4," Select Multi-factor Authentication Type to verify your identity "),r()(),u(5,Ce,5,0,"div",4)(6,he,5,0,"div",4),r()()),t&2&&(l(5),d("ngIf",i.mfaOptions==null||i.mfaOptions.options==null?null:i.mfaOptions.options.includes("TOTP")),l(),d("ngIf",i.mfaOptions==null||i.mfaOptions.options==null?null:i.mfaOptions.options.includes("EMAIL_ADDRESS")))},dependencies:[A,b,S],styles:[".mfa-option[_ngcontent-%COMP%]{width:80%;height:3rem}"],changeDetection:0})}}return o})();export{Xe as DisplayMfaOptionsComponent};
