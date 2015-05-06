define(['controllers/module'], function(controllers) {
	'use strict';

	controllers.controller('ComponentsCtrl', ['MenuFactory', function(MenuFactory) {
		// Update tools menu
		MenuFactory.setTools([]);
	}]);
});
