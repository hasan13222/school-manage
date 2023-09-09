import React from "react";
import { images } from "../../assets";
import SectionHead from "../../components/SectionHead";
import "./Teachers.css";

const Teachers = () => {
  return (
    <div className="full-container teachers">
      <div className="fix-container teachers__section">
        <SectionHead
          title={`Our Experienced Teachers`}
          description={`Considering desire as primary motivation for the generation of narratives is a useful concept.`}
        />
        <div className="teachers__section__items d-flex gap-2">
          <div className="teachers__section__items__item">
            <div className="img_wrapper">
              <img src={images.teacher1} alt="teacher" />
            </div>
            <h3>Adam Gilly</h3>
            <small>Physics Teacher</small>
          </div>
          <div className="teachers__section__items__item">
            <div className="img_wrapper">
              <img src={images.teacher2} alt="teacher" />
            </div>
            <h3>Habel Tolly</h3>
            <small>Arts Teacher</small>
          </div>
          <div className="teachers__section__items__item">
            <div className="img_wrapper">
                    <img src={images.teacher3} alt="teacher" />
                </div>
                <h3>Kabil Hilly</h3>
                <small>Accounts Teacher</small>
          </div>
          <div className="teachers__section__items__item">
            <div className="img_wrapper">
                    <img src={images.teacher4} alt="teacher" />
                </div>
                <h3>Roger Binny</h3>
                <small>History Teacher</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
