import{a}from"./chunk-7FBRJZ3K.js";import{c as h}from"./chunk-5XB5PZR3.js";import{na as i,q as l,sa as p,ta as m,z as u}from"./chunk-7FH2CJX7.js";var f=(()=>{let e=class e{constructor(){this.httpClient=m(h)}login(t){return this.httpClient.post(a.journeyApi+"/login",{username:t.username,password:t.password},{headers:{Authorization:"Basic "+btoa(t.username+":"+t.password),"Content-Type":"application/json"}})}mfa(t,o,n){return this.httpClient.post(a.journeyApi+"/mfa",{type:o,value:t},{headers:{Authorization:"Basic "+btoa(n.username+":"+n.password),"Content-Type":"application/json"}})}loginAsGuest(){return this.httpClient.post(a.journeyApi+"/guestLogin",{username:Math.random().toString(36)},{headers:{"Content-Type":"application/json"}})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var s=class{constructor(e="",g=!1,t=[],o="",n=new Date){this.name=e,this.isAuthenticated=g,this.roles=t,this.accessToken=o,this.expiredAt=n}};var c=(()=>{let e=class e{static saveUserContextInLocalStorage(t){t&&localStorage.setItem(e.USER_CONTEXT_KEY,JSON.stringify(t))}static getUserContextFromLocalStorage(){let t=localStorage.getItem(e.USER_CONTEXT_KEY);if(t){let o=JSON.parse(t);if(Date.now()<Date.parse(o.expiredAt)){let n=new s(o.name,o.isAuthenticated,o.roles,o.accessToken,new Date(Date.parse(o.expiredAt)));return console.log("Local auth context found and valid.",n),n}else e.removeUserContextFromLocalStorage(),console.log("Local auth context found, but not valid. Thus removed from local storage.")}}static removeUserContextFromLocalStorage(){localStorage.removeItem(e.USER_CONTEXT_KEY)}};e.USER_CONTEXT_KEY="_auth";let r=e;return r})();var L=(()=>{let e=class e{constructor(t){this.loginService=t,this.user=new s,this.user$=new l(new s);let o=c.getUserContextFromLocalStorage();o&&this.setUserContext(o)}getCurrentUserContext(){return this.user}hasAnyRole(t=[]){return this.getCurrentUserContext().roles.some(o=>t.indexOf(o)!=-1)}isUserAuthenticatedAsObservable(){return this.user$.pipe(u(t=>t.isAuthenticated))}getUserContext(){return this.user$}loginAsGuest(){return this.loginService.loginAsGuest().pipe(u(t=>this.getUserContextForSuccessfulLogin(t)))}logout(){c.removeUserContextFromLocalStorage(),this.setUserContext(new s)}getUserContextForSuccessfulLogin(t){let o=new s(t.name,!0,t.authorities,t.token,t.expiredAt);return this.setUserContext(o),o}setUserContext(t){this.user$.next(t),this.user=t,c.saveUserContextInLocalStorage(t)}};e.\u0275fac=function(o){return new(o||e)(p(f))},e.\u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{f as a,L as b};
