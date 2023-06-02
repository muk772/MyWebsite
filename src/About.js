import React from "react";
import Introduction from "./Introduction";
import MySkills from "./MySkills";
import PortfolioLinks from "./PortfolioLinks";

const About = () => {
  return (
    <div className="grid grid-flow-col m-4 p-5">
      <div className="col-span-6  m-5">
        <Introduction />
      </div>
      <div className="col-span-6 m-5">
        <MySkills />
        <PortfolioLinks />
      </div>
    </div>
  );
};

export default About;
