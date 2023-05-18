import React from "react";
import Button from "./Button";

const mySkills = [
  "REACT",
  "JAVASCRIPT",
  "TAILWIND",
  "JAVA",
  "CSS",
  "MONGO DB",
  "MUI",
  "GIT",
  "DOCKER",
  "POSTMAN",
];
const MySkills = () => {
  return (
    <div className="flex flex-wrap">
      {mySkills.map((curelem) => {
        return <Button name={curelem} />;
      })}
    </div>
  );
};

export default MySkills;
