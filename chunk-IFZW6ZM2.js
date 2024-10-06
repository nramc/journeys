import{a as E}from"./chunk-OG2A5DXH.js";import{q as g}from"./chunk-SNVCUL6N.js";import{a as x}from"./chunk-P53QH524.js";import{a as h}from"./chunk-FUSGHHWI.js";import"./chunk-ZLRNIGX2.js";import{a as b}from"./chunk-4Y5XZLGR.js";import"./chunk-4HWMNETW.js";import{g as f}from"./chunk-F5TIGKWS.js";import"./chunk-KUIIQJ2X.js";import"./chunk-IUL4I26V.js";import"./chunk-OU45453G.js";import"./chunk-MIMT4L35.js";import{Bc as y,Ma as u,Ob as d,Yb as t,Zb as n,_b as p,hc as c,rb as l,sa as s,ua as m,uc as e}from"./chunk-Y7SRRAOL.js";var T=(()=>{class r{constructor(i,o){this.router=i,this.myAccountService=o,this.DELETE_MY_ACCOUNT_PAGE_INFO=g,this.destroyRef=s(u)}deleteAccount(){this.myAccountService.deleteMyAccount().pipe(h(this.destroyRef)).subscribe({next:i=>this.onSuccess(),error:i=>console.error(i)})}onSuccess(){this.router.navigate(["/logout"]).then(console.log)}cancel(){this.router.navigate(["/home"]).then(console.log)}static{this.\u0275fac=function(o){return new(o||r)(l(f),l(x))}}static{this.\u0275cmp=m({type:r,selectors:[["app-delete-my-account-page"]],standalone:!0,features:[y],decls:42,vars:1,consts:[[3,"pageInfo"],[1,"container","d-flex","flex-column"],[1,"col","mb-3"],[1,"text-primary"],[1,"col","text-primary"],[1,"col","text-primary","mt-3"],[1,"mt-3","p-3"],["href","https://github.com/nramc/journeys/issues","target","_blank",1,"fw-bold","small"],[1,"col","mt-3","d-inline-flex"],["type","button",1,"btn","btn-danger","me-3",3,"click"],["type","button",1,"btn","btn-success","me-3",3,"click"]],template:function(o,a){o&1&&(p(0,"app-page-header",0),t(1,"section",1)(2,"div",2)(3,"h2",3),e(4,"We're Sorry to See You Go "),t(5,"mat-icon"),e(6,"sentiment_dissatisfied"),n()()(),t(7,"div",4)(8,"p"),e(9,"We're genuinely sorry to hear that you're considering deleting your account."),n(),t(10,"p"),e(11,"Your presence means a lot to us, and losing you as a valued user would be a significant loss."),n()(),t(12,"div",5)(13,"h6"),e(14,"Before you go, please consider the following:"),n(),t(15,"dl",6)(16,"dt"),e(17,"Valuable Data Loss:"),n(),t(18,"dd"),e(19," - Once your account is deleted, all your data, preferences, and history with us will be permanently lost and cannot be recovered. "),n(),t(20,"dt"),e(21,"Help Us Improve:"),n(),t(22,"dd"),e(23," - Your feedback is invaluable to us. If there\u2019s anything we can do to improve your experience, please let us know by "),t(24,"a",7),e(25," creating issue at GitHub"),n(),e(26,". "),n(),t(27,"dt"),e(28,"Special Offers:"),n(),t(29,"dd"),e(30," - We\u2019d love to have you stay. Contact us by "),t(31,"a",7),e(32," creating issue at GitHub"),n(),e(33," for any assistance we can provide to make your experience better. "),n()()(),t(34,"div",3)(35,"p"),e(36,"If you're sure about leaving, we respect your decision and hope to see you again in the future. Thank you for being a part of our community."),n()(),t(37,"div",8)(38,"button",9),c("click",function(){return a.deleteAccount()}),e(39,"Delete My Account"),n(),t(40,"button",10),c("click",function(){return a.cancel()}),e(41,"Keep My Account"),n()()()),o&2&&d("pageInfo",a.DELETE_MY_ACCOUNT_PAGE_INFO)},dependencies:[E,b]})}}return r})();export{T as DeleteMyAccountPageComponent};
