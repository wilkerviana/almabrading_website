var block = function(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600 && ($(this).scrollTop() < 1700)) {
			$('.block-unit-animate-branding').removeClass('offAnimate').addClass('currentAnimate');
			$('.block-unit-animate-branding').siblings().mouseover(function(){
				$('.block-unit-animate-branding').addClass('offAnimate').removeClass('currentAnimate');
			});
			var childAnimate = $('.currentAnimate').find('.intro__resume , .service__list');
			$(childAnimate).addClass('currentChild');
		}
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 350) {
			$('.mini_heart').fadeOut(1100);
		}
	});
	var blockAnimate = $('.block-unit-animate');
	$(blockAnimate).mouseover(function(){
		$(this).removeClass('offAnimate').addClass('currentAnimate');
		var childAnimate = $('.currentAnimate').find('.intro__resume , .service__list');
		$(childAnimate).addClass('currentChild');
	});
	$(blockAnimate).mouseleave(function(){
		$(this).addClass('offAnimate').removeClass('currentAnimate');
		$(this).find('.intro__resume , .service__list').removeClass('currentChild');
	});
}

$(document).ready(block);
