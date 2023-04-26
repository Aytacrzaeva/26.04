// OWL CAROUSEL
// $('.owl-carousel').owlCarousel({
//     items:5,
//     loop:true,
//     nav:true,
//     margin:10,
//     merge:true,
//     responsive:{
//         678:{
//             mergeFit:true
//         },
//         1000:{
//             mergeFit:false
//         }
//     }
// });

// $("a.grouped_elements").fancybox();
// $(document).ready(function() {

// 	/* This is basic - uses default settings */
	
// 	$("a#single_image").fancybox();
	
// 	/* Using custom settings */
	
// 	$("a#inline").fancybox({
// 		'hideOnContentClick': true
// 	});

// 	/* Apply fancybox to multiple items */
	
// 	$("a.group").fancybox({
// 		'transitionIn'	:	'elastic',
// 		'transitionOut'	:	'elastic',
// 		'speedIn'		:	600, 
// 		'speedOut'		:	200, 
// 		'overlayShow'	:	false
// 	});
	
// });




$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});