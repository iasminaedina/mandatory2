(function(){
    "use strict";

    angular
        .module("Main.cart",[] )
        .controller("cartController", cartController);

    function cartController($http, $scope, $rootScope, cartService) {

        $scope.deleteProductFromCart = function(product){
            cartService.deleteProductFromCart(product);
        }

        $scope.addToQuantity = function(product){
            cartService.addToQuantity(product);
        }

        $scope.deleteFromQuantity = function(product){
            cartService.deleteFromQuantity(product);
        }


        $scope.order = function(cartProducts){
            var userInfo = {};
            var u = $scope.user;
            var order = [userInfo, $rootScope.cartProducts];
            userInfo["firstname"] = u.firstname;
            userInfo["lastname"] = u.lastname;
            userInfo["address"] = u.address;
            userInfo["zip"] = u.zip;
            userInfo["city"] = u.city;
            userInfo["phone"] = u.phone;
            userInfo["email"] = u.email;

            console.log(order);
            $http.post('/checkout', order).success(function() {
                window.location= '#/';

            });


        }



    }



}());