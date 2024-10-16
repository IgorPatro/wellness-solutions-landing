import React from "react";
import article1picture from "../assets/images/rodzaje-saun-i-ich-wplyw-na-zdrowie-roznice-i-korzysci.png";
import article2picture from "../assets/images/luksus-i-personalizacja-sauny-twoj-prywatny-osrodek-spa-na-zamowienie.png";
import article3picture from "../assets/images/roznice-miedzy-piecami-na-drewno-a-piecami-elektrycznymi-w-saunach.png";

const articles = [
  {
    title: "Rodzaje saun i ich wpływ na zdrowie - różnice i korzyści",
    image: article1picture,
    description:
      "Korzystanie z sauny stało się jednym z najbardziej popularnych sposobów na poprawę zdrowia i samopoczucia...",
    slug: "rodzaje-saun-i-ich-wplyw-na-zdrowie-roznice-i-korzysci",
  },
  {
    title:
      "Luksus i personalizacja sauny – Twój prywatny ośrodek spa na zamówienie",
    image: article2picture,
    description:
      "Sauny od dawna kojarzone są z relaksem, regeneracją i korzyściami zdrowotnymi, ale współczesne sauny...",
    slug: "luksus-i-personalizacja-sauny-twoj-prywatny-osrodek-spa-na-zamowienie",
  },
  {
    title: "Piece na drewno vs piece elektryczne - koszty i wygoda użytkowania",
    image: article3picture,
    description:
      "Wybór pieca do sauny to kluczowa decyzja, która ma wpływ nie tylko na komfort korzystania, ale...",
    slug: "roznice-miedzy-piecami-na-drewno-a-piecami-elektrycznymi-w-saunach",
  },
];

export const Blog = () => {
  return (
    <div className="flex justify-center bg-bgDark2 relative pt-2">
      <div className="px-2 sm:px-4">
        <section className="p-8 rounded-3xl w-full lg:w-[1200px] 2xl:w-[1400px] mb-24 mt-16 sm:mt-24">
          <header className="mb-12 max-w-[50vw]">
            <h1 className="text-[2rem] xs:text-[2.8rem] lg:text-[3.5rem] font-bold text-primaryText mb-4">
              Blog
            </h1>
            <p className="text-lg text-secondaryText mb-4">
              Znajdź odpowiedzi na nurtujące Cię pytania i dowiedz się więcej o
              naszych produktach i ich wpływie na zdrowie. Wszystko w jednym
              miejscu.
            </p>
          </header>

          <div className="flex gap-6 flex-wrap">
            {articles.map((article) => (
              <a
                href={`/blog/${article.slug}`}
                className="block bg-bgDark1 w-[340px] p-0 shrink-0 min-h-96 rounded-xl overflow-hidden shadow-2xl shadow-gray-700/40 hover:bg-bgDarkTransparentDarker"
              >
                <div className="relative w-full aspect-video">
                  <img
                    src={article.image.src}
                    alt={article.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    aria-label={article.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8 flex flex-col gap-2">
                  <h3 className="text-primaryText text-xl">{article.title}</h3>
                  <p className="text-gray-400">{article.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
