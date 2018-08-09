(function() {
	"use strict";

	angular.module('solavish')
	.controller('galleryCtrl', function($scope) {
		var ctrl = this;

		$scope.images = {};

		for (var i = 1; i < 42; i++) {
			$scope.images[i - 1] = { 'url': '../images/gallery/instagram' + i + '.jpg'};
		}

		$('#galleryModal').on('show.bs.modal', function(event) {
			var button = $(event.relatedTarget);
			var idx = button.data('index') + 1;
			console.log("current image is " + idx );
			$('#galleryImage').attr('src', '../images/gallery/instagram' + idx + '.jpg');
		});
	});
})();