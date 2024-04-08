import React from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white bottom-0 w-full font-sans relative ">
      <div className=" mx-auto py-8 flex justify-between max-w-6xl ">
        <div className="flex flex-col sm:flex-row"> {/* Flex container for logo and contact */}
          <img
            alt="Logo"
            className="h-24 w-24 mb-4 sm:mb-0 sm:mr-4"
            src="/logo2.png"
            style={{
              objectFit: "fill",
            }}
          />
          <div>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#F9B823" }}>WELCOME TO NEXCEL</h2>
            <p className="text-sm mb-1">Contact number: 17131036/33945666</p>
            <p className="text-sm">Email: info@nexcel.me</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-4 sm:mt-0"> {/* Grid layout for links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">USEFUL LINKS</h3>
            <ul className="mt-4 space-y-2 opacity-60">
              <li>
                <a className="hover:text-gray-300" href="/profile">
                  Account
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="/products">
                  Shop
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="/cart">
                  Cart
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="#">
                  Wish List
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">SUPPORT</h3>
            <ul className="mt-4 space-y-2 opacity-60">
              <li>
                <a className="hover:text-gray-300" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">LEARN MORE</h3>
            <ul className="mt-4 space-y-2 opacity-60">
              <li>
                <a className="hover:text-gray-300" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div> {/* Flex container for social icons */}
          <h3 className="text-lg font-semibold">FOLLOW US</h3>
          <div className="flex space-x-4 mt-4 opacity-60">
            <a className="hover:text-gray-300" href="#">
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaFacebook className="h-6 w-6" />
            </a>
            {/* Add more social icons here */}
          </div>
        </div>
        </div>
      
      </div>
      <div className="border-t border-gray-700 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">© Nexcel Computer Solutions WLL – All Rights Reserved</p>
      </div>
    </footer>
  );
}
