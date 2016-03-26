(function(angular) {

	"use strict";

	// DOM manipulation -> compile -> controllers -> linking -> DOM manipulations

	angular.module("WidgetApp", [])
		.directive("demoDir", function() {

			return {

				// post-link
				link: function(scope, element, attrs) {

				}
			}

		})

		.controller("HomeCtrl", function($scope, $compile, $document) {
			$scope.message = "Widgets Application";

			// cannot do DOM manipulation

			console.log("controller ran");



			$scope.doIt = function() {
				console.log("I did it!");

				$scope.newMessage = "Hi Everyone!";
				var linkingFn = $compile("<span>{{newMessage}}</span>");
				var domElements = linkingFn($scope);

				//console.dir($document.find("#new-content"));
				$document.find("#new-content").append(domElements);
			};

		})
		.controller("ShowMeCtrl", function($scope) {
			console.log("show me controller executed");
			$scope.showMeMessage = "Hi Class!";
		});

})(angular);
