import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // console.log(projectData.projects);

  return (
    <div className="">
      {projectData.projects.map((curelem, index) => {
        return (
          <Link to={curelem.projectLink} key={index} target="_blank">
            <ProjectCard info={curelem} />
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
