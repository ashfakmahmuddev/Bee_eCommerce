import { Link } from "react-router-dom";
import Container from "../commonUi/Container";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
// import Images from '../commonUi/Images'
// import bee from '/src/assets/bee.png'

const Header = () => {
  return (
    <div className="bg-[#f5f6f1]">
      <Container>
        <div className="flex items-center justify-between">
          {/* <Images src={bee} className={"w-20"}/> */}
          <Link to={"/"} className="text-[#303030] text-3xl font-Roboto font-bold py-6">
            Bee Mart
          </Link>
          <ul className="flex items-center gap-x-7.5 text-[#303030] text-base font-Roboto font-semibold uppercase">
            <li className="hover:text-[#FFAE00] transition-all duration-400">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#FFAE00] transition-all duration-400">
              <Link to={"/shop"}>shop</Link>
            </li>
            <li className="hover:text-[#FFAE00] transition-all duration-400">
              <Link to={"/blog"}>blog</Link>
            </li>
            <li className="hover:text-[#FFAE00] transition-all duration-400">
              <Link to={"/about"}>About us</Link>
            </li>
            <li className="hover:text-[#FFAE00] transition-all duration-400">
              <Link to={"/contact"}>contact</Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-3 text-[#303030] text-2xl">
            <button type="button" className="cursor-pointer"><IoSearch/></button>
            <button type="button" className="cursor-pointer"><MdOutlineShoppingCart/></button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
