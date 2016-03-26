(function(angular) {

	"use strict";

	angular.module("WidgetApp", ["ui.router"])
		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

			$urlRouterProvider.otherwise("/");
			//$locationProvider.html5Mode(true);

			$stateProvider
				.state("home", {
					url: "/",
					controller: "HomeCtrl",
					templateUrl: "/tpls/widgets.tpl"
				})
				.state("view", {
					url: "/widgets/:widgetId",
					controller: "ViewCtrl",
					templateUrl: "/tpls/view-widget.tpl"
				});

		})
		//.config(function($routeProvider, $locationProvider) {
		//
		// 	//$locationProvider.html5Mode(true);
		//
		// 	$routeProvider
		// 		.when("/", {
		// 			controller: "HomeCtrl",
		// 			templateUrl: "/tpls/widgets.tpl"
		// 		})
		// 		.when("/widgets/:widgetId", {
		// 			controller: "ViewCtrl",
		// 			templateUrl: "/tpls/view-widget.tpl"
		// 		})
		// 		.otherwise({
		// 			redirectTo: "/"
		// 		});
		//
		// })
		.factory("widgets", function() {

			var widgets = [
				{ "id": 1, "name": "Small Red Widget",   "description": "A small, red widget.",   "color": "red",    "size": "small",  "quantity": 2 },
				{ "id": 2, "name": "Medium Blue Widget", "description": "A medium, blue widget.", "color": "blue",   "size": "medium", "quantity": 15 },
				{ "id": 3, "name": "Large Green Widget", "description": "A large, green widget.", "color": "green",  "size": "large",  "quantity": 30 },
				{ "id": 4, "name": "Tiny Orange Widget", "description": "A tiny, orange widget.", "color": "orange", "size": "tiny",   "quantity": 10 }
			];

			return {
				getAll: function(options) {
					return widgets;
				},
				get: function(widgetId) {
					return widgets.filter(function(widget) {
						return widget.id === widgetId;
					})[0];
				}
			}

		})
		.controller("HomeCtrl", function($scope, widgets) {
			$scope.widgets = widgets.getAll();
		})
		.controller("ViewCtrl", function($scope, widgets, $stateParams, $state) {

			$scope.widget = widgets.get(parseInt($stateParams.widgetId, 10));

			$scope.returnToList = function() {
				//$location.path("/");
				$state.go("home");
			}

		});

})(angular);
