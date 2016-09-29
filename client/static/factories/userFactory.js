// Build out our User Factory

app.factory('UserFactory', ['$http', function($http) {
  return {
    register: function(user, callback) {
      $http({
        method: "POST",
        url: "/register",
        data: user
      }).then(function(user) {
        callback();
      });
    },

    login: function(user, callback) {
      $http({
        method: "POST",
        url: "/login",
        data: user
      }).then(function(user) {
        callback();
      });
    },
    getUser: function(callback){
      $http({
        method:"GET",
        url:'/getUser',
      }).then(function(res){
        callback(res.data)
      },function(){
        console.log('Could not get user');
      })
    }
  };
}]);
