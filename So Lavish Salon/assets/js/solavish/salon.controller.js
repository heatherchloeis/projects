(function() {
	"use strict";

	angular.module('solavish')
	.controller('salonCtrl', function($scope) {
		var ctrl = this;

		this.services = [
			[
				{ 'service': "Haircut", 'price': "$ 45 - 65" },
				{ 'service': "Men's Haircut", 'price': "$ 25 - 35" },
				{ 'service': "Children's Haircut", 'price': "$ 15 - 25" },
				{ 'service': "Haircut add-on", 'price': "$ 35 - 45" },
				{ 'service': "Fringe", 'price': "$ 12" }
			], [
				{ 'service': "All Over Color", 'price': "$ 90" },
				{ 'service': "Color Melting", 'price': "$ 150+" },
				{ 'service': "Ombre", 'price': "$ 150+" },
				{ 'service': "Color Touch Up", 'price': "$ 70 - 80" },
				{ 'service': "Color Correction", 'price': "$ 100+" },
				{ 'service': "Highlights", 'price': "$ 120+" },
				{ 'service': "Partial Highlights", 'price': "$ 75+" },
				{ 'service': "Lowlights", 'price': "$ 120+" },
				{ 'service': "Partial Lowlights", 'price': "$ 75+" },
				{ 'service': "Highlights and Lowlights", 'price': "$ 130+" },
				{ 'service': "Partial Highlights and Lowlights", 'price': "$ 100+" },
			], [
				{ 'service': "Platinum", 'price': "$ 45" },
				{ 'service': "Structure Fortifying", 'price': "$ 45" },
				{ 'service': "Masque and Rescue", 'price': "$ 35" },
				{ 'service': "Platinum add-on", 'price': "$ 25" },
				{ 'service': "Structure Fortifying add-on", 'price': "$ 25" },
				{ 'service': "Masque and Rescue add-on", 'price': "$ 15" }
			], [
				{ 'service': "Shampoo and Blowdry", 'price': "$ 35" },
				{ 'service': "Shampoo Set", 'price': "$ 30" },
				{ 'service': "Curls", 'price': "$ 50" },
				{ 'service': "Flat Iron", 'price': "$ 65" },
				{ 'service': "Curls add-on", 'price': "$ 25" },
				{ 'service': "Flat Iron add-on", 'price': "$ 20" },
			], [
				{ 'service': "Perm", 'price': "$ 85+" },
				{ 'service': "Keratin Straightening", 'price': "$ 250+" }
			]
		];

		$scope.salonServices = [
			{ 'heading': "Signature Cutting", 'desc': "Each and every one of our cuts ends with a scalp massage and our signature finish", 'services': ctrl.services[0] },
			{ 'heading': "Signature Coloring", 'desc': "Enjoy one of the industries top color lines infused with botanical ingredients such as Acai, Argon oil, Black pearl powder and Aloe Vera", 'services': ctrl.services[1] },
			{ 'heading': "Conditioning Treatments", 'desc': "Bring your hair back to life with one of our luxurious conditioning treatments", 'services': ctrl.services[2] },
			{ 'heading': "Signature Styling", 'desc': "", 'services': ctrl.services[3] },
			{ 'heading': "Perms and Straightening", 'desc': "", 'services': ctrl.services[4] }
		];
	});
})();