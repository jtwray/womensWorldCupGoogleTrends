import React, { Component } from 'react'
import axios from 'axios'
import {Players, PlayersList} from '../hooks/useSpring'

export class Fetch extends Component {
    state = { players: "" }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
            .then(response => this.setState({ players: response.data }),
                (_ => console.log(this.state.players))
            )
            .catch(error => console.error(error))

    }
  logPlayers=()=> {this.state.players && console.log(this.state.players)}
    render() {
        return (
            <div>
              {this.logPlayers()}
           <PlayersList cards={this.state.players}/>
            </div>
        )
    }
}


