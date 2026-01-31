"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About Us", href: "/about-us" },
  { name: "3PL Services", href: "/services/3pl-services" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useDarkText = mobileMenuOpen || isScrolled;
  const textColor = useDarkText ? "text-gray-900" : "text-white";
  const hoverColor = useDarkText ? "hover:text-blue1" : "hover:text-blue-200";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${
        mobileMenuOpen || isScrolled
          ? "bg-white shadow-md py-4"  
          : "bg-transparent py-6" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className={`text-2xl font-black cursor-pointer transition-colors ${
            useDarkText ? "text-blue-900" : "text-white"
          }`}
        >
          Price Value Logistics
        </Link>

        <div className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition ${textColor} ${hoverColor}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="mailto:contact@Price Value Logisticslogistics.com"
          className="hidden md:block bg-blue1 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue2 transition"
        >
          Contact Us
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${textColor}`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="font-medium text-gray-900 hover:text-blue1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/how-it-works"
            onClick={closeMenu}
            className="font-medium text-gray-900 hover:text-blue1"
          >
            How It Works
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