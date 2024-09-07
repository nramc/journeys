import{a as r}from"./chunk-AUBER76A.js";import{b as u}from"./chunk-ZWED4QT2.js";import{c as a}from"./chunk-X3EEPMJD.js";import{na as s,sa as o}from"./chunk-CACGWYQA.js";var l=(()=>{let i=class i{constructor(t,e){this.httpClient=t,this.authService=e}getProfileData(){let t=this.authService.getCurrentUserContext();return this.httpClient.get(r.journeyApi+"/my-account",{headers:{Authorization:`Bearer ${t.accessToken}`}})}saveProfileData(t){let e=this.authService.getCurrentUserContext();return this.httpClient.post(r.journeyApi+"/my-account",t,{headers:{Authorization:`Bearer ${e.accessToken}`,"Content-Type":"application/json"}})}getSecurityEmailAddress(){let t=this.authService.getCurrentUserContext();return this.httpClient.get(r.journeyApi+"/my-account/securityAttribute/emailAddress",{headers:{Authorization:`Bearer ${t.accessToken}`}})}saveSecurityEmailAddress(t){let e=this.authService.getCurrentUserContext();return this.httpClient.post(r.journeyApi+"/my-account/securityAttribute/emailAddress",{emailAddress:t},{headers:{Authorization:`Bearer ${e.accessToken}`,"Content-Type":"application/json"}})}deleteMyAccount(){let t=this.authService.getCurrentUserContext();return this.httpClient.delete(r.journeyApi+"/my-account",{headers:{Authorization:`Bearer ${t.accessToken}`,"Content-Type":"application/json"}})}generateNewQRCode(){let t=this.authService.getCurrentUserContext();return this.httpClient.get(r.journeyApi+"/my-account/securityAttribute/totp",{headers:{Authorization:`Bearer ${t.accessToken}`}})}activateTotp(t){let e=this.authService.getCurrentUserContext();return this.httpClient.post(r.journeyApi+"/my-account/securityAttribute/totp",t,{headers:{Authorization:`Bearer ${e.accessToken}`,"Content-Type":"application/json"}})}getTotpStatus(){let t=this.authService.getCurrentUserContext();return this.httpClient.get(r.journeyApi+"/my-account/securityAttribute/totp/status",{headers:{Authorization:`Bearer ${t.accessToken}`}})}verifyTotpCode(t){let e=this.authService.getCurrentUserContext();return this.httpClient.post(r.journeyApi+"/my-account/securityAttribute/totp/verify",{code:t},{headers:{Authorization:`Bearer ${e.accessToken}`,"Content-Type":"application/json"}})}deactivateTotp(){let t=this.authService.getCurrentUserContext();return this.httpClient.delete(r.journeyApi+"/my-account/securityAttribute/totp",{headers:{Authorization:`Bearer ${t.accessToken}`}})}changeMfaStatus(t){let e=this.authService.getCurrentUserContext();return this.httpClient.post(r.journeyApi+"/my-account/securityAttribute/mfa",{status:t},{headers:{Authorization:`Bearer ${e.accessToken}`}})}changePassword(t){let e=this.authService.getCurrentUserContext();return this.httpClient.post(r.journeyApi+"/my-account/changePassword",{newPassword:t},{headers:{Authorization:`Bearer ${e.accessToken}`}})}};i.\u0275fac=function(e){return new(e||i)(o(a),o(u))},i.\u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();export{l as a};