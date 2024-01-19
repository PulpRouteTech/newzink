"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className=" scroll-auto w-full h-24 shadow-xl bg-red-700">
      <div className="flex items-center justify-center h-full w-full px-4 2xl:px-16">
        {/* <Link href="/">
          <h1 className=" hover:text-100 hover:border-l text-white p-2 text-xl font-semibold  ">NewzInk</h1>
        </Link> */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width="205"
            height="75"
            className=" shadow-2xl cursor-pointer rounded-xl"
          
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex items-center justify-center">
            <Link href="/about">
              <li className="ml-10 text-white hover:text-gray-100 uppercase hover:border-b text-base font-semibold">
                हमारे बारे में
              </li>
            </Link>
            <Link href="/opinion">
              <li className="ml-10 text-white hover:text-gray-100 uppercase hover:border-b text-base font-semibold">
                विचार
              </li>
            </Link>
            <Link href="/politics">
              <li className="ml-10 text-white hover:text-gray-100 uppercase hover:border-b text-base font-semibold">
                राजनीति
              </li>
            </Link>
            <Link href="/satire">
              <li className="ml-10 text-white hover:text-gray-100 uppercase hover:border-b text-base font-semibold">
                उलटबाँसी
      </li>
            </Link>

            <Link href="/series">
              <li className="ml-10 text-white hover:text-gray-100 uppercase hover:border-b text-base font-semibold">
                सीरीज
              </li>
            </Link>

            <Link href="/cinema">
              <li className="ml-10 text-white hover:text-gray-100 uppercase hover:border-b text-base font-semibold">
                सिनेमा
              </li>
            </Link>

            <Link href="/sports">
              <li className="ml-10 text-white hover:text-gray-100 uppercase hover:border-b text-base font-semibold">
                खेलकुद
              </li>
            </Link>
          </ul>
          <div className="flex flex-row justify-around p-10 items-center">
          <Link href="https://www.facebook.com/newzinks">
          <AiOutlineFacebook size={30} className=" cursor-pointer text-white hover:text-blue-300" />
          </Link>
          <Link href="https://www.instagram.com/newz.ink">
          <AiOutlineInstagram size={30} className="cursor-pointer text-white hover:text-pink-200" />
          </Link>
          <Link href="https://www.youtube.com/@Newzink">
          <AiOutlineYoutube size={30} className=" cursor-pointer text-white hover:text-gray-300" />
          </Link>
        </div>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-red-100 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            onClick={handleNav}
            className=" text-red-700 cursor-pointer"
          >
            <AiOutlineClose size={30} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b"
              >
                हमारे बारे में
              </li>
            </Link>
            <Link href="/opinion">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b"
              >
               विचार
              </li>
            </Link>
            <Link href="/politics">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b"
              >
                राजनीति
              </li>
            </Link>
            <Link href="/satire">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b"
              >
                 उलटबाँसी
              </li>
            </Link>
            <Link href="/series">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                सीरीज
              </li>
            </Link>
            <Link href="/cinema">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b"
              >
                सिनेमा
              </li>
            </Link>
            <Link href="/sports">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:bottom-b"
              >
                खेलकुद
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around p-10 items-center">
          <Link href="https://www.facebook.com/newzinks">
          <AiOutlineFacebook size={30} className=" cursor-pointer text-blue-700 hover:text-blue-900" />
          </Link>
          <Link href="https://www.instagram.com/newz.ink">
          <AiOutlineInstagram size={30} className="cursor-pointer text-pink-700 hover:text-pink-900" />
          </Link>
          <Link href="https://www.youtube.com/@Newzink">
          <AiOutlineYoutube size={30} className=" cursor-pointer text-red-700 hover:text-red-900" />
          </Link>
        </div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width="205"
            height="75"
            className=" shadow-2xl cursor-pointer"
          
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
































































































// "use client";
// import Link from "next/link";
// import menuData from "./menuData";
// import { useState } from "react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className=" w-full  bg-red-700 py-3 px-4 sm:px-6 lg:px-16">
//       <div className="flex items-center justify-between">
//         <div className="flex-shrink-0  px-4 py-2">
//           <a href="/" className=" text-xl text-white font-bold ">
//             {" "}
//             NewzInk
//           </a>
//         </div>

//         <nav className="hidden md:flex space-x-10">
//           <ul className=" flex gap-2 ">
//             {menuData.map((menuItem, index) => (
//               <li
//                 key={index}
//                 className=" p-2 text-lg text-white font-semibold hover:text-gray-200"
//               >
//                 <Link href={menuItem.path}>{menuItem.title}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {/* <div className="-mr-2 flex md:hidden">
//             <button onClick={toggle} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//               <span className="sr-only">Open main menu</span>
//               <svg className="h-6 w-6" x-description="Heroicon name: menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </button>
//           </div> */}
//       </div>
//       {/* <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//         <div className="pt-2 pb-3 space-y-1 ">
//         <ul className=" ">
//                 {menuData.map((menuItem, index)=>(
//                     <li key={index} className=" p-2 text-lg">
//                         <Link 
//                         onClick={toggle}
//                         href={menuItem.path}>
//                             {menuItem.title}
//                         </Link>

//                     </li>
//                 ))}
//             </ul>
//         </div>
//       </div> */}
//     </div>
//   );
// }
