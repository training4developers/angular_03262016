(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		// better practice
		.directive("listOfItems", function() {

			return {
				restrict: "A",
				template: "<ul><li ng-repeat='item in items'>{{item}}</li></ul>",
				link: function(scope, element, attrs) {
					scope.items = scope[attrs.listOfItems];
				}
			};

		})
		// worser practice
		.directive("listOfItemsJquery", function() {

			return {
				restrict: "A",
				link: function(scope, element, attrs) {

					scope.$watchCollection(attrs.listOfItemsJquery, function(newList) {
						var ul = $("<ul>");
						newList.forEach(function(item) {
							ul.append("<li>" + item + "</li>");
						})
						element.empty().append(ul);
					});

				}
			};

		})
		.run(function($rootScope, $timeout) {
			$rootScope.colors = ["red","white","blue"];

			$timeout(function() {
				$rootScope.colors.push("green");
			},2000);
		})
		.directive("myDir", function($compile, $log) {

			// directive definition object
			return {
				restrict: "EA",
				template: "<div>{{message}}</div>",
				// post-link function
				link: function(scope, element, attrs) {
					var collectionPropName = attrs.listOfItems;
					scope[collectionPropName]
					scope.message = "Hi Class!";
				}
			};

		});

})(angular);
