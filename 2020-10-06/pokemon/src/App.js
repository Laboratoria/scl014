import React, { Component } from 'react';
import './App.css';

const Pokemon = ({ pokemon }) => (
  <div>{pokemon.name}</div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemones: undefined };
  }

  componentDidMount() {
    fetch('./data.json')
      .then(resp => resp.json())
      .then(({ pokemon }) => this.setState({ pokemones: pokemon }))
      .catch(console.error);
  }

  render() {
    const { pokemones } = this.state;
    return (
      <div className="App">
        {!pokemones
          ? <div>Cargando...</div>
          : pokemones.map(pokemon => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))
        }
      </div>
    );
  }
}

export default App;
