
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/modules/settings/settings.module.ts": [
    "chunk-6H5N3EXH.js",
    "chunk-Y2YSUYB5.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/search/search.module.ts": [
    "chunk-SYKJSP2T.js",
    "chunk-VYHYY5OV.js",
    "chunk-OL27DTLH.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/not-found/not-found.module.ts": [
    "chunk-75LAFCYR.js",
    "chunk-KNLGFIL5.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/home/home.module.ts": [
    "chunk-JCNUXDBH.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/registration/registration.module.ts": [
    "chunk-JHDV2TOV.js",
    "chunk-GUL25QTV.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/auth/auth.module.ts": [
    "chunk-HRQRVDDM.js",
    "chunk-GUL25QTV.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/category/category.module.ts": [
    "chunk-BO7NQ7SM.js",
    "chunk-MV55Z6P5.js",
    "chunk-3JQKYX7O.js",
    "chunk-OL27DTLH.js",
    "chunk-KNLGFIL5.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/article/article.module.ts": [
    "chunk-W267MSWE.js",
    "chunk-Y2YSUYB5.js",
    "chunk-MV55Z6P5.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/forum/forum.module.ts": [
    "chunk-K64GOOFG.js",
    "chunk-3JQKYX7O.js",
    "chunk-OL27DTLH.js",
    "chunk-KNLGFIL5.js",
    "chunk-RAM4STBQ.js"
  ],
  "src/app/modules/profile/profile.module.ts": [
    "chunk-EFYEZ7GH.js",
    "chunk-VYHYY5OV.js",
    "chunk-3JQKYX7O.js",
    "chunk-OL27DTLH.js",
    "chunk-KNLGFIL5.js",
    "chunk-RAM4STBQ.js"
  ]
},
  assets: {
    'index.csr.html': {size: 37593, hash: 'a73fa32e5547a200bfad753499d0084951261523ae8b885227cb2eb7f301c88d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 26075, hash: '558158f700266471bfdbcec39da5f0f98a833738348bc7ccfe5a059aa9094201', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IES4TAGJ.css': {size: 403242, hash: 'fqF+YNua/o4', text: () => import('./assets-chunks/styles-IES4TAGJ_css.mjs').then(m => m.default)}
  },
};
