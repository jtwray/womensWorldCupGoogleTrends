import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Fetch } from './components/Fetch'

function App() {
  return (
    <div className="App ">
      <Navbar/>
     
  { !<Fetch/>?<code>Loading</code>:"" }
   
      <Fetch />
    </div>
  );
}

export default App;
