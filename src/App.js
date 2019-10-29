import React, { Component } from 'react'

import './App.css'

import Main from './Main/Main'
import Settings from './Settings/Settings'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="App">
        <Main />
        <Settings />
      </div>
    )
  }
}

export default App
