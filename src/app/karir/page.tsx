"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import MenuBar from "../../../components/MenuBar";
import FooterCopyright from "../../../components/FooterCopyright";
import FooterSection from "../../../components/FooterSection";
import { ScrollToTopButton } from "../../../components/ScrollToTopButton";
import CariKarirButton from "../../../components/CariKarirButton";
import SearchButton from "../../../components/SearchButton";

const Karir = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [jobs, setJobs] = useState([]); // State for fetched jobs
    const [filters, setFilters] = useState({
        position: "",
        location: "",
        status: "",
        area: "",
    });

    // Fetch job data from API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/lowongan/list", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0YXRham9oMjA4QGx1eHlzcy5jb20iLCJpYXQiOjE3MzM3OTgxMzQsImV4cCI6MTczMzg4NDUzNH0.Lb-lZaOWdropPhV5Fn6ZXHcyh-D7fOht9Uhle3QEVwQrjL0micuirO-n3HCHIHcuF0RNGtdx1VkF26yjzgrGYg"
                    },
                });
                const data = await response.json();
                if (data.responseCode === "000") {
                    setJobs(data.data);
                }
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowScrollToTop(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSearchClick = () => {
        console.log("Search button clicked");
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
                                <p>
                                    Mulai berkarir dan temukan tujuanmu bersama <br /> <b>Bank BPD DIY</b>
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
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
                <div className="bg-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path
                            fill="url(#grad1)"
                            d="M0,0L120,10.7C240,21,480,43,720,48C960,53,1200,43,1320,37.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                        ></path>
                    </svg>
                </div>

                {/* Section List Pekerjaan */}
                <div className="flex flex-col justify-center items-center w-full bg-white h-min-[400px] relative z-10 -mt-32">
                    <h1 className="text-darkBlue font-semibold text-3xl">Peluang Kerja Terbaru</h1>
                    <p className="text-center text-gray-700 mt-4 px-6">
                        Kami sedang membuka kesempatan bekerja untuk posisi berikut ini:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-11/12 lg:w-4/5">
                        {jobs.map((job: any) => (
                            <button
                                key={job.idLowongan}
                                className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition duration-500 ease-in-out"
                                onClick={() => window.location.href = `/karir/${job.slug}`}
                            >
                                <div className="w-1/4">
                                    <Image
                                        src="/images/magang.png" // Update if dynamic images are used
                                        alt={job.judulLowongan}
                                        width={150}
                                        height={150}
                                        className="rounded-lg object-contain"
                                    />
                                </div>
                                <div className="w-3/4 pl-6 text-left">
                                    <h2 className="text-xl font-bold mb-2 text-darkBlue">{job.judulLowongan}</h2>
                                    <p className="text-sm text-gray-600">{job.tentangPekerjaan}</p>
                                    <div className="flex items-center text-sm text-gray-600 space-x-4 mt-2">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faUsers} className="mr-1" />
                                            <span>{job.posisi}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faCalendar} className="mr-1" />
                                            <span>
                                                {job.periodeAwal} s/d {job.periodeAkhir}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <FooterSection />
                <FooterCopyright />
            </main>

            <ScrollToTopButton />
            <CariKarirButton />
        </div>
    );
};

export default Karir;
