
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/modules/settings/settings.module.ts": [
    "chunk-3KX3QVS7.js",
    "chunk-EIAFF7IL.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/search/search.module.ts": [
    "chunk-O6T5BJAU.js",
    "chunk-MJF6KMB4.js",
    "chunk-MJJHEEEL.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/not-found/not-found.module.ts": [
    "chunk-QQWGVTZ2.js",
    "chunk-3INYDQMJ.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/home/home.module.ts": [
    "chunk-QVEKLSIG.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/registration/registration.module.ts": [
    "chunk-TLDH433X.js",
    "chunk-IMOJ64MV.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/auth/auth.module.ts": [
    "chunk-VVAWTPEG.js",
    "chunk-IMOJ64MV.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/category/category.module.ts": [
    "chunk-FYQJXIEP.js",
    "chunk-HQKFMBMO.js",
    "chunk-EP66KPOH.js",
    "chunk-MJJHEEEL.js",
    "chunk-3INYDQMJ.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/article/article.module.ts": [
    "chunk-XWHACVKB.js",
    "chunk-EIAFF7IL.js",
    "chunk-HQKFMBMO.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/forum/forum.module.ts": [
    "chunk-O4XT7MXC.js",
    "chunk-EP66KPOH.js",
    "chunk-MJJHEEEL.js",
    "chunk-3INYDQMJ.js",
    "chunk-HWW6DXAF.js"
  ],
  "src/app/modules/profile/profile.module.ts": [
    "chunk-5X6T5SNJ.js",
    "chunk-MJF6KMB4.js",
    "chunk-EP66KPOH.js",
    "chunk-MJJHEEEL.js",
    "chunk-3INYDQMJ.js",
    "chunk-HWW6DXAF.js"
  ]
},
  assets: {
    'index.csr.html': {size: 37593, hash: '485764400a7aae90b70492b4f3534b586c119ca1f8f9b9fbe9e9222ffcf3d0cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 26075, hash: '5dbeedbebaed95d80c4c55061e07cbaa11418f3a88564ada370993bb719c9f61', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IES4TAGJ.css': {size: 403242, hash: 'fqF+YNua/o4', text: () => import('./assets-chunks/styles-IES4TAGJ_css.mjs').then(m => m.default)}
  },
};
