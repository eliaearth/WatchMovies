(function(){
    var mainApp = angular.module('mainApp');
    mainApp.service('searchModel', [function(){
        return model= {
            textTofind:null,
            moviesFound:[]
        };
    }]);
}())