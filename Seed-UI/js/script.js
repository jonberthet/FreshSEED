$(document).ready(function() {
	$(window).scroll(function() {
		var fromTop = $(window).scrollTop();
		var screenHeight = $(window).height()*0.80;
		if (fromTop >= screenHeight) {
			$('#navbar').css({'position': 'fixed', 'top' : 0})
			console.log("p1");
		} else if (fromTop < screenHeight) {
			$('#navbar').css({'position': 'absolute', 'top' : ''});
			$('#navbar').css({'bottom' : 0});
			console.log("p2");
		}
	});  
	$(window).resize(function() {
		var screenWidth = $(window).width();
		var iconWidth = screenWidth * 0.08;
		var iconHeight = $(window).height() * 0.72;
		$('#button1img').css('width', iconWidth, 'height', iconHeight);
		$('#button2img').css('width', iconWidth, 'height', iconHeight);
		

	});  
});