import { useState } from "react";
import { Link } from "react-router-dom";
import visibility from "../../assets/icons/visibility.svg";
import xiaomiredmipadpro6128gb from "../../assets/images/tablets/xiaomi-redmi-pad-pro-6-128gb.jpg";
import xiaomredmipadpro8256gb from "../../assets/images/tablets/xiaom-redmi-pad-pro-8-256gb.jpg";
import samsunggalaxytaba9plus8128gb from "../../assets/images/tablets/samsung-galaxy-tab-a9-plus-8-128gb.jpg";
import appleipadprom4512gb from "../../assets/images/tablets/apple-ipad-pro-m4-512gb.jpg";
import samsunggalaxytaba98128gb from "../../assets/images/tablets/samsung-galaxy-tab-a9-8-128gb.jpg";
import samsunggalaxytabs9fe8128gb from "../../assets/images/tablets/samsung-galaxy-tab-s9-fe-8-128gb.jpg";
import samsunggalaxytaba9plus464gb from "../../assets/images/tablets/samsung-galaxy-tab-a9-plus-4-64gb.jpg";
import xiaomiredmipadse4128gb from "../../assets/images/tablets/xiaomi-redmi-pad-se-4-128gb.jpg";
import samsunggalaxytabs9fe6128gb from "../../assets/images/tablets/samsung-galaxy-tab-s9-fe-6-128gb.jpg";
import xiaomiredmipadse464gb from "../../assets/images/tablets/xiaomi-redmi-pad-se-4-64gb.jpg";
import appleipadprom41tb from "../../assets/images/tablets/apple-ipad-pro-m4-1tb.jpg";
import samsunggalaxytaba9464gb from "../../assets/images/tablets/samsung-galaxy-tab-a9-4-64gb.jpg";
import blackviewtab13pro128gb from "../../assets/images/tablets/blackview-tab-13-pro-128gb.jpg";
import blackviewtabactive68128gb from "../../assets/images/tablets/blackview-tab-active-6-8-128gb.jpg";
import appleipadprom4256gb from "../../assets/images/tablets/apple-ipad-pro-m4-256gb.jpg";
import honorpadx94128gb from "../../assets/images/tablets/honor-pad-x9-4-128gb.jpg";
import teclastt40hd8128GB from "../../assets/images/tablets/teclast-t40hd-8-128GB.jpg";
import samsunggalaxytabs9fe8256GB from "../../assets/images/tablets/samsung-galaxy-tab-s9-fe-8-256GB.jpg";
import samsunggalaxytabs9fe5g6128GB from "../../assets/images/tablets/samsung-galaxy-tab-s9-fe-5g-6-128GB.jpg";
import blackviewtab16lte8256gb from "../../assets/images/tablets/blackview-tab-16-lte-8-256gb.jpg";

const tablets = [
  {
    name: "Planshet Xiaomi Redmi Pad Pro 6/128GB",
    price: 3363400,
    views: 360,
    offers: 5,
    image: xiaomiredmipadpro6128gb,
  },
  {
    name: "Planshet Xiaomi Redmi Pad Pro 8/256GB",
    price: 3819000,
    views: 310,
    offers: 3,
    image: xiaomredmipadpro8256gb,
  },
  {
    name: "Planshet Samsung Galaxy Tab A9 Plus 8/128GB",
    price: 2678000,
    views: 613,
    offers: 8,
    image: samsunggalaxytaba9plus8128gb,
  },
  {
    name: "Planshet Apple iPad Pro M4 512GB",
    price: 17617500,
    views: 447,
    offers: 15,
    image: appleipadprom4512gb,
  },
  {
    name: "Planshet Samsung Galaxy Tab A9 8/128GB",
    price: 2646000,
    views: 323,
    offers: 4,
    image: samsunggalaxytaba98128gb,
  },
  {
    name: "Planshet Samsung Galaxy Tab S9 FE+ 8/128GB",
    price: 10525600,
    views: 298,
    offers: 10,
    image: samsunggalaxytabs9fe8128gb,
  },
  {
    name: "Planshet Samsung Galaxy Tab A9 Plus 4/64GB",
    price: 2276000,
    views: 323,
    offers: 10,
    image: samsunggalaxytaba9plus464gb,
  },
  {
    name: "Planshet Xiaomi Redmi Pad SE 4/128GB",
    price: 1722600,
    views: 22,
    offers: 5,
    image: xiaomiredmipadse4128gb,
  },
  {
    name: "Planshet Samsung Galaxy Tab S9 FE 6/128GB",
    price: 6045000,
    views: 243,
    offers: 4,
    image: samsunggalaxytabs9fe6128gb,
  },
  {
    name: "Planshet Xiaomi Redmi Pad SE 4/64GB",
    price: 1592100,
    views: 38,
    offers: 4,
    image: xiaomiredmipadse464gb,
  },
  {
    name: "Planshet Apple iPad Pro M4 1TB",
    price: 19630000,
    views: 189,
    offers: 13,
    image: appleipadprom41tb,
  },
  {
    name: "Planshet Samsung Galaxy Tab A9 4/64GB",
    price: 2089000,
    views: 322,
    offers: 7,
    image: samsunggalaxytaba9464gb,
  },
  {
    name: "Planshet Blackview Tab 13 Pro 128GB",
    price: 2589000,
    views: 15,
    offers: 1,
    image: blackviewtab13pro128gb,
  },
  {
    name: "Planshet Blackview Tab Active 6 8/128GB",
    price: 3339000,
    views: 17,
    offers: 1,
    image: blackviewtabactive68128gb,
  },
  {
    name: "Planshet Apple iPad Pro M4 256GB",
    price: 14355000,
    views: 376,
    offers: 15,
    image: appleipadprom4256gb,
  },
  {
    name: "Planshet Honor Pad X9 4/128GB",
    price: 3490000,
    views: 27,
    offers: 3,
    image: honorpadx94128gb,
  },
  {
    name: "Planshet Teclast T40HD 8/128GB",
    price: 2589000,
    views: 24,
    offers: 1,
    image: teclastt40hd8128GB,
  },
  {
    name: "Planshet Samsung Galaxy Tab S9 FE 8/256GB",
    price: 7765000,
    views: 288,
    offers: 4,
    image: samsunggalaxytabs9fe8256GB,
  },
  {
    name: "Planshet Samsung Galaxy Tab S9 FE 5G 6/128GB",
    price: 5872500,
    views: 29,
    offers: 2,
    image: samsunggalaxytabs9fe5g6128GB,
  },
  {
    name: "Planshet Blackview Tab 16 LTE 8/256GB",
    price: 2839000,
    views: 23,
    offers: 2,
    image: blackviewtab16lte8256gb,
  },
];

const tabs = [
  { name: "Apple", link: "/product/tablets/:id" },
  { name: "Samsung", link: "/product/tablets/:id" },
  { name: "Huawei", link: "/product/tablets/:id" },
  { name: "BQ", link: "/product/tablets/:id" },
  { name: "Lenovo", link: "/product/tablets/:id" },
];

const sortOptions = [
  { name: "mashhurligi bo'yicha", value: "views" },
  { name: "narxlar ko'tarilishi", value: "priceAsc" },
  { name: "narxlar kamayishi", value: "priceDesc" },
];

const Tablets = () => {
  const [sortBy, setSortBy] = useState("views");

  const sortedTablets = [...tablets].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "views") return b.views - a.views;
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
          Planshetlar
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
          {sortedTablets.map((tablets, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4"
            >
              <img
                src={tablets.image}
                alt={tablets.name}
                className="w-24 h-24 object-contain mr-4 flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {tablets.name}
                </h2>
                <p className="text-gray-700">
                  {tablets.price.toLocaleString()} so'mdan
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <img src={visibility} alt="Views" className="w-5 h-5" />
                  <span>{tablets.views} marta ko'rilgan</span>
                </p>
                <p className="text-sm text-gray-500">
                  {tablets.offers} takliflar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tablets;
