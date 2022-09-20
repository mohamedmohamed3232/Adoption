/**
 * Changing colors when hovering in the gallery 
 */

 $(document).ready(function(){	
	$("div.pet").hover(
		function(){$(this).addClass("highlight");}, 
		function(){$(this).removeClass("highlight");});
	});