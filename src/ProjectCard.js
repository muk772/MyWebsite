import React from "react";

const ProjectCard = ({ info }) => {
  return (
    <div className="flex">
      <div className="shadow-lg bg-slate-200 mx-3 mt-3 rounded-lg w-1/4">
        <img
          className="w-full  p-5 rounded-lg h-72"
          alt="project image"
          src={info.projectImg}
        />
        <ul>
          <li className="font-bold m-2">{info.projectName}</li>
          {/* <li className="m-2">{info.projectDesc}</li> */}
        </ul>
      </div>
      <div className="mt-5 w-3/4">
        <h2>{info.projectDesc}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
