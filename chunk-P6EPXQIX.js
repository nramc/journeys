import{I as d,Pa as h,aa as c,ea as v,l as b,ma as l,o as i,sa as a}from"./chunk-Y7SRRAOL.js";var n=class{constructor(r){this._box=r,this._destroyed=new i,this._resizeSubject=new i,this._elementObservables=new Map,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new b(e=>{let s=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),s.unsubscribe(),this._elementObservables.delete(r)}}).pipe(d(e=>e.some(s=>s.target===r)),c({bufferSize:1,refCount:!0}),v(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},y=(()=>{class t{constructor(){this._observers=new Map,this._ngZone=a(h),typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),typeof ResizeObserver<"u"}observe(e,s){let o=s?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new n(o)),this._observers.get(o).observe(e)}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{y as a};
