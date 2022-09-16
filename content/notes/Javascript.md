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
