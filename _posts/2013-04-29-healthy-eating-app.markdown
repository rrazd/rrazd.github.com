---
layout: postLayout
title: Healthy Eating App 
excerpt: A super awesome web application to help you start eating healthier and stay on track!
---
#A Web Application To Help You Track What You Eat
<br/>
####The Concept
The application used Java Servlets, Java Server Pages (JSP) and MySql. Furthermore, HTML5, CSS3, JQuery and JavaScript were also used to enhance the application.   
<br/>
The first screenshot below is of the home page of the application where the user can choose one of three options. 
They can enter a new record regarding their meal, they can view previous entries based on the year of choice, and they can choose to see the amount of calories consumed in graphical format. Screenshots of each of these options can be seen below. The whole application is responsive, which means that it can be viewed correctly in any size screen size (ie. cell phone, tablet, laptop, wide screen monitor etc.). Furthermore, the SQL database that was designed for this application was normalized to be in BCNF which gets rid of most function dependency redundencies. It should be noted that BCNF is a lossless decomposition however it does not guarentee preservation of depencies. Nevertheless, since the database for this application did turn out to be dependency preserving. Views were used for database queries and prepared statements were used when necessary.  
<br/>
![Screenshot1](/images/work/HealthyEating1.jpg "Screenshot of app home page")
<br/>
<br/>
![Screenshot2](/images/work/HealthyEating2.jpg "Screenshot of app")
<br/>
<br/>
![Screenshot3](/images/work/HealthyEating3.jpg "Screenshot of app")
<br/>
<br/>
![Screenshot4](/images/work/HealthyEating4.jpg "Screenshot of app")
<br/>
####Improvements
As always there is plenty of improvements and enhancements I could implement. For instance, if the app was to be released commercially then there would need to be a login system in place so that each user sees only their information. This is fairly easy to implement. I would also add more options for the graphical representation of data. For instance I would like to see the correlation between mood (this field is part of the entry that the user makes) and calories consumed per month. Lastly, it would be better if the application pulls data regarding calories of food items instead of asking the user to enter in that information. In sum, I could continue coming up with enhancements and ways to make the app better, however, I was quite happy with the current product: it is sleek and it meets the requierements that I  initially had in mind.  
<br/>
Source code can be found on my <a href="https://github.com/rrazd/HealthyEatingApp">github</a> page
<br/>
=========================	  
<h3><a href = "/portfolio.html"> Go Back To See All Projects</a></h3>
