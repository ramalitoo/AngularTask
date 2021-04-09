var app = angular.module("myApp", []);

app.controller('MainCtrl', ['$scope','$filter', function ($scope, $filter){

$scope.students = [];
  $scope.addRow = function () {
    $scope.students.push({'name': $scope.selectedStudents.name, 
        'surname': $scope.selectedStudents.surname});
    $scope.selectedStudents.name = '';
    $scope.selectedStudents.surname = '';
  }
  

}]);