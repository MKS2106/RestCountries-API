import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage'
import CountryDetailPage from './pages/CountryDetailPage'

function App() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center  mb-5"> REST Countries API</h1>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/country/:countryname" element={<CountryDetailPage/>}/>
      </Routes>


      
      <footer className="text-center font-semibold py-4">
        <p>
          Copyright &#169; 2025 RecipeDicoveryApp: Developed by- Manasa
          Madhihalli Swamy
        </p>
      </footer>
    </>
  );
}

export default App;
