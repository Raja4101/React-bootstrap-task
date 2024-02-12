import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import { About } from './components/About';
import { Top } from './components/Top';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FaArrowUp } from "react-icons/fa6";
import { useEffect } from 'react';

function App() {
  useEffect(()=> {
  },[])
  return (
    <div className="App">
      <div className='back-to-top' id='myBtn'>
      <FaArrowUp />
      </div>
      <section className='sticky-top'>
        <Top/>
      </section>
      <section id='home-sec'>
        <Home/>
      </section>
      <section id='about-sec'>
        <About/>
      </section>
      <section id='services-sec'>
        <Services/>
      </section>
      <section id='portfolio-sec'>
        <Portfolio/>
      </section>
      <section id='team-sec'>
        <Team/>
      </section>
      <section id='contact-sec'>
        <Contact/>
      </section>
      <section>
        <Footer/>
      </section>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
};

export default App;
