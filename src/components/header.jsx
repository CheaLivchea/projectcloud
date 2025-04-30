import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-4">
           
            <div className="space-x-10">
              <span className="text-3xl font-bold text-blue-600">Cloth Shop</span>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? "text-blue-800" : "text-black"} hover:text-blue-700`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? "text-blue-800" : "text-black"} hover:text-blue-700`
                }
              >
                Shop
              </NavLink>


              <NavLink
                to="/new-arrivals"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? "text-blue-800" : "text-black"} hover:text-blue-700`
                }
              >
                New Arrival
              </NavLink>
             
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative w-64">
              <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                search
              </span>
              <input
                type="search"
                placeholder="Search for products"
                aria-label="Search"
                className="w-full h-12 pl-12 pr-12 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            {/* Auth Buttons */}
            <NavLink
              to="/signin"
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition duration-300"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              Sign up
            </NavLink>

            {/* Cart and Profile */}
            <NavLink
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >
              <span class="material-symbols-outlined">shopping_cart</span>
            </NavLink>

            <NavLink
              to="/profile"
              className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >

              <span class="material-symbols-outlined">account_circle</span>
            </NavLink>

            </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
