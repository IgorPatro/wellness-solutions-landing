import { motion } from "framer-motion";

import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";

export const Trust = () => (
  <section className="py-12 sm:py-24 bg-bgDark1 w-full  lg:mt-16 mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5 flex flex-col justify-between items-center lg:flex-row">
        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
          <div className="flex flex-col text-center lg:text-start">
            <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText">
              Zaufali nam klienci
            </h2>
            <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor">
              z całej Polski
            </h2>
          </div>
        </div>
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-2 items-center max-w-32 text-center">
            <span className="text-primaryText font-bold text-3xl">50+</span>
            <span className="text-secondaryText">Zrealizowanych projektów</span>
          </div>
          <div className="flex flex-col gap-2 items-center max-w-32 text-center">
            <span className="text-primaryText font-bold text-3xl">9</span>
            <span className="text-secondaryText">Województw</span>
          </div>
          <div className="flex flex-col gap-2 items-center max-w-32 text-center">
            <span className="text-primaryText font-bold text-3xl">4.9/5</span>
            <span className="text-secondaryText">Średnia ocena</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
