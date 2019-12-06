import React, { Component } from 'react'

import './App.css'

import Main from './Main/Main'
import Settings from './Settings/Settings'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: 0,
      numberOfLines: 256,
      increaseSpeed: 0.01,
    }

    this.handleRenderClick = this.handleRenderClick.bind(this)
    this.increaseTable = this.increaseTable.bind(this)
  }

  increaseTable(increaseSpeed) {
    setTimeout(() => {
        this.setState({table: this.state.table + increaseSpeed})
        this.increaseTable(this.state.increaseSpeed)
    }, 10)
  }

  componentDidMount() {
    this.increaseTable(this.state.increaseSpeed)
  }

  handleRenderClick() {
    const inputIDs = {"table-input": "table", "numberoflines-input": "numberOfLines", "increasespeed-input": "increaseSpeed"}
    for (const key in inputIDs) {
      if (document.getElementById(key).value) {
        const newState = {}
        newState[inputIDs[key]] = parseFloat(document.getElementById(key).value, 10)
        this.setState({...newState}, () => console.log(this.state))
      }
    }
  }

  render() {
    return (
      <div id="App">
        <Main {...this.state} />
        <Settings handleRenderClick={this.handleRenderClick} />
      </div>
    )
  }
}

export default App
