//Empty task list view.

angular.module("oTask")
.directive('emptyTaskListTemplate', function(){
	return {
		template: empty_list_message_text	
		//should we have this template content as a variable within the app? -BG
	};	
});