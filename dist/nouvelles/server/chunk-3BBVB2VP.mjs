import './polyfills.server.mjs';
import{a as Ce}from"./chunk-I55W34FE.mjs";import{b as W,d as Z,e as ee,f as te,g as X,h as ie,i as re,j as ne,k as ae,q as oe}from"./chunk-NBGZTVQT.mjs";import{b as ce,c as j}from"./chunk-PQIQ37VF.mjs";import{a as H}from"./chunk-LLHDH4LQ.mjs";import{a as se}from"./chunk-VZ324JHC.mjs";import{b as E,c as R}from"./chunk-YI7Y26DW.mjs";import{A as U,Aa as v,B as M,D as $,H as g,Hb as b,I as T,Ia as p,Ja as d,Ka as y,Kb as Q,Lb as N,Na as S,Nb as _,Pa as Y,Ra as O,Sa as h,Ta as f,Y as q,ca as V,da as z,ea as a,fa as m,ma as I,nb as J,oa as l,pb as w,ra as C,sa as x,ta as F,tb as K,ua as D,va as o,wa as s,xa as u,za as P}from"./chunk-UUL74Y7I.mjs";import{g as ve}from"./chunk-VVCT4QZE.mjs";var _e=(t,e,c)=>["/categorie",t,"article",e,c],me=(()=>{let e=class e{constructor(i){this.urlSharedService=i}};e.\u0275fac=function(r){return new(r||e)(m(H))},e.\u0275cmp=g({type:e,selectors:[["app-search-articles-item"]],inputs:{article:"article"},standalone:!0,features:[S],decls:4,vars:8,consts:[[1,"title-link",3,"routerLink"],[1,"image-ratio-16x9",3,"src","alt"]],template:function(r,n){r&1&&(o(0,"a",0),u(1,"img",1),o(2,"h5"),p(3),s()()),r&2&&(l("routerLink",O(4,_e,n.article.category,n.article.id,n.urlSharedService.toLowerURL(n.article.title))),a(),l("src",n.article.image,V)("alt",n.article.title),a(2),d(n.article.title))},dependencies:[_,N],styles:["img[_ngcontent-%COMP%]{width:100%}"]});let t=e;return t})();var G=(()=>{let e=class e{constructor(i){this.http=i,this.API_PREFIX="search"}searchArticles(i){return this.http.get(`${this.API_PREFIX}/articles`,{params:i})}searchArticlesMeta(i){return this.http.get(`${this.API_PREFIX}/articles/meta`,{params:i})}searchDiscussions(i){return this.http.get(`${this.API_PREFIX}/discussions`,{params:i})}searchDiscussionsMeta(i){return this.http.get(`${this.API_PREFIX}/discussions/meta`,{params:i})}};e.\u0275fac=function(r){return new(r||e)($(K))},e.\u0275prov=U({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ae(t,e){if(t&1&&(o(0,"div",1),u(1,"app-search-articles-item",2),s()),t&2){let c=e.$implicit;a(),l("article",c)}}function Ie(t,e){if(t&1&&(o(0,"div",0),F(1,Ae,2,1,"div",1,x),s()),t&2){let c=v();a(),D(c.articles)}}function be(t,e){t&1&&(o(0,"p"),p(1),h(2,"translate"),s()),t&2&&(a(),d(f(2,1,"SEARCH_PAGE.ERRORS.NO_ARTICLES")))}function Ee(t,e){t&1&&(o(0,"p"),p(1),h(2,"translate"),s()),t&2&&(a(),d(f(2,1,"SEARCH_PAGE.ERRORS.NO_ARTICLES_NO_SEARCH")))}function Re(t,e){if(t&1&&u(0,"br")(1,"app-pagination",3),t&2){let c=v();a(),l("nbPages",c.nbPages)}}var ue=(()=>{let e=class e{constructor(i,r,n){this.activatedRoute=i,this.searchService=r,this.platformId=n}get page(){return Number(this.activatedRoute.snapshot.queryParams.page||"1")}ngOnInit(){this.getMetaInformation(),this.getArticles(),this.queryParamsSubscription=this.activatedRoute.queryParams.subscribe({next:()=>{this.getMetaInformation(),this.getArticles()}})}ngOnDestroy(){this.queryParamsSubscription.unsubscribe()}getArticles(){let i={query:this.query,page:this.page};this.searchService.searchArticles(i).subscribe({next:r=>{this.articles=r,w(this.platformId)&&setTimeout(()=>window.scrollTo({top:0,behavior:"instant"}))}})}getMetaInformation(){let i={query:this.query};this.searchService.searchArticlesMeta(i).subscribe({next:r=>{this.nbPages=r.nbPages}})}};e.\u0275fac=function(r){return new(r||e)(m(b),m(G),m(q))},e.\u0275cmp=g({type:e,selectors:[["app-search-articles"]],inputs:{query:"query"},standalone:!0,features:[S],decls:4,vars:2,consts:[[1,"row"],[1,"col-12","col-sm-6"],[3,"article"],[3,"nbPages"]],template:function(r,n){r&1&&I(0,Ie,3,0,"div",0)(1,be,3,3)(2,Ee,3,3)(3,Re,2,1),r&2&&(C(0,n.articles&&n.articles.length?0:n.articles!==void 0?1:n.query?-1:2),a(3),C(3,n.nbPages?3:-1))},dependencies:[R,E,me,j]});let t=e;return t})();var de=ve(Ce());var Pe=(t,e,c)=>["/forum",t,"discussion",e,c],Me=t=>({page:t}),he=(()=>{let e=class e{constructor(i,r){this.urlSharedService=i,this.dateSharedService=r,this.MAX_MESSAGE_CHARACTERS=200}ngOnInit(){this.message.content=(0,de.default)(this.message.content),this.message.content.length>this.MAX_MESSAGE_CHARACTERS&&(this.message.content=this.message.content.substring(0,this.MAX_MESSAGE_CHARACTERS-3)+"...");let i=new Date(this.message.date);this.message.dateFormatted=this.dateSharedService.dt.set({day:i.getDate(),month:i.getMonth()+1,year:i.getFullYear(),hour:i.getHours(),minute:i.getMinutes()}).toFormat("dd/LL/yyyy, HH:mm")}};e.\u0275fac=function(r){return new(r||e)(m(H),m(ce))},e.\u0275cmp=g({type:e,selectors:[["app-search-discussions-item"]],inputs:{message:"message"},standalone:!0,features:[S],decls:7,vars:12,consts:[[3,"routerLink","queryParams","fragment"]],template:function(r,n){r&1&&(o(0,"div")(1,"a",0),p(2),s(),o(3,"p"),p(4),s(),o(5,"span"),p(6),s()()),r&2&&(a(),l("routerLink",O(6,Pe,n.message.forum.label,n.message.discussion.id,n.urlSharedService.toLowerURL(n.message.discussion.name)))("queryParams",Y(10,Me,n.message.discussion.page))("fragment","message-"+n.message.id),a(),y(" ",n.message.discussion.name," "),a(2),d(n.message.content),a(2),d(n.message.dateFormatted))},dependencies:[_,N]});let t=e;return t})();function Te(t,e){if(t&1&&(o(0,"div",0)(1,"div",1),u(2,"app-search-discussions-item",2),s()(),u(3,"hr")),t&2){let c=e.$implicit;a(2),l("message",c)}}function qe(t,e){if(t&1&&F(0,Te,4,1,null,null,x),t&2){let c=v();D(c.messages)}}function xe(t,e){t&1&&(o(0,"p"),p(1),h(2,"translate"),s()),t&2&&(a(),d(f(2,1,"SEARCH_PAGE.ERRORS.NO_MESSAGES")))}function Fe(t,e){t&1&&(o(0,"p"),p(1),h(2,"translate"),s()),t&2&&(a(),d(f(2,1,"SEARCH_PAGE.ERRORS.NO_MESSAGES_NO_SEARCH")))}function De(t,e){if(t&1&&u(0,"br")(1,"app-pagination",3),t&2){let c=v();a(),l("nbPages",c.nbPages)}}var fe=(()=>{let e=class e{constructor(i,r,n){this.activatedRoute=i,this.searchService=r,this.platformId=n}get page(){return Number(this.activatedRoute.snapshot.queryParams.page||"1")}ngOnInit(){this.getMetaInformation(),this.getDiscussions(),this.queryParamsSubscription=this.activatedRoute.queryParams.subscribe({next:()=>{this.getMetaInformation(),this.getDiscussions()}})}ngOnDestroy(){this.queryParamsSubscription.unsubscribe()}getDiscussions(){let i={query:this.query,page:this.page};this.searchService.searchDiscussions(i).subscribe({next:r=>{this.messages=r,w(this.platformId)&&setTimeout(()=>window.scrollTo({top:0,behavior:"instant"}))}})}getMetaInformation(){let i={query:this.query};this.searchService.searchDiscussionsMeta(i).subscribe({next:r=>{this.nbPages=r.nbPages}})}};e.\u0275fac=function(r){return new(r||e)(m(b),m(G),m(q))},e.\u0275cmp=g({type:e,selectors:[["app-search-discussions"]],inputs:{query:"query"},standalone:!0,features:[S],decls:4,vars:2,consts:[[1,"row"],[1,"col"],[3,"message"],[3,"nbPages"]],template:function(r,n){r&1&&I(0,qe,2,0)(1,xe,3,3)(2,Fe,3,3)(3,De,2,1),r&2&&(C(0,n.messages&&n.messages.length?0:n.messages!==void 0?1:n.query?-1:2),a(3),C(3,n.nbPages?3:-1))},dependencies:[R,E,he,j]});let t=e;return t})();function Oe(t,e){if(t&1&&u(0,"app-search-articles",15),t&2){let c=v();l("query",c.queryControl)}}function we(t,e){if(t&1&&u(0,"app-search-discussions",15),t&2){let c=v();l("query",c.queryControl)}}var ge=(()=>{let e=class e{constructor(i,r,n){this.activatedRoute=i,this.router=r,this.appService=n}get query(){return this.activatedRoute.snapshot.queryParams.query}get queryControl(){return this.searchForm.controls.query.value}get searchArea(){let i=this.activatedRoute.snapshot.queryParams.searchArea;return!i||["articles","forum"].includes(i)===!1?"articles":i}get searchAreaControl(){return this.searchForm.controls.searchArea.value}ngOnInit(){this.searchForm=new te({query:new X(this.query),searchArea:new X(this.searchArea)}),this.appService.setTitle("SEARCH_PAGE.TITLE")}load(){this.router.navigate(["/rechercher"],{queryParams:{query:this.queryControl,searchArea:this.searchAreaControl}})}onSubmit(i){i.preventDefault(),this.load()}onSearchAreaChange(){this.load()}onHeaderSearch(i){this.searchForm.controls.query.setValue(i.detail.query),setTimeout(()=>this.load())}};e.\u0275fac=function(r){return new(r||e)(m(b),m(Q),m(se))},e.\u0275cmp=g({type:e,selectors:[["app-search"]],hostBindings:function(r,n){r&1&&P("headerSearch",function(B){return n.onHeaderSearch(B)},!1,z)},standalone:!0,features:[S],decls:27,vars:14,consts:[[1,"container"],[3,"submit","formGroup"],[1,"mt-3"],["for","search",1,"form-label"],["id","search-bar",1,"input-group"],["type","text","formControlName","query",1,"form-control"],[1,"btn"],[1,"fa-solid","fa-magnifying-glass"],["id","search-area",1,"mt-3"],[1,"form-label"],[1,"form-check"],["id","search-area-1","name","searchArea","type","radio","value","articles","formControlName","searchArea",1,"form-check-input",3,"change"],["for","search-area-1",1,"form-check-label"],["id","search-area-2","name","searchArea","type","radio","value","forum","formControlName","searchArea",1,"form-check-input",3,"change"],["for","search-area-2",1,"form-check-label"],[3,"query"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"form",1),P("submit",function(B){return n.onSubmit(B)}),o(2,"div",2)(3,"label",3),p(4),h(5,"translate"),s(),o(6,"div",4),u(7,"input",5),o(8,"button",6),u(9,"span",7),s()()(),o(10,"div",8)(11,"label",9),p(12),h(13,"translate"),s(),o(14,"div",10)(15,"input",11),P("change",function(){return n.onSearchAreaChange()}),s(),o(16,"label",12),p(17),h(18,"translate"),s()(),o(19,"div",10)(20,"input",13),P("change",function(){return n.onSearchAreaChange()}),s(),o(21,"label",14),p(22),h(23,"translate"),s()()()(),u(24,"hr"),I(25,Oe,1,1,"app-search-articles",15)(26,we,1,1),s()),r&2&&(a(),l("formGroup",n.searchForm),a(3),y(" ",f(5,6,"GENERAL.SEARCH")," "),a(8),y(" ",f(13,8,"SEARCH_PAGE.SEARCH_IN")," : "),a(5),y(" ",f(18,10,"GENERAL.ARTICLES")," "),a(5),y(" ",f(23,12,"GENERAL.FORUM")," "),a(3),C(25,n.searchAreaControl==="articles"?25:26))},dependencies:[R,E,oe,ie,W,re,Z,ee,ne,ae,ue,fe],styles:["#search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-right:none}#search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:var(--bs-border-width) solid var(--bs-border-color);border-left:none}#search-area[_ngcontent-%COMP%]{display:flex}#search-area[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{margin-left:.5rem}"]});let t=e;return t})();var Ne=[{path:"",component:ge}],Se=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=M({imports:[_.forChild(Ne),_]});let t=e;return t})();var Ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=M({imports:[J,Se]});let t=e;return t})();export{Ct as SearchModule};
