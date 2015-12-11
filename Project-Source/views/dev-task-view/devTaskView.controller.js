/**
 * Created by Eric on 12/9/2015.
 */
(function () {
    'use strict';

    angular.module('oTask')
        .controller('DevTaskViewController', DevTaskViewController);

    DevTaskViewController.$inject = ['$state', '$scope'];
    function DevTaskViewController($state, $scope) {
        var vm = this;

        vm.greeting = "Dev Task View";
    }
})();