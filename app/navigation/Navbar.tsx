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
  // custom scroll handler (instant jump)
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "auto", // instant jump
      });
    }
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#748D92] to-[#D3D9D4] backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 px-3 py-1 rounded-lg shadow-[6px_6px_12px_rgba(0,0,0,0.3),_-6px_-6px_12px_rgba(255,255,255,0.05),0_0_8px_#fff]"
          >
            <Image
              src="/images/sylvia.jpg"
              alt="logo image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-bold text-[#008080] tracking-wide">
              Sylvia
            </span>
          </Link>

          <ul className="hidden md:flex space-x-8">
            {["About Me", "Services", "Work", "Testimonials", "FAQ", "Contact"].map(
              (item) => {
                const id = item === "About Me" ? "home" : item.toLowerCase();
                return (
                  <li key={item}>
                    <a
                      href={item === "About Me" ? "/" : `#${id}`}
                      onClick={(e) =>
                        item === "About Me"
                          ? null
                          : handleScroll(e, id)
                      }
                      className="text-white hover:text-gray-200 transition duration-300 font-medium"
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>

          {/* Mobile Toggle with Rotation */}
          <button
            type="button"
            className={`md:hidden text-[#008080] text-3xl transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Depth Shadow */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 
          bg-gradient-to-br from-[#748D92] to-[#D3D9D4] text-white 
          transform transition-transform duration-300 z-40 pt-16 shadow-[4px_0_15px_rgba(0,0,0,0.3)]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col items-start ml-10 mt-8 space-y-6">
          {["About Me", "Services", "Work", "Testimonials", "FAQ", "Contact"].map(
            (item) => {
              const id = item === "About Me" ? "About Me" : item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={item === "About Me" ? "/" : `#${id}`}
                    onClick={(e) =>
                      item === "About Me"
                        ? null
                        : handleScroll(e, id)
                    }
                    className="text-lg hover:text-gray-200 transition"
                  >
                    {item}
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
