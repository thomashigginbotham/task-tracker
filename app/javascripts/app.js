/* jslint browser: true */
define(['jquery'], function($) {
	'use strict';

	/*
	 * Initialization
	 */
	var init = function() {
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
