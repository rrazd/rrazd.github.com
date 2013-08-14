---
layout: linkage
title: Random Text Generator
thumbnail: /images/work/randomText_thumb.png
category: work
---

<h6>Motivation</h6>
In third year Computer Engineering at the University of Waterloo I took a course called Probability Theory and Random Processes 
(ECE 316). The course was by no means easy, but I found it to be immensely interesting and very useful in all applications of life. The course was taught by Professor Xie, an excellent professor. Equipped with theoretical knowledge about probability I became quite interested in the Markov model and its uses in natural language processing.


<h6>About the Application</h6>
I created an application called Essay Space Filler in C++, based on the Markov Model. This application generates 'random' constant number of characters, enough to pass as a short paragraph. I say 'random' but it isn't truly random. In fact the output is controlled by the programmer in my loose adaptation of the Markov model. My program always outputs the one character following the current seed that has the highest probability. The way most Markov chains are implemented is, after every character that is output, it generates an entire probability distribution of possible characters and subsequently chooses one of them randomly, according to the probability distribution calculated. 


<h6>Sample Input file:</h6> 
```html
Professor Dumbledore sent all the Gryffindors back to the Great Hall, where they were joined ten minutes later by the students from Hufflepuff, Ravenclaw, and Slytherin, who all looked extremely confused.
“The teachers and I need to conduct a thorough search of the castle,” Professor Dumbledore told them as Professors McGonagall and Flitwick closed all doors into the hall. “I’m afraid that, for your own safety, you will have to spend the night here. I want the prefects to stand guard over the entrances to the hall and I am leaving the Head Boy and Girl in charge. Any disturbance should be reported to me immediately,” he added to Percy, who was looking immensely proud and important.
```

<h6>Output at order 20 (My approximation of Markov model):</h6>
```html
Professor Dumbledore rofessor Dumbledore sofessor Dumbledore sefessor Dumbledore senessor Dumbledore sentssor Dumbledore sent sor Dumbledore sent aor Dumbledore sent alr Dumbledore sent all Dumbledore sent all Dumbledore sent all tumbledore sent all thmbledore sent all thebledore sent all the ledore sent all the Gedore sent all the Grdore sent all the Gryore sent all the Gryfre sent all the Gryffe sent all the Gryffi sent all the Gryffinsent all the Gryffindent all the Gryffindont all the Gryffindort all the Gryffindors all the Gryffindors all the Gryffindors bll the Gryffindors bal the Gryffindors bac the Gryffindors backthe Gryffindors back he Gryffindors back te Gryffindors back to Gryffindors back to Gryffindors back to tryffindors back to thyffindors back to th
```
<h6>Output at order 10 (Following the Markov model precisely)</h6>
```html
Professor Dumbledore told them as Professor Dumbledore sent all the Gryffindors back to the Great Hall, where they were joined ten minutes later by the students from Hufflepuff, Ravenclaw, and Slytherin, who all looked extremely confused.
‚ÄúThe teachers and I need to conduct a thorough search of the castle,‚Äù Professor Dumbledore told them as Professor Dumbledore told them as Professors McGonagall and Flitwick closed all doors into the hall. ‚ÄúI‚Äôm afraid that, for your own safety, you will have to spend the night here. I want the prefects to stand guard over the entrances to the hall and I am leaving the Head Boy and Girl in charge. Any disturbance should be reported to me immediately,‚Äù he added to Percy, who was looking immensely proud and important.
``` 