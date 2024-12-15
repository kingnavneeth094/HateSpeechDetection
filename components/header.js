"use client";

import dynamic from "next/dynamic";


function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md transition duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold tracking-wide hover:text-gray-200 transition duration-300">
          Hate Speech Detector
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <a href="/" className="hover:text-gray-200 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="/Login"
                className="bg-gray-100 text-blue-600 hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default dynamic(()=>Promise.resolve(Header),{ssr:false});