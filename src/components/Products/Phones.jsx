import { useState } from "react";
import { Link } from "react-router-dom";
import visibility from "../../assets/icons/visibility.svg";
import samsunggalaxya558256gb from "../../assets/images/phones/samsung-galaxy-a55-8-256gb.jpg";
import samsunggalaxya156128gb from "../../assets/images/phones/samsung-galaxy-a15-6-128gb.jpg";
import samsunggalaxya558128gb from "../../assets/images/phones/samsung-galaxy-a55-8-128gb.jpg";
import samsunggalaxys24ultra12512gb from "../../assets/images/phones/samsung-galaxy-s24-ultra-12-512gb.jpg";
import samsunggalaxya358128gb from "../../assets/images/phones/samsung-galaxy-a35-8-128gb.jpg";
import samsunggalaxys2412256gb from "../../assets/images/phones/samsung-galaxy-s24-12-256gb.jpg";
import samsunggalaxys248256gb from "../../assets/images/phones/samsung-galaxy-s24-8-256gb.jpg";
import samsunggalaxyzflip612256gb from "../../assets/images/phones/samsung-galaxy-z-flip-6-12-256gb.jpg";
import samsunggalaxya158256gb from "../../assets/images/phones/samsung-galaxy-a15-8-256gb.jpg";
import appleiphone16promax256gb from "../../assets/images/phones/apple-iphone-16-pro-max-256gb.jpg";
import infinixnote40pro12256gb from "../../assets/images/phones/infinix-note-40-pro-12-256gb.jpg";
import xiaomipocox5pro12512gb from "../../assets/images/phones/xiaomi-poco-x5-pro-12-512gb.jpg";
import samsunggalaxya166128gb from "../../assets/images/phones/samsung-galaxy-a16-6-128gb.jpg";
import samsunggalaxya256128gb from "../../assets/images/phones/samsung-galaxy-a25-6-128gb.jpg";
import tecnospark20pro8256gb from "../../assets/images/phones/tecno-spark-20-pro-8-256gb.jpg";
import samsunggalaxya358256gb from "../../assets/images/phones/samsung-galaxy-a35-8-256gb.jpg";
import xiaomi1412512gb from "../../assets/images/phones/xiaomi-14-12-512gb.jpg";
import samsunggalaxys248128gb from "../../assets/images/phones/samsung-galaxy-s24-8-128gb.jpg";
import xiaomi14ultra16512gb from "../../assets/images/phones/xiaomi-14-ultra-16-512gb.jpg";
import xiaomipocox6pro8256gb from "../../assets/images/phones/xiaomi-poco-x6-pro-8-256gb.jpg";

const phones = [
  {
    name: "Smartfon Samsung Galaxy A55 8/256GB",
    price: 4810000,
    views: 11.3,
    offers: 20,
    image: samsunggalaxya558256gb,
  },
  {
    name: "Smartfon Samsung Galaxy A15 6/128GB",
    price: 1999000,
    views: 14,
    offers: 2,
    image: samsunggalaxya156128gb,
  },
  {
    name: "Smartfon Samsung Galaxy A55 8/128GB",
    price: 4351000,
    views: 5.7,
    offers: 22,
    image: samsunggalaxya558128gb,
  },
  {
    name: "Smartfon Samsung Galaxy S24 Ultra 12/512GB",
    price: 14094000,
    views: 4.3,
    offers: 11,
    image: samsunggalaxys24ultra12512gb,
  },
  {
    name: "Smartfon Samsung Galaxy A35 8/128GB",
    price: 3719250,
    views: 5.9,
    offers: 25,
    image: samsunggalaxya358128gb,
  },
  {
    name: "Smartfon Samsung Galaxy S24+ 12/256GB",
    price: 10922000,
    views: 3.9,
    offers: 15,
    image: samsunggalaxys2412256gb,
  },
  {
    name: "Smartfon Samsung Galaxy S24 8/256GB",
    price: 7800000,
    views: 6,
    offers: 23,
    image: samsunggalaxys248256gb,
  },
  {
    name: "Smartfon Samsung Galaxy Z Flip 6 12/256GB",
    price: 11021000,
    views: 1.2,
    offers: 3,
    image: samsunggalaxyzflip612256gb,
  },
  {
    name: "Smartfon Samsung Galaxy A15 8/256GB",
    price: 2399000,
    views: 3.9,
    offers: 1,
    image: samsunggalaxya158256gb,
  },
  {
    name: "Smartfon Apple iPhone 16 Pro Max 256GB",
    price: 16510000,
    views: 3.4,
    offers: 27,
    image: appleiphone16promax256gb,
  },
  {
    name: "Smartfon Infinix Note 40 Pro 12/256GB",
    price: 3960000,
    views: 3.9,
    offers: 3,
    image: infinixnote40pro12256gb,
  },
  {
    name: "Smartfon Xiaomi Poco X5 Pro 12/512GB",
    price: 4355000,
    views: 5,
    offers: 5,
    image: xiaomipocox5pro12512gb,
  },
  {
    name: "Smartfon Samsung Galaxy A16 6/128GB",
    price: 2090000,
    views: 1.7,
    offers: 12,
    image: samsunggalaxya166128gb,
  },
  {
    name: "Smartfon Samsung Galaxy A25 6/128GB",
    price: 2849000,
    views: 4.5,
    offers: 7,
    image: samsunggalaxya256128gb,
  },
  {
    name: "Smartfon Tecno Spark 20 Pro 8/256GB",
    price: 2389000,
    views: 4.9,
    offers: 7,
    image: tecnospark20pro8256gb,
  },
  {
    name: "Smartfon Samsung Galaxy A35 8/256GB",
    price: 4017000,
    views: 2.6,
    offers: 10,
    image: samsunggalaxya358256gb,
  },
  {
    name: "Smartfon Xiaomi 14 12/512GB",
    price: 6760000,
    views: 3.2,
    offers: 12,
    image: xiaomi1412512gb,
  },
  {
    name: "Smartfon Samsung Galaxy S24 8/128GB",
    price: 6825000,
    views: 2.6,
    offers: 23,
    image: samsunggalaxys248128gb,
  },
  {
    name: "Smartfon Xiaomi 14 Ultra 16/512GB",
    price: 17980000,
    views: 3.3,
    offers: 4,
    image: xiaomi14ultra16512gb,
  },
  {
    name: "Smartfon Xiaomi Poco X6 Pro 8/256GB",
    price: 4200000,
    views: 1.7,
    offers: 3,
    image: xiaomipocox6pro8256gb,
  },
];

const tabs = [
  { name: "Smartfonlar", link: "/product/phones/:id" },
  { name: "Tugmachali telefonlar", link: "/product/phones/:id" },
  { name: "Samsung", link: "/product/phones/:id" },
  { name: "Xiaomi", link: "/product/phones/:id" },
  { name: "iPhone", link: "/product/phones/:id" },
  { name: "Novey", link: "/product/phones/:id" },
  { name: "Huawei", link: "/product/phones/:id" },
  { name: "Vivo", link: "/product/phones/:id" },
  { name: "Realme", link: "/product/phones/:id" },
  { name: "Nokia", link: "/product/phones/:id" },
  { name: "Honor", link: "/product/phones/:id" },
  { name: "Tecno", link: "/product/phones/:id" },
  { name: "OPPO", link: "/product/phones/:id" },
  { name: "BQ", link: "/product/phones/:id" },
  { name: "Artel", link: "/product/phones/:id" },
  { name: "INOI", link: "/product/phones/:id" },
  { name: "Vertu", link: "/product/phones/:id" },
  { name: "Infinix", link: "/product/phones/:id" },
];

const sortOptions = [
  { name: "mashhurligi bo'yicha", value: "views" },
  { name: "narxlar ko'tarilishi", value: "priceAsc" },
  { name: "narxlar kamayishi", value: "priceDesc" },
];

const Phones = () => {
  const [sortBy, setSortBy] = useState("views");

  const sortedPhones = [...phones].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "views") return b.views - a.views;
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
          Mobil telefonlar
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
          {sortedPhones.map((phones, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4"
            >
              <img
                src={phones.image}
                alt={phones.name}
                className="w-24 h-24 object-contain mr-4 flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {phones.name}
                </h2>
                <p className="text-gray-700">
                  {phones.price.toLocaleString()} so'mdan
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <img src={visibility} alt="Views" className="w-5 h-5" />
                  <span>{phones.views} marta ko'rilgan</span>
                </p>
                <p className="text-sm text-gray-500">
                  {phones.offers} takliflar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phones;
