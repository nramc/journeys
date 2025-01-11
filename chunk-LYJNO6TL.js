import{a as kt,b as Vt,c as Nt,d as Ot}from"./chunk-252KPBGM.js";import{a as V,b as Ct}from"./chunk-GINOX4E4.js";import{a as bt}from"./chunk-M44OJ2YX.js";import{a as It}from"./chunk-ZHIJM2JN.js";import{a as dt,b as pt}from"./chunk-K7Y6ZZ33.js";import{o as ft}from"./chunk-WTO4EC35.js";import{a as Z,c as W,d as Rt,f as Pt}from"./chunk-LZAMRPYY.js";import{a as A}from"./chunk-3NHJ6NLR.js";import{b as K,c as $}from"./chunk-YG5UEI36.js";import{a as G,b as H,c as At,f as Q,g as z}from"./chunk-QPVUSXIX.js";import"./chunk-5FSI2IBM.js";import"./chunk-MVCMZTN6.js";import"./chunk-2KWCZQSF.js";import"./chunk-4SIJYGGU.js";import"./chunk-2PPFUFFT.js";import{b as U,g as q,h as _t,i as gt,j as Y,k as xt,p as j,r as ht,s as vt,t as L,u as B}from"./chunk-ZWL263BF.js";import"./chunk-ATLBSCPE.js";import{a as g,c as ut}from"./chunk-FMC26DVU.js";import{a as St,b as Mt,d as Et,f as wt,g as Tt,k as Dt}from"./chunk-LHDSIYDR.js";import{a as R,b as P}from"./chunk-DDNICWYV.js";import{b as k,c as T}from"./chunk-GKHTDWFE.js";import{a as b,e as yt,f as D}from"./chunk-H4VMZNAY.js";import"./chunk-HI24ZEE2.js";import"./chunk-6OB4FHE2.js";import{j as w,r as mt}from"./chunk-65UXW6KM.js";import{Aa as _,Bb as y,Dc as I,Ec as a,Fb as x,Fc as F,Gc as st,Ha as M,Hb as rt,Mb as p,Na as et,Nc as O,Oa as it,Pc as lt,Rc as ct,Xb as l,bc as E,fc as n,gc as i,hc as C,lc as v,mb as nt,pa as m,qb as r,qc as u,sc as d,vb as ot,yb as at,za as f}from"./chunk-INLK7QV6.js";function zt(t,c){if(t&1&&C(0,"img",10),t&2){let e,o=d();l("src","data:image/png;base64,"+((e=o.qrCodeData())==null?null:e.data),nt)}}function Kt(t,c){t&1&&C(0,"mat-spinner",11)}function $t(t,c){t&1&&(n(0,"mat-error")(1,"p"),a(2,"Enter a valid 6-digit code."),i()())}var Ft=(()=>{class t{constructor(){this.destroyRef=m(M),this.dialogRef=m(Z),this.myAccountService=m(A),this.notificationService=m(It),this.qrCodeData=ut(this.myAccountService.generateNewQRCode())}activate(e){if(e.valid&&this.qrCodeData()?.secretKey){let o={secretKey:this.qrCodeData().secretKey,code:e.value};this.myAccountService.activateTotp(o).pipe(g(this.destroyRef)).subscribe({next:s=>this.onSuccess(),error:s=>this.notificationService.showError("Code Invalid")})}}onSuccess(){this.notificationService.showSuccess("2FA activated successfully"),this.dialogRef.close(!0)}cancelActivation(){this.dialogRef.close(!1)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-totp-activation"]],decls:66,vars:3,consts:[["totpCode","ngModel"],[1,"card","border","rounded-lg","shadow-md","pb-4"],[1,"card-header","text-lg","fw-bold","p-5","bg-primary-text"],[1,"card-body"],["expanded",""],[1,"text-sm"],["href","https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en","target","_blank",1,"text-primary","font-bold","underline"],["href","https://www.microsoft.com/en-us/security/mobile-authenticator-app","target","_blank",1,"text-primary","font-bold","underline"],["href","https://authy.com/download/","target","_blank",1,"text-primary","font-bold","underline"],[1,"qr-code-section","flex","justify-center","items-center","mt-4"],["id","qrCode","alt","QR Code",1,"w-48","h-48",3,"src"],["diameter","40"],[1,"secret-key-section","text-center","mt-4"],[1,"font-medium","text-primary","text-sm"],[1,"mt-3"],[1,"w-full"],["matInput","","type","text","inputmode","number","id","totpCode","name","totpCode","aria-label","6 Digit TOTP Code","aria-describedby","totpCodeLabel","autocomplete","off","ngModel","","required","","pattern","[0-9]{6}","maxlength","6",1,"rounded-lg","w-full"],[4,"ngIf"],[1,"flex","gap-4","mt-4","justify-end"],["mat-flat-button","","type","button",3,"click"],["mat-stroked-button","","type","button",3,"click"]],template:function(o,s){if(o&1){let h=v();n(0,"div",1)(1,"div",2),a(2," Two-Factor Authentication (2FA) - TOTP Activation "),i(),n(3,"div",3)(4,"mat-expansion-panel",4)(5,"mat-expansion-panel-header")(6,"mat-panel-title"),a(7," Step 1: Install an Authenticator App "),i()(),n(8,"p"),a(9," To use 2FA, you will need an authenticator app installed on your mobile device. If you don\u2019t already have one, download one of these apps: "),i(),n(10,"ol",5)(11,"li")(12,"a",6),a(13,"Google Authenticator (iOS and Android)"),i()(),n(14,"li")(15,"a",7),a(16,"Microsoft Authenticator (iOS and Android)"),i()(),n(17,"li")(18,"a",8),a(19," Authy (iOS and Android)"),i()()()(),n(20,"mat-expansion-panel",4)(21,"mat-expansion-panel-header")(22,"mat-panel-title"),a(23," Step 2: Scan the QR Code "),i()(),n(24,"ol",5)(25,"li"),a(26,"Open your authenticator app."),i(),n(27,"li"),a(28,'Tap the "+" icon to add a new account.'),i(),n(29,"li"),a(30,"Select the option to scan a QR code."),i(),n(31,"li"),a(32,"Scan the QR code displayed below using your app."),i()(),n(33,"div",9),p(34,zt,1,1,"img",10)(35,Kt,1,0,"mat-spinner",11),i(),n(36,"div",12)(37,"p",13),a(38," Or enter the key manually: "),n(39,"strong"),a(40),i()()()(),n(41,"mat-expansion-panel",4)(42,"mat-expansion-panel-header")(43,"mat-panel-title"),a(44," Step 3: Confirm the Verification Code "),i()(),n(45,"ol",5)(46,"li"),a(47,"After scanning the QR code, your authenticator app will generate a 6-digit verification code."),i(),n(48,"li"),a(49,"Enter the 6-digit code in the field below to activate 2FA."),i(),n(50,"li"),a(51,'Click the "Activate" button to complete the process.'),i(),n(52,"li"),a(53,"You\u2019ll receive a confirmation message once 2FA is successfully activated."),i()(),n(54,"div",14)(55,"mat-form-field",15)(56,"mat-label"),a(57,"Code"),i(),C(58,"input",16,0),p(60,$t,3,0,"mat-error",17),i()(),n(61,"div",18)(62,"button",19),u("click",function(){f(h);let Bt=I(59);return _(s.activate(Bt))}),a(63,"Activate"),i(),n(64,"button",20),u("click",function(){return f(h),_(s.cancelActivation())}),a(65,"Cancel"),i()()()()()}if(o&2){let h,S=I(59);r(34),E(s.qrCodeData()?34:35),r(6),F((h=s.qrCodeData())==null?null:h.secretKey),r(20),l("ngIf",S.invalid&&S.touched)}},dependencies:[B,U,q,j,vt,L,Y,pt,dt,Ot,kt,Vt,Nt,D,b,w,z,Q,G,H,$,K],styles:[".card-body[_ngcontent-%COMP%]{max-height:90vh;overflow:scroll}mat-expansion-panel[_ngcontent-%COMP%]{margin:.5rem 0}"],changeDetection:0})}}return t})();var J=(()=>{class t{constructor(){this.roles=et.required({alias:"appDisableIfNoRoleExists"}),this.el=m(it),this.renderer=m(ot),this.authService=m(T)}ngOnInit(){this.checkRoleAndDisableIfRequired()}checkRoleAndDisableIfRequired(){this.authService.hasAnyRole(this.roles())?(this.renderer.setProperty(this.el.nativeElement,"disabled",!1),this.renderer.setAttribute(this.el.nativeElement,"disabled","false"),this.el.nativeElement.disabled=!1):(this.renderer.setProperty(this.el.nativeElement,"disabled",!0),this.renderer.setAttribute(this.el.nativeElement,"disabled","true"),this.el.nativeElement.disabled=!0)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275dir=rt({type:t,selectors:[["","appDisableIfNoRoleExists",""]],inputs:{roles:[1,"appDisableIfNoRoleExists","roles"]}})}}return t})();var X=(()=>{class t{constructor(){this.dialogRef=m(Z)}confirmAction(){this.dialogRef.close(!0)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-confirmation-dialog"]],decls:17,vars:0,consts:[[1,"confirmation-card","shadow-lg","rounded-xl","border","border-primary"],[1,"text-primary"],[1,"!py-5"],[1,"text-sm","text-red-600","font-medium","mt-2"],["align","end",1,"gap-2","py-4"],["mat-flat-button","","type","button",3,"click"],["mat-stroked-button","","type","button","mat-dialog-close","false"]],template:function(o,s){o&1&&(n(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),a(3,"Confirmation Required"),i()(),n(4,"mat-card-content",2)(5,"p",1),a(6,"Are you sure you want to proceed with this action?"),i(),n(7,"p",3),a(8," This action "),n(9,"strong"),a(10,"cannot be undone"),i(),a(11,". "),i()(),n(12,"mat-card-actions",4)(13,"button",5),u("click",function(){return s.confirmAction()}),a(14,"Confirm"),i(),n(15,"button",6),a(16,"Cancel"),i()()())},dependencies:[Rt,b,Dt,St,wt,Et,Tt,Mt],encapsulation:2,changeDetection:0})}}return t})();var Ut=t=>[t];function Zt(t,c){t&1&&(n(0,"span",4)(1,"mat-icon"),a(2,"check_circle"),i(),a(3," Activated "),i())}function Wt(t,c){t&1&&(n(0,"span",5)(1,"mat-icon"),a(2,"error"),i(),a(3," Not Activated "),i())}function Jt(t,c){if(t&1){let e=v();n(0,"button",11),u("click",function(){f(e);let s=d(3);return _(s.setupTotp())}),a(1," Activate "),i()}}function Xt(t,c){t&1&&(n(0,"div")(1,"p",12),a(2,"You do have access to activate/deactivate TOTP for the account."),i()())}function te(t,c){if(t&1&&(n(0,"div",8),p(1,Jt,2,0,"button",9)(2,Xt,3,0,"div",10),i()),t&2){let e=d(2);r(),l("ngIf",e.authService.hasAuthenticatedRole()),r(),l("ngIf",!e.authService.hasAuthenticatedRole())}}function ee(t,c){if(t&1){let e=v();n(0,"div",13)(1,"button",14),u("click",function(){f(e);let s=d(2);return _(s.confirmTotpDeactivation())}),a(2," Deactivate "),i(),n(3,"button",15),u("click",function(){f(e);let s=d(2);return _(s.testCode())}),a(4," Test "),i()()}if(t&2){let e=d(2);r(),l("appDisableIfNoRoleExists",O(2,Ut,e.Role.AUTHENTICATED_USER)),r(2),l("appDisableIfNoRoleExists",O(4,Ut,e.Role.AUTHENTICATED_USER))}}function ie(t,c){if(t&1&&(n(0,"section",1)(1,"div",2)(2,"h4",3),a(3,"Authenticator TOTP"),i(),n(4,"div"),p(5,Zt,4,0,"span",4)(6,Wt,4,0,"span",5),i()(),p(7,te,3,2,"div",6)(8,ee,5,6,"div",7),i()),t&2){let e=d();r(5),E(e.isTotpActive()?5:6),r(2),l("ngIf",!e.isTotpActive()),r(),l("ngIf",e.isTotpActive())}}var Yt=(()=>{class t{constructor(){this.destroyRef=m(M),this.dialog=m(W),this.myAccountService=m(A),this.authService=m(T),this.isTotpActive=y(!1),this.isLoadingCompleted=y(!1),this.Role=k}setupTotp(){this.dialog.open(Ft,{disableClose:!0}).afterClosed().pipe(g(this.destroyRef)).subscribe(o=>{this.getCurrentTotpStatus()})}ngOnInit(){this.getCurrentTotpStatus()}getCurrentTotpStatus(){this.myAccountService.getTotpStatus().pipe(g(this.destroyRef)).subscribe({next:e=>{this.isTotpActive.set(e.active),this.isLoadingCompleted.set(!0)},error:e=>{console.log(e),this.isLoadingCompleted.set(!0)}})}testCode(){this.dialog.open(Pt,{disableClose:!0}).afterClosed().pipe(g(this.destroyRef)).subscribe(o=>{console.log("Result:",o)})}confirmTotpDeactivation(){this.dialog.open(X,{disableClose:!0}).afterClosed().pipe(g(this.destroyRef)).subscribe(o=>{o===!0&&this.deactivateTotp()})}deactivateTotp(){this.myAccountService.deactivateTotp().pipe(g(this.destroyRef)).subscribe({next:e=>this.getCurrentTotpStatus(),error:e=>console.log(e)})}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-my-totp-settings"]],inputs:{isTotpActive:[1,"isTotpActive"],isLoadingCompleted:[1,"isLoadingCompleted"]},outputs:{isTotpActive:"isTotpActiveChange",isLoadingCompleted:"isLoadingCompletedChange"},decls:1,vars:1,consts:[["class","container mx-auto mt-4 p-6 border border-opacity-50 rounded-lg shadow-lg border-primary flex flex-col",4,"ngIf"],[1,"container","mx-auto","mt-4","p-6","border","border-opacity-50","rounded-lg","shadow-lg","border-primary","flex","flex-col"],[1,"flex","items-center","justify-between","mb-4"],[1,"text-primary","text-lg","font-bold"],["matTooltip","Activated",1,"text-success","flex","items-center","gap-1","text-sm"],["matTooltip","Not Activated",1,"text-danger","flex","items-center","gap-1","text-sm"],["class","flex justify-start",4,"ngIf"],["class","flex gap-4 mt-4",4,"ngIf"],[1,"flex","justify-start"],["mat-flat-button","","type","button",3,"click",4,"ngIf"],[4,"ngIf"],["mat-flat-button","","type","button",3,"click"],[1,"text-sm","text-primary","italic"],[1,"flex","gap-4","mt-4"],["mat-button","","type","button",3,"click","appDisableIfNoRoleExists"],["mat-stroked-button","","type","button",3,"click","appDisableIfNoRoleExists"]],template:function(o,s){o&1&&p(0,ie,9,3,"section",0),o&2&&l("ngIf",s.isLoadingCompleted())},dependencies:[w,J,Ct,V,P,R,D,b],encapsulation:2,changeDetection:0})}}return t})();var ne=t=>[t];function oe(t,c){t&1&&(n(0,"span",5)(1,"mat-icon"),a(2,"check_circle"),i(),a(3," Activated "),i())}function ae(t,c){t&1&&(n(0,"span",6)(1,"mat-icon"),a(2,"error"),i(),a(3," Not Activated "),i())}function re(t,c){t&1&&(n(0,"div",9)(1,"p",10),a(2," Multi-Factor Authentication activation requires one of the following security measures to be enabled or verified: "),i(),n(3,"ul",11)(4,"li"),a(5,"Email Address"),i(),n(6,"li"),a(7,"TOTP (Time-Based One-Time Password)"),i()()())}function se(t,c){if(t&1){let e=v();n(0,"button",16),u("click",function(){f(e);let s=d(3);return _(s.enableMfa())}),a(1," Activate "),i()}}function le(t,c){t&1&&(n(0,"div")(1,"p",17),a(2,"You do have access to activate/deactivate Multi-Factor authentication for the account."),i()())}function ce(t,c){t&1&&(n(0,"p",18),a(1," Unable to activate MFA. Please check prerequisite conditions before activating MFA. "),i())}function me(t,c){if(t&1&&(n(0,"div",12),p(1,se,2,0,"button",13)(2,le,3,0,"div",14)(3,ce,2,0,"p",15),i()),t&2){let e=d(2);r(),l("ngIf",e.authService.hasAuthenticatedRole()),r(),l("ngIf",!e.authService.hasAuthenticatedRole()),r(),l("ngIf",e.isErrorOccurred())}}function de(t,c){t&1&&(n(0,"p",18),a(1," Unable to deactivate MFA. Please try again later. "),i())}function pe(t,c){if(t&1){let e=v();n(0,"div",12)(1,"div",19)(2,"button",20),u("click",function(){f(e);let s=d(2);return _(s.confirmMfaDeactivation())}),a(3,"Deactivate "),i()(),p(4,de,2,0,"p",15),i()}if(t&2){let e=d(2);r(2),l("appDisableIfNoRoleExists",O(2,ne,e.Role.AUTHENTICATED_USER)),r(2),l("ngIf",e.isErrorOccurred())}}function ue(t,c){if(t&1&&(n(0,"section",1)(1,"div",2)(2,"h4",3),a(3,"Multi-Factor Authentication"),i(),n(4,"div",4),p(5,oe,4,0,"span",5)(6,ae,4,0,"span",6),i()(),p(7,re,8,0,"div",7)(8,me,4,3,"div",8)(9,pe,5,4,"div",8),i()),t&2){let e,o,s,h,S=d();r(5),E((e=S.userData())!=null&&e.mfaEnabled?5:6),r(2),l("ngIf",!((o=S.userData())!=null&&o.mfaEnabled)),r(),l("ngIf",!((s=S.userData())!=null&&s.mfaEnabled)),r(),l("ngIf",(h=S.userData())==null?null:h.mfaEnabled)}}var jt=(()=>{class t{constructor(){this.Role=k,this.destroyRef=m(M),this.dialog=m(W),this.myAccountService=m(A),this.authService=m(T),this.userData=y(),this.isErrorOccurred=y(!0)}ngOnInit(){this.fetchCurrentUserData()}fetchCurrentUserData(){this.myAccountService.getProfileData().pipe(g(this.destroyRef)).subscribe({next:e=>{this.userData.set(e),this.isErrorOccurred.set(!1)},error:e=>console.log(e)})}enableMfa(){this.changeMfa(!0)}confirmMfaDeactivation(){this.dialog.open(X,{disableClose:!0}).afterClosed().pipe(g(this.destroyRef)).subscribe(o=>{o===!0&&this.changeMfa(!1)})}changeMfa(e){this.myAccountService.changeMfaStatus(e).pipe(g(this.destroyRef)).subscribe({next:o=>this.fetchCurrentUserData(),error:o=>{console.log(o),this.isErrorOccurred.set(!0)}})}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-my-mfa-settings"]],inputs:{userData:[1,"userData"],isErrorOccurred:[1,"isErrorOccurred"]},outputs:{userData:"userDataChange",isErrorOccurred:"isErrorOccurredChange"},decls:1,vars:1,consts:[["class","container mx-auto mt-4 p-6 border border-opacity-50 rounded-lg shadow-lg border-primary flex flex-col",4,"ngIf"],[1,"container","mx-auto","mt-4","p-6","border","border-opacity-50","rounded-lg","shadow-lg","border-primary","flex","flex-col"],[1,"flex","items-center","justify-between","mb-4"],[1,"text-primary","text-lg","font-bold"],[1,"status-badge","flex","items-center","ml-3"],["matTooltip","Activated",1,"text-success","flex","items-center","gap-1","text-sm"],["matTooltip","Not Activated",1,"text-danger","flex","items-center","gap-1","text-sm"],["class","text-primary text-sm font-medium mb-4",4,"ngIf"],["class","flex flex-col",4,"ngIf"],[1,"text-primary","text-sm","font-medium","mb-4"],[1,"mb-2"],[1,"list-disc","pl-5"],[1,"flex","flex-col"],["mat-flat-button","","type","button","class","w-max",3,"click",4,"ngIf"],[4,"ngIf"],["class","text-danger text-sm font-bold mt-2",4,"ngIf"],["mat-flat-button","","type","button",1,"w-max",3,"click"],[1,"text-sm","text-primary","italic"],[1,"text-danger","text-sm","font-bold","mt-2"],[1,"flex","gap-4"],["mat-button","","type","button",1,"w-max",3,"click","appDisableIfNoRoleExists"]],template:function(o,s){o&1&&p(0,ue,10,4,"section",0),o&2&&l("ngIf",s.userData())},dependencies:[w,J,V,P,R,D,b],encapsulation:2,changeDetection:0})}}return t})();function fe(t,c){t&1&&(n(0,"span",6)(1,"mat-icon"),a(2,"check_circle"),i(),a(3," Compliant "),i())}function _e(t,c){t&1&&(n(0,"span",7)(1,"mat-icon"),a(2,"error"),i(),a(3," Non-Compliant "),i())}function ge(t,c){if(t&1&&(n(0,"p"),a(1," Current Password Changed at "),n(2,"span",10),a(3),lt(4,"date"),i()()),t&2){let e,o=d(2);r(3),st(" ",ct(4,1,(e=o.userData())==null?null:e.passwordChangedAt,"dd.MM.YYYY, h:mm:ss a z")," ")}}function xe(t,c){if(t&1){let e=v();n(0,"button",12),u("click",function(){f(e);let s=d(3);return _(s.editMode.set(!0))}),a(1," Change Password "),i()}}function he(t,c){t&1&&(n(0,"div")(1,"p",13),a(2,"You do have access to change password for the account."),i()())}function ve(t,c){if(t&1&&(n(0,"div"),p(1,xe,2,0,"button",11)(2,he,3,0,"div",9),i()),t&2){let e=d(2);r(),l("ngIf",e.authService.hasAuthenticatedRole()),r(),l("ngIf",!e.authService.hasAuthenticatedRole())}}function ye(t,c){t&1&&(n(0,"mat-error"),a(1," Password must be 8-50 characters long, include uppercase, lowercase, number, and special character. "),i())}function Ce(t,c){t&1&&(n(0,"div",24),a(1," Invalid Password. Valid Password should contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 50 characters long. "),i())}function be(t,c){if(t&1){let e=v();n(0,"div")(1,"form",14),u("ngSubmit",function(){f(e);let s=I(9),h=d(2);return _(h.savePassword(s))}),C(2,"input",15,0),n(4,"div",16)(5,"mat-form-field",17)(6,"mat-label"),a(7,"New Password"),i(),C(8,"input",18,1),n(10,"button",19),u("click",function(){f(e);let s=d(2);return _(s.togglePasswordVisibility())}),n(11,"mat-icon"),a(12),i()(),p(13,ye,2,0,"mat-error",9),i()(),p(14,Ce,2,0,"div",20),n(15,"div",21)(16,"button",22),u("click",function(){f(e);let s=d(2);return _(s.editMode.set(!1))}),a(17,"Cancel"),i(),n(18,"button",23),a(19,"Save"),i()()()()}if(t&2){let e=I(9),o=d(2);r(2),l("hidden",!0)("ngModel",o.userData().username),r(6),l("type",o.showPassword()?"text":"password"),r(4),F(o.showPassword()?"visibility_off":"visibility"),r(),l("ngIf",e.invalid&&e.touched),r(),l("ngIf",o.isErrorOccurred()),r(4),l("disabled",e.invalid)}}function Se(t,c){if(t&1&&(n(0,"section",3)(1,"div",4)(2,"h4",5),a(3,"Password"),i(),n(4,"div"),p(5,fe,4,0,"span",6)(6,_e,4,0,"span",7),i()(),n(7,"div",8)(8,"p"),a(9,"We recommend changing your password at least every 3 months to enhance the security of your account."),i(),p(10,ge,5,4,"p",9),i(),p(11,ve,3,2,"div",9)(12,be,20,7,"div",9),i()),t&2){let e,o=d();r(5),E(o.isPasswordComplaint()?5:6),r(5),l("ngIf",(e=o.userData())==null?null:e.passwordChangedAt),r(),l("ngIf",!o.editMode()),r(),l("ngIf",o.editMode()&&o.userData())}}var Lt=(()=>{class t{constructor(){this.destroyRef=m(M),this.myAccountService=m(A),this.authService=m(T),this.userData=y(),this.isErrorOccurred=y(!0),this.editMode=y(!1),this.showPassword=at(!1),this.Role=k}ngOnInit(){this.fetchCurrentUserData()}fetchCurrentUserData(){this.myAccountService.getProfileData().pipe(g(this.destroyRef)).subscribe({next:e=>{this.userData.set(e),this.isErrorOccurred.set(!1),this.editMode.set(!1)},error:e=>console.log(e)})}savePassword(e){e.valid?this.myAccountService.changePassword(e.value).pipe(g(this.destroyRef)).subscribe({next:o=>this.fetchCurrentUserData(),error:o=>{console.log(o),this.isErrorOccurred.set(!0)}}):this.isErrorOccurred.set(!0)}isPasswordComplaint(){return this.userData()?.passwordChangedAt?new Date().getFullYear()-new Date(Date.parse(this.userData().passwordChangedAt)).getFullYear()*12<=3:!1}togglePasswordVisibility(){this.showPassword.update(e=>!e)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-my-password-settings"]],inputs:{userData:[1,"userData"],isErrorOccurred:[1,"isErrorOccurred"],editMode:[1,"editMode"]},outputs:{userData:"userDataChange",isErrorOccurred:"isErrorOccurredChange",editMode:"editModeChange"},decls:1,vars:1,consts:[["username","ngModel"],["newPassword","ngModel"],["class","container mx-auto mt-4 p-6 border rounded-lg shadow-lg border-opacity-50 border-primary",4,"ngIf"],[1,"container","mx-auto","mt-4","p-6","border","rounded-lg","shadow-lg","border-opacity-50","border-primary"],[1,"flex","items-center","justify-between","mb-4"],[1,"text-primary","text-lg","font-bold"],["matTooltip","Compliant",1,"text-success","flex","items-center","gap-1","text-sm"],["matTooltip","Non-Compliant",1,"text-danger","flex","items-center","gap-1","text-sm"],[1,"text-primary","text-sm","mb-4","flex","flex-col","gap-2"],[4,"ngIf"],[1,"font-bold","underline"],["mat-flat-button","","type","button",3,"click",4,"ngIf"],["mat-flat-button","","type","button",3,"click"],[1,"text-sm","text-primary","italic"],[1,"space-y-4",3,"ngSubmit"],["type","email","name","username","id","username","required","","placeholder","Username","autocomplete","username",3,"hidden","ngModel"],[1,"relative"],[1,"w-full"],["matInput","","id","newPassword","name","newPassword","ngModel","","autocomplete","new-password","required","","minlength","8","pattern","^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@.#$!%*?&^])[A-Za-z\\d@.#$!%*?&]{8,50}$",3,"type"],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","text-danger text-sm font-bold",4,"ngIf"],[1,"flex","justify-end","gap-2"],["mat-stroked-button","","type","button",3,"click"],["mat-raised-button","","type","submit",3,"disabled"],[1,"text-danger","text-sm","font-bold"]],template:function(o,s){o&1&&p(0,Se,13,4,"section",2),o&2&&l("ngIf",s.userData())},dependencies:[w,mt,B,xt,U,q,_t,j,ht,L,Y,gt,V,z,Q,G,H,At,P,R,D,b,yt,$,K],encapsulation:2,changeDetection:0})}}return t})();var Ji=(()=>{class t{constructor(){this.MY_SECURITY_SETTINGS_PAGE_INFO=ft}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-my-account-settings-page"]],decls:7,vars:1,consts:[[3,"pageInfo"],[1,"flex","flex-col"]],template:function(o,s){o&1&&(n(0,"header"),C(1,"app-page-header",0),i(),n(2,"main")(3,"div",1),C(4,"app-my-password-settings")(5,"app-my-totp-settings")(6,"app-my-mfa-settings"),i()()),o&2&&(r(),l("pageInfo",s.MY_SECURITY_SETTINGS_PAGE_INFO))},dependencies:[bt,Yt,jt,Lt],encapsulation:2,changeDetection:0})}}return t})();export{Ji as MyAccountSettingsPageComponent};
