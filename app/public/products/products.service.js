(function(){

	var productsService = function($http){

		var categoriesSelected = [];

		//Get products from database
		var getProducts = function(){
			return $http.get("products")
						.then(function(response){
							return response.data;
						})
		};

        //Get categories from database
        var getCategories = function(){
            return $http.get("categories")
                .then(function(response){
                    return response.data;
                })
        };
        //Get product name from database
		var getProduct = function(name){
			return $http.get("products")
						.then(function(response){
							return findProductInArray(response.data, name);
						})
		}
		
		//Search for product in array by name
		var findProductInArray = function(data, name){
			return data.filter(function(element){
				if(element.name === name){
					return element;
				}
			});
		}



        //Get category selected
        var getCategoriesSelected = function(){

            return categoriesSelected;
        }

        //Category change
        var categoryChange = function(category){

                var i = categoriesSelected.indexOf(category); // -1 for not checked

                if (i > -1) {

                    categoriesSelected.splice(i, 1);

                }

                else {
                    categoriesSelected.push(category);

                }
            };
            
       //Filter products by category selected
        var productFilter = function (product) {

            if(categoriesSelected.length > 0) {

                if(categoriesSelected.indexOf(product.category)< 0) {

                    return;

                }

            }
            return product;
        }





		return {
			getProducts: getProducts,
			getProduct: getProduct,
            getCategories : getCategories,
            productFilter : productFilter,
            categoryChange : categoryChange,
            getCategoriesSelected : getCategoriesSelected
		}

	}

	angular
		.module("Main")
		.factory("productsService", productsService);




}());