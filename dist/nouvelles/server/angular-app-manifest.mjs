
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/modules/settings/settings.module.ts": [
    "chunk-TJTXLLI2.js",
    "chunk-OWWLQ233.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/search/search.module.ts": [
    "chunk-6VLUJ5A4.js",
    "chunk-SKODP4K4.js",
    "chunk-VZDDSKEK.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/not-found/not-found.module.ts": [
    "chunk-L77W2GG7.js",
    "chunk-NOWZD5OQ.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/home/home.module.ts": [
    "chunk-J3ZCDOPB.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/registration/registration.module.ts": [
    "chunk-GDSV6QRG.js",
    "chunk-T72NOSFK.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/auth/auth.module.ts": [
    "chunk-QJISTQMU.js",
    "chunk-T72NOSFK.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/category/category.module.ts": [
    "chunk-KI4EEIZC.js",
    "chunk-76CK7ILT.js",
    "chunk-UI4U7PU2.js",
    "chunk-VZDDSKEK.js",
    "chunk-NOWZD5OQ.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/article/article.module.ts": [
    "chunk-O42MYAWF.js",
    "chunk-OWWLQ233.js",
    "chunk-76CK7ILT.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/forum/forum.module.ts": [
    "chunk-OBUYGGP5.js",
    "chunk-UI4U7PU2.js",
    "chunk-VZDDSKEK.js",
    "chunk-NOWZD5OQ.js",
    "chunk-M33X5EDX.js"
  ],
  "src/app/modules/profile/profile.module.ts": [
    "chunk-TJ4SMMZ2.js",
    "chunk-SKODP4K4.js",
    "chunk-UI4U7PU2.js",
    "chunk-VZDDSKEK.js",
    "chunk-NOWZD5OQ.js",
    "chunk-M33X5EDX.js"
  ]
},
  assets: {
    'index.csr.html': {size: 37593, hash: 'a55041413b890c6f26db40e3617daad4e7bc173db5f97449fd0e95ce444a7e8c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 26075, hash: 'e6d6e3bcf014d3d69cc6ee6ae71318a4bbe8ee6298ef360345277bde7a6a9852', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IES4TAGJ.css': {size: 403242, hash: 'fqF+YNua/o4', text: () => import('./assets-chunks/styles-IES4TAGJ_css.mjs').then(m => m.default)}
  },
};
