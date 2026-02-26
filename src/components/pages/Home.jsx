import React from "react";
import Container from "../commonUi/Container";
import Images from "../commonUi/Images";
import bannerImgOne from "/src/assets/bannerImgOne.png";
import Button from "../commonUi/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#f5f6f1] py-34">
      <Container>
        <div className="flex items-center justify-around">
          <div className="w-1/3">
            <Images src={bannerImgOne} className={"w-full"} />
          </div>
          <div className="w-1/2">
            <h4 className="text-[#282828] text-lg font-Roboto font-medium uppercase">
              welcome to our
            </h4>
            <h1 className="text-[#282828] text-[50px] font-Roboto font-bold uppercase leading-13.75 py-3.75">
              furniture gallery
            </h1>
            <p className="text-[#282828] text-base font-Roboto leading-7 w-128.75 pb-7.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <Link to={"/shop"}>
            <Button btnTxt={"Buy Now"}/>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
