(function() {
	"use strict";

	angular.module('solavish')
	.controller('formalCtrl', function($scope) {
		var ctrl = this;

		this.services = [
			[
				{ 'service': "Upstyle", 'price': "$ 85 - 100" },
				{ 'service': "Trial Bridal Styling", 'price': "$ 100 - 160" },
				{ 'service': "Bridal Styling", 'price': "$ 100 - 160" },
				{ 'service': "Flower Girl", 'price': "$ 45" },
				{ 'service': "Take Down", 'price': "$ 10+" },
				{ 'service': "Extension add-on", 'price': "$ 20+" },
				{ 'service': "Accessories add-on", 'price': "$ 10+" }
			], [
				{ 'service': "Makeup", 'price': "$ 85 - 130" },
				{ 'service': "Lashes add-on", 'price': "$ 10" },
				{ 'service': "Trial Bridal Makeup", 'price': "$ 120 - 200" },
				{ 'service': "Bridal Makeup", 'price': "$ 120 - 200" }
			], [
				{ 'service': "Stylist or Makeup Artist Travel", 'price': "$ 100" },
				{ 'service': "Additional stylist(s) or Makeup Artist(s)", 'price': "$ 50" },
				{ 'service': "Standby", 'price': "$ 15" },
				{ 'service': "Standby Beyond Contract", 'price': "$ 25" }
			]
		];

		$scope.formalServices = [
			{ 'heading': "Formal and Event Styling", 'desc': "", 'services': ctrl.services[0] },
			{ 'heading': "Formal Makeup", 'desc': "", 'services': ctrl.services[1] },
			{ 'heading': "Travel Expenses", 'desc': "Travel expenses include the first 20 miles. Travel beyond the first 20 miles will cost an additional $1.50 per mile. Please note that these expenses cover roundtrip travel, not one way. Services that require stylist(s) and/or artist(s) to stay overnight must include hotel accomodation. Standby expenses are charged by the hour and by the stylist or artist. Please note that these expenses will not incur if standby time is not required.", 'services': ctrl.services[2] }
		];
	});
})();