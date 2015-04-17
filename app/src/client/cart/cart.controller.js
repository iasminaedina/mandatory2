(function(){
    "use strict";

    angular
        .module("Main.cart",[] )
        .controller("cartController", cartController);

    function cartController($scope, cartService) {

        $scope.removeItem = function(product){
        cartService.removeItem(product);
        }

        $scope.increaseQuantity = function(product){
        cartService.increaseQuantity(product);
        }

        $scope.decreaseQuantity = function(product){
            cartService.decreaseQuantity(product);
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



}());