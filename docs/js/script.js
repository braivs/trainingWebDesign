$(function(){
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function(){
		$('.post').show(500);
	});
});

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],	
	items:5
	});
});

if($(window).width() < 720){
	$('.owl-carousel').owlCarousel({
	nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
	items:3
	});
};

var input = document.getElementById('menu-checkbox-foot');
input.onchange = function(){
   window.scrollTo(0,document.body.scrollHeight);
}

