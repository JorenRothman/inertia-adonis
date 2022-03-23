import '../css/app.css'

import React from 'react'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { render } from 'react-dom'

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>,
      el
    )
  },
})
