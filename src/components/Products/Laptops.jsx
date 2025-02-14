import { useState } from "react";
import { Link } from "react-router-dom";
import visibility from "../../assets/icons/visibility.svg";
import lenovoideapad115Igl7 from "../../assets/images/laptops/lenovo-ideapad-1-15Igl7.jpg";
import asusrogzephyrusg16 from "../../assets/images/laptops/asus-rog-zephyrus-g16.jpg";
import aceraspire3 from "../../assets/images/laptops/acer-aspire-3.jpg";
import asuszenbook14 from "../../assets/images/laptops/asus-zenbook-14.jpg";
import asuszenbooks16 from "../../assets/images/laptops/asus-zenbook-s-16.jpg";
import huaweimatebookd16 from "../../assets/images/laptops/huawei-matebook-d16.jpg";
import asustufgaminga15 from "../../assets/images/laptops/asus-tuf-gaming-a15.jpg";
import asusrogstrixg18 from "../../assets/images/laptops/asus-rog-strix-g18.jpg";
import asusvivobookgoe1504 from "../../assets/images/laptops/asus-vivobook-go-e1504.jpg";
import hpenvyx36016 from "../../assets/images/laptops/hp-envy-x360-16.jpg";
import asusrogstrixg16 from "../../assets/images/laptops/asus-rog-strix-g16.jpg";
import hpvictus15 from "../../assets/images/laptops/hp-victus-15.jpg";
import acerswiftgo14 from "../../assets/images/laptops/acer-swift-go-14.jpg";
import hp250g9 from "../../assets/images/laptops/hp-250-g9.jpg";
import asusvivobooks15 from "../../assets/images/laptops/asus-vivobook-s-15.jpg";
import acernitrov15 from "../../assets/images/laptops/acer-nitro-v-15.jpg";
import lenovolegion515arh7 from "../../assets/images/laptops/lenovo-legion-5-15arh7.jpg";
import asustufgaminga15fa506 from "../../assets/images/laptops/asus-tuf-gaming-a15-fa506.jpg";
import asusvivobook16x from "../../assets/images/laptops/asus-vivobook-16x.jpg";
import asusvivobook15x from "../../assets/images/laptops/asus-vivobook-15x.jpg";

const laptops = [
  {
    name: "Noutbuk Lenovo IdeaPad 1 15IGL7",
    price: 2620000,
    views: 1.2,
    offers: 9,
    image: lenovoideapad115Igl7,
  },
  {
    name: "Noutbuk Asus ROG Zephyrus G16",
    price: 2933000,
    views: 313,
    offers: 7,
    image: asusrogzephyrusg16,
  },
  {
    name: "Noutbuk Acer Aspire 3",
    price: 4030000,
    views: 143,
    offers: 46,
    image: aceraspire3,
  },
  {
    name: "Noutbuk Asus Zenbook 14",
    price: 7960500,
    views: 212,
    offers: 33,
    image: asuszenbook14,
  },
  {
    name: "Noutbuk Asus Zenbook S 16",
    price: 15847561,
    views: 123,
    offers: 7,
    image: asuszenbooks16,
  },
  {
    name: "Noutbuk Huawei Matebook D16",
    price: 5896000,
    views: 71,
    offers: 13,
    image: huaweimatebookd16,
  },
  {
    name: "Noutbuk Asus TUF Gaming A15",
    price: 8743500,
    views: 126,
    offers: 15,
    image: asustufgaminga15,
  },
  {
    name: "Noutbuk Asus ROG Strix G18",
    price: 20227500,
    views: 785,
    offers: 6,
    image: asusrogstrixg18,
  },
  {
    name: "Noutbuk Asus Vivobook Go E1504",
    price: 5000000,
    views: 665,
    offers: 15,
    image: asusvivobookgoe1504,
  },
  {
    name: "Noutbuk HP Envy x360 16",
    price: 7830000,
    views: 190,
    offers: 8,
    image: hpenvyx36016,
  },
  {
    name: "Noutbuk Asus ROG Strix G16",
    price: 11745000,
    views: 100,
    offers: 12,
    image: asusrogstrixg16,
  },
  {
    name: "Noutbuk HP Victus 15",
    price: 7475000,
    views: 145,
    offers: 42,
    image: hpvictus15,
  },
  {
    name: "Noutbuk Acer Swift Go 14",
    price: 5775255,
    views: 109,
    offers: 20,
    image: acerswiftgo14,
  },
  {
    name: "Noutbuk HP 250 G9",
    price: 3375000,
    views: 97,
    offers: 6,
    image: hp250g9,
  },
  {
    name: "Noutbuk ASUS Vivobook S 15",
    price: 9518902,
    views: 100,
    offers: 10,
    image: asusvivobooks15,
  },
  {
    name: "Noutbuk Acer Nitro V 15",
    price: 7830000,
    views: 114,
    offers: 13,
    image: acernitrov15,
  },
  {
    name: "Noutbuk Lenovo Legion 5 15ARH7",
    price: 677778,
    views: 486,
    offers: 8,
    image: lenovolegion515arh7,
  },
  {
    name: "Noutbuk Asus TUF Gaming A15 FA506",
    price: 12809000,
    views: 416,
    offers: 5,
    image: asustufgaminga15fa506,
  },
  {
    name: "Noutbuk ASUS VivoBook 16X",
    price: 6890000,
    views: 81,
    offers: 16,
    image: asusvivobook16x,
  },
  {
    name: "Noutbuk Asus Vivobook 15X",
    price: 4387500,
    views: 155,
    offers: 26,
    image: asusvivobook15x,
  },
];

const tabs = [
  { name: "HP", link: "/product/laptops/:id" },
  { name: "Acer", link: "/product/laptops/:id" },
  { name: "Lenovo", link: "/product/laptops/:id" },
  { name: "Asus", link: "/product/laptops/:id" },
  { name: "Dell", link: "/product/laptops/:id" },
  { name: "Apple", link: "/product/laptops/:id" },
];

const sortOptions = [
  { name: "mashhurligi bo'yicha", value: "views" },
  { name: "narxlar ko'tarilishi", value: "priceAsc" },
  { name: "narxlar kamayishi", value: "priceDesc" },
];

const Laptops = () => {
  const [sortBy, setSortBy] = useState("views");

  const sortedLaptops = [...laptops].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "views") return b.views - a.views;
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
          Noutbuklar
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
          {sortedLaptops.map((laptops, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4"
            >
              <img
                src={laptops.image}
                alt={laptops.name}
                className="w-24 h-24 object-contain mr-4 flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {laptops.name}
                </h2>
                <p className="text-gray-700">
                  {laptops.price.toLocaleString()} so'mdan
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <img src={visibility} alt="Views" className="w-5 h-5" />
                  <span>{laptops.views} marta ko'rilgan</span>
                </p>
                <p className="text-sm text-gray-500">
                  {laptops.offers} takliflar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptops;
