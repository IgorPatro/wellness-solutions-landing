import { useState } from "react";
import { motion } from "framer-motion";

import hero from "../assets/images/hero.png";

import { InvitationModal } from "./InvitationModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen relative flex justify-center h-screen items-center"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base mb-6 sm:mt-32 mt-16  font-bold">
            Balie, sauny, jacuzzi - dla Ciebie i Twoich bliskich
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h1 className="mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold text-primaryText px-8 sm:px-20 md:px-24 lg:px-24">
            Uczyń ogród swoją świątynią
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-24 ">
            Przenieś luksusowe spa do swojego ogrodu dzięki produktom, które
            łączą nowoczesną technologię z naturalnymi materiałami dla
            wyjątkowego relaksu w domowym zaciszu
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Skontaktuj się
            </button>
            <a
              className="rounded-lg font-bold border-primaryColor border text-primaryText flex justify-center items-center hover:bg-[#806C00] cursor-pointer transition w-64 sm:w-52 h-12 mb-2 sm:mb-0"
              href="#features"
            >
              Zobacz więcej
            </a>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
      <img
        src={hero.src}
        alt="Feature image 1"
        className="w-screen h-screen absolute top-0 left-0 object-cover"
        aria-label="Feature image 1"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};
