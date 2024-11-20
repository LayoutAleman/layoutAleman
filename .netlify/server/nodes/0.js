import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B5BJJbti.js","_app/immutable/chunks/scheduler.Bic1TUnt.js","_app/immutable/chunks/index.CfEloGqx.js","_app/immutable/chunks/stores.DRH1PaLx.js","_app/immutable/chunks/index.BMMe6XM5.js","_app/immutable/chunks/stores.mFJ1HLuu.js","_app/immutable/chunks/entry.Bzbwa8og.js","_app/immutable/chunks/index.BI-faYI8.js","_app/immutable/chunks/firebase.client.C32Bgf7k.js","_app/immutable/chunks/index-68602d24.xGtUAHMp.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.CqHqfFvE.js","_app/immutable/chunks/each.8qvbmyTG.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = ["_app/immutable/assets/0.BmFejmnV.css","_app/immutable/assets/Toaster.B9JcwM7w.css"];
export const fonts = ["_app/immutable/assets/lg.oyjwlqP2.ttf","_app/immutable/assets/lg.CosQH4Cu.woff"];
