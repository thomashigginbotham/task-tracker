/* jshint browser: true */

/**
 * Bootstrap angular to window.document
 */
define([
	'require',
	'angular',
	'jquery',
	'pattern-app',
	'routes'
], function(require, ng, $, app) {
	'use strict';

	$(function() {
		// Initialize
		app.run(['$rootScope', function($rootScope) {
			$rootScope.$on('$routeChangeSuccess', function() {
				// Notify other scripts of route change
				window.dispatchEvent(new CustomEvent('xplRouteChange'));
			});
		}]);

		// Bind Angular to the document element
		ng.bootstrap(document, ['app']);

		// Run user scripts
		require(['user-scripts']);
	});
});
