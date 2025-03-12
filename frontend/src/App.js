import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import DestinationDetail from "./components/DestinationDetail";


export default function App() {
  return (
    
      <div className="App">
        
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/services" element={<Services/>}/>
          <Route path = "/contact" element={<Contact/>}/>
          <Route path="/destination/:city" element={<DestinationDetail />} />
        </Routes>
      </div>
    
  );
}

