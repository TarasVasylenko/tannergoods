
$(window).scroll(function(){
	var distanse_menu = $('body').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('header').css('background','rgba(34, 34, 34, 0.5)');
		$('.section-1__logo').css('background','transparent');
	}
	else {
		$('header').css('background','transparent');
		$('.section-1__logo').css('background','transparent');
		$('.section-1__logo').css('background','#b8a47e');		
	}
});

$(document).ready(function(){
	$('.slick-prev').addClass('ion-ios-arrow-up');
	$('.slick-next').addClass('ion-ios-arrow-down');
	$('#slick-slide00').addClass('slide-0-content');
	$('#slick-slide01').addClass('slide-1-content');
	$('#slick-slide02').addClass('slide-2-content');
	$('#slick-slide03').addClass('slide-3-content');
	$('#slick-slide04').addClass('slide-4-content');

	$('.slider-content__link').addClass('ion-ios-arrow-right');
});