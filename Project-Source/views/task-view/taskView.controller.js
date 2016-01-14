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
            window.localStorage['taskList'] = angular.toJson(vm.taskList);
        }

        function clearAllTasks() {
            vm.taskList = [];
            vm.isListEmpty = isTaskListEmpty();
            window.localStorage['taskList'] = angular.toJson(vm.taskList);
        }

        function createNewTask() {
            return { description: "",timestamp: "" }
        }

        function isTaskListEmpty() {
            return vm.taskList.length == 0;
        }
    }
})();