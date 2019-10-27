import React, { Component } from 'react'

import './App.css'

import Canvas from './Canvas'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: 0
    }
    this.increaseTable = this.increaseTable.bind(this)
  }

  increaseTable(increaseSpeed) {
    setTimeout(() => {
      this.setState({table: this.state.table + increaseSpeed})
      this.increaseTable(increaseSpeed)
    }, 10)
  }

  componentDidMount() {
    this.increaseTable(0.01)
  }

  render() {
    return (
      <div id="App">
        <header>
          <h1>Times Tables</h1>
          <p>Here is the kfs Times Tables diagram visualization</p>
        </header>
        <Canvas table={this.state.table} amplitude={1000} />
      </div>
    )
  }
}

export default App
