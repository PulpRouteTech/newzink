"use client";
import Link from "next/link";
import menuData from "./menuData";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" w-full  bg-red-700 py-3 px-4 sm:px-6 lg:px-16">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0  px-4 py-2">
          <a href="/" className=" text-xl text-white font-bold ">
            {" "}
            NewzInk
          </a>
        </div>

        <nav className="hidden md:flex space-x-10">
          <ul className=" flex gap-2 ">
            {menuData.map((menuItem, index) => (
              <li
                key={index}
                className=" p-2 text-lg text-white font-semibold hover:text-gray-200"
              >
                <Link href={menuItem.path}>{menuItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <div className="-mr-2 flex md:hidden">
            <button onClick={toggle} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" x-description="Heroicon name: menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div> */}
      </div>
      {/* <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1 ">
        <ul className=" ">
                {menuData.map((menuItem, index)=>(
                    <li key={index} className=" p-2 text-lg">
                        <Link 
                        onClick={toggle}
                        href={menuItem.path}>
                            {menuItem.title}
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
      </div> */}
    </div>
  );
}
