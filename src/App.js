import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Frameworks from './components/Frameworks';
import Awards from './components/Awards';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Frameworks />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;