import{$ as ne,B as ee,C as te,D as l,F,I as x,Ia as he,Ka as M,Ma as C,N as S,O as B,P as L,Pa as ue,W as ie,Y as O,a as P,b as J,ba as H,ca as E,f as W,g as u,h as Q,ha as se,ia as oe,j as A,k,m as f,n as Y,na as ae,o as w,oa as re,p as q,q as T,r as D,ra as le,s as Z,sa as ce,t as K,ta as de,u as c,v as X,w as I,z as g,za as V}from"./chunk-QV6IRI2N.js";var He=(()=>{let t=class t{constructor(e){this.http=e,this.API_PREFIX="forum"}get currentForumName(){return this.currentForum&&this.forums?this.forums.find(e=>e.label===this.currentForum).name:null}getForums(){return this.http.get(`${this.API_PREFIX}/list`)}setForums(){this.getForums().subscribe({next:e=>{this.forums=e}})}};t.\u0275fac=function(n){return new(n||t)(te(ue))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var ye=["*"];var ve=["dialog"];var pe={animation:!0,transitionTimerDelayMs:5},we=(()=>{let t=class t{constructor(){this.animation=pe.animation}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();function De(s){let{transitionDelay:t,transitionDuration:a}=window.getComputedStyle(s),e=parseFloat(t),n=parseFloat(a);return(e+n)*1e3}function _e(s){return typeof s=="string"}function G(s){return s!=null}function Te(s){return s&&s.then}function fe(s){return(s||document.body).getBoundingClientRect()}function Se(s){return t=>new W(a=>{let e=o=>s.run(()=>a.next(o)),n=o=>s.run(()=>a.error(o)),i=()=>s.run(()=>a.complete());return t.subscribe({next:e,error:n,complete:i})})}var Oe=()=>{},{transitionTimerDelayMs:Ee}=pe,R=new Map,b=(s,t,a,e)=>{let n=e.context||{},i=R.get(t);if(i)switch(e.runningTransition){case"continue":return Q;case"stop":s.run(()=>i.transition$.complete()),n=Object.assign(i.context,n),R.delete(t)}let o=a(t,e.animation,n)||Oe;if(!e.animation||window.getComputedStyle(t).transitionProperty==="none")return s.run(()=>o()),A(void 0).pipe(Se(s));let r=new u,d=new u,h=r.pipe(Z(!0));R.set(t,{transition$:r,complete:()=>{d.next(),d.complete()},context:n});let p=De(t);return s.runOutsideAngular(()=>{let v=f(t,"transitionend").pipe(c(h),w(({target:m})=>m===t)),_=Y(p+Ee).pipe(c(h));q(_,v,d).pipe(c(h)).subscribe(()=>{R.delete(t),s.run(()=>{o(),r.next(),r.complete()})})}),r.asObservable()};var U=function(s){return s[s.Tab=9]="Tab",s[s.Enter=13]="Enter",s[s.Escape=27]="Escape",s[s.Space=32]="Space",s[s.PageUp=33]="PageUp",s[s.PageDown=34]="PageDown",s[s.End=35]="End",s[s.Home=36]="Home",s[s.ArrowLeft=37]="ArrowLeft",s[s.ArrowUp=38]="ArrowUp",s[s.ArrowRight=39]="ArrowRight",s[s.ArrowDown=40]="ArrowDown",s}(U||{});var bi=(()=>{let s=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,t=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(s()||t()):!1})();var Me=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function ge(s){let t=Array.from(s.querySelectorAll(Me)).filter(a=>a.tabIndex!==-1);return[t[0],t[t.length-1]]}var Ce=(s,t,a,e=!1)=>{s.runOutsideAngular(()=>{let n=f(t,"focusin").pipe(c(a),k(i=>i.target));f(t,"keydown").pipe(c(a),w(i=>i.which===U.Tab),I(n)).subscribe(([i,o])=>{let[r,d]=ge(t);(o===r||o===t)&&i.shiftKey&&(d.focus(),i.preventDefault()),o===d&&!i.shiftKey&&(r.focus(),i.preventDefault())}),e&&f(t,"click").pipe(c(a),I(n),k(i=>i[1])).subscribe(i=>i.focus())})};var yi=new Date(1882,10,12),vi=new Date(2174,10,25);var wi=1e3*60*60*24;var z=1080,Re=24*z,Ne=12*z+793,Di=29*Re+Ne,Ti=11*z+204;var Pe=(()=>{let t=class t{constructor(){this._ngbConfig=l(we),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),y=class{constructor(t,a,e){this.nodes=t,this.viewRef=a,this.componentRef=e}};var Ae=(()=>{let t=class t{constructor(){this._document=l(C)}hide(){let e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),n=this._document.body,i=n.style,{overflow:o,paddingRight:r}=i;if(e>0){let d=parseFloat(window.getComputedStyle(n).paddingRight);i.paddingRight=`${d+e}px`}return i.overflow="hidden",()=>{e>0&&(i.paddingRight=r),i.overflow=o}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),ke=(()=>{let t=class t{constructor(){this._nativeElement=l(B).nativeElement,this._zone=l(O)}ngOnInit(){this._zone.onStable.asObservable().pipe(D(1)).subscribe(()=>{b(this._zone,this._nativeElement,(e,n)=>{n&&fe(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return b(this._zone,this._nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=F({type:t,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(n,i){n&2&&(E("modal-backdrop"+(i.backdropClass?" "+i.backdropClass:"")),H("show",!i.animation)("fade",i.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[V],decls:0,vars:0,template:function(n,i){},encapsulation:2});let s=t;return s})(),N=class{update(t){}close(t){}dismiss(t){}},Ie=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],Fe=["animation","backdropClass"],$=class{_applyWindowOptions(t,a){Ie.forEach(e=>{G(a[e])&&(t[e]=a[e])})}_applyBackdropOptions(t,a){Fe.forEach(e=>{G(a[e])&&(t[e]=a[e])})}update(t){this._applyWindowOptions(this._windowCmptRef.instance,t),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,t)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(c(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(c(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(t,a,e,n){this._windowCmptRef=t,this._contentRef=a,this._backdropCmptRef=e,this._beforeDismiss=n,this._closed=new u,this._dismissed=new u,this._hidden=new u,t.instance.dismissEvent.subscribe(i=>{this.dismiss(i)}),this.result=new Promise((i,o)=>{this._resolve=i,this._reject=o}),this.result.then(null,()=>{})}close(t){this._windowCmptRef&&(this._closed.next(t),this._resolve(t),this._removeModalElements())}_dismiss(t){this._dismissed.next(t),this._reject(t),this._removeModalElements()}dismiss(t){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(t);else{let a=this._beforeDismiss();Te(a)?a.then(e=>{e!==!1&&this._dismiss(t)},()=>{}):a!==!1&&this._dismiss(t)}}_removeModalElements(){let t=this._windowCmptRef.instance.hide(),a=this._backdropCmptRef?this._backdropCmptRef.instance.hide():A(void 0);t.subscribe(()=>{let{nativeElement:e}=this._windowCmptRef.location;e.parentNode.removeChild(e),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),a.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:e}=this._backdropCmptRef.location;e.parentNode.removeChild(e),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),T(t,a).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},j=function(s){return s[s.BACKDROP_CLICK=0]="BACKDROP_CLICK",s[s.ESC=1]="ESC",s}(j||{}),xe=(()=>{let t=class t{constructor(){this._document=l(C),this._elRef=l(B),this._zone=l(O),this._closed$=new u,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new L,this.shown=new u,this.hidden=new u}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":_e(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(D(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:e}=this._elRef,n={animation:this.animation,runningTransition:"stop"},i=b(this._zone,e,()=>e.classList.remove("show"),n),o=b(this._zone,this._dialogEl.nativeElement,()=>{},n),r=T(i,o);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let e={animation:this.animation,runningTransition:"continue"},n=b(this._zone,this._elRef.nativeElement,(o,r)=>{r&&fe(o),o.classList.add("show")},e),i=b(this._zone,this._dialogEl.nativeElement,()=>{},e);T(n,i).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{f(e,"keydown").pipe(c(this._closed$),w(i=>i.which===U.Escape)).subscribe(i=>{this.keyboard?requestAnimationFrame(()=>{i.defaultPrevented||this._zone.run(()=>this.dismiss(j.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let n=!1;f(this._dialogEl.nativeElement,"mousedown").pipe(c(this._closed$),X(()=>n=!1),K(()=>f(e,"mouseup").pipe(c(this._closed$),D(1))),w(({target:i})=>e===i)).subscribe(()=>{n=!0}),f(e,"click").pipe(c(this._closed$)).subscribe(({target:i})=>{e===i&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!n&&this._zone.run(()=>this.dismiss(j.BACKDROP_CLICK))),n=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){let n=e.querySelector("[ngbAutofocus]"),i=ge(e)[0];(n||i||e).focus()}}_restoreFocus(){let e=this._document.body,n=this._elWithFocus,i;n&&n.focus&&e.contains(n)?i=n:i=e,this._zone.runOutsideAngular(()=>{setTimeout(()=>i.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&b(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=F({type:t,selectors:[["ngb-modal-window"]],viewQuery:function(n,i){if(n&1&&le(ve,7),n&2){let o;ce(o=de())&&(i._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(n,i){n&2&&(ne("aria-modal",!0)("aria-labelledby",i.ariaLabelledBy)("aria-describedby",i.ariaDescribedBy),E("modal d-block"+(i.windowClass?" "+i.windowClass:"")),H("fade",i.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[V],ngContentSelectors:ye,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(n,i){n&1&&(ae(),se(0,"div",1,0)(2,"div",2),re(3),oe()()),n&2&&E("modal-dialog"+(i.size?" modal-"+i.size:"")+(i.centered?" modal-dialog-centered":"")+i.fullscreenClass+(i.scrollable?" modal-dialog-scrollable":"")+(i.modalDialogClass?" "+i.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let s=t;return s})(),Be=(()=>{let t=class t{constructor(){this._applicationRef=l(he),this._injector=l(S),this._environmentInjector=l(x),this._document=l(C),this._scrollBar=l(Ae),this._activeWindowCmptHasChanged=new u,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new L;let e=l(O);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let n=this._windowCmpts[this._windowCmpts.length-1];Ce(e,n.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(n.location.nativeElement)}})}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,n,i){let o=i.container instanceof HTMLElement?i.container:G(i.container)?this._document.querySelector(i.container):this._document.body;if(!o)throw new Error(`The specified modal container "${i.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new N;e=i.injector||e;let d=e.get(x,null)||this._environmentInjector,h=this._getContentRef(e,d,n,r,i),p=i.backdrop!==!1?this._attachBackdrop(o):void 0,v=this._attachWindowComponent(o,h.nodes),_=new $(v,h,p,i.beforeDismiss);return this._registerModalRef(_),this._registerWindowCmpt(v),_.hidden.pipe(D(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=m=>{_.close(m)},r.dismiss=m=>{_.dismiss(m)},r.update=m=>{_.update(m)},_.update(i),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),p&&p.instance&&p.changeDetectorRef.detectChanges(),v.changeDetectorRef.detectChanges(),_}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(n=>n.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let n=M(ke,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(n.hostView),e.appendChild(n.location.nativeElement),n}_attachWindowComponent(e,n){let i=M(xe,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:n});return this._applicationRef.attachView(i.hostView),e.appendChild(i.location.nativeElement),i}_getContentRef(e,n,i,o,r){return i?i instanceof ie?this._createFromTemplateRef(i,o):_e(i)?this._createFromString(i):this._createFromComponent(e,n,i,o,r):new y([])}_createFromTemplateRef(e,n){let i={$implicit:n,close(r){n.close(r)},dismiss(r){n.dismiss(r)}},o=e.createEmbeddedView(i);return this._applicationRef.attachView(o),new y([o.rootNodes],o)}_createFromString(e){let n=this._document.createTextNode(`${e}`);return new y([[n]])}_createFromComponent(e,n,i,o,r){let d=S.create({providers:[{provide:N,useValue:o}],parent:e}),h=M(i,{environmentInjector:n,elementInjector:d}),p=h.location.nativeElement;return r.scrollable&&p.classList.add("component-host-scrollable"),this._applicationRef.attachView(h.hostView),new y([[p]],h.hostView,h)}_setAriaHidden(e){let n=e.parentElement;n&&e!==this._document.body&&(Array.from(n.children).forEach(i=>{i!==e&&i.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(i,i.getAttribute("aria-hidden")),i.setAttribute("aria-hidden","true"))}),this._setAriaHidden(n))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,n)=>{e?n.setAttribute("aria-hidden",e):n.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){let n=()=>{let i=this._modalRefs.indexOf(e);i>-1&&(this._modalRefs.splice(i,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(n,n)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{let n=this._windowCmpts.indexOf(e);n>-1&&(this._windowCmpts.splice(n,1),this._activeWindowCmptHasChanged.next())})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),Si=(()=>{let t=class t{constructor(){this._injector=l(S),this._modalStack=l(Be),this._config=l(Pe)}open(e,n={}){let i=P(J(P({},this._config),{animation:this._config.animation}),n);return this._modalStack.open(this._injector,e,i)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var Oi=new ee("live announcer delay",{providedIn:"root",factory:()=>100});export{He as a,Si as b};
