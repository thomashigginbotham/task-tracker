/* global define, describe, it, expect, beforeEach, afterEach */

/** The following spec is a sample to show how jQuery plugins can be tested. */
define(['jquery', 'sample-plugin'], function($) {
	'use strict';

	describe('Sample plugin', function() {
		// This function will be used as a custom matcher
		var hasSampleText = function(wrapper) {
			// See if a paragraph with the sample text exists
			return wrapper.find('.js-sample').length > 0;
		};

		// Tell Jasmine about our custom matcher
		beforeEach(function() {
			this.addMatchers({
				toHaveSampleText: function() {
					return hasSampleText(this.actual);
				}
			});
		});

		// Run the sample plugin before each test
		beforeEach(function() {
			$('<div id="sample-plugin"/>').appendTo('body').samplePlugin();
		});

		// Undo the effects of the sample plugin after each test
		afterEach(function() {
			$('#sample-plugin').remove();
		});

		// Let's start testing!
		it('should add sample text', function() {
			expect($('#sample-plugin')).toHaveSampleText();
		});
	});
});
