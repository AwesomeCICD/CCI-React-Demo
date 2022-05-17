import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Button, Typography } from '@material-ui/core';

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
      <Header />
      <div className="body">
        {click ? (
          <Typography variant="h2" gutterBottom>
            Thanks for clicking
          </Typography>
        ) : (
          <Typography variant="h2" gutterBottom>
            What a cool app
          </Typography>
        )}
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            let clickedStatus = hasClicked(click);
            setClick(clickedStatus);
          }}
        >
          Click Me
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
