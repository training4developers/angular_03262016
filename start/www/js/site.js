(function(angular) {

	"use strict";

	angular.module("WidgetApp", ["ngRoute"])
		.config(function($routeProvider, $locationProvider) {

			$locationProvider.html5Mode(true);

			$routeProvider
				.when("/", {
					controller: "HomeCtrl",
					templateUrl: "/tpls/widgets.tpl"
				})
				.otherwise({
					redirectTo: "/"
				});

		})
		.controller("HomeCtrl", function($scope) {
			$scope.widgets = [
				{ "id": 1, "name": "Small Red Widget",   "description": "A small, red widget.",   "color": "red",    "size": "small",  "quantity": 2 },
				{ "id": 2, "name": "Medium Blue Widget", "description": "A medium, blue widget.", "color": "blue",   "size": "medium", "quantity": 15 },
				{ "id": 3, "name": "Large Green Widget", "description": "A large, green widget.", "color": "green",  "size": "large",  "quantity": 30 },
				{ "id": 4, "name": "Tiny Orange Widget", "description": "A tiny, orange widget.", "color": "orange", "size": "tiny",   "quantity": 10 }
			];
		});

})(angular);
