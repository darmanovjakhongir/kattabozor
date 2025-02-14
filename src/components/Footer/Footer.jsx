import { Link } from "react-router-dom";
import googleplay from "../../assets/images/google-play-badge-uz.png";
import facebook from "../../assets/icons/facebook.svg";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";

const socialLinks = [
  {
    href: "https://www.facebook.com/KattabozorUz/",
    src: facebook,
    alt: "Facebook",
  },
  { href: "https://t.me/kattabozoruz", src: telegram, alt: "Telegram" },
  {
    href: "https://www.instagram.com/kattabozoruz/",
    src: instagram,
    alt: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="text-gray-700 py-6">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-4 px-4">
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/help/help" className="text-blue-600 hover:text-blue-800">
            KATTABOZOR da soting
          </Link>
          <Link to="/help/help" className="text-blue-600 hover:text-blue-800">
            Qo‘llanma
          </Link>
          <Link
            to="/contest/contest"
            className="text-green-600 hover:text-green-800"
          >
            Tanlov
          </Link>
          <Link to="/privacy" className="text-blue-600 hover:text-blue-800">
            Maxfiylik siyosati
          </Link>
          <Link
            to="/privacy/terms-of-use"
            className="text-blue-600 hover:text-blue-800"
          >
            Foydalanish shartlari
          </Link>
        </nav>
        <a
          href="https://play.google.com/store/apps/details?id=uz.kattabozor"
          className="flex items-center"
          aria-label="Download the Kattabozor app from Google Play"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={googleplay}
            alt="Download the Kattabozor app from Google Play"
            className="h-10"
          />
        </a>
        <div className="flex space-x-4 text-gray-600">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:opacity-80 transition-opacity duration-200"
              title={link.alt}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${link.alt} page`}
            >
              <img src={link.src} alt={link.alt} className="w-8 h-8" />
            </a>
          ))}
        </div>
        <p className="text-sm text-center text-gray-900">
          &copy; KATTABOZOR, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
