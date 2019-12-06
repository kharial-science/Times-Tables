import React, { Component } from 'react'

import './Settings.css'

class Settings extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Settings">
                <header>
                    <h2>Settings</h2>
                    <p>Here you can change some settings as you want</p>
                </header>
                <div className="settings-pannel">
                    <div className="middle-column">
                        <div id="table-input-container" className="input-container">
                            <label>Table</label>
                            <input id="table-input"></input>
                        </div>
                        <div id="numberoflines-input-container" className="input-container">
                            <label>Number of Line</label>
                            <input id="numberoflines-input"></input>
                        </div>
                        <div id="increasespeed-input-container" className="input-container">
                            <label>Increasespeed</label>
                            <input id="increasespeed-input"></input>
                        </div>
                        <a href="#Main"><button className="render-button" onClick={() => this.props.handleRenderClick()}>render</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings