import{a as Me}from"./chunk-OEK3JCZ4.js";import{a as x}from"./chunk-SQHDAENY.js";import"./chunk-C6WWAP27.js";import{a as ce,b as de,c as ue,d as ge,e as he}from"./chunk-WSXTP4KN.js";import{a as ye,b as Ce,c as _e,d as fe}from"./chunk-V5K2HC7D.js";import{a as me}from"./chunk-VZIBL2UH.js";import{a as Z,b as ee,c as te,d as ie}from"./chunk-EBX3TUOV.js";import"./chunk-G5AMOGBG.js";import"./chunk-3MHL7ZCB.js";import"./chunk-6KEWLPAX.js";import"./chunk-LUTGFMU4.js";import"./chunk-YWWL5CML.js";import{b as ae}from"./chunk-J527RC4H.js";import{i as ne}from"./chunk-SCLP46IR.js";import"./chunk-J5G26YES.js";import{h as K}from"./chunk-WTO4EC35.js";import"./chunk-54PG2AAV.js";import"./chunk-4VR3POOM.js";import{b as se,c as pe}from"./chunk-IZMCTKCZ.js";import{f as oe,g as le}from"./chunk-5E65QLTG.js";import"./chunk-UOIYGVYY.js";import"./chunk-EIKDUGJK.js";import"./chunk-XML6PV75.js";import"./chunk-EQLHPT2L.js";import"./chunk-BCB5VHUA.js";import{b as q,g as U,j as $,u as X}from"./chunk-6U4T77UP.js";import"./chunk-BMVWFPOQ.js";import{b as H}from"./chunk-KGY5YTZW.js";import"./chunk-7PP3UOCC.js";import{a as Y}from"./chunk-BDA2L7YQ.js";import"./chunk-3QXJH2R2.js";import{h as re}from"./chunk-CDDTRRPJ.js";import"./chunk-SWBG6ESO.js";import{c as Q}from"./chunk-UP7FM5GD.js";import"./chunk-TO3RVP4M.js";import{o as z,p as J}from"./chunk-6PDFZEHV.js";import{$ as A,$b as C,Ac as c,Cb as O,Cc as y,Ec as w,F as B,Fc as v,Gc as b,I as P,Jc as N,Mc as S,Na as G,Nc as E,Tb as u,_ as j,_b as I,ac as _,bc as i,cc as l,dc as F,hc as f,m as V,mc as h,ob as a,oc as M,r as k,tb as D,wa as p,wb as L,xa as m,xc as W,yc as R,zc as T}from"./chunk-EL6UOR5J.js";var we=()=>[1,5,10,20,25],ve=(o,d)=>d.id;function be(o,d){if(o&1){let t=f();i(0,"mat-chip-row",25),h("removed",function(){let e=p(t).$implicit,s=M();return m(s.removeTag(e))}),c(1),i(2,"button",26),h("click",function(){let e=p(t).$implicit,s=M();return m(s.removeTag(e))}),i(3,"mat-icon"),c(4,"cancel"),l()()()}if(o&2){let t=d.$implicit;u("highlighted",!0)("editable",!1)("removable",!0),a(),y(" ",t," ")}}function Se(o,d){if(o&1){let t=f();i(0,"button",27),h("click",function(){let e=p(t).$implicit,s=M();return m(s.sortingFieldChangedEvent.next(e))}),c(1),S(2,"titlecase"),l()}if(o&2){let t=d.$implicit;a(),y(" ",E(2,1,t.label)," ")}}function Ee(o,d){if(o&1){let t=f();i(0,"button",27),h("click",function(){let e=p(t).$implicit,s=M();return m(s.sortingDirectionChangedEvent.next(e))}),c(1),S(2,"uppercase"),l()}if(o&2){let t=d.$implicit;a(),y(" ",E(2,1,t)," ")}}function Ie(o,d){if(o&1&&F(0,"app-journey-card-view",24),o&2){let t=d.$implicit;u("journey",t)}}var nt=(()=>{class o{constructor(t,r){this.journeyService=t,this.sortableFields=[{label:"Journey Date",key:"journeyDate"},{label:"Journey Name",key:"name"},{label:"Geo Title",key:"geoDetails.title"},{label:"City",key:"geoDetails.city"},{label:"Country",key:"geoDetails.country"},{label:"Category",key:"geoDetails.category"},{label:"Geo Location",key:"geoDetails.location"}],this.sortingFieldChangedEvent=new V({label:"Journey Date",key:"journeyDate"}),this.sortableDirections=["asc","desc"],this.sortingDirectionChangedEvent=new V("desc"),this.defaultPageSize=10,this.separatorKeysCodes=[13,188,32],this.searchCriteria=new Me,this.paginator=L.required(x),this.tags=G([]),this.tagsObservable=H(this.tags),this.searchResult=G({totalElements:0,data:[]}),this.GALLERY_PAGE_INFO=K,r.getCurrentNavigation()?.extras.state&&(this.searchCriteria=r.getCurrentNavigation()?.extras.state)}ngAfterViewInit(){B(this.paginator().page,this.sortingFieldChangedEvent,this.sortingDirectionChangedEvent,this.tagsObservable).pipe(j(),A(()=>this.journeyService.findJourneyByQuery(this.searchCriteria,this.sortingFieldChangedEvent.getValue().key,this.sortingDirectionChangedEvent.getValue(),this.paginator().pageIndex,this.paginator().pageSize,!0,this.tags()).pipe(P(()=>k(null))))).subscribe(t=>this.onSuccess(t))}onSuccess(t){this.searchResult.set({totalElements:t?.totalElements??0,data:t?.content??[]})}ngOnInit(){this.journeyService.findJourneyByQuery(this.searchCriteria,"journeyDate","desc",0,this.defaultPageSize,!0).subscribe(t=>this.onSuccess(t))}addTag(t){let r=(t.value||"").trim();r&&this.tags.update(e=>[...e,r]),t.chipInput.clear()}removeTag(t){this.tags.update(r=>r.filter(e=>e!==t))}static{this.\u0275fac=function(r){return new(r||o)(D(ne),D(Q))}}static{this.\u0275cmp=O({type:o,selectors:[["app-gallery"]],viewQuery:function(r,e){r&1&&W(e.paginator,x,5),r&2&&R()},decls:50,vars:21,consts:[["chipGrid",""],["sortingFieldMenu","matMenu"],["sortingDirectionMenu","matMenu"],[3,"pageInfo"],[1,"container","py-2"],["id","searchFields"],[1,"text-sm","font-normal"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-4","gap-4","mt-3"],["appearance","outline",1,"w-full"],["matInput","","type","text","id","categoryInput","placeholder","Category",3,"ngModelChange","ngModel"],["matInput","","type","text","id","cityInput","placeholder","City",3,"ngModelChange","ngModel"],["matInput","","type","text","id","countryInput","placeholder","Country",3,"ngModelChange","ngModel"],["matInput","","type","text","id","yearInput","placeholder","Year",3,"ngModelChange","ngModel"],[1,"container","p-0","m-0"],["aria-label","Tags",1,"w-full"],["matInput","","id","tagsInput","placeholder","Filter by Tags",3,"matChipInputTokenEnd","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],[1,"flex","flex-wrap","gap-1","m-0"],["color","primary",3,"highlighted","editable","removable"],[1,"m-0","p-0","flex","justify-center","max-sm:flex-col","text-center","content-center","items-center"],["aria-label","Select page","color","primary",1,"paginator",3,"length","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"inline-flex"],["mat-menu-item",""],["mat-button","",1,"text-primary","border","border-primary","bg-white","px-2","py-1","rounded-md","shadow-sm","hover:bg-gray-100",3,"matMenuTriggerFor"],[1,"container","flex","gap-2","items-center","justify-center","flex-wrap"],[1,"max-sm:w-full",3,"journey"],["color","primary",3,"removed","highlighted","editable","removable"],["matChipRemove","",3,"click"],["mat-menu-item","",3,"click"]],template:function(r,e){if(r&1){let s=f();i(0,"header"),F(1,"app-page-header",3),l(),i(2,"main")(3,"section",4)(4,"mat-expansion-panel",5)(5,"mat-expansion-panel-header")(6,"mat-panel-title",6)(7,"span"),c(8,"Filter"),l()()(),i(9,"div",7)(10,"mat-form-field",8)(11,"input",9),b("ngModelChange",function(n){return p(s),v(e.searchCriteria.category,n)||(e.searchCriteria.category=n),m(n)}),l()(),i(12,"mat-form-field",8)(13,"input",10),b("ngModelChange",function(n){return p(s),v(e.searchCriteria.city,n)||(e.searchCriteria.city=n),m(n)}),l()(),i(14,"mat-form-field",8)(15,"input",11),b("ngModelChange",function(n){return p(s),v(e.searchCriteria.country,n)||(e.searchCriteria.country=n),m(n)}),l()(),i(16,"mat-form-field",8)(17,"input",12),b("ngModelChange",function(n){return p(s),v(e.searchCriteria.year,n)||(e.searchCriteria.year=n),m(n)}),l()()(),i(18,"div",13)(19,"mat-chip-grid",14,0)(21,"mat-form-field",8)(22,"input",15),h("matChipInputTokenEnd",function(n){return p(s),m(e.addTag(n))}),l()(),i(23,"div",16),C(24,be,5,4,"mat-chip-row",17,I),l()()()()(),i(26,"section",18),F(27,"mat-paginator",19),i(28,"div",20)(29,"mat-menu",null,1),C(31,Se,3,3,"button",21,I),l(),i(33,"button",22),c(34),S(35,"titlecase"),i(36,"mat-icon"),c(37,"arrow_drop_down"),l()(),i(38,"mat-menu",null,2),C(40,Ee,3,3,"button",21,I),l(),i(42,"button",22),c(43),S(44,"uppercase"),i(45,"mat-icon"),c(46,"arrow_drop_down"),l()()()(),i(47,"section",23),C(48,Ie,1,1,"app-journey-card-view",24,ve),l()()}if(r&2){let s=T(20),g=T(30),n=T(39);a(),u("pageInfo",e.GALLERY_PAGE_INFO),a(10),w("ngModel",e.searchCriteria.category),a(2),w("ngModel",e.searchCriteria.city),a(2),w("ngModel",e.searchCriteria.country),a(2),w("ngModel",e.searchCriteria.year),a(5),u("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",!0),a(2),_(e.tags()),a(3),u("length",e.searchResult().totalElements)("pageSize",e.defaultPageSize)("pageSizeOptions",N(20,we))("showFirstLastButtons",!0),a(4),_(e.sortableFields),a(2),u("matMenuTriggerFor",g),a(),y(" ",E(35,16,e.sortingFieldChangedEvent.getValue().label)," "),a(6),_(e.sortableDirections),a(2),u("matMenuTriggerFor",n),a(),y(" ",E(44,18,e.sortingDirectionChangedEvent.getValue())," "),a(5),_(e.searchResult().data)}},dependencies:[x,z,J,he,ue,ge,ce,de,Y,X,q,U,$,ae,le,oe,pe,se,fe,ye,Ce,_e,re,ie,ee,Z,te,me],styles:[".paginator[_ngcontent-%COMP%]{text-align:center;align-items:center;justify-content:center!important;display:flex;font-weight:500}"],changeDetection:0})}}return o})();export{nt as GalleryComponent};
