import './App.css';
import { Footer } from './Componets/Footer';
import Navbar from './Componets/Navbar';
import AppointmentPage from './Page/AppointmentPage';
import HomePage from './Page/HomePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from './Page/ServicePage';
import ContactPage from './Page/ContactPage';
import AboutPage from './Page/AboutPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Appointment" element={<AppointmentPage />} ></Route >
          <Route path="/Service" element={<ServicePage />}></Route >
          <Route path="/Contact" element={<ContactPage />}></Route >
          <Route path="/About" element={<AboutPage   />}></Route >
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
