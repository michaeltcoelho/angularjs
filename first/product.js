
(function(){
    
    var app = angular.module("store-products", []);

    app.controller("ReviewController", function() {
		this.review = {};

		this.Add = function (product) {
			product.reviews.push(this.review);	
		};
	});
    
    app.directive("productTitle", function() {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict: 'E',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive("productDescription", function() {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: 'E',
            templateUrl: 'product-reviews.html'
        };
    });

    app.directive("productPanels", function() {
        return {
            restrict: 'E',
            templateUrl: 'product-panel.html',
            controller: function () { 

                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                }

                this.isSelected = function (tab) {
                    return this.tab == tab;
                }
            },
            controllerAs: 'panel'
        };
    });
})();