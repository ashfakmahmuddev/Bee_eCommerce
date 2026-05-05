// import React from 'react'

// const Button = ({btnTxt, className}) => {
//   return (
//     <button className={`text-white text-sm font-semibold bg-[#282828] uppercase cursor-pointer rounded-sm hover:bg-[#FFAE00] transition-all duration-400 px-7.5 py-3 ${className}`}>{btnTxt}</button>
//   )
// }
 
// export default Button

import React from 'react';

const Button = ({ children, className = "", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border border-[#FF8A00] text-[#FF8A00] rounded 
      flex items-center justify-center gap-2 
      hover:bg-[#FF8A00] hover:text-white transition-all duration-300
      text-[15px] font-medium cursor-pointer px-7.5 py-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;