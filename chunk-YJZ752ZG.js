import{b as M,d as V,e as k}from"./chunk-WB767SAI.js";import"./chunk-6SDLWCIK.js";import"./chunk-ZQZLPFK4.js";import"./chunk-RGNDWIHZ.js";import{a as _}from"./chunk-CBNGG2DO.js";import"./chunk-BXGBSVMT.js";import"./chunk-AUBER76A.js";import{a as w}from"./chunk-JJKKS25J.js";import"./chunk-ZWED4QT2.js";import"./chunk-2OUUPXAC.js";import"./chunk-OSDNJTLN.js";import{e as x,g as R}from"./chunk-YUHWLLNB.js";import"./chunk-X3EEPMJD.js";import"./chunk-Z66RIGB5.js";import{$b as u,Ga as m,Ha as d,Kb as b,Oa as v,Rb as f,Vb as a,Wb as l,ec as h,gc as C,ob as p,pb as s,qc as r,ta as g,va as y,xc as O}from"./chunk-CACGWYQA.js";function D(o,i){if(o&1){let c=u();a(0,"div",4)(1,"button",5),h("click",function(){m(c);let t=C();return d(t.continueWithTotpVerification())}),r(2," Using Mobile Authenticator "),a(3,"mat-icon"),r(4,"screen_lock_portrait"),l()()()}}function T(o,i){if(o&1){let c=u();a(0,"div",4)(1,"button",5),h("click",function(){m(c);let t=C();return d(t.continueWithEmailCodeVerification())}),r(2," Using Email Code "),a(3,"mat-icon",6),r(4,"mail_lock"),l()()()}}var N=(()=>{let i=class i{constructor(e,t,n){this.router=e,this.dialog=t,this.activatedRoute=n,this.destroyRef=g(v),this.mfaOptions=this.router.getCurrentNavigation()?.extras?.state}continueWithTotpVerification(){this.dialog.open(V,{data:this.mfaOptions.credential,disableClose:!0}).afterClosed().pipe(_(this.destroyRef)).subscribe(t=>this.onCloseCallback(t))}continueWithEmailCodeVerification(){this.dialog.open(k,{data:this.mfaOptions.credential,disableClose:!0}).afterClosed().pipe(_(this.destroyRef)).subscribe(t=>this.onCloseCallback(t))}onCloseCallback(e){if(e===!0){let t=this.activatedRoute.snapshot.queryParams.redirectUrl??"/home";this.router.navigateByUrl(t).then(console.log)}}};i.\u0275fac=function(t){return new(t||i)(s(R),s(M),s(x))},i.\u0275cmp=y({type:i,selectors:[["app-display-mfa-options"]],standalone:!0,features:[O],decls:7,vars:2,consts:[[1,"container","m-auto","h-100","w-100","mt-4"],[1,"d-flex","flex-column","justify-content-center","align-items-center","align-content-between","m-auto"],[1,"p-2"],[1,"gradient-text"],[1,"mfa-option","m-2"],[1,"btn","btn-outline-primary","fw-bold","p-2","w-100","h-100","round","rounded-5","d-flex","align-items-center","justify-content-center",3,"click"],[1,"ms-2"]],template:function(t,n){t&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"h5",3),r(4,"Select Multi-factor Authentication Type to verify your identity"),l()(),b(5,D,5,0,"div",4)(6,T,5,0,"div",4),l()()),t&2&&(p(5),f(!(n.mfaOptions==null||n.mfaOptions.options==null)&&n.mfaOptions.options.includes("TOTP")?5:-1),p(),f(!(n.mfaOptions==null||n.mfaOptions.options==null)&&n.mfaOptions.options.includes("EMAIL_ADDRESS")?6:-1))},dependencies:[w],styles:[".mfa-option[_ngcontent-%COMP%]{width:80%;height:3rem}"]});let o=i;return o})();export{N as DisplayMfaOptionsComponent};