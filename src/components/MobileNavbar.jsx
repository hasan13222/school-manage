import React from 'react'
import { FiMenu } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileNavbar = ({ toggle, setToggle }) => {
    return (
      <nav className="mobile_navbar">
        <div className="login-section mob_cart_sect d-flex aic gap-2">
              <div className="cart">
                <Link to={"/cart"}>
                  <BsCart3 />
                </Link>
              </div>
            </div>
        <FiMenu
          onClick={(e) => {
            e.stopPropagation();
            setToggle(!toggle);
          }}
        />
        <ul className={toggle ? "show" : "hide"}>
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
            <a href="/">Online Courses</a>
          </li>
          <li>
            <a href="/">Admission</a>
          </li>
          <li>
            <Link to={"/news"}>News</Link>
          </li>
          <li>
            <Link to={"/user-profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/signup"}>SignUp</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default MobileNavbar