import React, { Component } from 'react'

import './Main.css'

import Canvas from './MainChilds/Canvas'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Main">
                <header>
                    <h1>Times Tables</h1>
                    <p>Kharoh Family Science dynamic Times Tables diagram visualization</p>
                </header>
                <Canvas table={this.props.table} numberOfLines={this.props.numberOfLines} />
            </div>
        )
    }
}

export default Main