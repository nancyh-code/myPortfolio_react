import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
      <span className='tags top-tags'>&lt;body&gt;</span>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <span className='tags bottom-tags'>&lt;/body&gt;</span>
      <br />
      <span className='bottom-tag-html'>&lt;/html&gt;</span>
      <Footer />
    </>
  );
}

export default App;
