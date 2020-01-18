import React from 'react';
import TopNav from "./components/TopNav/TopNav"
import Hero from "./components/Hero/Hero"
import Resume from "./components/Resume/Resume"
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Hero/>
      <Resume/>
    </div>
  );
}

export default App;
