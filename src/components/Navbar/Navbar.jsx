import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LogoImg from '../../assets/logo-transparent-png.png';
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu.jsx';


// Dropdown Links
const DropdownLinks = [
  {
    name: "Unser Service",
    link: "/#services",
  },
  {
    name: "Top Reisen",
    link: "/#mobile_brands",
  },
  {
    name: "Reiseziele",
    onClick: () => { /* Aktion für den Klick auf "Location" */ }
  },
];

// Navbar Komponente
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openMap = () => {
    // Öffne die Karte
  };

  const openFormPopup = () => {
    setShowFormPopup(true);
  };

  const closeFormPopup = () => {
    setShowFormPopup(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 right-0 w-full bg-whitetext-black shadow-md z-[9999]">
        <div className="bg-gradient-to-r from-yellow-300 to-orange-400 text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-center">
              <p className='text-shadow-md'>Lebe Dein Leben, entdecke die Welt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center bg-yellow-50 text-yellow-600 shadow-md p-2">
        {/* Logo */}
        <div>
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={LogoImg} alt="Logo" className="h-16 object-contain" />

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
              <NavLink to="/Blogs">
                Blogs
              </NavLink>
            </li>
            <li className="py-10">
              <NavLink to="/places">
                Die Besten Plätze
              </NavLink>
            </li>
            <li className="py-10">
              <NavLink to="/About">
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
                      {data.link ? (
                        <NavLink to={data.link} className="inline-block w-full rounded-md p-3 hover:bg-yellow-300">
                          {data.name}
                        </NavLink>
                      ) : (
                        <button onClick={openMap} className="inline-block w-full rounded-md p-3 hover:bg-yellow-300">
                          {data.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Book Now button and Mobile Hamburger menu */}
        <div className="flex items-center gap-5">
          <button aria-label="Book Now" onClick={openFormPopup} className="bg-gradient-to-r from-yellow-300 to-orange-400 shadow-2xl hover:bg-bg-gradient-to-r hover:from-orange-400 hover:bg-yellow-300 transition-all duration-600 text-white px-4 py-1 rounded-full shadow-md-xl">
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

      {/* Form Popup */}
      {showFormPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[99999]">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Anmeldung</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
                <input type="text" id="phone" name="phone" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
              </div>
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">Anmelden</button>
              <button onClick={closeFormPopup} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Abbrechen</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
