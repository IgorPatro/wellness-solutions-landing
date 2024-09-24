import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Jaki jest termin realizacji zlecenia?",
    answer:
      "Termin realizacji wynosi od 30 do 45 dni w zależności od aktualnej liczby zamówień oraz indywidualnych wymagań projektu. Zachęcamy do kontaktu w celu uzyskania szczegółowych informacji na temat postępu prac oraz ewentualnych ustaleń związanych z konkretnym zamówieniem. Nasz zespół jest zawsze dostępny, aby odpowiedzieć na wszelkie pytania i dostosować harmonogram do Twoich potrzeb.",
  },
  {
    question: "Czy transport jest wliczony w cenę?",
    answer:
      "Koszt transportu ustalany jest indywidualnie po dokładnej wycenie zamówienia i nie jest wliczony w podstawową ofertę. Zależy to od odległości, miejsca dostawy oraz ewentualnych dodatkowych wymagań dotyczących montażu. Zapewniamy elastyczne podejście do każdego zamówienia, dlatego skontaktuj się z nami, aby uzyskać szczegółową kalkulację transportu dopasowaną do Twojej lokalizacji.",
  },
  {
    question: "Czy wykonują Państwo niestandardowe projekty?",
    answer:
      "Tak, specjalizujemy się w realizacji niestandardowych projektów. Jeśli masz pomysł na produkt, który nie znajduje się w naszej standardowej ofercie, serdecznie zapraszamy do kontaktu. Jesteśmy otwarci na współpracę i chętnie zaprojektujemy rozwiązanie dostosowane do Twoich indywidualnych potrzeb i preferencji. Nasz zespół projektowy z przyjemnością doradzi i pomoże w stworzeniu unikalnego produktu spełniającego Twoje wymagania.",
  },
  {
    question: "Jak wygląda rozliczenie?",
    answer:
      "Proces rozliczenia przebiega w dwóch etapach: 50% wartości zamówienia płatne jest po podpisaniu umowy, co umożliwia nam rozpoczęcie produkcji. Pozostałe 50% płatne jest po dostarczeniu produktu do Ciebie, co daje gwarancję, że otrzymasz to, czego oczekiwałeś. Takie podejście zapewnia przejrzystość i komfort dla obu stron, a także umożliwia pełną kontrolę nad realizacją zamówienia.",
  },
];

export const FAQ = () => (
  <section
    className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden"
    id="faq"
  >
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">
            O to pytają nas nasi klienci
          </p>
          <h2 className="mb-16 block-big-title text-center">
            Często zadawane pytania
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="rgb(255, 215, 0)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
