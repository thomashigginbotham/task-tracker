/* jslint browser: true */
define(['jquery'], function($) {
	'use strict';

	/*
	 * Initialization
	 */
	var init = function() {
		runSamplePlugin();
	};

	/*
	 * Add text to the footer using Sample Plugin.
	 * This is just an example to demonstrate the usage of custom jQuery plugins
	 * as a pattern for development.
	 */
	var runSamplePlugin = function() {
		$(function() {
			require(['samplePlugin'], function() {
				$('.site-footer p').first().samplePlugin({
					color: '#777'
				});
			});
		});
	};

	/*
	 * Main entry point
	 */
	(function() {
		// Allow XPL to re-run start-up scripts when pattern library components
		// have finished loading
		window.addEventListener('xplComponentsLoaded', function() {
			setTimeout(init, 0);
		}, false);

		// Use Selectivizr for IE 8 and below
		if ($('.lt-ie9').length > 0) {
			var selectivizrPath = '/javascripts/vendor/selectivizr.js';

			$.getScript(selectivizrPath);
		}

		// Let's go!
		setTimeout(init, 0);
	})();
});
