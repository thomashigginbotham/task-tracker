define(['controllers/module'], function(controllers) {
	'use strict';

	controllers.controller('StyleColorCtrl', ['MenuFactory', function(MenuFactory) {
		// Update tools menu
		MenuFactory.setTools([]);
	}]);
});
