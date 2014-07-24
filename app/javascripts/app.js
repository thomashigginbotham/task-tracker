/* ================================
* Application Scripts
* ================================ */
require(['jquery'], function($) {
	/* -- Use the following pattern for jQuery plugins -- */
	// $(function() {
	// 	/* -- Sample jQuery Plugin -- */
	// 	require(['samplePlugin'], function() {
	// 		$('.page-wrapper').samplePlugin();
	// 	});
	// });

	/* -- Add Selectivizr support for IE 6-8 <http://selectivizr.com/> -- */
	(function() {
		if ($('.lt-ie9').length > 0) {
			var script = document.createElement('script');

			script.src = '/javascripts/vendor/selectivizr.js';

			document.getElementsByTagName('head')[0].appendChild(script);
		}
	})();
});
