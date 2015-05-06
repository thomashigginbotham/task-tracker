define(['controllers/module'], function(controllers) {
	'use strict';

	controllers.controller('StyleTablesCtrl', ['MenuFactory', function(MenuFactory) {
		// Update tools menu
		MenuFactory.setTools([]);
	}]);
});
