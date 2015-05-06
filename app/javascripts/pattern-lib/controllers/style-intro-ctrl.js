define(['controllers/module'], function(controllers) {
	'use strict';

	controllers.controller('StyleIntroCtrl', ['MenuFactory', function(MenuFactory) {
		// Update tools menu
		MenuFactory.setTools([]);
	}]);
});
