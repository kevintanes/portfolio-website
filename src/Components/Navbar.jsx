import React from 'react';

function Navbar() {
  return (
    <nav className="bg-purple-900 border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <p className="flex items-center">
          <span className="px-3 self-center text-2xl font-semibold whitespace-nowrap text-white">Kevin Tanes</span>
        </p>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-purple-700 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-purple-900  ">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 rounded md:p-0 " aria-current="page">Home</a>
            </li>
            <li>
              <a href="#about" className="block py-2 pl-3 pr-4 text-white rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ">About</a>
            </li>
            <li>
              <a href="#skill" className="block py-2 pl-3 pr-4 text-white rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ">Skill</a>
            </li>
            <li>
              <a href="#portfolio" className="block py-2 pl-3 pr-4 text-white rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 pl-3 pr-4 text-white rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;