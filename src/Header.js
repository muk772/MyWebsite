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
            {/* <li className="px-10 cursor-pointer" onClick={() => handleDark()}>
              Dark
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
