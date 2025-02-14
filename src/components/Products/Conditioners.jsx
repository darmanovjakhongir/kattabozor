import { useState } from "react";
import { Link } from "react-router-dom";
import visibility from "../../assets/icons/visibility.svg";
import lgp09ed from "../../assets/images/conditioners/lg-p09ed.jpg";
import greecliviainverter09 from "../../assets/images/conditioners/gree-clivia-inverter-09.jpg";
import auxamwmh124r3 from "../../assets/images/conditioners/aux-amwm-h12-4r3.jpg";
import auxamwmh094r3 from "../../assets/images/conditioners/aux-amwm-h09-4r3.jpg";
import mideanaomiinverter12 from "../../assets/images/conditioners/midea-naomi-inverter-12.jpg";
import yokoyke24acs from "../../assets/images/conditioners/yoko-yke-24-acs.jpg";
import artelmarvarid09 from "../../assets/images/conditioners/artel-marvarid-09.jpg";
import sitronicaswh12a4jir3di from "../../assets/images/conditioners/sitronic-asw-h12a4-jir3di.jpg";
import auxaswh18a4jlr from "../../assets/images/conditioners/aux-asw-h18a4-jlr.jpg";
import zifflerterrarium09 from "../../assets/images/conditioners/ziffler-terrarium-09.jpg";
import greecliviainverter18 from "../../assets/images/conditioners/gree-clivia-inverter-18.jpg";
import yokoyke09acs from "../../assets/images/conditioners/yoko-yke-09-acs.jpg";
import immerstorm18 from "../../assets/images/conditioners/immer-storm-18.jpg";
import mideatiba24 from "../../assets/images/conditioners/midea-tiba-24.jpg";
import immeroxygen12 from "../../assets/images/conditioners/immer-oxygen-12.jpg";
import auxaswh12a4jmr from "../../assets/images/conditioners/aux-asw-h12a4-jmr.jpg";
import shivakibreeze12kbtu from "../../assets/images/conditioners/shivaki-breeze-12kbtu.jpg";
import yokoyke12acs from "../../assets/images/conditioners/yoko-yke-12-acs.jpg";
import lgd09tt2 from "../../assets/images/conditioners/lg-d09tt2.jpg";
import samsungar09txhqasinua from "../../assets/images/conditioners/samsung-ar09txhqasinua.jpg";

const conditioners = [
  {
    name: "Konditsioner LG P09ED",
    price: 3999000,
    views: 131,
    offers: 2,
    image: lgp09ed,
  },
  {
    name: "Konditsioner Gree Clivia Inverter 09",
    price: 5089500,
    views: 75,
    offers: 3,
    image: greecliviainverter09,
  },
  {
    name: "Konditsioner AUX AMWM-H12/4R3",
    price: 2487100,
    views: 165,
    offers: 2,
    image: auxamwmh124r3,
  },
  {
    name: "Konditsioner AUX AMWM-H09/4R3",
    price: 2194500,
    views: 92,
    offers: 2,
    image: auxamwmh094r3,
  },
  {
    name: "Konditsioner Midea Naomi Inverter 12v",
    price: 6068250,
    views: 605,
    offers: 6,
    image: mideanaomiinverter12,
  },
  {
    name: "Konditsioner YOKO YKE-24/ACS",
    price: 7177500,
    views: 0,
    offers: 11,
    image: yokoyke24acs,
  },
  {
    name: "Konditsioner Artel Marvarid 09",
    price: 3619500,
    views: 112,
    offers: 4,
    image: artelmarvarid09,
  },
  {
    name: "Konditsioner Sitronic ASW-H12A4/JIR3DI",
    price: 5990000,
    views: 119,
    offers: 2,
    image: sitronicaswh12a4jir3di,
  },
  {
    name: "Konditsioner AUX ASW H18A4/JLR",
    price: 8777000,
    views: 108,
    offers: 2,
    image: auxaswh18a4jlr,
  },
  {
    name: "Konditsioner Ziffler Terrarium 09",
    price: 766667,
    views: 92,
    offers: 3,
    image: zifflerterrarium09,
  },
  {
    name: "Konditsioner Gree Clivia Inverter 18",
    price: 7634250,
    views: 71,
    offers: 5,
    image: greecliviainverter18,
  },
  {
    name: "Konditsioner Yoko YKE-09/ACS",
    price: 3523500,
    views: 0,
    offers: 7,
    image: yokoyke09acs,
  },
  {
    name: "Konditsioner Immer Storm 18",
    price: 1169000,
    views: 64,
    offers: 3,
    image: immerstorm18,
  },
  {
    name: "Konditsioner Midea TIBA 24",
    price: 15873000,
    views: 70,
    offers: 4,
    image: mideatiba24,
  },
  {
    name: "Konditsioner Immer Oxygen 12",
    price: 932500,
    views: 47,
    offers: 3,
    image: immeroxygen12,
  },
  {
    name: "Konditsioner AUX ASW H12A4/JMR",
    price: 5775400,
    views: 102,
    offers: 3,
    image: auxaswh12a4jmr,
  },
  {
    name: "Konditsioner Shivaki Breeze 12KBTU",
    price: 5199200,
    views: 51,
    offers: 4,
    image: shivakibreeze12kbtu,
  },
  {
    name: "Konditsioner Yoko YKE-12/ACS",
    price: 4422000,
    views: 0,
    offers: 6,
    image: yokoyke12acs,
  },
  {
    name: "Konditsioner LG D09TT2",
    price: 6003000,
    views: 59,
    offers: 3,
    image: lgd09tt2,
  },
  {
    name: "Konditsioner Samsung AR09TXHQASINUA",
    price: 5350500,
    views: 59,
    offers: 2,
    image: samsungar09txhqasinua,
  },
];

const tabs = [
  { name: "Artel", link: "/product/conditioners/:id" },
  { name: "LG", link: "/product/conditioners/:id" },
  { name: "Avalon", link: "/product/conditioners/:id" },
  { name: "Beko", link: "/product/conditioners/:id" },
  { name: "Midea", link: "/product/conditioners/:id" },
  { name: "Zanussi", link: "/product/conditioners/:id" },
  { name: "Shivaki", link: "/product/conditioners/:id" },
  { name: "Gree", link: "/product/conditioners/:id" },
  { name: "Hofmann", link: "/product/conditioners/:id" },
  { name: "Sitronic", link: "/product/conditioners/:id" },
  { name: "Samsung", link: "/product/conditioners/:id" },
  { name: "Haier", link: "/product/conditioners/:id" },
  { name: "Ziffler", link: "/product/conditioners/:id" },
  { name: "AUX", link: "/product/conditioners/:id" },
];

const sortOptions = [
  { name: "mashhurligi bo'yicha", value: "views" },
  { name: "narxlar ko'tarilishi", value: "priceAsc" },
  { name: "narxlar kamayishi", value: "priceDesc" },
];

const Conditioners = () => {
  const [sortBy, setSortBy] = useState("views");

  const sortedConditioners = [...conditioners].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "views") return b.views - a.views;
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
          Konditsionerlar
        </h3>
        {tabs.map((tab, index) => (
          <Link
            key={index}
            to={tab.link}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400"
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <div className="flex gap-4 mb-6 items-center text-gray-700">
          <span className="font-semibold">Saralash:</span>
          {sortOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSortBy(option.value)}
              className={`text-blue-600 hover:text-blue-800 active:text-blue-900 $`}
              aria-label={`Saralash: ${option.name}`}
            >
              {option.name}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {sortedConditioners.map((conditioners, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4"
            >
              <img
                src={conditioners.image}
                alt={conditioners.name}
                className="w-24 h-24 object-contain mr-4 flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {conditioners.name}
                </h2>
                <p className="text-gray-700">
                  {conditioners.price.toLocaleString()} so'mdan
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <img src={visibility} alt="Views" className="w-5 h-5" />
                  <span>{conditioners.views} marta ko'rilgan</span>
                </p>
                <p className="text-sm text-gray-500">
                  {conditioners.offers} takliflar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conditioners;
