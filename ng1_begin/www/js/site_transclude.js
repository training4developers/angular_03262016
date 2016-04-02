(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.directive("myDir", function($compile, $log) {

			// directive definition object
			return {
				restrict: "EA",
				transclude: true,
				template: "<div>{{message}}</div>",
				// post-link function
				link: function(scope, element, attrs, ctrl, transclude) {
					scope.message = "Hi Class!";

					transclude(function(clone) {
						element.append(clone);
					});
					transclude(function(clone) {
						element.append(clone);
					});
					transclude(function(clone) {
						element.append(clone);
					});
					transclude(function(clone) {
						element.append(clone);
					});
				}
			};

		});

})(angular);
