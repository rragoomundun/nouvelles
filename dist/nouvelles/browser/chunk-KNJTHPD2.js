import{$ as Z,A as q,B as m,D as re,E,G as z,H as u,Ha as oe,J as P,Ja as ae,La as Y,M as y,N as se,O as C,P as F,V as a,X as V,Z as d,a as f,b as _,ba as X,i as ee,k as te,l as ie,la as v,x as N,y as c,ya as h,z as ne}from"./chunk-QV6IRI2N.js";var ve=(()=>{let e=class e{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(n){return new(n||e)(a(V),a(C))},e.\u0275dir=u({type:e});let i=e;return i})(),S=(()=>{let e=class e extends ve{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=y(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[d]});let i=e;return i})(),M=new m(""),Le={provide:M,useExisting:c(()=>$e),multi:!0},$e=(()=>{let e=class e extends S{writeValue(t){this.setProperty("checked",t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=y(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,s){n&1&&v("change",function(l){return s.onChange(l.target.checked)})("blur",function(){return s.onTouched()})},features:[h([Le]),d]});let i=e;return i})(),We={provide:M,useExisting:c(()=>_e),multi:!0};function qe(){let i=Y()?Y().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var ze=new m(""),_e=(()=>{let e=class e extends ve{constructor(t,n,s){super(t,n),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!qe())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(n){return new(n||e)(a(V),a(C),a(ze,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,s){n&1&&v("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[h([We]),d]});let i=e;return i})();function p(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Ce(i){return i!=null&&typeof i.length=="number"}var H=new m(""),Ve=new m(""),Ze=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,le=class{static min(e){return Xe(e)}static max(e){return Ye(e)}static required(e){return De(e)}static requiredTrue(e){return be(e)}static email(e){return Ke(e)}static minLength(e){return Je(e)}static maxLength(e){return Qe(e)}static pattern(e){return et(e)}static nullValidator(e){return k(e)}static compose(e){return Ie(e)}static composeAsync(e){return Oe(e)}};function Xe(i){return e=>{if(p(e.value)||p(i))return null;let r=parseFloat(e.value);return!isNaN(r)&&r<i?{min:{min:i,actual:e.value}}:null}}function Ye(i){return e=>{if(p(e.value)||p(i))return null;let r=parseFloat(e.value);return!isNaN(r)&&r>i?{max:{max:i,actual:e.value}}:null}}function De(i){return p(i.value)?{required:!0}:null}function be(i){return i.value===!0?null:{required:!0}}function Ke(i){return p(i.value)||Ze.test(i.value)?null:{email:!0}}function Je(i){return e=>p(e.value)||!Ce(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Qe(i){return e=>Ce(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function et(i){if(!i)return k;let e,r;return typeof i=="string"?(r="",i.charAt(0)!=="^"&&(r+="^"),r+=i,i.charAt(i.length-1)!=="$"&&(r+="$"),e=new RegExp(r)):(r=i.toString(),e=i),t=>{if(p(t.value))return null;let n=t.value;return e.test(n)?null:{pattern:{requiredPattern:r,actualValue:n}}}}function k(i){return null}function Ae(i){return i!=null}function Me(i){return oe(i)?ee(i):i}function Ee(i){let e={};return i.forEach(r=>{e=r!=null?f(f({},e),r):e}),Object.keys(e).length===0?null:e}function Fe(i,e){return e.map(r=>r(i))}function tt(i){return!i.validate}function we(i){return i.map(e=>tt(e)?e:r=>e.validate(r))}function Ie(i){if(!i)return null;let e=i.filter(Ae);return e.length==0?null:function(r){return Ee(Fe(r,e))}}function Se(i){return i!=null?Ie(we(i)):null}function Oe(i){if(!i)return null;let e=i.filter(Ae);return e.length==0?null:function(r){let t=Fe(r,e).map(Me);return ie(t).pipe(te(Ee))}}function Ne(i){return i!=null?Oe(we(i)):null}function ue(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Pe(i){return i._rawValidators}function xe(i){return i._rawAsyncValidators}function K(i){return i?Array.isArray(i)?i:[i]:[]}function G(i,e){return Array.isArray(i)?i.includes(e):i===e}function de(i,e){let r=K(e);return K(i).forEach(n=>{G(r,n)||r.push(n)}),r}function ce(i,e){return K(e).filter(r=>!G(i,r))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Se(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},b=class extends T{get formDirective(){return null}get path(){return null}},A=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},j=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},it={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ti=_(f({},it),{"[class.ng-submitted]":"isSubmitted"}),ii=(()=>{let e=class e extends j{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(a(A,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,s){n&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[d]});let i=e;return i})(),ni=(()=>{let e=class e extends j{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(a(b,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,s){n&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[d]});let i=e;return i})();var w="VALID",x="INVALID",D="PENDING",I="DISABLED";function ke(i){return(L(i)?i.validators:i)||null}function nt(i){return Array.isArray(i)?Se(i):i||null}function Ge(i,e){return(L(e)?e.asyncValidators:i)||null}function rt(i){return Array.isArray(i)?Ne(i):i||null}function L(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function st(i,e,r){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new N(1e3,"");if(!t[r])throw new N(1001,"")}function ot(i,e,r){i._forEachChild((t,n)=>{if(r[n]===void 0)throw new N(1002,"")})}var B=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===x}get pending(){return this.status==D}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(de(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(de(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ce(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(t=>{t.disable(_(f({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(f({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(t=>{t.enable(_(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(f({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let r=Me(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((t,n)=>t&&t._find(n),this)}getError(e,r){let t=r?this.get(r):this;return t&&t.errors?t.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(x)?x:w}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}},he=class extends B{constructor(e,r,t){super(ke(r),Ge(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,r){return this.controls[e]?this.controls[e]:(this.controls[e]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(e,r,t={}){this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(e,r,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],r&&this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,r={}){ot(this,!0,e),Object.keys(e).forEach(t=>{st(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){e!=null&&(Object.keys(e).forEach(t=>{let n=this.controls[t];n&&n.patchValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e={},r={}){this._forEachChild((t,n)=>{t.reset(e?e[n]:null,{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(e,r,t)=>(e[t]=r.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(r,t)=>t._syncPendingControls()?!0:r);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(r=>{let t=this.controls[r];t&&e(t,r)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[r,t]of Object.entries(this.controls))if(this.contains(r)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(r,t,n)=>((t.enabled||this.disabled)&&(r[n]=t.value),r))}_reduceChildren(e,r){let t=e;return this._forEachChild((n,s)=>{t=r(t,n,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var J=new m("CallSetDisabledState",{providedIn:"root",factory:()=>$}),$="always";function at(i,e){return[...e.path,i]}function fe(i,e,r=$){Q(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),ut(i,e),ct(i,e),dt(i,e),lt(i,e)}function pe(i,e,r=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),R(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function U(i,e){i.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function lt(i,e){if(e.valueAccessor.setDisabledState){let r=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(r),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(r)})}}function Q(i,e){let r=Pe(i);e.validator!==null?i.setValidators(ue(r,e.validator)):typeof r=="function"&&i.setValidators([r]);let t=xe(i);e.asyncValidator!==null?i.setAsyncValidators(ue(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();U(e._rawValidators,n),U(e._rawAsyncValidators,n)}function R(i,e){let r=!1;if(i!==null){if(e.validator!==null){let n=Pe(i);if(Array.isArray(n)&&n.length>0){let s=n.filter(o=>o!==e.validator);s.length!==n.length&&(r=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let n=xe(i);if(Array.isArray(n)&&n.length>0){let s=n.filter(o=>o!==e.asyncValidator);s.length!==n.length&&(r=!0,i.setAsyncValidators(s))}}}let t=()=>{};return U(e._rawValidators,t),U(e._rawAsyncValidators,t),r}function ut(i,e){e.valueAccessor.registerOnChange(r=>{i._pendingValue=r,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Te(i,e)})}function dt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Te(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Te(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ct(i,e){let r=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};i.registerOnChange(r),e._registerOnDestroy(()=>{i._unregisterOnChange(r)})}function ht(i,e){i==null,Q(i,e)}function ft(i,e){return R(i,e)}function pt(i,e){if(!i.hasOwnProperty("model"))return!1;let r=i.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function gt(i){return Object.getPrototypeOf(i.constructor)===S}function mt(i,e){i._syncPendingControls(),e.forEach(r=>{let t=r.control;t.updateOn==="submit"&&t._pendingChange&&(r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function yt(i,e){if(!e)return null;Array.isArray(e);let r,t,n;return e.forEach(s=>{s.constructor===_e?r=s:gt(s)?t=s:n=s}),n||t||r||null}function vt(i,e){let r=i.indexOf(e);r>-1&&i.splice(r,1)}function ge(i,e){let r=i.indexOf(e);r>-1&&i.splice(r,1)}function me(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var _t=class extends B{constructor(e=null,r,t){super(ke(r),Ge(t,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(r)&&(r.nonNullable||r.initialValueIsDefault)&&(me(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ge(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ge(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){me(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ct=i=>i instanceof _t;var si=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var Vt={provide:M,useExisting:c(()=>bt),multi:!0};var Dt=(()=>{let e=class e{constructor(){this._accessors=[]}add(t,n){this._accessors.push([t,n])}remove(t){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===t){this._accessors.splice(n,1);return}}select(t){this._accessors.forEach(n=>{this._isSameGroup(n,t)&&n[1]!==t&&n[1].fireUncheck(t.value)})}_isSameGroup(t,n){return t[0].control?t[0]._parent===n._control._parent&&t[1].name===n.name:!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=ne({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),bt=(()=>{let e=class e extends S{constructor(t,n,s,o){super(t,n),this._registry=s,this._injector=o,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=re(J,{optional:!0})??$}ngOnInit(){this._control=this._injector.get(A),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}};e.\u0275fac=function(n){return new(n||e)(a(V),a(C),a(Dt),a(se))},e.\u0275dir=u({type:e,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,s){n&1&&v("change",function(){return s.onChange()})("blur",function(){return s.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[h([Vt]),d]});let i=e;return i})();var je=new m("");var At={provide:b,useExisting:c(()=>Mt)},Mt=(()=>{let e=class e extends b{constructor(t,n,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new F,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return fe(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){pe(t.control||null,t,!1),vt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this.submitted=!0,mt(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,s=this.form.get(t.path);n!==s&&(pe(n||null,t),Ct(s)&&(fe(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);ht(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&ft(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Q(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(n){return new(n||e)(a(H,10),a(Ve,10),a(J,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,s){n&1&&v("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:[E.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[h([At]),d,P]});let i=e;return i})();var Et={provide:A,useExisting:c(()=>Ft)},Ft=(()=>{let e=class e extends A{set isDisabled(t){}constructor(t,n,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new F,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=yt(this,o)}ngOnChanges(t){this._added||this._setUpControl(),pt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return at(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(a(b,13),a(H,10),a(Ve,10),a(M,10),a(je,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:[E.None,"formControlName","name"],isDisabled:[E.None,"disabled","isDisabled"],model:[E.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[h([Et]),d,P]});let i=e;return i})(),wt={provide:M,useExisting:c(()=>Ue),multi:!0};function Be(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function It(i){return i.split(":")[0]}var Ue=(()=>{let e=class e extends S{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n=this._getOptionId(t),s=Be(n,t);this.setProperty("value",s)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=It(t);return this._optionMap.has(n)?this._optionMap.get(n):t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=y(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,s){n&1&&v("change",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[h([wt]),d]});let i=e;return i})(),oi=(()=>{let e=class e{constructor(t,n,s){this._element=t,this._renderer=n,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(Be(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(a(C),a(V),a(Ue,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),St={provide:M,useExisting:c(()=>Re),multi:!0};function ye(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Ot(i){return i.split(":")[0]}var Re=(()=>{let e=class e extends S{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n;if(Array.isArray(t)){let s=t.map(o=>this._getOptionId(o));n=(o,l)=>{o._setSelected(s.indexOf(l.toString())>-1)}}else n=(s,o)=>{s._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let s=[],o=n.selectedOptions;if(o!==void 0){let l=o;for(let g=0;g<l.length;g++){let O=l[g],W=this._getOptionValue(O.value);s.push(W)}}else{let l=n.options;for(let g=0;g<l.length;g++){let O=l[g];if(O.selected){let W=this._getOptionValue(O.value);s.push(W)}}}this.value=s,t(s)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=Ot(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=y(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,s){n&1&&v("change",function(l){return s.onChange(l.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[h([St]),d]});let i=e;return i})(),ai=(()=>{let e=class e{constructor(t,n,s){this._element=t,this._renderer=n,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(ye(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(ye(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(a(C),a(V),a(Re,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();var Nt=(()=>{let e=class e{constructor(){this._validator=k}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):k,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=u({type:e,features:[P]});let i=e;return i})();var Pt={provide:H,useExisting:c(()=>He),multi:!0},xt={provide:H,useExisting:c(()=>kt),multi:!0},He=(()=>{let e=class e extends Nt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=ae,this.createValidator=t=>De}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=y(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,s){n&2&&Z("required",s._enabled?"":null)},inputs:{required:"required"},features:[h([Pt]),d]});let i=e;return i})(),kt=(()=>{let e=class e extends He{constructor(){super(...arguments),this.createValidator=t=>be}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=y(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","checkbox","required","","formControlName",""],["input","type","checkbox","required","","formControl",""],["input","type","checkbox","required","","ngModel",""]],hostVars:1,hostBindings:function(n,s){n&2&&Z("required",s._enabled?"":null)},features:[h([xt]),d]});let i=e;return i})();var Gt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=z({type:e}),e.\u0275inj=q({});let i=e;return i})();var li=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:je,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:J,useValue:t.callSetDisabledState??$}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=z({type:e}),e.\u0275inj=q({imports:[Gt]});let i=e;return i})();export{$e as a,_e as b,le as c,ii as d,ni as e,he as f,_t as g,si as h,bt as i,Mt as j,Ft as k,Ue as l,oi as m,ai as n,He as o,kt as p,li as q};
