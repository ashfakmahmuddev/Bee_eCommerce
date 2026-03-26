import { Link, useLocation } from "react-router-dom";
import Container from "../commonUi/Container";
import { FiSettings, FiMenu, FiX } from "react-icons/fi";
import { mainNavLinks } from "/src/data/data";
import { useEffect, useState } from "react";
import { Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isPassed, setIsPassed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPassed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`
          sticky w-full z-50
          transition-all duration-500 ease-in-out
          ${isPassed
            ? "top-0 bg-[#f5f6f1] backdrop-blur-md shadow-sm"
            : "-top-25 bg-[#f5f6f1] shadow-none"
          }
        `}
      >
        <Container>
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <Link to="/" className="text-[#303030] text-3xl font-bold">
              <span className="text-[#FFAE00]">Bee</span> Mart
            </Link>

            {/* Desktop Nav - md এর উপরে দেখাবে */}
            <ul className="hidden md:flex items-center gap-x-7.5 text-[#303030] text-base font-semibold uppercase">
              {mainNavLinks.map((item) => (
                <li
                  key={item.path}
                  className={`hover:text-[#FFAE00] transition-all duration-400 ${
                    location.pathname === item.path
                      ? "text-[#FFAE00] underline underline-offset-4"
                      : ""
                  }`}
                >
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>

            {/* Icons - search, settings, cart */}
            <div className="flex items-center gap-x-3 md:gap-x-5 text-[#303030] text-2xl">
              <button type="button" className="cursor-pointer">
                <Search strokeWidth={1.2} />
              </button>

              <button
                type="button"
                className="cursor-pointer hover:text-[#FFAE00] transition-all duration-400"
              >
                <FiSettings className="stroke-1" />
              </button>

              <button
                type="button"
                className="cursor-pointer relative hover:text-[#FFAE00] transition-all duration-400"
              >
                <ShoppingCart strokeWidth={1.2} />
                <div className="h-5 w-4 bg-amber-400 absolute -top-2 -right-1 rounded-2xl flex justify-center items-center text-sm font-light text-white">
                  0
                </div>
              </button>

              {/* Hamburger button - শুধু mobile এ দেখাবে */}
              <button
                className="md:hidden text-3xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Sidebar / Drawer */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-full bg-[#f5f6f1] shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link
              to="/"
              className="text-[#303030] text-3xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Bee Mart
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl focus:outline-none"
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex-1 p-5">
            <ul className="space-y-6 text-[#303030] text-xl font-medium">
              {mainNavLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      block text-center rounded-lg transition-colors
                      hover:text-[#FFAE00]
                      ${location.pathname === item.path
                        ? "text-[#FFAE00]"
                        : ""
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Optional: extra footer content যদি চাও */}
          {/* <div className="p-5 border-t border-gray-200 text-sm text-gray-600">
            © 2026 Bee Mart
          </div> */}
        </div>
      </div>

      {/* Overlay - sidebar open থাকলে background dark হবে */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;