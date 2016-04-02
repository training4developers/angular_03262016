(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.directive("capRequired", function($q) {

			return {

				require: "ngModel",
				link: function(scope,element,attrs,ctrl) {

					// function validator(value) {
					//
					// 	if (value == null || String(value) === "") {
					// 		ctrl.$setValidity("cap-required", false);
					// 		return;
					// 	} else {
					// 		ctrl.$setValidity("cap-required", true);
					// 		return value;
					// 	}
					//
					// }
					//
					// ctrl.$parsers.push(validator);
					// ctrl.$formatters.push(validator);

					// ctrl.$validators.capRequired = function(modelValue, viewValue) {
					// 	if (viewValue == null || String(viewValue) === "") {
					// 		return false;
					// 	} else {
					// 		return true;
					// 	}
					// };

					ctrl.$asyncValidators.capRequiredAsync = function(modelValue, viewValue) {

						return $q(function(resolve, reject) {

							setTimeout(function() {
								if (viewValue == null || String(viewValue) === "") {
									reject();
								} else {
									resolve();
								}
							}, 3000);

						});

						return true;
					};

				}

			}

		})
		.controller("HomeCtrl", function($scope) {
			$scope.message = "Widgets Application";
		});

})(angular);
