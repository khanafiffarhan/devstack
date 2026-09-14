"use client"

import { useState } from "react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        <div className="flex items-center">
          <Image src="/logo-text.png" alt="Logo" width={137} height={32} />
        </div>

        <div className="hidden items-center space-x-6 md:flex">
          <a href="#" className="text-sm font-medium transition hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-sm font-medium transition hover:text-gray-300">
            Features
          </a>
          <a href="#" className="text-sm font-medium transition hover:text-gray-300">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium transition hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-sm font-medium transition hover:text-gray-300">
            Contact
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-4xl px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-white">
            Sign In
          </button>
          <button className="bg-[#d91b7e] px-4 py-2 text-sm rounded-4xl font-medium text-white transition hover:bg-[#c2166d]">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-4 pt-2 flex flex-col space-y-3">
          <a
            href="#"
            className="text-sm font-medium py-2 transition hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium py-2 transition hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium py-2 transition hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium py-2 transition hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium py-2 transition hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
            <button className="rounded-4xl px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-white">
              Sign In
            </button>
            <button className="bg-[#d91b7e] px-4 py-2 text-sm rounded-4xl font-medium text-white transition hover:bg-[#c2166d]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar