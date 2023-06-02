import React from "react";
import Button from "./Button";

const mySkills = [
  "REACT",
  "REDUX",
  "JAVASCRIPT",
  "TAILWIND",
  "JAVA",
  "CSS",
  "HTML",
  "BOOTSTRAP",
  "MONGO DB",
  "MUI",
  "GIT",
  "DOCKER",
  "POSTMAN",
];
const MySkills = () => {
  return (
    <>
      <h2 className="font-bold text-2xl m-5">MY SKILLS</h2>
      <div className="flex flex-wrap">
        {mySkills.map((curelem, index) => {
          return <Button name={curelem} key={index} />;
        })}
      </div>
    </>
  );
};

export default MySkills;
