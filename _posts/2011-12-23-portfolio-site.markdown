---
layout: postLayout
title: Portfolio site
excerpt: You cannot underestimate the power of static sites.
---
#Portfolio Site
<br/>
####Looking back at the past

This site is a place to display my software portfolio. 
There have been plenty of "portfolio site" versions that have come to pass. A lot of tinkering and inspirational
sites have led me to creating the current version that you see on your browsers. Most of the previous version
were flashy with a lot of frivolous features. However, one day I realized that I much preferred a minimalistic
and simple interface, that focused more on the content. After all content is King. 
<br/>

####Jekyll to the rescue

I decided to use the Jekyll static site generator. I had heard good things about it and by using it I could
host this site from GitHub! Of course, there was also the fact that I felt much cooler using the terminal to 
simply type, "git init" then  "add ." then "git commit -m updated" then "git push origin master" in order to get
my website's code to update on GitHub and these updates to be reflected in the site within seconds! 

If you would like more information about Jekyll visit this site: <a href="http://paulstamatiou.com/how-to-wordpress-to-jekyll">click here</a>.

I built everything from scratch just because I find that more interesting, however its not everyone's cup
of tea. In most situations I would recommend using <a href="http://octopress.org/docs/"> Octopress Framework</a>
to set up a Jekyll blog. By using Jekyll, I got more familiar with Git as a source control system as well. 
Once you are using this technology it is most likely that your top command in the command line will be 
git (if it isn't already).<br/> 

On a completely unrelated note, if you are using a Mac terminal or any other UNIX 
terminal you can find out your top 10 commands in the command line by entering: 
<br/>

{% highlight bash %}
history | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -rn | head
{% endhighlight %}
<br/>

####The Hardest part
 
The hardest part about reinventing my portfolio site was adding the CSS design elements as I tend to be a 
perfectionist and making sure all elements appeared the same in all browsers, screen size and resolutions
was a bit cumbersome to say the least. I would recommend using pre-made CSS style sheets. If your aptitude in designing and art
is not phenomenal then it will save you time and frustration to use a professional designers CSS template. 
<br/>

####Looking ahead to the future

Although there is much still to do to improve this site, the lack of the hours in the day prevent me from 
working more on it. For now it functions as it should and serves its main purpose: to display a description of
my past projects along with any links to them or screenshots of them. 
