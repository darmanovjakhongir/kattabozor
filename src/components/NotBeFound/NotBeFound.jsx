import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center px-4 py-8">
      <div className="max-w-md w-full border border-gray-300 p-8 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Kechirasiz! Siz qidirayotgan sahifa mavjud emas.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400"
          >
            Bosh sahifaga o'ting
          </Link>
          <Link
            to="/auth/login"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400"
          >
            Biz bilan bog'lanish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
