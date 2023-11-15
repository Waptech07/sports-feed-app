import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="shadow-md w-1/3">
          <div className="md:flex bg-white py-4 md:px-10 px-7 items-center justify-between">
            <div className="">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <ul className="flex">
              <li>
                <NavLink to="/sports">SPORTS</NavLink>
              </li>
              <li>
                <NavLink to="/transfers">TRANSFERS</NavLink>
              </li>
              <li>
                <NavLink to="/news">NEWS</NavLink>
              </li>
              <li>
                <NavLink to="/competitions">COMPETITIONS</NavLink>
              </li>
              <li>
                <NavLink to="/team">TEAMS</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/live">
                  <span>LIVE-</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
