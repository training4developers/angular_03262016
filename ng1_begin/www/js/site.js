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
					templateUrl: "/tpls/widgets.tpl",
					resolve: {
						widgetsData: function(widgets) {
							return widgets.getAll().then(function(results) {
								return results.data;
							});
						}
					}
				})
				.state("create", {
					url: "/widgets/create",
					controller: "EditCtrl",
					templateUrl: "/tpls/edit-widget.tpl"
				})
				.state("view", {
					url: "/widgets/:widgetId",
					controller: "ViewCtrl",
					templateUrl: "/tpls/view-widget.tpl",
					resolve: {
						widgetData: function(widgets, $stateParams) {
							return widgets.get($stateParams.widgetId)
								.then(function(results) {
									return results.data;
								});
						}
					}
				})
				.state("edit", {
					url: "/widgets/:widgetId/edit",
					controller: "EditCtrl",
					templateUrl: "/tpls/edit-widget.tpl"
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
		.factory("widgets", function($http) {

			return {
				getAll: function(options) {
					return $http.get("/api/widgets");
				},
				get: function(widgetId) {
					return $http.get("/api/widgetss/" + encodeURIComponent(widgetId));
				},
				insert: function(widget) {
					widget.id = nextId++;
					widgets.push(widget);
				},
				update: function(widget) {
					var oldWidget = widgets.splice(getWidgetIndex(widget.id), 1);
					widgets.push(widget);
				},
				delete: function(widgetId) {
					widgets.splice(getWidgetIndex(widgetId), 1);
				},
				getColors: function() {
					return [
						{ code: "blue", label: "Blue", category: "Discount" },
						{ code: "green", label: "Green", category: "Premium" },
						{ code: "red", label: "Red", category: "Discount" },
						{ code: "orange", label: "Orange", category: "Premium" }
					];
				},
				getSizes: function() {
					return [
						{ code: "tiny", label: "Tiny" },
						{ code: "small", label: "Small" },
						{ code: "medium", label: "Medium" },
						{ code: "large", label: "Large" },
					]
				}
			}

		})
		// .factory("widgets", function() {
		//
		// 	var widgets = [
		// 		{ "id": 1, "name": "Small Red Widget",   "description": "A small, red widget.",   "color": "red",    "size": "small",  "quantity": 2 },
		// 		{ "id": 2, "name": "Medium Blue Widget", "description": "A medium, blue widget.", "color": "blue",   "size": "medium", "quantity": 15 },
		// 		{ "id": 3, "name": "Large Green Widget", "description": "A large, green widget.", "color": "green",  "size": "large",  "quantity": 30 },
		// 		{ "id": 4, "name": "Tiny Orange Widget", "description": "A tiny, orange widget.", "color": "orange", "size": "tiny",   "quantity": 10 }
		// 	];
		//
		// 	function getWidget(widgetId) {
		// 		return widgets.filter(function(widget) {
		// 	 		return widget.id === widgetId;
		// 	 	})[0]
		// 	}
		//
		// 	function getWidgetIndex(widgetId) {
		// 		return widgets.indexOf(getWidget(widgetId));
		// 	}
		//
		// 	var nextId = 10;
		//
		// 	return {
		// 		getAll: function(options) {
		// 			return widgets;
		// 		},
		// 		get: function(widgetId) {
		// 			return getWidget(widgetId);
		// 		},
		// 		insert: function(widget) {
		// 			widget.id = nextId++;
		// 			widgets.push(widget);
		// 		},
		// 		update: function(widget) {
		// 			var oldWidget = widgets.splice(getWidgetIndex(widget.id), 1);
		// 			widgets.push(widget);
		// 		},
		// 		delete: function(widgetId) {
		// 			widgets.splice(getWidgetIndex(widgetId), 1);
		// 		},
		// 		getColors: function() {
		// 			return [
		// 				{ code: "blue", label: "Blue", category: "Discount" },
		// 				{ code: "green", label: "Green", category: "Premium" },
		// 				{ code: "red", label: "Red", category: "Discount" },
		// 				{ code: "orange", label: "Orange", category: "Premium" }
		// 			];
		// 		},
		// 		getSizes: function() {
		// 			return [
		// 				{ code: "tiny", label: "Tiny" },
		// 				{ code: "small", label: "Small" },
		// 				{ code: "medium", label: "Medium" },
		// 				{ code: "large", label: "Large" },
		// 			]
		// 		}
		// 	}
		//
		// })
		.controller("DemoCtrl", function($scope) {
			$scope.message = "Widgets Application";
		})
		.controller("HomeCtrl", function($scope, widgetsData, $state) {

			// synchronous coding
			//$scope.widgets = widgets.getAll();

			// asynchronous
			// widgets.getAll().then(function(results) {
			// 	$scope.widgets = results.data;
			// }).catch(function(results) {
			// 	console.log("something went wrong...");
			// });

			$scope.widgets = widgetsData;

			$scope.createWidget = function() {
				$state.go("create");
			};

			$scope.$on("$stateChangeError", function() {
				console.dir(arguments);
				alert("Unable to load widget");
			});

		})
		.controller("ViewCtrl", function($scope, widgetData, $state, $rootScope) {

			$scope.widget = widgetData;

			$scope.returnToList = function() {
				//$location.path("/");
				$state.go("home");
			};

		})
		.controller("EditCtrl", function($scope, widgets, $stateParams, $state) {

			if ($stateParams.widgetId) {
				var originalWidget = widgets.get(parseInt($stateParams.widgetId, 10));
				// shallow copy (mixin pattern, Object.assign)
				//$scope.widget = angular.extend({},originalWidget);
				// deep copy
				$scope.widget = angular.copy(originalWidget);

				// console.dir($scope.widget);
				// console.dir(originalWidget);
				// console.log($scope.widget === originalWidget);
			} else {
				$scope.widget = {};
			}

			$scope.widgetColors = widgets.getColors();
			$scope.widgetSizes = widgets.getSizes();

			$scope.saveWidget = function() {
				if ($scope.widget.id) {
					widgets.update($scope.widget);
				} else {
					widgets.insert($scope.widget);
				}
				$state.go("home");
			};

			$scope.deleteWidget = function() {
				if (confirm("Are you really really really sure you want to delete this widget?")) {
					widgets.delete($scope.widget.id);
					$state.go("home");
				}
			};

			$scope.returnToList = function() {
				//$location.path("/");
				$state.go("home");
			}

		});

})(angular);
