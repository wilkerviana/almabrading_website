var block = function(){
	var blockAnimate = $('.block-unit-animate');
	$(blockAnimate).mouseover(function(){
		$(this).addClass('currentAnimate');
		var childAnimate = $('.currentAnimate').find('.intro__resume , .service__list');
		$(childAnimate).addClass('currentChild');
	});
	$(blockAnimate).mouseleave(function(){
		$(this).removeClass('currentAnimate');
		$(this).find('.intro__resume , .service__list').removeClass('currentChild');
	});
}

$(document).ready(block);