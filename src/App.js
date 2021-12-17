import React, { useState } from 'react';
import './App.css';

function hasClicked(x) {
  if (x === true) {
    return false;
  }
  return true;
}

function App() {
  const [click, setClick] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {click ? <p>Thanks for the opportunity!</p> : null}
        <button
          onClick={() => {
            let clickedStatus = hasClicked(click);
            setClick(clickedStatus);
          }}
        >
          Click me to add or remove text
        </button>
      </header>
    </div>
  );
}

export default App;
