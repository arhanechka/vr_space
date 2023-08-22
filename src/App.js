import logo from './assets/hands.avif';
import logo2 from './assets/logo4.png';
import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about'
import Contacts from './components/contacts';
import Booking from './components/Bookings';
import VRGameList from './components/VRGameList';

import './App.css';



function App() {

  const backgroundImage = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  }; 
  return (
    <div className="App">
      <header className="App-header">
      <div style={backgroundImage}>
        <img src={logo2} className="App-logo" alt="logo" />

      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/games" element={<VRGameList />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
     
      </header>
     
    </div>
  );
}

export default App;
