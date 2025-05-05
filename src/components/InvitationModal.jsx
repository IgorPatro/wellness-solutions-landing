import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { PhoneIcon } from "../assets/icons/PhoneIcon";
import { EmailIcon } from "../assets/icons/EmailIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const InvitationModal = ({ setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setTriedToSubmit(true);
    if (!email && !phone) return;

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/3pagbhrz39wga7klljsewclcgm4bgtqv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            phone,
          }),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isError = triedToSubmit && !email && !phone;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative flex-col lg:flex-row">
              <div className="lg:w-1/2 flex flex-col gap-3">
                <h2 className="mt-6 mb-2 text-3xl font-bold tracking-normal text-primaryText">
                  Zostaw swój <span className="text-secondaryColor">email</span>{" "}
                  lub
                  <br />
                  <span className="text-secondaryColor">numer telefonu</span>
                </h2>
                <p className="text-secondaryText">
                  Jeśli chcesz możesz też sam się z nami skontaktować:
                </p>
                <ul className="mb-6 mt-4 text-primaryText">
                  <li className="mb-4 flex items-center">
                    <PhoneIcon />
                    <a href="tel:+48785375312">+48 609 314 637</a>
                  </li>
                  <li className="mb-4 flex items-center">
                    <EmailIcon />
                    <a href="mailto:hello@wellnesssolutions.pl">
                      hello@wellnesssolutions.pl
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-6 sm:pt-0">
                {isSubmitted ? (
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-primaryText text-3xl">
                      Przesłano formularz
                    </p>
                    <p className="text-secondaryText">
                      Wkrótce się z Tobą skontaktujemy
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-wrap -m-2 w-full">
                    <div className="lg:w-4/5 p-2 mx-auto flex flex-col gap-2 w-full">
                      <input
                        className={`px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 ${
                          isError
                            ? "ring-red-500 border-red-500 bg-red-200"
                            : ""
                        }`}
                        id="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        className={`px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 ${
                          isError
                            ? "ring-red-500 border-red-500 bg-red-200"
                            : ""
                        }`}
                        id="phone"
                        type="text"
                        placeholder="Telefon"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                      <button
                        className="py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#AA8F00] transition ease-in-out duration-200 "
                        type="button"
                        aria-label="Join now"
                        onClick={handleSubmit}
                      >
                        Proszę o kontakt
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
