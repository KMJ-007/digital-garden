---
title: "Javascript"
date: 2022-09-16
tags:
- javascript
---

You can merge two complex or simple objects using loadlodash/merge

```javascript
// Requiring the lodash library
const _ = require("lodash");

// Using the _.merge() method
console.log(
_.merge({ cpp: "12" }, { java: "23" },
		{ python:"35" })
);

// When two keys are the same
console.log(
_.merge({ cpp: "12" }, { cpp: "23" },
		{ java: "23" }, { python:"35" })
);

// When more than one object is the same
console.log(
_.merge({ cpp: "12" }, { cpp: "12" },
		{ java: "23" }, { python:"35" })
);

```
```output
{cpp: '12', java: '23', python: '35'}
{cpp: '23', java: '23', python: '35'}
{cpp: '12', java: '23', python: '35'}
```


If you want to execute node script without explicitly calling node, we can specify the path,
this method is uesd by webpack, tsc, and eslint

to that you have to add Shebang and path, so it will automatically detect and exucate the script, 

in this case we just have to give the path:

```bash
#!/usr/bin/env node
```