import React, { Component } from 'react'

class Canvas extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        let table = this.props.table
        let amplitude = this.props.amplitude

        let pathsArray = []
        for (let i = 0; i < amplitude; i++) {
            pathsArray.push(
                <path 
                    key={i}
                    d={`
                        M${1.5 + Math.cos(2*Math.PI/amplitude*i)} ${1.5 + Math.sin(2*Math.PI/amplitude*i)} 
                        L${1.5 + Math.cos(2*Math.PI/amplitude*i*table)} ${1.5 + Math.sin(2*Math.PI/amplitude*i*table)}
                    `} 
                    stroke="black" 
                    strokeWidth="0.002" 
                />
            )
        }



        return (
            <svg id='Canvas' viewBox="0 0 3 3">
                {/* <circle cx="1.5" cy="1.5" r="1" stroke="black" stroke-width="0.005" fill="white" /> */}
                {pathsArray}
            </svg>
        )
    }
}

export default Canvas