define([
	'angular',
	'controllers/index',
	'directives/index',
	'factories/index'
], function(ng) {
	'use strict';

	return ng.module('app', [
		'app.controllers',
		'app.directives',
		'app.factories',
		'ngRoute'
	]);
});
