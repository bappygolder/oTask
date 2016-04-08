//Empty task list view.

angular.module("oTask")
.directive('emptyTaskListTemplate', function(){
	return {
		template: "Your list is empty. Add something new! <br> or <a class='alertlogin' href='/login'>Login first</a>"	
		//should we have this template content as a variable within the app? -BG
	};	
});