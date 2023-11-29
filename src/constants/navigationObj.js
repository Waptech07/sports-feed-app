import * as AiIcons from 'react-icons/ai'
import { RiAdvertisementLine } from 'react-icons/ri'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineScoreboard, MdOutlineArticle } from "react-icons/md";

export const sidebarData = [
  {
    linkName: 'Settings',
    linkPath: '/settings',
    linkIcon: <AiIcons.AiOutlineSetting className="text-3xl" />
  },

  {
    linkName: "What's new",
    linkPath: '/what-new',
    linkIcon: <AiIcons.AiOutlineStar className="text-3xl" />
  },

  {
    linkName: 'FAQ',
    linkPath: '/faq',
    linkIcon: <AiIcons.AiOutlineQuestionCircle className="text-3xl" />
  },

  {
    linkName: 'Contact',
    linkPath: '/contact',
    linkIcon: <AiIcons.AiOutlineMessage className="text-3xl" />
  },

  {
    linkName: "Advertise",
    linkPath: '/advertise',
    linkIcon: <RiAdvertisementLine className='text-3xl' />
  },

  {
    linkName: "Mobile",
    linkPath: '/mobile',
    linkIcon: <IoPhonePortraitOutline className='text-3xl' />
  },

  {
    linkName: 'Privacy notice',
    linkPath: '/privacy-notice',
    linkIcon: <AiIcons.AiOutlineSecurityScan className="text-3xl" />
  },
]

export const navbarData = [
  {
    linkName: "Live Scores",
    linkPath: "/",
    linkIcon: <MdOutlineScoreboard className='text-2xl' />
  },

  {
    linkName: "Competitions",
    linkPath: "/competitions",
    linkIcon: <AiIcons.AiOutlineTrophy className='text-2xl' />
  },

  {
    linkName: "News",
    linkPath: "/news",
    linkIcon: <MdOutlineArticle className='text-2xl' />
  },

  {
    linkName: "Favourites",
    linkPath: "/favourites",
    linkIcon: <AiIcons.AiOutlineStar className='text-2xl' />
  },
]