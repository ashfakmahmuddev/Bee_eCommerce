import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Product = ({
  image,
  title,
  price,
  originalPrice,
  className = "",
  onAddToCart,
}) => {
  // discount % calculate করি (originalPrice থাকলে)
  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <Link
      to={""}
      className={`group bg-white rounded-lg border border-[#f5f6f1] 
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

        {/* Discount Badge - Image-এর উপর (popular style) */}
        {discountPercent > 0 && (
          <span
            className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold 
            px-2.5 py-1 rounded-full shadow-md z-10"
          >
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-center">
        <h3 className="text-lg font-semibold text-[#303030] mb-3 line-clamp-2 min-h-5">
          {title}
        </h3>

        {/* Price Section */}
        <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
          {discountPercent > 0 ? (
            <>
              <span className="text-lg text-[#30303095] line-through">
                {Number(originalPrice).toLocaleString()} TK
              </span>
              <span className="text-xl font-bold text-[#e63946]">
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
          className="w-full mt-2"
          onClick={() => onAddToCart?.({ title, price, image, originalPrice })}
        />
      </div>
    </Link>
  );
};

export default Product;
