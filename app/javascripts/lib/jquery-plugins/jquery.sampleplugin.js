/// <summary>
/// A sample jQuery plugin
/// </summary>
define(['jquery'], function ($) {
	'use strict';

	$.fn.samplePlugin = function (options) {
		var settings = $.extend({
			color: '#f00'
		}, options);

		if(this.find('.js-sample').length === 0) {
			this.append($('<p class="js-sample" style="color:' + settings.color + '">This text was added by a sample jQuery plugin. Plugins are placed in the <strong>app/javascripts/lib/jquery-plugins</strong> folder and are called from <strong>app/javascripts/app.js</strong>.</p>'));
		}

		return this;
	};
});
