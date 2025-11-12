import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-center px-6">
      <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-semibold mt-4 mb-2">Oops! Page Not Found</h2>
      <p className="text-lg max-w-md text-white/80 mb-8">
        The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-purple-100 transition duration-300"
      >
        <Home size={20} />
        Back to Home
      </Link>

      <div className="absolute bottom-6 text-white/70 text-sm">
        © {new Date().getFullYear()} — Online Learning Courses
      </div>
    </div>
  );
};

export default ErrorPage;
