"use client";

import { useState } from "react";

export default function LoginPage({ isDarkMode }) {
  // State for storing user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dummy credentials
  const DUMMY_EMAIL = "navneeth@gmail.com";
  const DUMMY_PASSWORD = "navneeth";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate credentials
    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      alert("Login successful!");
      // Redirect to home page or another page
      window.location.href = "/"; // Change this URL as needed
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md shadow-lg rounded-lg border p-8 ${
          isDarkMode
            ? "bg-gray-800 border-gray-700 text-gray-100"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
        <h1
          className={`text-3xl font-semibold text-center mb-6 ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className={`block text-lg font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-lg p-3 mt-1 focus:ring-2 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-400"
                  : "bg-white border-gray-300 text-gray-900 focus:ring-blue-500"
              }`}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className={`block text-lg font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded-lg p-3 mt-1 focus:ring-2 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-400"
                  : "bg-white border-gray-300 text-gray-900 focus:ring-blue-500"
              }`}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <p
              className={`text-center ${
                isDarkMode ? "text-red-400" : "text-red-500"
              }`}
            >
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out ${
              isDarkMode
                ? "bg-blue-500 text-gray-100 hover:bg-blue-400"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
