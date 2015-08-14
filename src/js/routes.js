weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: '../html/pages/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: '../html/pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: '../html/pages/forecast.html',
            controller: 'forecastController'
        })
});