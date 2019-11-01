import React from 'react';
import axios from 'axios';

// create a CLASS component that fetches from the api and displays the data

class Display extends React.Component {
    constructor() {
        super();
        this.state = {
           players: [] 
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
        .then(response => this.setState({ players: response.data }))
        .catch(error => console.log('Oh no!', error));
    }

    fetchPlayers() {
        return this.state.players.map((player, key) => {
            return (
                <div className='player-container' key={player.id}>
                    <h1>{player.name}</h1>
                    <p>Country: {player.country}</p>
                    <p>Searches: {player.searches}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <>
                {/* <button onClick={this.fetchPlayers()}>Meet the Players!</button> */}
                <div>{this.fetchPlayers()}</div>
            </>
        );
    }
}

export default Display;