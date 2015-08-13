var myVeryOwnApp = angular.module('myVeryOwnApp', []);

myVeryOwnApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.heading = "i'm an angular app... more or less!";

    $scope.getData = function () {
        //GET
        $http.get('/data').then(function(data) {
            $scope.messages = data.data;
            console.log(data.message);
            console.log(data);
        });
    };

    //passing in data parameter, same as in ajax call in success function.

    $scope.updateMessage = function(note){
        //POST
        $http.post('/data', note).then($scope.getData());
    };

    //console.log($scope.note);
}]);