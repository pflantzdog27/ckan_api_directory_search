angular.module('subcontractorsApp.services',[])
    .factory('subcontractorsAPIservice',function($http) {
        var urlBase = 'http://demo.ckan.org/api/action/datastore_search?resource_id=22a53418-35d6-4373-914d-04aa97c91f39&limit=2000';

        var promise;
        var myService = {
            async: function() {
                if ( !promise ) {
                    // $http returns a promise, which has a function, which also returns a promise
                    promise = $http.jsonp(urlBase +'&callback=JSON_CALLBACK').then(function (data) {
                        // The return value gets picked up by the then in the controller.
                        return data.data.result.records;
                    });
                }
                // Return the promise to the controller
                return promise;
            }
        };
        return myService;
    })


