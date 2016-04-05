// contains static HTML data for the app. These are data that are not dinamically updated. use the TEMPLATE sections to create new data fields. 

//content variables | TEMPLATE: var a = "";
	var app_title_text = "oTask";
	var add_button_text = "Add";
	var empty_list_message_text = "Your list is empty. Add something new!";
	var clear_list_text = "Clear List";
	var about_otask_text = "About oTask";
	//var clear_list_text = "Clear List"; //need to work it out still

//add content to HTML DOM | TEMPLATE: $("#").append();
	$("title").append(app_title_text);
	$("#add_task_button").append(add_button_text);
	$("#empty_msg").append(empty_list_message_text);
	$("#clear_list_button").append(clear_list_text);
	$("#about_otask_button").append(about_otask_text);
	
 