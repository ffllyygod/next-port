"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Menu, X } from "lucide-react";
import NavLink from "./nav-link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
    ${scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand - Sekuya applied from globals.css via .logo class */}
          <Link
            href="/"
            className="text-xl font-bold logo hover:text-gray-300 transition-colors duration-300"
            aria-label="ffllyy.god home"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            ffllyy.god
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:block"
            style={{ fontFamily: "var(--font-jetbrains)" }}
            aria-label="Main navigation"
          >
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="/">
                home
              </NavLink>
              <NavLink href="/projects">projects</NavLink>
              <NavLink href="/experience">experience</NavLink>
              <NavLink href="/skills">skills</NavLink>
              {/* <NavLink href="/blog">blog</NavLink> */}
              <NavLink href="/contact">contact</NavLink>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              isIconOnly
              variant="light"
              size="sm"
              onPress={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="text-white hover:text-gray-300 transition-colors duration-200"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >

              {open ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Collapse */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-1" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <Link className="block px-3 py-2 text-sm font-medium text-white nav-link" href="/">
              home
            </Link>
            <Link
              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white nav-link"
              href="/projects/"
            >
              projects
            </Link>
            <Link
              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white nav-link"
              href="/experience/"
            >
              experience
            </Link>
            <Link
              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white nav-link"
              href="/skills/"
            >
              skills
            </Link>
            {/* <Link
              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white nav-link"
              href="/blog/"
            >
              blog
            </Link> */}
            <Link
              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white nav-link"
              href="/contact/"
            >
              contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
