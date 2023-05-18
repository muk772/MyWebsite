import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between shadow-lg bg-slate-300 p-5">
        <div>
          <h2 className="font-bold">Mukund Madhav</h2>
        </div>
        <div>
          <ul className="flex px-10">
            <Link to="/">
              {" "}
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
