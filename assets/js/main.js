$(document).ready(function() {
	/* fullpage */
	$('#fullpage').fullpage({
		anchors: ["welcome", "caseStudy1", "caseStudy2", "caseStudy3", "all_projects", "about", "contact"],
		menu: '#page-menu, #top-menu',
		css3: true,
		scrollingSpeed: 700,
		responsiveHeight: 560
	});
	/* end of fullpage */

	/* mobile menu */
	var $menu = $('#mobile-menu'),
	$body = $('body'),
	$fn = $('#mobile-menu'),
	$fnToggle = $('.toggle-menu'),
	$window = $(window);

	var fnOpen = false;

	var fnToggleFunc = function() {
		fnOpen = !fnOpen;
		$body.toggleClass('fullscreen-nav-open');
		$fn.stop().fadeToggle(500);
		$fn.toggleClass("active");
		$('.toggle-menu').toggleClass('on');
		$('.logo').toggleClass('on');
		return false;
	};

	$fnToggle.on('click', fnToggleFunc);

	$fn.find('li:not(.menu-item-has-children) > a').one('click', function() {
		fnToggleFunc();
		return true;
	});

	$menu.on('click', function(){
		fnToggleFunc();
		return true;
	});

	$('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e){
		e.stopPropagation();
	});
	/* end of mobile menu */

	/* move down to next section */
	 $(document).on("click", ".go-down", function() {
        $.fn.fullpage.moveSectionDown()
    })

	// once the javascript is loaded and styles added, hide the loader
	$('.loader').addClass("hidden");
});
