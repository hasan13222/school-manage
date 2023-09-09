import React from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../constants/courses";
import "./Courses.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionHead from "../../components/SectionHead";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <div className="full-container courses">
      <div className="fix-container courses__section">
        <SectionHead
          title={`OUR MAIN COURSES`}
          description={`All divisions students are welcome here`}
        />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={false}
          pagination={false}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper courseSwiper"
        >
          <SwiperSlide>
            <div className="d-flex courses__section__items gap-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="d-flex courses__section__item gap-1"
                >
                  <img src={course.thumbnail} alt="banner" />
                  <div className="course_desc">
                    <h4>{course.type}</h4>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <button>Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="d-flex courses__section__items gap-3">
              {courses.map((course) => (
                <div className="d-flex courses__section__item gap-1">
                  <img src={course.thumbnail} alt="banner" />
                  <div className="course_desc">
                    <h4>{course.type}</h4>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <button onClick={() => navigate('/admission')}>Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={false}
          pagination={false}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper courseSwiperForMobile"
        >
          <div className="courses__section__items">
            {courses.map((course) => (
              <SwiperSlide>
                <div
                  key={course.id}
                  className="d-flex courses__section__item gap-1"
                >
                  <img src={course.thumbnail} alt="banner" />
                  <div className="course_desc">
                    <h4>{course.type}</h4>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <button>Apply Now</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Courses;
