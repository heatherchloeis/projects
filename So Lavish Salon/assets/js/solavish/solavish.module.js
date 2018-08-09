(function() {
  "use strict";

  angular.module('solavish', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
  	$routeProvider.when("/salon", {
  	  templateUrl: "assets/src/salon.html",
  	});

  	$routeProvider.when("/formal", {
  	  templateUrl: "assets/src/formal.html"
  	});

  	$routeProvider.when("/spa", {
  	  templateUrl: "assets/src/spa.html"
  	});

    $routeProvider.when("/waxing", {
      templateUrl: "assets/src/waxing.html"
    });    

  	$routeProvider.when("/gallery", {
  	  templateUrl: "assets/src/gallery.html"
  	});

    $routeProvider.when("/contact", {
      templateUrl: "assets/src/contact.html"
    });

  	$routeProvider.otherwise({
  	  templateUrl: "assets/src/home.html"
  	});

  	$locationProvider.html5Mode(true);
  });
})();