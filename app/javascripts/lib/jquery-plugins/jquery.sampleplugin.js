/// <summary>
/// A sample jQuery plugin
/// </summary>
define(['jquery'], function ($) {
	$.fn.samplePlugin = function (options) {
		var settings = $.extend({}, options);

		this.append($('<p style="color:#f00">jQuery plugins are placed in the <i>app/javascripts/lib/jquery-plugins</i> folder. This text was added by a sample plugin.</p>'));

		return this;
	};
});
