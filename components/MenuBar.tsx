import { useState, useEffect } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenuButton from "./MobileMenuButton";
import Image from "next/image";
import Link from "next/link";

const MenuBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(!!token);
    }, []);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full transition-all duration-300 ${
                isScrolled ? "bg-white py-2 shadow-xl" : "bg-transparent py-4"
            } z-50`}
        >
            <nav className="container mx-auto flex justify-between items-center px-4">
                {/* Logo Section */}
                <div
                    className={`pl-4 sm:pl-24 ${isScrolled ? "text-darkBlue" : "text-white"}`}
                    style={{ width: "300px", height: "auto" }}
                >
                    <Image
                        src={isScrolled ? "/images/Logo_Color.png" : "/images/Logo_Monochrome.png"}
                        alt="BPD Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex relative py-6">
                    <DesktopNavLinks />
                </div>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex items-center">
                    <MobileMenuButton onClick={handleDrawerToggle} isScrolled={isScrolled} />
                </div>
            </nav>

            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col">
                    <div className="flex justify-between items-center px-4 py-4">
                        <Image
                            src="/images/Logo_Color.png"
                            alt="BPD Logo"
                            width={150}
                            height={50}
                            priority
                        />
                        <button
                            onClick={handleDrawerToggle}
                            className="text-darkBlue text-2xl focus:outline-none"
                        >
                            &times; {/* Close Button */}
                        </button>
                    </div>
                    <ul className="flex flex-col items-center justify-center space-y-6 mt-8">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="text-darkBlue text-lg hover:text-blue-500" onClick={handleDrawerToggle}>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/karir" legacyBehavior>
                                <a className="text-darkBlue text-lg hover:text-blue-500" onClick={handleDrawerToggle}>
                                    Karir
                                </a> 
                            </Link>
                        </li>
                        <li>
                            <Link href="/info-artikel" legacyBehavior>
                                <a className="text-darkBlue text-lg hover:text-blue-500" onClick={handleDrawerToggle}>
                                    Info & Artikel
                                </a>
                            </Link>
                        </li>
                        {hasToken && (
                            <>
                                <li>
                                    <Link href="/riwayat" legacyBehavior>
                                        <a className="text-darkBlue text-lg hover:text-blue-500" onClick={handleDrawerToggle}>
                                            Riwayat
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pengumuman" legacyBehavior>
                                        <a className="text-darkBlue text-lg hover:text-blue-500" onClick={handleDrawerToggle}>
                                            Pengumuman
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profil" legacyBehavior>
                                        <a className="text-darkBlue text-lg hover:text-blue-500" onClick={handleDrawerToggle}>
                                            Profil
                                        </a>
                                    </Link>
                                </li>
                            </>
                        )}
                        {!hasToken && (
                            <li>
                                <Link href="/login" legacyBehavior>
                                    <a className="text-darkBlue text-lg hover:text-blue-500" onClick={handleDrawerToggle}>
                                        Login
                                    </a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default MenuBar;
