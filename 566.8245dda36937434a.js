"use strict";(self.webpackChunkjourney=self.webpackChunkjourney||[]).push([[566],{9566:(L,h,a)=>{a.r(h),a.d(h,{GalleryComponent:()=>$});var m=a(4412),f=a(7786),C=a(9172),E=a(5558),b=a(9437),v=a(7673),j=a(6354),_=a(177),y=a(8817),d=a(3391),F=a(3928),g=a(6471),D=a(9213),u=a(7336),M=a(935),p=a(9417),I=a(9183),t=a(4438),T=a(7404),R=a(8498);const k=()=>[1,5,10,20,25];function O(o,s){if(1&o){const e=t.RV6();t.j41(0,"mat-chip-row",36),t.bIt("removed",function(){const n=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.removeTag(n))}),t.EFF(1),t.j41(2,"button",37),t.bIt("click",function(){const n=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.removeTag(n))}),t.j41(3,"mat-icon"),t.EFF(4,"cancel"),t.k0s()()()}if(2&o){const e=s.$implicit;t.Y8G("highlighted",!0)("editable",!1)("removable",!0),t.R7$(),t.SpI(" ",e," ")}}function P(o,s){if(1&o){const e=t.RV6();t.j41(0,"button",38),t.bIt("click",function(){const n=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.sortingFieldChangedEvent.next(n))}),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()}if(2&o){const e=s.$implicit;t.R7$(),t.SpI("",t.bMT(2,1,e)," ")}}function B(o,s){if(1&o){const e=t.RV6();t.j41(0,"button",38),t.bIt("click",function(){const n=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.sortingDirectionChangedEvent.next(n))}),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()}if(2&o){const e=s.$implicit;t.R7$(),t.SpI("",t.bMT(2,1,e)," ")}}function G(o,s){1&o&&(t.j41(0,"div",33),t.nrm(1,"mat-spinner"),t.k0s())}function x(o,s){if(1&o&&(t.j41(0,"span",51),t.EFF(1),t.k0s()),2&o){const e=s.$implicit;t.R7$(),t.JRh(e)}}function S(o,s){if(1&o){const e=t.RV6();t.j41(0,"button",50),t.bIt("click",function(n){t.eBV(e);const i=t.XpG().$implicit,c=t.XpG();return t.Njj(c.editDetails(i,n))}),t.EFF(1,"Edit "),t.k0s()}}function w(o,s){if(1&o){const e=t.RV6();t.j41(0,"div",39)(1,"div",40),t.bIt("click",function(){const n=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.viewDetails(n))}),t.nrm(2,"img",41),t.j41(3,"div",42)(4,"h5",43),t.EFF(5),t.k0s(),t.j41(6,"p",44),t.EFF(7),t.k0s(),t.j41(8,"p",44),t.DNE(9,x,2,1,"span",45),t.k0s(),t.j41(10,"div",46)(11,"div",47)(12,"p",48)(13,"small"),t.EFF(14),t.nI1(15,"date"),t.k0s()(),t.j41(16,"p",48)(17,"small"),t.EFF(18),t.k0s()(),t.j41(19,"p",48)(20,"small"),t.EFF(21),t.k0s()(),t.j41(22,"p",48)(23,"small"),t.EFF(24),t.k0s()()(),t.j41(25,"small"),t.DNE(26,S,2,0,"button",49),t.j41(27,"button",50),t.bIt("click",function(n){const i=t.eBV(e).$implicit,c=t.XpG();return t.Njj(c.viewInTimeline(i,n))}),t.EFF(28,"Timeline "),t.k0s()()()()()()}if(2&o){const e=s.$implicit,r=t.XpG();t.R7$(2),t.Y8G("src",e.thumbnail,t.B4B)("alt",e.thumbnail),t.R7$(3),t.JRh(e.name),t.R7$(2),t.JRh(e.title),t.R7$(2),t.Y8G("ngForOf",e.tags)("ngForTrackBy",r.trackTagByFn),t.R7$(5),t.JRh(t.i5U(15,10,e.journeyDate,"dd.MM.YYYY")),t.R7$(4),t.JRh(e.city),t.R7$(3),t.JRh(e.country),t.R7$(3),t.JRh(e.category)}}let $=(()=>{class o{constructor(e,r){this.journeyService=e,this.router=r,this.sortableFields=["journeyDate","name","title","city","country","category","location"],this.sortingFieldChangedEvent=new m.t("journeyDate"),this.sortableDirections=["asc","desc"],this.sortingDirectionChangedEvent=new m.t("desc"),this.isLoadingResults=!1,this.defaultPageSize=10,this.totalElements=0,this.data=[],this.trackJourneyByFn=(n,i)=>i.id,this.trackTagByFn=(n,i)=>i,this.separatorKeysCodes=[u.Fm,u.KE,u.t6],this.tags=[],this.tagsCriteriaChange=new m.t([]),this.searchCriteria=new M.k,r.getCurrentNavigation()?.extras.state&&(this.searchCriteria=r.getCurrentNavigation()?.extras.state)}ngAfterViewInit(){(0,f.h)(this.paginator.page,this.sortingFieldChangedEvent,this.sortingDirectionChangedEvent,this.tagsCriteriaChange).pipe((0,C.Z)(),(0,E.n)(()=>(this.isLoadingResults=!0,this.journeyService.findJourneyByQuery(this.searchCriteria,this.sortingFieldChangedEvent.getValue(),this.sortingDirectionChangedEvent.getValue(),this.paginator.pageIndex,this.paginator.pageSize,!0,this.tags).pipe((0,b.W)(()=>(0,v.of)(null))))),(0,j.T)(e=>(this.isLoadingResults=!1,e))).subscribe(e=>this.onSuccess(e))}onSuccess(e){this.totalElements=e?.totalElements??0,this.data=e?.content??[]}ngOnInit(){this.journeyService.findJourneyByQuery(this.searchCriteria,"journeyDate","desc",0,this.defaultPageSize,!0).subscribe(e=>this.onSuccess(e))}viewDetails(e){this.router.navigate(["/journey",e.id,"view"]).then(console.log)}editDetails(e,r){return r.stopPropagation(),this.router.navigate(["/journey",e.id,"edit"]).then(console.log),!1}viewInTimeline(e,r){return r.stopPropagation(),this.router.navigate(["/timeline"],{queryParams:{id:e.id}}).then(console.log),!1}addTag(e){const r=(e.value||"").trim();r&&(this.tags.push(r),this.tagsCriteriaChange.next(this.tags)),e.chipInput.clear()}removeTag(e){const r=this.tags.indexOf(e);r>=0&&(this.tags.splice(r,1),this.tagsCriteriaChange.next(this.tags))}static#t=this.\u0275fac=function(r){return new(r||o)(t.rXU(T.K),t.rXU(R.Ix))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-gallery"]],viewQuery:function(r,n){if(1&r&&t.GBs(y.iy,5),2&r){let i;t.mGM(i=t.lsd())&&(n.paginator=i.first)}},standalone:!0,features:[t.aNF],decls:58,vars:21,consts:[["chipGrid",""],[1,"container","advanced-search"],[1,"d-flex","justify-content-end"],["data-bs-toggle","collapse","href","#searchFields","role","link","aria-expanded","false","aria-controls","searchFields",1,"text-decoration-none"],["id","searchFields",1,"row","g-2","mb-3","collapse"],[1,"col-sm"],[1,"form-floating","border","border-primary"],["type","text","id","categoryInput","placeholder","Category",1,"form-control","form-control-sm","ignore-highlight",3,"ngModelChange","ngModel"],["for","categoryInput"],["type","text","id","cityInput","placeholder","City",1,"form-control","form-control-sm","ignore-highlight",3,"ngModelChange","ngModel"],["for","cityInput"],["type","text","id","countryInput","placeholder","Country",1,"form-control","form-control-sm","ignore-highlight",3,"ngModelChange","ngModel"],["for","countryInput"],["type","text","id","yearInput","placeholder","Year",1,"form-control","form-control-sm","ignore-highlight",3,"ngModelChange","ngModel"],["for","yearInput"],[1,"container"],[1,"row"],["aria-label","Tags"],[1,"col-12"],[1,"form-floating"],["placeholder","Filter by Tags","autocomplete","off","id","tagsInput",1,"form-control","border","border-2","border-primary","rounded-4",3,"matChipInputTokenEnd","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["for","tagsInput"],["color","primary",3,"highlighted","editable","removable"],[1,"col-12","col-md-8","mb-md-3","me-0","pe-0"],["aria-label","Select page","color","primary",1,"paginator","me-0",3,"length","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"col-12","col-md-4","sorting","mb-3","me-0"],["ngbDropdown","",1,"d-inline-block","me-1"],["type","button","id","dropdownSortingField","ngbDropdownToggle","",1,"btn","btn-outline-primary","btn-sm"],["ngbDropdownMenu","","aria-labelledby","dropdownSortingField"],["ngbDropdownItem",""],["ngbDropdown","",1,"d-inline-block"],["type","button","id","dropdownSortingDirection","ngbDropdownToggle","",1,"btn","btn-outline-primary","btn-sm"],["ngbDropdownMenu","","aria-labelledby","dropdownSortingDirection"],[1,"loading-shade"],[1,"card-group","justify-content-center","align-items-center"],["class","m-0",4,"ngFor","ngForOf","ngForTrackBy"],["color","primary",3,"removed","highlighted","editable","removable"],["matChipRemove","",3,"click"],["ngbDropdownItem","",3,"click"],[1,"m-0"],["role","link",1,"card","bg-dark","text-bg-dark","text-white",3,"click"],[1,"card-img",3,"src","alt"],[1,"card-img-overlay","d-flex","flex-column","align-self-stretch","card-text-wrapper"],[1,"card-title"],[1,"card-text"],["class","badge bg-dark bg-opacity-25 border-dark rounded-pill border me-1 fw-normal",4,"ngFor","ngForOf","ngForTrackBy"],[1,"d-inline-flex","footer-wrapper","mt-auto","flex-nowrap","flex-row","justify-content-between"],[1,"d-inline-flex","gap-1"],[1,"small","border","border-light","border-1","rounded-2","ps-1","pe-1","border-opacity-50"],["type","button","class","btn btn-sm btn-outline-success ms-1",3,"click",4,"hasWriteAccess"],["type","button",1,"btn","btn-sm","btn-outline-success","ms-1",3,"click"],[1,"badge","bg-dark","bg-opacity-25","border-dark","rounded-pill","border","me-1","fw-normal"]],template:function(r,n){if(1&r){const i=t.RV6();t.j41(0,"section",1)(1,"div",2)(2,"a",3),t.EFF(3," Advanced Search "),t.k0s()(),t.j41(4,"div",4)(5,"div",5)(6,"div",6)(7,"input",7),t.mxI("ngModelChange",function(l){return t.eBV(i),t.DH7(n.searchCriteria.category,l)||(n.searchCriteria.category=l),t.Njj(l)}),t.k0s(),t.j41(8,"label",8),t.EFF(9,"Category"),t.k0s()()(),t.j41(10,"div",5)(11,"div",6)(12,"input",9),t.mxI("ngModelChange",function(l){return t.eBV(i),t.DH7(n.searchCriteria.city,l)||(n.searchCriteria.city=l),t.Njj(l)}),t.k0s(),t.j41(13,"label",10),t.EFF(14,"City"),t.k0s()()(),t.j41(15,"div",5)(16,"div",6)(17,"input",11),t.mxI("ngModelChange",function(l){return t.eBV(i),t.DH7(n.searchCriteria.country,l)||(n.searchCriteria.country=l),t.Njj(l)}),t.k0s(),t.j41(18,"label",12),t.EFF(19,"Country"),t.k0s()()(),t.j41(20,"div",5)(21,"div",6)(22,"input",13),t.mxI("ngModelChange",function(l){return t.eBV(i),t.DH7(n.searchCriteria.year,l)||(n.searchCriteria.year=l),t.Njj(l)}),t.k0s(),t.j41(23,"label",14),t.EFF(24,"Year"),t.k0s()()()()(),t.j41(25,"section",15)(26,"div",16)(27,"mat-chip-grid",17,0)(29,"div",18)(30,"div",19)(31,"input",20),t.bIt("matChipInputTokenEnd",function(l){return t.eBV(i),t.Njj(n.addTag(l))}),t.k0s(),t.j41(32,"label",21),t.EFF(33,"Filter by Tags"),t.k0s()()(),t.j41(34,"div",18),t.Z7z(35,O,5,4,"mat-chip-row",22,t.fX1),t.k0s()()(),t.j41(37,"div",16)(38,"div",23),t.nrm(39,"mat-paginator",24),t.k0s(),t.j41(40,"div",25)(41,"div",26)(42,"button",27),t.EFF(43),t.nI1(44,"titlecase"),t.k0s(),t.j41(45,"div",28),t.Z7z(46,P,3,3,"button",29,t.fX1),t.k0s()(),t.j41(48,"div",30)(49,"button",31),t.EFF(50),t.nI1(51,"uppercase"),t.k0s(),t.j41(52,"div",32),t.Z7z(53,B,3,3,"button",29,t.fX1),t.k0s()()()(),t.DNE(55,G,2,0,"div",33),t.j41(56,"div",34),t.DNE(57,w,29,13,"div",35),t.k0s()()}if(2&r){const i=t.sdS(28);t.R7$(7),t.R50("ngModel",n.searchCriteria.category),t.R7$(5),t.R50("ngModel",n.searchCriteria.city),t.R7$(5),t.R50("ngModel",n.searchCriteria.country),t.R7$(5),t.R50("ngModel",n.searchCriteria.year),t.R7$(9),t.Y8G("matChipInputFor",i)("matChipInputSeparatorKeyCodes",n.separatorKeysCodes)("matChipInputAddOnBlur",!0),t.R7$(4),t.Dyx(n.tags),t.R7$(4),t.Y8G("length",n.totalElements)("pageSize",n.defaultPageSize)("pageSizeOptions",t.lJ4(20,k))("showFirstLastButtons",!0),t.R7$(4),t.SpI(" ",t.bMT(44,16,n.sortingFieldChangedEvent.getValue())," "),t.R7$(3),t.Dyx(n.sortableFields),t.R7$(4),t.SpI(" ",t.bMT(51,18,n.sortingDirectionChangedEvent.getValue())," "),t.R7$(3),t.Dyx(n.sortableDirections),t.R7$(2),t.vxM(55,n.isLoadingResults?55:-1),t.R7$(2),t.Y8G("ngForOf",n.data)("ngForTrackBy",n.trackJourneyByFn)}},dependencies:[_.Sq,y.iy,_.vh,d.zH,d.tg,d.do,d.U0,d._H,_.PV,_.Pc,F.r,g.YN,g.HW,g.D7,g.Zv,g.jH,D.An,p.YN,p.me,p.BC,p.vS,I.LG],styles:[".sorting[_ngcontent-%COMP%]{background:#f8f9fa;background:linear-gradient(90deg,#4246d7a6 1%,#f8f9fa1a 80%);font-weight:400;font-size:.9em!important;vertical-align:center;text-align:center;align-items:center;justify-content:center!important;display:flex;color:#000}.paginator[_ngcontent-%COMP%]{background:#f8f9fa;background:linear-gradient(90deg,#f8f9fa80 1%,#4246d7a6 45%);font-weight:400;font-size:.9em!important;vertical-align:center;text-align:center;align-items:center;justify-content:center!important;display:flex;color:#000}.mat-mdc-select[_ngcontent-%COMP%]{color:#f5f5f5!important}.card[_ngcontent-%COMP%]{width:30rem;height:15rem;margin:0 .5rem .5rem 0!important;cursor:pointer}.card-img[_ngcontent-%COMP%]{opacity:75%;width:100%;height:100%}.card-text-wrapper[_ngcontent-%COMP%]{background:#0003}@media (max-width: 575.98px){.card[_ngcontent-%COMP%]{width:100%;height:15rem;margin:0 0 .5rem!important}.sorting[_ngcontent-%COMP%]{background:#f8f9fa;background:linear-gradient(90deg,#f8f9fa80 1%,#4246d7a6 45%)}}"]})}return o})()}}]);