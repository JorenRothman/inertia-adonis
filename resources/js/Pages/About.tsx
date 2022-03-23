import { SubmitHandler, useForm } from 'react-hook-form'

import { Link } from '@inertiajs/inertia-react'

interface IFormInput {
  username: string
  email: string
  password: number
}

const About = (props, response, page) => {
  console.log(props, response, page)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch('/user', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <div>
      <Link href="/test">Test</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" {...register('username', { required: true })} type="text" />
        {errors.username && <span>This field is required</span>}
        <input defaultValue="" {...register('email', { required: true })} type="enail" />
        {errors.email && <span>This field is required</span>}
        <input defaultValue="" {...register('password', { required: true })} type="password" />
        {errors.password && <span>This field is required</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

// All pages need to be exported as default
export default About
