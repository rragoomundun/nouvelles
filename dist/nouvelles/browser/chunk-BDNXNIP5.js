import{C as o,Pa as n,z as s}from"./chunk-QV6IRI2N.js";var u=(()=>{let r=class r{constructor(t){this.http=t,this.API_PREFIX="article"}getArticle(t){let e=`${this.API_PREFIX}/${t}`;return this.http.get(e,{withCredentials:!0})}postArticle(t){return this.http.post(this.API_PREFIX,t,{withCredentials:!0})}};r.\u0275fac=function(e){return new(e||r)(o(n))},r.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var I=(()=>{let r=class r{constructor(t){this.http=t,this.API_PREFIX="article"}getArticleCategoryMeta(t){let e=`${this.API_PREFIX}/by-category/meta`,c={category:t};return this.http.get(e,{params:c})}getArticleByCategory(t,e){let c=`${this.API_PREFIX}/by-category`,a={category:t,page:e};return this.http.get(c,{params:a})}articleViewed(t){let e=`${this.API_PREFIX}/${t}/viewed`;return this.http.put(e,{})}isUserOwner(t){let e=`${this.API_PREFIX}/${t}/is-user-owner`;return this.http.get(e,{withCredentials:!0})}};r.\u0275fac=function(e){return new(e||r)(o(n))},r.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{u as a,I as b};
