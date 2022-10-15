import React from 'react';
// import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import About from './About';
import Team from './Team';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <About />
      <Team />
    </div>
  );
}

export default App;
