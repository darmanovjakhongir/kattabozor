import { useState } from "react";
import { Link } from "react-router-dom";
import visibility from "../../assets/icons/visibility.svg";
import premier27prm100ledm from "../../assets/images/monitors/premier-27-prm100ledm.jpg";
import msig274qpfe227 from "../../assets/images/monitors/msi-g274qpf-e2-27.jpg";
import huaweiad80hw23 from "../../assets/images/monitors/huawei-ad80hw-23.8.jpg";
import msipromp27127 from "../../assets/images/monitors/msi-pro-mp271-27.jpg";
import hpm32f315 from "../../assets/images/monitors/hp-m32f-31.5.jpg";
import pixelpxg27i27 from "../../assets/images/monitors/pixel-pxg27i-27.jpg";
import asuszenscreengomb16ap from "../../assets/images/monitors/asus-zenscreengo-mb16ap.jpg";
import gigabyteg34wqc34 from "../../assets/images/monitors/gigabyte-g34wqc-34.jpg";
import benqgl278027 from "../../assets/images/monitors/benq-gl2780-27.jpg";
import hpz24ng324 from "../../assets/images/monitors/hp-z24n-g3-24.jpg";
import benqew3880r from "../../assets/images/monitors/benq-ew3880r.jpg";
import gigabyteg27qc27 from "../../assets/images/monitors/gigabyte-g27qc-27.jpg";
import msioptixmag342cq34 from "../../assets/images/monitors/msi-optix-mag342cq-34.jpg";
import hpm27f27 from "../../assets/images/monitors/hp-m27f-27.jpg";
import aorusfv43u43 from "../../assets/images/monitors/aorus-fv43u-43.jpg";
import asustufgamingvg279qr27 from "../../assets/images/monitors/asus-tuf-gaming-vg279qr-27.jpg";
import gigabytem32qek32 from "../../assets/images/monitors/gigabyte-m32q-ek-32.jpg";
import gigabytem28uek28 from "../../assets/images/monitors/gigabyte-m28u-ek-28.jpg";
import gigabyteg27fc27 from "../../assets/images/monitors/gigabyte-g27fc-27.jpg";
import gigabyteg32qc32 from "../../assets/images/monitors/gigabyte-g32qc-32.jpg";

const monitors = [
  {
    name: "Monitor Premier 27 PRM100LEDM",
    price: 1280000,
    views: 49,
    offers: 2,
    image: premier27prm100ledm,
  },
  {
    name: "Monitor MSI G274QPF E2 27",
    price: 3685000,
    views: 307,
    offers: 3,
    image: msig274qpfe227,
  },
  {
    name: 'Monitor Huawei AD80HW 23.8"',
    price: 1290000,
    views: 21,
    offers: 6,
    image: huaweiad80hw23,
  },
  {
    name: 'Monitor MSI Pro MP271 27"',
    price: 2646000,
    views: 12,
    offers: 5,
    image: msipromp27127,
  },
  {
    name: 'Monitor HP M32f 31.5"',
    price: 3393000,
    views: 12,
    offers: 3,
    image: hpm32f315,
  },
  {
    name: 'Monitor Pixel PXG27I 27"',
    price: 2386500,
    views: 13,
    offers: 1,
    image: pixelpxg27i27,
  },
  {
    name: "Monitor Asus ZenScreen Go MB16AP",
    price: 5999000,
    views: 26,
    offers: 1,
    image: asuszenscreengomb16ap,
  },
  {
    name: 'Monitor Gigabyte G34WQC 34"',
    price: 6190800,
    views: 24,
    offers: 4,
    image: gigabyteg34wqc34,
  },
  {
    name: 'Monitor BenQ GL2780 27"',
    price: 1483500,
    views: 23,
    offers: 4,
    image: benqgl278027,
  },
  {
    name: 'Monitor HP Z24n G3 24"',
    price: 3523500,
    views: 16,
    offers: 3,
    image: hpz24ng324,
  },
  {
    name: 'Monitor BenQ EW3880R"',
    price: 13428450,
    views: 32,
    offers: 4,
    image: benqew3880r,
  },
  {
    name: 'Monitor Gigabyte G27QC 27"',
    price: 3915000,
    views: 20,
    offers: 5,
    image: gigabyteg27qc27,
  },
  {
    name: 'Monitor MSI Optix MAG342CQ 34"',
    price: 5248000,
    views: 285,
    offers: 4,
    image: msioptixmag342cq34,
  },
  {
    name: 'Monitor HP M27F 27"',
    price: 2806056,
    views: 25,
    offers: 3,
    image: hpm27f27,
  },
  {
    name: 'Monitor Aorus FV43U 43"',
    price: 11092500,
    views: 24,
    offers: 3,
    image: aorusfv43u43,
  },
  {
    name: 'Monitor Asus TUF Gaming VG279QR 27"',
    price: 3915000,
    views: 29,
    offers: 3,
    image: asustufgamingvg279qr27,
  },
  {
    name: 'Monitor Gigabyte M32Q-EK 32"',
    price: 7493000,
    views: 24,
    offers: 3,
    image: gigabytem32qek32,
  },
  {
    name: 'Monitor Gigabyte M28U-EK 28"',
    price: 7177500,
    views: 25,
    offers: 5,
    image: gigabytem28uek28,
  },
  {
    name: 'Monitor Gigabyte G27FC 27"',
    price: 2544750,
    views: 32,
    offers: 4,
    image: gigabyteg27fc27,
  },
  {
    name: 'Monitor Gigabyte G32QC 32"',
    price: 5778500,
    views: 26,
    offers: 3,
    image: gigabyteg32qc32,
  },
];

const tabs = [
  { name: "LG", link: "/product/monitors/:id" },
  { name: "HP", link: "/product/monitors/:id" },
  { name: "Samsung", link: "/product/monitors/:id" },
  { name: "Asus", link: "/product/monitors/:id" },
  { name: "AOC", link: "/product/monitors/:id" },
  { name: "Artel", link: "/product/monitors/:id" },
];

const sortOptions = [
  { name: "mashhurligi bo'yicha", value: "views" },
  { name: "narxlar ko'tarilishi", value: "priceAsc" },
  { name: "narxlar kamayishi", value: "priceDesc" },
];

const Monitors = () => {
  const [sortBy, setSortBy] = useState("views");

  const sortedMonitors = [...monitors].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "views") return b.views - a.views;
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
          Monitorlar
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
          {sortedMonitors.map((monitor, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4"
            >
              <img
                src={monitor.image}
                alt={monitor.name}
                className="w-24 h-24 object-contain mr-4 flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {monitor.name}
                </h2>
                <p className="text-gray-700">
                  {monitor.price.toLocaleString()} so'mdan
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <img src={visibility} alt="Views" className="w-5 h-5" />
                  <span>{monitor.views} marta ko'rilgan</span>
                </p>
                <p className="text-sm text-gray-500">
                  {monitor.offers} takliflar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitors;
