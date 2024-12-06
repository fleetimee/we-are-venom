"use client";

import React, { useState } from "react";
import MenuBar from "../../../components/MenuBar";
import FooterSection from "../../../components/FooterSection";
import FooterCopyright from "../../../components/FooterCopyright";
import { ScrollToTopButton } from "../../../components/ScrollToTopButton";

const Register = () => {
  const [username, setUsername] = useState("");
  const [nik, setNik] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submitted:", { username, nik, email, password });
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* Section MenuBar */}
      <MenuBar />

      <main className="flex items-center justify-center pt-20 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-darkBlue mb-6">
            Daftar Akun Baru
          </h2>
          <form onSubmit={handleRegister}>
            /* Username Input */
            <div className="mb-4">
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                >
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    placeholder="Enter your username"
                />
            </div>

            {/* NIK Input */}
            <div className="mb-6">
                <label
                    htmlFor="nik"
                    className="block text-sm font-medium text-gray-700"
                >
                    No Identitas (NIK)
                </label>
                <input
                    type="number"
                    id="nik"
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}
                    required
                    inputMode="numeric"
                    pattern="^-?[0-9]\d*\.?\d*$"
                    className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700 appearance-none"
                    placeholder="Enter your No Identitas (NIK)"
                    style={{
                        MozAppearance: 'textfield',
                        WebkitAppearance: 'none',
                    }}
                />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your Email Address"
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
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your Password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-darkBlue text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

            <div className="text-center text-gray-700 mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                Login
                </a>
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

export default Register;
