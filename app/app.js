var mainApp = angular.module('mainApp', ['ui.router']);
mainApp.config(function($stateProvider){
    $stateProvider.
        state({
            name:'search',
            url: '',
            templateUrl: 'parts/search.html'
        }).
        state({
            name:'results',
            url: 'results/',
            templateUrl: 'parts/results.html'
        }).
        state({
            name:'details',
            url: 'details/:param',
            templateUrl: 'parts/details.html'
        })
}).run(function($state){
    $state.go('search');
});


