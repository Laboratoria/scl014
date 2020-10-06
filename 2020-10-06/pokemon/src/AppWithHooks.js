import React, { useEffect, useState } from 'react';
import './App.css';

const Pokemon = ({ pokemon }) => (
  <div>{pokemon.name}</div>
);

function App() {
  const [pokemones, setPokemones] = useState();
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('./data.json')
      .then(resp => resp.json())
      .then(({ pokemon }) => setPokemones(pokemon))
      .catch(console.error);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Submit!!!</button>
      </form>

      {!pokemones
        ? <div>Cargando...</div>
        : pokemones.map(pokemon => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))
      }
    </div>
  );
}

export default App;
