/* jshint browser: true */

define(['controllers/module'], function(controllers) {
	'use strict';

	controllers.controller('PagesCtrl', ['$scope', '$rootScope', '$routeParams', '$sce', 'MenuFactory', function($scope, $rootScope, $routeParams, $sce, MenuFactory) {
		var pageUri = $sce.trustAsResourceUrl($routeParams.pageName + '.html');

		// Set iframe source
		$scope.iframeSrc = pageUri;

		// Update tools menu
		MenuFactory.setTools([{
			text: 'Open Page',
			class: 'xpl-tools-new-window',
			action: function() {
				// Open current page in new window/tab
				window.open(pageUri);
			}
		}]);
	}]);
});
