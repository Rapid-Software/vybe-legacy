import React from "react";

interface NavBarProps {
    curPage: string;
}

export const NavBar: React.FC<NavBarProps> = ({ curPage }) => {
    return (
        <div className={'relative pt-6 px-4 sm:px-6 lg:px-8 bg-gray-300'}>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center text-2xl text-true-gray-800">
                <img className={'h-32'} src="https://cdn.discordapp.com/attachments/787724579267280927/823985834616422460/logo.png" />
                
              </div>   
              <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                <a href="#" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  About
                </a>
                <a href="#" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Features
                </a>
                <a href="#" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  More
                  <svg className="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:flex items-center justify-center">
              <button className="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-yellow-600 to-red-700 text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">Download</button>
            </div>
          </div>
            </div>
    )
};