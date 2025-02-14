import { useState } from "react";
import { Link } from "react-router-dom";
import visibility from "../../assets/icons/visibility.svg";
import premier43prm840usvsmarttv43 from "../../assets/images/televisions/premier-43prm840usv-smart-tv-43.jpg";
import shivakis32kh5000smarttv32 from "../../assets/images/televisions/shivaki-s32kh5000-smart-tv-32.jpg";
import premier43prm705ssmarttv43 from "../../assets/images/televisions/premier-43prm705s-smart-tv-43.jpg";
import tcl50p635smarttv50 from "../../assets/images/televisions/tcl-50p635-smart-tv-50.jpg";
import samsungue43t5300auxsmarttv43 from "../../assets/images/televisions/samsung-ue43t5300aux-smart-tv-43.jpg";
import shivakis43kf500043 from "../../assets/images/televisions/shivaki-s43kf5000-43.jpg";
import lg43ur81006smarttv43 from "../../assets/images/televisions/lg-43ur81006-smart-tv-43.jpg";
import shivakis43kf5500smarttv43 from "../../assets/images/televisions/shivaki-s43kf5500-smart-tv-43.jpg";
import tcl55p635smarttv55 from "../../assets/images/televisions/tcl-55p635-smart-tv-55.jpg";
import lg55uq76003hdrqledsmarttv55 from "../../assets/images/televisions/lg-55uq76003-hdr-qled-smart-tv-55.jpg";
import tcl65p635smarttv65 from "../../assets/images/televisions/tcl-65p635-smart-tv-65.jpg";
import lg43ur78009hdrledsmarttv43 from "../../assets/images/televisions/lg-43ur78009-hdr-led-smart-tv-43.jpg";
import premier43prm705svsmarttv43 from "../../assets/images/televisions/premier-43prm705sv-smart-tv-43.jpg";
import samsungue50du7100uxuzsmarttv50 from "../../assets/images/televisions/samsung-ue50du7100uxuz-smart-tv-50.jpg";
import shivakis32kh5500smarttv32 from "../../assets/images/televisions/shivaki-s32kh5500-smart-tv-32.jpg";
import lg43ur78006hdrledsmarttv43 from "../../assets/images/televisions/lg-43ur78006-hdr-led-smart-tv-43.jpg";
import lg55ut80006lasmarttv55 from "../../assets/images/televisions/lg-55ut80006la-smart-tv-55.jpg";
import artela43mf3300smarttv43 from "../../assets/images/televisions/artel-a43mf3300-smart-tv-43.jpg";
import lg43ur91006hdrledsmarttv43 from "../../assets/images/televisions/lg-43ur91006-hdr-led-smart-tv-43.jpg";
import lg43ut80006lasmarttv43 from "../../assets/images/televisions/lg-43ut80006la-smart-tv-43.jpg";

const televisions = [
  {
    name: 'Televizor Premier 43PRM840USV Smart TV 43"',
    price: 3591000,
    views: 1.7,
    offers: 2,
    image: premier43prm840usvsmarttv43,
  },
  {
    name: 'Televizor Shivaki S32KH5000 Smart TV 32"',
    price: 1581200,
    views: 1.2,
    offers: 5,
    image: shivakis32kh5000smarttv32,
  },
  {
    name: 'Televizor Premier 43PRM705S Smart TV 43"',
    price: 2891000,
    views: 994,
    offers: 2,
    image: premier43prm705ssmarttv43,
  },
  {
    name: 'Televizor TCL 50P635 Smart TV 50"',
    price: 4797200,
    views: 1,
    offers: 2,
    image: tcl50p635smarttv50,
  },
  {
    name: 'Televizor Samsung UE43T5300AUX Smart TV 43"',
    price: 3900000,
    views: 1,
    offers: 3,
    image: samsungue43t5300auxsmarttv43,
  },
  {
    name: 'Televizor Shivaki S43KF5000 43"',
    price: 2794000,
    views: 1.1,
    offers: 4,
    image: shivakis43kf500043,
  },
  {
    name: 'Televizor LG 43UR81006 Smart TV 43"',
    price: 4900000,
    views: 1.1,
    offers: 3,
    image: lg43ur81006smarttv43,
  },
  {
    name: 'Televizor Shivaki S43KF5500 Smart TV 43"',
    price: 3216000,
    views: 1,
    offers: 5,
    image: shivakis43kf5500smarttv43,
  },
  {
    name: 'Televizor TCL 55P635 Smart TV 55"',
    price: 5534200,
    views: 1,
    offers: 1,
    image: tcl55p635smarttv55,
  },
  {
    name: 'Televizor LG 55UQ76003 HDR QLED Smart TV 55"',
    price: 7302500,
    views: 1,
    offers: 6,
    image: lg55uq76003hdrqledsmarttv55,
  },
  {
    name: 'Televizor TCL 65P635 Smart TV 65"',
    price: 7745200,
    views: 971,
    offers: 1,
    image: tcl65p635smarttv65,
  },
  {
    name: 'Televizor LG 43UR78009 HDR LED Smart TV 43"',
    price: 5600000,
    views: 887,
    offers: 4,
    image: lg43ur78009hdrledsmarttv43,
  },
  {
    name: 'Televizor Premier 43PRM705SV Smart TV 43"',
    price: 2617000,
    views: 1,
    offers: 3,
    image: premier43prm705svsmarttv43,
  },
  {
    name: 'Televizor Samsung UE50DU7100UXUZ Smart TV 50"',
    price: 6472800,
    views: 149,
    offers: 5,
    image: samsungue50du7100uxuzsmarttv50,
  },
  {
    name: 'Televizor Shivaki S32KH5500 Smart TV 32"',
    price: 2042000,
    views: 992,
    offers: 5,
    image: shivakis32kh5500smarttv32,
  },
  {
    name: 'Televizor LG 43UR78006 HDR LED Smart TV 43"',
    price: 4900000,
    views: 1,
    offers: 3,
    image: lg43ur78006hdrledsmarttv43,
  },
  {
    name: 'Televizor LG 55UT80006LA Smart TV 55"',
    price: 6900000,
    views: 151,
    offers: 4,
    image: lg55ut80006lasmarttv55,
  },
  {
    name: 'Televizor Artel A43MF3300 Smart TV 43"',
    price: 2844900,
    views: 1.1,
    offers: 2,
    image: artela43mf3300smarttv43,
  },
  {
    name: 'Televizor LG 43UR91006 HDR LED Smart TV 43"',
    price: 6990000,
    views: 1,
    offers: 3,
    image: lg43ur91006hdrledsmarttv43,
  },
  {
    name: 'Televizor LG 43UT80006LA Smart TV 43"',
    price: 5900000,
    views: 164,
    offers: 3,
    image: lg43ut80006lasmarttv43,
  },
];

const tabs = [
  { name: "Smart TV", link: "/product/televisions/:id" },
  { name: "Sony", link: "/product/televisions/:id" },
  { name: "Samsung", link: "/product/televisions/:id" },
  { name: "Vista", link: "/product/televisions/:id" },
  { name: "Artel", link: "/product/televisions/:id" },
  { name: "LG", link: "/product/televisions/:id" },
  { name: "Shivaki", link: "/product/televisions/:id" },
  { name: "Ziffler", link: "/product/televisions/:id" },
  { name: "Immer", link: "/product/televisions/:id" },
  { name: "Premier", link: "/product/televisions/:id" },
  { name: "Roison", link: "/product/televisions/:id" },
];

const sortOptions = [
  { name: "mashhurligi bo'yicha", value: "views" },
  { name: "narxlar ko'tarilishi", value: "priceAsc" },
  { name: "narxlar kamayishi", value: "priceDesc" },
];

const Televisions = () => {
  const [sortBy, setSortBy] = useState("views");

  const sortedTelevisions = [...televisions].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "views") return b.views - a.views;
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
          Televizorlar
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
          {sortedTelevisions.map((televisions, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4"
            >
              <img
                src={televisions.image}
                alt={televisions.name}
                className="w-24 h-24 object-contain mr-4 flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {televisions.name}
                </h2>
                <p className="text-gray-700">
                  {televisions.price.toLocaleString()} so'mdan
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <img src={visibility} alt="Views" className="w-5 h-5" />
                  <span>{televisions.views} marta ko'rilgan</span>
                </p>
                <p className="text-sm text-gray-500">
                  {televisions.offers} takliflar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Televisions;
