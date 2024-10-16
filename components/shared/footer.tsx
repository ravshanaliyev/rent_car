"use client";
import Image from "next/image";
import logo from "../../app/assets/images/white-logo.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdOutlineMail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <footer className="bg-slate-900 text-white">
      <div className="py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="Company Logo" className="w-28 h-auto" />
            <p className="text-lg font-bold">
              Save big with our cheap car rental
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <button
                  key={index}
                  className="p-3 rounded-full bg-white text-blue-950 hover:bg-red-600 hover:text-white transition-all"
                >
                  <Icon />
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="bg-[url('/scr/assets/images/bg-light-footer.webp')] bg-cover bg-center py-10">
        <div className="bg-slate-900 bg-opacity-80 py-10">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="font-bold text-xl">Contact</h2>
              <p className="mt-4 text-gray-400">
                66 Road Broklyn Golden Street, 600 New York, USA
              </p>
              <div className="flex items-center mt-4">
                <MdOutlineMail className="text-red-600 text-xl" />
                <p className="ml-2">needhelp@company.com</p>
              </div>
              <div className="flex items-center mt-2">
                <BiSolidPhoneCall className="text-red-600 text-xl" />
                <p className="ml-2">+92 (666) 888 0000</p>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-2xl">Quick Links</h2>
              <ul className="mt-4 space-y-2 text-gray-400">
                {[
                  "About Us",
                  "New Cars",
                  "Latest News",
                  "Gallery",
                  "Contact",
                ].map((link, index) => (
                  <li
                    key={index}
                    className="hover:text-red-700 cursor-pointer transition-all"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-xl">Gallery</h2>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {Array(6)
                  .fill(
                    "https://pixydrops.com/remons/assets/img/car/popular-car-1.jpg"
                  )
                  .map((imgSrc, index) => (
                    <div
                      key={index}
                      className="relative w-full h-16 rounded-lg overflow-hidden group"
                    >
                      <img
                        src={imgSrc}
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-red-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-3xl">+</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="font-bold text-xl">Newsletter</h2>
              <p className="mt-4 text-gray-400">
                Subscribe to our newsletter to get the latest updates and news.
              </p>
              <form className="flex items-center mt-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-3 rounded-l bg-white text-black outline-none w-full"
                />
                <button className="p-3 bg-blue-600 text-white rounded-r">
                  <FaTelegram className="text-2xl" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-7 text-center text-gray-400">
            © 2024 by Remons.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
