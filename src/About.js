import React from "react";
import Introduction from "./Introduction";
import MySkills from "./MySkills";

const About = () => {
  return (
    <div className="grid grid-flow-col m-4 p-5">
      <div className="col-span-6  m-5">
        <Introduction />
      </div>
      <div className="col-span-6 m-5">
        <MySkills />
      </div>
    </div>
  );
};

export default About;
