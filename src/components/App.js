import React from 'react';
// import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import About from './About';
import Team from './Team';
import Footer from './Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <About />
      <Team />
      <Footer/>
    </div>
  );
}

export default App;
