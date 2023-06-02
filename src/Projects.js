import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mt-7">
      {projectData.projects.map((curelem, index) => {
        return (
          <div className="mx-5 mb-16">
            <ProjectCard info={curelem} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
