import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/pages/AppPage'
import './index.css'

import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/pages/AppPage', () => {
    const NextApp = require('./components/pages/AppPage').default
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
