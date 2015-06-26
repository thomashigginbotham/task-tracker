/**
 * A sample jQuery plugin. It appends text to an element and provides an option
 * for setting the font color.
 */
define(['jquery'], function ($) {
	'use strict';

	$.fn.samplePlugin = function (options) {
		var settings = $.extend({
			color: '#f00',
			text: 'Hello!'
		}, options);

		if (this.find('.js-sample').length === 0) {
			this.append($('<p class="js-sample" style="color:' + settings.color + '">' + settings.text + '</p>'));
		}

		return this;
	};

	return $.fn.samplePlugin;
});
