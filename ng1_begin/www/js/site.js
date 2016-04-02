(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.directive("capClick", function() {

			return {
				restrict: "A",
				scope: {
					clickHandler: "&capClick"
				},
				link: function($scope, $element) {

					function clickHandler() {
						$scope.$apply(function() {
							$scope.clickHandler();
						});
					}

					$element.on("click", clickHandler);

					$scope.$on("$destroy", function() {
						$element.off("click", clickHandler);
					});

				}
			}

		})
		.directive("myDir", function($rootScope) {

			// directive definition object
			return {
				template: "MyDir: {{insideMessage}}, {{$id}} " +
				"<input ng-model='insideMessage'> {{insideMessageUpperCase}}" +
				"<button ng-click='clickMe()'>Click Me!</button>",
				scope: {
					insideMessage: "=twoWay",
					insideMessageUpperCase: "@oneWay",
					clickMe: "&func"
				},
				link: function(scope, element, attrs, ctrl, transclude) {



					//console.log(Object.getPrototypeOf(scope) === Object.getPrototypeOf($rootScope));
				}
			};

		})
		.run(function($rootScope) {
			$rootScope.outsideMessage = "Hi Class!";

			$rootScope.doIt = function() {
				$rootScope.outsideMessage += "did it!";
				console.log("did it!");
			}
		});

})(angular);
