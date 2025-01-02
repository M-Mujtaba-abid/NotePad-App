// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='text-green-400 flex flex-row gap-8 border justify-around'>
//       <NavLink to="/"> 
//         Home
//       </NavLink>
// {/* <br /> */}
//       <NavLink to="paste">
//         Paste
//       </NavLink>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-500 w-[410px] lg:w-full text-white shadow-md">
      <div className="container mx-auto flex justify-evenly items-center px-4 lg:px-8 py-4">
        {/* Logo Section */}
        <div className="text-2xl lg:text-3xl font-bold text-green-400">
          <NavLink to="/">Mujtaba</NavLink>
        </div>

        {/* Links Section */}
        <div className=" md:flex space-x-6 text-xl lg:text-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-green-400 font-semibold'
                : 'text-gray-300 hover:text-green-400 transition duration-200'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/paste"
            className={({ isActive }) =>
              isActive
                ? 'text-green-400 font-semibold'
                : 'text-gray-300 hover:text-green-400 transition duration-200'
            }
          >
            Paste
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <button className="text-white focus:outline-none focus:ring-2 focus:ring-green-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
