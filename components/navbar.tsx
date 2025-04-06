"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-white font-bold text-2xl flex items-center">
              <span className="text-purple-500">M</span>ayaLok
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-purple-500 hover:text-purple-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-purple-400">
            About
          </Link>
          <Link href="/team" className="text-white hover:text-purple-400">
            Our Team
          </Link>
          <Link href="/portfolio" className="text-white hover:text-purple-400">
            Portfolio
          </Link>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-purple-400">
              Work With Us
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black border border-purple-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/services" className="block px-4 py-2 text-sm text-white hover:bg-purple-900">
                  Services
                </Link>
                <Link href="/process" className="block px-4 py-2 text-sm text-white hover:bg-purple-900">
                  Our Process
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blogs" className="text-white hover:text-purple-400">
            Blogs
          </Link>
          <Link href="/contact" className="text-white hover:text-purple-400">
            Contact Us
          </Link>
          <Link
            href="/apply"
            className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Apply For Fellowship
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-6">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-purple-400 py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-purple-400 py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/team" className="text-white hover:text-purple-400 py-2" onClick={() => setIsMenuOpen(false)}>
              Our Team
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-purple-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <div className="py-2">
              <div className="flex items-center text-white mb-2">Work With Us</div>
              <div className="pl-4 flex flex-col space-y-2">
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-purple-400 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/process"
                  className="text-gray-300 hover:text-purple-400 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Process
                </Link>
              </div>
            </div>
            <Link href="/blogs" className="text-white hover:text-purple-400 py-2" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-purple-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/apply"
              className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply For Fellowship
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

