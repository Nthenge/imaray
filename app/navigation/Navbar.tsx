import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#748D92] to-[#D3D9D4] backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo with constant surprise color + stronger hover glow */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 px-3 py-1 rounded-lg shadow-[6px_6px_12px_rgba(0,0,0,0.3),_-6px_-6px_12px_rgba(255,255,255,0.05),0_0_8px_#EFA48B] transition-all duration-300 hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.25),_inset_-4px_-4px_8px_rgba(255,255,255,0.05),0_0_20px_#EFA48B]"
        >
          <Image
            src="/images/sylvia.jpg"
            alt="logo image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-white tracking-wide">
            Sylvia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'Services','Work', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
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
          aria-label="Toggle navigation"
          className="md:hidden text-white text-2xl focus:outline-none hover:text-gray-200 transition"
        >
          ☰
        </button>

      </div>
    </nav>
  )
}

export default Navbar
