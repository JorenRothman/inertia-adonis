import React, { useState } from 'react'

import { Link } from '@inertiajs/inertia-react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Link href="about">About</Link>
      Current Count: {count} <button onClick={() => setCount(count + 1)}>Count +</button>
    </div>
  )
}

// All pages need to be exported as default
export default Counter
