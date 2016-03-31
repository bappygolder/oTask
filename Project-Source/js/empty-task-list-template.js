//Empty task list view.

angular.module("oTask")
.directive('emptyTaskListTemplate', function(){
	return {
		template: "Your list is empty. Add something new! <br> or <a href='#'>LogIn first</a>"	
		//should we have this template content as a variable within the app? -BG
	};	
});