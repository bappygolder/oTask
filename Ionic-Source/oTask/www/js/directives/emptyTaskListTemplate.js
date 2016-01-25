/**
 * Created by niraj_kumar_chauhan on 06-01-2016.
 */
var oTaskDirective = angular.module('oTask.Directive');

oTaskDirective.directive('emptyTaskListTemplate', function () {
  return {
    template: "Your list is empty. Add something new!"
    //should we have this template content as a variable within the app? -BG
  };
});
