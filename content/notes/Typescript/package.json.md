---
title: "packge.json"
date: 2022-09-02
---



```packge.josn

{

"name": "project name",

"license": "NOLICENSE",

"devDependencies": {

"typescript": "^4.3.2"

},

"scripts": {

"dev": "tsc --watch --preserveWatchOutput"

}

}
```
- --watch is like nodemon for typescript
- --preserveWatchOutput doesn't clear your old outpu from the console
