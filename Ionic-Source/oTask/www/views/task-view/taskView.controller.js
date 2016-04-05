/**
 * Created by Eric on 12/9/2015.
 */
(function () {
    'use strict';

    angular.module('oTask')
        .controller('TaskViewController', TaskViewController);

    TaskViewController.$inject = ['$state', '$scope'];
    function TaskViewController($state, $scope) {
        var vm = this;

        // View Model Vars
        vm.newDescription = "";

        // Model Functions
        vm.addTask = addTask;
        vm.deleteTask = deleteTask;
        vm.clearAllTasks = clearAllTasks;

        // Initialize controller
        start();

        function start() {
						//check to see if there is an existing list already
            if (window.localStorage['taskList'] != undefined 
								&& window.localStorage['taskList'] != 'undefined') {
                vm.taskList = JSON.parse(window.localStorage['taskList']);
                //vm.taskList = [];
            }
            else {
                vm.taskList = [];
            }

            vm.isListEmpty = isTaskListEmpty();
        }

        function addTask() {
            // Create and add
            var newTask = createNewTask();
            newTask.description = vm.newDescription;
            if(newTask.description.length > 38){
                newTask.class = "fullView";
            }
            newTask.timestamp = new Date().getTime();
            vm.taskList.push(newTask);

            // Update and cleanup
            vm.isListEmpty = isTaskListEmpty();
            vm.newDescription = "";
            window.localStorage['taskList'] = angular.toJson(vm.taskList);
            document.getElementById("task_input_field").focus();
        }

        function deleteTask(index) {
            vm.taskList.splice(index, 1);
            vm.isListEmpty = isTaskListEmpty();
            window.localStorage['taskList'] = angular.toJson(vm.isTaskListEmpty);
        }

        function clearAllTasks(index) {  
            var x = document.getElementById("clear_list_button");
            if(x.innerHTML == "Done"){
                $('.task-wrapper').removeClass('activateDargandDrop');
                $('#clear_list_button').text('Clear List');
                $( "#sortable" ).sortable( "destroy" );
                console.log(angular.toJson(vm.taskList));
                //window.localStorage['taskList'] = angular.toJson(temp);
            }else{
                vm.taskList = [];
                vm.isListEmpty = isTaskListEmpty();
                window.localStorage['taskList'] = angular.toJson(vm.taskList);    
            }
        }

        function createNewTask() {
            return { description: "",timestamp: "" }
        }

        function isTaskListEmpty() {
            return vm.taskList.length == 0;
        }
    }
})();