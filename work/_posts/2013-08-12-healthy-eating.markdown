---
layout: linkage
title: Healthy Eating App
thumbnail: /images/work/healthyEating_thumb.png
category: work
keywords: Rashna, Razdan, computer, app, healthy, eating, GWT
description: Hi, I am Rashna Razdan, a web and software developer. Eating healthy is extremely important to me so I created an app that lets you track your calorie and nutritional information

---

######Introduction
The Healthy Eating application is a dynamic web application that users can utilize to keep track of the amount of calorie that they are consuming. This task is made more interesting by the fact that this application interacts with Facebook to link the user with all of their friends who also use the application for keeping track of calories. Furthermore, users can compete with their friends in order to determine who is superior in term of eating healthy.

######Final Application

To create the actual application Google Web Toolkit was used (GWT). Using this framework made it easier to implement design patterns and use Jave and Eclipse to create the product. Furthermore, the framework ensured the presence of cross browser compatibility and other non-functional ‘nice to have’ features. 

The application had some notable technical complexity. It utilized:

-  Remote Procedure to communicate with MySQL database
-  BCrypt framework for login password hashing 
-  Facebook API
-  Google Web Toolkit Visualizations API 
-  Google Web Tookit Framework

Some screenshots of the application are seen below:

<figure>
	<div class="web">
	<img src="/images/work/Login.png" alt="Screenshot of app home page">
	</div>
	<figurecaption>Secure login for the application</figurecaption>
</figure> 

<figure>
	<div class="web">
	<img src="/images/work/FoodEntry.png" alt="Screenshot of app home page">
	</div>
	<figurecaption>Food Log page of the application</figurecaption>
</figure> 

<figure>
	<div class="web">
	<img src="/images/work/FoodEntry2.png" alt="Screenshot of app home page">
	</div>
	<figurecaption>User entering a new food item</figurecaption>
</figure> 


######Proof of Concept

In order to see if there was interest in the application's services a sample application that provided the very basic simplified features was created. Java Servlets, Java Server Pages and MySql were used. The pertinent screenshots are shown below:

<figure>
	<div class="web">
	<img src="/images/work/HealthyEating1.jpg" alt="Screenshot of app home page">
	</div>
	<figurecaption>Home page of the application</figurecaption>
</figure> 

<figure>
	<div class="web">	
	<img src="/images/work/HealthyEating2.jpg" alt="Screenshot of app">
	</div>
	<figurecaption>Enter a new record regarding their meal</figurecaption>
</figure> 
  
<figure>
	<div class="web">	
	<img src="/images/work/HealthyEating3.jpg" alt="Screenshot of app">
	</div>
	<figurecaption>View previous entries based on the year of choice</figurecaption>
</figure>   

<figure>
	<div class="web">	
	<img src="/images/work/HealthyEating4.jpg" alt="Screenshot of app">
	</div>
	<figurecaption>See the amount of calories consumed in graphical format</figurecaption>
</figure>   


Furthermore, the SQL database that was designed for this application was normalized to be in BCNF which gets rid of most function dependency redundencies. It should be noted that BCNF is a lossless decomposition however it does not guarentee preservation of depencies. Nevertheless, since the database for this application did turn out to be dependency preserving. Views were used for database queries and prepared statements were used when necessary.  
 
