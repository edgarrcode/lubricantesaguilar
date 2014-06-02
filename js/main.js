// OnLoad
$(function() {
	$( ".accordion" ).accordion({
		collapsible: true
	});
	$( ".fadeIn" ).animate({
		opacity: 1,
		},250,function () {
			$(".btnAnimate").animate({
				top: "0",
				opacity:1
			},250);
	});
	$(".slideInBT").animate({
		top: 0,
		opacity: 1
	},250);
	$( ".mobileNavToggle" ).click(function() {
			$(".navigationBar").slideToggle("fast", function () {
			$(".sideBar").toggleClass("mobileNo");
		});
	});
	$(".searchTabletToggle").click(function () {
		$(".googleSearchWrapper").slideToggle("fast");
	});
	$(".sidebearMobileToggle").click(function () {
		$(".sideBar").toggleClass("sbExpanded");
	});
});
// Animate if visible
$(window).scroll(function(event) {
	$(".anWV").each(function(i, el) {
	var el = $(el);
	if(el.visible(true)) {
			el.animate({
				opacity:1,
				top: 0
			});
		}
	});
});

// LogosToggle
var losLogos = $('.logo1,.logo2,.logo3');
setInterval(function() {
    losLogos.toggleClass('setB');
},4000);

// VideoHook
$().ready(function() {
        $('#elContenido').tubular({videoId: 'Jo5fPXLlko4'});
});
