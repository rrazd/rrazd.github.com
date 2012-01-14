---
layout: post
title: The French Oven site
excerpt: I created this website from scratch and currently manage it
---
#The French Oven Website
<br/>
####A Summary
I created this website from scratch: I started with laying out the design, then coding the website and setting up the web host and domain name. 
I also used photoshop for editing all the photos of the cakes in order to make all the display photos consistent with 
each other and creating the header etc. 
I communicated with the client mostly via email and they were happy with the end product. 
<br/>
####About the Client
The French Oven bakery offers a wide variety of baked goods in many tempting nut-free flavours. The company owns a state of the art cake factory and their different baked goods use the freshest of ingredients. In particular, they offer whole sale cakes, custom cupcakes, mini cupcakes and cakes illustrated by hand for special celebrations and events. 
I still manage the bakery's website and do any content updates that the client requires... Now if only I got paid in mini cupcakes and hot out of the oven cookies...  
<br/>
####See it Live
See the end result for yourself. Please visit the site:
<a href="http://www.thefrenchoven.on.ca/index.html">The French Oven</a>

Any feedback and suggestions are welcome. Please email me by clicking the Contact tab at the top. 


{% highlight html %}

<script src="http://www.google.com/jsapi?key=your_api_key" type="text/javascript"></script>
<script language="Javascript" type="text/javascript">
  
  google.load("search", "1");
  
  function OnLoad() {
    // Create a search control
    var searchControl = new google.search.SearchControl();
    
    // Add in a WebSearch
    var webSearch = new google.search.WebSearch();
    
    // Restrict our search to pages from this site
    webSearch.setSiteRestriction('your site url');
    
    // Add the searcher to the SearchControl
    searchControl.addSearcher(webSearch);
    
    // tell the searcher to draw itself and tell it where to attach
    searchControl.draw(document.getElementById("search"));
  }
  google.setOnLoadCallback(OnLoad);
  
</script>

{% endhighlight %}

