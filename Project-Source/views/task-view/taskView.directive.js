/**
 * Created by Niraj Kumar Chauhan on 12/9/2015.
 */
(function () {
    'use strict';
	
    angular.module('oTask')
        .directive('inputTextarea',function(){

            //Change text Dynamically ..
            var dynamic_placeholder = ['i.e: Check the letter-box', "i.e: Good oTask!","i.e: Awesome oTask!","i.e: Super oTask!","i.e: Nice oTask!","i.e: Great oTask!"]

            return{
              restrict: 'E',
              template: '<textarea class="curve" ng-model="vm.newDescription" type="text" name="new_task" id="task_input_field" placeholder="New List Item ..."></textarea>',  
              link: function(scope,element,attrs){
                            $('#task_input_field').focus(function() {
                                $(this).attr('placeholder', dynamic_placeholder[Math.floor(Math.random()*dynamic_placeholder.length)]);
                            }).blur(function() {
                                $(this).attr('placeholder', 'New List Item ...');
                            })
                    }
            };
        })
	
})();