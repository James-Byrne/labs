var contactManager = angular.module('contactManager', [])

.config(function($routeProvider) {
  $routeProvider.when('/index', {
      templateUrl: 'partials/index.html'
    })
    .when('/info/:id', {
      templateUrl: 'partials/info.html',
      controller: 'InfoCtrl'
    })
    .when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'AddCtrl'
    })
    .when('/remove/:id', {
      templateUrl: 'partials/remove.html',
      controller: 'RemoveCtrl'
    })
    .otherwise({
      templateUrl: 'partials/index.html'
    });
})

.run(function($rootScope, $location) {

  var history = [];

  $rootScope.$on('$routeChangeSuccess', function() {
    history.push($location.$$path);
  });

  $rootScope.back = function() {
    var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
    $location.path(prevUrl);
  };

});
