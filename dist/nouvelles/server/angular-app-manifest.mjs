
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/modules/settings/settings.module.ts": [
    "chunk-XW7OIMXS.js",
    "chunk-DMU42X5R.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/search/search.module.ts": [
    "chunk-7LTVOBSI.js",
    "chunk-2AG62HRI.js",
    "chunk-LRA4C6LG.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/not-found/not-found.module.ts": [
    "chunk-354GK6Q4.js",
    "chunk-ZZ5OVN5T.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/home/home.module.ts": [
    "chunk-H2DDTJ3N.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/registration/registration.module.ts": [
    "chunk-UZJHWZCJ.js",
    "chunk-KMANRF7Y.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/auth/auth.module.ts": [
    "chunk-SQ3TQH2M.js",
    "chunk-KMANRF7Y.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/category/category.module.ts": [
    "chunk-OMF6K4XO.js",
    "chunk-KCLGIHRZ.js",
    "chunk-Q5DBC3NA.js",
    "chunk-LRA4C6LG.js",
    "chunk-ZZ5OVN5T.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/article/article.module.ts": [
    "chunk-DVFSE3LS.js",
    "chunk-DMU42X5R.js",
    "chunk-KCLGIHRZ.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/forum/forum.module.ts": [
    "chunk-YCMSPO4H.js",
    "chunk-Q5DBC3NA.js",
    "chunk-LRA4C6LG.js",
    "chunk-ZZ5OVN5T.js",
    "chunk-67KAM2NX.js"
  ],
  "src/app/modules/profile/profile.module.ts": [
    "chunk-66PSAEF5.js",
    "chunk-2AG62HRI.js",
    "chunk-Q5DBC3NA.js",
    "chunk-LRA4C6LG.js",
    "chunk-ZZ5OVN5T.js",
    "chunk-67KAM2NX.js"
  ]
},
  assets: {
    'index.csr.html': {size: 37593, hash: 'e636dfc689b43c1dca1ce97fdb1d88c8b4646c0b7d523a9ed983fec617bf5aa8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 26075, hash: '4aae815fcf4e4cc60ad929dbe881e48b73a7ed7c781e8257d8b615536502bb37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IES4TAGJ.css': {size: 403242, hash: 'fqF+YNua/o4', text: () => import('./assets-chunks/styles-IES4TAGJ_css.mjs').then(m => m.default)}
  },
};
