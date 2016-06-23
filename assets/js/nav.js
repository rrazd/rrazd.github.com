function Nav () {
	function controlNavigationShadow() {
	    if (document.body.scrollTop > 0) {
	        document.querySelector("header").className = "alt-color";
	    } else {
	        document.querySelector("header").className = "";
	    }
	}
	function smoothScroll() {
		// Add smooth scrolling to all links
		var $root = $('html, body');
		$('a').click(function() {
		    $root.animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 600);
		    return false;
		});
	}
	function initialize () {
		smoothScroll();
		window.addEventListener("scroll", function() {
			controlNavigationShadow();
		}, false);
	}

	return {
		initialize: initialize
	};
}