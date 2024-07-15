import { renderers } from './renderers.mjs';
import { manifest } from './manifest_hUkxO7u5.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/group/increment.json.astro.mjs');
const _page2 = () => import('./pages/api/group/_id_.json.astro.mjs');
const _page3 = () => import('./pages/api/join.json.astro.mjs');
const _page4 = () => import('./pages/banana.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/group/increment.json.ts", _page1],
    ["src/pages/api/group/[id].json.ts", _page2],
    ["src/pages/api/join.json.ts", _page3],
    ["src/pages/banana.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "507ff975-9c8e-4314-8f1d-da48d9615a0c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
