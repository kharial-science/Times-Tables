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
                    <div className="input-container"></div>
                </div>
            </div>
        )
    }
}

export default Settings