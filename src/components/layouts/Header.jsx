import { Link, useLocation } from "react-router-dom";
import Container from "../commonUi/Container";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { mainNavLinks } from "/src/data/data";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPassed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky w-full z-50
        transition-all duration-500 ease-in-out
        ${
          isPassed
            ? "top-0 bg-[#f5f6f1] backdrop-blur-md shadow-lg"
            : "-top-25 bg-[#f5f6f1] shadow-none"
        } 
      `}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-[#303030] text-3xl font-bold py-6"
          >
            Bee Mart
          </Link>
          <ul className="flex items-center gap-x-7.5 text-[#303030] text-base font-semibold uppercase">
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
          <div className="flex items-center gap-x-3 text-[#303030] text-2xl">
            <button type="button" className="cursor-pointer">
              <IoSearch />
            </button>
            <button type="button" className="cursor-pointer">
              <MdOutlineShoppingCart />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
