"use client";

import React, { useState } from "react";
import MenuBar from "../../../components/MenuBar";
import FooterSection from "../../../components/FooterSection";
import FooterCopyright from "../../../components/FooterCopyright";
import { ScrollToTopButton } from "../../../components/ScrollToTopButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* Section MenuBar */}
      <MenuBar />

      <main className="flex items-center justify-center pt-20 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-darkBlue mb-6">
            Login to Your Account
          </h2>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <div className="relative">
                    <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700 pr-10"
                    placeholder="Enter your password"
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-blue-500"
                    >
                    {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-darkBlue text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 hover:underline transition"
              >
                Sign up
              </a>
            </p>
            <p className="mt-2">
              Forgot your password?{" "}
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline transition"
              >
                Reset it here
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Section Footer */}
      {/* <FooterSection /> */}

      {/* Section Copyright */}
      <FooterCopyright />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Login;
