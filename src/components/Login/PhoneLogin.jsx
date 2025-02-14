import { useState } from "react";
import { Link } from "react-router-dom";

const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!phone || phone.length !== 17) {
      setError("Iltimos, telefon raqamingizni to'liq kiriting.");
      return;
    }
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      alert("Kod yuborildi!");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md max-w-xs w-full">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-2">
          Telefon raqamingizni kiriting
        </h2>
        <input
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setError("");
          }}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="+998"
          aria-label="Telefon raqamingizni kiriting"
        />
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-300 text-white py-2 rounded-lg mt-4 hover:bg-blue-500 transition cursor-pointer active:bg-blue-600 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
            <span className="flex justify-center items-center">
              <svg
                className="w-5 h-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M4 12a8 8 0 0 1 8-8 8 8 0 0 1 8 8" />
              </svg>
              Yuborilmoqda...
            </span>
          ) : (
            "Kodni oling"
          )}
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">
          Telefon raqamingizdan foydalangan holda tizimga kirish orqali siz
          bizning
        </p>
        <p className="text-xs text-gray-500 text-center">
          <Link
            to="/privacy/terms-of-use"
            className="text-blue-600 hover:text-blue-800"
          >
            Foydalanish shartlari
          </Link>
          &nbsp;va&nbsp;
          <Link to="/privacy" className="text-blue-600 hover:text-blue-800">
            Maxfiylik siyosati
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default PhoneLogin;
