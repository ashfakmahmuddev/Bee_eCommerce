import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
// import Button from '../components/commonUi/Button';

const Product = ({
  image,
  title,
  price,
  onAddToCart, // optional: click handler function
  className = "",
}) => {
  return (
    <Link to={""}
      className={`group bg-white rounded-lg border border-[#f5f6f1] overflow-hidden 
        hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-square bg-[#f5f6f1] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center 
            group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="p-2">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 min-h-12">
            {title}
          </h3>

          <p className="text-xl font-bold text-gray-900 mb-5">
            ৳{Number(price).toLocaleString("bn-BD")}
          </p>
        </div>
        <Button
          btnTxt="Add to Cart"
          className="w-full" 
          onClick={() => onAddToCart?.({ title, price, image })}
        />
      </div>
    </Link>
  );
};

export default Product;
