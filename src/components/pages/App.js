import React, { Component } from 'react'
import styles from './App.css'

import PageTemplate from '../templates/PageTemplate'
import { Header, Content, Footer } from '../organisms'

class App extends Component {
  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <Content />
      </PageTemplate>
    )
  }
}

export default App
