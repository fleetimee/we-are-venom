"use client";

import { useEffect, useState } from 'react';
import MenuBar from "../../../components/MenuBar";
import FooterCopyright from "../../../components/FooterCopyright";
import FooterSection from "../../../components/FooterSection";
import { ScrollToTopButton } from "../../../components/ScrollToTopButton";
import CariKarirButton from "../../../components/CariKarirButton";
import LottieAnimation from "../../../components/Animations";
import loadingAnimation from '../../../public/animations/loading.json';
import animation404 from '../../../public/animations/404.json';
import { FaUser, FaEnvelope, FaIdCard, FaIdBadge, FaRegCheckSquare, FaMedal, FaCalendar, FaPen, FaMapMarkerAlt, FaPhone, FaGraduationCap, FaHeart, FaBuilding, FaBriefcase, FaBook, FaUsers, FaAddressBook } from 'react-icons/fa';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

const dummyProfilePic: StaticImageData = require('../../../public/images/dummyProfilePic.jpg');

interface ProfileData {
    nama: string;
    username: string;
    email: string;
    noIdentitas: string;
    tempatLahir: string;
    tglLahir: string;
    jnsKelamin: number;
    alamatIdentitas: string;
    desaIdentitas: string;
    kecamatanIdentitas: string;
    kotaIdentitas: string;
    provinsiIdentitas: string;
    alamatDomisili: string;
    desaDomisili: string;
    kecamatanDomisili: string;
    kotaDomisili: string;
    provinsiDomisili: string;
    telp: string;
    pendidikanTerakhir: string;
    statusKawin: string;
}

interface PengalamanData {
    namaInstansi: string;
    posisiKerja: string;
    periodeKerja: string;
    deskripsiKerja: string;
}

interface PendidikanData {
    namaInstitusi: String;
    jurusan: String;
    thnMasuk: String;
    thnLulus: String;
    nilai: String;
    gelar: String;
    achievements: String;
}

interface OrganisasiData {
    namaOrganisasi: String;
    posisiOrganisasi: String;
    periode: String;
    deskripsiKerja: String;
}

interface KontakData {
    namaKontak: String;
    hubKontak: String;
    telpKontak: String;
    emailKontak: String;
    alamatKontak: String;
}

const handleChangeProfilePicture = () => {
    // Logic to handle profile picture change
    console.log("Change profile picture button clicked");
};

const Profile = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [pengalamanData, setPengalamanData] = useState<PengalamanData | null>(null);
    const [pendidikanData, setPendidikanData] = useState<PendidikanData | null>(null);
    const [organisasiData, setOrganisasiData] = useState<OrganisasiData | null>(null);
    const [kontakData, setKontakData] = useState<KontakData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            setIsLoading(true);
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found in localStorage");
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/api/profile/45`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                if (data.responseCode === "000") {
                    setProfileData(data.data);
                } else {
                    console.error("Error fetching data:", data.responseMessage);
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    useEffect(() => {
        const fetchPengalamanData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found in localStorage");
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/api/profile/pengalaman/45`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                if (data.responseCode === "000") {
                    setPengalamanData(data.data);
                } else {
                    console.error("Error fetching data:", data.responseMessage);
                }
            } catch (error) {
                console.error("Error fetching pengalaman data:", error);
            }
        };

        fetchPengalamanData();
    }, []);

    useEffect(() => {
        const fetchPendidikanData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found in localStorage");
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/api/profile/pendidikan/45`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                if (data.responseCode === "000") {
                    setPendidikanData(data.data);
                } else {
                    console.error("Error fetching data:", data.responseMessage);
                }
            } catch (error) {
                console.error("Error fetching pengalaman data:", error);
            }
        };

        fetchPendidikanData();
    }, []);

    useEffect(() => {
        const fetchOrganisasiData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found in localStorage");
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/api/profile/organisasi/45`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                if (data.responseCode === "000") {
                    setOrganisasiData(data.data);
                } else {
                    console.error("Error fetching data:", data.responseMessage);
                }
            } catch (error) {
                console.error("Error fetching organisasi data:", error);
            }
        };

        fetchOrganisasiData();
    }, []);

    useEffect(() => {
        const fetchKontakData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found in localStorage");
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/api/profile/kontak/45`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                if (data.responseCode === "000") {
                    setKontakData(data.data);
                } else {
                    console.error("Error fetching data:", data.responseMessage);
                }
            } catch (error) {
                console.error("Error fetching kontak data:", error);
            }
        };

        fetchKontakData();
    }, []);

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
            <main className="pt-28 bg-gradient-to-r from-[#015CAC] to-[#018ED2] relative z-10">
                <div className="bg-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#015CAC', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#018ED2', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path fill="url(#grad1)"
                            d="M0,0L120,10.7C240,21,480,43,720,48C960,53,1200,43,1320,37.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                </div>

                <div className="flex flex-col justify-center items-center w-full bg-white h-min-[400px] relative z-10 -mt-32">
                    <h1 className="text-darkBlue font-semibold text-3xl mt-4 md:mt-2">Profile</h1>
                    <br />
                    <p className="font-sans text-base font-normal leading-relaxed text-gray-800 text-center px-6 md:px-32 lg:px-56">
                        Berikut adalah informasi profil:
                    </p>

                    {isLoading ? (
                        <div className="flex justify-center items-center mt-10">
                            <LottieAnimation animationData={loadingAnimation} />
                        </div>
                    ) : profileData ? (
                        <div className="mt-6 w-11/12 lg:w-4/5 flex flex-col space-y-6">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start">

                                {/* Section Profile Picture */}
                                <div className="w-full lg:w-1/4 bg-white shadow-lg flex flex-col justify-center items-center mb-6 lg:mb-0 p-4">
                                    <div className="w-3/4 lg:w-full h-48 bg-gray-300 flex justify-center items-center">
                                        <span className="text-gray-500">3x4 Rectangle</span>
                                    </div>
                                    <button 
                                        onClick={handleChangeProfilePicture} 
                                        className="mt-4 bg-darkBlue text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-blue-400">
                                        Change Profile Picture
                                    </button>
                                </div>

                                {/* Section Profile Data */}
                                <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-6 lg:ml-6">
                                    <h2 className="text-2xl font-bold mb-4 text-darkBlue">{profileData.nama || '-'}</h2>
                                    <div className="flex items-center mb-2">
                                        <FaUser className="mr-2 text-darkBlue" />
                                        <p><strong>Username:</strong> {profileData.username || '-'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaEnvelope className="mr-2 text-darkBlue" />
                                        <p><strong>Email:</strong> {profileData.email || '-'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaIdCard className="mr-2 text-darkBlue" />
                                        <p><strong>No Identitas:</strong> {profileData.noIdentitas || '-'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaMapMarkerAlt className="mr-2 text-darkBlue" />
                                        <p><strong>Tempat Lahir:</strong> {profileData.tempatLahir || '-'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaMapMarkerAlt className="mr-2 text-darkBlue" />
                                        <p><strong>Tanggal Lahir:</strong> {profileData.tglLahir ? new Date(profileData.tglLahir).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : '-'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaUser className="mr-2 text-darkBlue" />
                                        <p><strong>Jenis Kelamin:</strong> {profileData.jnsKelamin === 1 ? 'Laki-laki' : 'Perempuan'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaMapMarkerAlt className="mr-2 text-darkBlue" />
                                        <p><strong>Alamat Identitas:</strong> {profileData.alamatIdentitas}, {profileData.desaIdentitas}, {profileData.kecamatanIdentitas}, {profileData.kotaIdentitas}, {profileData.provinsiIdentitas}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaMapMarkerAlt className="mr-2 text-darkBlue" />
                                        <p><strong>Alamat Domisili:</strong> {profileData.alamatDomisili}, {profileData.desaDomisili}, {profileData.kecamatanDomisili}, {profileData.kotaDomisili}, {profileData.provinsiDomisili}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaPhone className="mr-2 text-darkBlue" />
                                        <p><strong>Telepon:</strong> {profileData.telp || '-'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaGraduationCap className="mr-2 text-darkBlue" />
                                        <p><strong>Pendidikan Terakhir:</strong> {profileData.pendidikanTerakhir || '-'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaHeart className="mr-2 text-darkBlue" />
                                        <p><strong>Status Kawin:</strong> {profileData.statusKawin === '1' ? 'Menikah' : 'Belum Menikah'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                                {/* Section Pengalaman Kerja */}
                                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
                                    <h2 className="text-2xl font-bold mb-4 text-darkBlue">Pengalaman Kerja</h2>
                                    {pengalamanData ? (
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <FaBuilding className="mr-2 text-darkBlue" />
                                                <p><strong>Nama Instansi:</strong> {pengalamanData.namaInstansi || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaBriefcase className="mr-2 text-darkBlue" />
                                                <p><strong>Posisi Kerja:</strong> {pengalamanData.posisiKerja || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaCalendar className="mr-2 text-darkBlue" />
                                                <p><strong>Periode Kerja:</strong> {pengalamanData.periodeKerja || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaPen className="mr-2 text-darkBlue" />
                                                <p><strong>Deskripsi Kerja:</strong> {pengalamanData.deskripsiKerja || '-'}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-darkBlue font-bold text-xl sm:text-2xl mt-4 mb-20 text-center">
                                            Data pengalaman kerja tidak ditemukan
                                        </p>
                                    )}
                                </div>

                                {/* Section Pengalaman Organisasi */}
                                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
                                    <h2 className="text-2xl font-bold mb-4 text-darkBlue">Pengalaman Organisasi</h2>
                                    {organisasiData ? (
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <FaUsers className="mr-2 text-darkBlue" />
                                                <p><strong>Nama Organisasi:</strong> {organisasiData.namaOrganisasi || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaIdBadge className="mr-2 text-darkBlue" />
                                                <p><strong>Posisi:</strong> {organisasiData.posisiOrganisasi || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaCalendar className="mr-2 text-darkBlue" />
                                                <p><strong>Periode:</strong> {organisasiData.periode ? `${new Date(organisasiData.periode.split(' to ')[0]).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })} s/d ${new Date(organisasiData.periode.split(' to ')[1]).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}` : '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaPen className="mr-2 text-darkBlue" />
                                                <p><strong>Deskripsi Kerja:</strong> {organisasiData.deskripsiKerja || '-'}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-darkBlue font-bold text-xl sm:text-2xl mt-4 mb-20 text-center">
                                            Data riwayat organisasi tidak ditemukan
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                                {/* Section Riwayat Pendidikan */}
                                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
                                    <h2 className="text-2xl font-bold mb-4 text-darkBlue">Riwayat Pendidikan</h2>
                                    {pendidikanData ? (
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <FaBook className="mr-2 text-darkBlue" />
                                                <p><strong>Nama Instansi:</strong> {pendidikanData.namaInstitusi || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaUser className="mr-2 text-darkBlue" />
                                                <p><strong>Jurusan:</strong> {pendidikanData.jurusan || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaCalendar className="mr-2 text-darkBlue" />
                                                <p><strong>Periode Pendidikan:</strong> {pendidikanData.thnMasuk || '-'} s/d {pendidikanData.thnLulus || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaRegCheckSquare className="mr-2 text-darkBlue" />
                                                <p><strong>Nilai:</strong> {pendidikanData.nilai || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaGraduationCap className="mr-2 text-darkBlue" />
                                                <p><strong>Gelar:</strong> {pendidikanData.gelar || '-'}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaMedal className="mr-2 text-darkBlue" />
                                                <p><strong>Penghargaan:</strong> {pendidikanData.achievements || '-'}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-darkBlue font-bold text-xl sm:text-2xl mt-4 mb-20 text-center">
                                            Data riwayat pendidikan tidak ditemukan
                                        </p>
                                    )}
                                </div>

                                {/* Section Kontak Kerabat */}
                                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
                                    <h2 className="text-2xl font-bold mb-4 text-darkBlue">Kontak Kerabat</h2>
                                    {kontakData ? (
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <FaAddressBook className="mr-2 text-darkBlue" />
                                                <p><strong>Nama Kontak:</strong> {kontakData.namaKontak}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaUser className="mr-2 text-darkBlue" />
                                                <p><strong>Hubungan Kerabat:</strong> {kontakData.hubKontak}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaPhone className="mr-2 text-darkBlue" />
                                                <p><strong>No Telepon:</strong> {kontakData.telpKontak}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaEnvelope className="mr-2 text-darkBlue" />
                                                <p><strong>Email:</strong> {kontakData.emailKontak}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaMapMarkerAlt className="mr-2 text-darkBlue" />
                                                <p><strong>Alamat:</strong> {kontakData.alamatKontak}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-darkBlue font-bold text-xl sm:text-2xl mt-4 mb-20 text-center">
                                            Data kontak tidak ditemukan
                                        </p>
                                    )}
                                </div>
                            </div>

                            <button 
                                onClick={handleChangeProfilePicture} 
                                className="mt-4 bg-darkBlue text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-blue-400">
                                Update Data
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center mt-10">
                            <div className="w-3/4 sm:w-3/4 lg:w-1/4">
                                <LottieAnimation animationData={animation404} />
                            </div>
                            <p className="text-darkBlue font-bold text-xl sm:text-2xl mt-4 mb-20 text-center">
                                Data profil tidak ditemukan
                            </p>
                        </div>
                    )}

                    <br />
                </div>

                <FooterSection />
                <FooterCopyright />
            </main>

            <ScrollToTopButton />
            <CariKarirButton />
        </div>
    );
};

export default Profile;