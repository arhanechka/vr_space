import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Booking from "./components/Bookings";
import VRGameList from "./components/VRGameList";
import Footer from "./components/Footer/footer";
import Advertisment from "./components/Advertisement/advertisement";
import { useNavigate, useLocation } from "react-router-dom";
 import Contacts from "./components/Contacts/contacts";
import "./App.css";

function App() {
  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <div className="App">
      <Header routeChange={routeChange} homepath='/' bookingpath='booking'/>
      <main>
        <Routes>
          <Route path="/vr_space" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<VRGameList />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Advertisment routeChange={routeChange} path='booking'/>
      </main>
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;
