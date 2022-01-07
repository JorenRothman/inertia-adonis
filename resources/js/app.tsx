import '../css/app.css'

import { InertiaApp } from '@inertiajs/inertia-react'
import LoadingScreen from './Components/LoadingScreen'
import React from 'react'
import { render } from 'react-dom'

const el = document.getElementById('app')

if (el !== null && el.dataset?.page) {
  render(
    <InertiaApp
      // Pass props from the server down to the client app
      initialPage={JSON.parse(el.dataset.page)}
      initialComponent={LoadingScreen}
      // Dynamically load the required page component
      resolveComponent={(name) => import(`./Pages/${name}`).then((module) => module.default)}
    />,
    el
  )
}
