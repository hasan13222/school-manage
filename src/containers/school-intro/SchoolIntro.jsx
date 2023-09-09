import React from "react";
import { images } from "../../assets";
import "./SchoolIntro.css";
import SectionHead from "../../components/SectionHead";

const SchoolIntro = () => {
  return (
    <div className="full-container school-intro">
      <div className="fix-container school-intro__section">
        <SectionHead
        title={`MCH National School`}
        description={`Tradition Rich School established in 1972 taking motto of Knowledge is
        power`}
        />
        <div className="intro">
          <img src={images.intro} alt="school intro" />
        </div>
      </div>
    </div>
  );
};

export default SchoolIntro;
