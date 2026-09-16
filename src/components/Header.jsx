import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { StudentContext } from "../StudentContext";

function Header() {
  const { favourites } = useContext(StudentContext);
  const location = useLocation();

  // Check which page is currently active
  const isStudentListActive = location.pathname === "/";
  const isFavouritesActive = location.pathname === "/favourites";

  return (
    <header className="bg-[#1e1b4b] border-b border-[#312e81] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-5 shadow-xl">

      {/* Portal Title */}

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#a78bfa] leading-none text-center md:text-left">
        Favourite Student List
      </h1>

      {/* Navigation Links */}

      <div className="w-full md:w-auto flex justify-center items-center gap-6 sm:gap-8 pt-2 md:pt-0">

        {/* Student List */}

        <Link
          to="/"
          className={`font-bold text-lg md:text-xl transition-all duration-150 transform hover:scale-105 active:scale-95 whitespace-nowrap ${
            isStudentListActive
              ? "text-[#c4b5fd]"
              : "text-white hover:text-[#a78bfa]"
          }`}
        >
          📋 Student List
        </Link>

        {/* Favourite Students */}

        <Link
          to="/favourites"
          className={`font-bold text-lg md:text-xl transition-all duration-150 transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap ${
            isFavouritesActive
              ? "text-[#c4b5fd]"
              : "text-white hover:text-[#a78bfa]"
          }`}
        >
          <span>❤️ Favourite Students</span>

          {favourites.length > 0 && (
            <span className="bg-[#8b5cf6] text-white text-xs px-2 py-0.5 rounded-full font-black shadow-sm">
              {favourites.length}
            </span>
          )}
        </Link>

      </div>
    </header>
  );
}

export default Header;