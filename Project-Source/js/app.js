(function() {
    'use strict';

    angular.module('oTask', ['ui.router'])
    
		.controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$scope', '$location', '$rootScope'];

    function ApplicationController($scope, $location, $rootScope,$element) { //can we replace these three variables with ApplicationController? -BG
        $scope.$on('$stateChangeSuccess', onStateChangeSuccess);

        function onStateChangeSuccess(event, toState, toParams, fromState, fromParams) {
		}

		/*--- onClick full content ---*/
		$scope.divalert = function($event){
			var currentItem = $event.currentTarget;	
			if($(currentItem).find('.ng-binding').text().length > 15 ){
				$(currentItem).toggleClass('active');
				$(currentItem).parent().toggleClass('active');
			}
		}	

		/*--- onClick overlay ---*/
		$scope.divoverlay = function($event){
			var currentItem = $event.currentTarget;
			$(currentItem).parents('.task-wrapper').toggleClass('activateDargandDrop');
			$('#clear_list_button').text("Done");
			$( "#sortable" ).sortable();
		}		
	
    }
})();