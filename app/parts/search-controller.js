(function(){
    var mainApp = angular.module('mainApp');

    mainApp.controller('searchController', ['$scope', '$state', 'searchService', 'searchModel',
        function($scope, $state, searchService, searchModel){
            $scope.searchModel = searchModel;                                
            console.log('searchController init');
            //$scope.state = $state;
            $scope.onSearch = function(){
                console.log('search text model = ' + $scope.searchModel.textTofind);
                searchService.movieTitle = searchTxt.value;
                $state.go('results');
            };
        }
   ]);
}())