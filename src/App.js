import React from 'react';
import Home from './components/Home';
import { Router } from '@reach/router';
import Landing from './components/Landing';
import TBD from './components/TBD';


function App() {

  return (
    <Router>
      <Home path="/" />
      <TBD path="about" />
      <TBD path="about#contactinfo" />
      <TBD path="instafeed" />
      <Landing path="/projects" />
    </Router>
  
  );
}

export default App;
