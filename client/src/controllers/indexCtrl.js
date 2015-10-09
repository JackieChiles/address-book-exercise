angular.module('addressBook').controller('indexCtrl', [
  '$scope',
  '$log',
  'apiService',
  function($scope, $log, apiService) {
    //Load all people data from the API
    apiService.getPeople()
        .then(function (response) {
            $scope.people = response.data.people;
        }, function (response) {
            $log.error('Error when retrieving people data: ', response);
        });

    //Functions
    $scope.select = function (person) {
        $scope.selectedPerson = person;
    }
  }
]);
