import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDark } from "./Utils/DarkModeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleDark = () => {
    dispatch(toggleDark());
  };
  return (
    <>
      <div className="flex justify-between shadow-lg bg-slate-300 p-5">
        <div>
          <h2 className="font-bold">Mukund Madhav</h2>
        </div>
        <div>
          <ul className="flex px-10">
            <Link to="/">
              <li className="px-10">Home</li>
            </Link>

            <Link to="/about">
              <li className="px-10">About Me</li>
            </Link>

            <Link to="/projects">
              <li className="px-10">Projects</li>
            </Link>

            <Link to="/contact">
              <li className="px-10">Contacts</li>
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1a83cp-JpwCFajMzZVocyB1aB_0YWxioL/view?usp=sharing"
              download="Mukund_Madhav_Resume"
            >
              <li className="px-10 cursor-pointer">Download Resume</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
