var app = angular.module('myapp',[]);
app.controller('mycontroller',function($scope,$http){
    $http.get('https://test-prod-api.herokuapp.com/products')
    .success(function(response){
    	// alert(response);
           $scope.persons = response.products;
    	});
});