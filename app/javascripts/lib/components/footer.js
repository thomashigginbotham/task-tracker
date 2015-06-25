/*
* Add text to the footer using the sample jQuery plugin.
* This is just an example to demonstrate the usage of component-specific
* JavaScript modules and custom jQuery plugins.
*/
define(['jquery', 'sample-plugin'], function($) {
	'use strict';

	var footer = {
		addText: function(textToAdd) {
			$(function() {
				$('.site-footer p').first().samplePlugin({
					color: '#777',
					text: textToAdd
				});
			});
		}
	};

	return footer;
});
