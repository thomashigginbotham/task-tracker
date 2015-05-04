define(['controllers/module'], function(controllers) {
	'use strict';

	controllers.controller('PagesCtrl', ['$scope', '$routeParams', '$sce', function($scope, $routeParams, $sce) {
		$scope.iframeSrc = $sce.trustAsResourceUrl($routeParams.pageName + '.html');
	}]);
});
