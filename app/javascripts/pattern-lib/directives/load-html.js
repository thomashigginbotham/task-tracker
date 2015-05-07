/* jslint browser: true */

define(['directives/module'], function(directives) {
	'use strict';

	directives.directive('loadHtml', ['$http', function($http) {
		var link = function(scope, element) {
			// Get HTML
			$http({
				method: 'GET',
				url: scope.loadUri,
				cache: true
			}).
				success(function(data) {
					var html = data;

					if (typeof scope.htmlEncode !== 'undefined' && scope.htmlEncode.toLowerCase() === 'true') {
						html = '<code>' + htmlEncode(html) + '</code>';
					}

					// Append data
					element.append(html);

					// Notify other scripts when component is added
					if (typeof scope.htmlEncode === 'undefined' || scope.htmlEncode.toLowerCase() === 'false') {
						window.dispatchEvent(new CustomEvent('xplComponentLoad'));
					}
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
