import{a as $,b as ee}from"./chunk-VA5J6NBX.js";import{a as Z}from"./chunk-V3XPYBTQ.js";import{a as Y}from"./chunk-T3OIREQZ.js";import{a as Q}from"./chunk-3FMDNL7T.js";import{n as k}from"./chunk-WTO4EC35.js";import{a as X}from"./chunk-AMANEO66.js";import{b as J,c as K}from"./chunk-YUWLRQ2A.js";import{a as j,f as q,g as z}from"./chunk-3L7FTIZC.js";import"./chunk-BFKDL6AO.js";import"./chunk-3W4XQ2AS.js";import"./chunk-ESNPP4F3.js";import"./chunk-2PPFUFFT.js";import{b as N,g as V,h as O,i as T,j as R,k as W,p as H,u as L}from"./chunk-6V4FY2EC.js";import"./chunk-KRGZIYPA.js";import{c as I}from"./chunk-GX5PCDDC.js";import{b as v,c as G}from"./chunk-G6LWCROE.js";import{a as U,f as B}from"./chunk-UVG5L6RS.js";import"./chunk-OO6UETQH.js";import{c as F}from"./chunk-OBJFDV2T.js";import"./chunk-INCHVP6V.js";import{i as A,j as D}from"./chunk-TJFKVA4M.js";import{$c as w,Bc as x,Cc as s,Db as P,Dc as C,Gc as S,Hc as M,Ic as E,Kb as _,Vb as m,dc as r,ec as i,fc as h,jc as y,na as d,oc as b,pb as l,qc as p,xa as f,ya as u}from"./chunk-BGW2GSJU.js";var g=class{constructor(o,e,t,n,c,te,ie){this._username=o,this._name=e,this._createdDate=t,this._passwordChangedAt=n,this._enabled=c,this._roles=te,this._mfaEnabled=ie}set name(o){this._name=o}get name(){return this._name}get username(){return this._username}get createdDate(){return this._createdDate}get passwordChangedAt(){return this._passwordChangedAt}get enabled(){return this._enabled}get roles(){return this._roles}set mfaEnabled(o){this._mfaEnabled=o}get mfaEnabled(){return this._mfaEnabled}};function ae(a,o){if(a&1&&(r(0,"div",17)(1,"mat-checkbox",18),s(2),i()()),a&2){let e=o.$implicit;l(),m("checked",!0),l(),C(e)}}function re(a,o){if(a&1&&(r(0,"button",19),s(1," Save "),i()),a&2){p();let e=x(1);m("disabled",!e.valid)}}function ne(a,o){if(a&1){let e=y();r(0,"button",20),b("click",function(){f(e);let n=p(2);return u(n.cancel())}),s(1," Cancel "),i()}}function oe(a,o){if(a&1){let e=y();r(0,"form",4,0),b("submit",function(){f(e);let n=x(1),c=p();return u(c.save(n))}),r(2,"mat-form-field",5)(3,"mat-label"),s(4,"Username"),i(),h(5,"input",6),i(),r(6,"div")(7,"h3",7),s(8,"Status:"),i(),r(9,"mat-checkbox",8),s(10," Active "),i()(),r(11,"div")(12,"h3",7),s(13,"Role(s)"),i(),_(14,ae,3,2,"div",9),i(),r(15,"mat-form-field",10)(16,"mat-label",11),s(17,"Created"),i(),h(18,"input",12),i(),r(19,"mat-form-field",10)(20,"mat-label",11),s(21,"Name"),i(),r(22,"input",13),E("ngModelChange",function(n){f(e);let c=p();return M(c.myProfileData().name,n)||(c.myProfileData().name=n),u(n)}),i()(),r(23,"div",14),_(24,re,2,1,"button",15)(25,ne,2,0,"button",16),i()()}if(a&2){let e,t=p();l(5),m("value",t.myProfileData().username),l(4),m("checked",t.myProfileData().enabled),l(5),m("ngForOf",(e=t.myProfileData())==null?null:e.roles),l(4),m("value",t.myProfileData().createdDate),l(4),S("ngModel",t.myProfileData().name),m("readOnly",!t.hasAccess())}}var Ne=(()=>{class a{constructor(){this.MY_PROFILE_PAGE_INFO=k,this.Role=v,this.notificationService=d(Q),this.myAccountService=d(X),this.router=d(F),this.authService=d(G),this.myProfileData=I(this.myAccountService.getProfileData(),{initialValue:new g("","","","",!1,[],!1)}),this.hasAccess=w(()=>this.authService.hasAnyRole([v.AUTHENTICATED_USER]))}save(e){e.valid&&e.dirty&&this.myAccountService.saveProfileData(this.myProfileData()).subscribe({next:t=>this.onSuccessCallback(),error:t=>this.onErrorCallback()})}onSuccessCallback(){this.notificationService.showSuccess("Profile data saved successfully")}onErrorCallback(){this.notificationService.showError("Update failed. Please check data.")}cancel(){this.router.navigate(["/"]).then(console.log)}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=P({type:a,selectors:[["app-my-profile-page"]],decls:5,vars:2,consts:[["profileForm","ngForm"],[3,"pageInfo"],[1,"container","mx-auto","mt-6"],["class","w-full max-w-4xl flex flex-col gap-2",3,"submit",4,"ngIf"],[1,"w-full","max-w-4xl","flex","flex-col","gap-2",3,"submit"],["appearance","outline",1,"w-full"],["matInput","","id","username","name","username","type","text","readonly","",3,"value"],[1,"text-sm","font-medium","text-primary"],["id","isAccountActive","name","isAccountActive","disabled","",3,"checked"],["class","pl-4",4,"ngFor","ngForOf"],[1,"w-full"],[1,"font-bold","text-primary"],["matInput","","id","createdDate","type","datetime-local","disabled","",3,"value"],["matInput","","id","name","name","name","required","",3,"ngModelChange","ngModel","readOnly"],[1,"flex","justify-center","gap-2"],["mat-flat-button","","color","primary","type","submit",3,"disabled",4,"appHasWriteAccess"],["mat-raised-button","","color","warn","type","button",3,"click",4,"appHasWriteAccess"],[1,"pl-4"],["disabled","",3,"checked"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["mat-raised-button","","color","warn","type","button",3,"click"]],template:function(t,n){t&1&&(r(0,"header"),h(1,"app-page-header",1),i(),r(2,"main")(3,"section",2),_(4,oe,26,6,"form",3),i()()),t&2&&(l(),m("pageInfo",n.MY_PROFILE_PAGE_INFO),l(3),m("ngIf",n.myProfileData()))},dependencies:[Z,D,L,W,N,V,O,H,R,T,A,Y,z,q,j,K,J,B,U,ee,$],encapsulation:2,changeDetection:0})}}return a})();export{Ne as MyProfilePageComponent};
