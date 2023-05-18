import React from "react";

const ProjectCard = ({ info }) => {
  return (
    <div className="shadow-lg bg-slate-200 mx-3 mt-3 rounded-lg">
      <img
        className="w-60 m-3 rounded-lg"
        alt="project image"
        src={info.projectImg}
      />
      <ul>
        <li className="font-bold m-2">{info.projectName}</li>
        <li className="m-2">{info.projectDesc}</li>
      </ul>
    </div>
  );
};

export default ProjectCard;
