(function () {
    'use strict';

    angular.module('mainApp')
        .factory('mainService', mainService);
    mainService.$inject = ['$http', '$q'];

    function mainService($http, $q) {
        return {
            getProducts: getProducts
        }

        function getProducts() {
            return $http.get("http://localhost:8089/api/v1/products")
                .then(productSuccess)
                .catch(productFailure)

            function productSuccess(data, status, headers, config) {
                return data;
            }

            function productFailure(e) {
                var errorMessage = 'Could not retrive products !,Connection failed'
                if (e.data && e.data.description) {
                    errorMessage = errorMessage + "\n" + e.data.description;
                }
                e.data.description = errorMessage;
                console.log(errorMessage);
                return $q.reject(e);

            }
        }

    };
})();