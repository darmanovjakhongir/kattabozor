import { useState } from "react";
import { Link } from "react-router-dom";
import visibility from "../../assets/icons/visibility.svg";
import huaweiwatchgt5pro42mm from "../../assets/images/smartwatches/huawei-watch-gt-5-pro-42mm.jpg";
import huaweiwatchgt546mm from "../../assets/images/smartwatches/huawei-watch-gt-5-46mm.jpg";
import huaweiwatchgt441mm from "../../assets/images/smartwatches/huawei-watch-gt-4-41mm.jpg";
import samsunggalaxywatch744мм from "../../assets/images/smartwatches/samsung-galaxy-watch-7-44мм.jpg";
import xiaomiredmiwatch4 from "../../assets/images/smartwatches/xiaomi-redmi-watch-4.jpg";
import vertuwatchh1 from "../../assets/images/smartwatches/vertu-watch-h1.jpg";
import applewatchUltra249mm from "../../assets/images/smartwatches/apple-watch-Ultra-2-49mm.jpg";
import applewatchseries1046mm from "../../assets/images/smartwatches/apple-watch-series-10-46mm.jpg";
import applewatchseries1042mm from "../../assets/images/smartwatches/apple-watch-series-10-42mm.jpg";
import amazfitactive from "../../assets/images/smartwatches/amazfit-active.jpg";
import samsunggalaxywatchfe from "../../assets/images/smartwatches/samsung-galaxy-watch-fe.jpg";
import huaweiwatchgt446mm from "../../assets/images/smartwatches/huawei-watch-gt-4-46mm.jpg";
import huaweiwatchgt5pro46mm from "../../assets/images/smartwatches/huawei-watch-gt-5-pro-46mm.jpg";
import huaweiwatchgt541mm from "../../assets/images/smartwatches/huawei-watch-gt-5-41mm.jpg";
import amazfitgtrmini from "../../assets/images/smartwatches/amazfit-gtr-mini.jpg";
import xiaomiwatchs3 from "../../assets/images/smartwatches/xiaomi-watch-s3.jpg";
import samsunggalaxywatchultra from "../../assets/images/smartwatches/samsung-galaxy-watch-ultra.jpg";
import samsunggalaxywatch740мм from "../../assets/images/smartwatches/samsung-galaxy-watch-7-40мм.jpg";
import xiaomiredmiwatch5active from "../../assets/images/smartwatches/xiaomi-redmi-watch-5-active.jpg";
import xiaomiredmiwatch5lite from "../../assets/images/smartwatches/xiaomi-redmi-watch-5-lite.jpg";

const smartwatches = [
  {
    name: "Smart soat Huawei Watch GT 5 Pro 42mm",
    price: 4788000,
    views: 12,
    offers: 2,
    image: huaweiwatchgt5pro42mm,
  },
  {
    name: "Smart soat Huawei Watch GT 5 46mm",
    price: 2727000,
    views: 16,
    offers: 8,
    image: huaweiwatchgt546mm,
  },
  {
    name: "Smart soat Huawei Watch GT 4 41mm",
    price: 2236000,
    views: 16,
    offers: 2,
    image: huaweiwatchgt441mm,
  },
  {
    name: "Smart soat Samsung Galaxy Watch 7 44мм",
    price: 3699000,
    views: 9,
    offers: 5,
    image: samsunggalaxywatch744мм,
  },
  {
    name: "Smart soat Xiaomi Redmi Watch 4",
    price: 153000,
    views: 25,
    offers: 11,
    image: xiaomiredmiwatch4,
  },
  {
    name: "Smart soat Vertu Watch H1",
    price: 16500000,
    views: 23,
    offers: 7,
    image: vertuwatchh1,
  },
  {
    name: "Smart soat Apple Watch Ultra 2 49mm",
    price: 8931000,
    views: 268,
    offers: 22,
    image: applewatchUltra249mm,
  },
  {
    name: "Smart soat Apple Watch Series 10 46mm",
    price: 5481000,
    views: 208,
    offers: 18,
    image: applewatchseries1046mm,
  },
  {
    name: "Smart soat Apple Watch Series 10 42mm",
    price: 5291000,
    views: 141,
    offers: 20,
    image: applewatchseries1042mm,
  },
  {
    name: "Smart soat Amazfit Active",
    price: 1290000,
    views: 17,
    offers: 5,
    image: amazfitactive,
  },
  {
    name: "Smart soat Samsung Galaxy Watch FE",
    price: 2730000,
    views: 28,
    offers: 1,
    image: samsunggalaxywatchfe,
  },
  {
    name: "Smart soat Huawei Watch GT 4 46mm",
    price: 3777000,
    views: 9,
    offers: 2,
    image: huaweiwatchgt446mm,
  },
  {
    name: "Smart soat Huawei Watch GT 5 Pro 46mm",
    price: 3799000,
    views: 18,
    offers: 4,
    image: huaweiwatchgt5pro46mm,
  },
  {
    name: "Smart soat Huawei Watch GT 5 41mm",
    price: 2727000,
    views: 8,
    offers: 4,
    image: huaweiwatchgt541mm,
  },
  {
    name: "Smart soat Amazfit GTR Mini",
    price: 1190000,
    views: 9,
    offers: 8,
    image: amazfitgtrmini,
  },
  {
    name: "Smart soat Xiaomi Watch S3",
    price: 1651000,
    views: 17,
    offers: 7,
    image: xiaomiwatchs3,
  },
  {
    name: "Smart soat Samsung Galaxy Watch Ultra",
    price: 6200000,
    views: 7,
    offers: 4,
    image: samsunggalaxywatchultra,
  },
  {
    name: "Smart soat Samsung Galaxy Watch 7 40мм",
    price: 3493000,
    views: 9,
    offers: 4,
    image: samsunggalaxywatch740мм,
  },
  {
    name: "Smart soat Xiaomi Redmi Watch 5 Active",
    price: 440000,
    views: 18,
    offers: 3,
    image: xiaomiredmiwatch5active,
  },
  {
    name: "Smart soat Xiaomi Redmi Watch 5 Lite",
    price: 599000,
    views: 7,
    offers: 6,
    image: xiaomiredmiwatch5lite,
  },
];

const tabs = [
  { name: "Smart soatlar", link: "/product/smartwatches/:id" },
  { name: "Fitnes brasletlar", link: "/product/smartwatches/:id" },
  { name: "Apple", link: "/product/smartwatches/:id" },
  { name: "Huawei", link: "/product/smartwatches/:id" },
  { name: "Samsung", link: "/product/smartwatches/:id" },
  { name: "Xiaomi", link: "/product/smartwatches/:id" },
  { name: "Vertu", link: "/product/smartwatches/:id" },
];

const sortOptions = [
  { name: "mashhurligi bo'yicha", value: "views" },
  { name: "narxlar ko'tarilishi", value: "priceAsc" },
  { name: "narxlar kamayishi", value: "priceDesc" },
];

const Smartwatches = () => {
  const [sortBy, setSortBy] = useState("views");

  const sortedSmartwatches = [...smartwatches].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "views") return b.views - a.views;
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
          Smart soatlar va fitnes brasletlar
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
          {sortedSmartwatches.map((smartwatches, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4"
            >
              <img
                src={smartwatches.image}
                alt={smartwatches.name}
                className="w-24 h-24 object-contain mr-4 flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {smartwatches.name}
                </h2>
                <p className="text-gray-700">
                  {smartwatches.price.toLocaleString()} so'mdan
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <img src={visibility} alt="Views" className="w-5 h-5" />
                  <span>{smartwatches.views} marta ko'rilgan</span>
                </p>
                <p className="text-sm text-gray-500">
                  {smartwatches.offers} takliflar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Smartwatches;
