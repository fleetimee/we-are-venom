// pages/job-detail.tsx

"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import LottieAnimation from "../../../components/Animations";
import animationFgData from '../../../public/animations/fg.json';
import MenuBar from "../../../components/MenuBar";
import FooterCopyright from "../../../components/FooterCopyright";
import FooterSection from "../../../components/FooterSection";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import CariKarirButton from "../../../components/CariKarirButton";

const JobDetail = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            if (window.scrollY > 200) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans relative">

            <MenuBar />

            <main className="pt-20 bg-gradient-to-r from-[#015CAC] to-[#018ED2] relative z-10">
                <div className="container w-full mx-auto px-4 py-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-4xl font-bold mb-4 text-darkBlue">Detail Pekerjaan</h1>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 pr-4">
                                <Image
                                    src="/images/job-detail.jpg"
                                    alt="Job Detail"
                                    width={800}
                                    height={600}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 pl-4">
                                <h2 className="text-2xl font-bold mb-4">Account Officer</h2>
                                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique tortor. Sed vitae suscipit ligula.</p>
                                <div className="flex items-center mb-2">
                                    <svg className="w-6 h-6 mr-2 text-darkBlue" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 7a2 2 0 110-4 2 2 0 010 4zm0 2a6 6 0 00-6 6v5h12v-5a6 6 0 00-6-6zm0-9a9 9 0 100 18 9 9 0 000-18z" />
                                    </svg>
                                    <span className="text-gray-700">Junior</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <svg className="w-6 h-6 mr-2 text-darkBlue" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 7h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
                                    </svg>
                                    <span className="text-gray-700">Contract</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <svg className="w-6 h-6 mr-2 text-darkBlue" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                    </svg>
                                    <span className="text-gray-700">Yogyakarta</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-4">Deskripsi Pekerjaan</h3>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique tortor. Sed vitae suscipit ligula. Nulla facilisi. Duis ac felis vel turpis aliquam congue. Donec tincidunt dolor in velit tristique, vitae ultricies lectus fermentum.</p>
                            <h3 className="text-2xl font-bold mb-4">Kualifikasi</h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li className="mb-2">Minimum 1 year of experience in a related field</li>
                                <li className="mb-2">Bachelors degree in a related discipline</li>
                                <li className="mb-2">Strong analytical and problem-solving skills</li>
                                <li className="mb-2">Excellent communication skills</li>
                            </ul>
                            <h3 className="text-2xl font-bold mb-4 mt-8">Cara Melamar</h3>
                            <p className="text-gray-700 mb-4">If you meet the qualifications and are interested in this position, please submit your application via email to <a href="mailto:hr@bpddiy.co.id" className="text-darkBlue hover:underline">hr@bpddiy.co.id</a> with the subject line Application for Account Officer.</p>
                            <button className="mt-4 px-6 py-2 bg-darkBlue text-white font-semibold rounded-md hover:bg-blue-400 transition duration-300">
                                Lamar Sekarang
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section Footer */}
                <FooterSection />

                {/* Section Copyright */}
                <FooterCopyright />
            </main>

            {/* Button Back to Top */}
            <ScrollToTopButton />

            {/* Button Find Career/Opportunity */}
            <CariKarirButton />
        </div>
    );
};

export default JobDetail;
