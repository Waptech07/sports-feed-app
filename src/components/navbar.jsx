import { React, useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { LiaBarsSolid } from "react-icons/lia";
import { SidebarContext } from "../context/sidebarContext";
import { navbarData } from "../constants/navigationObj";
import Button from "../utils/button";

const Navbar = () => {
  const { setIsOpened } = useContext(SidebarContext);
  const location = useLocation();
  const navigator = useNavigate();

  return (
    <>
      <header className="border-b border-b-gray-500">
        <nav className="mx-auto lg:max-w-[80%] flex items-center gap-5 p-3 lg:px-0" aria-label="Global">
          {/* sidebar toggler button */}
          <button onClick={() => setIsOpened(true)} className="bg-transparent text-white text-3xl outline-none border-0">
            <LiaBarsSolid />
          </button>
          <div className="flex">
            <Link to={'/'} className="outline-none">
              <Logo />
            </Link>
          </div>

          <div className="flex items-center gap-10 mx-auto">
            {navbarData.map((data, index) => {
              const { linkName, linkPath, linkIcon } = data; // object destructuring

              return (
                <NavLink role="link" aria-label={`click to enter ${linkName} page`} to={linkPath} key={index} className={'outline-none'}>
                  <div className={location.pathname === linkPath ? "flex duration-500 hover:text-primary items-center gap-2 text-primary text-base" : "flex duration-500 hover:text-primary items-center gap-2 text-white text-base"}>
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
            <Button
              onClick={() => navigator('/log-in')}
              text={'Log in'}
              variant={true}
              role="link"
              ariaLabel="Click to enter log in page"
            />

            <Button
              onClick={() => navigator('/sign-up')}
              text={'Sign up'}
              variant={false}
              role="link"
              ariaLabel="Press enter to create an account today!"
            />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar