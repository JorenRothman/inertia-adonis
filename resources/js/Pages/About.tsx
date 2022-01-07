import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import style from './about.module.css'

const About = () => {
  return (
    <div>
      <Link href="/">Counter</Link>
      <h1 className={style.title}>Hello From About</h1>
    </div>
  )
}

// All pages need to be exported as default
export default About
