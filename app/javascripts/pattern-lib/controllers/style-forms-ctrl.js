define(['controllers/module'], function(controllers) {
	'use strict';

	controllers.controller('StyleFormsCtrl', ['MenuFactory', function(MenuFactory) {
		// Update tools menu
		MenuFactory.setTools([]);
	}]);
});
