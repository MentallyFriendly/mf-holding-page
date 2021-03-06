var width = $(window).width();
var height = $(window).height();

// Page loader
	$('#loader').css({
		'min-height': height,
		'min-width': width
	});

	/*
	$(window).load(function(){
		$('#loader').delay(2500).animate({
			opacity:0
		}, function () {
			$(this).remove();
			$('nav').animate({
				opacity:1
			});
		});
	});
	*/

   $('nav').css('opacity', 1);

$(document).ready(function(){

	if ( $('.home-page').length > 0 ){
		// check if video is visible on screen
		var video;
		var nav = $('nav');
		$(window).on('scroll', function(){

			video = $('#video-container').visible(true);

			if (video === true){
				nav.removeClass('off-video-nav');
				return;
			} else if (video === false){
				nav.addClass('off-video-nav');
			} else{
				return;
			}

		});
	} else {
		$('nav').addClass('off-video-nav').css('opacity', 1);
	};


	// Set mobile menu to fit window height

	// $('#navbar').height(height);
	// $('.navbar-collapse').css({
	// 	'max-height': height
	// });

// Fit landing page to screen
	// function setLandingPageSize() {

	// 	$('#landing-page').css({
	// 		'min-height': height
	// 	});
	// }

	// $(window).resize(function() {
	// 	setLandingPageSize();
	// 	console.log('resize');
	// });

	// setLandingPageSize();

// Smooth Scrolling
	$(".scroll").click(function(event){
	    event.preventDefault();
	    //calculate destination place
	    var dest=0;
	    if($(this.hash).offset().top > $(document).height()-$(window).height()){
	        dest=$(document).height()-$(window).height();
	    }else{
	        dest=$(this.hash).offset().top;
	    }
	    //go to destination
	    if (width < 768) {
	    	$('html,body').animate({scrollTop:dest - 35}, 1000,'swing');
	    } else{
	    	$('html,body').animate({scrollTop:dest - 160}, 1000,'swing');
	    }
	});

// Close mobile menu on link click
	$('.home .navbar-nav a').on('click', function(){
		$('#navbar').collapse('hide');
		$('.body-overlay').fadeOut('150');
	});

	$('.home .navbar-toggle').on('click', function(){
		if( $(this).hasClass('collapsed') ){
			$('.body-overlay').fadeIn('150');
		}else{
			$('.body-overlay').fadeOut('150');
		}
	});

	$('.body-overlay').on('click', function(){
		$('#navbar').collapse('hide');
		$('.body-overlay').fadeOut('150');
	});

// Rotating title text
	// var delay = 3000,
	// 	speed = 700;

	// $('#h1-first-line').dynamo({
	//     delay: delay,
	//     speed: speed,
	//     lines: ['hopelessly', 'deliberately', 'scarily', 'proudly', 'rapidly', 'unashamedly', 'emotionally', 'elegantly', 'abundantly'],
	//     callback: function() {

	//     }
	// });
	// $('#h1-second-line').dynamo({
	//     delay: delay,
	//     speed: speed,
	//     lines: ['devoted', 'quick', 'efficient', 'independent', 'evolving', 'small', 'available', 'wasted', 'clear'],
	//     callback: function() {

	//     }
	// });
});
