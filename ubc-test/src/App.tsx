import React from 'react';
import './main.scss';
import Header from './components/Headers/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="container">
      <Header/>
        <Home/>
    </div>
  );
}

export default App;
