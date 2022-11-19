---
title: "notes about typescript"
date: 2022-09-02
tags:
- typescript
---

>Every javascript is typescript, but every typescript is not javascript

![[./images/typescriptven.png]]

tsc(typescript compiler)

- [[tsconfig.json]]
- [[package.json]]

-   `.ts` files contain both type information and code that runs
-   `.js` files contain only code that runs
-   `.d.ts` files contain only type information



- you can assign return type to the function also
``` typescript
function(a:number,b:number):number{
// do something
}
```

- for optional Properties you can decalre them using ?
``` typescript
const carfuel? : number
```

by using optional you can leave without passing it, but if you use or pipe like this, you have must have to pass the varible
``` Typescript
const carfuel: number | undefined
```

- You can defined your own custom path in typescript to avoid ugly looking path strucutre

![[./images/Pasted image 20220913122015.png]]

you can configure paths in tsconfig.json


```javascript
"compilerOptions": {
        "baseUrl": "src", // This must be specified if "paths" is.
         ...
        "paths": {
            "@app/*": ["app/*"],
            "@config/*": ["app/_config/*"],
            "@environment/*": ["environments/*"],
            "@shared/*": ["app/_shared/*"],
            "@helpers/*": ["helpers/*"]
        },
        ...
```

