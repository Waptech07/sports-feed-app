import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div>
        <div className="flex bg-[#030E29] py-4 md:px-7 px-7">
          <nav className="border-b-2 border-b-white w-full z-0 flex h-[80px] justify-between items-center mx-auto">
            <div className="">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <div>
              <form>
                <input
                  className="py-2 pl-3 pr-4 md:ml-6 rounded-lg"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
              </form>
            </div>
            <div
              class={
                isActive
                  ? "duration-500 lg:static absolute lg:min-h-fit min-h-[40vh] left-0 top-[-100%] lg:w-auto w-full flex items-center px-5"
                  : "duration-500 lg:static absolute lg:min-h-fit min-h-[40vh] left-0 top-[12%] lg:w-auto w-full flex items-center px-5"
              }
            >
              <ul className="flex lg:flex-row flex-col md:items-center text-white text-lg">
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
                <li className="mx-2 text-yellow-500 font-bold">
                  <NavLink to="/live">
                    <span>LIVE-</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="/login"
                className="mx-2 rounded-lg text-white font-bold bg-[#1CEF8A] px-4 py-2"
              >
                <NavLink to="/login">LOGIN</NavLink>
              </a>
            </div>
            <div>
              <button onClick={handleToggle}>
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-white text-3xl lg:hidden"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
