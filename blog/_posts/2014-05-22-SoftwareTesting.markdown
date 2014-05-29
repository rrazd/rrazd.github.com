---
layout: linkage
category: blog
title: "Software Testing"
author: Rashna Razdan
introduction: A look at the static testing tool I worked on.
keywords: testing, software, university, coverity, waterloo
description: Automated Static testing tool  
recommended: true
comments: true
forSort: Learning
tags:
- learning
---

######First of all you should understand the following:  
Fault potentially leads to Error which potentially leads to Failure<br/> 

A fault is an incorrect line of code aka the pesky 'bug.' 
This will not necessarily cause a compile time error, but the code line can be 'wrong' nonetheless.<br/> 
The most common example of this is found in loop initialization and bounds. 
For example, the code below is supposed to find the number of even integers in an array [4,2,1,5,8] but we have a bug in our for loop 
because we are intitiallizing the loop iteration variable i to 1 instead of 0. Clearly, i must be 0 in order to find the number of even 
numbers within the array arr:

```javascript
int[] arr = {4,2,1,5,8};
int count = 0;
for(int i = 1; i < arr.length; i++){  <<< bug in this line
	if(arr[i]%2 == 0){
		count++;
	}
}
System.out.println(count);
```
<br/>
In this case the fault cases an error because we get an incorrect sequence of states. The first incorrect state is shown below.
The actual state are the state thats that the program will encounter if it is run with the buggy code. The expected state are the states
that will be seen with the bug-free version of the program.<br/>
Actual: S1 = {i = 1, arr = {4,2,1,5,8}, count = 0, PC = at line where initialization of loop occurs}<br/>
Expected: S1 = {i = 0, arr = {4,2,1,5,8}, count = 0, PC = at line where initialization of loop occurs}<br/>

You will notice that I have included the Program Counter (PC) as part of the state of the program. PC points to the address of the instruction 
being executed (this usually can be thought of as a particular line of code within the program).
This is important information since an error can be due to the PC pointing to different lines of code. For instance, the actual PC might 
point to the end of a for-loop whereas the expected PC might point to the first line within the for-loop. <br/>
It is also important to note that in the for loop the PC first points to the initialization, then the comparison; based on if the result is T/F
the loop is entered. Upon completion of the loop's code block, PC points to the update portion of the for-loop and then performs the boolean check again. 
This is much more easily expressed via a control flow graph of the for-loop.
The following graph depicts this for-loop code:  <br/><br/>

```java
for(int i = 0; i < array1.length(); i++){
  System.out.print("Hi");
}
System.out.print("bye");
```

<figure>
  <img src="/images/blog/cfg.png" alt="control-flow-graph">
</figure> 

The aforesaid error leads to a failure in this example because the error can be externally observed due to the println(count) statement.

<table>
   <thead>
      <tr>
         <th>Static testing tool: Coverity</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            - Code is not run<br/>
         	  - Do not need runtime environment to perform testing, just need the source code file(s) <br/>
          	- False positives<br/>
            - Infers bugs solely based on statistics (probability), thus does not take into account any 
              domain knowledge
         </td>
      </tr>
   </tbody>
</table>
<table>
   <thead>
      <tr>
         <th>Dynamic testing tool: DAIKON</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            - Code is run<br/>
            - Need runtime environment set up i.e. if testing iphone app then need to have xCode installed <br/>
            - No false positives, the bug causes disruption/unexpected behaviour while application is running, thus know for certain that there is a bug
            <br/>
         </td>
      </tr>
   </tbody>
</table>
<br/>

######The task at hand:  
I was tasked with creating an automated static analysis tool. The static analyzer learns what pairs of functions are usually called together. I then use these likely-invariants to automatically detect software bugs. In order to do this call graphs of the code were generated via LLVM’s opt tool. The output of the opt tool (the callgraph) was redirected to an intermediate file. This had to be done because by default opt prints the call graph to stderr (represented by 2 in the script below). Moreover, opt was printing some extra content to stdout, this had to be sent to the dark recesses of /dev/null. In the end I had the following bash script (executible file):

```bash
#!/bin/bash
opt -print-callgraph $1 2>intermediateFile 1>/dev/null
#more code after this point
```

A portion of a generated callgraph can be seen below:

```javascript
Call graph node <<null function>><<0x16d7abb0>>  #uses=0
  CS<0x0> calls function 'ap_get_server_built'
  CS<0x0> calls function 'ap_get_server_built'
  CS<0x0> calls function 'main'
  CS<0x0> calls function 'llvm.dbg.declare'
  CS<0x0> calls function 'strcmp'
  CS<0x0> calls function 'strcasecmp'
  CS<0x0> calls function 'strncasecmp'
  CS<0x0> calls function 'printf'
  CS<0x0> calls function 'suck_in_APR'
  CS<0x0> calls function 'strlen'
  CS<0x0> calls function 'exit'
  CS<0x0> calls function 'fprintf'

  //more code here

  Call graph node for function: 'default_build_command'<<0x1a349ee0>>  #uses=1
  CS<0x19cc2ce8> calls function 'strchr'
  CS<0x19cc4958> calls external node
  CS<0x19cc5330> calls external node
  CS<0x19cc54e0> calls function 'ap_unescape_url'
  CS<0x19cc5698> calls external node

  //more code here
```

Since this was to be a static analysis tool, likely invariants had to be deduced. These invariants were derived by parsing the call graphs of a given java program. The static analyzer program looked at support and confidence metrics in order to determine if a bug was present or not. <br/>
By definition support is the number of times  a function is seen in the callgraph (support({A})) or a pair of function appears together support({A,B}). Confidence is the likelihood that the second functions appears given that the first function is present. 

For instance support({A}) is 4 and support({A,B}) is 3, where A and B are function calls. We define confidence as support({A,B}) / support({A}) as confidence ({A,B}, {A}), which is 3/4.

Certain threshold values for support and confidence were hard coded in the program. If this threshold was surpassed within a function then a bug was present. A sample output of the program can be seen below:

```javascript
//sample output
bug: A in scope2, pair: (A, B), support: 3, confidence: 75.00%
bug: A in scope3, pair: (A, D), support: 3, confidence: 75.00%
```  

The code involved hash tables galore and can be seen on my github. The implementation involved adding each function that was called in the program as a key to the hashtable. Then if we saw that function A() and B() were called within the code block of function C() then function B() is added to the hashset which was in turn the value for the A() key. The callgraphs that were tested were quite large: up to 20k nodes and 60k edges. The program was quite fast for these sizes (1483119000 ns). 

Some of the hashtables used can be seen below:

```javascript
HashMap<Integer, HashSet<Integer>> statistics = new HashMap<Integer,HashSet<Integer>>();
HashMap<String, Integer> mappingTable = new HashMap<String, Integer>();
HashMap<Integer, String> mappingTableMapBack = new HashMap<Integer, String>();
```

Some things that helped with the performance:<br/>
1) Avoid string comparison. Use some kind of ID instead.<br/>
2) Avoid using strings as keys in hash tables. Use some kind of ID instead.<br/>
3) In a nested loop, prune an iteration in the outer loop is more beneficial than in the inner loop.<br/>

Finally Coverity was used to make sure that the static analyzer code was bug free. No notable bugs were detected. The output of Coverity can be seen below. 
<figure>
	<img src="/images/blog/coverityAnlysis.png" alt="coverity">
	<figurecaption>Coverity is a great static analysis tool</figurecaption>
</figure> 

All in all, this was a great project to learn about static testing tools as well as getting a chance to play with Coverity. 

