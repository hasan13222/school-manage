import React from 'react'
import { images } from '../../assets'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="full-container about">
      <div className="fix-container about_top d-flex spb aic gap-3">
        <div className="about_us_desc flex-1">
          <div className='about_us_desc__item'>
            <h3>Who We Are</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className='about_us_desc__item'>
            <h3>What We Do</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>
        </div>
        <div className="about_us_img flex-1">
          <img src={images.aboutUs} alt="about us" />
        </div>
      </div>
      <div className="fix-container about_btm d-flex spb gap-3">
        <div className="about_btm__item">
          <h3>Our History</h3>
          <p>
          Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theitry's snce simply dummy text of the printing.Phasellus enim libero, blandit vel sapien vita their.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="about_btm__item">
          <h3>Over 100 Facalties</h3>
          <p>
          Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theitry's snce simply dummy text of the printing.Phasellus enim libero, blandit vel sapien vita their.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="about_btm__item">
          <h3>We Have 15,000 Students</h3>
          <p>
          Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theitry's snce simply dummy text of the printing.Phasellus enim libero, blandit vel sapien vita their.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs