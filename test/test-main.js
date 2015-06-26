/* jslint browser:true */
'use strict';

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
	return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
	if (TEST_REGEXP.test(file)) {
		// Normalize paths to RequireJS module names.
		allTestFiles.push(pathToModule(file));
	}
});

// IMPORTANT! Make sure to update require.config with your module paths
require.config({
	// Karma serves files under /base, which is the basePath from your config file
	baseUrl: '/base',

	// Include module paths relative to the baseUrl
	paths: {
		jquery: 'app/bower_components/jquery/dist/jquery',
		'sample-plugin': 'app/javascripts/lib/jquery-plugins/jquery.sampleplugin'
	},

	// Dynamically load all test files
	deps: allTestFiles,

	// We have to kickoff jasmine, as it is asynchronous
	callback: window.__karma__.start
});
