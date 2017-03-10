var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope,$http) {
	console.log("Hello from controller");
    

    $http.get("https://dashboard.heroku.com/apps/cindyeats/test").then(function(response){

			$scope.Restaurantlist = response.data;

			console.log(response.data);
    });

    $scope.addRestaurant = function(){
	    //console.log($scope.restaurant);
	    $http.post("http://localhost:3000/addRestaurant",$scope.restaurant)
	    .then(function(response){
	      	console.log(response);
	      	refresh();
	      
	    })
	 
	};


	function refresh(){
    	$http.get("https://dashboard.heroku.com/apps/cindyeats/test").then(function(response){
      		
      		$scope.Restaurantlist = response.data;
      		$scope.restaurant.name = "";
      		$scope.restaurant.link = "";
      		
      		
      	});
    };

    $scope.remove = function(id) {
    	console.log(id);
    	$http.post("https://dashboard.heroku.com/apps/cindyeats/removeRestaurant/" + id ).then(function(response) {
	      	
	      	refresh();
    });

  };

});
