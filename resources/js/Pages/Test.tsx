import { Link } from '@inertiajs/inertia-react'
import style from './style.module.css'

const Test = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1 className={style.title}>Hi</h1>
    </div>
  )
}

// All pages need to be exported as default
export default Test
