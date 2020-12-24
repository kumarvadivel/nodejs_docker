
import React from 'react';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import './app.css';
export default function App() {
  return (
    <div className="backdrop">
      <Header/>
      <div className="pg-hm">
      <Intro/>
      </div>
      
    </div>
  )
}

