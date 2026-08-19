"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--color-background)]/50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-3 ">
        <Link href="#home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 cursor-pointer">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-[var(--color-accent-start)] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] hover:opacity-90 transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-background)] border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)]"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}