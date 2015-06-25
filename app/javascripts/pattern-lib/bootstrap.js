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
		// Fire event notification when all $http requests are done
		app.config(['$httpProvider', function($httpProvider) {
			$httpProvider.interceptors.push('componentHttpInterceptor');
		}]);

		// Bind Angular to the document element
		ng.bootstrap(document, ['app']);

		// Run user scripts
		require(['user-scripts']);
	});
});
