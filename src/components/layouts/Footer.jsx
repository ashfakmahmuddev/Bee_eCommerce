import Container from "../commonUi/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#282828] pt-25">
      <Container>
        <div className="flex justify-between pb-10">
          <div className="">
            <h3 className="text-white text-lg font-Roboto font-semibold uppercase pb-7.5">
              Contact Info
            </h3>
            <div className="text-[#DDDDDD] text-sm font-Roboto flex gap-x-2">
              <h4 className="font-bold">Address :</h4>
              <span className="w-46.25 leading-6">
                Your address goes here, your demo address.
              </span>
            </div>
            <div className="text-[#DDDDDD] text-sm font-Roboto flex gap-x-5 py-4">
              <h4 className="font-bold">Phone :</h4>
              <span className="w-46.25 leading-6">
                +8880 44338899
                <br />
                +8880 44338899
              </span>
            </div>
            <div className="text-[#DDDDDD] text-sm font-Roboto flex gap-x-6.25 pb-6.25">
              <h4 className="font-bold">Email :</h4>
              <span className="w-46.25 leading-6">info@example.com</span>
            </div>
            <div className="flex items-center gap-x-5 text-[#DDDDDD] text-base">
              <Link
                to={""}
                className="hover:text-[#FFAE00] transition-all duration-400"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={""}
                className="hover:text-[#FFAE00] transition-all duration-400"
              >
                <FaInstagram />
              </Link>
              <Link
                to={""}
                className="hover:text-[#FFAE00] transition-all duration-400"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to={""}
                className="hover:text-[#FFAE00] transition-all duration-400"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="text-white text-lg font-Roboto font-semibold uppercase pb-7.5">
              Accounts
            </h3>
            <ul className="text-[#DDDDDD] text-base font-Roboto capitalize">
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>My Account</Link>
              </li>
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>Search</Link>
              </li>
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>Wishlist</Link>
              </li>
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>Sign In</Link>
              </li>
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>Checkout</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-white text-lg font-Roboto font-semibold uppercase pb-7.5">
              Quick Link
            </h3>
            <ul className="text-[#DDDDDD] text-base font-Roboto capitalize">
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>Register</Link>
              </li>
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>My Account</Link>
              </li>
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>Wishlist</Link>
              </li>
              <li className="hover:text-[#FFAE00] transition-all duration-400 pb-2">
                <Link to={""}>Checkout</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-white text-lg font-Roboto font-semibold uppercase pb-7.5">
              Newsletters
            </h3>
            <p className="text-[#DDDDDD] text-sm leading-6 w-65">
              Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <form action="">
              <input type="text" placeholder="Your email address" className="bg-white w-70 px-3 py-2 outline-none placeholder:text-[#757575] placeholder:capitalize text-base block my-3.75"/>
              <button type="button" className="text-white text-base font-Roboto bg-[#FFAE00] cursor-pointer rounded-sm px-7.5 py-2">Subscribe</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
