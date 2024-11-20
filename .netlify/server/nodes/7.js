import * as server from '../entries/pages/proyectos/_slug_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/proyectos/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/proyectos/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.4EsHtQ4y.js","_app/immutable/chunks/scheduler.Bic1TUnt.js","_app/immutable/chunks/each.8qvbmyTG.js","_app/immutable/chunks/index.CfEloGqx.js","_app/immutable/chunks/lg-zoom.es5.CDEYUa0O.js"];
export const stylesheets = ["_app/immutable/assets/7.Dq_VBv6w.css"];
export const fonts = [];
