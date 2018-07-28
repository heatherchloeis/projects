(function() {
	"use strict";

	angular.module('indigenyreserve', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.otherwise({
			templateUrl: "assets/src/home.html"
		});

		$locationProvider.html5Mode(true);
	})
	.controller('indexCtrl', function() {
		$(window).on('load', function() {
			$('#ageRestriction').modal('show');
		});

		$(window).on('load', function() {
			$('#ageRestrictionSubmit').on('click', function(event) {
				if($('input[type=checkbox').prop('checked')) {
					$('#ageRestrictionSubmit').attr('data-dismiss', 'modal');
				}
			});
		});

		$("a").on('click', function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				//event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 1000, function(){
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});
})();