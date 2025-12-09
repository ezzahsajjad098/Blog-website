import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styling/App.css";
import "../styling/index.css";
import "../styling/navbar.css";
import "../styling/home.css";
import "../styling/blogdetails.css";
import "../styling/create.css";
import "../styling/update.css";
import "../styling/bloglist.css";

import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import Create from "../components/Create.jsx";
import UpdateBlog from "../pages/Update.jsx";
import Blogdetails from "../components/Blogdetails.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<Blogdetails />} />
       <Route path="/update/:id" element={<UpdateBlog />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
