var block = function(){
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