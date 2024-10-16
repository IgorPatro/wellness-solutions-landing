import { useState } from "react";
import { motion } from "framer-motion";

import logo from "../assets/images/logo.png";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "O producie", href: "/#features", ariaLabel: "Features" },
  { label: "O nas", href: "/#about", ariaLabel: "Pricing" },
  { label: "Produkty", href: "/#products", ariaLabel: "Pricing" },
  { label: "Opinie", href: "/#testimonials", ariaLabel: "Feedback" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
  { label: "Blog", href: "/blog", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-transparent z-40 lg:backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <a href="/#home" aria-label="Home">
              <img
                src={logo.src}
                alt="Logo"
                className="h-10"
                aria-label="Feature image 1"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="hidden lg:flex h-full pl-12 pb-2">
              {navbarLinks.map(({ href, label, ariaLabel }) => (
                <a
                  className="text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                  href={href}
                  aria-label={ariaLabel}
                  key={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
          <div
            className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 "></div>
          </div>
        </div>
      </nav>
      {/* Mobile navbar */}
      {isOpen && (
        <div className="flex fixed bottom-0 left-0 flex-col lg:hidden bg-bgDark1 w-full h-[calc(100vh-80px)] items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10 z-20">
          {navbarLinks.map(({ label, href, ariaLabel }) => (
            <a
              key={href}
              className="text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
              href={href}
              onClick={() => setIsOpen(false)}
              aria-label={ariaLabel}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};
