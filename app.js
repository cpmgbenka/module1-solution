(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.lunchMenu = "";
    $scope.msg = "";

    $scope.checkTooMuch = function () {
      var numberOfFood = $scope.lunchMenu.split(',');

      if ($scope.lunchMenu == "") {
        $scope.msg = "Please enter data first";
      } else if (numberOfFood.length > 3) {
        $scope.msg = "Too much!";
      } else {
        $scope.msg = "Enjoy!";
      }
    };
  }

})();
