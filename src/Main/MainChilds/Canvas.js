import React, { Component } from 'react'

class Canvas extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        let table = this.props.table
        let numberOfLines = this.props.numberOfLines

        // generer un array avec toutes les coordonnées des points, et puis récupérer simplement les coordonnées dans l'array au lieu de faire à chaque fois sin et cos
        // mais pas dans ce render car il se ferait recalculer à chaque actualisation de table, plutot à calculer dans le state

        let pathsArray = []
        for (let i = 0; i < numberOfLines; i++) {
            pathsArray.push(
                <path 
                    key={i}
                    d={`
                        M${1.5 + Math.cos(2*Math.PI/numberOfLines*i)} ${1.5 + Math.sin(2*Math.PI/numberOfLines*i)} 
                        L${1.5 + Math.cos(2*Math.PI/numberOfLines*i*table)} ${1.5 + Math.sin(2*Math.PI/numberOfLines*i*table)}
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