weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    })

    $scope.submit = function () {
        $location.path('/forecast')
    }
}]);


weatherApp.controller('forecastController', ['$scope', 'cityService', '$routeParams', 'weatherService', function ($scope, cityService, $routeParams, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
    console.log($scope.weatherResult)

    $scope.convertToFahrenheit = function (defK) {
        return Math.round((1.8 * (defK - 273)) + 32)
    }

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000)
    }

}]);
