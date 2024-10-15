import './polyfills.server.mjs';
import{a as Ue,b as y}from"./chunk-KATZK443.mjs";import{b as Y,c as j,d as z,e as J,f as K,g as V,h as Z,j as ee,k as te,o as ie,q as ne}from"./chunk-NBGZTVQT.mjs";import{a as Ie}from"./chunk-OTDT4SST.mjs";import{a as be,b as Be,c as Se}from"./chunk-PQIQ37VF.mjs";import{a as Ve}from"./chunk-4XUG6C3M.mjs";import{a as oe}from"./chunk-LLHDH4LQ.mjs";import{a as U}from"./chunk-VZ324JHC.mjs";import{a as $,b as I,c as b,d as ve,f as je}from"./chunk-YI7Y26DW.mjs";import{A as Oe,Aa as u,B as de,D as Fe,Da as Re,E as De,Ea as Ae,Fa as _e,Ga as ge,Gb as Q,H as x,Ha as he,Hb as L,I as pe,Ia as m,Ib as $e,Ja as C,Ka as _,Kb as G,La as me,Lb as D,Na as M,Nb as F,Oa as q,P as T,Pa as Ne,Q as R,Qa as X,Sa as d,Ta as p,U as ue,Ua as ke,Y as fe,ba as ye,ca as we,ea as r,fa as l,ga as Te,m as H,ma as h,nb as Le,oa as S,pa as Me,pb as le,ra as f,sa as A,ta as N,tb as Ge,ua as k,va as a,wa as s,xa as g,ya as W,za as O}from"./chunk-UUL74Y7I.mjs";import"./chunk-VVCT4QZE.mjs";var E=(()=>{let i=class i{constructor(t){this.http=t,this.API_PREFIX="forum"}getForumMeta(t){let n=`${this.API_PREFIX}/${t}/meta`;return this.http.get(n)}getDiscussions(t,n){let c=`${this.API_PREFIX}/${t}/discussions`,v={page:n};return this.http.get(c,{params:v})}getDiscussionMeta(t,n){return this.http.get(`${this.API_PREFIX}/${t}/discussion/${n}/meta`)}getDiscussionMessages(t,n){let c=`${this.API_PREFIX}/discussion/${t}/messages`,v={page:n};return this.http.get(c,{params:v,withCredentials:!0})}postDiscussion(t){return this.http.post(`${this.API_PREFIX}/discussion`,t,{withCredentials:!0})}postMessage(t,n){return this.http.post(`${this.API_PREFIX}/discussion/${t}`,n,{withCredentials:!0})}editMessage(t,n,c){return this.http.put(`${this.API_PREFIX}/discussion/${t}/message/${n}`,c,{withCredentials:!0})}likeMessage(t,n){return this.http.put(`${this.API_PREFIX}/discussion/${t}/message/${n}/like`,{},{withCredentials:!0})}dislikeMessage(t,n){return this.http.put(`${this.API_PREFIX}/discussion/${t}/message/${n}/dislike`,{},{withCredentials:!0})}deleteVote(t,n){return this.http.delete(`${this.API_PREFIX}/discussion/${t}/message/${n}/delete-vote`,{withCredentials:!0})}};i.\u0275fac=function(n){return new(n||i)(Fe(Ge))},i.\u0275prov=Oe({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();function nt(e,i){if(e&1&&(a(0,"a",0),m(1),s(),a(2,"span"),m(3,"\xA0>\xA0"),s()),e&2){let o=u().$implicit;Re("routerLink",o.link),r(),C(o.label)}}function ot(e,i){if(e&1&&(a(0,"span",1),m(1),s()),e&2){let o=u().$implicit;r(),C(o.label)}}function rt(e,i){if(e&1&&(a(0,"li"),h(1,nt,4,2)(2,ot,2,1),s()),e&2){let o=i.$index,t=i.$count;r(),f(1,o!==t-1?1:2)}}var He=(()=>{let i=class i{constructor(t){this.forumService=t}ngOnInit(){}};i.\u0275fac=function(n){return new(n||i)(l(E))},i.\u0275cmp=x({type:i,selectors:[["app-breadcrumb"]],standalone:!0,features:[M],decls:4,vars:0,consts:[[3,"routerLink"],[1,"active"]],template:function(n,c){n&1&&(a(0,"nav")(1,"ol"),N(2,rt,3,1,"li",null,A),s()()),n&2&&(r(2),k(c.forumService.breadcrumbItems))},dependencies:[F,D],styles:["ol[_ngcontent-%COMP%]{padding-left:0}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#555}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{font-weight:700}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]});let e=i;return e})();var at=e=>["/forum",e,"discussion","nouvelle"];function ct(e,i){if(e&1&&(a(0,"a",4),g(1,"span",5),a(2,"span"),m(3),d(4,"translate"),s()()),e&2){let o=u();S("routerLink",Ne(4,at,o.forumSharedService.currentForum)),r(3),_("\xA0",p(4,2,"FORUM_COMMON.NEW_DISCUSSION"),"")}}var We=(()=>{let i=class i{constructor(t,n,c,v,P){this.router=t,this.translateService=n,this.userSharedService=c,this.forumService=v,this.forumSharedService=P}get onDiscussions(){return new RegExp("/forum/[^/]+$").test(this.router.url)}ngOnInit(){this.setCurrentForum(),this.routerEventsSubscription=this.router.events.pipe(H(t=>t instanceof Q)).subscribe(()=>{this.setCurrentForum(),this.router.url==="/forum"&&(this.forumService.breadcrumbItems=[{label:this.translateService.instant("FORUM_PAGE.TITLE"),link:"/forum"}])}),this.router.url==="/forum"&&(this.forumService.breadcrumbItems=[{label:this.translateService.instant("FORUM_PAGE.TITLE"),link:"/forum"}])}ngOnDestroy(){this.routerEventsSubscription.unsubscribe()}setCurrentForum(){new RegExp("/forum/.+$").test(this.router.url)?this.forumSharedService.currentForum=this.router.url.split("/")[2].split("?")[0]:this.forumSharedService.currentForum=null}};i.\u0275fac=function(n){return new(n||i)(l(G),l($),l(ve),l(E),l(y))},i.\u0275cmp=x({type:i,selectors:[["app-forum"]],standalone:!0,features:[M],decls:7,vars:1,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"col-auto","text-sm-end"],[3,"routerLink"],[1,"fa-solid","fa-circle-plus"]],template:function(n,c){n&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),g(3,"app-breadcrumb"),s(),a(4,"div",3),h(5,ct,5,6,"a",4),s()()(),g(6,"router-outlet")),n&2&&(r(5),f(5,c.onDiscussions&&c.userSharedService.isLoggedIn?5:-1))},dependencies:[F,$e,D,b,I,He],styles:[".container[_ngcontent-%COMP%]{padding-bottom:.5rem}.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#555}.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]});let e=i;return e})();function mt(e,i){e&1&&(a(0,"span"),m(1),d(2,"translate"),s()),e&2&&(r(),_(" 1 ",p(2,1,"GENERAL.DISCUSSION_LOWER")," "))}function lt(e,i){if(e&1&&(a(0,"span"),m(1),d(2,"translate"),s()),e&2){let o=u().$implicit;r(),me(" ",o.nbDiscussions," ",p(2,2,"GENERAL.DISCUSSIONS_LOWER")," ")}}function dt(e,i){e&1&&(a(0,"span"),m(1),d(2,"translate"),s()),e&2&&(r(),_(" 1 ",p(2,1,"GENERAL.MESSAGE_LOWER")," "))}function pt(e,i){if(e&1&&(a(0,"span"),m(1),d(2,"translate"),s()),e&2){let o=u().$implicit;r(),me(" ",o.nbMessages," ",p(2,2,"GENERAL.MESSAGES_LOWER")," ")}}function ut(e,i){if(e&1&&(a(0,"div",1)(1,"div",2)(2,"a",3),m(3),s()(),g(4,"div",4),a(5,"div",2)(6,"div"),h(7,mt,3,3,"span")(8,lt,3,4),s(),a(9,"div"),h(10,dt,3,3,"span")(11,pt,3,4),s()()()),e&2){let o=i.$implicit;r(2),Ae("routerLink","./",o.label,""),r(),_(" ",o.name," "),r(4),f(7,o.nbDiscussions==="1"?7:8),r(3),f(10,o.nbMessages==="1"?10:11)}}var qe=(()=>{let i=class i{constructor(t,n){this.appSharedService=t,this.forumSharedService=n}ngOnInit(){this.appSharedService.setTitle("FORUM_PAGE.TITLE"),this.forumSharedService.setForums()}};i.\u0275fac=function(n){return new(n||i)(l(U),l(y))},i.\u0275cmp=x({type:i,selectors:[["app-forum-list"]],standalone:!0,features:[M],decls:3,vars:0,consts:[[1,"container"],[1,"row"],[1,"col"],[3,"routerLink"],[1,"col-1","col-sm-4","col-md-6"]],template:function(n,c){n&1&&(a(0,"div",0),N(1,ut,12,5,"div",1,A),s()),n&2&&(r(),k(c.forumSharedService.forums))},dependencies:[F,D,b,I],styles:[".row[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:.5rem 0}.row[_ngcontent-%COMP%]:last-of-type{border-bottom:1px solid #ccc}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:first-child{display:flex;align-items:center}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%]{text-decoration:none}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]});let e=i;return e})();var ft=(e,i)=>["discussion",e,i],_t=(e,i)=>["/profile",e,i];function gt(e,i){e&1&&(a(0,"p"),m(1),d(2,"translate"),s()),e&2&&(r(),C(p(2,1,"DISCUSSIONS_PAGE.NO_DISCUSSIONS")))}function ht(e,i){e&1&&(a(0,"span"),m(1),d(2,"translate"),s()),e&2&&(r(),C(p(2,1,"GENERAL.MESSAGE_LOWER")))}function vt(e,i){e&1&&(a(0,"span"),m(1),d(2,"translate"),s()),e&2&&(r(),C(p(2,1,"GENERAL.MESSAGES_LOWER")))}function St(e,i){if(e&1&&(a(0,"div",1)(1,"div",2)(2,"a",3),m(3),s(),g(4,"br")(5,"br"),a(6,"span"),m(7),d(8,"translate"),a(9,"a",4),m(10),s(),m(11," - "),a(12,"span"),m(13),s()()(),a(14,"div",5)(15,"div")(16,"span"),m(17),s(),h(18,ht,3,3,"span")(19,vt,3,3),s(),a(20,"div")(21,"span"),m(22),d(23,"translate"),s(),g(24,"br"),a(25,"span"),m(26),s()()()()),e&2){let o=i.$implicit,t=u();r(2),S("routerLink",X(14,ft,o.id,t.urlSharedService.toLowerURL(o.name))),r(),_(" ",o.name," "),r(4),_(" ",p(8,10,"DISCUSSIONS_PAGE.BY")," "),r(2),S("routerLink",X(17,_t,o.author.id,t.urlSharedService.toLowerURL(o.author.name))),r(),_(" ",o.author.name," "),r(3),C(o.firstMessageDateFormatted),r(4),_("",o.nbMessages,"\xA0"),r(),f(18,o.nbMessages==="1"?18:19),r(4),_("",p(23,12,"DISCUSSIONS_PAGE.LAST_MESSAGE")," :"),r(4),C(o.lastMessageDateFormatted)}}function Ct(e,i){if(e&1&&g(0,"br")(1,"app-pagination",6),e&2){let o=u();r(),S("nbPages",o.nbPages)}}var Qe=(()=>{let i=class i{constructor(t,n,c,v,P,ae,ce,xe){this.router=t,this.activatedRoute=n,this.translateService=c,this.appSharedService=v,this.forumSharedService=P,this.forumService=ae,this.urlSharedService=ce,this.platformId=xe}get page(){return Number(this.activatedRoute.snapshot.queryParams.page||"1")}ngOnInit(){this.forum=this.router.url.split("/")[2].split("?")[0],this.getMetaInformation(),this.getDiscussions(),this.forumSharedService.getForums().subscribe({next:t=>{let n=t.find(c=>c.label===this.forum).name;this.appSharedService.setTitle(`${n} - ${this.translateService.instant("FORUM_PAGE.TITLE")}`,!1),this.forumService.breadcrumbItems=[{label:this.translateService.instant("FORUM_PAGE.TITLE"),link:"/forum"},{label:n,link:`/forum/${this.forum}`}]}}),this.routerEventsSubscription=this.router.events.pipe(H(t=>t instanceof Q)).subscribe(()=>{this.getDiscussions()})}ngOnDestroy(){this.routerEventsSubscription.unsubscribe()}getMetaInformation(){this.forumService.getForumMeta(this.forum).subscribe({next:t=>{this.nbPages=t.nbPages}})}getDiscussions(){this.forumService.getDiscussions(this.forum,this.page).subscribe({next:t=>{this.discussions=t,this.discussions.length===0&&(this.noDiscussions=!0);for(let n of this.discussions)n.firstMessageDateFormatted=be.fromISO(n.firstMessageDate).toFormat("dd/LL/yyyy, HH:mm"),n.lastMessageDateFormatted=be.fromISO(n.lastMessageDate).toFormat("dd/LL/yyyy, HH:mm");le(this.platformId)&&setTimeout(()=>window.scrollTo({top:0,behavior:"instant"}))}})}};i.\u0275fac=function(n){return new(n||i)(l(G),l(L),l($),l(U),l(y),l(E),l(oe),l(fe))},i.\u0275cmp=x({type:i,selectors:[["app-discussions"]],standalone:!0,features:[M],decls:5,vars:2,consts:[[1,"container"],[1,"row"],[1,"col","col-sm-8","col-md-8","col-lg-8"],[3,"routerLink"],[1,"content-link",3,"routerLink"],[1,"col"],[3,"nbPages"]],template:function(n,c){n&1&&(a(0,"div",0),h(1,gt,3,3,"p"),N(2,St,27,20,"div",1,A),h(4,Ct,2,1),s()),n&2&&(r(),f(1,c.noDiscussions?1:-1),r(),k(c.discussions),r(2),f(4,c.nbPages?4:-1))},dependencies:[Se,b,I,F,D],styles:[".row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-of-type{text-align:end}.row[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:.5rem 0}.row[_ngcontent-%COMP%]:last-of-type{border-bottom:1px solid #ccc}a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]});let e=i;return e})();var xt=()=>["false","error"];function Mt(e,i){if(e&1&&(a(0,"button",9),m(1),d(2,"translate"),s()),e&2){let o=u();S("disabled",o.isFormValid===!1),r(),_(" ",p(2,2,"GENERAL.CREATE")," ")}}function It(e,i){e&1&&(a(0,"button",9),g(1,"span",11),m(2),d(3,"translate"),s()),e&2&&(S("disabled",!0),r(2),_(" ",p(3,2,"GENERAL.CREATION")," "))}function bt(e,i){e&1&&(a(0,"div",10)(1,"span"),m(2),d(3,"translate"),s()()),e&2&&(r(2),C(p(3,1,"NEW_DISCUSSION_PAGE.ERRORS.CREATION")))}var ze=(()=>{let i=class i{constructor(t,n,c,v,P,ae,ce){this.activatedRoute=t,this.router=n,this.translateService=c,this.appSharedService=v,this.forumService=P,this.forumSharedService=ae,this.urlSharedService=ce}get isFormValid(){return this.discussionForm.valid}ngOnInit(){this.appSharedService.setTitle("FORUM_COMMON.NEW_DISCUSSION"),this.discussionForm=new K({name:new V("",[j.required]),message:new V("",[j.required])}),this.forumService.breadcrumbItems=[{label:this.translateService.instant("FORUM_PAGE.TITLE"),link:"/forum"},{label:this.forumSharedService.currentForumName,link:`/forum/${this.forumSharedService.currentForum}`},{label:this.translateService.instant("FORUM_COMMON.NEW_DISCUSSION"),link:this.router.url}],this.onCreation="false"}onSubmit(){let t={name:this.discussionForm.controls.name.value,message:this.discussionForm.controls.message.value,forum:this.activatedRoute.snapshot.params.forum};this.onCreation="true",this.forumService.postDiscussion(t).subscribe({next:n=>{let{id:c}=n,v=`/forum/${t.forum}/discussion/${c}/${this.urlSharedService.toLowerURL(t.name)}`;this.router.navigate([v])},error:()=>{this.onCreation="error"}})}};i.\u0275fac=function(n){return new(n||i)(l(L),l(G),l($),l(U),l(E),l(y),l(oe))},i.\u0275cmp=x({type:i,selectors:[["app-new-discussion"]],standalone:!0,features:[M],decls:19,vars:14,consts:[[1,"container"],[1,"title"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["id","name","type","text","formControlName","name","required","",1,"form-control"],["for","message",1,"form-label"],["id","message","cols","30","rows","10","formControlName","message","required","",1,"form-control"],[1,"text-end"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-end","text-danger","mt-3"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(n,c){n&1&&(a(0,"div",0)(1,"h2",1),m(2),d(3,"translate"),s(),a(4,"form",2),O("ngSubmit",function(){return c.onSubmit()}),a(5,"div",3)(6,"label",4),m(7),d(8,"translate"),s(),g(9,"input",5),s(),a(10,"div",3)(11,"label",6),m(12),d(13,"translate"),s(),g(14,"textarea",7),s(),a(15,"div",8),h(16,Mt,3,4,"button",9)(17,It,4,4,"button",9),s(),h(18,bt,4,3,"div",10),s()()),n&2&&(r(2),C(p(3,7,"FORUM_COMMON.NEW_DISCUSSION")),r(2),S("formGroup",c.discussionForm),r(3),_(" ",p(8,9,"NEW_DISCUSSION_PAGE.NAME")," "),r(5),_(" ",p(13,11,"NEW_DISCUSSION_PAGE.FIRST_MESSAGE")," "),r(4),f(16,q(13,xt).includes(c.onCreation)?16:-1),r(),f(17,c.onCreation==="true"?17:-1),r(),f(18,c.onCreation==="error"?18:-1))},dependencies:[b,I,ne,Z,Y,z,J,ie,ee,te]});let e=i;return e})();var Et=()=>["false","success","error"];function Pt(e,i){if(e&1&&(a(0,"button",5),m(1),d(2,"translate"),s()),e&2){let o=u();S("disabled",o.isFormValid===!1),r(),_(" ",p(2,2,"DISCUSSION_PAGE.ANSWER")," ")}}function Ot(e,i){e&1&&(a(0,"button",5),g(1,"span",7),m(2),d(3,"translate"),s()),e&2&&(S("disabled",!0),r(2),_(" ",p(3,2,"DISCUSSION_PAGE.ANSWERING")," "))}function Ft(e,i){e&1&&(a(0,"div",6)(1,"span"),m(2),d(3,"translate"),s()()),e&2&&(r(2),C(p(3,1,"DISCUSSION_PAGE.ERRORS.ANSWERING")))}var Je=(()=>{let i=class i{constructor(t,n){this.activatedRoute=t,this.forumService=n,this.answered=new ue}get isFormValid(){return this.answerForm.valid}ngOnInit(){this.answerForm=new K({message:new V("",[j.required])}),this.onAnswer="false"}onSubmit(){let t=this.activatedRoute.snapshot.params.discussionId,n=this.answerForm.value;this.onAnswer="true",this.forumService.postMessage(t,n).subscribe({complete:()=>{this.answerForm.controls.message.setValue(""),this.onAnswer="success",this.answered.emit()},error:()=>{this.onAnswer="error"}})}};i.\u0275fac=function(n){return new(n||i)(l(L),l(E))},i.\u0275cmp=x({type:i,selectors:[["app-answer-discussion"]],outputs:{answered:"answered"},standalone:!0,features:[M],decls:11,vars:8,consts:[[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","message",1,"form-label"],["id","message","cols","30","rows","10","formControlName","message","required","",1,"form-control"],[1,"text-end"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-end","text-danger","mt-3"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(n,c){n&1&&(g(0,"hr"),a(1,"form",0),O("ngSubmit",function(){return c.onSubmit()}),a(2,"div",1)(3,"label",2),m(4),d(5,"translate"),s(),g(6,"textarea",3),s(),a(7,"div",4),h(8,Pt,3,4,"button",5)(9,Ot,4,4,"button",5),s(),h(10,Ft,4,3,"div",6),s()),n&2&&(r(),S("formGroup",c.answerForm),r(3),_(" ",p(5,5,"DISCUSSION_PAGE.ANSWER_DISCUSSION")," "),r(4),f(8,q(7,Et).includes(c.onAnswer)?8:-1),r(),f(9,c.onAnswer==="true"?9:-1),r(),f(10,c.onAnswer==="error"?10:-1))},dependencies:[b,I,ne,Z,Y,z,J,ie,ee,te]});let e=i;return e})();var Dt=["content"],yt=()=>["false","success","error"];function wt(e,i){if(e&1&&(a(0,"button",9),m(1),d(2,"translate"),s()),e&2){let o=u(2);S("disabled",o.isFormValid===!1),r(),_(" ",p(2,2,"DISCUSSION_PAGE.EDIT")," ")}}function Tt(e,i){e&1&&(a(0,"button",9),g(1,"span",11),m(2),d(3,"translate"),s()),e&2&&(S("disabled",!0),r(2),_(" ",p(3,2,"DISCUSSION_PAGE.EDITING")," "))}function Rt(e,i){e&1&&(a(0,"div",10)(1,"span"),m(2),d(3,"translate"),s()()),e&2&&(r(2),C(p(3,1,"DISCUSSION_PAGE.ERRORS.EDIT")))}function At(e,i){if(e&1){let o=W();a(0,"form",1),O("ngSubmit",function(){T(o);let n=u();return R(n.onSubmit())}),a(1,"div",2)(2,"h4",3),m(3),d(4,"translate"),s(),a(5,"button",4),O("click",function(){let n=T(o).$implicit;return R(n.dismiss())}),s()(),a(6,"div",5)(7,"label",6),m(8),d(9,"translate"),s(),g(10,"textarea",7),s(),a(11,"div",8)(12,"div"),h(13,wt,3,4,"button",9)(14,Tt,4,4,"button",9),s(),h(15,Rt,4,3,"div",10),s()()}if(e&2){let o=u();S("formGroup",o.messageForm),r(3),_(" ",p(4,6,"DISCUSSION_PAGE.EDIT_MESSAGE")," "),r(5),_(" ",p(9,8,"DISCUSSION_PAGE.MESSAGE")," "),r(5),f(13,q(10,yt).includes(o.onEdit)?13:-1),r(),f(14,o.onEdit==="true"?14:-1),r(),f(15,o.onEdit==="error"?15:-1)}}var Pe=(()=>{let i=class i{constructor(t){this.forumService=t,this.modalService=De(Ue),this.modified=new ue}get isFormValid(){return this.messageForm.valid}ngOnInit(){this.messageForm=new K({message:new V("",[j.required])}),this.onEdit="false"}open(t,n,c){this.discussionId=t,this.messageId=n,this.messageForm.controls.message.setValue(c),this.modalService.open(this.contentTemplate,{size:"lg"})}onSubmit(){this.onEdit="true",this.forumService.editMessage(this.discussionId,this.messageId,this.messageForm.value).subscribe({complete:()=>{this.onEdit="success",this.modalService.dismissAll(),this.modified.emit({messageId:this.messageId,message:this.messageForm.value.message,date:new Date})},error:()=>{this.onEdit="error"}})}};i.\u0275fac=function(n){return new(n||i)(l(E))},i.\u0275cmp=x({type:i,selectors:[["app-edit-message"]],viewQuery:function(n,c){if(n&1&&_e(Dt,5,Te),n&2){let v;ge(v=he())&&(c.contentTemplate=v.first)}},outputs:{modified:"modified"},standalone:!0,features:[M],decls:2,vars:0,consts:[["content",""],[3,"ngSubmit","formGroup"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],["for","message",1,"form-label"],["id","message","type","text","cols","30","rows","10","formControlName","message","required","",1,"form-control"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-end","text-danger","mt-3"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(n,c){n&1&&h(0,At,16,11,"ng-template",null,0,ke)},dependencies:[b,I,ne,Z,Y,z,J,ie,ee,te],styles:[".modal-footer[_ngcontent-%COMP%]   .text-end.text-danger[_ngcontent-%COMP%]{width:100%}"]});let e=i;return e})();var Ke=(e,i)=>["/profile",e,i];function Nt(e,i){e&1&&g(0,"app-not-found")}function kt(e,i){if(e&1&&g(0,"img",4),e&2){let o=u().$implicit;S("src",o.author.image,we)("alt",o.author.name)}}function Lt(e,i){e&1&&g(0,"span",13)}function Gt(e,i){if(e&1&&(a(0,"span",14),m(1,"\xA0\xB7\xA0"),s(),a(2,"span",14),m(3),d(4,"translate"),s()),e&2){let o=u().$implicit;r(3),me("",p(4,2,"GENERAL.DATE.UPDATED")," : ",o.updatedDateFormatted," ")}}function $t(e,i){if(e&1){let o=W();a(0,"span",15),O("click",function(){T(o);let n=u().$implicit,c=u(2);return R(c.onEditClick(n.id,n.content))}),g(1,"span",16),a(2,"span"),m(3),d(4,"translate"),s()()}e&2&&(r(3),_("\xA0",p(4,1,"DISCUSSION_PAGE.EDIT"),""))}function Ut(e,i){if(e&1&&m(0),e&2){let o=u().$implicit;_(" ",o.nbLikes," ")}}function jt(e,i){if(e&1&&m(0),e&2){let o=u().$implicit;_(" ",o.nbDislikes," ")}}function Vt(e,i){if(e&1){let o=W();a(0,"div",1)(1,"div",2)(2,"a",3),h(3,kt,1,2,"img",4)(4,Lt,1,0),s()(),a(5,"div",5)(6,"div",6)(7,"a",7),m(8),s(),a(9,"span"),m(10,"\xA0\xB7\xA0"),s(),a(11,"span"),m(12),s(),h(13,Gt,5,4),s(),g(14,"div",8),a(15,"div",9)(16,"div"),h(17,$t,5,3,"span"),s(),a(18,"div")(19,"span",10),O("click",function(){let n=T(o).$implicit,c=u(2);return R(c.onThumbUpClick(n))}),g(20,"span",11),a(21,"span"),h(22,Ut,1,1),s()(),a(23,"span",10),O("click",function(){let n=T(o).$implicit,c=u(2);return R(c.onThumbDownClick(n))}),g(24,"span",12),a(25,"span"),h(26,jt,1,1),s()()()()()()}if(e&2){let o=i.$implicit,t=u(2);S("id","message-"+o.id),r(2),S("routerLink",X(15,Ke,o.author.id,t.urlSharedService.toLowerURL(o.author.name))),r(),f(3,o.author.image?3:4),r(4),S("routerLink",X(18,Ke,o.author.id,t.urlSharedService.toLowerURL(o.author.name))),r(),_(" ",o.author.name," "),r(4),C(o.dateFormatted),r(),f(13,o.updatedDateFormatted?13:-1),r(),S("innerHTML",o.contentFormatted,ye),r(3),f(17,t.userSharedService.isLoggedIn&&t.userSharedService.id===o.author.id?17:-1),r(3),Me("text-success",o.vote&&o.vote==="like"),r(2),f(22,o.nbLikes?22:-1),r(2),Me("text-danger",o.vote&&o.vote==="dislike"),r(2),f(26,o.nbDislikes?26:-1)}}function Bt(e,i){if(e&1&&g(0,"br")(1,"app-pagination",17),e&2){let o=u(2);r(),S("nbPages",o.nbPages)}}function Ht(e,i){if(e&1){let o=W();a(0,"app-answer-discussion",18),O("answered",function(){T(o);let n=u(2);return R(n.onNewAnswer())}),s(),a(1,"app-edit-message",19),O("modified",function(n){T(o);let c=u(2);return R(c.onEditMessage(n))}),s()}}function Wt(e,i){if(e&1&&(a(0,"h2"),m(1),s(),N(2,Vt,27,21,"div",1,A),h(4,Bt,2,1)(5,Ht,2,0)),e&2){let o=u();r(),C(o.name),r(),k(o.messages),r(2),f(4,o.nbPages?4:-1),r(),f(5,o.userSharedService.isLoggedIn?5:-1)}}var Ze=(()=>{let i=class i{constructor(t,n,c,v,P,ae,ce,xe,tt,it){this.router=t,this.activatedRoute=n,this.translateService=c,this.appSharedService=v,this.forumService=P,this.forumSharedService=ae,this.dateSharedService=ce,this.userSharedService=xe,this.urlSharedService=tt,this.platformId=it,this.MESSAGES_PER_PAGE=20}get page(){return Number(this.activatedRoute.snapshot.queryParams.page||"1")}ngOnInit(){this.forum=this.activatedRoute.snapshot.params.forum,this.id=this.activatedRoute.snapshot.params.discussionId,le(this.platformId)&&(this.getMetaInformation(),this.getMessages()),this.routerEventsSubscription=this.router.events.pipe(H(t=>t instanceof Q)).subscribe(()=>{this.getMessages()})}ngOnDestroy(){this.routerEventsSubscription.unsubscribe()}getMetaInformation(){this.forumService.getDiscussionMeta(this.forum,this.id).subscribe({next:t=>{this.name=t.name,this.nbPages=t.nbPages,this.notFound=!1,this.appSharedService.setTitle(`${this.name} - ${this.translateService.instant("FORUM_PAGE.TITLE")}`,!1),this.forumService.breadcrumbItems=[{label:this.translateService.instant("FORUM_PAGE.TITLE"),link:"/forum"},{label:this.forumSharedService.currentForumName,link:`/forum/${this.forumSharedService.currentForum}`},{label:this.name,link:this.router.url}]},error:t=>{let{type:n}=t.error;n&&n==="DISCUSSION_INCORRECT"&&(this.notFound=!0)}})}getMessages(t=!0){this.forumService.getDiscussionMessages(this.id,this.page).subscribe({next:n=>{this.messages=n;for(let c of this.messages){c.contentFormatted=Ie.parse(c.content);let v=new Date(c.date);if(c.dateFormatted=this.dateSharedService.dt.set({day:v.getDate(),month:v.getMonth()+1,year:v.getFullYear(),hour:v.getHours(),minute:v.getMinutes()}).toFormat("dd MMMM yyyy, HH:mm"),c.updatedDate){let P=new Date(c.updatedDate);c.updatedDateFormatted=this.dateSharedService.dt.set({day:P.getDate(),month:P.getMonth()+1,year:P.getFullYear(),hour:P.getHours(),minute:P.getMinutes()}).toFormat("dd MMMM yyyy, HH:mm")}}if(le(this.platformId)){let c=this.router.url.split("#")[1];c?setTimeout(()=>{document.getElementById(c)?.scrollIntoView({behavior:"instant"}),window.scrollBy({top:-100,behavior:"instant"})}):t&&setTimeout(()=>window.scrollTo({top:0,behavior:"instant"}))}}})}onNewAnswer(){if(this.messages.length===this.MESSAGES_PER_PAGE){let t=this.router.url.split("?")[0];this.nbPages++,this.router.navigate([t],{queryParams:{page:this.page+1}})}else this.getMessages(!1)}onEditMessage(t){let n=this.messages.find(c=>c.id===t.messageId);n.contentFormatted=Ie.parse(t.message),n.updatedDateFormatted=this.dateSharedService.dt.set({day:t.date.getDate(),month:t.date.getMonth()+1,year:t.date.getFullYear(),hour:t.date.getHours(),minute:t.date.getMinutes()}).toFormat("dd MMMM yyyy, HH:mm")}onEditClick(t,n){this.editMessageComponent.open(this.id,t,n)}onThumbUpClick(t){this.userSharedService.isLoggedIn&&(t.vote&&t.vote==="like"?this.forumService.deleteVote(this.id,t.id).subscribe({complete:()=>{t.vote=null,t.nbLikes--}}):this.forumService.likeMessage(this.id,t.id).subscribe({complete:()=>{t.vote&&t.vote==="dislike"&&t.nbDislikes--,t.vote="like",t.nbLikes++}}))}onThumbDownClick(t){this.userSharedService.isLoggedIn&&(t.vote&&t.vote==="dislike"?this.forumService.deleteVote(this.id,t.id).subscribe({complete:()=>{t.vote=null,t.nbDislikes--}}):this.forumService.dislikeMessage(this.id,t.id).subscribe({complete:()=>{t.vote&&t.vote==="like"&&t.nbLikes--,t.vote="dislike",t.nbDislikes++}}))}};i.\u0275fac=function(n){return new(n||i)(l(G),l(L),l($),l(U),l(E),l(y),l(Be),l(ve),l(oe),l(fe))},i.\u0275cmp=x({type:i,selectors:[["app-discussion"]],viewQuery:function(n,c){if(n&1&&_e(Pe,5),n&2){let v;ge(v=he())&&(c.editMessageComponent=v.first)}},standalone:!0,features:[M],decls:3,vars:1,consts:[[1,"container"],[1,"d-flex","message",3,"id"],[1,"d-none","d-sm-block"],[3,"routerLink"],[3,"src","alt"],[1,"message-box"],[1,"message-header"],[1,"content-link",3,"routerLink"],[1,"message-content",3,"innerHTML"],[1,"message-footer"],[1,"thumb",3,"click"],[1,"fa-solid","fa-thumbs-up"],[1,"fa-solid","fa-thumbs-down"],[1,"fa-regular","fa-circle-user","fa-2x"],[1,"d-none","d-md-inline"],[3,"click"],[1,"fa-solid","fa-pen"],[3,"nbPages"],[3,"answered"],[3,"modified"]],template:function(n,c){n&1&&(a(0,"div",0),h(1,Nt,1,0,"app-not-found")(2,Wt,6,3),s()),n&2&&(r(),f(1,c.notFound?1:c.notFound===!1?2:-1))},dependencies:[F,D,b,I,Se,Je,Pe,Ve],styles:[".container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .d-none.d-sm-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .d-none.d-sm-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:48px;height:48px;object-fit:cover;border:1px solid #ccc;border-radius:100%;margin-right:1rem}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .d-none.d-sm-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border:1px solid #ccc;border-radius:100%;margin-right:1rem;color:#333}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:.5rem;margin-bottom:1rem;padding:.5rem;width:100%}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding-bottom:.5rem;margin-bottom:.5rem}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]{display:flex}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#555}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type{text-align:end;color:#666}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type   .thumb[_ngcontent-%COMP%]{cursor:pointer}.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type   .thumb[_ngcontent-%COMP%]   .fa-solid[_ngcontent-%COMP%]{margin-right:.25rem;margin-left:.5rem}"]});let e=i;return e})();var qt=[{path:"",component:We,children:[{path:"",component:qe},{path:":forum",children:[{path:"",component:Qe},{path:"discussion",children:[{path:"nouvelle",component:ze,canActivate:[je]},{path:":discussionId/:discussionTitle",component:Ze}]}]}]}],et=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=pe({type:i}),i.\u0275inj=de({imports:[F.forChild(qt),F]});let e=i;return e})();var nn=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=pe({type:i}),i.\u0275inj=de({imports:[Le,et]});let e=i;return e})();export{nn as ForumModule};
