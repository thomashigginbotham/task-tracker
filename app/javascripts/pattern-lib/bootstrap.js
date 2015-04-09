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
], function(require, ng, $) {
	'use strict';

	$(function() {
		ng.bootstrap(document, ['app']);

		// Run user scripts
		require(['user-scripts']);
	});
});
