"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b text-gray-900 font-sans border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-blue-900 cursor-pointer">
          PVL
        </Link>

        <div className="hidden md:flex gap-10">
          <Link href="/about" className="text-sm font-medium hover:text-blue1 transition">
            About Us
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-blue1 transition">
            Services
          </Link>
          {/* <Link href="/how-it-works" className="text-sm font-medium hover:text-blue1 transition">
            How It Works
          </Link> */}
          <Link href="/contact" className="text-sm font-medium hover:text-blue1 transition">
            Contact Us
          </Link>
        </div>

        <Link
          href="mailto:contact@pvllogistics.com"
          className="hidden md:block bg-blue1 text-white px-6 py-2 rounded font-bold hover:bg-blue2 transition"
        >
          Contact Us
        </Link>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-6 flex flex-col gap-4">
          <Link href="/about" onClick={closeMenu} className="font-medium hover:text-blue1">
            About PVL
          </Link>
          <Link href="/services" onClick={closeMenu} className="font-medium hover:text-blue1">
            Services
          </Link>
          <Link href="/how-it-works" onClick={closeMenu} className="font-medium hover:text-blue1">
            How It Works
          </Link>
          <Link href="/contact" onClick={closeMenu} className="font-medium hover:text-blue1">
            Contact Us
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="bg-blue1 text-white px-6 py-2 rounded font-bold text-center hover:bg-blue2 transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
