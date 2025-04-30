import Header from './header.jsx';
import Hero from './hero.jsx';
import Footer from './footer.jsx';
import { BrowserRouter } from "react-router-dom";
import React from "react";

const app = ()=> {
  return (
    <>
      
      <BrowserRouter>
      <>
        <Header />
        <Hero />
        <Display />
        <Top_selling />
        <Footer />
      </>
      </BrowserRouter>
      
    </>
  );
}

export default app;