(function(){
    var mainApp = angular.module('mainApp');
    mainApp.service('searchService', ['$http', function($http){
            this.movieTitle = "";
    }]);
}())