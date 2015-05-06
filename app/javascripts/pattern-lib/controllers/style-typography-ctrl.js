define(['controllers/module'], function(controllers) {
	'use strict';

	controllers.controller('StyleTypographyCtrl', ['MenuFactory', function(MenuFactory) {
		// Update tools menu
		MenuFactory.setTools([]);
	}]);
});
