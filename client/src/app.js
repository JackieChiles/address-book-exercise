var addressBook = angular.module('addressBook', ['ngRoute']);

addressBook.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'indexCtrl'
    });
  }
]);

addressBook.factory('apiService', ['$http', function ($http) {
    return {
        getPeople: function () {
            return $http.get('/api/people');
        }
    };
}]);