import{o as A}from"./chunk-MIMT4L35.js";import{Bc as I,Gb as w,Ha as _,Ia as v,Jb as b,Jc as O,Nb as s,Ob as d,Pb as l,Qb as S,Rb as M,Ta as k,Yb as c,Za as y,Zb as o,_b as u,_c as g,bc as p,jc as C,nc as T,oc as E,pa as h,pc as x,qb as a,rb as m,tc as P,ua as f}from"./chunk-Y7SRRAOL.js";var W=["determinateSpinner"];function N(t,j){if(t&1&&(_(),c(0,"svg",11),u(1,"circle",12),o()),t&2){let r=C();s("viewBox",r._viewBox()),a(),l("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeCircumference()/2,"px")("stroke-width",r._circleStrokeWidth(),"%"),s("r",r._circleRadius())}}var D=new h("mat-progress-spinner-default-options",{providedIn:"root",factory:B});function B(){return{diameter:R}}var R=100,z=10,ee=(()=>{class t{get color(){return this._color||this._defaultColor}set color(r){this._color=r}constructor(r,i,e){this._elementRef=r,this._defaultColor="primary",this._value=0,this._diameter=R,this._noopAnimations=i==="NoopAnimations"&&!!e&&!e._forceAnimations,this.mode=r.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}get value(){return this.mode==="determinate"?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,r||0))}get diameter(){return this._diameter}set diameter(r){this._diameter=r||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(r){this._strokeWidth=r||0}_circleRadius(){return(this.diameter-z)/2}_viewBox(){let r=this._circleRadius()*2+this.strokeWidth;return`0 0 ${r} ${r}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static{this.\u0275fac=function(i){return new(i||t)(m(k),m(y,8),m(D))}}static{this.\u0275cmp=f({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,e){if(i&1&&T(W,5),i&2){let n;E(n=x())&&(e._determinateCircle=n.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,e){i&2&&(s("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",e.mode==="determinate"?e.value:null)("mode",e.mode),M("mat-"+e.color),l("width",e.diameter,"px")("height",e.diameter,"px")("--mdc-circular-progress-size",e.diameter+"px")("--mdc-circular-progress-active-indicator-width",e.diameter+"px"),S("_mat-animation-noopable",e._noopAnimations)("mdc-circular-progress--indeterminate",e.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",g],diameter:[2,"diameter","diameter",g],strokeWidth:[2,"strokeWidth","strokeWidth",g]},exportAs:["matProgressSpinner"],standalone:!0,features:[w,I],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,e){if(i&1&&(b(0,N,2,8,"ng-template",null,0,O),c(2,"div",2,1),_(),c(4,"svg",3),u(5,"circle",4),o()(),v(),c(6,"div",5)(7,"div",6)(8,"div",7),p(9,8),o(),c(10,"div",9),p(11,8),o(),c(12,"div",10),p(13,8),o()()()),i&2){let n=P(1);a(4),s("viewBox",e._viewBox()),a(),l("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeDashOffset(),"px")("stroke-width",e._circleStrokeWidth(),"%"),s("r",e._circleRadius()),a(4),d("ngTemplateOutlet",n),a(2),d("ngTemplateOutlet",n),a(2),d("ngTemplateOutlet",n)}},dependencies:[A],styles:[".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-app-primary))}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],encapsulation:2,changeDetection:0})}}return t})();export{ee as a};
