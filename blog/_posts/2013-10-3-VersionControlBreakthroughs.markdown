---
layout: linkage
category: blog
title: "Insights Into Version Control Systems"
author: Rashna Razdan
comments: true
tags:
- -projects-
---

<p>This past term I have been working a lot with SVN. Some essential things to remember:</p>

You gotta check it out:

```javascript

svn checkout --username sstudent svn://linux024.student.cs.uwaterloo.ca:6002/RepoName/sstudent .

```

You gotta add first:	

```javascript

svn add *

```


You gotta commit early and often:

```javascript

svn commit -m "added motion detection"

```

You gotta check your status

```javascript

svn status

```

You gotta ignore the unimportant files so they don't bother you:<br/>
For instance, ignore all files that end in .class:

```javascript

svn propset svn:ignore "*.class" .

```

Ignore a particular folder:

```javascript

svn propset svn:ignore tmp .

```

Ignore  multiple items:

```javascript

create a file called svnignore.txt (vim svnignore.txt)

input all the files and directories you wanna ignore:  
tmp
obj
bin
*.o
*.lib
*.la

run the following command: svn propset svn:ignore -F svnignore.txt .
```

You may wanna delete files in the repo to match the deleted local files that were already added to svn:

```javascript

svn status | grep "^\!" | sed 's/^\! *//g' | xargs svn rm

```

Extra tips:<br/>
-Sometimes you have to navigate into the specific folder and perform the svn commands on the files that reside there in order for the operation to occur successfully. <br/>
-To check what the state the svn repo is, you can checkout your repo into a fresh location or use svn list:

```javascript

svn list svn list svn://linux024.student.cs.uwaterloo.ca:6002/testRepo/studentId

```






