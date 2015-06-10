/* jshint browser: true */

define(['directives/module'], function(directives) {
	'use strict';

	directives.directive('colorDetails', ['$http', function($http) {
		var sassVarsUrl = 'stylesheets/partials/_base.scss';

		var link = function(scope) {
			scope.baseColors = [];
			scope.textColors = [];
			scope.otherColors = [];

			// Add trim() support if missing
			if(typeof String.prototype.trim !== 'function') {
				String.prototype.trim = function() {
					return this.replace(/^\s+|\s+$/g, '');
				};
			}

			// Get Sass color variables and add to scope
			$http({
				method: 'GET',
				url: sassVarsUrl,
				cache: true
			}).
				success(function(data) {
					var matches = data.match(/^\$color[^:]+:\s*[^;]+/gm);
					var len = matches.length;
					var n, match, sassVar;

					for (n = 0; n < len; n++) {
						match = matches[n];
						sassVar = match.split(':');

						if (hasInString(sassVar[0], ['-primary', '-secondary', '-tertiary', '-quadrary'])) {
							scope.baseColors.push({
								key: sassVar[0].trim(),
								value: sassVar[1].trim()
							});
						} else if (hasInString(sassVar[0], ['-text', '-bg'])) {
							scope.textColors.push({
								key: sassVar[0].trim(),
								value: sassVar[1].trim()
							});
						} else {
							scope.otherColors.push({
								key: sassVar[0].trim(),
								value: sassVar[1].trim()
							});
						}
					}
				}).
				error(function() {
					throw 'Could not load Sass color variables.';
				});
		};

		var hasInString = function(haystack, needles) {
			var len = needles.length;
			var n;

			for (var n = 0; n < len; n++) {
				if (haystack.indexOf(needles[n]) > -1) {
					return true;
				}
			}

			return false;
		};

		return {
			restrict: 'A',
			link: link,
			templateUrl: 'templates/pattern-lib/color-details.html'
		};
	}]);
});
