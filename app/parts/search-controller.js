(function(){
    var mainApp = angular.module('mainApp');

    mainApp.controller('searchController', ['$scope', '$log', '$state', 'searchService', 'searchModel',
        function($scope, $log, $state, searchService, searchModel){
            $scope.searchModel = searchModel;                                
            console.log('searchController init');
            //$scope.state = $state;
            $scope.onSearchSuccess = function(response){
                searchModel.moviesFound = response;
                $log.error('Search success');
            };
            $scope.onSearchError = function(){
               $log.error('Search error');
            };
            $scope.onSearch = function(){
                console.log('search text model = ' + $scope.searchModel.textTofind);
                searchModel.textTofind = searchTxt.value;
                searchService.getMovies(searchTxt.value).success(onSearchSuccess()).error(onSearchError());
                $state.go('results');
            };
        }
   ]);
}())