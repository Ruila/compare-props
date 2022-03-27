<div align="center">
  <h1>
   🚀
    <br />
    compare-props
    <br />
    <br />
  </h1>
  <br />
  <br />
  <pre>npm i <a href="https://www.npmjs.com/package/compare-props">compare-props</a></pre>
Or
<br>
<pre>yarn add <a href="https://www.npmjs.com/package/compare-props">compare-props</a></pre>
  <br />
  <br />
  <br />
</div>

Checking if props change with React.memo in React components.<br><br>
Test Data: <a href="https://github.com/Ruila/compare-props/blob/main/src/core/__tests__/compareProps.spec.ts">link</a>

## Usage

```jsx
import React from "react"
import { compareProps } from "compare-props"

type DemoProps = {
  name: string,
}

export const Demo: React.FunctionComponent<DemoProps> = React.memo(
  ({ name }: DemoProps) => {
    return <div>Title: {name}</div>
  },
  compareProps
)
```
