/* jshint browser: true */
define(['factories/module'], function(factories) {
	'use strict';

	/**
	 * Fires "xplComponentsLoaded" event when components have all loaded
	 */
	factories.factory('componentHttpInterceptor', ['$q', function($q) {
		var requestCount = 0;

		var isCustomPartial = function(uri) {
			// Partials in the partials/pattern-lib folder are not user components
			return uri.match(/^partials\/pattern\-lib\//i) === null;
		};

		return {
			request: function(config) {
				if (isCustomPartial(config.url)) {
					requestCount++;
				}

				return config || $q.when(config);
			},
			response: function(response) {
				if (isCustomPartial(response.config.url)) {
					requestCount--;

					if (requestCount === 0) {
						try {
							window.dispatchEvent(new CustomEvent('xplComponentsLoaded'));
						} catch (ex) {

						}
					}
				}

				return response || $q.when(response);
			},
			responseError: function(response) {
				if (isCustomPartial(response.config.url)) {
					requestCount--;

					if (requestCount === 0) {
						try {
							window.dispatchEvent(new CustomEvent('xplComponentsLoaded'));
						} catch (ex) {

						}
					}
				}

				return $q.reject(response);
			}
		};
	}]);
});
