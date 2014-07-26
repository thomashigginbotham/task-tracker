define(['app', 'angular-route'], function(app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/style/intro', {
			templateUrl: 'partials/style/intro.html',
			controller: 'StyleIntroCtrl'
		});

		$routeProvider.when('/style/typography', {
			templateUrl: 'partials/style/typography.html',
			controller: 'StyleTypographyCtrl'
		});

		$routeProvider.when('/style/color', {
			templateUrl: 'partials/style/color.html',
			controller: 'StyleColorCtrl'
		});

		$routeProvider.when('/style/forms', {
			templateUrl: 'partials/style/forms.html',
			controller: 'StyleFormsCtrl'
		});

		$routeProvider.when('/style/tables', {
			templateUrl: 'partials/style/tables.html',
			controller: 'StyleTablesCtrl'
		});

		$routeProvider.when('/components/page-sections', {
			templateUrl: 'partials/components/page-sections.html',
			controller: 'ComponentsPageSectionsCtrl'
		});

		$routeProvider.when('/pages/home', {
			templateUrl: 'partials/pages/home.html',
			controller: 'PagesHomeCtrl'
		});

		$routeProvider.otherwise({
			redirectTo: '/style/intro'
		});
	}]);
});
