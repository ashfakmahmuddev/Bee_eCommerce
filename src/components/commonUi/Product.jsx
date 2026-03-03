import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi"; 
import { FaHeart } from "react-icons/fa"; 

const Product = ({
  image,
  title,
  price,
  originalPrice,
  className = "",
  onAddToCart,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // discount calculate
  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);

    // Optional: এখানে wishlist-এ add/remove logic যোগ করো (localStorage / API / global state)
    // console.log(
    //   isFavorite ? "Removed from favorites" : "Added to favorites",
    //   title,
    // );
  };

  return (
    <Link
      to={""}
      className={`group bg-white rounded-lg border border-[#f5f6f1] shadow-[0_8px_30px_-10px_#30303020] 
        hover:shadow-[0_8px_30px_-10px_#30303060] transition-all duration-300 
        relative overflow-hidden ${className}`}
    >
      {/* Image + Discount Badge */}
      <div className="overflow-hidden rounded-t-lg relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center 
            group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <span
            className="absolute top-3 left-3 bg-[#FFAE00] text-white text-xs font-bold 
            px-2.5 py-1 rounded-full shadow-md z-10"
          >
            {discountPercent}% OFF
          </span>
        )}

        {/* Heart Icon - Top Right */}
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-3 right-3 z-20 p-1.5 rounded-full 
            transition-all duration-200 cursor-pointer
            text-gray-500 hover:text-[#FFAE00] active:scale-95"
        >
          {isFavorite ? (
            <FaHeart className="w-5 h-5 text-[#FFAE00]" />
          ) : (
            <FiHeart className="w-5 h-5 hover:text-[#FFAE00] transition-colors" />
          )}
        </button>
        <Button
          btnTxt="Add to Cart"
          className="absolute bottom-3 left-1/2 w-[92%] opacity-0 group-hover:opacity-60 scale-0 group-hover:scale-100 rounded-none! -translate-x-1/2 transition-all duration-300 hidden md:block"
          onClick={() => onAddToCart?.({ title, price, image, originalPrice })}
        />
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-center">
        <h3 className="text-lg font-semibold text-[#303030] line-clamp-2 min-h-5">
          {title}
        </h3>

        {/* Price Section */}
        <div className="flex items-center justify-center gap-3 my-2.5 flex-wrap">
          {discountPercent > 0 ? (
            <>
              <span className="text-lg text-[#30303095] line-through">
                {Number(originalPrice).toLocaleString()} TK
              </span>
              <span className="text-xl font-bold text-[#FFAE00]">
                {Number(price).toLocaleString()} TK
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-[#303030]">
              {Number(price).toLocaleString()} TK
            </span>
          )}
        </div>
        <Button
          btnTxt="Add to Cart"
          className="w-[92%] md:hidden"
          onClick={() => onAddToCart?.({ title, price, image, originalPrice })}
        />
      </div>
    </Link>
  );
};

export default Product;
