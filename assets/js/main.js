(function() {
	function initialize () {
		new Nav().initialize();
	}
	document.addEventListener('DOMContentLoaded', function() {
		initialize();
	}, false);

})();
/* Needed for fixing sticky hover in mobile */
function fix() {
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {par.insertBefore(el, next);}, 0);
}