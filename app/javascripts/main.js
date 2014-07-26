/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: '/javascripts/',
	paths: {
		samplePlugin: 'lib/jquery-plugins/jquery.sampleplugin',
		jquery: '../bower_components/jquery/dist/jquery',
		requirejs: '../bower_components/requirejs/require',
		almond: '../bower_components/almond/almond',
		angular: '../bower_components/angular/angular',
		'angular-route': '../bower_components/angular-route/angular-route'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular'],
			exports: 'ngRoute'
		}
	},
	deps: ['bootstrap'],
	packages: [

	]
});
