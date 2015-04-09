/* jslint browser: true */

define(['directives/module'], function(directives) {
	'use strict';

	directives.directive('loadHtml', ['$http', function($http) {
		var link = function(scope, element) {
			// Get HTML
			$http.get(scope.loadUri).
				success(function(data) {
					var html = data;

					if (typeof scope.htmlEncode !== 'undefined' && scope.htmlEncode.toLowerCase() === 'true') {
						html = '<code>' + htmlEncode(html) + '</code>';
					}

					// Append data
					element.append(html);

					// Notify other scripts
					window.dispatchEvent(new CustomEvent('xplComponentLoaded'));
				}).
				error(function() {
					throw 'loadHtml directive failed to load URI';
				});
		};

		var htmlEncode = function(html) {
			var encodedHtml = html;

			encodedHtml = encodedHtml.replace(/</g, '&lt;');
			encodedHtml = encodedHtml.replace(/>/g, '&gt;');

			return encodedHtml;
		};

		return {
			restrict: 'A',
			link: link,
			scope: {
				loadUri: '@',
				htmlEncode: '@?',
			}
		};
	}]);
});
