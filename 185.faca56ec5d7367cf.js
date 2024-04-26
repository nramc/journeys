"use strict";(self.webpackChunkjourney=self.webpackChunkjourney||[]).push([[185],{2185:(j,g,d)=>{d.r(g),d.d(g,{LoginComponent:()=>F});var i=d(9417),u=d(5507),f=d(177),e=d(4438),_=d(4486),c=d(8498);function p(n,l){if(1&n&&e.nrm(0,"app-feedback-message",6),2&n){const s=e.XpG();e.Y8G("successMessage",s.successMessage)("errorMessage",s.errorMessage)}}function h(n,l){1&n&&(e.j41(0,"div",20),e.nrm(1,"i",21),e.EFF(2," Identity Yourself to access secured resource..! "),e.k0s())}function v(n,l){1&n&&(e.j41(0,"div",22),e.nrm(1,"i",21),e.EFF(2," Identity Yourself to access more exciting features..! "),e.k0s())}function M(n,l){1&n&&(e.j41(0,"div"),e.EFF(1,"Username is required."),e.k0s())}function b(n,l){1&n&&(e.j41(0,"div"),e.EFF(1,"Username must be at most 50 characters long."),e.k0s())}function C(n,l){1&n&&(e.j41(0,"div"),e.EFF(1,"Password is required."),e.k0s())}function E(n,l){1&n&&(e.j41(0,"div"),e.EFF(1,"Password must be at most 50 characters long."),e.k0s())}let F=(()=>{class n{constructor(s,t,r){this.authService=s,this.router=t,this.activatedRoute=r,this.successMessage="",this.errorMessage="",this.form=new L,this.messageBanner=""}ngOnInit(){this.messageBanner=this.activatedRoute.snapshot.queryParams.q}login(s){this.authService.login(this.form.userName,this.form.password).subscribe({next:t=>this.onLoginSuccess(t),error:t=>this.onLoginFailed(t)})}onLoginSuccess(s){this.successMessage="Login successful",this.router.navigate(["/home"])}onLoginFailed(s){console.error(s),this.errorMessage="Login failed. "+s.message}static#e=this.\u0275fac=function(t){return new(t||n)(e.rXU(_.u),e.rXU(c.Ix),e.rXU(c.nX))};static#n=this.\u0275cmp=e.VBU({type:n,selectors:[["app-login"]],standalone:!0,features:[e.aNF],decls:33,vars:10,consts:[["loginForm","ngForm"],["username","ngModel"],["password","ngModel"],[1,"container","h-100","mt-3","mt-md-0"],[1,"row","d-flex","justify-content-center","align-items-center","h-100","m-auto"],[1,"col-12","col-md-6","mt-sm-0"],[3,"successMessage","errorMessage"],[1,"card","login-card","text-white","border","border-2","border-primary","border-opacity-50",2,"border-radius","1rem"],[1,"card-body","p-5","text-center"],[3,"ngSubmit"],[1,"fw-bold","mb-2"],[1,"text-white-50","mb-5"],[1,"form-outline","form-white","mb-4"],["type","email","id","username","name","username","required","","maxlength","50",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["for","username",1,"form-label"],[1,"form-text","text-danger",3,"hidden"],[4,"ngIf"],["type","password","id","password","name","password","required","","maxlength","50",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],["type","submit",1,"btn","btn-outline-dark","btn-lg",3,"disabled"],["role","alert",1,"alert","alert-warning"],[1,"bi","bi-info-circle","pe-none","me-2"],["role","alert",1,"alert","alert-primary"]],template:function(t,r){if(1&t){const m=e.RV6();e.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div"),e.DNE(4,p,1,2,"app-feedback-message",6)(5,h,3,0)(6,v,3,0),e.k0s(),e.j41(7,"div",7)(8,"div",8)(9,"form",9,0),e.bIt("ngSubmit",function(){e.eBV(m);const o=e.sdS(10);return e.Njj(r.login(o))}),e.j41(11,"h2",10),e.EFF(12,"Login"),e.k0s(),e.j41(13,"p",11),e.EFF(14,"Please Identify Yourself!"),e.k0s(),e.j41(15,"div",12)(16,"input",13,1),e.mxI("ngModelChange",function(o){return e.eBV(m),e.DH7(r.form.userName,o)||(r.form.userName=o),e.Njj(o)}),e.k0s(),e.j41(18,"label",14),e.EFF(19,"Username"),e.k0s(),e.j41(20,"div",15),e.DNE(21,M,2,0,"div",16)(22,b,2,0,"div",16),e.k0s()(),e.j41(23,"div",12)(24,"input",17,2),e.mxI("ngModelChange",function(o){return e.eBV(m),e.DH7(r.form.password,o)||(r.form.password=o),e.Njj(o)}),e.k0s(),e.j41(26,"label",18),e.EFF(27,"Password"),e.k0s(),e.j41(28,"div",15),e.DNE(29,C,2,0,"div",16)(30,E,2,0,"div",16),e.k0s()(),e.j41(31,"button",19),e.EFF(32,"Login"),e.k0s()()()()()()()}if(2&t){const m=e.sdS(10),a=e.sdS(17),o=e.sdS(25);e.R7$(4),e.vxM(4,r.successMessage||r.errorMessage?4:"unauthenticated"===r.messageBanner?5:6),e.R7$(12),e.R50("ngModel",r.form.userName),e.R7$(4),e.Y8G("hidden",a.valid||a.pristine),e.R7$(),e.Y8G("ngIf",null==a.errors?null:a.errors.required),e.R7$(),e.Y8G("ngIf",null==a.errors?null:a.errors.maxlength),e.R7$(2),e.R50("ngModel",r.form.password),e.R7$(4),e.Y8G("hidden",o.valid||o.pristine),e.R7$(),e.Y8G("ngIf",null==o.errors?null:o.errors.required),e.R7$(),e.Y8G("ngIf",null==o.errors?null:o.errors.maxlength),e.R7$(),e.Y8G("disabled",!m.form.valid)}},dependencies:[i.YN,i.qT,i.me,i.BC,i.cb,i.YS,i.tU,i.vS,i.cV,u.k,f.bT],styles:[".login-card[_ngcontent-%COMP%]{background-image:linear-gradient(to right top,#fff,#e2ddfb,#c3bdf7,#a29df2,#7d7fed,#686fea,#4f5fe6,#2c4fe2,#2647df,#203fdc,#1a37d9,#152ed5)}"]})}return n})();class L{constructor(l="",s=""){this.userName=l,this.password=s}}}}]);