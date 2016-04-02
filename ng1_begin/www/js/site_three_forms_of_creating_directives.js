(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.directive("myDir", function($compile) {

			// directive definition object
			return {
				restrict: "A",
				// compile function - manipulate the template
				compile: function(tElement, tAttrs) {

					tElement.append("<div>{{message}}</div>");

					// post-link function - manipulate the DOM element after they are linked
					return function(scope, element, attrs) {

						scope.message = "Hi Class!";

						var linkingFn = $compile("<div>{{message}}</div>");
						var domElements = linkingFn(scope);
						element.append(domElements);

					}
				}
			};
		});
		// return directive definition object
		// .directive("myDir", function() {
		//
		// 	// directive definition object
		// 	return {
		// 		restrict: "A",
		// 		// post-link function
		// 		link: function(scope, element, attrs) {
		// 			element.html("Hello!");
		// 		}
		// 	};
		//
		// });
		// return a post-link function only
		// .directive("myDir", function() {
		//
		// 	// post-link function
		// 	return function(scope, element, attrs) {
		// 		element.html("Hello!");
		// 	};
		//
		// });

})(angular);
