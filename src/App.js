import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus*" element={<AboutUs />} />
        <Route path="/contactus*" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
