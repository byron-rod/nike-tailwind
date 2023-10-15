import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-coral-red"
          />
          <div className="flex items-center gap-4 text-xl">
            <FontAwesomeIcon icon={faCartArrowDown} />
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <img
            src={hamburger}
            alt="hamburger"
            width={24}
            height={24}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
