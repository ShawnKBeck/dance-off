'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Bring It!', path: '/rules' },
    { name: 'Teams', path: '/teams' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Donate', path: '/donate' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-gradient-to-r from-[#1b365f] via-[#2c4a6e] to-cyan-700 text-white sticky top-0 z-50 shadow-lg border-b-2 border-cyan-400/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-poppins font-bold text-xl md:text-2xl bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-cyan-300 transition-all duration-300">
              You Got Served
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="hover:text-cyan-300 font-semibold transition duration-300 ease-in-out transform hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-300 focus:outline-none hover:text-cyan-400 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-[#1b365f]/50 backdrop-blur-sm rounded-lg p-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block hover:bg-cyan-500/20 hover:text-cyan-300 px-3 py-2.5 rounded-md font-semibold transition duration-300 ease-in-out border-l-4 border-transparent hover:border-cyan-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
