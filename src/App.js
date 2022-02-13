import React from 'react'
import "./App.css";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Currency from './pages/Crypto-Status/Currency';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Token from './pages/token/Token';
import Docs from './pages/Docs/Docs';
import Contact from './pages/Contact/Contact';
import BuyToken from './pages/buyToken/BuyToken';
const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
      <Route  path = "/" element = {<Home />} />
      <Route  path = "/sipto" element = {<Home />} />
      <Route  path = "/token" element = {<Token />} />
      <Route  path = "/vaulet" element = {<BuyToken />} />
      <Route  path = "/status" element = {<Currency />} />
      <Route  path = "/docs" element = {<Docs />} />
      <Route  path = "/contact" element = {<Contact />} />
      </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App ;