(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
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
				console.log("did it!");
			}
		});

})(angular);
