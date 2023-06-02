import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ info }) => {
  return (
    <>
      <div className="flex border shadow-gray-950 rounded-2xl p-8">
        <div className="shadow-lg bg-slate-200 mx-3 mt-3 rounded-lg w-1/4 ">
          <img
            className="w-full p-5 h-72"
            alt="project image"
            src={info.projectImg}
          />
          <ul className="px-6">
            <li className="font-bold m-2">{info.projectName}</li>
            <Link to={info.projectLink} target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded px-24 mt-10 mb-5">
                Go To Project
              </button>
            </Link>
          </ul>
        </div>

        <div className="mt-5 w-3/4 px-8">
          <h2>{info.projectDesc}</h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
