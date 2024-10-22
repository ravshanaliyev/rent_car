import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaPinterestP } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const FirstNavbar = () => {
  return (
    <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-3">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-red-500 text-xl">
            <MdEmail />
          </span>
          <span>info@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-red-500 text-xl">
            <FaLocationDot />
          </span>
          <span>88 Broklyn Golden Street, New York</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a href="#" className="hover:underline">
          Help
        </a>
        <span>/</span>
        <a href="#" className="hover:underline">
          Support
        </a>
        <span>/</span>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-3 gap-4 ">
        <a href="#" className="text-white hover:text-gray-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaFacebook />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaPinterestP />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default FirstNavbar;
