export const manifest = (() => {
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
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/home",
				pattern: /^\/admin\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contacto",
				pattern: /^\/contacto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/proyectos",
				pattern: /^\/proyectos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/proyectos/[slug]",
				pattern: /^\/proyectos\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/servicios",
				pattern: /^\/servicios\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/servicios/layout",
				pattern: /^\/servicios\/layout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/servicios/renders",
				pattern: /^\/servicios\/renders\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/servicios/scouting",
				pattern: /^\/servicios\/scouting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
