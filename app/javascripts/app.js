/* jslint browser: true */

/* ================================
* Application Scripts
* ================================ */
require(['jquery'], function($) {
	'use strict';

	/* -- Initialize scripts -- */
	var init = function() {
		$(function() {
			/* -- Sample jQuery Plugin -- */
			require(['samplePlugin'], function() {
				$('.site-footer p').first().samplePlugin();
			});
		});
	};

	/* -- Allow XPL to re-run scripts when components load -- */
	(function() {
		$(window).on('xplComponentLoaded', function() {
			setTimeout(init, 0);
		});
	})();

	/* -- Add Selectivizr support for IE 6-8 <http://selectivizr.com/> -- */
	(function() {
		if ($('.lt-ie9').length > 0) {
			var script = document.createElement('script');

			script.src = '/javascripts/vendor/selectivizr.js';

			document.getElementsByTagName('head')[0].appendChild(script);
		}
	})();

	/* -- Let's go! -- */
	setTimeout(init, 0);
});
