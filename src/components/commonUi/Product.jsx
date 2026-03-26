import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

const Product = ({
  id,
  image,
  title,
  price,
  originalPrice,
  className = "",
  onAddToCart,
  onQuickView,
  onCheckout,           // নতুন prop - Checkout এর জন্য
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      to={""}
      className={`group bg-white rounded-lg border border-[#f5f6f1] 
        shadow-[0_8px_30px_-10px_#30303020] 
        hover:shadow-[0_8px_30px_-10px_#30303060] 
        transition-all duration-300 
        relative overflow-hidden cursor-auto ${className}`}
    >
      {/* Image Container */}
      <div className="overflow-hidden rounded-t-lg relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center 
             transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Main Hover Overlay - Add to Cart */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
          transition-all duration-300 flex items-center justify-center z-10">
          
          <Button
            btnTxt="Add to Cart"
            className="w-[70%] md:w-[60%] opacity-0 group-hover:opacity-100 
              translate-y-6 group-hover:translate-y-0 
              transition-all duration-300 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart?.({ title, price, image, originalPrice });
            }}
          />
        </div>
        {/* Bottom Icons - Quick View & Checkout */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent 
          opacity-0 group-hover:opacity-100 transition-all duration-300 
          flex items-center justify-center gap-8 py-4 z-20 translate-y-4 group-hover:translate-y-0"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView?.({ id, title, price, image, originalPrice });
            }}
            className="flex flex-col items-center text-white transition-all duration-200 
             hover:text-[#FFAE00] group/btn cursor-pointer"
            title="Quick View"
          >
            {/* Icon Container */}
            <div
              className="w-9 h-9 flex items-center justify-center rounded-full 
                  border border-white/50 bg-white/10 
                  group-hover/btn:border-[#FFAE00] 
                  transition-all duration-300"
            >
              <FiEye
                className="w-5 h-5 transition-colors duration-200 
                      group-hover/btn:text-[#FFAE00]"
              />
            </div>
            {/* Text */}
            <span
              className="text-[10px] mt-1.5 font-medium tracking-widest 
                   transition-colors duration-200 
                   group-hover/btn:text-[#FFAE00]"
            >
              QUICK VIEW
            </span>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCheckout?.({ id, title, price, image, originalPrice });
            }}
            className="flex flex-col items-center text-white transition-all duration-200 
             hover:text-[#FFAE00] group/btn cursor-pointer"
            title="Checkout"
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-full 
                  border border-white/50 bg-white/10 
                  group-hover/btn:border-[#FFAE00]  
                  transition-all duration-300"
            >
              <FiShoppingCart
                className="w-5 h-5 transition-colors duration-200 
                               group-hover/btn:text-[#FFAE00]"
              />
            </div>

            <span
              className="text-[10px] mt-1.5 font-medium tracking-widest 
                   transition-colors duration-200 
                   group-hover/btn:text-[#FFAE00]"
            >
              CHECKOUT
            </span>
          </button>
        </div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <span
            className="absolute top-3 left-3 bg-[#FFAE00] text-white text-xs font-bold 
            px-2.5 py-1 rounded-full shadow-md z-30"
          >
            {discountPercent}% OFF
          </span>
        )}

        {/* Heart Icon - Top Right */}
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-4.5 right-4.5 z-30
            transition-all duration-200 cursor-pointer group-hover:text-white
            text-gray-500 hover:text-[#FFAE00] active:scale-95"
        >
          {isFavorite ? (
            <FaHeart className="w-5 h-5 text-[#FFAE00]" />
          ) : (
            <FiHeart className="w-5 h-5 hover:text-[#FFAE00] transition-colors" />
          )}
        </button>
      </div>

      {/* Product Details - Mobile Add to Cart */}
      <div className="px-4 py-3 text-center">
        <h3 className="text-lg font-semibold text-[#303030] line-clamp-2 min-h-13">
          {title}
        </h3>

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

        {/* Mobile Add to Cart */}
        <Button
          btnTxt="Add to Cart"
          className="w-[92%] md:hidden mt-1"
          onClick={() => onAddToCart?.({ title, price, image, originalPrice })}
        />
      </div>
    </Link>
  );
};

export default Product;