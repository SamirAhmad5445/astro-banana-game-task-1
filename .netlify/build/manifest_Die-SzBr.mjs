import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_Bc31avQS.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/group/increment.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/group\\/increment\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"group","dynamic":false,"spread":false}],[{"content":"increment.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/group/increment.json.ts","pathname":"/api/group/increment.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/group/[id].json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/group\\/([^/]+?)\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"group","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false},{"content":".json","dynamic":false,"spread":false}]],"params":["id"],"component":"src/pages/api/group/[id].json.ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/join.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/join\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"join.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/join.json.ts","pathname":"/api/join.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const a=document.getElementById(\"banana\"),c=document.getElementById(\"counter\"),r=document.getElementById(\"greeting\"),n=JSON.parse(sessionStorage.getItem(\"group\")),t=sessionStorage.getItem(\"name\");(!n||!t)&&(location.href=\"/\");r.innerText=`Welcome, ${t} in group ${n.id}`;a.addEventListener(\"click\",i);setInterval(s,200);async function s(){try{const e=await fetch(`/api/group/${n.id}.json`),{data:o}=await e.json();c.innerText=`count = ${o.count}`}catch(e){console.error(e)}}async function i(){try{await fetch(\"/api/group/increment.json\",{method:\"PUT\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({groupId:n.id})})}catch(e){console.error(e)}}\n"}],"styles":[{"type":"inline","content":"body{zoom:200%}\n"}],"routeData":{"route":"/banana","isIndex":false,"type":"page","pattern":"^\\/banana\\/?$","segments":[[{"content":"banana","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/banana.astro","pathname":"/banana","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const o=document.getElementById(\"join-form\"),t=document.getElementById(\"error-message\");o.addEventListener(\"submit\",m);async function m(s){s.preventDefault();const e=new FormData(o).get(\"name\");if(!e){t.innerText=\"Please enter your name to join a group.\";return}try{const n=await fetch(\"/api/join.json\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({name:e})}),{message:a,data:r,success:i}=await n.json();if(!i){t.innerText=a;return}sessionStorage.setItem(\"name\",e),sessionStorage.setItem(\"group\",JSON.stringify(r)),location.href=\"/banana\"}catch(n){t.innerText=\"Oops, something went wrong please refresh the page and try again.\",console.error(n)}}\n"}],"styles":[{"type":"inline","content":"body{zoom:200%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["G:/webDev/Traning/Backend-API/astro-banana-game-task-1/src/pages/banana.astro",{"propagation":"none","containsHead":true}],["G:/webDev/Traning/Backend-API/astro-banana-game-task-1/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/group/increment.json@_@ts":"pages/api/group/increment.json.astro.mjs","\u0000@astro-page:src/pages/api/group/[id].json@_@ts":"pages/api/group/_id_.json.astro.mjs","\u0000@astro-page:src/pages/api/join.json@_@ts":"pages/api/join.json.astro.mjs","\u0000@astro-page:src/pages/banana@_@astro":"pages/banana.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_Die-SzBr.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_7bLfMYIO.mjs","/src/pages/api/group/increment.json.ts":"chunks/increment.json_C0_4QIdf.mjs","/src/pages/api/group/[id].json.ts":"chunks/_id_.json_QxfIkh9T.mjs","/src/pages/api/join.json.ts":"chunks/join.json_ANaXj30G.mjs","/src/pages/banana.astro":"chunks/banana_BuOfM8Y3.mjs","/src/pages/index.astro":"chunks/index_DeBgoTv4.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.B6n_0PnG.js","/astro/hoisted.js?q=1":"_astro/hoisted.BROCb8JE.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
