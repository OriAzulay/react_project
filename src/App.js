import React from 'react';

import { Blog, Footer, Possibility, WhatGPT3, Header , Features} from './container';
import { Article,Feature, Brand, Cta, Navbar } from './components';
import './App.css';


const App = () =>{
  return (
    <div className="App">
      <div className="gradient__bg"> 
      <Navbar />
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Possibility/>
      <Cta/>
      <Blog/>

    </div>
  )
}

export default App
