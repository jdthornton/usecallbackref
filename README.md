# @jdthornton/usecallbackref

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/usecallbackref.svg)](https://www.npmjs.com/package/@jdthornton/usecallbackref)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/usecallbackref.svg)](https://www.npmjs.com/package/@jdthornton/usecallbackref)

React callback ref hook.

## Install

```
$ npm install @jdthornton/usecallbackref
```

## Usage

```js
import useCallbackRef from "@jdthornton/usecallbackref";

function App(){
  const ref = useCallbackRef(() => {
    console.log("It's a reference!")
  })

  useEffect(() => {
    ref.current();
  },[ref]);

  return null
}

//=> "It's a reference!"

```
