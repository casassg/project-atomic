angular.module('starter.controllers', [])

.controller('CitiesCtrl', function($scope, Cities) {
  $scope.$on('$ionicView.enter', function(e) {
    Cities.refresh();
  });

  $scope.cities = Cities.all();
})
.controller('CityDetailCtrl', function($scope,$stateParams, Cities) {


  Cities.get($stateParams.cityId).then(function(data) {
     console.log(data);
  })
})

