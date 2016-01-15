// contains static HTML data for the app. These are data that are not dinamically updated.


//content variables | template: var a = "";
	var app_title = "oTask";
	var add_button_text = "Add";
	var empty_list_message = "Your list is empty. Add something new!";
	//var clear_list_text = "Clear List"; //need to work it out still

//add content to HTML DOM | template: $("#").append();
	$("title").append(app_title);
	$("#add_task_button").append(add_button_text);
	$("#empty_msg").append(empty_list_message);
	

