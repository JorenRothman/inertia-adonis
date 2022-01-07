import React, { useState } from 'react'

const Test = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      Current Count: {count} <button onClick={() => setCount(count + 1)}>Count +</button>
    </div>
  )
}

// All pages need to be exported as default
export default Test
