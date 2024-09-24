import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";

const testimonialsData = [
  {
    customerName: "Pani Marta",
    customerTitle: "Małopolska",
    content:
      "Sauna ogrodowa od WellnessSolutions to najlepsza inwestycja, jaką zrobiłam. Nie tylko pięknie wygląda, ale też oferuje niesamowity relaks. Korzystam z niej z całą rodziną i każdy z nas jest zadowolony. Na pewno było warto!”",
  },

  {
    customerName: "Pan Janusz",
    customerTitle: "Podkarpacie",
    content:
      "Jestem zachwycony jakością wykonania mojej sauny! Od momentu montażu korzystam z niej regularnie i czuję ogromną różnicę w swoim samopoczuciu. Każdy detal jest dopracowany, a instalacja przebiegła bez żadnych problemów. Zdecydowanie polecam!",
  },
  {
    customerName: "Pan Karol",
    customerTitle: "Małopolska",
    content:
      "Moja balia ogrodowa to idealne miejsce na odprężenie po długim dniu. Jakość materiałów i staranność wykonania są na najwyższym poziomie. Świetnie komponuje się z moim ogrodem, a współpraca z firmą była bardzo profesjonalna.",
  },
];

export const Testimonials = () => (
  <section
    className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative"
    id="testimonials"
  >
    <div className="absolute -top-16" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Co o nas mówią</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          Opinie naszych klientów
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div className="flex flex-col">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
