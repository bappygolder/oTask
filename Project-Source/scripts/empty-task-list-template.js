//Empty task list view.

angular.module("oTask")
.directive('emptyTaskListTemplate', function(){
	return {
		template: "Welcome! Add some new tasks here to get started with your day."	
	};	
});