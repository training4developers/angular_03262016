(function(angular) {

	"use strict";

	// function transclude(cloneFn) {
	//
	// 	var childScope = $scope.$new();
	// 	var linkingFn = $compile(contentTemplate);
	// 	var domElements = linkingFn(childScope);
	// 	cloneFn(domElements, childScope);
	//
	// }


	angular.module("WidgetApp", [])
		.directive("capIf", function() {

			return {
				restrict: "A",
				transclude: true,
				link: function(scope, element, attrs, ctrl, transclude) {

					var childScope;

					scope.$watch(attrs.capIf, function(newValue) {
						if (newValue) {
							transclude(function(clone, newScope) {
								childScope = newScope;
								element.append(clone);
							});
						} else {
							childScope && childScope.$destroy();
							element.empty();
						}
					});

				}
			}

		})


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
