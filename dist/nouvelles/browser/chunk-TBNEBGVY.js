import{a as te}from"./chunk-RBW6V22B.js";import{a as ie}from"./chunk-56KA3YAY.js";import{a as ee,b as pe}from"./chunk-BDNXNIP5.js";import{a as q,b as M,c as C,d as j,e as W,f as U,g as v,h as $,j as H,k as Y,l as z,m as J,n as K,o as Q,p as X,q as Z}from"./chunk-KNJTHPD2.js";import{a as k}from"./chunk-PWFYPL3N.js";import{a as P}from"./chunk-IGVAN6YD.js";import{A as N,Aa as V,Ea as d,F as y,Fa as s,G as R,K as ne,L as oe,Na as de,S as le,U as i,Ua as se,V as f,Xa as O,Ya as b,_ as A,aa as I,bb as D,cb as B,da as E,ea as L,fa as F,ga as G,ha as n,ia as r,ja as S,ka as ce,la as g,ma as _,pa as T,ua as l,va as h,wa as u,za as w}from"./chunk-QV6IRI2N.js";var be=()=>["false","success","error"];function ge(e,t){if(e&1&&(n(0,"option",9),l(1),r()),e&2){let c=t.$implicit;T("value",c.label),i(),h(c.name)}}function Te(e,t){if(e&1&&(n(0,"button",16),l(1),d(2,"translate"),r()),e&2){let c=_();I("disabled",c.isFormValid===!1),i(),u(" ",s(2,2,"GENERAL.CREATE")," ")}}function Ne(e,t){e&1&&(n(0,"button",16),S(1,"span",19),l(2),d(3,"translate"),r()),e&2&&(I("disabled",!0),i(2),u(" ",s(3,2,"GENERAL.CREATION")," "))}function ye(e,t){if(e&1&&(n(0,"div",17)(1,"span"),l(2),d(3,"translate"),r(),n(4,"a",20),l(5),r()()),e&2){let c=_();i(2),h(s(3,3,"NEW_ARTICLE_PAGE.CREATED")),i(2),T("routerLink",c.createdArticleLink),i(),u(" ",c.title," ")}}function Re(e,t){e&1&&(n(0,"div",18)(1,"span"),l(2),d(3,"translate"),r()()),e&2&&(i(2),h(s(3,1,"NEW_ARTICLE_PAGE.ERRORS.CREATION")))}var me=(()=>{let t=class t{constructor(a,o,p,x,m){this.appSharedService=a,this.articleSharedService=o,this.fileSharedService=p,this.urlSharedService=x,this.categorySharedService=m}get isFormValid(){return this.articleForm.controls.title.status==="VALID"&&this.articleForm.controls.content.status==="VALID"&&this.articleForm.controls.category.status==="VALID"&&this.file!==void 0}ngOnInit(){this.appSharedService.setTitle("NEW_ARTICLE_PAGE.TITLE"),this.articleForm=new U({title:new v("",[C.required]),image:new v("",[C.required]),content:new v("",[C.required]),category:new v(null,[C.required]),published:new v(!1)}),this.onCreation="false"}onFileSelected(a){this.file=a.target.files[0]}onSubmit(){let a=this.articleForm.controls.published,o;[!0,"true"].includes(a.value)&&(o="true"),a.setValue(o),this.title=this.articleForm.controls.title.value,this.onCreation="true",this.fileSharedService.upload(this.file).subscribe({next:p=>{this.articleForm.controls.image.setValue(p.file),this.articleSharedService.postArticle(this.articleForm.value).subscribe({next:x=>{this.createdArticleLink=`/categorie/${this.articleForm.controls.category.value}/article/${x.id}/${this.urlSharedService.toLowerURL(this.articleForm.controls.title.value)}`},complete:()=>{this.onCreation="success"},error:()=>{this.onCreation="error"}})},error:()=>{this.onCreation="error"}})}};t.\u0275fac=function(o){return new(o||t)(f(P),f(ee),f(te),f(k),f(ie))},t.\u0275cmp=y({type:t,selectors:[["app-new-article"]],standalone:!0,features:[w],decls:37,vars:24,consts:[[1,"title"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","title",1,"form-label"],["id","title","type","text","formControlName","title","required","",1,"form-control"],["for","file",1,"form-label"],["id","file","type","file","autocomplete","off","required","",1,"form-control",3,"change"],["for","category",1,"form-label"],["id","category","formControlName","category","required","",1,"form-select"],[3,"value"],[1,"form-check"],["id","publish","type","checkbox","value","","formControlName","published","required","",1,"form-check-input"],["for","publish",1,"form-check-label"],["for","content",1,"form-label"],["id","content","cols","30","rows","10","formControlName","content","required","",1,"form-control"],[1,"text-end"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-end","text-success","mt-3"],[1,"text-end","text-danger","mt-3"],[1,"fa-solid","fa-spinner","fa-spin"],[3,"routerLink"]],template:function(o,p){o&1&&(n(0,"h2",0),l(1),d(2,"translate"),r(),n(3,"form",1),g("ngSubmit",function(){return p.onSubmit()}),n(4,"div",2)(5,"label",3),l(6),d(7,"translate"),r(),S(8,"input",4),r(),n(9,"div",2)(10,"label",5),l(11),d(12,"translate"),r(),n(13,"input",6),g("change",function(m){return p.onFileSelected(m)}),r()(),n(14,"div",2)(15,"label",7),l(16),d(17,"translate"),r(),n(18,"select",8),F(19,ge,2,2,"option",9,L),r()(),n(21,"div",2)(22,"div",10),S(23,"input",11),n(24,"label",12),l(25),d(26,"translate"),r()()(),n(27,"div",2)(28,"label",13),l(29),d(30,"translate"),r(),S(31,"textarea",14),r(),n(32,"div",15),A(33,Te,3,4,"button",16)(34,Ne,4,4,"button",16),r(),A(35,ye,6,5,"div",17)(36,Re,4,3,"div",18),r()),o&2&&(i(),h(s(2,11,"NEW_ARTICLE_PAGE.TITLE")),i(2),I("formGroup",p.articleForm),i(3),u(" ",s(7,13,"NEW_ARTICLE_PAGE.ARTICLE_TITLE")," "),i(5),u(" ",s(12,15,"NEW_ARTICLE_PAGE.IMAGE")," "),i(5),u(" ",s(17,17,"GENERAL.CATEGORY")," "),i(3),G(p.categorySharedService.categories),i(6),u(" ",s(26,19,"NEW_ARTICLE_PAGE.PUBLISH")," "),i(4),u(" ",s(30,21,"NEW_ARTICLE_PAGE.CONTENT")," "),i(4),E(33,V(23,be).includes(p.onCreation)?33:-1),i(),E(34,p.onCreation==="true"?34:-1),i(),E(35,p.onCreation==="success"?35:-1),i(),E(36,p.onCreation==="error"?36:-1))},dependencies:[B,D,Z,$,J,K,M,q,z,j,W,Q,X,H,Y,b,O]});let e=t;return e})();var Le=()=>["false","success","error"];function Fe(e,t){e&1&&(n(0,"div",0)(1,"h2"),l(2),d(3,"translate"),r()()),e&2&&(i(2),h(s(3,1,"EDIT_ARTICLE_PAGE.ERRORS.NOT_FOUND")))}function Ge(e,t){e&1&&(n(0,"div",0)(1,"h2"),l(2),d(3,"translate"),r()()),e&2&&(i(2),h(s(3,1,"EDIT_ARTICLE_PAGE.ERRORS.NOT_OWNER")))}function we(e,t){if(e&1&&(n(0,"div",8)(1,"label",22),l(2),d(3,"translate"),r(),S(4,"br")(5,"img",23),r()),e&2){let c=_(2);i(2),u(" ",s(3,2,"EDIT_ARTICLE_PAGE.IMAGE_USE")," "),i(3),I("src",c.image,le)}}function Ve(e,t){if(e&1&&(n(0,"option",11),l(1),r()),e&2){let c=t.$implicit;T("value",c.label),i(),h(c.name)}}function Oe(e,t){if(e&1&&(n(0,"button",18),l(1),d(2,"translate"),r()),e&2){let c=_(2);I("disabled",c.isFormValid===!1),i(),u(" ",s(2,2,"EDIT_ARTICLE_PAGE.EDIT")," ")}}function De(e,t){e&1&&(n(0,"button",19),S(1,"span",24),l(2),d(3,"translate"),r()),e&2&&(I("disabled",!0),i(2),u(" ",s(3,2,"EDIT_ARTICLE_PAGE.EDITION")," "))}function Be(e,t){if(e&1&&(n(0,"div",20)(1,"span"),l(2),d(3,"translate"),r(),n(4,"a",25),l(5),r()()),e&2){let c=_(2);i(2),h(s(3,3,"EDIT_ARTICLE_PAGE.EDITED")),i(2),T("routerLink",c.editedArticleLink),i(),u(" ",c.title," ")}}function Pe(e,t){e&1&&(n(0,"div",21)(1,"span"),l(2),d(3,"translate"),r()()),e&2&&(i(2),h(s(3,1,"EDIT_ARTICLE_PAGE.ERRORS.EDITION")))}function ke(e,t){if(e&1){let c=ce();n(0,"h2",1),l(1),d(2,"translate"),r(),n(3,"form",2),g("ngSubmit",function(){ne(c);let o=_();return oe(o.onSubmit())}),n(4,"div",3)(5,"label",4),l(6),d(7,"translate"),r(),S(8,"input",5),r(),n(9,"div",3)(10,"label",6),l(11),d(12,"translate"),r(),n(13,"input",7),g("change",function(o){ne(c);let p=_();return oe(p.onFileSelected(o))}),r(),A(14,we,6,4,"div",8),r(),n(15,"div",3)(16,"label",9),l(17),d(18,"translate"),r(),n(19,"select",10),F(20,Ve,2,2,"option",11,L),r()(),n(22,"div",3)(23,"div",12),S(24,"input",13),n(25,"label",14),l(26),d(27,"translate"),r()()(),n(28,"div",3)(29,"label",15),l(30),d(31,"translate"),r(),S(32,"textarea",16),r(),n(33,"div",17),A(34,Oe,3,4,"button",18)(35,De,4,4,"button",19),r(),A(36,Be,6,5,"div",20)(37,Pe,4,3,"div",21),r()}if(e&2){let c=_();i(),h(s(2,12,"EDIT_ARTICLE_PAGE.TITLE")),i(2),I("formGroup",c.articleForm),i(3),u(" ",s(7,14,"NEW_ARTICLE_PAGE.ARTICLE_TITLE")," "),i(5),u(" ",s(12,16,"NEW_ARTICLE_PAGE.IMAGE")," "),i(3),E(14,c.image?14:-1),i(3),u(" ",s(18,18,"GENERAL.CATEGORY")," "),i(3),G(c.categorySharedService.categories),i(6),u(" ",s(27,20,"NEW_ARTICLE_PAGE.PUBLISH")," "),i(4),u(" ",s(31,22,"NEW_ARTICLE_PAGE.CONTENT")," "),i(4),E(34,V(24,Le).includes(c.onEdit)?34:-1),i(),E(35,c.onEdit==="true"?35:-1),i(),E(36,c.onEdit==="success"?36:-1),i(),E(37,c.onEdit==="error"?37:-1)}}var ue=(()=>{let t=class t{constructor(a,o,p,x,m,re,Ee){this.activatedRoute=a,this.appSharedService=o,this.articleSharedService=p,this.articleService=x,this.fileSharedService=m,this.urlSharedService=re,this.categorySharedService=Ee}get isFormValid(){return this.articleForm.controls.title.status==="VALID"&&this.articleForm.controls.content.status==="VALID"&&this.articleForm.controls.category.status==="VALID"&&(this.file!==void 0||this.image!==null)}ngOnInit(){this.appSharedService.setTitle("EDIT_ARTICLE_PAGE.TITLE"),this.id=this.activatedRoute.snapshot.params.id,this.articleForm=new U({title:new v("",[C.required]),image:new v("",[C.required]),content:new v("",[C.required]),category:new v(null,[C.required]),published:new v(!1)}),this.onEdit="false",this.articleService.isUserOwner(this.id).subscribe({next:()=>{this.articleSharedService.getArticle(this.id).subscribe({next:a=>{this.image=a.image,this.articleForm.controls.title.setValue(a.title),this.articleForm.controls.content.setValue(a.content),this.articleForm.controls.category.setValue(a.category),this.articleForm.controls.published.setValue(!!a.published)}})},error:a=>{let{type:o}=a.error;o&&(o==="NOT_OWNER"?this.isNotOwner=!0:o==="NOT_FOUND"&&(this.notFound=!0))}})}onFileSelected(a){this.file=a.target.files[0],this.image=null}onSubmit(){let{title:a,content:o,category:p,published:x}=this.articleForm.controls,m={id:this.id,title:a.value,content:o.value,category:p.value};this.title=a.value,[!0,"true"].includes(x.value)?m.published="true":m.published=null,this.onEdit="true",this.image?(m.image=this.image,this.articleSharedService.postArticle(m).subscribe({complete:()=>{this.editedArticleLink=`/categorie/${m.category}/article/${m.id}/${this.urlSharedService.toLowerURL(m.title)}`,this.onEdit="success"},error:()=>{this.onEdit="error"}})):this.fileSharedService.upload(this.file).subscribe({next:re=>{m.image=re.file,this.articleSharedService.postArticle(m).subscribe({complete:()=>{this.editedArticleLink=`/categorie/${m.category}/article/${m.id}/${this.urlSharedService.toLowerURL(m.title)}`,this.image=m.image,this.file=null,this.onEdit="success"},error:()=>{this.onEdit="error"}})},error:()=>{this.onEdit="error"}})}};t.\u0275fac=function(o){return new(o||t)(f(se),f(P),f(ee),f(pe),f(te),f(k),f(ie))},t.\u0275cmp=y({type:t,selectors:[["app-edit-article"]],standalone:!0,features:[w],decls:3,vars:1,consts:[["id","error-edit"],[1,"title"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","title",1,"form-label"],["id","title","type","text","formControlName","title","required","",1,"form-control"],["for","file",1,"form-label"],["id","file","type","file","autocomplete","off","required","",1,"form-control",3,"change"],["id","original-image",1,"mt-1"],["for","category",1,"form-label"],["id","category","formControlName","category","required","",1,"form-select"],[3,"value"],[1,"form-check"],["id","publish","type","checkbox","value","","formControlName","published","required","",1,"form-check-input"],["for","publish",1,"form-check-label"],["for","content",1,"form-label"],["id","content","cols","30","rows","10","formControlName","content","required","",1,"form-control"],[1,"text-end"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"btn","btn-primary",3,"disabled"],[1,"text-end","text-success","mt-3"],[1,"text-end","text-danger","mt-3"],[1,"form-label"],[3,"src"],[1,"fa-solid","fa-spinner","fa-spin"],[3,"routerLink"]],template:function(o,p){o&1&&A(0,Fe,4,3,"div",0)(1,Ge,4,3)(2,ke,38,25),o&2&&E(0,p.notFound?0:p.isNotOwner?1:2)},dependencies:[B,D,b,O,Z,$,J,K,M,q,z,j,W,Q,X,H,Y],styles:["#error-edit[_ngcontent-%COMP%]{text-align:center}#original-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px}"]});let e=t;return e})();var qe=[{path:"nouveau",component:me},{path:":id/editer",component:ue}],fe=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=R({type:t}),t.\u0275inj=N({imports:[b.forChild(qe),b]});let e=t;return e})();var it=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=R({type:t}),t.\u0275inj=N({imports:[de,fe]});let e=t;return e})();export{it as ArticleModule};
