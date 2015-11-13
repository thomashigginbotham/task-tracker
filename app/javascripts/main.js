/* global requirejs */

/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: '/javascripts/',
	paths: {
		'sample-plugin': 'lib/jquery-plugins/jquery.sampleplugin',
		'jquery-noconflict': 'lib/jquery-noconflict',
		footer: 'lib/components/footer',
		jquery: '../bower_components/jquery/dist/jquery',
		almond: '../bower_components/almond/almond',
		system: '/systemjs/dist/system'
	},
	shim: {
		system: {
			exports: 'System'
		}
	},
	map: {
		'*': {
			jquery: 'jquery-noconflict'
		},
		'jquery-noconflict': {
			jquery: 'jquery'
		}
	},
	packages: [

	]
});

/* -- Initialize App (app.js) -- */
requirejs(['app']);
