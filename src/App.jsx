import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import NewArrival from './product-management/new-arrival';
import Shop from './product-management/shop';
import Footer from './components/footer';
//import ProductDetail from "./product-management/product-detail";
import Hero from './components/hero'; 

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    // Initialize animations
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<><Hero /></>} />
        <Route path="/new-arrivals" element={<NewArrival />} />
        <Route path="/shop" element={<Shop />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

