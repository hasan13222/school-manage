// import images
import {FaGraduationCap} from 'react-icons/fa'
import {PiBooks} from 'react-icons/pi'
import {GiTeacher} from 'react-icons/gi'

import { images } from "../../assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "./Hero.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={images.banner1} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.banner2} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.banner3} alt="banner" />
        </SwiperSlide>
      </Swiper>

      <div className="full-container hero__foot">
        <div className="fix-container hero__foot__cards d-flex">
          <div className="hero__foot__cards__item">
            <div className="card-icon">
            <FaGraduationCap />
            </div>
            <div className="card-text">
              <h3>Scholarship Facility</h3>
              <p>
                We provide demandable scholarship facility to your desired
                institution
              </p>
            </div>
          </div>
          <div className="hero__foot__cards__item">
            <div className="card-icon">
                <PiBooks />
            </div>
            <div className="card-text">
              <h3>Books & Library</h3>
              <p>We provide unbelieveble capacity of books libray</p>
            </div>
          </div>
          <div className="hero__foot__cards__item">
            <div className="card-icon">
                <GiTeacher />
            </div>
            <div className="card-text">
              <h3>Certified Teachers</h3>
              <p>Our Teachers are Certified from world top University </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
