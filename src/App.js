import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import AboutUs from "./screen/AboutUs";
import ContactUs from "./screen/ContactUs";
import Navbar from "./config/Navbar";
import Explorer from "./screen/Explorer";
import { ConvetionContextProvider } from "./util/ConventionContext";
import Profile from "./screen/Profile";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ConvetionContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </ConvetionContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
