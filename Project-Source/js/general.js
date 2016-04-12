
$(document).ready(function(){
	
	setTimeout(function(){ 
		fullview();
	},1000);
	
	//more then 38 charecter
	function fullview(){
		$('#sortable li').each(function(){
			if($(this).find('.task-bottom span.ng-binding').text().length > 38){
				$(this).addClass('fullView');
			}	
		});
	}

	/*jQuery('body').on('click', '.alertlogin', function(){
		alert("This feature is not ready yet, but we are working on it. Stay tuned!");
	})*/
})