$(document).ready(function($){
	"use strict";
	
	// WOW Js Active
	// new WOW().init();
	
	// ---- Active
    $('.featured-carousel').owlCarousel({
        items:3,
        loop:true,
		autoplay:true,
		dots:true,
		nav:false,
        margin:5,
		responsive:{
            320:{
                items:1
			},
            600:{
                items:3
			}
		}
		
	})
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
	
	$('.testimonial-carousel').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		// margin:320,
		dots:true,
		nav:false,
		
	})
	
	$('.brand-area-carousel').owlCarousel({
		loop:true,
		margin:30,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
	
	
	$('.video-play').magnificPopup({
		type: 'iframe'
	});
	
	// Counter Up Js
	$('.num').numScroll({
		'number': 3468,
		'time': 15000,
		'delay': 10,
		'symbol': true
	});
	$('.num2').numScroll({
		number: 4638,
		'time': 15000,
		'delay': 10
	});
	
	$('.num3').numScroll({
		number: 3968,
		'time': 15000,
		'delay': 10
	});
	$('.num4').numScroll({
		number: 4648,
		'time': 15000,
		'delay': 10
	});
	
	

	
	
	
	/* scrollUp Minimum setup */
	$(function () {
		$.scrollUp();
	});
	
}(jQuery));