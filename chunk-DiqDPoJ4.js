import{$ as LD,Br as qs,D as Ew,Pn as dl,Qr as tg,Un as fl,_ as D,bt as RD,wt as S$1,x as Dw,yi as yh}from"./chunk-B8fbW7tV.js";import{E as ki}from"./chunk-Cdcz0wpU.js";var v=[`*`];var h=[[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],[[``,`mat-card-image`,``],[``,`matCardImage`,``],[``,`mat-card-sm-image`,``],[``,`matCardImageSmall`,``],[``,`mat-card-md-image`,``],[``,`matCardImageMedium`,``],[``,`mat-card-lg-image`,``],[``,`matCardImageLarge`,``],[``,`mat-card-xl-image`,``],[``,`matCardImageXLarge`,``]],`*`];var y=[`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`[mat-card-image], [matCardImage],
                    [mat-card-sm-image], [matCardImageSmall],
                    [mat-card-md-image], [matCardImageMedium],
                    [mat-card-lg-image], [matCardImageLarge],
                    [mat-card-xl-image], [matCardImageXLarge]`,`*`];var b=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var x=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var C=new S$1(`MAT_CARD_CONFIG`);var k=(()=>{class t{appearance;constructor(){let e=D(C,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(a){return new(a||t)};static ɵcmp=RD({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(a,r){a&2&&tg(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:v,decls:1,vars:0,template:function(a,r){a&1&&(Ew(),Dw(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})();var S=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=LD({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var T=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵcmp=RD({type:t,selectors:[[`mat-card-title-group`]],hostAttrs:[1,`mat-mdc-card-title-group`],ngContentSelectors:y,decls:4,vars:0,template:function(a,r){a&1&&(Ew(h),dl(0,`div`),Dw(1),fl(),Dw(2,1),Dw(3,2))},encapsulation:2})}return t})();var z=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=LD({type:t,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return t})();var E=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=LD({type:t,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return t})();var L=(()=>{class t{align=`start`;static ɵfac=function(a){return new(a||t)};static ɵdir=LD({type:t,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(a,r){a&2&&tg(`mat-mdc-card-actions-align-end`,r.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return t})();var B=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵcmp=RD({type:t,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:x,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(a,r){a&1&&(Ew(b),Dw(0),dl(1,`div`,0),Dw(2,1),fl(),Dw(3,2))},encapsulation:2})}return t})();var G=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=LD({type:t,selectors:[[`mat-card-footer`]],hostAttrs:[1,`mat-mdc-card-footer`]})}return t})();var H=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=LD({type:t,selectors:[[``,`mat-card-lg-image`,``],[``,`matCardImageLarge`,``]],hostAttrs:[1,`mat-mdc-card-lg-image`,`mdc-card__media`]})}return t})();var N=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=LD({type:t,selectors:[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],hostAttrs:[1,`mat-mdc-card-avatar`]})}return t})();var R=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=yh({type:t});static ɵinj=qs({imports:[ki]})}return t})();export{L as a,S as c,z as d,H as i,T as l,E as n,N as o,G as r,R as s,B as t,k as u};