import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Header2, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Navbar2 } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar2 />
    <Header2 />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
