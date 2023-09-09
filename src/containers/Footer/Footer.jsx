import React from "react";
import { Link } from 'react-router-dom';
import SocialLinks from "../../components/SocialLinks";
import { FaAngleUp } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="full-container footer">
      <div className="fix-container footer__section">
        <div  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className="go_to_top">
          <div className="icon">
            <FaAngleUp />
          </div>
        </div>
        <div className="footer__section__top d-flex spb">
          <div className="address">
            <h3>Address</h3>
            <p>Level-4, 34, Rd Park, Miami, WS</p>
            <p>Email: Web@mch-school.Com</p>
            <p>Hotline: 01322810882</p>
            <p>Available: Mon - Sat, 10:00 AM To 7:00 PM</p>
          </div>
          <div className="links">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About Us</Link>
              </li>
              <li>
                <Link to={'/gallery'}>Gallery</Link>
              </li>
              <li>
                <Link to={"/news"}>News</Link>
              </li>
            </ul>
          </div>
          <div className="social_links">
            <h3>Follow US</h3>
            <SocialLinks />
          </div>
        </div>
        <div className="footer__section__btm">
          <p className="copyright">
            &copy; All rights reserved by mch school authority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
