import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImg from '../../assets/logo-transparent-png.png';
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu.jsx';

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-whitetext-black shadow-md z-[9999]">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
              <p>20% off on next booking</p>
              <p>Monile No. +12 34567890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white text-black shadow-md p-3">
        {/* Logo */}
        <div>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={LogoImg} alt="" className="h-16" />
          </Link>
        </div>

        {/* Desktop Navlinks section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li className="py-10">
              <NavLink exact="true" to="/" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                Home
              </NavLink>
            </li>
            <li className="py-10">
              <NavLink to="/blogs" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                Blogs
              </NavLink>
            </li>
            <li className="py-10">
              <NavLink to="/places" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                Best Places
              </NavLink>
            </li>
            <li className="py-10">
              <NavLink to="/about" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                About us
              </NavLink>
            </li>
            {/* Dropdown section */}
            <li className="inline-block py-10 relative group cursor-pointer">
              <div className="dropdown group flex items-center">
                <span>Quick Links</span>
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </div>
              <div className="absolute left-0 top-full z-50 hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.name}>
                      <a className="inline-block w-full rounded-md p-3 hover:bg-primary/20" href={data.link}>
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>    
        {/* Book Now button */}
        <div className="flex items-center gap-5">
          <button className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-4 py-1 rounded-full">
            Book Now
          </button>

          {/* Mobile Hamburger menu */}
          <div className="md:hidden">
            {showMenu ? (
              <HiMenuAlt1 
                onClick={toggleMenu} 
                className="cursor-pointer transition-all" 
                size={30} 
              />
            ) : (
              <HiMenuAlt3 
                onClick={toggleMenu} 
                className="cursor-pointer transition-all" 
                size={30} 
              />
            )}
          </div>
          <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
