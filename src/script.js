var module = angular.module('main', []);

module.controller('formCtrl', ['$scope', function($scope) {
  $scope.data = {};
  $scope.disabled = true;
  $scope.submit = function() {
    alert('Form Submitted\nEmail: ' + $scope.data.email + '\nPassword: ' + $scope.data.password)
  }
}]);
