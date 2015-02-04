define(['directives/module'], function(directives) {
	'use strict';

	directives.directive('mainMenu', ['$location', function($location) {
		var Ctrl = function($scope) {
			$scope.menu = [{
				text: 'Style',
				submenu: [{
					text: 'Introduction',
					uri: '/style/intro'
				}, {
					text: 'Typography',
					uri: '/style/typography'
				}, {
					text: 'Color',
					uri: '/style/color'
				}, {
					text: 'Forms',
					uri: '/style/forms'
				}, {
					text: 'Tables',
					uri: '/style/tables'
				}]
			}, {
				text: 'Components',
				submenu: [{
					text: 'Page Sections',
					uri: '/components/page-sections'
				}, {
					text: 'UI Elements',
					uri: '/components/ui-elements'
				}]
			}, {
				text: 'Pages',
				submenu: [{
					text: 'Home Page',
					uri: '/pages/index'
				}, {
					text: 'Interior Page',
					uri: '/pages/interior'
				}]
			}];

			$scope.isCurrentUri = function(uri) {
				return $location.path() === uri;
			};

			$scope.containsCurrentUri = function(submenu) {
				var curPath = $location.path();
				var containsUri = false;

				if (typeof submenu === 'object' && submenu.length > 0) {
					$.each(submenu, function(index, value) {
						if (curPath === value.uri) {
							containsUri = true;
							return false;
						}
					});
				}

				return containsUri;
			};

			$scope.hyphenateString = function(str) {
				return str.replace(/\s/g, '-').toLowerCase();
			};
		};

		var link = function($scope, element, attrs) {
			$scope.$on('$routeChangeSuccess', function() {
				// Add current menu item's class
				var path = $location.path();
				var curSection = path.match(/[a-z0-9-]+/);
				var activeClassMatch = element[0].className.match(/[^\s]+\-active/);

				if (activeClassMatch !== null) {
					element.removeClass(activeClassMatch[0]);
				}

				element.addClass(curSection + '-active');
			});
		};

		return {
			restrict: 'A',
			controller: Ctrl,
			link: link,
			templateUrl: 'partials/pattern-lib/main-menu.html'
		};
	}]);
});
