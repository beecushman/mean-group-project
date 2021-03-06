// This is our client side app
var app = angular.module('barberApp', ['ngRoute', 'ngMessages']);

// Set up our client side configs
app.config(function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push(
      function($q, $location) {
        return {
          'responseError': function(rejection) {
            if (rejection.status == 401) {
              $location.url('/login');
            }
            return $q.reject(rejection);
       }
       };
  });

      $routeProvider
        .when('/login', {
          // Angular route to present login fields
          templateUrl: 'partials/landingPage.html',
          controller:  'usersController'
        })
        .when('/search', {
          templateUrl: 'partials/searchBarbers.html',
          controller: 'barbersController'
        })
        .when('/home', {
          templateUrl:'partials/userProfile.html',
          controller:  'usersController'
        })
        .when('/userProfile', {
          templateUrl:'partials/userProfile.html',
          controller:  'usersController'
        })
        .when('/barber/:id', {
            templateUrl:'partials/barberProfile.html'
        })
        .when('/addBarber', {
          templateUrl:'partials/addBarber.html',
          controller:'barbersController'
        })
       .when('/addAppointment/:barber_id', {
          templateUrl:'partials/addAppointment.html',
          controller:'appointmentsController'
        })
       .when('/addAppointment', {
          templateUrl:'partials/addAppointment.html',
          controller:'appointmentsController'
        })
        .when('/test', {
           templateUrl:'partials/profile.html',
           controller:'usersController'
         })
       .otherwise({
          // Otherwise ???
          redirectTo: '/login'
        });
});
