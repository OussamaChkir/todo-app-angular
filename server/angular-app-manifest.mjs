
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/todo-app-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/todo-app-angular"
  },
  {
    "renderMode": 2,
    "route": "/todo-app-angular/about"
  },
  {
    "renderMode": 2,
    "redirectTo": "/todo-app-angular",
    "route": "/todo-app-angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 855, hash: '42c2594ff11857c032afdf45a15953e9271bd90bf0fa95b780ab886912547831', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 967, hash: '81800523cffd53791c35d89317d934cc17d7551579c7d11e85fc43aaa2441332', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 1230, hash: '578be9b9207a2277e74d13abe2fbbfeb1a85783ad081f6403c07a72519868872', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7122, hash: '5f0cdefbe1ac3380c9f24e295e9b253df02e39fce78f34495cdb152c359e1102', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KQD35MK2.css': {size: 276, hash: '3724ci2WiKU', text: () => import('./assets-chunks/styles-KQD35MK2_css.mjs').then(m => m.default)}
  },
};
