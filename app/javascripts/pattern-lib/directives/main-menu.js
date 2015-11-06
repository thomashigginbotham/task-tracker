define(['directives/module', 'jquery'], function(directives, $) {
	'use strict';

	directives.directive('mainMenu', ['$location', 'MenuFactory', function($location, MenuFactory) {
		var Ctrl = function($scope) {
			// Main menu
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
					text: 'Layout',
					uri: '/components/layout'
				}, {
					text: 'Blocks',
					uri: '/components/blocks'
				}, {
					text: 'Buttons',
					uri: '/components/buttons'
				}, {
					text: 'Tables',
					uri: '/components/tables'
				}, {
					text: 'Decoration',
					uri: '/components/decoration'
				}]
			}, {
				text: 'Pages',
				submenu: [{
					text: 'Project List',
					uri: '/pages/project-list'
				}, {
					text: 'Project Detail',
					uri: '/pages/project-detail'
				}, {
					text: 'Time Records',
					uri: '/pages/time-records'
				}]
			}];

			// Tools menu
			$scope.tools = [];

			MenuFactory.registerObserverCallback(function() {
				$scope.tools = MenuFactory.getTools();
			});

			// Utility methods
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

		var link = function($scope, element) {
			var updateActiveClass = function() {
				// Add current menu item's class
				var path = $location.path();
				var curSection = path.match(/[a-z0-9-]+/);
				var activeClassMatch = element[0].className.match(/[^\s]+\-active/);

				// Remove existing [section]-active class
				if (activeClassMatch !== null) {
					element.removeClass(activeClassMatch[0]);
				}

				// Add the new [section]-active class
				element.addClass(curSection + '-active');
			};

			// Update class on route changes
			$scope.$on('$routeChangeSuccess', updateActiveClass);

			// Update now too since $routeChangeSuccess sometimes skips on the
			// initial run
			updateActiveClass();
		};

		return {
			restrict: 'A',
			controller: Ctrl,
			link: link,
			templateUrl: 'templates/pattern-lib/main-menu.html'
		};
	}]);
});
