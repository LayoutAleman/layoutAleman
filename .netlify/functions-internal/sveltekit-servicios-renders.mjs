import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/css/hoverStyles.css","assets/css/styles.css","assets/images/.DS_Store","assets/images/Logo_blanco.png","assets/images/Logo_negro copy.png","assets/images/Logo_negro.png","assets/images/MARCA-A.png","assets/images/MARCA-L.png","assets/images/PORTADA.jpg","assets/images/dron.png","assets/images/final 6.jpg","assets/images/layout.png","assets/images/vr.png","assets/main.scss","favicon.png","favicon2.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DAjooEMl.js","app":"_app/immutable/entry/app.Dkc7NS0l.js","imports":["_app/immutable/entry/start.DAjooEMl.js","_app/immutable/chunks/entry.Bzbwa8og.js","_app/immutable/chunks/scheduler.Bic1TUnt.js","_app/immutable/chunks/index.BMMe6XM5.js","_app/immutable/entry/app.Dkc7NS0l.js","_app/immutable/chunks/scheduler.Bic1TUnt.js","_app/immutable/chunks/index.CfEloGqx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/10.js'))
		],
		routes: [
			{
				id: "/servicios/renders",
				pattern: /^\/servicios\/renders\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
