import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b text-gray-900 font-sans border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-blue-900">P2V</div>

        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection("what-is-3pl")} className="text-sm font-medium hover:text-blue-600 transition">
            About Us
          </button>
          <button onClick={() => scrollToSection("Services")} className="text-sm font-medium hover:text-blue-600 transition">
            Services
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-blue-600 transition">
            How It Works
          </button>
          <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium hover:text-blue-600 transition">
            Contact Us
          </button>
        </div>

        <a
          href="mailto:contact@p2vlogistics.com"
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-6 flex flex-col gap-4">
          <button onClick={() => scrollToSection("what-is-3pl")} className="text-left font-medium hover:text-blue-600">
            About Us
          </button>
          <button onClick={() => scrollToSection("Services")} className="text-left font-medium hover:text-blue-600">
            Services
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className="text-left font-medium hover:text-blue-600">
            How It Works
          </button>
          <button onClick={() => scrollToSection("benefits")} className="text-left font-medium hover:text-blue-600">
            Contact Us
          </button>

          <a
            href="mailto:contact@p2vlogistics.com"
            className="bg-blue-600 text-white px-6 py-2 rounded font-bold text-center hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
