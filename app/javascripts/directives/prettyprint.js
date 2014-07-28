define(['directives/module', 'google-code-prettify'], function(directives, prettify) {
	'use strict';

	directives.directive('prettyprint', ['$timeout', function($timeout) {
		var Ctrl = function() {
			$timeout(function() {
				prettify.prettyPrint();
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
