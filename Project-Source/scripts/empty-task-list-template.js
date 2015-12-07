//Empty task list view.

angular.module("oTask")
.directive('emptyTaskListTemplate', function(){
	return {
		template: "Start typing above to make your list."	
	};	
});