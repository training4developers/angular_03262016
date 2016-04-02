(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.controller("firstDirCtrl", function($scope, $element, $attrs) {

			this.doIt = function() {
				console.log("did it!");
			};

		})
		.directive("firstDir", function() {

			return {
				controller: "firstDirCtrl"
			};

		})
		.directive("secondDir", function() {

			return {
				require: "firstDir", // required, same element only
				//require: "?firstDir", // optional, same element
				//require: "^firstDir", // same element or parent element
				//require: "^^firstDir", // parent element only
				link: function(scope, element, attrs, ctrl) {
					if (ctrl) {
						ctrl.doIt();
					}
				}
			}

		});

})(angular);
