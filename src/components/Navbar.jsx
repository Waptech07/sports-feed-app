import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div>
        <div className=" border-b-2 border-b-white w-full">
          <div className="md:flex bg-[#030E29] py-4 md:px-10 px-7 items-center justify-between h-[80px]">
            <div className="">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <div>
              <form>
                <input className="py-2 pl-3 pr-7 rounded-lg" type="search" name="search" placeholder="Search" />
              </form>
            </div>
            <ul className="flex text-white text-lg">
              <li className="mx-2">
                <NavLink to="/sports">SPORTS</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/transfers">TRANSFERS</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/news">NEWS</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/competitions">COMPETITIONS</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/team">TEAMS</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li className="mx-2 text-yellow-500">
                <NavLink to="/live">
                  <span>LIVE-</span>
                </NavLink>
              </li>
            </ul>
            <div>
              <a className="mx-2 rounded-lg text-white font-bold bg-[#1CEF8A] px-4 py-2">
                <NavLink to="/login">LOGIN</NavLink>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
