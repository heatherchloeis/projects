(function() {
	"use strict";

	angular.module('solavish')
	.controller('waxingCtrl', function($scope) {
		var ctrl = this;

		this.services = [
			[
				{ 'service': "Brows", 'price': "$ 20" },
				{ 'service': "Lips", 'price': "$ 13" },
				{ 'service': "Brows and Lips", 'price': "$ 30" },
				{ 'service': "Hairline", 'price': "$ 22" },
				{ 'service': "Sideburns", 'price': "$ 14" },
				{ 'service': "Nose", 'price': "$ 13" },
				{ 'service': "Cheeks", 'price': "$ 20" },
				{ 'service': "Chin", 'price': "$ 14" },
				{ 'service': "Ears", 'price': "$ 15" },
				{ 'service': "Full Facial Waxing", 'price': "$ 55" }
			], [
				{ 'service': "Bikini Line", 'price': "$ 30+" },
				{ 'service': "Brazilian", 'price': "$ 60" },
				{ 'service': "Under Arm", 'price': "$ 21" },
				{ 'service': "Half Arm", 'price': "$ 30" },
				{ 'service': "Full Arm", 'price': "$ 55" },
				{ 'service': "Half Leg", 'price': "$ 40" },
				{ 'service': "Full Leg", 'price': "$ 74" },
				{ 'service': "Upper Back", 'price': "$ 40+" },
				{ 'service': "Lower Back", 'price': "$ 30+" },
				{ 'service': "Full Back", 'price': "$ 65+" },
				{ 'service': "Cheeks", 'price': "$ 30" },
				{ 'service': "Chest", 'price': "$ 50+" },
				{ 'service': "Stomach", 'price': "$ 34+" }
			], [
				{ 'service': "12 Brow Sessions", 'price': "$ 100" },
				{ 'service': "24 Brow Sessions", 'price': "$ 50" },
				{ 'service': "3 Brazilian Sessions", 'price': "$ 162" },
				{ 'service': "6 Brazilian Sessions", 'price': "$ 300" },
				{ 'service': "12 Brazilian Sessions", 'price': "$ 600" }
			]
		];

		$scope.waxingServices = [
			{ 'heading': "Facial Waxing", 'desc': "", 'services': ctrl.services[0] },
			{ 'heading': "Body and Speciality Waxing", 'desc': "", 'services': ctrl.services[1] },
			{ 'heading': "Full Body Waxing", 'desc': "Pricing varies and is dependent on length and thickness of hair, as well as the amount of product used", 'services': "" },
			{ 'heading': "Brazilian Waxing", 'desc': "", 'services': ctrl.services[2] }
		];
	});
})();