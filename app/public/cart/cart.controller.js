(function(){
    "use strict";

    angular
        .module("Main.cart",[] )
        .controller("cartController", cartController);

    function cartController($http, $scope, $rootScope, cartService) {

        //Delete Product in cart
        $scope.deleteProductFromCart = function(product){
            cartService.deleteProductFromCart(product);
        }

        //Add quantity of product in cart
        $scope.addToQuantity = function(product){
            cartService.addToQuantity(product);
        }

        //Substract quantity of product in cart
        $scope.deleteFromQuantity = function(product){
            cartService.deleteFromQuantity(product);
        }

        //get personal details of user
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

            //Console log the order and save to database
            console.log(order);
            $http.post('/checkout', order).success(function() {
                window.location= '#/';

            });


        }



    }



}());