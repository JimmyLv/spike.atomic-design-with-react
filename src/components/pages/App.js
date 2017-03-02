import React, { Component } from 'react'
import styles from './App.css'

import { Header, Content, Footer } from '../organisms'

class App extends Component {
  render() {
    return (
      <div className={styles['app']}>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
