import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Heros from './Components/Heros';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Skill from './Components/Skill';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Heros />
      <Services />
      <Portfolio />
      <Contact />
      <Skill />
      <Footer />
    </div>
  );
};

export default App;
