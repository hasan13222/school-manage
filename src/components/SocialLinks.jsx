import React from 'react'
import { FaYoutube, FaLinkedinIn, FaPinterest, FaInstagram, FaFacebook, FaGooglePlus, FaTwitter,FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links d-flex aic gap-2_5">
            <FaWhatsapp />
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
            <FaPinterest />
            <FaGooglePlus />
            <FaTwitter />
          </div>
  )
}

export default SocialLinks