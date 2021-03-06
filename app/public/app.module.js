(function() {
    'use strict';
    
    angular
        .module('Main', [
        	'ngRoute',
            'Main.products',
            'Main.product',
            'Main.cart'
            ]
        )

        /*************************************************************************************************************************/
        //Set rootScope for cart at run

        .run(function($rootScope){
            $rootScope.cartProducts = {};
            $rootScope.cartTotal = 0;
        })

        /*************************************************************************************************************************/
        //Configure routes
        .config(function($routeProvider){
        	$routeProvider
        		.when('/product/:name', {
        			templateUrl: './products/product.html',
        			controller: 'productController'
        		})
                .when('/cart', {
                templateUrl: './cart/cart.html',
                controller: 'cartController'
                })
                .when('/checkout',{
                templateUrl: './checkout/checkout.html',
                controller: 'cartController'
                })
        		.when('/', {
        			templateUrl: './products/products.html',
        			controller: 'productsController'
        		})
                .when('/admin', {
                    templateUrl:'admin.html',
                    controller: '.admin_controller/controller'
                })
        		.otherwise({ redirectTo: '/' });
        })
}());
