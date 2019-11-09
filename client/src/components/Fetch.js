import React, { Component } from 'react'
import axios from 'axios'

export class Fetch extends Component {
    state = { players: "" }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
            .then(response => this.setState({ players: response.data }),
                (_ => console.log(this.state.players))
            )
            .catch(error => console.error(error))

    }
    render() {
        return (
            <div>
                {this.state.players && this.state.players.map(_ => <div key={_.name}>{_.name}</div>)}
            </div>
        )
    }
}


