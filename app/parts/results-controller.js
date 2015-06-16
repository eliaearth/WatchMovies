(function(){
    var mainApp = angular.module('mainApp');
    
    mainApp.controller('resultsController', ['$scope', 'searchService', 'searchModel',
        function($scope, searchService, searchModel){
            $scope.searchModel = searchModel;
            console.log('resultsController init');
        }]);
}())