define([
	'angular',
	'controllers/index',
	'directives/index'
], function(ng) {
	'use strict';

	return ng.module('app', [
		'app.controllers',
		'app.directives',
		'ngRoute'
	]);
});
