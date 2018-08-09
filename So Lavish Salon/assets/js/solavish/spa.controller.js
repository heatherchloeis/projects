(function() {
	"use strict";

	angular.module('solavish')
	.controller('spaCtrl', function($scope) {
		var ctrl = this;

		this.services = [
			[
				{ 'service': "90 Minute Facial:", 'price': "$ 159" }
			], [
				{ 'service': "45 Minute Facial:", 'price': "$ 75" }
			], [
				{ 'service': "Single 45 Minute Treatment:", 'price': "$ 95" },
				{ 'service': "Series of 6 Treatments:", 'price': "$ 520" }
			], [
				{ 'service': "Single 45 Minute Treatment:", 'price': "$ 119" },
				{ 'service': "Series of 4 Treatments:", 'price': "$ 435" },
				{ 'service': "Series of 6 Treatments:", 'price': "$ 665" }
			]
		];

		$scope.spaServices = [
			{ 'heading': "'So Lavish' Full Works Facial", 'desc': "Our 'So Lavish' Full Works Facial is the ultimate pampering experience here at So Lavish Salon and Spa!", 'services': ctrl.services[0], 'details': "We start off with a gentle Facial Cleanse to reboot your skin and become super receptive to all of the amazing treatments to follow. We then use a combination of a Detoxifying Mask and extractions to clear up any residue dirt. Afterwards, we apply a pore-minimizing serum and a pore purifying/acne-reducing Salicyclic Acid Peel designed to combat future acne. We follow that up with a Honey Granule exfoliant and Jade roll massage which removes all that flaky skin to reveal the baby-soft skin beneath. On this baby-soft skin we apply a Aronia Berry Masque to brighten and improve the texture of your skin, followed by specialized LED Light Therapy and a second anti-imflammatory Spirulina Masque which utilizes the power of algae to add moisture to your skin. We then treat you to a relaxing facial massage and apply a Marine Collagen Masque. Last, but certainly not least, we seal in all those wonderful benefits with a ph-balancing Herbal Toner, an intenseive Revitalization Eye Cream, a firming Diamond Serum, skin-type specific Moisturizer and SPF, and a stimulating Lip Balm." },
			{ 'heading': "Quick Rejuvenation Facial", 'desc': "Our Quick Rejuvenation Facial is ideal for when you need a little r&r but don't have the time", 'services': ctrl.services[1], 'details': "Like our 'So Lavish' Full Works Facial, we begin with a gentle Facial Cleanse to restart your skin. We immediately follow that with an antioxidant rich Honey Granule exfoliant and a firming Fruit Peel to remove all that dry skin and reveal the baby-soft skin beneath. On this blank canvas, we apply a personalized Masque and specialized LED Light Therapy tailored to bring out your best skin. And to finish it off, we seal in all those wonderful benefits with a ph-balancing Herbal Toner, an intenseive Revitalization Eye Cream, a firming Diamond Serum, skin-type specific Moisturizer and SPF, and a stimulating Lip Balm." },
			{ 'heading': "Salicylic Acid Peel Treatment", 'desc': "Our Salicylic Acid Peel is excellent for those who want to reenergize their skin and covet clear, healthy, glowing complexions!", 'services': ctrl.services[2], 'details': "Like our other facial services, we begin with a gentle Facial Cleanse to restart your skin. We follow that with a combination of a Detoxifying Mask and extractions to clear up any residue dirt. Afterwards, we treat your skin to a super powerful and super purifying Salicylic Acid Peel along with an antioxidant rich Honey Granule exfoliant to buff away all toxins and clean out your pores. We wrap up this treatment with an anti-inflammatory Masque and a ph-balancing Herbal Toner, an intenseive Revitalization Eye Cream, a firming Diamond Serum, skin-type specific Moisturizer and SPF, and a stimulating Lip Balm." },
			{ 'heading': "Skin Polishing Diamond Microdermabrasion", 'desc': "Our Diamond Dermabrasion is the perfect solution for unwanted wrinkles, fine lines, and crow's feet. It also works on age spots, light acne scarring, and hyperpigmentation that occurs over time and with age. This treatment is also great for removing dry, flaky skin which makes skin look dull and lifeless.!", 'services': ctrl.services[3], 'details': "We start this treatment with a gentle Facial Cleanse to restart your skin. Then we use a powerful Diamond Microdermabrasion to clear away all the dirt, toxins, and dead skin to bring out your healthier, fresher, smoother skin. Afterwards, we apply a collagen rick Marine Masque to boost the fullness and firmness of your skin. We wrap up our Diamond Dermabrasion with a ph-balancing Herbal Toner, an intenseive Revitalization Eye Cream, a firming Diamond Serum, skin-type specific Moisturizer and SPF, and a stimulating Lip Balm." }
		];
	});
})();