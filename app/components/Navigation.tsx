'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-brand-dark">Sneakers</span>
            <span className="text-brand-cyan">Lite</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-brand-dark hover:text-brand-cyan font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-brand-dark hover:text-brand-cyan font-medium transition"
            >
              About
            </Link>
            <Link
              href="/security"
              className="text-brand-dark hover:text-brand-cyan font-medium transition"
            >
              Security
            </Link>
            <Link
              href="/blog"
              className="text-brand-dark hover:text-brand-cyan font-medium transition"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block text-brand-dark hover:text-brand-cyan font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-brand-dark hover:text-brand-cyan font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/security"
              className="block text-brand-dark hover:text-brand-cyan font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Security
            </Link>
            <Link
              href="/blog"
              className="block text-brand-dark hover:text-brand-cyan font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block btn-primary mt-2 inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
