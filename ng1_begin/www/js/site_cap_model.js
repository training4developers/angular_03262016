(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.directive("capModel", function() {

			return {
				scope: {
					editItem: "=capModel"
				},
				link: function(scope,element,attrs) {

					element.val(scope.editItem);

					function keyup(e) {
						scope.$apply(function() {
							scope.editItem = e.target.value;
						});
					}

					element.on("keyup", keyup);

					// prevent a memory leak
					scope.$on("$destroy", function() {
						element.off("keyup", keyup);
					});

				}
			}

		})
		.directive("myDir", function($rootScope) {

			// directive definition object
			return {
				template: "MyDir: {{insideMessage}}, {{$id}} <input ng-model='insideMessage'>",
				scope: {
					insideMessage: "=twoWay"
				},
				link: function(scope, element, attrs, ctrl, transclude) {



					//console.log(Object.getPrototypeOf(scope) === Object.getPrototypeOf($rootScope));
				}
			};

		})
		.run(function($rootScope) {
			$rootScope.outsideMessage = "Hi Class!";
		});

})(angular);
