"use client";

import React, { useState, useEffect } from "react";
import MenuBar from "../../../components/MenuBar";
import FooterCopyright from "../../../components/FooterCopyright";
import { ScrollToTopButton } from "../../../components/ScrollToTopButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define the form schema using zod
const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 6 characters."),
  no_identitas: z.string().min(16, "NIK must be at least 16 characters."),
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type RegisterFormValues = z.infer<typeof formSchema>;

const Register = () => {
  const [loading, setLoading] = useState(false);

  // Add a state to manage the scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      no_identitas: "",
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const handleRegister = async (data: RegisterFormValues) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();

      if (result.responseCode === "000") {
        // Login successful
        localStorage.setItem("token", result.data.token);

        // Show success toast
        toast.success("Register successful! Redirecting...", {
          style: {
            backgroundColor: "white", // White background
            color: "#4CAF50", // Green text color
            borderRadius: "8px", // Rounded corners
            padding: "10px 20px", // Padding
          },
        });

        // Redirect to another page after a short delay
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        // Show error toast for server validation error
        toast.error(result.responseMessage || "Register failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during register:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#015CAC] to-[#018ED2] font-sans relative">
      <MenuBar />
      <main className="flex items-center justify-center pt-10 sm:pt-20 min-h-screen px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold text-center text-darkBlue mb-6">
            Daftar Akun Baru
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-6">
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        type="username"
                        {...field}
                        className="transition-transform duration-300 focus:scale-105"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* No Identitas Field */}
              <FormField
                control={form.control}
                name="no_identitas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>No Identitas</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your No Identitas"
                        type="number"
                        {...field}
                        className="transition-transform duration-300 focus:scale-105"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                        className="transition-transform duration-300 focus:scale-105"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                        className="transition-transform duration-300 focus:scale-105"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-darkBlue text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
                disabled={loading}
              >
                {loading ? "Register in progress..." : "Register"}
              </Button>
            </form>
          </Form>

          <div className="text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </main>

      {/* Section Footer */}
      <FooterCopyright />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Register;
