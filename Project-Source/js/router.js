/**
 * Created by eruiz on 11/11/2015
 */
(function() {
    'use strict';

    angular.module('oTask')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('taskView');

        $stateProvider
            .state('taskView', {
                url: '/taskView',
                templateUrl: 'views/task-view/taskView.html',
                controller: 'TaskViewController as vm'
            })
    }
})();
