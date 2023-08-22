import logo from './assets/hands.avif';
import logo2 from './assets/logo.png';
import bg_img from './assets/bg_img1.avif';
import bg_img1 from './assets/bg_img2.avif';
import bg_img2 from './assets/logo1.avif';
import women from './assets/women.avif';

import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about'
import Contacts from './components/contacts';
import Booking from './components/Bookings';
import VRGameList from './components/VRGameList';
import { useNavigate, useLocation } from "react-router-dom";

import './App.css';



function App() {
  const location = useLocation();
  let currentLocation = location.pathname;
  console.log(currentLocation)

  const bgs = {
    "/vr_space": logo,
    "/": logo,
    "/about": women,
    "/contacts": bg_img,
    "/games": bg_img1,
    "/booking": bg_img2
  }

  const backgroundImage = {
    backgroundImage: `url(${bgs[currentLocation]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  }; 



  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path, {replace: true });
  };
  return (
    <div className="App">
      <header className="App-header">
      <div style={backgroundImage}>
        <img src={logo2} className="App-logo" alt="logo" onClick={routeChange}/>
      <Header/>

      <Routes>
      <Route path="/vr_space" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/games" element={<VRGameList />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
     
      </header>
      
      {/* <div className="App-header" >
      <div style={backgroundImage}>
        <Header/>
        <Booking/>
     </div>
     </div>
     <div className="App-header">
      <div style={backgroundImage}>
        <Header/>
        <VRGameList/>
     </div>
     </div>

     <div className="App-header">
      <div style={backgroundImage}>
        <Header/>
        <Contacts/>
     </div>
     </div> */}
    </div>
    
  );
}

export default App;
