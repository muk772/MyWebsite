import React from "react";
import { Link, Outlet } from "react-router-dom";
import { projectData } from "./ProjectsData";
import { useSelector } from "react-redux";

const Body = () => {
  const isDark = useSelector((store) => store.darkMode.isDark);

  if (!isDark) {
    console.log(isDark);
    return <div className="bg-slate-800">hello</div>;
  }
  return <div>Hello</div>;
};

export default Body;
