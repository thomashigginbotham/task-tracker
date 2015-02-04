/* jslint browser: true */

/* ================================
* Application Scripts
* ================================ */
require(['jquery'], function($) {
	'use strict';

	/* -- Use the following pattern for jQuery plugins -- */
	$(function() {
		/* -- Sample jQuery Plugin -- */
		require(['samplePlugin'], function() {
			$('.page-wrapper').samplePlugin({
				htmlToAdd: '<p style="color:#f00">jQuery plugins are placed in the <i>app/javascripts/lib/jquery-plugins</i> folder. This text was added by a sample plugin.</p>'
			});
		});
	});

	/* -- Add Selectivizr support for IE 6-8 <http://selectivizr.com/> -- */
	(function() {
		if ($('.lt-ie9').length > 0) {
			var script = document.createElement('script');

			script.src = '/javascripts/vendor/selectivizr.js';

			document.getElementsByTagName('head')[0].appendChild(script);
		}
	})();
});
