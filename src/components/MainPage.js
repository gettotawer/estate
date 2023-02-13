import React from 'react';
import Header from './Header';
import Main from './Main';
import About from './About';
import Team from './Team';
import Footer from './Footer';

function MainPage() {
  return (
    <div className='main-page'>
        <Header />
        <Main />
        <About />
        <Team />
        <Footer/>
    </div>
  );
}

export default MainPage;