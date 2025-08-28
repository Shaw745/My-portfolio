import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" layout text-[#C7C7C7] font-sans">
      {/* Navbar */}
      <nav className=" layout flex items-center justify-between  md:px-16 py-4">
        {/* Logo */}
        <a href="/" className="text-lg font-bold tracking-wider uppercase hover:text-lime-300">Godspower sikiru</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          <AnchorLink href="#work" className="hover:text-[#D3E97A]">
            Work
          </AnchorLink>
          <AnchorLink href="#about" className="hover:text-[#D3E97A]">
            About
          </AnchorLink>
          <AnchorLink href="#contact" className="hover:text-[#D3E97A]">
            Contact    
          </AnchorLink>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 bg-black py-6 border-t border-gray-800">
          <AnchorLink href="#work" className="hover:text-[#D3E97A]">
            Work
          </AnchorLink>
          <AnchorLink href="#about" className="hover:text-[#D3E97A]">
            About
          </AnchorLink>
          <AnchorLink href="#contact" className=" text-center hover:text-[#D3E97A]">Contact
          </AnchorLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
