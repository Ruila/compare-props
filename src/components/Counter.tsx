import React, { useState } from "react"
import { Title } from "./Title"

export const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Title name="Demo Counter" />
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>CLick</button>
    </div>
  )
}
