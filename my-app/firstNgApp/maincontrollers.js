var myApp = angular.module('myApp', ['myTestApp']);
myApp.controller('MainController', function MainController($scope) {
    $scope.mainController = 'mainController';
});
