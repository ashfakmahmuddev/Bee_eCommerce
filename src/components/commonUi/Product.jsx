import React from 'react';
import Button from './Button';
// import Button from '../components/commonUi/Button';

const Product = ({ 
  image, 
  title, 
  price, 
  onAddToCart,     // optional: click handler function
  className = '',
}) => {
  return (
    <div 
      className={`group bg-white rounded-lg shadow-md overflow-hidden 
        hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center 
            group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>

        <p className="text-xl font-bold text-gray-900 mb-5">
          ৳{Number(price).toLocaleString('bn-BD')}
        </p>

        {/* তোমার custom Button */}
        <Button 
          btnTxt="Add to Cart"
          className="w-full"   // full width করে দিলাম যাতে সুন্দর লাগে
          onClick={() => onAddToCart?.({ title, price, image })}
        />
      </div>
    </div>
  );
};

export default Product;