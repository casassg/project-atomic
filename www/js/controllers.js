angular.module('starter.controllers', [])

.controller('CitiesCtrl', function($scope, Cities, $location) {
  $scope.$on('$ionicView.enter', function(e) {
    Cities.refresh();
  });
	$scope.search=false;
	$scope.toggleSearch = function() {
		$scope.search = !$scope.search;
	}

	$scope.startSearch = function(query) {
			var id = Cities.add(query);
			$location.path('/city/'+id);
	}

  $scope.cities = Cities.all();
})
.controller('CityDetailCtrl', function($scope,$stateParams, Cities) {

	$scope.city = Cities.get($stateParams.cityId);
  Cities.query($scope.city.query).success(function(response) {
     $scope.response = response;
		 $scope.error =false;
  }).error(function(error){
		 $scope.error = true;
	});
})
