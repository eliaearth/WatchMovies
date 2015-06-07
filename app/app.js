var mainApp = angular.module('mainApp', ['ui.router']);
mainApp.config(function($stateProvider){
    $stateProvider.
        state({
            name:'search',
            templateUrl: 'parts/search.html'
        }).
        state({
            name:'details',
            templateUrl: 'parts/details.html'
        })
}).run(function($state){
    $state.go('search');
});

mainApp.directive('search', function(){
    return {
        templateUrl: 'parts/results.html'
    }
})
mainApp.controller('searchController', ['$scope', '$state', 'searchService', function($scope, $state, searchService){
    console.log('searchController init');
//    $scope.state = $state;
    $scope.onSearch = function(){
        console.log('start search: ' + searchTxt.value);
        searchService.movieTitle = searchTxt.value;
    };
}]);

mainApp.controller('resultsController', ['$scope', 'searchService', function($scope, searchService){
    console.log('results init');
    searchService.movieTitle
    $scope.onItemClick = function(){
        console.log('Item selectes: ');
    }
}])