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
            vm.taskList = [];
            vm.isListEmpty = isTaskListEmpty();
        }

        function addTask() {
            // Create and add
            var newTask = createNewTask();
            newTask.description = vm.newDescription;
            vm.taskList.push(newTask);

            // Update and cleanup
            vm.isListEmpty = isTaskListEmpty();
            vm.newDescription = "";
        }

        function deleteTask(index) {
            vm.taskList.splice(index, 1);
            vm.isListEmpty = isTaskListEmpty();
        }

        function clearAllTasks() {
            vm.taskList = [];
            vm.isListEmpty = isTaskListEmpty();
        }

        function createNewTask() {
            return { description: "" }
        }

        function isTaskListEmpty() {
            return vm.taskList.length == 0;
        }
    }
})();