angular.module('addressBook').controller('indexCtrl', [
  '$scope',
  '$log',
  'apiService',
  function($scope, $log, apiService) {
    var descSort = {
        label: 'A-Z',
        icon: 'arrow_drop_down',
        orderBy: '+name'
    };

    var ascSort = {
        label: 'Z-A',
        icon: 'arrow_drop_up',
        orderBy: '-name'
    };

    var deselectAll = function () {
        $scope.people.forEach(function (p) {
            p.selected = false;
        });
    };

    //Data
    $scope.sort = descSort;
    $scope.allowMultiSelect = false;
    $scope.people = [];

    //Load all people data from the API
    apiService.getPeople()
        .then(function (response) {
            $scope.people = response.data.people;
        }, function (response) {
            $log.error('Error when retrieving people data: ', response);
        });

    //Functions
    $scope.toggle = function (person) {
        if (!$scope.allowMultiSelect) {
            deselectAll();
        }

        person.selected = !person.selected;
    };

    $scope.toggleSort = function () {
        $scope.sort = $scope.sort === descSort ? ascSort : descSort;
    };

    //Watch
    $scope.$watch('allowMultiSelect', function (newValue, oldValue) {
        if (!newValue) {
            deselectAll();
        }
    });
  }
]);
