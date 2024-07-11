"use client";

import { useEffect, useState } from 'react';
import LottieAnimation from "../../../components/Animations";
import animationFgData from '../../../public/animations/fg.json';
import animationExperiencedData from '../../../public/animations/experienced.json';
import animationInternshipData from '../../../public/animations/internship.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MenuBar from "../../../components/MenuBar";
import FooterCopyright from "../../../components/FooterCopyright";
import FooterSection from "../../../components/FooterSection";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import CariKarirButton from "../../../components/CariKarirButton";

const Magang = () => {
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
                <div className="container w-full mx-auto px-4 py-8 h-[450px]">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 pl-20 flex items-center justify-center">
                            <div className="p-8 rounded-lg">
                                <h1 className="text-4xl font-bold mb-4">Magang Kerja</h1>
                                <p>Mari bergabung untuk belajar dan berkembang bersama <br/> <b>Bank BPD DIY</b></p>
                                <br/>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="rounded-lg relative z-0">
                                <Image
                                    src="/images/magang.png"
                                    alt="Magang"
                                    width={800}
                                    height={600}
                                    className="w-[460px] h-auto rounded-lg object-contain shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{stopColor: '#015CAC', stopOpacity: 1}}/>
                                <stop offset="100%" style={{stopColor: '#018ED2', stopOpacity: 1}}/>
                            </linearGradient>
                        </defs>
                        <path fill="url(#grad1)"
                              d="M0,0L120,0C240,0,480,0,720,10.7C960,21,1200,43,1320,53.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                </div>

                {/* Section Informasi Magang */}
                <div
                    className="flex flex-col justify-center items-center w-full bg-white h-[400px] relative z-10 -mt-56">
                    <h1 className="text-darkBlue font-semibold text-3xl">Sekilas tentang Magang Kerja BPD DIY</h1>
                    <br/>
                    <p
                        style={{
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '1rem',
                            fontWeight: 400,
                            lineHeight: 1.8,
                            color: '#222',
                            textAlign: 'center',
                            marginLeft: '14rem',
                            marginRight: '14rem',
                        }}
                    >
                        Bagi kamu lulusan SMA/SMK,diploma hingga sarjana, program ini adalah pilihan yang tepat. Melalui
                        program ini, kamu akan mendapatkan pengalaman di bidang operasional perbankan dan ilmu lainnya
                        yang akan mendorong kamu untuk menjadi seorang yang profesional.
                        Jadilah bagian dari kami untuk menggapai impianmu!
                    </p>
                </div>

                {/* Section List Magang Program */}
                <div
                    className="flex flex-col justify-center items-center w-full bg-white h-[400px] relative z-10 -mt-32">
                    <h1 className="text-darkBlue font-semibold text-3xl">Program Magang Kerja</h1>
                    <br/>
                    <p
                        style={{
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '1rem',
                            fontWeight: 400,
                            lineHeight: 1.8,
                            color: '#222',
                            textAlign: 'center',
                            marginLeft: '14rem',
                            marginRight: '14rem',
                        }}
                    >
                        Cek informasi lebih lanjut mengenai lowongan magang bakti yang tersedia berikut ini:
                    </p>
                    <div className="w-full md:w-2/3 lg:w-1/2 mt-6">
                        <button
                            className="w-full bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300"
                            onClick={() => window.location.href = '/your-target-url'}>
                            <div className="w-1/4">
                                <Image
                                    src="/images/magang.png"
                                    alt="Magang"
                                    width={150}
                                    height={150}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="w-3/4 pl-6 text-left">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Magang - Teknologi Informasi</h2>
                                <p className="text-black">Cek informasi lebih lanjut mengenai lowongan magang bakti yang
                                    tersedia berikut ini:</p>
                            </div>
                        </button>
                    </div>

                </div>

                {/* Section Footer */}
                <FooterSection/>

                {/* Section Copyright */}
                <FooterCopyright/>
            </main>

            {/* Button Back to Top */}
            <ScrollToTopButton/>

            {/* Button Find Career/Opportunity */}
            <CariKarirButton/>
        </div>
    );
};

export default Magang;