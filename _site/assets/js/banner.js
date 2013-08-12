 $(document).ready(function() {
   var facts = [
   	  "I have travelled to Africa.",
	  "I like minimalistic design.",
	  "I have lived in three different countries.",
	  "I love to solve problems.",
	  "I have traveled extensively around Europe.",
	  "I studied computer engineering at University of Waterloo.",
	  "I work as a software developer.",
	  "I like warm weather.",
	  "I like reading fiction.",
     "I like riding my bike to work."
   ]

   var i = Math.floor(Math.random() * facts.length);
   var generate = function(){
   	if (i < facts.length - 1) {
   		i++
 		} else {
 			i = 0;
 		}
   	$(".fact").fadeOut(200, function(){
   		$('.fact').remove();
	   	$('<span class="fact">'+facts[i]+'</span>').prependTo('.facts');
   	});
   }

   $(".fact").remove();
   $('<span class="fact">'+facts[i]+'</span>').prependTo('.facts');

   $(".fact-spinner").click(generate);

 });
