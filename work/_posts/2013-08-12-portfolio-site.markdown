---
layout: linkage
title: 	Portfolio Website
thumbnail: /images/work/portfolioSite_thumb.png
category: work
---

######Looking back at the past

This site is a place to display my software portfolio. 
There have been plenty of "portfolio site" versions that have come to pass. A lot of tinkering and inspirational
sites have led me to creating the current version. A version that I was particularly happy with is seen below.

<figure>
	<div class="web">
	<img src="/images/work/pastSite.jpg" alt="Past Site Screenshot">
	</div>
</figure> 
 

######Jekyll to the rescue

I decided to use the Jekyll static site generator. I had heard good things about it and by using it I could
host this site from GitHub! Of course, there was also the fact that I felt much cooler using the terminal in order to get my website's code to update on GitHub and these updates to be reflected in the site within seconds! 

Github essentials: 

```html
git init  
git add .  
git commit -m 'updated' 
git push origin master
```

Jekyll essentials:

```html
1) go into the website's folder and type: jekyll serve
2) see website at http://localhost:4000/
3) open new terminal tab, go into the website's folder and type: jekyll build
4) need to rebuild to reflect any changes
```