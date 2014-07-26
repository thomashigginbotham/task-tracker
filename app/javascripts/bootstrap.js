/**
 * Bootstrap angular to window.document
 */
define([
	'require',
	'angular',
	'jquery',
	'app',
	'routes'
], function(require, ng, $) {
	'use strict';

	$(function() {
		ng.bootstrap(document, ['app']);
	});
});
