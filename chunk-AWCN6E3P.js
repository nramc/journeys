import{a as I}from"./chunk-X3DKNGXI.js";import{a as R}from"./chunk-E7ICUXXM.js";import{a as ie}from"./chunk-QS7RPCLH.js";import{a as A}from"./chunk-VSQTGOJW.js";import{a as ne}from"./chunk-TBFZGPPR.js";import"./chunk-YGHMYHO4.js";import{p as B}from"./chunk-SNVCUL6N.js";import{a as Y,c as L,d as G,f as oe}from"./chunk-7QCJPMRQ.js";import{a as T}from"./chunk-MSQHH3PV.js";import{a as g}from"./chunk-AOMZEFOI.js";import"./chunk-LDRZWZFG.js";import"./chunk-JA4JGXDI.js";import"./chunk-NWXFWB74.js";import{c as k,h as O,i as J,j as X,k as V,l as ee,t as F,w as te,x as U,y as q}from"./chunk-6OHNXZFP.js";import"./chunk-BZBETYD3.js";import{b as W}from"./chunk-R6MPEOK3.js";import"./chunk-A2N4MVAO.js";import"./chunk-HLWHUVVB.js";import{k as M,s as Z}from"./chunk-T74QBNJG.js";import{Ac as b,Bb as C,Cc as S,Da as _,Ea as x,Fc as K,Hb as u,Hc as $,Ka as w,Mb as s,Sb as D,Xb as n,Yb as i,Zb as m,bc as y,gc as f,ic as c,kb as j,ob as l,qa as p,sa as v,sc as P,tc as a,uc as z}from"./chunk-VRY62XD3.js";var ae=(()=>{class e{constructor(){this.destroyRef=p(w),this.dialogRef=p(Y),this.myAccountService=p(T),this.notificationService=p(ne),this.qrCodeData=C()}ngOnInit(){this.myAccountService.generateNewQRCode().pipe(g(this.destroyRef)).subscribe({next:t=>this.qrCodeData.set(t),error:t=>console.log(t)})}activate(t){if(t.validity.valid&&this.qrCodeData()?.secretKey){let o={secretKey:this.qrCodeData().secretKey,code:t.value};this.myAccountService.activateTotp(o).pipe(g(this.destroyRef)).subscribe({next:r=>this.onSuccess(),error:r=>this.notificationService.showError("Code Invalid")})}}onSuccess(){this.notificationService.showSuccess("2FA activated successfully"),this.dialogRef.close(!0)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-totp-activation"]],inputs:{qrCodeData:[1,"qrCodeData"]},outputs:{qrCodeData:"qrCodeDataChange"},standalone:!0,features:[b],decls:66,vars:2,consts:[["totpCode",""],[1,"card","pb-4"],[1,"card-header","bg-primary","text-light"],[1,"card-body"],[1,"card-text"],[1,"step","step-1"],[1,"d-flex","flex-column"],["data-bs-toggle","collapse","href","#collapseStep1","aria-expanded","true","aria-controls","collapseStep1",1,"col-12","gradient-bg-light","p-2","fs-6","text-decoration-none"],["id","collapseStep1",1,"collapse","show"],[1,"small"],["href","https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en","target","_blank"],["href","https://www.microsoft.com/en-us/security/mobile-authenticator-app","target","_blank"],["href","https://authy.com/download/","target","_blank"],[1,"step","step-2"],["data-bs-toggle","collapse","href","#collapseStep2","aria-expanded","true","aria-controls","collapseStep2",1,"col-12","gradient-bg-light","p-2","fs-6","text-decoration-none"],["id","collapseStep2",1,"collapse","show"],[1,"qr-code-section","text-center"],["id","qrCode","width","200px","height","200px","alt","QR",3,"src"],[1,"secret-key-section","text-center"],[1,"fw-bold","text-primary","small"],[3,"textContent"],[1,"step","step-3"],["data-bs-toggle","collapse","href","#collapseStep3","aria-expanded","true","aria-controls","collapseStep3",1,"col-12","gradient-bg-light","p-2","fs-6","text-decoration-none"],["id","collapseStep3",1,"collapse","show"],[1,"input-group","mb-3"],["id","totpCodeLabel",1,"input-group-text"],["type","text","aria-label","6 Digit TOTP Code","aria-describedby","totpCodeLabel","id","totpCode","name","totpCode","ngModel","","required","","pattern","[0-9]{6,6}","maxlength","6","min","6",1,"form-control"],[1,"d-inline-flex","gap-2"],["type","button","mat-dialog-close","false",1,"btn","btn-outline-danger"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(o,r){if(o&1){let h=y();n(0,"div",1)(1,"div",2),a(2," Two-Factor Authentication (2FA) - TOTP Activation "),i(),n(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"a",7),a(8,"Step 1: Install an Authenticator App "),i()(),n(9,"div",8)(10,"p"),a(11,"To use 2FA, you will need an authenticator app installed on your mobile device. If you don\u2019t already have one, you can download one of these apps: "),i(),n(12,"ol",9)(13,"li")(14,"a",10),a(15,"Google Authenticator (iOS and Android)"),i()(),n(16,"li")(17,"a",11),a(18,"Microsoft Authenticator (iOS and Android)"),i()(),n(19,"li")(20,"a",12),a(21,"Authy (iOS and Android)"),i()()()()(),n(22,"div",13)(23,"div",6)(24,"a",14),a(25,"Step 2: Scan the QR Code "),i()(),n(26,"div",15)(27,"ol")(28,"li"),a(29,"Open your authenticator app."),i(),n(30,"li"),a(31,'Select the option to add a new account. This is usually done by tapping the "+" icon.'),i(),n(32,"li"),a(33,"Choose the option to scan a QR code."),i(),n(34,"li"),a(35,"Use your phone\u2019s camera to scan the QR code displayed below."),i()(),n(36,"div",16),m(37,"img",17),i(),n(38,"div",18)(39,"p",19),a(40,"Or enter code manually: "),m(41,"span",20),i()()()(),n(42,"div",21)(43,"div",6)(44,"a",22),a(45,"Step 3: Enter the Verification Code "),i()(),n(46,"div",23)(47,"ol")(48,"li"),a(49,"After scanning the QR code, your authenticator app will display a 6-digit verification code."),i(),n(50,"li"),a(51,"Enter the 6-digit code into the field below to verify and activate 2FA on your account."),i(),n(52,"li"),a(53,'After entering the verification code, click on the "Activate" button below.'),i(),n(54,"li"),a(55,"You will see a confirmation message once 2FA is successfully activated."),i()(),n(56,"div",24)(57,"span",25),a(58,"Code"),i(),m(59,"input",26,0),i(),n(61,"div",27)(62,"button",28),a(63,"Cancel"),i(),n(64,"button",29),f("click",function(){_(h);let de=P(60);return x(r.activate(de))}),a(65,"Activate"),i()()()()()()()}if(o&2){let h,E;l(37),s("src","data:image/png;base64,"+((h=r.qrCodeData())==null?null:h.data),j),l(4),s("textContent",(E=r.qrCodeData())==null?null:E.secretKey)}},dependencies:[G,q,k,O,F,te,U,V],styles:[".card-text[_ngcontent-%COMP%]{max-height:90vh;overflow:scroll}.step[_ngcontent-%COMP%]{margin:.5rem 0}"],changeDetection:0})}}return e})();var H=(()=>{class e{constructor(){this.dialogRef=p(Y)}confirmAction(){this.dialogRef.close(!0)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-confirmation-dialog"]],standalone:!0,features:[b],decls:14,vars:0,consts:[[1,"card"],[1,"card-header","bg-primary","text-light"],[1,"card-body"],[1,"card-text"],[1,"text-primary"],[1,"small","fw-bold","text-primary"],[1,"d-inline-flex","gap-2","mt-4"],["mat-dialog-close","false",1,"btn","btn-outline-danger"],[1,"btn","btn-primary",3,"click"]],template:function(o,r){o&1&&(n(0,"div",0)(1,"div",1),a(2," Confirmation Required "),i(),n(3,"div",2)(4,"div",3)(5,"p",4),a(6,"Are you sure you want to proceed with this action?"),i(),n(7,"p",5),a(8,"This action cannot be undone."),i()(),n(9,"div",6)(10,"button",7),a(11,"Cancel"),i(),n(12,"button",8),f("click",function(){return r.confirmAction()}),a(13,"Confirm"),i()()()())},dependencies:[G],changeDetection:0})}}return e})();var Q=e=>[e];function me(e,d){e&1&&(n(0,"span",5),m(1,"i",9),i()),e&2&&s("matTooltip","Activated")}function ue(e,d){e&1&&(n(0,"span",6),m(1,"i",10),i()),e&2&&s("matTooltip","Not Activated")}function fe(e,d){if(e&1){let t=y();n(0,"div",11)(1,"button",12),f("click",function(){_(t);let r=c(2);return x(r.setupTotp())}),a(2,"Activate "),i()()}if(e&2){let t=c(2);l(),s("disableIfNoRoleExists",S(1,Q,t.Role.AUTHENTICATED_USER))}}function ge(e,d){if(e&1){let t=y();n(0,"div",13)(1,"button",14),f("click",function(){_(t);let r=c(2);return x(r.confirmTotpDeactivation())}),a(2,"Deactivate "),i(),n(3,"button",15),f("click",function(){_(t);let r=c(2);return x(r.testCode())}),a(4,"Test "),i()()}if(e&2){let t=c(2);l(),s("disableIfNoRoleExists",S(2,Q,t.Role.AUTHENTICATED_USER)),l(2),s("disableIfNoRoleExists",S(4,Q,t.Role.AUTHENTICATED_USER))}}function _e(e,d){if(e&1&&(n(0,"section",1)(1,"div",2)(2,"h4",3),a(3,"Authenticator TOTP"),i(),n(4,"div",4),u(5,me,2,1,"span",5)(6,ue,2,1,"span",6),i()(),u(7,fe,3,3,"div",7)(8,ge,5,6,"div",8),i()),e&2){let t=c();l(5),D(t.isTotpActive()?5:6),l(2),s("ngIf",!t.isTotpActive()),l(),s("ngIf",t.isTotpActive())}}var re=(()=>{class e{constructor(){this.destroyRef=p(w),this.dialog=p(L),this.myAccountService=p(T),this.authService=p(W),this.isTotpActive=C(!1),this.isLoadingCompleted=C(!1),this.Role=A}setupTotp(){this.dialog.open(ae,{disableClose:!0}).afterClosed().pipe(g(this.destroyRef)).subscribe(o=>{this.getCurrentTotpStatus()})}ngOnInit(){this.getCurrentTotpStatus()}getCurrentTotpStatus(){this.myAccountService.getTotpStatus().pipe(g(this.destroyRef)).subscribe({next:t=>{this.isTotpActive.set(t.active),this.isLoadingCompleted.set(!0)},error:t=>{console.log(t),this.isLoadingCompleted.set(!0)}})}testCode(){this.dialog.open(oe,{disableClose:!0}).afterClosed().pipe(g(this.destroyRef)).subscribe(o=>{console.log("Result:",o)})}confirmTotpDeactivation(){this.dialog.open(H,{disableClose:!0}).afterClosed().pipe(g(this.destroyRef)).subscribe(o=>{o===!0&&this.deactivateTotp()})}deactivateTotp(){this.myAccountService.deactivateTotp().pipe(g(this.destroyRef)).subscribe({next:t=>this.getCurrentTotpStatus(),error:t=>console.log(t)})}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=v({type:e,selectors:[["my-totp-settings"]],inputs:{isTotpActive:[1,"isTotpActive"],isLoadingCompleted:[1,"isLoadingCompleted"]},outputs:{isTotpActive:"isTotpActiveChange",isLoadingCompleted:"isLoadingCompletedChange"},standalone:!0,features:[b],decls:1,vars:1,consts:[["class","container d-flex flex-column mt-2 pt-2 pb-3 border border-opacity-50 rounded-2 shadow border-primary",4,"ngIf"],[1,"container","d-flex","flex-column","mt-2","pt-2","pb-3","border","border-opacity-50","rounded-2","shadow","border-primary"],[1,"col","d-inline-flex"],[1,"gradient-text"],[1,"status-badge","text-nowrap"],[1,"text-success","p-1","small","ms-1","me-1",3,"matTooltip"],[1,"text-danger","p-1","small","ms-1","me-1",3,"matTooltip"],["class","activation col",4,"ngIf"],["class","deactivation col d-inline-flex gap-2",4,"ngIf"],[1,"bi","bi-check-circle-fill"],[1,"bi","bi-exclamation-octagon-fill"],[1,"activation","col"],["type","button",1,"btn","btn-success",3,"click","disableIfNoRoleExists"],[1,"deactivation","col","d-inline-flex","gap-2"],["type","button",1,"btn","btn-outline-danger",3,"click","disableIfNoRoleExists"],["type","button",1,"btn","btn-outline-primary",3,"click","disableIfNoRoleExists"]],template:function(o,r){o&1&&u(0,_e,9,3,"section",0),o&2&&s("ngIf",r.isLoadingCompleted())},dependencies:[M,I,R],changeDetection:0})}}return e})();var se=e=>[e];function xe(e,d){e&1&&(n(0,"span",5),m(1,"i",10),i()),e&2&&s("matTooltip","Activated")}function he(e,d){e&1&&(n(0,"span",6),m(1,"i",11),i()),e&2&&s("matTooltip","Not Activated")}function ve(e,d){e&1&&(n(0,"div",12)(1,"p"),a(2,"Multi-Factor authentication activation possible only after any one the following security information successfully activated or verified,"),i(),n(3,"ul")(4,"li"),a(5,"Email Address"),i(),n(6,"li"),a(7,"TOTP"),i()()())}function Ce(e,d){e&1&&(n(0,"p",16),a(1," Unable to activate MFA. Please check prerequisite conditions before activating MFA. "),i())}function be(e,d){if(e&1){let t=y();n(0,"div",13)(1,"button",14),f("click",function(){_(t);let r=c(2);return x(r.enableMfa())}),a(2,"Activate "),i(),u(3,Ce,2,0,"p",15),i()}if(e&2){let t=c(2);l(),s("disableIfNoRoleExists",S(2,se,t.Role.AUTHENTICATED_USER)),l(2),s("ngIf",t.isErrorOccurred())}}function ye(e,d){e&1&&(n(0,"p",16),a(1," Unable to deactivate MFA. Please try again. "),i())}function Se(e,d){if(e&1){let t=y();n(0,"div",17)(1,"button",18),f("click",function(){_(t);let r=c(2);return x(r.confirmMfaDeactivation())}),a(2,"Deactivate "),i(),u(3,ye,2,0,"p",15),i()}if(e&2){let t=c(2);l(),s("disableIfNoRoleExists",S(2,se,t.Role.AUTHENTICATED_USER)),l(2),s("ngIf",t.isErrorOccurred())}}function Ee(e,d){if(e&1&&(n(0,"section",1)(1,"div",2)(2,"h4",3),a(3,"Multi-Factor Authentication"),i(),n(4,"div",4),u(5,xe,2,1,"span",5)(6,he,2,1,"span",6),i()(),u(7,ve,8,0,"div",7)(8,be,4,4,"div",8)(9,Se,4,4,"div",9),i()),e&2){let t,o,r,h,E=c();l(5),D((t=E.userData())!=null&&t.mfaEnabled?5:6),l(2),s("ngIf",!((o=E.userData())!=null&&o.mfaEnabled)),l(),s("ngIf",!((r=E.userData())!=null&&r.mfaEnabled)),l(),s("ngIf",(h=E.userData())==null?null:h.mfaEnabled)}}var le=(()=>{class e{constructor(){this.Role=A,this.destroyRef=p(w),this.dialog=p(L),this.myAccountService=p(T),this.userData=C(),this.isErrorOccurred=C(!0)}ngOnInit(){this.fetchCurrentUserData()}fetchCurrentUserData(){this.myAccountService.getProfileData().pipe(g(this.destroyRef)).subscribe({next:t=>{this.userData.set(t),this.isErrorOccurred.set(!1)},error:t=>console.log(t)})}enableMfa(){this.changeMfa(!0)}confirmMfaDeactivation(){this.dialog.open(H,{disableClose:!0}).afterClosed().pipe(g(this.destroyRef)).subscribe(o=>{o===!0&&this.changeMfa(!1)})}changeMfa(t){this.myAccountService.changeMfaStatus(t).pipe(g(this.destroyRef)).subscribe({next:o=>this.fetchCurrentUserData(),error:o=>{console.log(o),this.isErrorOccurred.set(!0)}})}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=v({type:e,selectors:[["my-mfa-settings"]],inputs:{userData:[1,"userData"],isErrorOccurred:[1,"isErrorOccurred"]},outputs:{userData:"userDataChange",isErrorOccurred:"isErrorOccurredChange"},standalone:!0,features:[b],decls:1,vars:1,consts:[["class","container d-flex flex-column mt-2 pt-2 pb-3 border border-opacity-50 rounded-2 shadow border-primary",4,"ngIf"],[1,"container","d-flex","flex-column","mt-2","pt-2","pb-3","border","border-opacity-50","rounded-2","shadow","border-primary"],[1,"col","d-inline-flex"],[1,"gradient-text"],[1,"status-badge","text-nowrap"],[1,"text-success","p-1","small","ms-1","me-1",3,"matTooltip"],[1,"text-danger","p-1","small","ms-1","me-1",3,"matTooltip"],["class","text-primary small fw-bold",4,"ngIf"],["class","activation col",4,"ngIf"],["class","deactivation col d-inline-flex gap-2",4,"ngIf"],[1,"bi","bi-check-circle-fill"],[1,"bi","bi-exclamation-octagon-fill"],[1,"text-primary","small","fw-bold"],[1,"activation","col"],["type","button",1,"btn","btn-success",3,"click","disableIfNoRoleExists"],["class","text-danger small fw-bold",4,"ngIf"],[1,"text-danger","small","fw-bold"],[1,"deactivation","col","d-inline-flex","gap-2"],["type","button",1,"btn","btn-outline-danger",3,"click","disableIfNoRoleExists"]],template:function(o,r){o&1&&u(0,Ee,10,4,"section",0),o&2&&s("ngIf",r.userData())},dependencies:[M,I,R],changeDetection:0})}}return e})();var we=e=>[e];function Te(e,d){e&1&&(n(0,"span",6),m(1,"i",10),i()),e&2&&s("matTooltip","Complaint")}function De(e,d){e&1&&(n(0,"span",7),m(1,"i",11),i()),e&2&&s("matTooltip","Non Complaint")}function Me(e,d){if(e&1&&(n(0,"p"),a(1,"Current Password Changed at "),n(2,"span",12),a(3),K(4,"date"),i()()),e&2){let t,o=c(2);l(3),z($(4,1,(t=o.userData())==null?null:t.passwordChangedAt,"dd.MM.YYYY, h:mm:ss a z"))}}function Ae(e,d){if(e&1){let t=y();n(0,"div")(1,"button",13),f("click",function(){_(t);let r=c(2);return x(r.editMode.set(!0))}),a(2,"Change Password"),i()()}if(e&2){let t=c(2);l(),s("disableIfNoRoleExists",S(1,we,t.Role.AUTHENTICATED_USER))}}function Re(e,d){e&1&&(n(0,"p",22),a(1," Invalid Password. Valid Password should contain at least one lowercase, one upper case alphabets, at least one digit, one special character and contains length from 8 to 50. "),i())}function Ie(e,d){if(e&1){let t=y();n(0,"div")(1,"form",14),f("ngSubmit",function(){_(t);let r=P(7),h=c(2);return x(h.savePassword(r))}),n(2,"div")(3,"div",15)(4,"span",16),a(5,"New Password"),i(),m(6,"input",17,0),i(),u(8,Re,2,0,"p",18),i(),n(9,"div",19)(10,"button",20),f("click",function(){_(t);let r=c(2);return x(r.editMode.set(!1))}),a(11,"Cancel"),i(),n(12,"button",21),f("click",function(){_(t);let r=P(7),h=c(2);return x(h.savePassword(r))}),a(13,"Save"),i()()()()}if(e&2){let t=c(2);l(8),s("ngIf",t.isErrorOccurred())}}function Pe(e,d){if(e&1&&(n(0,"section",2)(1,"div",3)(2,"h4",4),a(3,"Password"),i(),n(4,"div",5),u(5,Te,2,1,"span",6)(6,De,2,1,"span",7),i()(),n(7,"div",8)(8,"p"),a(9,"We recommend changing your password at least every 3 months to enhance the security of your account."),i(),u(10,Me,5,4,"p",9),i(),u(11,Ae,3,3,"div",9)(12,Ie,14,1,"div",9),i()),e&2){let t,o=c();l(5),D(o.isPasswordComplaint()?5:6),l(5),s("ngIf",(t=o.userData())==null?null:t.passwordChangedAt),l(),s("ngIf",!o.editMode()),l(),s("ngIf",o.editMode())}}var ce=(()=>{class e{constructor(){this.destroyRef=p(w),this.myAccountService=p(T),this.userData=C(),this.isErrorOccurred=C(!0),this.editMode=C(!1),this.Role=A}ngOnInit(){this.fetchCurrentUserData()}fetchCurrentUserData(){this.myAccountService.getProfileData().pipe(g(this.destroyRef)).subscribe({next:t=>{this.userData.set(t),this.isErrorOccurred.set(!1),this.editMode.set(!1)},error:t=>console.log(t)})}savePassword(t){t.validity.valid?this.myAccountService.changePassword(t.value).pipe(g(this.destroyRef)).subscribe({next:o=>this.fetchCurrentUserData(),error:o=>{console.log(o),this.isErrorOccurred.set(!0)}}):this.isErrorOccurred.set(!0)}isPasswordComplaint(){return this.userData()?.passwordChangedAt?new Date().getFullYear()-new Date(Date.parse(this.userData().passwordChangedAt)).getFullYear()*12<=3:!1}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=v({type:e,selectors:[["my-password-settings"]],inputs:{userData:[1,"userData"],isErrorOccurred:[1,"isErrorOccurred"],editMode:[1,"editMode"]},outputs:{userData:"userDataChange",isErrorOccurred:"isErrorOccurredChange",editMode:"editModeChange"},standalone:!0,features:[b],decls:1,vars:1,consts:[["newPassword",""],["class","container d-flex flex-column mt-2 pt-2 pb-3 border border-opacity-50 rounded-2 shadow border-primary",4,"ngIf"],[1,"container","d-flex","flex-column","mt-2","pt-2","pb-3","border","border-opacity-50","rounded-2","shadow","border-primary"],[1,"col","d-inline-flex"],[1,"gradient-text"],[1,"status-badge","text-nowrap"],[1,"text-success","p-1","small","ms-1","me-1",3,"matTooltip"],[1,"text-danger","p-1","small","ms-1","me-1",3,"matTooltip"],[1,"text-primary","small"],[4,"ngIf"],[1,"bi","bi-check-circle-fill"],[1,"bi","bi-exclamation-octagon-fill"],[1,"fw-bold","text-decoration-underline"],["type","button",1,"btn","btn-success",3,"click","disableIfNoRoleExists"],[3,"ngSubmit"],[1,"input-group","mb-3"],["id","labelNewPassword",1,"input-group-text"],["type","password","aria-label","New Password","aria-describedby","labelNewPassword","id","newPassword","name","newPassword","ngModel","","autocomplete","new-password","required","","min","8","pattern","^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@.#$!%*?&^])[A-Za-z\\d@.#$!%*?&]{8,50}$",1,"form-control"],["class","text-danger small fw-bold",4,"ngIf"],[1,"d-inline-flex","gap-2"],["type","button",1,"btn","btn-outline-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"text-danger","small","fw-bold"]],template:function(o,r){o&1&&u(0,Pe,13,4,"section",1),o&2&&s("ngIf",r.userData())},dependencies:[M,I,Z,q,ee,k,O,J,F,U,V,X,R],changeDetection:0})}}return e})();var Vt=(()=>{class e{constructor(){this.MY_SECURITY_SETTINGS_PAGE_INFO=B}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-my-account-settings-page"]],standalone:!0,features:[b],decls:5,vars:1,consts:[[3,"pageInfo"],[1,"d-flex","flex-column"]],template:function(o,r){o&1&&(m(0,"app-page-header",0),n(1,"div",1),m(2,"my-password-settings")(3,"my-totp-settings")(4,"my-mfa-settings"),i()),o&2&&s("pageInfo",r.MY_SECURITY_SETTINGS_PAGE_INFO)},dependencies:[ie,re,le,ce],encapsulation:2,changeDetection:0})}}return e})();export{Vt as MyAccountSettingsPageComponent};
