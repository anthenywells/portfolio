import React from "react";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
