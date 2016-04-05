//more then 14 charecter
$(document).ready(function(){
	
	setTimeout(function(){ 
		fullview();
	},1000);
	
	function fullview(){
		$('#sortable li').each(function(){
			if($(this).find('.task-bottom span.ng-binding').text().length > 38){
				$(this).addClass('fullView');
			}	
		});
	}
})