import{b as a}from"./chunk-MLFE2CIA.js";import{Sa as s,Ta as r,qa as t,wa as i,wb as l}from"./chunk-4YTPSGIK.js";var f=(()=>{class e{constructor(){this.roles=s.required({alias:"appDisableIfNoRoleExists"}),this.el=t(r),this.renderer=t(l),this.authService=t(a)}ngOnInit(){this.checkRoleAndDisableIfRequired()}checkRoleAndDisableIfRequired(){this.authService.hasAnyRole(this.roles())?(this.renderer.setProperty(this.el.nativeElement,"disabled",!1),this.renderer.setAttribute(this.el.nativeElement,"disabled","false"),this.el.nativeElement.disabled=!1):(this.renderer.setProperty(this.el.nativeElement,"disabled",!0),this.renderer.setAttribute(this.el.nativeElement,"disabled","true"),this.el.nativeElement.disabled=!0)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=i({type:e,selectors:[["","appDisableIfNoRoleExists",""]],inputs:{roles:[1,"appDisableIfNoRoleExists","roles"]},standalone:!0})}}return e})();export{f as a};
