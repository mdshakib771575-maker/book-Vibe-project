import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
        
        {/* Error Code */}
        <h1 className="text-7xl font-bold mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mb-2">
          Page Not Found
        </h2>

        <p className="mb-6 ">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        {/* Button */}
        <button
          onClick={() => window.location.href = "/"}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg "
        >
          Go Home
        </button>

      </div>
    </div>
  );
};

export default ErrorPage;