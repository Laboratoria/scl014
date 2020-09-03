import React, { useState } from 'react';
import './App.css';
import Page from '../Page';
import data from '../../data';

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <Page
        text={data[index].text}
        color={data[index].color}
        bgColor={data[index].bgColor}
        onClick={() => {
          setIndex(index === data.length - 1 ? 0 : index + 1);
        }}
      />
    </div>
  );
}

export default App;
