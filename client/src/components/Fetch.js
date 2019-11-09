import React, { Component } from 'react'
import axios from 'axios'

export class Fetch extends Component {
    state={}

    componentDidMount(){
        axios.get(`http://localhost:5000/api/players`)
            .then(response=>this.setState({players:response}))
            .then(_=>console.log(this.state.players))
            .catch(error=>console.error(error))
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


