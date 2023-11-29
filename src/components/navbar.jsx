import { React, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { LiaBarsSolid } from "react-icons/lia";
import { SidebarContext } from "../context/sidebarContext";
import { navbarData } from "../constants/navigationObj";
import Button from "../utils/button";

const Navbar = () => {
  const { setIsOpened } = useContext(SidebarContext)

  return (
    <>
      <header className="border-b border-b-gray-500">
        <nav className="mx-auto lg:max-w-[80%] flex items-center gap-5 p-3 lg:px-0" aria-label="Global">
          {/* sidebar toggler button */}
          <button onClick={() => setIsOpened(true)} className="bg-transparent text-white text-3xl outline-none border-0">
            <LiaBarsSolid />
          </button>
          <div className="flex">
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>

          <div className="flex items-center gap-10 mx-auto">
            {navbarData.map((data, index) => {
              const { linkName, linkPath, linkIcon } = data; // object destructuring

              return (
                <NavLink to={linkPath} key={index}>
                  <div className="flex duration-500 hover:text-primary items-center gap-3 text-white text-base">
                    {linkIcon}
                    <div>
                      {linkName}
                    </div>
                  </div>
                </NavLink>
              )
            })}
          </div>

          <div className="flex gap-5">
            <Link to={'/log-in'} className="no-underline outline-none">
              <Button 
                text={'Log in'}
                variant={true}
              />
            </Link>

            <Link to={'/sign-up'} className="no-underline outline-none">
              <Button 
                text={'Sign up'}
                variant={false}
              />
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar