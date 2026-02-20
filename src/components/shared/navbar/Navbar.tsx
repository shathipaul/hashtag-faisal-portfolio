"use client";
import Link from "next/link";
// import NavButton from "./NavButton";
import NavLogo from "./NavLogo";
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll on mobile
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Detect scroll for background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const menuData = [
    { id: "how-it-works", name: "How it works", link: "/how-it-works" },
    { id: "about", name: "About", link: "/about" },
  ];

  return (
    <header className="w-full z-50 sticky top-0 left-0">
      {/* Desktop Navbar */}
      <div
        className={`hidden md:block transition-colors duration-500 ${
          scrolled ? "shadow-md bg-secondary" : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center px-6 py-3">
          <NavLogo />

          <nav aria-label="Main navigation">
            <ul className={`flex gap-6 ${scrolled ? "bg-transparent" : ""}`}>
              {menuData.map((data) => (
                <li key={data.id}>
                  <Link
                    href={data.link}
                    className={`text-muted text-sm tracking-wider uppercase hover:text-muted/80 transition-all duration-500 ${
                      pathname === data.link ? "font-bold " : "font-semibold"
                    }`}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div
          className={`flex justify-between items-center px-4 py-2 ${
            scrolled ? "bg-secondary shadow-md" : "bg-transparent"
          }`}
        >
          <NavLogo />
          <div className="flex justify-end items-center gap-1">
            <Hamburger
              size={24}
              duration={0.4}
              color="#375A36"
              easing="ease-in"
              toggled={isOpen}
              toggle={setOpen}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            />
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-40 z-40"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`bg-secondary px-6 fixed top-0 z-50 pt-6 flex flex-col items-start gap-8 w-3/4 md:w-2/4 h-screen ${
            isOpen ? "left-0" : "-left-full"
          } duration-700 ease-in-out`}
        >
          <NavLogo />
          <nav aria-label="Mobile navigation" className="flex flex-col gap-6">
            {menuData.map((data) => (
              <Link
                key={data.id}
                href={data.link}
                // className="text-base font-medium hover:font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                className={`text-muted ${
                  pathname === data.link
                    ? "font-bold border-b-2"
                    : "font-semibold"
                }`}
                onClick={() => setOpen(false)}
              >
                {data.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
