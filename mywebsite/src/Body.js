import React from "react";
import { Link, Outlet } from "react-router-dom";
import { projectData } from "./ProjectsData";

const Body = () => {
  console.log(projectData);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Body;
