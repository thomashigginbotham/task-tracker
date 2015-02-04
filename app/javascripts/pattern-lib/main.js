/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: '/javascripts/pattern-lib/',
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery',
		almond: '../../bower_components/almond/almond',
		angular: '../../bower_components/angular/angular',
		'angular-route': '../../bower_components/angular-route/angular-route',
		'google-code-prettify': '../../bower_components/google-code-prettify/src/prettify'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-route': {
			deps: [
				'angular'
			],
			exports: 'ngRoute'
		}
	},
	deps: [
		'bootstrap'
	],
	packages: [

	]
});
