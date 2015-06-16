(function(){
    var mainApp = angular.module('mainApp');
    mainApp.controller('detailsController', ['$scope', '$stateParams', 'searchService', 'searchModel',
        function($scope, $stateParams, searchService, searchModel){
            $scope.searchModel = searchModel;
            
            $scope.selectedMovieId = $stateParams.param;
            console.log('detailsController init');
            console.log('Selected movie id = ', $scope.selectedMovieId);
            
            $scope.selectedMovie = null;
            for(i=0; i<$scope.searchModel.moviesFound.length; i++)
            {
                if ( $scope.searchModel.moviesFound[i].id == $scope.selectedMovieId){
                     $scope.selectedMovie = $scope.searchModel.moviesFound[i];
                }
            }
        }]);
}())