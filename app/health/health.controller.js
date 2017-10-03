(function () {
    'use strict';

    angular.module('mainApp')
        .controller('mainCtrl', mainController);
    mainController.$inject = ['$state', 'mainService'];

    function mainController($state, mainService) {
        var vm = this;
        var date = new Date();
        var views = ['Policy', 'Proposer', 'Spouse', 'Children', 'Questionnaire', 'Premium'];

        vm.title = "Policy Entry"
        vm.localTime = date.toUTCString();
        vm.tabViews = [];
        vm.products = [];
        vm.active = 0;
        vm.selectedProduct="";

        vm.go = function (route) {
            $state.go(route);
        }

        vm.gotoRoute = function (index) {
            vm.active = index;
            console.log(vm.selectedProduct);
        }

        

        activte();

        function activte() {
            return getProducts().then(function () {
                console.log('view activated');
                prepareViews();
            });
        }

        function getProducts() {
            return mainService.getProducts().then(function (data) {
                vm.products = data.data;
                return vm.products;
            });
        }

        function prepareViews() {
            for (var i = 0; i < views.length; i++) {
                vm.tabViews.push({
                    viewName: views[i],
                    routeName: 'health.' + views[i].toLowerCase()
                })
            }
            console.log(JSON.stringify(vm.tabViews));
        }
    };
})();