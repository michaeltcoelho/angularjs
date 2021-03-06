/* angularjs - first file created */ 

(function () {
	
	var app = angular.module("store", [ "store-products" ]);

	app.controller("StoreController", [ '$http', function($http) {
		
//      var store = this;
//        
        this.products = products;
        
//        $http.get('data/products.json')
//            .success(function(data){
//                store.products = data;
//            });
	}]);    
    
    var products = [{
        name: 'dodecahedron',
        price: 30.00,
        description: '',
        canPurchase: true,
        images: [
            { 
                full: 'images/image.png', 
                thumb: 'images/image.png' 
            }
        ],
        reviews: [
            {
                stars: 3,
                body: 'lorem ipsum in dolor sit amet',
                author: 'michael.tcoelho@gmail.com'
            }, 
            {
                stars: 4,
                body: 'lorem ipsum in dolor sit amet',
                author: 'michael.tcoelho@gmail.com'
            }
        ]
    },
    {
        name: 'Pentagonal',
        price: 30.00,
        description: '..',
        canPurchase: true,
        images: [
            { 
                full: 'images/image.png', 
                thumb: 'images/image.png' 
            }
        ],
        reviews: [
            {
                stars: 3,
                body: 'lorem ipsum in dolor sit amet',
                author: 'michael.tcoelho@live.com'
            }, 
            {
                stars: 5,
                body: 'lorem ipsum in dolor sit amet',
                author: 'michael.tcoelho@live.com'
            }
        ]
    }];
    
})();
