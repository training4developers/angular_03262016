(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.directive("whichComponent", function() {

			return {
				require: "ngModel",
				link: function(scope, element, attrs, ngModelCtrl) {

					ngModelCtrl.$parsers.push(function(value) {
						scope.componentUpdated = attrs.id;
						console.log(attrs.id);
						return value;
					});

				}
			};

		})
		.controller("Child1Ctrl", function($scope) {
			$scope.$watch(function() {
				//console.log("digest loop ran child ctrl1");
			});
		})
		.controller("Child2Ctrl", function($scope) {
			$scope.$watch(function() {
				//console.log("digest loop ran child ctrl2");
			});
		})
		.controller("Child3Ctrl", function($scope) {
			$scope.$watch(function() {
				//console.log("digest loop ran child ctrl3");
			});
			$scope.$watch("message", function(newValue, oldValue, scope) {
				//console.log("newValue: " + newValue);
				//console.log("oldValue: " + oldValue);
				document.getElementById("my-message").textContent = newValue;
			});
			$scope.$watch("componentUpdated", function(newValue) {
				document.getElementById("update-source").textContent = newValue;
				console.log("componentUpdated:" + newValue);
			});
		})
		.run(function($rootScope) {

			//$rootScope.$broadcast("some message", { someData: "test" });

			$rootScope.$watch(function() {
				//console.log("digest loop ran rootscope");
			});
		});

})(angular);
