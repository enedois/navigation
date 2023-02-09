//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  //const [first, second] = useState(second);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [home,setHome] = useState(true);
  //var img1 = require('./images/car.jpg');

  return (
    <div>
      <h1>Navigation</h1>
      <Nav onShowAbout={() => {
        setShowAbout(!showAbout);
        setShowContact(false);
        setHome(false);
      }}
      
      onShowContact={()=>{ 
        setShowContact(!showContact);
        setShowAbout(false);
        setHome(false);
      }}

      setHome = {()=> {
        setHome(true);
      }}
      
      />

      <div className="content">
        {home && <Home/>}
        {showAbout && <About />}
        {showContact && <Contact/>}
      </div>

    </div>

  );
}

export default App;
