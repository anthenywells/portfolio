import React from "react";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
// import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Resume />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
