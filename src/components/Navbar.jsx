import React from "react";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-center py-5 bg-green-400">

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a className="block px-4 py-2 no-underline outline-none" href="#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-gray-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none" href="#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-gray-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none" href="#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-gray-600">EDUCATION</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none" href="#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-gray-600">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none" href="#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-gray-600">PROJECTS</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none" href="#contact">
              <div className="text-sm text-white transition-colors duration-300 hover:text-gray-600">CONTACT ME</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
