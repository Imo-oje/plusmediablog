import { MenuIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar flex justify-between items-center p-4 fixed w-full bg-white z-10">
        <div className="w-2/5 flex justify-between items-center">
          <div className="logo font-bold text-2xl">Plusmedia</div>
          <ul className="justify-between items-center gap-8 p-4 hidden md:flex">
            <li className="cursor-pointer font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer font-bold">
              <Link to="/products">Products</Link>
            </li>
            <li className="cursor-pointer font-bold">
              <Link to="/contact-gain">Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          {menuOpen ? (
            <X
              size={30}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer md:hidden"
            />
          ) : (
            <MenuIcon
              size={30}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer md:hidden"
            />
          )}
        </div>
        <div className="justify-between items-center gap-4 hidden md:flex">
          <button className="whitespace-nowrap font-bold hover:bg-black hover:opacity-30 p-2 hover:rounded-2xl hover:text-white">
            Log In
          </button>
          <button className="font-bold bg-black p-2 rounded-xl text-white whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </header>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } z-30 absolute w-screen bg-[#333] h-screen text-white top-14 transition-all md:hidden`}
      >
        <ul className="justify-between items-center gap-8 p-4 flex-col">
          <li className="cursor-pointer font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link to="/products">Products</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link to="/contact-gain">Contacts</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
