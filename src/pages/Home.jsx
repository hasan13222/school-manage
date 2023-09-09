import React from "react";
import Achievements from "../containers/Achievements/Achievements";
import Courses from "../containers/Courses/Courses";
import Hero from "../containers/Hero/Hero";
import Teachers from "../containers/Teachers/Teachers";
import SchoolIntro from "../containers/school-intro/SchoolIntro";

const Home = () => {
  return (
    <>
      <Hero />
      <SchoolIntro />
      <Courses />
      <Achievements />
      <Teachers />
    </>
  );
};

export default Home;
