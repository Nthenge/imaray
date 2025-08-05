"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#748D92] to-[#D3D9D4] backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 px-3 py-1 rounded-lg shadow-[6px_6px_12px_rgba(0,0,0,0.3),_-6px_-6px_12px_rgba(255,255,255,0.05),0_0_8px_#EFA48B]">
            <Image
              src="/images/sylvia.jpg"
              alt="logo image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-bold text-white tracking-wide">Sylvia</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {["Home", "Services", "Work", "Testimonials", "FAQ", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="text-white hover:text-gray-200 transition duration-300 font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden text-white text-3xl transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 
          bg-gradient-to-br from-[#748D92] to-[#D3D9D4] text-white transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <ul className="flex flex-col items-center mt-20 space-y-6">
          {["Home", "Services", "Work", "Testimonials", "FAQ", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-gray-200 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
