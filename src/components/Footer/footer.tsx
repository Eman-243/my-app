import React from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

interface IconProps extends React.SVGProps<SVGSVGElement> { }

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white bottom-0 w-full font-sans relative ">
      <div className=" mx-auto tablet:py-8 py-4 flex tablet:justify-around max-w-6xl miniphone:justify-center ">
        <div className="flex flex-col sm:flex-row miniphone:items-center tablet:items-start"> {/* Flex container for logo and contact */}
          <img
            alt="Logo"
            className="h-20 w-20 tablet:h-24 tablet:w-24 mb-4 sm:mb-0 sm:mr-4"
            src="/logo2.png"
            style={{
              objectFit: "fill",
            }}
          />
          <div>
            <h2 className="tablet:text-lg font-semibold mb-2 tablet:text-left text-center text-sm" style={{ color: "#F9B823" }}>WELCOME TO NEXCEL</h2>
            <p className="text-sm mb-1 tablet:text-left miniphone:text-center ">Contact number: 17131036/33945666</p>
            <p className="text-sm tablet:text-left miniphone:text-center">Email: info@nexcel.me</p>
          </div>
        </div>
        <div className="minitablet:grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-4 sm:mt-0 hidden"> {/* Grid layout for links */}
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
          <div className="flex flex-wrap justify-center space-x-4 mt-4 opacity-60 sm:mr-4">
  <a className="hover:text-gray-300 mb-4" href="#">
    <FaWhatsapp className="h-6 w-6" />
  </a>
  <a className="hover:text-gray-300 mb-4" href="#">
    <FaInstagram className="h-6 w-6" />
  </a>
  <a className="hover:text-gray-300 mb-4" href="#">
    <FaTwitter className="h-6 w-6" />
  </a>
  <a className="hover:text-gray-300 mb-4" href="#">
    <FaFacebook className="h-6 w-6" />
  </a>
  {/* Add more social icons here */}
</div>

        </div>
        </div>
      </div>
      <div className="border-t border-gray-700 max-w-7xl mx-auto tablet:py-6 py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">© Nexcel Computer Solutions WLL – All Rights Reserved</p>
      </div>
    </footer>



  )
}