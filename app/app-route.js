(function () {
    'use strict';
    angular.module('mainApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/health');
        $stateProvider.state('health', {
            url: '/health',
            templateUrl: 'app/health/home.html',
            controller: 'mainCtrl',
            controllerAs: 'vm',
            resolve: {
                mainPrepService: function (mainService) {
                    return mainService.getProducts();
                }
            }
        }).state('health.policy', {
            url: '/policy',
            templateUrl: 'app/health/partials/policy.html'
        }).state('health.proposer', {
            url: '/proposer',
            template: '<h1>This is proposer view</h1>'
        }).state('health.spouse', {
            url: '/spouse',
            template: '<h1>This is spouse view</h1>'
        }).state('health.children', {
            url: '/children',
            template: '<h1>This is children view</h1>'
        }).state('health.questionnaire', {
            url: '/questionnaire',
            template: '<h1>This is questionnaire view</h1>'
        }).state('health.premium', {
            url: '/premium',
            template: '<h1>This is premium view</h1>'
        });

    };
})();