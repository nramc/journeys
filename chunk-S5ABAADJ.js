import{c as n}from"./chunk-FMC26DVU.js";import{a as f,b as i,c as a}from"./chunk-GKHTDWFE.js";import{j as t}from"./chunk-65UXW6KM.js";import{Hb as o,Kb as c,pa as r}from"./chunk-INLK7QV6.js";var g=(()=>{class e{constructor(){this.ngIfDirective=r(t),this.expectedRoles=[i.ADMINISTRATOR,i.MAINTAINER,i.AUTHENTICATED_USER],this.authService=r(a),this.userContext=n(this.authService.getUserContext(),{initialValue:new f}),this.ngIfDirective.ngIf=this.userContext().roles.some(s=>this.expectedRoles.indexOf(s)!=-1)}static{this.\u0275fac=function(m){return new(m||e)}}static{this.\u0275dir=o({type:e,selectors:[["","appHasWriteAccess",""]],features:[c([t])]})}}return e})();export{g as a};
