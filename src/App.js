import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import LaddoosLogo from './images/laddoosLogo.JPG';


function App() {

  function showPosition(position){
    console.log("Latitude: " + position.coords.latitude +
    " and Longitude: " + position.coords.longitude); 
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div onLoad = {getLocation()} className="App">
      <Router>
      <div>
        <nav id = "navbar">
          <div className = "navbarItems">
            <Link className = "homeTab" to="/">Home</Link>
            <Link className = "productsTab" to="/products">Products</Link>
            <Link className = "aboutTab" to="/about">About Us</Link>
            <Link className = "contactTab" to="/contact">Contact Us</Link>
            <button>Order Now</button>
          </div>
        </nav>

        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
