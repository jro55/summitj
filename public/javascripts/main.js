angular.module('StarterApp', ['ngRoute', 'ngMaterial', 'ngMdIcons']);

angular.module('StarterApp')
    .config(['$routeProvider', function($routeProvider){
		// No need to define #, it is assumed
		$routeProvider
			.when('/', {
				templateUrl : '/html/home.html',
				controller : 'AppCtrl'
			})
//			.when('/signup', {
//				templateUrl : '/html/register.html',
//				controller : 'mainController'
//			})
//            .when('/upcomingshows', {
//                templateUrl : '/html/upcomingShows.html',
//                controller : 'mainController'
//            })
//            .when('/userpage', {
//                templateUrl : '/html/userPage.html',
//                controller : 'mainConetroller'
//            })
			
//			.otherwise({
//				redirectTo : '/'
//			})

	}])


angular.module('StarterApp')
    .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('purple', {
      'default': '200' // use shade 200 for default, and keep all other shades the same
    });
//    $mdThemingProvider.theme('default').dark()
});

angular.module('StarterApp')
    .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
    
    $scope.openSideBar = false;
    $scope.openLeft = false;
    
    $scope.toggleLeft = function() {
        $scope.openLeft = !$scope.openLeft;
    }
    
    $scope.menu = [
        {
            title: 'Home',
            icon: 'home',
        },
        {
            title: 'About',
            icon: 'terrain',
        },
        {
            title: 'Contact',
            icon: 'email'
        }
    ]
    
    $scope.admin = [
        {
            title: "Job openings",
            icon: 'face'
        },
        {
            title: "Interview help",
            icon: 'help'
        },
        {
            title: 'Further your learning',
            icon: 'class'
        }
    ]
    
    $scope.employers = [
        {
            title: "Post an opening",
            icon: "accounement"
        },
        {
            title: "Find recent grads",
            icon: "pageview"
        }
    ]
 
}]);

















