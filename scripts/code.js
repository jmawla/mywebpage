$(document).ready(function() {
	$('.topMenu').mouseenter(function() {
		/* Act on the event */
		$(this).css('background', '-webkit-linear-gradient(to bottom, #2799c6 16%, #006599 100%)');
		var $children = $(this).children('.subMenuNav');
		$children.slideDown('fast');
		$children.css('background', '#a8a8a8');
	});
	$('.topMenu').mouseleave(function() {
		$(this).css('background','none');
		var $children = $(this).children('.subMenuNav');
		$children.slideUp('fast');
	});
	$('.popUpMenuItem').mouseenter(function(event) {
		/* Act on the event */
		$(this).css('background', '#a8a8a8');
	});
	$('.popUpMenuItem').mouseleave(function(event) {
		/* Act on the event */
		$(this).css('background', '#4b4b4b');
	});
});