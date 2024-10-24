import React from "react";
import HeaderLink from "./headerLink";
import { RiHeartsFill } from "react-icons/ri";
import MenuHamburguer from "../Menu/menuHamburguer";

function Header() {
  return (
    <>
      <header className="w-full z-10 absolute ">
        <div className="flex justify-end px-7 py-7">
          <MenuHamburguer />
        </div>
        <div className="flex justify-between items-center px-12 py-5 hidden sm:block">
          <div className="flex items-center space-x-1 text-backgroundColor_White">
            <RiHeartsFill className="text-4xl" />
            <span className="text-lg font-bold font-sans">P&A</span>
          </div>
          <div>
            <nav className="">
              <ul className="flex space-x-8">
                <HeaderLink url="#home" title__Section="Home" />
                <HeaderLink url="Story" title__Section="Story" />
                <HeaderLink url="About" title__Section="About" />
                <HeaderLink url="Contact" title__Section="Contact" />
                <li>
                  <button>
                    <a href="#login">Login</a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
