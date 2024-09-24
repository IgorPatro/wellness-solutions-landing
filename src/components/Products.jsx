import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex justify-center bg-bgDark2 relative"
      id="products"
    >
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Bestsellery naszej firmy</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Nasze produkty
              </h2>
              <p className="mb-6 text-secondaryText">
                Każdy z naszych produktów został starannie zaprojektowany, by
                zapewnić najwyższy poziom relaksu i komfortu.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Balia jacuzzi
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-3xl sm:text-4xl font-bold text-primaryText text-left mt-4 mr-2">
                      12 900 PLN
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    * cena brutto
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {[
                      "Funkcja hydromasażu",
                      "Wymiary: 200 x 100 cm",
                      "Pokrywa z laminatu",
                      "Zewnętrzny piec na drewno",
                      "Ławeczka i półka na napoje",
                    ].map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Zamów
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left">
                    Sauna ogrodowa
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-3xl sm:text-4xl font-bold text-primaryText text-left mt-4 mr-2">
                      11 900 PLN
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    * cena brutto
                  </p>
                  <ul className="mb-14 text-primaryText">
                    {[
                      "Piec elektryczny",
                      "Wymiary: 200 x 200 x 200 cm",
                      "Ławki: 179 cm",
                      "Hartowane, szklane drzwi",
                      "Oświetlenie RGB",
                    ].map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full contained-button leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Zamów
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Balia do schładzania
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-3xl sm:text-4xl font-bold text-primaryText text-left mt-4 mr-2">
                      9 000 PLN
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    * cena brutto
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {[
                      "Stalowe obejmy",
                      "Wymiary: 100 x 100 cm",
                      "Schodki",
                      "Wewnętrzna ławeczka",
                      "Drewniana pokrywka",
                    ].map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Zamów
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
