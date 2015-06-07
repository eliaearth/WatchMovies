var mainApp = angular.module('mainApp', ['ui.router']);
mainApp.config(function($stateProvider){
    $stateProvider.
        state({
            name:'search',
            templateUrl: 'search.html'
        }).
        state({
            name:'results',
            templateUrl: 'results.html'
        }).
        state({
            name:'details',
            templateUrl: 'details.html'
        })
}).run(function($states){
    $states.go('search');
});
