/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: '/javascripts/',
	paths: {
		samplePlugin: 'lib/jquery-plugins/jquery.sampleplugin',
		jquery: '../bower_components/jquery/dist/jquery',
		requirejs: '../bower_components/requirejs/require'
	},
	packages: [

	]
});

/* -- Initialize App (app.js) -- */
requirejs(['app']);
