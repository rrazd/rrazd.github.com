$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 30) {
        $(".case-header").addClass("shade");
    } else {
    	$(".case-header").removeClass("shade");
    }
});

$(document).ready(function() {
	// once the javascript is loaded and styles added, hide the loader
	$('.loader').addClass("hidden");

  $('img.lazy').lazyload({
      threshold : 200
  });
});
