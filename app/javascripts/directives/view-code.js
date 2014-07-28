define(['directives/module'], function(directives) {
	'use strict';

	directives.directive('viewCode', [function() {
		var link = function(scope, element, attrs, ctrl, transclude) {
			scope.codeIsVisible = false;
			scope.showText = attrs.showText;
			scope.hideText = attrs.hideText;
			scope.instructionText = scope.showText;

			scope.toggleCodeVisibility = function() {
				scope.codeIsVisible = !scope.codeIsVisible;
				scope.instructionText = scope.codeIsVisible ? scope.hideText : scope.showText;
			};

			transclude(scope, function(clone, scope) {
				element.append(clone);
			});
		};

		return {
			restrict: 'A',
			transclude: true,
			link: link,
			scope: {
				codeIsVisible: '=?',
				showText: '@',
				hideText: '@',
				instructionText: '&',
				toggleCodeVisibility: '&'
			}
		};
	}]);
});
