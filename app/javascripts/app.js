/* jslint browser: true */
define(['jquery'], function($) {
	'use strict';

	/*
	 * Initialization
	 */
	var init = function() {
		// ES6
		require(['system'], function(System) {
			System.config({
				defaultJSExensions: true
			});
		});

		// Site Footer scripts
		require(['footer'], function(footer) {
			footer.addText('This text was added with JavaScript. See <strong>/app/javascripts/app.js</strong> to make changes.');
		});
	};

	/*
	 * Main entry point
	 */
	(function() {
		// Allow XPL to re-run start-up scripts when pattern library components
		// have finished loading
		if (window.addEventListener) {
			window.addEventListener('xplComponentsLoaded', function() {
				setTimeout(init, 0);
			}, false);
		}

		// Let's go!
		setTimeout(function() {
			init();

			// Use Selectivizr and Respond.js for IE 8 and below
			// IMPORTANT: Selectivizr requires a global jQuery object to work.
			if ($('.lt-ie9').length > 0) {
				var selectivizrPath = '/javascripts/vendor/selectivizr.js';

				$.getScript(selectivizrPath, function() {
					$.getScript('//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js');
				});
			}
		}, 0);
	})();
});
