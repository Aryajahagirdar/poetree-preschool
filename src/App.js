import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import About from '../src/components/About';
import Programs from "../src/components/Programs"
import Gallery from "../src/components/Gallery";

function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}


export default App;
