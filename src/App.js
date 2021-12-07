import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import Explorer from "./screen/Explorer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus*" element={<AboutUs />} />
          <Route exact path="/contactus*" element={<ContactUs />} />
          <Route exact path="/explorer*" element={<Explorer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
