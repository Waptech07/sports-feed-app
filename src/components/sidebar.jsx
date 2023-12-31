import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from 'react-icons/io5'
import { SidebarContext } from '../context/sidebarContext'
import { sidebarData } from '../constants/navigationObj'
import Logo from './Logo'

const Sidebar = () => {
  const { isOpened, setIsOpened } = useContext(SidebarContext);
  const [currentDeviceWidth, setCurrentDeviceWidth] = useState(window.innerWidth);

  // change windows size change depending on current device width
  const handleDeviceWidthChange = () => {
    setCurrentDeviceWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleDeviceWidthChange);
    // if current width is < or = to 768px, setIsOpended should be false so that sidebar closes on tablets and mobile devices by default, but opened by default on large screen devices
    const updatedSidebar = () => {
      if (currentDeviceWidth <= 768) {
        setIsOpened(false);
      }
    }
    updatedSidebar();
    window.addEventListener('load', updatedSidebar)
  }, [currentDeviceWidth, setIsOpened]);

  return (
    <>
      <aside className={`${isOpened ? "-left-0" : "-left-[20%]"} w-[20%] overflow-hidden py-10 px-3 h-full fixed top-0 bottom-0 bg-darkBg border-r border-r-gray-500 z-20 shadow-2xl duration-500`}>
        {/* sidebar brand */}
        <div className="flex items-center">
          <div className='mr-auto'>
            <Logo />
          </div>
          <div>
            <button onClick={() => setIsOpened(false)} className='bg-transparent border-0 outline-none text-3xl text-white'>
              <IoCloseOutline />
            </button>
          </div>
        </div>

        {/* sidebar menu */}
        <div className="mt-10 space-y-7">
          {sidebarData.map((data, index) => {
            const { linkName, linkPath, linkIcon } = data

            return (
              <div key={index}>
                <Link to={linkPath} className='no-underline flex gap-2 items-center text-white text-base font-semibold'>
                  <div>
                    {linkIcon}
                  </div>
                  <div>
                    {linkName}
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </aside>
    </>
  )
}

export default Sidebar