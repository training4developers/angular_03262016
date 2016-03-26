(function(angular) {

	"use strict";

	// allow you to inject services
	// controller functions
	// filter functions
	// directive functions
	// factory functions
	// service functions
	// provider -> $get function
	// $provide->decorator function
	// resolve functions

	// allow you to inject providers
	// config functions
	// provide functions

	function homeCtrl($log, $scope) {
		$scope.widgets = [
			{ "id": 1, "name": "Small Red Widget",   "description": "A small, red widget.",   "color": "red",    "size": "small",  "quantity": 2 },
			{ "id": 2, "name": "Medium Blue Widget", "description": "A medium, blue widget.", "color": "blue",   "size": "medium", "quantity": 15 },
			{ "id": 3, "name": "Large Green Widget", "description": "A large, green widget.", "color": "green",  "size": "large",  "quantity": 30 },
			{ "id": 4, "name": "Tiny Orange Widget", "description": "A tiny, orange widget.", "color": "orange", "size": "tiny",   "quantity": 10 }
		];
	}

	homeCtrl.$inject = ["$log","$scope"];

	console.log(homeCtrl.toString());

	angular.module("WidgetApp", [])
		//.controller("HomeCtrl", ["$log","$scope",homeCtrl]);
		.controller("HomeCtrl", homeCtrl);

})(angular);
