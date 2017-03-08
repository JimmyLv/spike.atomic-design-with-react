import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/pages/App'
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
  module.hot.accept('./components/pages/App', () => {
    const NextApp = require('./components/pages/App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
