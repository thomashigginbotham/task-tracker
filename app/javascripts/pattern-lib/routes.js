define(['pattern-app', 'angular-route'], function(app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/style/intro', {
			templateUrl: 'partials/pattern-lib/style/intro.html',
			controller: 'StyleIntroCtrl'
		});

		$routeProvider.when('/style/typography', {
			templateUrl: 'partials/pattern-lib/style/typography.html',
			controller: 'StyleTypographyCtrl'
		});

		$routeProvider.when('/style/color', {
			templateUrl: 'partials/pattern-lib/style/color.html',
			controller: 'StyleColorCtrl'
		});

		$routeProvider.when('/style/forms', {
			templateUrl: 'partials/pattern-lib/style/forms.html',
			controller: 'StyleFormsCtrl'
		});

		$routeProvider.when('/style/tables', {
			templateUrl: 'partials/pattern-lib/style/tables.html',
			controller: 'StyleTablesCtrl'
		});

		$routeProvider.when('/components/:componentName', {
			templateUrl: function(params) {
				return 'partials/pattern-lib/components/' + params.componentName + '.html';
			},
			controller: 'ComponentsCtrl'
		});

		$routeProvider.when('/pages/:pageName', {
			templateUrl: 'partials/pattern-lib/pages/iframe-loader.html',
			controller: 'PagesCtrl'
		});

		$routeProvider.otherwise({
			redirectTo: '/style/intro'
		});
	}]);
});
