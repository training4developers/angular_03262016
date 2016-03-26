(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.directive("t4dRequired", function($q) {

			return {

				require: "ngModel",
				link: function(scope,element,attrs,ctrl) {

					ctrl.$validators.required = function(modelValue, viewValue) {

						console.log("model value: " + modelValue);
						console.log("view value: " + viewValue);

						return true;
					}

					ctrl.$asyncValidators.requiredAsync = function(modelValue, viewValue) {

						return $q(function(resolve, reject) {

							setTimeout(function() {
								console.log("async model value: " + modelValue);
								console.log("async view value: " + viewValue);
								resolve();
							}, 1000);

						});


						return true;
					}

				}

			}

		})
		.controller("HomeCtrl", function($scope) {
			$scope.message = "Widgets Application";
		});

})(angular);
