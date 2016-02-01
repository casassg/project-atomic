angular.module('starter.controllers', [])

.controller('CitiesCtrl', function($scope, Cities) {
  $scope.$on('$ionicView.enter', function(e) {
    Cities.refresh();
  });
	$scope.search=false;
	$scope.toggleSearch = function() {
		$scope.search = !$scope.search;
	}

  $scope.cities = Cities.all();
})
.controller('CityDetailCtrl', function($scope,$stateParams, Cities) {

	$scope.city = Cities.oldget($stateParams.cityId);
  Cities.get($scope.city.query).success(function(response) {
     $scope.response = response;
		 $scope.error =false;
  }).error(function(error){
		 $scope.error = true;
	});
})
