// Importe
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LogoImg from '../../assets/logo-transparent-png.png';
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu.jsx';

// Dropdown Links
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

// Navbar Komponente
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Top bar */}
    <div className="fixed top-0 right-0 w-full bg-whitetext-black shadow-md z-[9999]">
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex justify-center"> {/* Änderung der Klasse */}
            <p className='shadow-lg'>Lebe Dein Leben, entdecke die Welt</p> {/* Änderung der Klasse */}

          </div>
        </div>
      </div>
    </div>

      {/* Navbar */}
      <div className="flex justify-between items-center bg-white text-black shadow-md p-3">
        {/* Logo */}
        <div>
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={LogoImg} alt="Logo" className="h-16" />
          </NavLink>
        </div>

        {/* Desktop Navlinks section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li className="py-10">
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)} activeclassname="active-link" exact="true">
                Startseite
              </NavLink>
            </li>
            <li className="py-10">
              <NavLink to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="py-10">
              <NavLink to="/places">
                Die Besten Plätze
              </NavLink>
            </li>
            <li className="py-10">
              <NavLink to="/about">
                Über Uns
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
                      <a href={data.link} className="inline-block w-full rounded-md p-3 hover:bg-primary/20">
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Book Now button and Mobile Hamburger menu */}
        <div className="flex items-center gap-5">
          <button aria-label="Book Now" className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-4 py-1 rounded-full">
            jetzt buchen
          </button>
          <div className="md:hidden">
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            )}
          </div>
          <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
