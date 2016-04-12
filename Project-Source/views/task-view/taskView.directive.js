/**
 * Created by Niraj Kumar Chauhan on 12/9/2015.
 */
(function () {
    'use strict';
	
    angular.module('oTask')
        .directive('inputTextarea',function(){

             // return the placeholder text
            function dynamic_placeholder(){
              return  dynamic_placeholder_texts[Math.floor(Math.random()*dynamic_placeholder_texts.length)]
            }
            return{
              restrict: 'E',
              template: '<textarea class="curve" ng-model="vm.newDescription" type="text" name="new_task" id="task_input_field" placeholder="New List Item ..."></textarea>',  
              link: function(scope,element,attrs){
                            $('#task_input_field').focus(function() {
                                $('#add_task_button').fadeIn();
                                $(this).attr('placeholder', dynamic_placeholder());
                            }).blur(function() {
                                if($(this).val() == ''){
                                    $('#add_task_button').fadeOut();   
                                }
                                $(this).attr('placeholder', 'New List Item ...');
                                 
                            })
                    }
            };
        })
})();