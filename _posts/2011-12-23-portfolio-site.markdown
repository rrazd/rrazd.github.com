---
layout: post
title: Portfolio site
excerpt: You cannot underestimate the power of static sites.
---

This site is a place to display my software portfolio. It was created because whenever I had interviews
the recruiters always indicated that it was beneficial to have concrete examples of past projects. 
There have been plenty of versions of portfolio sites that I have made. Most were flashy with a lot of 
design elements and cool features. However, in the end I realized that I much preferred a very minimalistic
and simple interface, that focused more on the content.
I decided to use the Jekyll static site generator. I had heard good things about it and by using it I could
host this site from GitHub!

An example of the efficiency of using jekyll is evident in the following snippet:

<p>
{% highlight html%}  

<!-- { for post in site.posts limit: 5 }
            <a href="{{ post.url }}">{{ post.title }}</a>
            <span>({{ post.date | date:"%Y-%m-%d" }})</span>
    </br> <em>{ post.excerpt } </em>
    </div>
  { endfor } -->

 {% endhighlight %} 
</p>
<br/>
 

