
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" body-font items-center justify-between ">
      <div className="bg-white sm:flex-row flex-col ">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="ml-3 text-xl text-red-700 font-bold">NewzInk</span>
          </a>
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
        </div>
      </div>
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" font-semibold text-black tracking-widest text-sm mb-3">
              Important Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/about" className="text-gray-900 hover:text-red-700">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" font-semibold text-black tracking-widest text-sm mb-3">
              Important Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/about" className="text-gray-900 hover:text-red-700">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" font-semibold text-black tracking-widest text-sm mb-3">
              Important Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/about" className="text-gray-900 hover:text-red-700">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
              <li>
                <a href="/" className="text-gray-900 hover:text-red-700"></a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font text-blue-700 font-semibold tracking-widest text-lg mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label className="leading-7 text-base font-bold text-red-700">
                  Newzletter
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Subscribe Our Newzletter
            </p>
          </div>
        </div>
      </div>
      <div className=" items-center justify-center">
        <a href="www.pulproute.com" className="text-blue-700 hover:text-black">Design and Manged By - Pulp Route</a>
      </div>
    </footer>
  );
}
