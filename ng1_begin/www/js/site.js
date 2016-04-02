(function(angular) {

	"use strict";

	angular.module("WidgetApp", ["ngSanitize"])
		.factory("shipment", function() {



			return {
				shippers: [
					{ id: 1, name: "Acme" },
					{ id: 2, name: "First Transport" }
				]
			}

		})
		.factory("events", function() {

			var events = {};

			return {
				trigger: function(eventName, eventArgs) {
					if (!events[eventName]) {
						return;
					}
					events[eventName].forEach(function(eventHanlder) {
						eventHanlder(eventArgs);
					});
				},
				on: function(eventName, eventHandler) {
					if (!events[eventName]) {
						events[eventName] = [];
					}
					events[eventName].push(eventHandler);
				}
			}

		})
		.directive("verifyShipper", function(shipment, events) {

			return {
				require: "ngModel",
				link: function(scope, element, attrs, ngModelCtrl) {

					ngModelCtrl.$parsers.push(function(value) {

						var shipper = shipment.shippers.filter(function(shipper) {
							return shipper.id === parseInt(value, 10);
						})[0];

						if (shipper) {
							events.trigger("authorized-shipper", {
								shipperName: shipper.name
							});
						} else {
							events.trigger("unauthorized-shipper", {});
						}

					});

				}
			};

		})
		.directive("authorizedShipper", function(events) {

			return {
				require: "ngModel",
				link: function(scope, element, attrs, ngModelCtrl) {

					events.on("authorized-shipper", function(eventArgs) {
						console.log(eventArgs.shipperName);
						//ngModelCtrl.$setViewValue(eventArgs.shipperName);
						//scope.$applyAsync(function() {
						//	ngModelCtrl.$setViewValue(eventArgs.shipperName);
						//});
						element.val(eventArgs.shipperName);
						ngModelCtrl.$setValidity("authorized-shipper", true);
					});

					events.on("unauthorized-shipper", function(eventArgs) {
						element.val("");
						scope[attrs.ngModel] = "";
						ngModelCtrl.$setValidity("authorized-shipper", false);
					});


				}
			};
		})
		.controller("shipmentCtrl", function($scope, $rootScope) {

			$rootScope.message = "<h1>Hi!</h1>";

			$scope.shipment = {
				shipper: {},
				receiver: {}
			}

		})
		.controller("shipperCtrl", function() {

		})
		.controller("receiverCtrl", function() {

		})

})(angular);
