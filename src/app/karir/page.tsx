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
import {faCalendar, faMapMarkerAlt, faUsers} from "@fortawesome/free-solid-svg-icons";

const Karir = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [filters, setFilters] = useState({
        position: "",
        location: "",
        status: "",
        area: ""
    });
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

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans relative">

            <MenuBar />

            <main className="pt-20 bg-gradient-to-r from-[#015CAC] to-[#018ED2] relative z-10">
                <div className="container w-full mx-auto px-4 py-8 h-[450px]">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 pl-20 flex items-center justify-center">
                            <div className="p-8 rounded-lg">
                                <h1 className="text-4xl font-bold mb-4">Temukan Karir Impianmu</h1>
                                <p>Mulai berkarir dan temukan tujuanmu bersama <br/> <b>Bank BPD DIY</b></p>
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
                              d="M0,0L120,10.7C240,21,480,43,720,48C960,53,1200,43,1320,37.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                </div>

                {/* Section List Pekerjaan */}
                <div
                    className="flex flex-col justify-center items-center w-full bg-white h-min-[400px] relative z-10 -mt-32">
                    <h1 className="text-darkBlue font-semibold text-3xl">Peluang Kerja Terbaru</h1>
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
                        Kami sedang membuka kesempatan bekerja untuk posisi berikut ini:
                    </p>

                    {/* Filter Section */}
                    <div className="container mx-auto py-8 flex justify-center">
                        <div className="w-full md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-full p-6 flex items-center">
                            <div className="flex flex-wrap w-full">
                                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                                    <select name="position" value={filters.position} onChange={handleFilterChange} className="w-full p-2 rounded-md border border-gray-300 text-black">
                                        <option value="">Posisi</option>
                                        <option value="IT">Teknologi Informasi</option>
                                        <option value="CS">Customer Service</option>
                                        <option value="Teller">Teller</option>
                                        <option value="Kasir">Kasir</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                                    <select name="location" value={filters.location} onChange={handleFilterChange} className="w-full p-2 rounded-md border border-gray-300 text-black">
                                        <option value="">Lokasi</option>
                                        <option value="Jakarta">Jakarta</option>
                                        <option value="Yogyakarta">Yogyakarta</option>
                                        <option value="Surabaya">Surabaya</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                                    <select name="status" value={filters.status} onChange={handleFilterChange} className="w-full p-2 rounded-md border border-gray-300 text-black">
                                        <option value="">Status</option>
                                        <option value="Full-Time">Full-Time</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Internship">Magang</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                                    <select name="area" value={filters.area} onChange={handleFilterChange} className="w-full p-2 rounded-md border border-gray-300 text-black">
                                        <option value="">Area</option>
                                        <option value="Finance">Keuangan</option>
                                        <option value="Marketing">Pemasaran</option>
                                        <option value="Operations">Operasional</option>
                                    </select>
                                </div>
                            </div>
                            <button className="ml-4 px-6 py-2 bg-darkBlue text-white font-semibold rounded-md hover:bg-blue-400 transition duration-300">
                                Cari
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-11/12 lg:w-4/5">

                        {/* Job 1 */}
                        <button
                            className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300"
                            onClick={() => window.location.href = '/magang/#'}>
                            <div className="w-1/4">
                                <Image
                                    src="/images/magang-ti.jpeg"
                                    alt="Magang"
                                    width={150}
                                    height={150}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="w-3/4 pl-6 text-left">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Account Officer</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUsers} className="mr-1"/>
                                        <span>Junior</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>Contract</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1"/>
                                        <span>Kantor Cabang</span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Job 2 */}
                        <button
                            className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300"
                            onClick={() => window.location.href = '/magang/#'}>
                            <div className="w-1/4">
                                <Image
                                    src="/images/magang-cs.jpg"
                                    alt="Magang"
                                    width={150}
                                    height={150}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="w-3/4 pl-6 text-left">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Quality Assurance Engineer</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUsers} className="mr-1"/>
                                        <span>Junior</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>Full-Time</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1"/>
                                        <span>Kantor Pusat</span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Job 3 */}
                        <button
                            className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300"
                            onClick={() => window.location.href = '/magang/#'}>
                            <div className="w-1/4">
                                <Image
                                    src="/images/magang-teller.jpg"
                                    alt="Magang"
                                    width={150}
                                    height={150}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="w-3/4 pl-6 text-left">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">UI Designer</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUsers} className="mr-1"/>
                                        <span>Junior</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>Full-Time</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1"/>
                                        <span>Kantor Pusat</span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Job 4 */}
                        <button
                            className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300"
                            onClick={() => window.location.href = '/magang/#'}>
                            <div className="w-1/4">
                                <Image
                                    src="/images/magang-kasir.jpg"
                                    alt="Magang"
                                    width={150}
                                    height={150}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="w-3/4 pl-6 text-left">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Customer Service</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUsers} className="mr-1"/>
                                        <span>Junior</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>Full-Time</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1"/>
                                        <span>KCP Temon</span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Job 5 */}
                        <button
                            className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300"
                            onClick={() => window.location.href = '/magang/#'}>
                            <div className="w-1/4">
                                <Image
                                    src="/images/magang-kasir.jpg"
                                    alt="Magang"
                                    width={150}
                                    height={150}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="w-3/4 pl-6 text-left">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Teller</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUsers} className="mr-1"/>
                                        <span>Junior</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>Full-Time</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1"/>
                                        <span>KC Klaten</span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Job 6 */}
                        <button
                            className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300"
                            onClick={() => window.location.href = '/magang/#'}>
                            <div className="w-1/4">
                                <Image
                                    src="/images/magang-kasir.jpg"
                                    alt="Magang"
                                    width={150}
                                    height={150}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="w-3/4 pl-6 text-left">
                                <h2 className="text-xl font-bold mb-2 text-darkBlue">Recruitment Staff</h2>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUsers} className="mr-1"/>
                                        <span>Junior</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>
                                        <span>Full-Time</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1"/>
                                        <span>Kantor Pusat</span>
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

export default Karir;
