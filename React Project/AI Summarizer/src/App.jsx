import React from 'react';
import Hero from './components/hero';
import  Demo from './components/demo';
import './App.css';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
        <div className="app">
          <Demo />
          <Hero/>
        </div>
      </div>
    </main>
  );
};

export default App;
