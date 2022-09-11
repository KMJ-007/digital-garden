---
title: "Next.js"
date: 2022-09-11
tags:
- next.js
---



- For dynamic routing you can use formate like this [id].js
 to access it you can follow the below code snipeet:
 pages directory : pages/blog/[id].js :
 
```Javascript
import { useRouter } from 'next/router';

export default () => {

const router = useRouter()

return (
<>

<h1> Blog post</h1>

<p>Post id: {router.query.id}</p>
</>
)
}

```

- use Link built in fro Next js, wherever it is possible, because it prefetches the data
```Javascript
import Link from 'next/link';

export default ()=>{
<Link href='/a-link' prefetch={false}>
<CustomeComponent> // image,text, logo
</Link>
}

```

- you can prefetch the url also in adavance
```Javascript
import { useRouter } from 'next/router'
import {useEffect} from 'react'
export default ()=>{
	const router = useRouter()
	
	useEffect(() => {
	 router.prefetch('/login') 
	 })
}

```

- getInitialProps :
