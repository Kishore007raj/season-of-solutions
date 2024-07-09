"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import "./nav.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const sections = [
    { href: "/#home", name: "Home" },
    { href: "/#timeline", name: "Timeline" },
    { href: "/#showcase", name: "Showcase" },
    { href: "/#faq", name: "FAQ" },
    { href: "/register", name: "Register" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full left-0 mb-10 p-[2px] z-10 bg-black fixed top-5 text-white rounded-full grad  flex items-center ">
        <div className="w-full inset-0 bg-black top-0 text-white border rounded-full p-4 flex items-center justify-between ">
          <Image
            src="/logo.svg"
            className="w-48 md:w-72 lg:w-72 xl:w-80"
            alt="GDSC Logo"
            width={300}
            height={10}
          />

          <button
            ref={buttonRef}
            className="block lg:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className={`font-montserrat lg:pr-6 lg:flex lg:items-center lg:space-x-16 ${
              isOpen ? "hidden" : "hidden"
            }`}
          >
            {sections.map((link) => (
              <Link key={link.href} href={link.href} className="under">
                {link.name}
              </Link>
            ))}
          </div>

          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-16 left-0 w-full border text-white bg-black rounded-md shadow-lg z-20 lg:hidden"
            >
              {sections.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-montserrat block px-4 py-2 hover:text-black hover:bg-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
