"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp";
import MenuBar from "../../../components/MenuBar";
import FooterCopyright from "../../../components/FooterCopyright";
import { ScrollToTopButton } from "../../../components/ScrollToTopButton";

// Define the form schema using zod
const formSchema = z.object({
    otp: z.string().length(6, "OTP must be exactly 6 characters."),
  });

type OtpFormValues = z.infer<typeof formSchema>;

const Otp = () => {
  const [loading, setLoading] = useState(false);

  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Update the `handleOtp` function to log the captured `otp` value
const handleOtp = async (data: OtpFormValues) => {
    console.log("Submitting OTP:", data.otp); // Debugging: Log the OTP value
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/auth/otp-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: data.otp }), // Ensure OTP is sent correctly
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }
  
      const result = await response.json();
  
      if (result.responseCode === "000") {
        // OTP successful
        localStorage.setItem("token", result.data.token);
  
        // Show success toast
        toast.success("OTP successful! Redirecting...", {
          style: {
            backgroundColor: "white", // White background
            color: "#4CAF50", // Green text color
            borderRadius: "8px", // Rounded corners
            padding: "10px 20px", // Padding
          },
        });
  
        // Redirect to another page after a short delay
        setTimeout(() => {
          window.location.href = "/karir";
        }, 2000);
      } else {
        // Show error toast for server validation error
        toast.error(result.responseMessage || "OTP Verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during OTP Verification:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* Section MenuBar */}
      <MenuBar />

      <main className="flex items-center justify-center min-h-screen pt-5">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-darkBlue mb-6">
            OTP Verification
          </h2>
          <p className="text-center mb-4">
            One Time Password (OTP) has been sent to your email address: <b>maker@gmail.com</b>
          </p>
          
          <p className="text-center mb-4">Enter the OTP to verify it.</p>
          
          <form onSubmit={form.handleSubmit(handleOtp)} className="space-y-4">
            <div className="flex items-center justify-center">
              <InputOTP maxLength={6}>
                <div className="flex space-x-2">
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="w-12 h-12 text-center text-darkBlue border border-gray-300 rounded-md focus:ring-2 focus:ring-darkBlue focus:border-darkBlue"
                      />
                    ))}
                  </InputOTPGroup>
                </div>
              </InputOTP>
            </div>

            <button
              type="submit"
              className="w-full bg-darkBlue text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </form>

          <div className="text-center text-gray-700 mt-4">
                Didn't receive OTP Code?{" "}
                <a href="/register" className="text-darkBlue font-bold hover:underline">
                Resend OTP
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

export default Otp;
