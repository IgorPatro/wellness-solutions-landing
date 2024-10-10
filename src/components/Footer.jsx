import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import logo from "../assets/images/logo.png";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "Menu",
    items: [
      { label: "Home", href: "/#home" },
      { label: "Produkty", href: "/#products" },
      { label: "FAQ", href: "/#FAQ" },
    ],
  },
  {
    title: "Przydatne linki",
    items: [
      { label: "Terms & Conditions", href: "/privacy" },
      { label: "Polityka prywatności", href: "/privacy" },
    ],
  },
  {
    title: "Firma",
    items: [
      { label: "O producie", href: "/#features" },
      { label: "O nas", href: "/#about" },
      { label: "Opinie", href: "/#testimonials" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10 pb-5 lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <img
                src={logo.src}
                alt="Logo"
                className="h-10 m-auto lg:m-0"
                aria-label="Feature image 1"
              />
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Balie, sauny, jacuzzi - dla Ciebie i Twoich bliskich
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="https://www.facebook.com/61563397123353"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Menu
                </h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item.label}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Ważne linki
                </h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                    <li key={`${item.label}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Firma
                </h3>
                <ul>
                  {footerData[2].items.map((item, index) => (
                    <li key={`${item.label}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex lg:flex-row lg:text-left text-center flex-col justify-between text-gray-400 text-sm">
            <span>Copyright © 2024 Wellness Solutions</span>
            <span>NIP: 5170425445, KRS: 0000973762, REGON: 522108510</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
