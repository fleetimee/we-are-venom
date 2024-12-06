"use client";

import { useEffect, useState } from 'react';
import LottieAnimation from "../../components/Animations";
import animationFgData from '../../public/animations/fg.json';
import animationExperiencedData from '../../public/animations/experienced.json';
import animationInternshipData from '../../public/animations/internship.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MenuBar from "../../components/MenuBar";
import CariKarirButton from "../../components/CariKarirButton";
import {ScrollToTopButton} from "../../components/ScrollToTopButton";
import FooterCopyright from "../../components/FooterCopyright";
import FooterSection from "../../components/FooterSection";

const Home = () => {
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

            {/* Section MenuBar */}
            <MenuBar />

            <main className="pt-20 bg-gradient-to-r from-[#015CAC] to-[#018ED2] relative z-10">
                <div className="container w-full mx-auto px-4 py-8 h-[620px]">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                    >
                        <SwiperSlide>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 pl-20 flex items-center justify-center">
                                    <div className="p-8 rounded-lg">
                                        <h1 className="text-4xl font-bold mb-4">Temukan Jalanmu untuk Berinovasi dan Mewujudkan Mimpi</h1>
                                        <p>Jelajahi dan temukan tujuan karirmu bersama BPD DIY <b>#MungkinAndaCocok</b> kerja di BPD DIY</p>
                                        <br />
                                        <button className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-400">Jelajahi Karir</button>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="rounded-lg relative z-0">
                                        <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id="img1" x="0" y="0" width="1" height="1">
                                                    <image x="0" y="0" width="80%" height="80%" preserveAspectRatio="xMaxYMax slice" href="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                                                </pattern>
                                            </defs>
                                            <path fill="url(#img1)" d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z" transform="translate(100 100)" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 pl-20 flex items-center justify-center">
                                    <div className="p-8 rounded-lg">
                                        <h1 className="text-4xl font-bold mb-4">Content Slide 2</h1>
                                        <p>Description for Slide 2</p>
                                        <br />
                                        <button className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-400">Explore</button>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="rounded-lg relative z-0">
                                        <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id="img2" x="0" y="0" width="1" height="1">
                                                    <image x="0" y="0" width="80%" height="80%" preserveAspectRatio="xMaxYMax slice" href="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                                                </pattern>
                                            </defs>
                                            <path fill="url(#img2)" d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z" transform="translate(100 100)" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="bg-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#015CAC', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#018ED2', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path fill="url(#grad1)" d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                </div>

                <div className="flex w-full h-[200px] bg-white relative z-10">
                    <div className="w-1/2 px-4 pb-8 bg-white text-black relative">
                        <div className="absolute inset-0 z-0">
                            <svg width="100%" height="100%">
                                <circle cx="85%" cy="45%" r="100" fill="rgba(253, 230, 138, 0.6)" />
                                <polygon points="85,30 105,120 75,180" fill="rgba(253, 230, 138, 0.6)" />
                            </svg>
                        </div>
                        <div className="relative z-10 w-full flex justify-center">
                            <Image
                                src="/images/kantorbpd.jpg"
                                alt="Kantor BPD"
                                width={800}
                                height={600}
                                className="w-80 h-auto rounded-lg object-contain"
                            />
                            <Image
                                src="/images/kantorbpd2.jpg"
                                alt="Kantor BPD 2"
                                width={800}
                                height={600}
                                className="w-auto h-40 rounded-lg object-contain absolute -top-20 right-0"
                            />
                        </div>
                    </div>

                    <div className="w-1/2 px-4 pb-8 bg-white text-black">
                        <span className="text-darkBlue font-semibold text-3xl">Tentang BPD DIY</span>
                        <br />
                        <br />
                        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: '#222', textAlign: 'left', marginRight: '8rem' }}>
                            BPD DIY selalu mengusahakan agar karyawan dapat bekerja sesuai dengan potensi dan kemampuan mereka serta mempelajari hal-hal baru setiap harinya. Kami percaya jika hal itu dibudayakan di dalam lingkungan BPD DIY, akan membangun semangat untuk terus berinovasi.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-white h-[400px] relative z-10">
                    <h1 className="text-darkBlue font-semibold text-3xl">Mari Berkembang Bersama Kami</h1>
                    <br />
                    <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: '#222', textAlign: 'center', marginLeft: '14rem', marginRight: '14rem' }}>
                        BPD DIY selalu mengusahakan agar karyawan dapat bekerja sesuai dengan potensi dan kemampuan mereka serta mempelajari hal-hal baru setiap harinya. Kami percaya jika hal itu dibudayakan di dalam lingkungan BPD DIY, akan membangun semangat untuk terus berinovasi.
                    </p>
                </div>

                {/* Section Fresh Graduate */}
                <div className="flex relative z-10">
                    <div className="w-1/2 px-4 pt-8 bg-white text-black">
                        <span className="text-blue-400 font-semibold text-3xl ml-60">Fresh Graduate</span>
                        <br />
                        <br />
                        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: '#222', textAlign: 'left', marginLeft: '15rem' }}>
                            Untuk kamu yang baru memulai karir, Fresh Graduate memiliki 2 kriteria, yaitu Program dan Staf.
                        </p>
                        <br />
                        <button className="font-semibold hover:underline text-darkBlue ml-60">Daftar &gt;</button>
                    </div>
                    <div className="w-1/2 px-4 bg-white text-black flex relative z-0">
                        <div className="-mt-32">
                            <LottieAnimation animationData={animationFgData} width={'80%'} height={'80%'} />
                        </div>
                    </div>
                </div>

                {/* Section Experienced */}
                <div className="flex relative z-10">
                    <div className="w-1/2 bg-white text-black flex">
                        <div className="-mt-32 ml-36">
                            <LottieAnimation animationData={animationExperiencedData} width={'100%'} height={'100%'} />
                        </div>
                    </div>
                    <div className="w-1/2 px-4 py-8 bg-white text-black -mt-24">
                        <span className="text-blue-400 font-semibold text-3xl mr-60">Experienced</span>
                        <br />
                        <br />
                        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: '#222', textAlign: 'left', marginRight: '15rem' }}>
                            Untuk kamu yang sudah memiliki pengalaman di bidang tertentu dan ingin mengembangkan diri lebih lagi.
                        </p>
                        <br />
                        <button className="mr-36 font-semibold hover:underline text-darkBlue">Daftar &gt;</button>
                    </div>
                </div>

                {/* Section Internship */}
                <div className="flex relative z-10">
                    <div className="w-1/2 px-4 py-8 bg-white text-black">
                        <span className="text-blue-400 font-semibold text-3xl ml-60">Internship</span>
                        <br />
                        <br />
                        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: '#222', textAlign: 'left', marginLeft: '15rem' }}>
                            Untuk kamu yang ingin magang di bidang tertentu dan mendapatkan pengalaman kerja sebelum lulus.
                        </p>
                        <br />
                        <button className="ml-60 font-semibold hover:underline text-darkBlue">Daftar &gt;</button>
                    </div>
                    <div className="w-1/2 px-4 bg-white text-black flex relative z-0">
                        <div className="-mt-10 ml-6">
                            <LottieAnimation animationData={animationInternshipData} width={'90%'} height={'90%'} />
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

export default Home;
