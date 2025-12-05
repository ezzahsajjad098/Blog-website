import React from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/login">Login </Link>
        <Link to="/create">Create </Link>
      </div>
    </nav>
  );
};

export default Navbar;






