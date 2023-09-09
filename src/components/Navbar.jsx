import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <ul className="d-flex gap-3">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/online-course"}>Online Courses</Link>
          </li>
          <li>
            <Link to={"/admission"}>Admission</Link>
          </li>
          <li>
            <Link to={"/news"}>News</Link>
          </li>
          <li>
            <Link to={"/user-profile"}>Profile</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Navbar