// import React from 'react';
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { FaShopify } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center py-[30px]">
        <h1 className="text-[28px]  font-medium ">ShopVerse</h1>
        <div className="flex items-center justify-between gap-12 text-[18px] font-mono">
          <NavLink to={"/"}>About</NavLink>
          <NavLink to={"/product"}>Shop</NavLink>
          <NavLink to={"/"}>Categories</NavLink>
          <NavLink to={"/create"}>Create</NavLink>
        </div>
        <div className="flex items-center justify-between gap-7">
          <div className="flex relative">
            <a className="absolute text-[20px] left-3 top-3">
              <FaSearch />
            </a>
            <input className="text-[17px] font-mono text-center bg-gray-200 py-[10px] px-[40px] outline-none rounded-[40px] placeholder-black" placeholder='Search for "Phones"' type="text" />
          </div>
          <a className="text-[22px]">
            <GrFavorite />
          </a>
          <a className="text-[22px]">
            <FaShopify />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
