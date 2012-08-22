---
layout: post
title: Essay Space Filler
excerpt: For those times when you just need to fill up space on a long dull essay.
---
#Random Text Generation Application
<br/>

####Motivation

In third year Computer Engineering at the University of Waterloo I took a course called Probability Theory and Random Processes (ECE 316). The course
was by no means easy, but I found it to be immensely interesting and very useful in all applications of life. The course was taught by Professor Xie, 
an excellent professor. With knowledge about probability I became quite interested in the Markov model and its uses in natural language processing.
<br/>
I created an application called Essay Space Filler in C++, based on the Markov Model. My program always outputs the one character following the current
seed that has the highest probability. The way most Markov chains are implemented is, after every character that is output, it generates an entire 
probability distribution of possible characters and subsequently chooses one of them randomly, according to the probability distribution calculated. 
<br/>
The application source code along with more details regarding the development process can be found at my 
<a href="https://github.com/rrazd/EssaySpaceFiller">GitHub page.</a> 

