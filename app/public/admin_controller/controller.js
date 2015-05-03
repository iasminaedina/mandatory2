//Initialize app
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

//Get products from database
var refresh = function() {
  $http.get('/products').success(function(response) {
    console.log("I got the data I requested");
    $scope.shop = response;
    $scope.item = "";
  });
};

refresh();

//Add new product
$scope.addItem = function() {
  console.log($scope.item);
  $http.post('/products', $scope.item).success(function(response) {
    console.log(response);
    refresh();
  });
};

//Delete product
$scope.remove = function(id) {
  console.log(id);
  $http.delete('/products/' + id).success(function(response) {
    refresh();
  });
};

//Edit product
$scope.edit = function(id) {
  console.log(id);
  $http.get('/products/' + id).success(function(response) {
    $scope.item = response;
  });
};  

//Update edited product
$scope.update = function() {
  console.log($scope.item._id);
  $http.put('/products/' + $scope.item._id, $scope.item).success(function(response) {
    refresh();
  })
};

//Deselect edited product
$scope.deselect = function() {
  $scope.item = "";
}

}]);﻿