import React from "react";
import { images } from "../../assets";
import SectionHead from "../../components/SectionHead";
import { achievements } from "../../constants/achievements";
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="full-container achievement">
      <div className="fix-container d-flex spb achievement__section">
        <div className="achievement__section__left achievement__section__item">
          <SectionHead
            title={`ACHEIVEMENTS`}
            description={`A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart like mine.`}
          />
          <div className="img_wrapper">
            <img src={images.achievement} alt="achievement" />
          </div>
        </div>
        <div className="achievement__section__right d-flex gap-3 achievement__section__item">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="d-flex fxdc achievement_item gap-2">
              {achievement.thumbnail}
              <span className="number">{achievement.number}</span>
              <div className="bar"></div>
              <span className="title">{achievement.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
