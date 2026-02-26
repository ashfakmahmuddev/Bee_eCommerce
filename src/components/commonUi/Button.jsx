import React from 'react'

const Button = ({btnTxt, className}) => {
  return (
    <button className={`text-white text-base font-Roboto font-semibold bg-[#282828] uppercase cursor-pointer rounded-sm hover:bg-[#FFAE00] transition-all duration-400 px-7.5 py-3 ${className}`}>{btnTxt}</button>
  )
}

export default Button