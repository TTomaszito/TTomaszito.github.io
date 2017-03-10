var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope,$http) {
	console.log("Hello from controller");
    

    $http.get("https://cindyeats.herokuapp.com/test").then(function(response){

			$scope.Restaurantlist = response.data;

			console.log(response.data);
    });

    $scope.addRestaurant = function(){
	    //console.log($scope.restaurant);
	    $http.post("https://cindyeats.herokuapp.com/addRestaurant",$scope.restaurant)
	    .then(function(response){
	      	console.log(response);
	      	refresh();
	      
	    })
	 
	};


	function refresh(){
    	$http.get("https://cindyeats.herokuapp.com/test").then(function(response){
      		
      		$scope.Restaurantlist = response.data;
      		$scope.restaurant.name = "";
      		$scope.restaurant.link = "";
      		
      		
      	});
    };

    $scope.remove = function(id) {
    	console.log(id);
    	$http.post("https://cindyeats.herokuapp.com/removeRestaurant/" + id ).then(function(response) {
	      	
	      	refresh();
    });

  };

});
