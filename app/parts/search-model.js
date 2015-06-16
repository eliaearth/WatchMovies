(function(){
    var mainApp = angular.module('mainApp');
    mainApp.service('searchModel', [function(){
        return model= {
            textTofind:null,
            moviesFound:[
                {
                    id: 1,
                    name: 'movie 1',
                    description: {
                        regizor: 'regizor movie 1',
                        year: '1000 movie 1',
                        shortDescription: 'short description movie 1'
                    }
                },
                 {
                     id: 2,
                    name: 'movie 2',
                    description: {
                        regizor: 'regizor movie 2',
                        year: '1000 movie 2',
                        shortDescription: 'short description movie 2'
                    }
                },
                 {
                     id: 3,
                    name: 'movie 3',
                    description: {
                        regizor: 'regizor movie 3',
                        year: '1000 movie 3',
                        shortDescription: 'short description movie 3'
                    }
                },
                 {
                     id: 4,
                    name: 'movie 4',
                    description: {
                        regizor: 'regizor movie 4',
                        year: '1000 movie 4',
                        shortDescription: 'short description movie 4'
                    }
                }
            ]
        };
    }]);
}())