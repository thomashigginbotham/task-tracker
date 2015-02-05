/* jshint browser: true */

define(['directives/module'], function(directives) {
	'use strict';

	directives.directive('fontDetails', [function() {
		var link = function(scope, element) {
			// Create an element and read its properties
			var node = document.createElement(scope.htmlNode);
			var computedStyle;
			var color, fontSize, fontFamily, lineHeight;

			document.body.appendChild(node);

			computedStyle = window.getComputedStyle(node);
			color = computedStyle.getPropertyValue('color');
			fontSize = computedStyle.getPropertyValue('font-size');
			fontFamily = computedStyle.getPropertyValue('font-family');
			lineHeight = computedStyle.getPropertyValue('line-height');

			node.parentNode.removeChild(node);

			scope.color = convertRgbToHex(color);
			scope.fontSize = roundNumberWithUnit(fontSize);
			scope.fontFamily = fontFamily;
			scope.lineHeight = roundNumberWithUnit(lineHeight);
		};

		var roundNumberWithUnit = function(valueWithUnit) {
			var value = valueWithUnit.replace(/[^\d\.]/g, '');
			var unit = valueWithUnit.replace(/[\d\.]/g, '');

			return Math.round(value) + unit;
		};

		var convertRgbToHex = function(rgbString) {
			if (rgbString.indexOf('rgb(') === 0) {
				var rgb = rgbString.split(',');
				var hex = '#';

				hex += ('0' + parseInt(rgb[0].substring(4)).toString(16)).slice(-2);
				hex += ('0' + parseInt(rgb[1]).toString(16)).slice(-2);
				hex += ('0' + parseInt(rgb[2]).toString(16)).slice(-2);

				return hex;
			} else {
				return rgbString;
			}
		};

		return {
			restrict: 'A',
			link: link,
			template: '{{color}} {{fontSize}}/{{lineHeight}} {{fontFamily}}',
			scope: {
				htmlNode: '@'
			}
		};
	}]);
});
