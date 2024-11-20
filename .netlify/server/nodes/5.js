import * as server from '../entries/pages/contacto/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacto/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contacto/+page.server.js";
export const imports = ["_app/immutable/nodes/5.CJKEhAqT.js","_app/immutable/chunks/scheduler.Bic1TUnt.js","_app/immutable/chunks/index.CfEloGqx.js","_app/immutable/chunks/stores.DRH1PaLx.js","_app/immutable/chunks/index.BMMe6XM5.js","_app/immutable/chunks/entry.Bzbwa8og.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.CqHqfFvE.js"];
export const stylesheets = ["_app/immutable/assets/5.DCBEp9Kn.css","_app/immutable/assets/Toaster.B9JcwM7w.css"];
export const fonts = [];
