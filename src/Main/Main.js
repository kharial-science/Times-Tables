import React, { Component } from 'react'

import './Main.css'

import Canvas from './MainChilds/Canvas'

class Main extends Component {
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
            <div id="Main">
                <header>
                    <h1>Times Tables</h1>
                    <p>Here is the kfs Times Tables diagram visualization</p>
                </header>
                <Canvas table={this.state.table} amplitude={256} />
            </div>
        )
    }
}

export default Main