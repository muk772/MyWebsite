import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="">
      {projectData.projects.map((curelem, index) => {
        return <ProjectCard info={curelem} />;
      })}
    </div>
  );
};

export default Projects;
