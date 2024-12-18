"use client";

import React, { useState } from "react";
import Image from "next/image";
import DekstopNavLinksAlt from '../../../components/DekstopNavLinksAlt';
import FooterCopyright from "../../../components/FooterCopyright";
import MenuBar from "../../../components/MenuBar";
import { ScrollToTopButton } from "../../../components/ScrollToTopButton";

const Progress = () => {
  const [currentStep, setCurrentStep] = useState(4); // Current step: "Tes Psikologi dan TPA"

  const steps = [
    { id: 1, label: "Seleksi Administrasi" },
    { id: 2, label: "Wawancara Awal" },
    { id: 3, label: "Tes Praktek Teknologi Informasi" },
    { id: 4, label: "Tes Psikologi dan TPA" },
    { id: 5, label: "Wawancara Akhir" },
    { id: 6, label: "Medical Check Up" },
  ];

  const applicantData = {
    nama: "John Doe",
    nomorPeserta: "12345678",
    posisi: "Software Engineer",
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">
      <MenuBar />

      <main className="flex flex-col items-center pt-20 min-h-screen px-4">
        <h2 className="text-2xl font-bold text-darkBlue mb-6 text-center">
          Tahapan Rekrutmen
        </h2>

        {/* Rectangle Container */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl mb-10">
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base">
            <p><span className="font-semibold">Nama:</span> {applicantData.nama}</p>
            <p><span className="font-semibold">Nomor Peserta:</span> {applicantData.nomorPeserta}</p>
            <p><span className="font-semibold">Posisi Dilamar:</span> {applicantData.posisi}</p>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="relative flex flex-col sm:flex-row items-center w-full max-w-4xl px-4">
          {/* Segmented Progress Bar */}
          <div className="relative flex items-center w-full sm:h-2 h-full">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Step Segment */}
                <div
                  className={`relative h-2 flex-1 ${
                    step.id <= currentStep ? "bg-green-500" : "bg-gray-300"
                  } rounded-full`}
                >
                  {/* Circle */}
                  <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      step.id <= currentStep ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    {step.id}
                  </div>
                </div>
                {/* Divider between segments (except the last one) */}
                {index < steps.length - 1 && (
                  <div className="w-2 h-2 sm:h-2 sm:w-2 bg-transparent"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Labels */}
          <div className="absolute top-12 flex justify-between w-full">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center justify-center"
                style={{ width: `${100 / steps.length}%`, textAlign: 'center' }}
              >
                <div
                  className={`text-center text-xs sm:text-xs md:text-sm ${
                    step.id <= currentStep ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rectangle Container */}
        <div className="bg-blue-50 rounded-lg p-6 w-full max-w-4xl mt-28 border-2 border-darkBlue border-dashed mb-10">
        <div className="text-sm sm:text-base">
            {/* Heading */}
            <p className="font-semibold text-darkBlue text-lg mb-4">Informasi Test</p>

            {/* Details */}
            <p className="mb-2">Bagi pendaftar yang dinyatakan <span className="font-semibold">LOLOS</span> diharapkan datang di:</p>
            <p className="mb-1"><span className="font-semibold">Hari/Tanggal:</span> [Isi Hari/Tanggal]</p>
            <p className="mb-1"><span className="font-semibold">Tempat:</span> [Isi Tempat]</p>
            <p className="mb-3"><span className="font-semibold">Waktu:</span> [Isi Waktu]</p>
            <p className="mb-4">Bagi pendaftar yang <span className="font-semibold">LOLOS</span> Seleksi Tes Praktik Teknologi Informasi akan diberitahukan melalui Website PT Bank BPD DIY pada tanggal <span className="font-semibold">06 Desember 2024 Pukul 16.00 WIB.</span></p>
            <p className="mb-4"><span className="font-semibold">Catatan: Pendaftar tidak diperkenankan menggunakan kendaraan roda 4 mengingat terbatasnya area parkir.</span></p>
            <p className="mb-4">Demikian, Terima kasih.</p>
            <p className="mb-8"><span className="font-semibold">Yogyakarta, 30 November 2024</span></p>
            <p className="mb-8"><span className="font-semibold">Tim Penerimaan Pegawai</span></p>
        </div>
        </div>


      </main>

      {/* Footer Section */}
      <FooterCopyright />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Progress;
