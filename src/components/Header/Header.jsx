import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";
import search from "../../assets/icons/search.svg";
import arrowdropdown from "../../assets/icons/arrow-drop-down.svg";
import arrowdropup from "../../assets/icons/arrow-drop-up.svg";

const categories = [
  { name: "Mobil telefonlar", link: "/product/phones/:id" },
  { name: "Konditsionerlar", link: "/product/conditioners/:id" },
  { name: "Noutbuklar", link: "/product/laptops/:id" },
  { name: "Muzlatgichlar", link: "/product/refrigerators/:id" },
  { name: "Planshetlar", link: "/product/tablets/:id" },
  { name: "Televizorlar", link: "/product/televisions/:id" },
  { name: "Kir yuvish mashinalari", link: "*" },
  { name: "Video kartalari", link: "/product/graphics-cards/:id" },
  {
    name: "Smart soatlar va fitnes brasletlar",
    link: "/product/smartwatches/:id",
  },
  { name: "Quloqchinlar", link: "*" },
  { name: "Monitorlar", link: "/product/monitors/:id" },
  { name: "Oshxona plitalari", link: "*" },
  { name: "Changyutgichlar", link: "*" },
  { name: "Robot changyutgichlar", link: "*" },
  { name: "Wi-Fi tarmoq qurilmalari", link: "*" },
  { name: "Soch soqol olish uchun mashinkalar", link: "*" },
  { name: "Blenderlar", link: "*" },
  { name: "Dazmollar", link: "*" },
  { name: "Portativ akustika", link: "*" },
  { name: "Havo namlagich va havo tozalagichlar", link: "*" },
  { name: "Klaviaturalar", link: "*" },
  { name: "Sichqonchalar", link: "*" },
  { name: "Tizim platalari", link: "*" },
  { name: "Elektr kuchlanish stabilizatorlari", link: "*" },
  { name: "Fenlar", link: "*" },
  { name: "Kompyuter garnituralari", link: "*" },
  { name: "Mikserlar", link: "*" },
  { name: "Tashqi qattiq disklar", link: "*" },
  { name: "Ichki qattiq disklar", link: "*" },
  { name: "Oshxona havo tortgichlari", link: "*" },
  { name: "Simli routerlar va kommutatorlar", link: "*" },
  { name: "Isitgichlar", link: "*" },
  { name: "Quvvat bloklari", link: "*" },
  { name: "Ayollar kiyimlari", link: "*" },
  { name: "Erkaklar kiyimlari", link: "*" },
  { name: "Bolalar kiyimlari", link: "*" },
  { name: "Elektr qahva maydalagichlar", link: "*" },
  { name: "Qahva qaynatgichlar va qahva mashinalari", link: "*" },
  { name: "Ichki qattiq disklar (SSD)", link: "*" },
  { name: "Mobil telefonlar uchun g'iloflar", link: "*" },
  { name: "Printerlar va KFQ lar", link: "*" },
  { name: "Suv kulerlari va aksessuarlar", link: "*" },
  { name: "Ventilyatorlar", link: "*" },
  { name: "Protsessorlar (CPU)", link: "*" },
  { name: "Monobloklar", link: "*" },
  { name: "Operativ xotira modullari", link: "*" },
  { name: "Kulerlar va kompyuter sovutish tizimlari", link: "*" },
  { name: "O'yin pristavkalari", link: "*" },
  { name: "TV-pristavkalar va mediapleerlar", link: "*" },
  { name: "Aqlli kolonkalar", link: "*" },
  { name: "Kompyuter kreslolari", link: "*" },
  { name: "Veb-kameralar", link: "*" },
  { name: "Videokuzatuv kameralari", link: "*" },
  { name: "Asboblar to'plamlari", link: "*" },
  { name: "Mobil telefonlar uchun zaryadlovchilar", link: "*" },
  { name: "Mikroto'lqinli pechlar", link: "*" },
  { name: "Tashqi akkumulyatorlar", link: "*" },
  { name: "Tikuv mashinalari", link: "*" },
  { name: "Oshxona kombaynlari va maydalagichlar", link: "*" },
  { name: "Mini-pechlar", link: "*" },
  { name: "Erkaklar elektr ustaralari", link: "*" },
  { name: "Elektr go'sht qiymalagichlar", link: "*" },
  { name: "Elektr choynaklar va termopotlar", link: "*" },
  { name: "Multivarkalar", link: "*" },
  { name: "Suv filtrlari", link: "*" },
  { name: "Fotoapparatlar", link: "*" },
  { name: "Ryukzaklar", link: "*" },
  { name: "Elektr sharbat chiqargichlar", link: "*" },
  { name: "Idish yuvish mashinalari", link: "*" },
  { name: "Tosterlar", link: "*" },
  { name: "Muzlatish kameralari", link: "*" },
  { name: "Kompyuter korpuslari", link: "*" },
  { name: "Suv isitgichlari", link: "*" },
  { name: "Noutbuklar uchun sumka va ryukzaklar", link: "*" },
  { name: "Chim kesuvchi mashinalar", link: "*" },
  { name: "Tarozilar", link: "*" },
  { name: "Uzluksiz quvvat manbalari", link: "*" },
  { name: "Flash-xotira kartalari", link: "*" },
  { name: "O'rnatiladigan plitalar", link: "*" },
  { name: "O'rnatiladigan duxovkalar", link: "*" },
  { name: "Epilyatorlar va ayollar elektr ustaralari", link: "*" },
  { name: "Samokatlar", link: "*" },
  { name: "Elektr tish cho'tkalari", link: "*" },
  { name: "Avtomobil videoregistratorlari", link: "*" },
  { name: "Multimediya-proyektorlar", link: "*" },
  { name: "Bolalar aravachalari", link: "*" },
  { name: "Rullar, joystiklar, geympadlar", link: "*" },
  { name: "Soch dazmollari, ploykalar va tekislagichlar", link: "*" },
  { name: "Oshxona tarozilari", link: "*" },
  { name: "Radiotelefonlar", link: "*" },
  { name: "Grafik planshetlar", link: "*" },
  { name: "Perforatorlar", link: "*" },
  { name: "Avtomagnitolalar", link: "*" },
  { name: "Klaviaturalar va sichqonchalar komplektlari", link: "*" },
  { name: "Kitoblar", link: "*" },
  { name: "Yig'iladigan va ishiriladigan basseynlar", link: "*" },
  { name: "Skanerlar", link: "*" },
  { name: "Qo'l soatlari", link: "*" },
  { name: "Uzatma simlari va tarmoq filtrlari", link: "*" },
  { name: "Klaviaturalar va sichqonchalar uchun aksessuarlar", link: "*" },
  { name: "Shurupovyortlar", link: "*" },
  { name: "Drellar va qurilish mikserlari", link: "*" },
  { name: "Avtomobil shinalari", link: "*" },
  { name: "Mikrofonlar", link: "*" },
  { name: "Gaykovyortlar", link: "*" },
  { name: "Massajorlar", link: "*" },
  { name: "Dazmol taxtalari", link: "*" },
  { name: "Serverlar", link: "*" },
  { name: "Kompyuterlar", link: "*" },
  { name: "Kir quritgichlar", link: "*" },
  { name: "Kompyuter akustikasi", link: "*" },
  { name: "Musiqa markazlari", link: "*" },
  { name: "Issiqlik pushkalari", link: "*" },
  { name: "Elektrik grillar va kabob pishirgichlar", link: "*" },
  { name: "Yuqori bosimli yuvish vositasi", link: "*" },
  { name: "Oshxona buyumlari va idishlari", link: "*" },
  { name: "Elektr suv nasoslari", link: "*" },
  { name: "Savatlar, qutilar va organayzerlar", link: "*" },
  { name: "Maktab qalam qutilari", link: "*" },
  { name: "Ko'rpalar va qoplamalar", link: "*" },
  { name: "Soch taroqlari va cho'tkalari", link: "*" },
  { name: "Rozetkalar, vilkalar va o'chirgichlar", link: "*" },
  { name: "Payvandlash mashinalari", link: "*" },
  { name: "Qandail va shift chiroqlar", link: "*" },
  { name: "Tungi chiroqlar va dekorativ lampalar", link: "*" },
  { name: "Dekorativ shag'amlar", link: "*" },
  { name: "Seyflar", link: "*" },
  { name: "Shkaflar", link: "*" },
  { name: "USB flesh-xotiralar", link: "*" },
  { name: "Chastota o'zgartirgichlar", link: "*" },
  { name: "Chaqaloqlar uchun tagliklar", link: "*" },
  { name: "VoIP uskunalari", link: "*" },
  { name: "Avtomobil akkumulyatorlari", link: "*" },
  { name: "Yuz kremlari va zardoblari", link: "*" },
  { name: "Qo'l terisini parvarish qilish mahsulotlari", link: "*" },
  { name: "Yuz uchun tonal mahsulotlari", link: "*" },
  { name: "Soch bo'yoqlari", link: "*" },
  { name: "Kiprik uchun tushlar", link: "*" },
  { name: "Soch uchun balzamlar va konditsionerlar", link: "*" },
  { name: "Lab terisini parvarish qilish mahsulotlari", link: "*" },
  { name: "Yuz uchun niqoblar", link: "*" },
  { name: "Soch maskalari va zardoblar", link: "*" },
  { name: "Videokameralar", link: "*" },
  { name: "Avtomobil radar detektorlari", link: "*" },
  { name: "Devor soatlari", link: "*" },
  { name: "Noutbuk akkumulyatorlari", link: "*" },
  { name: "Batareyalar", link: "*" },
  { name: "Yugurish yo'laklari", link: "*" },
  { name: "Mashg'ulot velosipedlari", link: "*" },
  { name: "Generatorlar", link: "*" },
  { name: "Elektr va zanjirli arralar", link: "*" },
  { name: "Ichimlik idishlari", link: "*" },
  { name: "Domofonlar", link: "*" },
  { name: "Kemiruvchilar uchun ozuqa", link: "*" },
  { name: "Mushuk va itlar uchun ozuqa", link: "*" },
  { name: "Qushlar uchun ozuqa", link: "*" },
  { name: "Mushuklar hojatxonasi to'ldiruvchilari", link: "*" },
  { name: "Isitish qozonlari", link: "*" },
  { name: "Haykalchalar", link: "*" },
  { name: "Sovun idishi, stakanlar va dispenserlar", link: "*" },
  { name: "Chamadonlar", link: "*" },
  { name: "Tish pastalari", link: "*" },
  { name: "Tish cho'tkalari", link: "*" },
  { name: "Havo kompressorlari", link: "*" },
  { name: "Avtomobil kompressorlari", link: "*" },
  { name: "Virtual reallik ko'zoynaklari", link: "*" },
  { name: "Quyoshdan himoyalovchi ko'zoynaklar", link: "*" },
  { name: "Elektrlobziklar", link: "*" },
  { name: "Burchak silliqlash mashinalari (bolgarkalar)", link: "*" },
  { name: "Elektromobillar", link: "*" },
];

const menuItems = [
  { name: "Telefonlar", link: "/product/phones/:id" },
  { name: "Planshetlar", link: "/product/tablets/:id" },
  { name: "Televizorlar", link: "/product/televisions/:id" },
  { name: "Noutbuklar", link: "/product/laptops/:id" },
  { name: "Smart soatlar", link: "/product/smartwatches/:id" },
  { name: "Konditsionerlar", link: "/product/conditioners/:id" },
  { name: "Muzlatgichlar", link: "/product/refrigerators/:id" },
  { name: "Monitorlar", link: "/product/monitors/:id" },
];

const Logo = () => {
  return (
    <div className="w-32">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="brightness-90 hover:brightness-75"
        />
      </Link>
    </div>
  );
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    const filtered = [...categories, ...menuItems].filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase()),
    );

    setFilteredItems(filtered);
  };

  const handleSelect = (link) => {
    navigate(link.replace(":id", ""));
    setQuery("");
    setFilteredItems([]);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
        placeholder="Qidiruv"
      />

      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2"
        onClick={() => {
          if (filteredItems.length > 0) {
            handleSelect(filteredItems[0].link);
          }
        }}
      >
        <img src={search} alt="Search Icon" className="w-5 h-5 text-gray-500" />
      </button>
      {filteredItems.length > 0 && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-full">
          <ul className="py-2">
            {filteredItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400 cursor-pointer"
                onClick={() => handleSelect(item.link)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const LanguageSelector = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("UZ");

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setLanguageOpen(false);
  };

  return (
    <div className="relative cursor-pointer text-gray-700">
      <div
        onClick={() => setLanguageOpen(!languageOpen)}
        className="flex items-center"
      >
        {selectedLanguage}
        <img
          src={languageOpen ? arrowdropup : arrowdropdown}
          alt="Dropdown"
          className="inline-block w-4 h-4 ml-1"
        />
      </div>
      {languageOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md">
          <ul className="py-2">
            <li
              className="px-4 py-2 hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400"
              onClick={() => handleLanguageClick("RU")}
            >
              RU
            </li>
            <li
              className="px-4 py-2 hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400"
              onClick={() => handleLanguageClick("UZ")}
            >
              UZ
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const LoginButton = () => {
  return (
    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400">
      <Link to="/auth/login" className="text-gray-700">
        Kirish
      </Link>
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-center py-3">
      <ul className="flex space-x-6">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="text-gray-700 hover:text-gray-900">
            <Link to={menuItem.link}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MobileMenu = () => {
  return (
    <nav className="absolute top-16 left-4 w-72 max-h-screen bg-white z-50 border border-gray-300 rounded-md shadow-md overflow-y-auto">
      <ul className="flex flex-col p-4 w-full">
        {categories.map((category, index) => (
          <li
            key={index}
            className="py-2 w-full text-gray-700 hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400"
          >
            <Link to={category.link} className="block w-full px-4 py-2">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b border-gray-300">
      <header className="flex items-center justify-center p-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4 w-full">
            <div className="flex justify-center items-center">
              <Logo />
            </div>
            <div
              className="ml-4 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <img src={close} alt="Close Icon" className="w-5 h-5" />
              ) : (
                <img src={menu} alt="Menu Icon" className="w-5 h-5" />
              )}
            </div>
            <div className="max-w-md w-full flex justify-center">
              <SearchBar />
            </div>
            <div className="flex justify-center">
              <LanguageSelector />
            </div>
            <div className="flex justify-center">
              <LoginButton />
            </div>
          </div>
        </div>
      </header>
      <Navbar />
      {mobileMenuOpen && <MobileMenu />}
    </div>
  );
};

export default Header;
