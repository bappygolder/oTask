(function() {
    'use strict';

    angular.module('oTask', [
        'ui.router'
    ])
    
		.controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$scope', '$location', '$rootScope'];

    function ApplicationController($scope, $location, $rootScope) {
        $scope.$on('$stateChangeSuccess', onStateChangeSuccess);

        	function onStateChangeSuccess(event, toState, toParams, fromState, fromParams) {

        }
    }
})();