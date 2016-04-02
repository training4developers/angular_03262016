(function(angular) {

	"use strict";

	// var linkingFn = $compile(template);
	// var domElements = linkingFn($rootScope)
	// $("main").append(domElements);

	// changes happen on the rootScope, $digest
	// loop through the $watch update
	// the live DOM elements

	angular.module("WidgetApp", [])
		.directive("myDir", function() {

			// post-link function
			return function(scope, element, attrs) {

				var pos = element.position();
				scope.left = pos.left;
				

				console.dir(element.position());
			};

		})
		.run(function($rootScope) {
			$rootScope.nums = [];
			for (var x=0; x<1000; x++) {
				$rootScope.nums.push(x);
			}
		})

})(angular);
