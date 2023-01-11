import React from 'react'
import { useState } from 'react'

function HookCount() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>Hello</h1>
        <button onClick={()=>setCount(count+1)}>Click : {count}</button>
    </div>
  )
}

export default HookCount