import{c as m}from"./chunk-ARLEKDS5.js";import{oa as a,q as p,ta as i,z as c}from"./chunk-TO7D4NWA.js";var g={name:"journey",version:"0.17.0",scripts:{ng:"ng",start:"ng serve --configuration development",build:"ng build",watch:"ng build --watch --configuration development",test:"ng test","ci:build":"ng build","ci:test":"ng test --no-watch --no-progress --browsers=ChromeHeadless","ci:deploy":"ng deploy --base-href=/journeys/ --dir=dist/journey/browser --build-target=journey:build:production"},private:!0,dependencies:{"@angular/animations":"^18.0.2","@angular/cdk":"^18.0.2","@angular/common":"^18.0.2","@angular/compiler":"^18.0.2","@angular/core":"^18.0.2","@angular/forms":"^18.0.2","@angular/material":"^18.0.2","@angular/platform-browser":"^18.0.2","@angular/platform-browser-dynamic":"^18.0.2","@angular/router":"^18.0.2","@cloudinary/ng":"^2.0.2","@cloudinary/url-gen":"^1.18.0","@ng-bootstrap/ng-bootstrap":"^15.1.2","@popperjs/core":"^2.11.8","@types/geojson":"^7946.0.13",bootstrap:"^5.3.2","bootstrap-icons":"^1.11.1",bootswatch:"^5.3.2","file-saver":"^2.0.5","highlight.js":"^11.9.0",jszip:"^3.10.1",leaflet:"^1.9.4",marked:"^12.0.2","ng-gallery":"^11.0.0","ngx-markdown":"^18.0.0",rxjs:"~7.8.0",tslib:"^2.3.0",typings:"^2.1.1","zone.js":"~0.14.2"},devDependencies:{"@angular-devkit/build-angular":"^18.0.3","@angular/cli":"^18.0.3","@angular/compiler-cli":"^18.0.2","@angular/localize":"^18.0.2","@types/file-saver":"^2.0.7","@types/jasmine":"~4.3.6","@types/leaflet":"^1.9.7","angular-cli-ghpages":"^2.0.0","jasmine-core":"~4.6.0",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0",typescript:"~5.4.5"}};var l={production:!0,journeyApi:"https://journey-api-nxm5.onrender.com/rest",cloudName:"journeytogether",cloudinaryPreset:"journey-prod",cloudinarySingleImgPreset:"journey-prod-single",cloudBaseDir:"journey/journey-prod",version:g.version,stage:"prod"};var d=(()=>{let t=class t{constructor(e){this.httpClient=e}login(e){return this.httpClient.post(l.journeyApi+"/login",{username:e.username,password:e.password},{headers:{Authorization:"Basic "+btoa(e.username+":"+e.password),"Content-Type":"application/json"}})}mfa(e,r,s){return this.httpClient.post(l.journeyApi+"/mfa",{type:r,value:e},{headers:{Authorization:"Basic "+btoa(s.username+":"+s.password),"Content-Type":"application/json"}})}loginAsGuest(){return this.httpClient.post(l.journeyApi+"/guestLogin",{username:Math.random().toString(36)},{headers:{"Content-Type":"application/json"}})}};t.\u0275fac=function(r){return new(r||t)(i(m))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var n=class{constructor(t="",h=!1,e=[],r="",s=new Date){this.name=t,this.isAuthenticated=h,this.roles=e,this.accessToken=r,this.expiredAt=s}};var u=(()=>{let t=class t{static saveUserContextInLocalStorage(e){e&&localStorage.setItem(t.USER_CONTEXT_KEY,JSON.stringify(e))}static getUserContextFromLocalStorage(){let e=localStorage.getItem(t.USER_CONTEXT_KEY);if(e){let r=JSON.parse(e);if(Date.now()<Date.parse(r.expiredAt)){let s=new n(r.name,r.isAuthenticated,r.roles,r.accessToken,new Date(Date.parse(r.expiredAt)));return console.log("Local auth context found and valid.",s),s}else t.removeUserContextFromLocalStorage(),console.log("Local auth context found, but not valid. Thus removed from local storage.")}}static removeUserContextFromLocalStorage(){localStorage.removeItem(t.USER_CONTEXT_KEY)}};t.USER_CONTEXT_KEY="_auth";let o=t;return o})();var I=(()=>{let t=class t{constructor(e){this.loginService=e,this.user=new n,this.user$=new p(new n);let r=u.getUserContextFromLocalStorage();r&&this.setUserContext(r)}getCurrentUserContext(){return this.user}hasAnyRole(e=[]){return this.getCurrentUserContext().roles.some(r=>e.indexOf(r)!=-1)}isUserAuthenticatedAsObservable(){return this.user$.pipe(c(e=>e.isAuthenticated))}getUserContext(){return this.user$}loginAsGuest(){return this.loginService.loginAsGuest().pipe(c(e=>this.getUserContextForSuccessfulLogin(e)))}logout(){u.removeUserContextFromLocalStorage(),this.setUserContext(new n)}getUserContextForSuccessfulLogin(e){let r=new n(e.name,!0,e.authorities,e.token,e.expiredAt);return this.setUserContext(r),r}setUserContext(e){this.user$.next(e),this.user=e,u.saveUserContextInLocalStorage(e)}};t.\u0275fac=function(r){return new(r||t)(i(d))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();export{l as a,d as b,I as c};
