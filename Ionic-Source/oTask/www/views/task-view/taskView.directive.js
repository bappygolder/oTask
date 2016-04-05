/**
 * Created by Niraj Kumar Chauhan on 12/9/2015.
 */
(function () {
    'use strict';
	
    angular.module('oTask')
        .directive('inputTextarea',function(){
            return{
              restrict: 'E',
              template: '<textarea class="curve" ng-model="vm.newDescription" type="text" name="new_task" id="task_input_field" placeholder="New List Item ..."></textarea>',  
              link: function(scope,element,attrs){
                            $('#task_input_field').focus(function() {
                                $(this).attr('placeholder', 'i.e: Check the letter-box');
                            }).blur(function() {
                                $(this).attr('placeholder', 'New List Item ...');
                            })
                    }
            };
        })
})();