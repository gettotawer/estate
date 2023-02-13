import React from 'react';
import { Route, Routes, Switch } from "react-router-dom";
// import Header from './Header';
// import Main from './Main';
// import About from './About';
// import Team from './Team';
// import Footer from './Footer';
import NotFound from "./NotFound/NotFound"
import MainPage from './MainPage';
import MultiLink from './MultiLink';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/mylinks" element={<MultiLink/>}/>
      </Routes>
    </div>
  );
}

export default App;
