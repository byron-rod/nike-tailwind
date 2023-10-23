import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { AiOutlineClose } from "react-icons/ai";
import nikeLogo from "../../public/nike-black.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
            className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-coral-red hidden md:flex"
          />
          <div className="hidden md:flex items-center gap-4 text-xl">
            <FontAwesomeIcon icon={faCartArrowDown} />
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <img
            src={hamburger}
            alt="hamburger"
            width={24}
            height={24}
            className="hidden max-lg:block cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {/* mobile menu */}
        {showMenu ? (
          <div className="bg-black/80 fixed w-full h-screen top-0 left-0"></div>
        ) : (
          ""
        )}
        {/* side drawer menu */}
        <div
          className={
            showMenu
              ? "fixed top-0 right-0 w-[250px] h-screen bg-white z-20 duration-300"
              : "fixed top-0 right-[-100%] w-[250px] h-screen bg-white z-20 duration-300"
          }
        >
          <AiOutlineClose
            size={30}
            className="absolute right-4 top-12 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          <h2 className="p-4">
            <img src={nikeLogo} width={80} height={80} className="" />
          </h2>
          <nav>
            <ul className="flex flex-col items-center">
              <li className="text-2xl mx-4 py-2">Home</li>
              <li className="text-2xl mx-4 py-2">About Us</li>
              <li className="text-2xl mx-4 py-2">Products</li>
              <li className="text-2xl mx-4 py-2">Contact Us</li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
