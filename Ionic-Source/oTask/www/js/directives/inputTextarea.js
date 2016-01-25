/**
 * Created by niraj_kumar_chauhan on 06-01-2016.
 */

var oTaskDirective = angular.module('oTask.Directive',[]);

oTaskDirective.directive('inputTextarea',function(){
  return{
    restrict: 'E',
    template: '<textarea class="curve" ng-model="vm.newDescription" type="text" name="new_task" id="task_input_field" placeholder="New List Item ..."></textarea>',
    link: function(scope,element,attrs){


    }
  };
});
