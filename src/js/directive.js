
weatherApp.directive('weatherReport', function () {
    return {
        restrict: 'E ',
        templateUrl: '../html/directive/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"

        }
    }
});