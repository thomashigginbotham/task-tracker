/* global requirejs */

/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: '/javascripts/',
	paths: {
		samplePlugin: 'lib/jquery-plugins/jquery.sampleplugin',
		jquery: '../bower_components/jquery/dist/jquery'
	},
	packages: [

	]
});

/* -- Initialize App (app.js) -- */
requirejs(['app']);
