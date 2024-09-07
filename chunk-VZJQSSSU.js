import{a as $}from"./chunk-KMFARN2I.js";import{a as ee}from"./chunk-CVT26ZBA.js";import{a as te}from"./chunk-PURFER6K.js";import{c as D,g as j,h as B,i as J,j as U,k as z,s as H,t as K,u as Q,v as X,x as Y,y as Z}from"./chunk-T3QMTVWU.js";import{c as R}from"./chunk-SNVCUL6N.js";import{a as W}from"./chunk-CBNGG2DO.js";import"./chunk-AUBER76A.js";import"./chunk-2OUUPXAC.js";import"./chunk-OSDNJTLN.js";import{e as q,h as G}from"./chunk-YUHWLLNB.js";import"./chunk-X3EEPMJD.js";import{o as P}from"./chunk-Z66RIGB5.js";import{$b as N,B as w,Bb as A,Ga as _,Ha as h,J as C,Kb as p,Mb as l,Oa as F,Rb as L,Vb as t,Wb as i,Xb as S,ec as V,gc as y,ha as I,ob as a,pb as M,pc as m,qc as o,ta as g,tc as x,uc as b,va as k,vc as E,xc as O}from"./chunk-CACGWYQA.js";function ie(e,r){e&1&&(t(0,"div",8)(1,"div",26),o(2,"Please wait while progressing your request..."),i(),t(3,"div"),S(4,"mat-spinner"),i()())}function ne(e,r){if(e&1&&(t(0,"div",27)(1,"div",28),o(2,"Account activated successfully!"),i(),t(3,"p",29),o(4,"Please "),t(5,"a",30),o(6,"SignIn"),i(),o(7," with your credentials and start your Journey with us."),i()()),e&2){let n=y();a(5),l("routerLink",n.LOGIN_PAGE_INFO.path)}}function re(e,r){e&1&&(t(0,"div")(1,"p",31),o(2,"Activation failed. Please check and correct data. If issue still persists, then please try again later."),i()())}function oe(e,r){e&1&&(t(0,"div"),o(1,"Email Address is required."),i())}function ae(e,r){e&1&&(t(0,"div"),o(1,"Email Address must be at most 50 characters long."),i())}function se(e,r){e&1&&(t(0,"div"),o(1," Email Address must have at least 8 characters long. "),i())}function le(e,r){e&1&&(t(0,"div"),o(1,"Email Address invalid."),i())}function ce(e,r){if(e&1&&(t(0,"div",32),p(1,oe,2,0,"div",10)(2,ae,2,0,"div",10)(3,se,2,0,"div",10)(4,le,2,0,"div",10),i()),e&2){y();let n=m(15);a(),l("ngIf",n.errors==null?null:n.errors.required),a(),l("ngIf",n.errors==null?null:n.errors.maxlength),a(),l("ngIf",(n.errors==null?null:n.errors.minlength)&&!(n.errors!=null&&n.errors.email)),a(),l("ngIf",(n.errors==null?null:n.errors.email)&&!(n.errors!=null&&n.errors.email))}}function de(e,r){e&1&&(t(0,"div"),o(1,"Token is required."),i())}function me(e,r){if(e&1&&(t(0,"div",32),p(1,de,2,0,"div",10),i()),e&2){y();let n=m(22);a(),l("ngIf",n.errors==null?null:n.errors.required)}}var T=class{constructor(r="",n=""){this.username=r,this.emailToken=n}},we=(()=>{let r=class r{constructor(s){this.LOGIN_PAGE_INFO=R,this.destroyRef=g(F),this.bffService=g($),this.registrationService=g(ee),this.isSuccessful=A(!1),this.isErrorOccurred=A(!1),this.isLoading=A(!1),this.accountActivationForm=new T(s.snapshot.queryParamMap.get("identifier"),s.snapshot.queryParamMap.get("token"))}activate(s){s.valid?this.activateAccount():this.onError("Invalid data")}ngOnInit(){this.activateAccount()}activateAccount(){this.bffService.getVersion().pipe(W(this.destroyRef),C(s=>this.accountActivationForm.username!=null&&this.accountActivationForm.emailToken!=null),I(s=>this.isLoading.set(!0)),w(s=>this.registrationService.activate({username:this.accountActivationForm.username,emailToken:this.accountActivationForm.emailToken,apiVersion:s.version}))).subscribe({next:s=>this.onSuccess(),error:s=>this.onError(s)})}onSuccess(){this.isSuccessful.set(!0),this.isLoading.set(!1),this.isErrorOccurred.set(!1)}onError(s){console.log(s),this.isErrorOccurred.set(!0),this.isLoading.set(!1),this.isSuccessful.set(!1)}};r.\u0275fac=function(f){return new(f||r)(M(q))},r.\u0275cmp=k({type:r,selectors:[["app-account-activation"]],standalone:!0,features:[O],decls:37,vars:11,consts:[["activationForm","ngForm"],["username","ngModel"],["emailToken","ngModel"],[1,"h-100","d-flex","justify-content-center","align-items-center"],[1,"p-3","p-md-4","p-xl-5","col-md-6"],[1,"card","border-primary","shadow-lg"],[1,"card-header","gradient-bg","text-light","fs-4"],[1,"card-body","p-3","p-md-4","p-xl-5"],[1,"loading-shade","text-center"],["class","card-title small p-2 border border-success border-2 shadow-lg rounded-2 bg-transparent text-success text-center",4,"ngIf"],[4,"ngIf"],[3,"ngSubmit"],[1,"row","gy-3","gy-md-2","overflow-hidden"],[1,"col-12"],[1,"form-floating","mb-3"],["type","email","id","username","name","username","placeholder","Email Address","autocomplete","off","required","","minlength","8","maxlength","50","email","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","disabled"],["for","username"],["class","form-text text-danger",4,"ngIf"],["type","text","id","emailToken","name","emailToken","placeholder","Email Token","autocomplete","off","required","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","disabled"],["for","emailToken"],[1,"d-grid"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"row"],[1,"mt-5","mb-4","text-primary"],[1,"m-0","text-center","text-primary","small"],[1,"fw-bold",3,"routerLink"],[1,"w-100","text-center","text-bg-primary"],[1,"card-title","small","p-2","border","border-success","border-2","shadow-lg","rounded-2","bg-transparent","text-success","text-center"],[1,"fs-6","mb-2","fw-bold"],[1,"fs-6"],[3,"routerLink"],[1,"text-danger","p-2","border","border-danger","border-2","shadow-lg","rounded-1","bg-transparent"],[1,"form-text","text-danger"]],template:function(f,c){if(f&1){let u=N();t(0,"div",3)(1,"section",4)(2,"div",5)(3,"div",6),o(4,"Account Activation"),i(),t(5,"div",7),p(6,ie,5,0,"div",8)(7,ne,8,1,"div",9)(8,re,3,0,"div",10),t(9,"form",11,0),V("ngSubmit",function(){_(u);let d=m(10);return h(c.activate(d))}),t(11,"div",12)(12,"div",13)(13,"div",14)(14,"input",15,1),E("ngModelChange",function(d){return _(u),b(c.accountActivationForm.username,d)||(c.accountActivationForm.username=d),h(d)}),i(),t(16,"label",16),o(17,"Email Address"),i(),p(18,ce,5,4,"div",17),i()(),t(19,"div",13)(20,"div",14)(21,"input",18,2),E("ngModelChange",function(d){return _(u),b(c.accountActivationForm.emailToken,d)||(c.accountActivationForm.emailToken=d),h(d)}),i(),t(23,"label",19),o(24,"Token"),i(),p(25,me,2,1,"div",17),i()(),t(26,"div",13)(27,"div",20)(28,"button",21),o(29,"Activate"),i()()()()(),t(30,"div",22)(31,"div",13),S(32,"hr",23),t(33,"p",24),o(34,"Already have an account? "),t(35,"a",25),o(36,"Sign in"),i()()()()()()()()}if(f&2){let u=m(10),v=m(15),d=m(22);a(6),L(c.isLoading()?6:-1),a(),l("ngIf",c.isSuccessful()),a(),l("ngIf",c.isErrorOccurred()),a(6),x("ngModel",c.accountActivationForm.username),l("disabled",c.isSuccessful()),a(4),l("ngIf",v.invalid&&(v.dirty||u.submitted)),a(3),x("ngModel",c.accountActivationForm.emailToken),l("disabled",c.isSuccessful()),a(4),l("ngIf",d.invalid&&(d.dirty||u.submitted)),a(3),l("disabled",c.isSuccessful()),a(7),l("routerLink",c.LOGIN_PAGE_INFO.path)}},dependencies:[Y,z,D,j,B,H,Q,X,K,U,J,P,Z,G,te]});let e=r;return e})();export{we as AccountActivationComponent,T as AccountActivationForm};