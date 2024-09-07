import{a as n}from"./chunk-AUBER76A.js";import{b as c}from"./chunk-ZWED4QT2.js";import{a as p,c as h}from"./chunk-X3EEPMJD.js";import{na as a,sa as u}from"./chunk-CACGWYQA.js";var m=(()=>{let o=class o{constructor(e,t){this.httpClient=e,this.authService=t}createJourney(e){let t=this.authService.getCurrentUserContext();return this.httpClient.post(n.journeyApi+"/journey",e,{headers:{Authorization:`Bearer ${t.accessToken}`}})}findJourneyByQuery(e,t,i,y,l,C,d=[]){let r=new p;return r=r.set("q",e.text??""),r=r.set("city",e.city??""),r=r.set("country",e.country??""),r=r.set("category",e.category??""),r=r.set("year",e.year??""),r=r.set("sort",t),r=r.set("order",i.toUpperCase()),r=r.set("pageIndex",y),r=r.set("pageSize",l),r=r.set("publishedOnly",C),r=r.set("tags",d.join(",")),this.getAllJourneys(r)}getAllJourneys(e){let t=this.authService.getCurrentUserContext();return this.httpClient.get(n.journeyApi+"/journeys",{params:e,headers:{Authorization:`Bearer ${t.accessToken}`}})}getAllJourneysAsGeoJson(){let e=this.authService.getCurrentUserContext();return this.httpClient.get(n.journeyApi+"/journeys/published",{headers:{Accept:"application/geo+json",Authorization:`Bearer ${e.accessToken}`}})}getJourneyById(e){let t=this.authService.getCurrentUserContext();return this.httpClient.get(n.journeyApi+"/journey/"+e,{headers:{Authorization:`Bearer ${t.accessToken}`}})}saveJourneyBasicDetails(e){let t=this.authService.getCurrentUserContext();return this.httpClient.put(n.journeyApi+"/journey/"+e.id,e,{headers:{"Content-Type":"application/vnd.journey.api.basic.v1+json",Authorization:`Bearer ${t.accessToken}`}})}saveJourneyGeoDetails(e,t){let i=this.authService.getCurrentUserContext();return this.httpClient.put(n.journeyApi+"/journey/"+e.id,t,{headers:{"Content-Type":"application/vnd.journey.api.geo.v1+json",Authorization:`Bearer ${i.accessToken}`}})}saveJourneyImagesDetails(e,t){let i=this.authService.getCurrentUserContext();return this.httpClient.put(n.journeyApi+"/journey/"+e.id,t,{headers:{"Content-Type":"application/vnd.journey.api.images.v1+json",Authorization:`Bearer ${i.accessToken}`}})}saveJourneyVideosDetails(e,t){let i=this.authService.getCurrentUserContext();return this.httpClient.put(n.journeyApi+"/journey/"+e.id,t,{headers:{"Content-Type":"application/vnd.journey.api.videos.v1+json",Authorization:`Bearer ${i.accessToken}`}})}publishJourney(e){let t=this.authService.getCurrentUserContext();return this.httpClient.put(n.journeyApi+"/journey/"+e.id,e,{headers:{"Content-Type":"application/vnd.journey.api.publish.v1+json",Authorization:`Bearer ${t.accessToken}`}})}deleteJourney(e){let t=this.authService.getCurrentUserContext();return this.httpClient.delete(n.journeyApi+"/journey/"+e.id,{headers:{Authorization:`Bearer ${t.accessToken}`}})}};o.\u0275fac=function(t){return new(t||o)(u(h),u(c))},o.\u0275prov=a({token:o,factory:o.\u0275fac,providedIn:"root"});let s=o;return s})();export{m as a};
