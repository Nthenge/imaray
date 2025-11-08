"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const navItems = ["About Me", "Services", "Work", "Testimonials", "FAQ", "Contact"];

  // Instant scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "auto",
      });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#748D92] to-[#008080] backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center bg-[#CD7F32] hover:bg-[#CC5500] space-x-2 px-3 py-1 rounded-lg shadow-[6px_6px_12px_rgba(0,0,0,0.3),_-6px_-6px_12px_rgba(255,255,255,0.05),0_0_8px_#fff]"
          >
            <Image
              src="/images/sylvia.jpg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-bold text-[#fff]  tracking-wide">Sylvia</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white">
            {navItems.map((item) => {
              const id = item === "About Me" ? "home" : item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={item === "About Me" ? "/" : `#${id}`}
                    onClick={(e) => item === "About Me" ? null : handleScroll(e, id)}
                    className="font-medium hover:text-gray-200 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className={`md:hidden text-[#CD7F32] text-3xl transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gradient-to-br from-[#748D92] to-[#008080]
          transform transition-transform duration-300 z-40 pt-16 shadow-[4px_0_15px_rgba(0,0,0,0.3)]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col items-start ml-10 mt-8 space-y-6">
          {navItems.map((item) => {
            const id = item === "About Me" ? "home" : item.toLowerCase();
            return (
              <li key={item}>
                <a
                  href={item === "About Me" ? "/" : `#${id}`}
                  onClick={(e) => item === "About Me" ? null : handleScroll(e, id)}
                  className="text-[#fff] text-base font-medium hover:text-gray-200 transition"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
