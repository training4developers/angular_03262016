(function(angular) {

	"use strict";

	// function Widget(name) {
	// 	this.name = name;
	// }
	//
	// var w = new Widget("Widget 1");

	function Widgets() {
		console.log("widgets constructor");
		this.doIt = function() {
			console.log("did it!");
		};
	}

	angular.module("WidgetApp", [])
		.service("widgets", Widgets)
		.factory("widgets2", function() {
			return new Widgets2();
		})
		.provider("widgets3", function() {

			var widgets = ["widget 1", "widget 2"];
			var apiUrl;

			return {
				setUrl: function(url) {
					apiUrl = url;
				},
				// factory
				$get: function() {

					return {
						getAll: function() {
							console.log(apiUrl);
							//return widgets;
						}
					};

				}
			}

		})
		.config(function(widgets3Provider) {

			widgets3Provider.setUrl("http://www.someurl.com");

		})
		.controller("HomeCtrl", function($scope, widgets3) {

			console.log("controller ran");

			widgets3.getAll();
		});

})(angular);
