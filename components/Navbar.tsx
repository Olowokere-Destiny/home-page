"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-white relative z-50">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#FF3E1D]">
          AAVORide
        </Link>

        <ul className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.label === "Home" ? "text-[#FF3E1D]" : "text-[#424242]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="/help" className="hidden text-sm font-medium text-[#424242] md:block">
            Help
          </Link>

          <button
            className="flex flex-col items-center justify-center gap-1.25 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isOpen ? "translate-y-1.75 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isOpen ? "-translate-y-1.75 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-4 py-3 gap-1">
          {[...navLinks, { label: "Help", href: "/help" }].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  link.label === "Home" ? "text-[#FF3E1D]" : "text-[#424242]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}