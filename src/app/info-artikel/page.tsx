"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTag } from "@fortawesome/free-solid-svg-icons";
import MenuBar from "../../../components/MenuBar";
import FooterCopyright from "../../../components/FooterCopyright";
import FooterSection from "../../../components/FooterSection";
import {ScrollToTopButton} from "../../../components/ScrollToTopButton";
import CariKarirButton from "../../../components/CariKarirButton";

const InfoArtikel = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

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
                                <h1 className="text-4xl font-bold mb-4">Info & Artikel</h1>
                                <p>Dapatkan informasi dan artikel terbaru dari <br/> <b>Bank BPD DIY</b></p>
                                <br/>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="rounded-lg relative z-0">
                                <Image
                                    src="/images/magang.png"
                                    alt="Info & Artikel"
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
                              d="M0,0L120,10.7C240,21,480,43,720,48C960,53,1200,43,1320,37.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                </div>

                {/* Section Info & Artikel */}
                <div className="flex flex-col justify-center items-center w-full bg-white h-min-[400px] relative z-10 -mt-32">
                    <h1 className="text-darkBlue font-semibold text-3xl">Info & Artikel Terbaru</h1>
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
                        Berikut adalah informasi dan artikel terbaru dari Bank BPD DIY:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-11/12 lg:w-4/5">
                        {/* Artikel 1 */}
                        <button className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out border-2 border-transparent hover:border-darkBlue">
                            <div className="relative w-full h-48">
                                <Image
                                    src="/images/arcticle1.jpeg"
                                    alt="Artikel 1"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Direktur Kepatuhan Bank BPD DIY, Dian Ari Ani Raih Penghargaan Most Outstanding Women 2024</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>12 Juni 2023</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faTag} className="mr-1"/>
                                        <span>Keuangan</span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Artikel 2 */}
                        <button className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out border-2 border-transparent hover:border-darkBlue">
                            <div className="relative w-full h-48">
                                <Image
                                    src="/images/article2.jpg"
                                    alt="Artikel 2"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">KINERJA CEMERLANG, BANK BPD DIY RAIH PENGHARGAAN BUMD TERBAIK 2024</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>10 Juni 2023</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faTag} className="mr-1"/>
                                        <span>Teknologi</span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Artikel 3 */}
                        <button className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out border-2 border-transparent hover:border-darkBlue">
                            <div className="relative w-full h-48">
                                <Image
                                    src="/images/artikel3.jpg"
                                    alt="Artikel 3"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Judul Artikel 3</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>8 Juni 2023</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faTag} className="mr-1"/>
                                        <span>Pendidikan</span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Artikel 4 */}
                        <button className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out border-2 border-transparent hover:border-darkBlue">
                            <div className="relative w-full h-48">
                                <Image
                                    src="/images/artikel4.jpg"
                                    alt="Artikel 4"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Judul Artikel 4</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>6 Juni 2023</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faTag} className="mr-1"/>
                                        <span>Bisnis</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <br/>
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

export default InfoArtikel;
