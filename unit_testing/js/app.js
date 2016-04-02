(function() {

	angular.module("App", [])
		.controller("HomeCtrl", function($scope, appData) {

			$scope.person = {
				firstName: "Bob",
				lastName: "Smith"
			};

			$scope.update = function() {
				appData.update($scope.person);
			};

		})
		.directive("requiredInput", function() {

			return {
				require: "ngModel",
				link: function(scope, element, attrs, ctrl) {

					function setValidity(value) {
						ctrl.$setValidity("required-input", value != null && String(value).length > 0);
						return value;
					}

					ctrl.$formatters.unshift(setValidity);
					ctrl.$parsers.unshift(setValidity);
				}
			};

		})
		.filter("upperCase", function() {

			return function(value) {
				return value.toUpperCase();
			};

		})
		.factory("appData", function($http) {

			return {
				getAll: function() {
					return $http.get("/js/app/data.js").then(function(result) {
						return result;
					});
				},
				update: function(data) {
					return $http.post("/js/app/data.js", data);
				}
			};
		});

}(jQuery, angular));
