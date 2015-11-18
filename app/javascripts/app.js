/* jslint browser: true */
define(['jquery'], function($) {
	'use strict';

	/*
	 * Initialization
	 */
	var init = function() {
		
	};

	/*
	 * Main entry point
	 */
	init();

	// Allow XPL to re-run start-up scripts when pattern library components
	// have finished loading
	if (window.addEventListener) {
		window.addEventListener('xplComponentsLoaded', function() {
			setTimeout(init, 0);
		}, false);
	}

});
