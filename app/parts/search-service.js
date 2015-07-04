(function(){
    var mainApp = angular.module('mainApp');
    mainApp.service('searchService', ['$http', function($http){
        return {
            getMovies : function(movieTitle){
                             return $http({
                                     method: 'GET', 
                                     url: 'http://178.62.41.61/TVMateServer/app/getShow/name=' + movieTitle
                                    });
                        }
        }
    }]);
}())