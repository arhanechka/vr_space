import Header from "./components/Header/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Calendar from "./components/calendar";
import VRGameList from "./components/VRGameList";
import Footer from "./components/Footer/footer";
import Advertisment from "./components/Advertisement/advertisement";
import { useNavigate, useLocation } from "react-router-dom";
 import Contacts from "./components/Contacts/contacts";
import "./App.css";
import { useState } from "react";
import Booking from "./components/Bookings/Booking";
import bg from "./assets/bg.png"
import EventPlanning from "./components/EventPlanning/eventPlanning";

function App() {
  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path, { replace: true });
  };

  const location = useLocation();
  let currentLocation = location.pathname;

  let [booking, setBooking] = useState();

  const updateBooking = (players, date, slot)=> {
    console.log("in app")
    console.log(players)
    console.log(date)
    console.log(slot)
    setBooking({players, date, slot })
  }

  const fullscreenBg = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    width: '100%',
  height: 'auto', 
  backgroundImage: `url(${bg})`,
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }


  return (
<div className="App" >
  <div style={currentLocation === "/booking" ? fullscreenBg : null}>
    <div>
      <Header routeChange={routeChange} homepath='/' bookingpath='booking' isLogo={currentLocation!=="/date"} isBooking={currentLocation!=="/booking"}/>
      <main >
        <Routes>
          <Route path="/vr" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventPlanning />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<VRGameList />} />
          <Route path="/date" element={<Calendar routeChange={routeChange} path='/' updateBooking={updateBooking}/>} />
          <Route path="/booking" element={<Booking routeChange={routeChange} path='/' bookingDetails={booking}/>} />

        </Routes>
        {currentLocation === "/" &&
        <Advertisment routeChange={routeChange} path='booking'/> 
  }
      </main>
      <Contacts/>
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
