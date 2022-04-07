import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Error404 from './components/Error404';
import OrderNowBtn from './components/OrderNowBtn';

function App() {
  return (
    <div className="App">
    
      <Router>
      <div id = "navbar">
      <div className = "navbarLinks"> 
        <Link className = "homeNavbarBtn" to="/">Home</Link>
        <Link className = "prodNavbarBtn" to="/products">Products</Link>
        <Link className = "aboutNavbarBtn" to="/about">About</Link>
        <Link className = "reviewsNavbarBtn" to="/reviews">Reviews</Link>
        <Link className = "contactNavbarBtn" to="/contact">Contact</Link>
      <OrderNowBtn />
      </div>
      </div>

        <Routes>
          <Route path = "/" index element = {<Home />}/>
          <Route path = "products" element = {<Products />}/>
          <Route path = "about" element = {<About />}/>
          <Route path = "reviews" element = {<Reviews />}/>
          <Route path = "contact" element = {<Contact />}/>
          <Route path = "*" element = {<Error404 />}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
