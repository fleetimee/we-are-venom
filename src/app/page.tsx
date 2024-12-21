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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import RandomShapes from '../../components/RandomShapes';

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
                {/* <RandomShapes /> */}

                {/* Section Slider/Carousel */}
                <div className="container w-full mx-auto px-4 py-8 h-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        speed={500}
                    >
                        <SwiperSlide>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 pl-20 flex items-center justify-center">
                                    <div className="p-8 rounded-lg">
                                        <h1 className="text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">Temukan Jalanmu untuk Berinovasi dan Mewujudkan Mimpi</h1>
                                        <p className="text-white hover:text-yellow-500 transition-colors duration-300">Jelajahi dan temukan tujuan karirmu bersama BPD DIY <b>#MungkinAndaCocok</b> kerja di BPD DIY</p>
                                        <br />
                                        <button className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-400 transition">Jelajahi Karir</button>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="rounded-lg relative z-0 hover:scale-105 transition-transform duration-300">
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
                                        <h1 className="text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">Karir di BPD DIY</h1>
                                        <p className="text-white hover:text-yellow-500 transition-colors duration-300">Bergabunglah dengan tim kami dan kembangkan karirmu di BPD DIY. Kami menyediakan berbagai posisi yang sesuai dengan minat dan keahlianmu.</p>
                                        <br />
                                        <button className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-400 transition">Lihat Lowongan</button>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="rounded-lg relative z-0 hover:scale-105 transition-transform duration-300">
                                        <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id="img2" x="0" y="0" width="1" height="1">
                                                    <image x="0" y="0" width="80%" height="80%" preserveAspectRatio="xMaxYMax slice" href="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                                                </pattern>
                                            </defs>
                                            <path fill="url(#img2)" d="M30,-50C40,-40,50,-30,60,-20C70,-10,80,0,70,10C60,20,50,30,40,40C30,50,20,60,10,70C0,80,-10,70,-20,60C-30,50,-40,40,-50,30C-60,20,-70,10,-80,0C-70,-10,-60,-20,-50,-30C-40,-40,-30,-50,-20,-60C-10,-70,0,-80,10,-70C20,-60,30,-50,30,-50Z" transform="translate(100 100)" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 pl-20 flex items-center justify-center">
                                    <div className="p-8 rounded-lg">
                                        <h1 className="text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">Lowongan Pekerjaan</h1>
                                        <p className="text-white hover:text-yellow-500 transition-colors duration-300">Temukan berbagai lowongan pekerjaan yang tersedia di BPD DIY dan raih kesempatan untuk berkarir di dunia perbankan.</p>
                                        <br />
                                        <button className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-400 transition">Cari Lowongan</button>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="rounded-lg relative z-0 hover:scale-105 transition-transform duration-300">
                                        <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id="img3" x="0" y="0" width="1" height="1">
                                                    <image x="0" y="0" width="80%" height="80%" preserveAspectRatio="xMaxYMax slice" href="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                                                </pattern>
                                            </defs>
                                            <path fill="url(#img3)" d="M20,-30C30,-20,40,-10,50,0C60,10,70,20,60,30C50,40,40,50,30,60C20,70,10,80,0,70C-10,60,-20,50,-30,40C-40,30,-50,20,-60,10C-70,0,-80,-10,-70,-20C-60,-30,-50,-40,-40,-50C-30,-60,-20,-70,-10,-60C0,-50,10,-40,20,-30Z" transform="translate(100 100)" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Section Shape */}
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

                <div className="flex flex-col md:flex-row w-full h-auto bg-white relative z-10">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 px-4 pb-8 bg-white text-black relative">
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
                                loading="lazy"
                            />
                            <Image
                                src="/images/kantorbpd2.jpg"
                                alt="Kantor BPD 2"
                                width={800}
                                height={600}
                                className="w-40 h-40 rounded-lg object-contain absolute -top-20 right-0 md:static md:mt-4"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 px-4 pb-8 bg-white text-black">
                        <span className="text-darkBlue font-semibold text-3xl text-center md:text-left">Tentang BPD DIY</span>
                        <br />
                        <br />
                        <p className="font-sans text-base leading-relaxed text-gray-800 text-left md:pr-8">
                            BPD DIY selalu mengusahakan agar karyawan dapat bekerja sesuai dengan potensi dan kemampuan mereka serta
                            mempelajari hal-hal baru setiap harinya. Kami percaya jika hal itu dibudayakan di dalam lingkungan BPD DIY,
                            akan membangun semangat untuk terus berinovasi.
                        </p>
                    </div>
                </div>

                {/* Section Intermezzo */}
                <div className="flex flex-col justify-center items-center w-full bg-white h-auto py-8 relative z-10">
                    <h1 className="text-darkBlue font-semibold text-3xl text-center px-4 md:px-0">
                        Mari Berkembang Bersama Kami
                    </h1>
                    <p className="font-sans text-base font-normal leading-relaxed text-gray-800 text-center mt-4 px-6 md:px-32 lg:px-48">
                        BPD DIY selalu mengusahakan agar karyawan dapat bekerja sesuai dengan potensi dan kemampuan mereka serta
                        mempelajari hal-hal baru setiap harinya. Kami percaya jika hal itu dibudayakan di dalam lingkungan BPD DIY,
                        akan membangun semangat untuk terus berinovasi.
                    </p>
                </div>

                {/* Section Fresh Graduate */}
                <div className="flex flex-col md:flex-row relative z-10 bg-white">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 px-4 pt-8 bg-white text-black order-2 md:order-1 flex flex-col justify-center">
                        <span className="text-blue-400 font-semibold text-3xl md:ml-60 text-center md:text-left">
                            Fresh Graduate
                        </span>
                        <p className="mt-4 font-sans text-base font-normal leading-relaxed text-gray-800 text-center md:text-left md:ml-60">
                            Untuk kamu yang baru memulai karir, Fresh Graduate memiliki 2 kriteria, yaitu Program dan Staf.
                        </p>
                        <button className="mt-6 font-semibold hover:underline text-darkBlue text-center md:text-left md:ml-60">
                            Daftar &gt;
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 px-4 pt-8 bg-white flex justify-center md:justify-end items-center md:mr-60 order-1 md:order-2">
                        <div className="w-[80%] h-auto md:w-[60%] md:h-auto">
                            <LottieAnimation animationData={animationFgData} width="100%" height="100%" />
                        </div>
                    </div>
                </div>

                {/* Section Experienced */}
                <div className="flex flex-col md:flex-row relative z-10 bg-white">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 px-4 pt-8 bg-white flex justify-center md:justify-end items-center md:mr-60 order-1">
                        <div className="w-[80%] h-auto md:w-[80%] md:h-auto">
                            <LottieAnimation animationData={animationExperiencedData} width="100%" height="100%" />
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="w-full md:w-1/2 px-4 pt-8 bg-white text-black order-2 flex flex-col justify-center">
                        <span className="text-blue-400 font-semibold text-3xl md:mr-60 text-center md:text-left">
                            Experienced
                        </span>
                        <p className="mt-4 font-sans text-base font-normal leading-relaxed text-gray-800 text-center md:text-left md:mr-60">
                        Untuk kamu yang sudah memiliki pengalaman di bidang tertentu dan ingin mengembangkan diri lebih lagi.
                        </p>
                        <button className="mt-6 font-semibold hover:underline text-darkBlue text-center md:text-left md:mr-60">
                            Daftar &gt;
                        </button>
                    </div>
                </div>

                {/* Section Internship */}
                {/* <div className="flex flex-col md:flex-row relative z-10 bg-white"> */}
                    {/* Left Section */}
                    {/* <div className="w-full md:w-1/2 px-4 pt-8 bg-white text-black"> */}
                        {/* <span className="text-blue-400 font-semibold text-3xl md:ml-60 text-center md:text-left">
                            Internship
                        </span> */}
                        {/* <p className="mt-4 font-sans text-base font-normal leading-relaxed text-gray-800 text-center md:text-left md:ml-60">
                        Untuk kamu yang ingin magang di bidang tertentu dan mendapatkan pengalaman kerja sebelum lulus.
                        </p> */}
                        {/* <button className="mt-6 font-semibold hover:underline text-darkBlue text-center md:text-left md:ml-60">
                            Daftar &gt;
                        </button> */}
                    {/* </div> */}
                    {/* Right Section */}
                    {/* <div className="w-full md:w-1/2 px-4 pt-8 bg-white flex justify-center md:justify-end items-center md:mr-60">
                        <div className="w-[80%] h-auto md:w-[60%] md:h-auto md:-mt-32">
                            <LottieAnimation animationData={animationInternshipData} width="100%" height="100%" />
                        </div>
                    </div> */}
                {/* </div> */}

                {/* Section FAQ's */}
                <div className="flex flex-col justify-center items-center w-full bg-white h-auto relative z-10 pb-16 pt-10">
                    <h1 className="text-darkBlue font-semibold text-3xl mt-30 text-center">Frequently Answer Question</h1>
                    <br />
                    {/* <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: '#222', textAlign: 'center', marginLeft: '14rem', marginRight: '14rem' }}>
                        BPD DIY selalu mengusahakan agar karyawan dapat bekerja sesuai dengan potensi dan kemampuan mereka serta mempelajari hal-hal baru setiap harinya. Kami percaya jika hal itu dibudayakan di dalam lingkungan BPD DIY, akan membangun semangat untuk terus berinovasi.
                    </p> */}
                    <Accordion type="single" collapsible className="w-3/4 mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="w-full font-bold text-darkBlue text-xl">Apa saja posisi yang biasanya tersedia di BPD DIY?</AccordionTrigger>
                                <AccordionContent className="w-full">
                                Bank BPD DIY sering membuka lowongan untuk posisi seperti:
                                <ul className="list-disc pl-6">
                                    <li>Teller</li>
                                    <li>Customer Service</li>
                                    <li>Account Officer</li>
                                    <li>Analis Kredit</li>
                                    <li>IT Support</li>
                                    <li>Auditor Internal</li>
                                    <li>Staf Keuangan dan Administrasi</li>
                                </ul>
                                </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="w-full font-bold text-darkBlue text-xl">Apa saja persyaratan umum untuk melamar di BPD DIY?</AccordionTrigger>
                            <AccordionContent className="w-full">
                            Persyaratan umum biasanya mencakup:
                            <ul className="list-disc pl-6">
                                <li>Warga Negara Indonesia (WNI).</li>
                                <li>Usia maksimal 25–30 tahun (tergantung posisi).</li>
                                <li>Pendidikan minimal D3/S1 dari jurusan yang relevan seperti Ekonomi, Manajemen, Akuntansi, atau IT.</li>
                                <li>IPK minimal 3.00 (skala 4.00).</li>
                                <li>Memiliki kemampuan komunikasi yang baik dan orientasi pada pelayanan.</li>
                            </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="w-full font-bold text-darkBlue text-xl">Bagaimana cara melamar pekerjaan di BPD DIY?</AccordionTrigger>
                            <AccordionContent className="w-full">
                            Anda dapat melamar pekerjaan melalui langkah berikut:
                            <ul className="list-disc pl-6">
                                <li>Kunjungi website resmi BPD DIY atau portal karier yang bekerja sama dengan bank.</li>
                                <li>Pilih posisi yang sesuai dengan minat dan kualifikasi Anda.</li>
                                <li>Unduh dan lengkapi formulir lamaran.</li>
                                <li>Siapkan dokumen pendukung seperti CV, surat lamaran, ijazah, transkrip nilai, dan pas foto.</li>
                                <li>Kirim lamaran melalui sistem online, email resmi, atau secara langsung ke kantor pusat BPD DIY jika diinstruksikan.</li>
                            </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="w-full font-bold text-darkBlue text-xl">Apa tahapan seleksi yang harus dilalui?</AccordionTrigger>
                            <AccordionContent className="w-full">
                            Tahapan seleksi biasanya meliputi:
                            <ul className="list-disc pl-6">
                                <li>Seleksi administrasi berkas lamaran.</li>
                                <li>Seleksi psikotes dan wawancara.</li>
                                <li>Seleksi kesehatan dan keamanan.</li>
                                <li>Seleksi kompetensi dan keterampilan.</li>
                                <li>Penempatan kerja dan orientasi.</li>
                            </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="w-full font-bold text-darkBlue text-xl">Apakah fresh graduate dapat melamar di BPD DIY?</AccordionTrigger>
                            <AccordionContent className="w-full">
                            Ya, BPD DIY biasanya membuka kesempatan bagi fresh graduate melalui program Officer Development Program (ODP) atau posisi entry-level lainnya. Program ini dirancang untuk melatih calon pegawai baru agar siap berkarier di dunia perbankan.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="w-full font-bold text-darkBlue text-xl">Apakah ada kontrak kerja setelah diterima?</AccordionTrigger>
                            <AccordionContent className="w-full">
                            Setelah diterima, pegawai biasanya akan menjalani masa percobaan (probation) selama 3–6 bulan. Setelah masa probation selesai, pegawai akan dikontrak atau diangkat menjadi pegawai tetap, tergantung pada penilaian kinerja selama masa percobaan.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
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
