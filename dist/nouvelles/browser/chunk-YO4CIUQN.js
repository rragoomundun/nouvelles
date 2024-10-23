import{a as D}from"./chunk-ZMXKM7YI.js";import{b as M,c as R,d as G,e as L,f as B,g,h as V,j as k,k as W,q as j}from"./chunk-KNJTHPD2.js";import{a as N}from"./chunk-IGVAN6YD.js";import{A as T,Aa as E,Ea as a,F as _,Fa as s,G as x,Na as $,U as i,Ua as z,V as f,Wa as H,Xa as O,Ya as q,Za as J,_ as C,aa as u,bb as A,cb as y,da as w,ha as n,ia as o,ja as m,la as I,ma as h,pa as P,ua as d,va as F,wa as c,za as b}from"./chunk-QV6IRI2N.js";var oe=()=>["/"],re=()=>["false","error"];function ne(e,t){if(e&1&&(n(0,"button",12),d(1),a(2,"translate"),o()),e&2){let S=h();u("disabled",S.isPasswordForgottenFormValid===!1),i(),c(" ",s(2,2,"FORMS.VALIDATE")," ")}}function ae(e,t){e&1&&(n(0,"button",12),m(1,"span",14),d(2),a(3,"translate"),o()),e&2&&(u("disabled",!0),i(2),c(" ",s(3,2,"FORMS.VALIDATION")," "))}function se(e,t){e&1&&(n(0,"span",15),m(1,"span",16),d(2),a(3,"translate"),o()),e&2&&(i(2),c(" ",s(3,1,"PASSWORD_FORGOTTEN_PAGE.EMAIL_SENT")," "))}function pe(e,t){if(e&1&&(n(0,"div",13)(1,"span"),d(2),a(3,"translate"),o()()),e&2){let S=h();i(2),F(s(3,1,S.passwordForgottenError))}}var K=(()=>{let t=class t{constructor(l,r){this.appSharedService=l,this.authService=r,this.appSharedService.setTitle("PASSWORD_FORGOTTEN_PAGE.TITLE"),this.passwordForgottenForm=new B({email:new g("",[R.required])}),this.onPasswordForgotten="false"}get isPasswordForgottenFormValid(){return this.passwordForgottenForm.valid}onSubmit(){this.onPasswordForgotten="true",this.authService.passwordForgotten(this.passwordForgottenForm.value).subscribe({complete:()=>this.onPasswordForgotten="success",error:l=>{let{type:r}=l.error;this.onPasswordForgotten="error",r&&(this.passwordForgottenError=`PASSWORD_FORGOTTEN_PAGE.ERRORS.${r}`)}})}};t.\u0275fac=function(r){return new(r||t)(f(N),f(D))},t.\u0275cmp=_({type:t,selectors:[["app-password-forgotten"]],standalone:!0,features:[b],decls:26,vars:18,consts:[[1,"container"],[1,"row"],[1,"col-12","col-md-8"],[1,"card"],[1,"card-body"],[1,"card-title","app-logo"],[3,"routerLink"],[3,"ngSubmit","formGroup"],[1,"input-group","mb-3"],[1,"input-group-text"],[1,"fa-regular","fa-envelope"],["id","email","type","email","formControlName","email",1,"form-control",3,"placeholder"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger","mt-3"],[1,"fa-solid","fa-spinner","fa-spin"],[1,"text-success"],[1,"fa-regular","fa-circle-check"]],template:function(r,p){r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5)(6,"a",6),d(7),a(8,"translate"),o()(),n(9,"p"),d(10),a(11,"translate"),o(),m(12,"hr"),n(13,"p"),d(14),a(15,"translate"),o(),n(16,"form",7),I("ngSubmit",function(){return p.onSubmit()}),n(17,"div",8)(18,"span",9),m(19,"span",10),o(),m(20,"input",11),a(21,"translate"),o(),C(22,ne,3,4,"button",12)(23,ae,4,4)(24,se,4,3)(25,pe,4,3,"div",13),o()()()()()()),r&2&&(i(6),u("routerLink",E(16,oe)),i(),F(s(8,8,"GENERAL.TITLE")),i(3),c(" ",s(11,10,"PASSWORD_FORGOTTEN_PAGE.TITLE")," "),i(4),c(" ",s(15,12,"PASSWORD_FORGOTTEN_PAGE.DESCRIPTION")," "),i(2),u("formGroup",p.passwordForgottenForm),i(4),P("placeholder",s(21,14,"FORMS.EMAIL")),i(2),w(22,E(17,re).includes(p.onPasswordForgotten)?22:p.onPasswordForgotten==="true"?23:p.onPasswordForgotten==="success"?24:-1),i(3),w(25,p.onPasswordForgotten==="error"?25:-1))},dependencies:[j,V,M,G,L,k,W,O,y,A],styles:[".col-12.col-md-8[_ngcontent-%COMP%]{margin:auto}.card-body[_ngcontent-%COMP%]{text-align:center}"]});let e=t;return e})();var de=()=>["/"],le=()=>["false","error"];function me(e,t){if(e&1&&(n(0,"button",13),d(1),a(2,"translate"),o()),e&2){let S=h();u("disabled",S.isPasswordResetFormValid===!1),i(),c(" ",s(2,2,"FORMS.VALIDATE")," ")}}function ce(e,t){e&1&&(n(0,"button",13),d(1),a(2,"translate"),o()),e&2&&(u("disabled",!0),i(),c(" ",s(2,2,"FORMS.VALIDATION")," "))}function ue(e,t){e&1&&(n(0,"span",15),m(1,"span",16),d(2),a(3,"translate"),o()),e&2&&(i(2),c(" ",s(3,1,"PASSWORD_RESET_PAGE.PASSWORD_MODIFIED")," "))}function fe(e,t){if(e&1&&(n(0,"div",14)(1,"span"),d(2),a(3,"translate"),o()()),e&2){let S=h();i(2),F(s(3,1,S.passwordResetError))}}var Q=(()=>{let t=class t{constructor(l,r,p,v,Y){this.router=l,this.activatedRoute=r,this.appSharedService=p,this.authService=v,this.userSharedService=Y,this.appSharedService.setTitle("PASSWORD_RESET_PAGE.TITLE"),this.passwordResetForm=new B({password:new g("",[R.required]),repeatPassword:new g("",[R.required])}),this.onPasswordReset="false"}get isPasswordResetFormValid(){return this.passwordResetForm.valid}onSubmit(){let l=this.activatedRoute.snapshot.paramMap.get("resetPasswordToken"),r={password:this.passwordResetForm.value.password,repeatedPassword:this.passwordResetForm.value.repeatPassword};this.onPasswordReset="true",this.authService.resetPassword(r,l).subscribe({complete:()=>{this.onPasswordReset="success",this.userSharedService.setUser(),setTimeout(()=>this.router.navigate(["/"]),3e3)},error:p=>{let{type:v}=p.error;this.onPasswordReset="error",v&&(this.passwordResetError=`PASSWORD_RESET_PAGE.ERRORS.${v}`)}})}};t.\u0275fac=function(r){return new(r||t)(f(H),f(z),f(N),f(D),f(J))},t.\u0275cmp=_({type:t,selectors:[["app-password-reset"]],standalone:!0,features:[b],decls:28,vars:18,consts:[[1,"container"],[1,"row"],[1,"col-12","col-md-8"],[1,"card"],[1,"card-body"],[1,"card-title","app-logo"],[3,"routerLink"],[3,"ngSubmit","formGroup"],[1,"input-group","mb-3"],[1,"input-group-text"],[1,"fa-solid","fa-lock"],["id","password","type","password","formControlName","password",1,"form-control",3,"placeholder"],["id","password","type","password","formControlName","repeatPassword",1,"form-control",3,"placeholder"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger","mt-3"],[1,"text-success"],[1,"fa-regular","fa-circle-check"]],template:function(r,p){r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5)(6,"a",6),d(7),a(8,"translate"),o()(),n(9,"p"),d(10),a(11,"translate"),o(),m(12,"hr"),n(13,"form",7),I("ngSubmit",function(){return p.onSubmit()}),n(14,"div",8)(15,"span",9),m(16,"span",10),o(),m(17,"input",11),a(18,"translate"),o(),n(19,"div",8)(20,"span",9),m(21,"span",10),o(),m(22,"input",12),a(23,"translate"),o(),C(24,me,3,4,"button",13)(25,ce,3,4)(26,ue,4,3)(27,fe,4,3,"div",14),o()()()()()()),r&2&&(i(6),u("routerLink",E(16,de)),i(),F(s(8,8,"GENERAL.TITLE")),i(3),c(" ",s(11,10,"PASSWORD_RESET_PAGE.TITLE")," "),i(3),u("formGroup",p.passwordResetForm),i(4),P("placeholder",s(18,12,"FORMS.PASSWORD")),i(5),P("placeholder",s(23,14,"FORMS.REPEAT_PASSWORD")),i(2),w(24,E(17,le).includes(p.onPasswordReset)?24:p.onPasswordReset==="true"?25:26),i(3),w(27,p.onPasswordReset==="error"?27:-1))},dependencies:[O,j,V,M,G,L,k,W,y,A],styles:[".col-12.col-md-8[_ngcontent-%COMP%]{margin:auto}.card-body[_ngcontent-%COMP%]{text-align:center}"]});let e=t;return e})();var Se=[{path:"mot-de-passe-oublie",component:K},{path:"mot-de-passe/reinitialiser/:resetPasswordToken",component:Q},{path:"**",redirectTo:""}],X=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=x({type:t}),t.\u0275inj=T({imports:[q.forChild(Se),q]});let e=t;return e})();var ye=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=x({type:t}),t.\u0275inj=T({imports:[$,X]});let e=t;return e})();export{ye as AuthModule};