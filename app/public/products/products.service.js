(function(){

	var productsService = function($http){

		var categoriesSelected = [];
		
		var getProducts = function(){
			return $http.get("products")
						.then(function(response){
							return response.data;
						})
		};

        var getCategories = function(){
            return $http.get("categories")
                .then(function(response){
                    return response.data;
                })
        };

		var getProduct = function(name){
			return $http.get("products")
						.then(function(response){
							return findProductInArray(response.data, name);
						})
		}
		
		var findProductInArray = function(data, name){
			return data.filter(function(element){
				if(element.name === name){
					return element;
				}
			});
		}




        var getCategoriesSelected = function(){

            return categoriesSelected;
        }

        var categoryChange = function(category){

                var i = categoriesSelected.indexOf(category); // -1 for not checked

                if (i > -1) {

                    categoriesSelected.splice(i, 1);

                }

                else {
                    categoriesSelected.push(category);

                }
            };

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