import React from "react";
import Container from "../commonUi/Container";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerData } from "/src/data/data";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaTwitter: <FaTwitter />,
};

const Footer = () => {
  const { contact, socialLinks, accountsLinks, quickLinks, newsletter } =
    footerData;

  return (
    <div className="bg-[#282828] pt-25">
      <Container>
        <div className="flex flex-wrap justify-between pb-10 gap-y-12">

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-Roboto font-semibold uppercase pb-7.5">
              Contact Info
            </h3>
            <div className="text-[#DDDDDD] text-sm font-Roboto flex gap-x-2">
              <h4 className="font-bold">Address :</h4>
              <span className="w-46.25 leading-6">{contact.address}</span>
            </div>
            <div className="text-[#DDDDDD] text-sm font-Roboto flex gap-x-5 py-4">
              <h4 className="font-bold">Phone :</h4>
              <span className="w-46.25 leading-6">
                {contact.phones.map((phone, i) => (
                  <React.Fragment key={i}>
                    {phone}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </div>
            <div className="text-[#DDDDDD] text-sm font-Roboto flex gap-x-6.25 pb-6.25">
              <h4 className="font-bold">Email :</h4>
              <span className="w-46.25 leading-6">{contact.email}</span>
            </div>
            <div className="flex items-center gap-x-5 text-[#DDDDDD] text-base">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFAE00] transition-all duration-400"
                >
                  {iconMap[item.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Accounts */}
          <div>
            <h3 className="text-white text-lg font-Roboto font-semibold uppercase pb-7.5">
              Accounts
            </h3>
            <ul className="text-[#DDDDDD] text-base font-Roboto capitalize">
              {accountsLinks.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-[#FFAE00] transition-all duration-400 pb-2"
                >
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-white text-lg font-Roboto font-semibold uppercase pb-7.5">
              Quick Link
            </h3>
            <ul className="text-[#DDDDDD] text-base font-Roboto capitalize">
              {quickLinks.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-[#FFAE00] transition-all duration-400 pb-2"
                >
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletters */}
          <div>
            <h3 className="text-white text-lg font-Roboto font-semibold uppercase pb-7.5">
              {newsletter.title}
            </h3>
            <p className="text-[#DDDDDD] text-sm leading-6 w-65">
              {newsletter.description}
            </p>
            <form action="" className="mt-3.75">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="bg-white w-70 px-3 py-2 outline-none placeholder:text-[#757575] placeholder:capitalize text-base block my-3.75"
              />
              <button
                type="submit"
                className="text-white text-base font-Roboto bg-[#FFAE00] cursor-pointer rounded-sm px-7.5 py-2"
              >
                {newsletter.buttonText}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
