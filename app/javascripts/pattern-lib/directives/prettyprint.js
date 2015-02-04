define(['directives/module', 'google-code-prettify'], function(directives, prettify) {
	'use strict';

	directives.directive('prettyprint', ['$timeout', function($timeout) {
		var Ctrl = function($scope, $element) {
			$timeout(function() {
				prettify.prettyPrint();
			});

			// Watch for content changes
			$scope.$watch(function() {
				return $element[0].childNodes.length;
			}, function (newValue, oldValue) {
				if (newValue !== oldValue) {
					$timeout(function() {
						// Remove prettyprinted class
						$element[0].className = $element[0].className.replace('prettyprinted', '');

						// Re-run prettyPrint()
						prettify.prettyPrint();
					});
				}
			});
		};

		var link = function(scope, element) {
			element.addClass('prettyprint');
		};

		return {
			restrict: 'A',
			controller: Ctrl,
			link: link
		};
	}]);
});
