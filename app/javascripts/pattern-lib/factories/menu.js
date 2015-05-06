define(['factories/module', 'angular'], function(factories, ng) {
	'use strict';

	factories.factory('MenuFactory', [function() {
		var observerCallbacks = [];

		var tools = {
			value: []
		};

		tools.setTools = function(val) {
			this.value = val;
			notifyObservers();
		};

		tools.getTools = function() {
			return this.value;
		};

		// Register an observer
		tools.registerObserverCallback = function(callback) {
			observerCallbacks.push(callback);
		};

		// Run callbacks
		var notifyObservers = function() {
			ng.forEach(observerCallbacks, function(callback) {
				callback();
			});
		};

		return tools;
	}]);
});
