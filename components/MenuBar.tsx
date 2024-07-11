// components/MenuBar.tsx

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MenuBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled ? 'bg-white py-2 shadow-xl' : 'bg-transparent py-4'} z-50`}
        >
            <nav className="container mx-auto flex justify-between items-center px-4">
                <div className={`pl-24 ${isScrolled ? 'text-darkBlue' : 'text-white'}`} style={{ width: '200px', height: 'auto' }}>
                    <object
                        type="image/svg+xml"
                        data="/bpd.svg"
                        style={{
                            width: '100%',
                            height: '100%',
                            fill: isScrolled ? 'darkblue' : 'white',
                            stroke: isScrolled ? 'darkblue' : 'white'
                        }}>
                        Your browser does not support SVG
                    </object>
                </div>
                <ul className="flex pr-24">
                    <li className="mr-4">
                        <Link href="/" legacyBehavior>
                            <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/karir" legacyBehavior>
                            <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                Karir
                            </a>
                        </Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/magang" legacyBehavior>
                            <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                Magang
                            </a>
                        </Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/info-artikel" legacyBehavior>
                            <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                Info & Artikel
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sign-in" legacyBehavior>
                            <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                Sign In
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MenuBar;
