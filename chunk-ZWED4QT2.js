import{na as l,q as i,z as c}from"./chunk-CACGWYQA.js";var o=class{constructor(e="",u=!1,t=[],r="",a=new Date){this.name=e,this.isAuthenticated=u,this.roles=t,this.accessToken=r,this.expiredAt=a}};var n=(()=>{let e=class e{static saveUserContextInLocalStorage(t){t&&localStorage.setItem(e.USER_CONTEXT_KEY,JSON.stringify(t))}static getUserContextFromLocalStorage(){let t=localStorage.getItem(e.USER_CONTEXT_KEY);if(t){let r=JSON.parse(t);if(Date.now()<Date.parse(r.expiredAt)){let a=new o(r.name,r.isAuthenticated,r.roles,r.accessToken,new Date(Date.parse(r.expiredAt)));return console.log("Local auth context found and valid.",a),a}else e.removeUserContextFromLocalStorage(),console.log("Local auth context found, but not valid. Thus removed from local storage.")}}static removeUserContextFromLocalStorage(){localStorage.removeItem(e.USER_CONTEXT_KEY)}};e.USER_CONTEXT_KEY="_auth";let s=e;return s})();var g=(()=>{let e=class e{constructor(){this.user=new o,this.user$=new i(new o);let t=n.getUserContextFromLocalStorage();t&&this.setUserContext(t)}getCurrentUserContext(){return this.user}hasAnyRole(t=[]){return this.getCurrentUserContext().roles.some(r=>t.indexOf(r)!=-1)}isUserAuthenticatedAsObservable(){return this.user$.pipe(c(t=>t.isAuthenticated))}getUserContext(){return this.user$}logout(){n.removeUserContextFromLocalStorage(),this.setUserContext(new o)}getUserContextForSuccessfulLogin(t){let r=new o(t.name,!0,t.authorities,t.token,t.expiredAt);return this.setUserContext(r),r}setUserContext(t){this.user$.next(t),this.user=t,n.saveUserContextInLocalStorage(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{o as a,g as b};
