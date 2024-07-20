'use client'

import React, { useState, useEffect } from "react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Offers","Menu", "Story", "Contact"].map((item) => (
        <li key={item} className="p-1 font-normal text-sm text-blue-gray-500">
          <a href="#" className="flex items-center">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-10 h-max w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white shadow">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
          Dine Design
        </a>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
          <button className="hidden lg:inline-block px-4 py-2 text-sm font-medium text-white bg-emerald-800 rounded-lg">
              <span class="button" data-glf-cuid="94badddd-5f1d-46f5-900e-fe497c12f5ff" data-glf-ruid="c07978a7-6d4a-48d4-8b9b-a15ff281c075" >See MENU & Order</span>
            </button>
            <button className="hidden lg:inline-block px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg">
              <span class="button" data-glf-cuid="94badddd-5f1d-46f5-900e-fe497c12f5ff" data-glf-ruid="c07978a7-6d4a-48d4-8b9b-a15ff281c075" data-glf-reservation="true" >Table Reservation</span>

            </button>
          </div>
          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {openNav && (
        <div className="lg:hidden">
          {navList}
          <div className="flex flex-col gap-2 mt-4">
            <button className="w-full px-4 py-2 text-sm font-medium text-blue-gray-500 bg-transparent border border-blue-gray-200 rounded-lg">
            <span class="glf-button" data-glf-cuid="94badddd-5f1d-46f5-900e-fe497c12f5ff" data-glf-ruid="c07978a7-6d4a-48d4-8b9b-a15ff281c075" >See MENU & Order</span>            </button>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg">
              Sign in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}