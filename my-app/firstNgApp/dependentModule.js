var myTestApp = angular.module('myTestApp', []);
myTestApp.controller('MyController', function MyController($scope){
    $scope.author = {
        'name': 'Shaminoo',
        'title': 'Engineer',
        'company': 'Microsoft'
    }
});