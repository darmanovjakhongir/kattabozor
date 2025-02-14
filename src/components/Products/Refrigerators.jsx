import { useState } from "react";
import { Link } from "react-router-dom";
import visibility from "../../assets/icons/visibility.svg";
import premierprm315bfsf from "../../assets/images/refrigerators/premier-prm-315bfsf.jpg";
import artelhd370rndeco from "../../assets/images/refrigerators/artel-hd370-rnd-eco.jpg";
import hofmannrf324cdwg from "../../assets/images/refrigerators/hofmann-rf324cdwg.jpg";
import artelhd345fnd from "../../assets/images/refrigerators/artel-hd345fnd.jpg";
import samsungrt47cg6442 from "../../assets/images/refrigerators/samsung-rt47cg6442.jpg";
import samsungrt38cg6000S9wt from "../../assets/images/refrigerators/samsung-rt38cg6000S9wt.jpg";
import premierprm317bfnfdi from "../../assets/images/refrigerators/premier-prm-317bfnf-di.jpg";
import premierprm317bfnfi from "../../assets/images/refrigerators/premier-prm-317bfnf-i.jpg";
import samsungrf44a5002s9 from "../../assets/images/refrigerators/samsung-rf44a5002s9.jpg";
import lggcb257jlyv from "../../assets/images/refrigerators/lg-gc-b257jlyv.jpg";
import hofmannrf198cdtgihf from "../../assets/images/refrigerators/hofmann-rf198cdtg-i-hf.jpg";
import haiersc340jdl from "../../assets/images/refrigerators/haier-sc-340jdl.jpg";
import lggnb332smgb from "../../assets/images/refrigerators/lg-gn-b332smgb.jpg";
import artelhd455 from "../../assets/images/refrigerators/artel-hd455.jpg";
import ferrebcd275 from "../../assets/images/refrigerators/ferre-bcd275.jpg";
import lggrh802hmhl from "../../assets/images/refrigerators/lg-gr-h802hmhl.jpg";
import samsungrt42cb662022wt from "../../assets/images/refrigerators/samsung-rt42cb662022wt.jpg";
import artelhs276rn from "../../assets/images/refrigerators/artel-hs-276-rn.jpg";
import indesitits4160w from "../../assets/images/refrigerators/indesit-its4160w.jpg";
import toshibagrrb449wepmj from "../../assets/images/refrigerators/toshiba-gr-rb449we-pmj.jpg";

const refrigerators = [
  {
    name: "Muzlatgich Premier PRM-315BFSF",
    price: 4999000,
    views: 770,
    offers: 3,
    image: premierprm315bfsf,
  },
  {
    name: "Muzlatgich Artel HD 370 RND Eco",
    price: 4255000,
    views: 357,
    offers: 6,
    image: artelhd370rndeco,
  },
  {
    name: "Muzlatgich Hofmann RF324CDWG",
    price: 9507000,
    views: 33,
    offers: 2,
    image: hofmannrf324cdwg,
  },
  {
    name: "Muzlatgich Artel HD 345FND",
    price: 4572000,
    views: 71,
    offers: 3,
    image: artelhd345fnd,
  },
  {
    name: "Muzlatgich Samsung RT47CG6442",
    price: 10660000,
    views: 256,
    offers: 8,
    image: samsungrt47cg6442,
  },
  {
    name: "Muzlatgich Samsung RT38CG6000S9WT",
    price: 8249000,
    views: 42,
    offers: 2,
    image: samsungrt38cg6000S9wt,
  },
  {
    name: "Muzlatgich Premier PRM-317BFNF/DI",
    price: 6349000,
    views: 49,
    offers: 4,
    image: premierprm317bfnfdi,
  },
  {
    name: "Muzlatgich Premier PRM-317BFNF/I",
    price: 6649000,
    views: 58,
    offers: 4,
    image: premierprm317bfnfi,
  },
  {
    name: "Muzlatgich Samsung RF44A5002S9",
    price: 18653000,
    views: 55,
    offers: 3,
    image: samsungrf44a5002s9,
  },
  {
    name: "Muzlatgich LG GC-B257JLYV",
    price: 16051500,
    views: 52,
    offers: 3,
    image: lggcb257jlyv,
  },
  {
    name: "Muzlatgich Hofmann RF198CDTG-I/HF",
    price: 4615000,
    views: 43,
    offers: 2,
    image: hofmannrf198cdtgihf,
  },
  {
    name: "Vitrina muzlatgichi Haier SC-340JDL",
    price: 9135000,
    views: 42,
    offers: 3,
    image: haiersc340jdl,
  },
  {
    name: "Muzlatgich LG GN-B332SMGB",
    price: 9599000,
    views: 41,
    offers: 3,
    image: lggnb332smgb,
  },
  {
    name: "Muzlatgich Artel HD455",
    price: 7229700,
    views: 45,
    offers: 2,
    image: artelhd455,
  },
  {
    name: "Muzlatgich Ferre BCD275",
    price: 2949000,
    views: 42,
    offers: 2,
    image: ferrebcd275,
  },
  {
    name: "Muzlatgich LG GR-H802HMHL",
    price: 15665000,
    views: 31,
    offers: 3,
    image: lggrh802hmhl,
  },
  {
    name: "Muzlatgich Samsung RT42CB662022WT",
    price: 10999000,
    views: 23,
    offers: 3,
    image: samsungrt42cb662022wt,
  },
  {
    name: "Muzlatgich Artel HS-276 RN",
    price: 3549600,
    views: 68,
    offers: 2,
    image: artelhs276rn,
  },
  {
    name: "Muzlatgich Indesit ITS 4160W",
    price: 6240000,
    views: 42,
    offers: 2,
    image: indesitits4160w,
  },
  {
    name: "Muzlatgich Toshiba GR-RB449WE-PMJ",
    price: 8599000,
    views: 21,
    offers: 2,
    image: toshibagrrb449wepmj,
  },
];

const tabs = [
  { name: "Samsung", link: "/product/refrigerators/:id" },
  { name: "Artel", link: "/product/refrigerators/:id" },
  { name: "Hitachi", link: "/product/refrigerators/:id" },
  { name: "Avalon", link: "/product/refrigerators/:id" },
  { name: "Haier", link: "/product/refrigerators/:id" },
  { name: "Indesit", link: "/product/refrigerators/:id" },
  { name: "LG", link: "/product/refrigerators/:id" },
  { name: "Midea", link: "/product/refrigerators/:id" },
  { name: "Shivaki", link: "/product/refrigerators/:id" },
  { name: "Bosch", link: "/product/refrigerators/:id" },
];

const sortOptions = [
  { name: "mashhurligi bo'yicha", value: "views" },
  { name: "narxlar ko'tarilishi", value: "priceAsc" },
  { name: "narxlar kamayishi", value: "priceDesc" },
];

const Refrigerators = () => {
  const [sortBy, setSortBy] = useState("views");

  const sortedRefrigerators = [...refrigerators].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "views") return b.views - a.views;
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
          Muzlatgichlar
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
          {sortedRefrigerators.map((refrigerators, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4"
            >
              <img
                src={refrigerators.image}
                alt={refrigerators.name}
                className="w-24 h-24 object-contain mr-4 flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {refrigerators.name}
                </h2>
                <p className="text-gray-700">
                  {refrigerators.price.toLocaleString()} so'mdan
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <img src={visibility} alt="Views" className="w-5 h-5" />
                  <span>{refrigerators.views} marta ko'rilgan</span>
                </p>
                <p className="text-sm text-gray-500">
                  {refrigerators.offers} takliflar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Refrigerators;
