import Link from 'next/link';
import { useState, useEffect } from 'react';
import HomeIcon from './HomeIcon'; 

function DesktopNavLinks() {
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
    <ul className="flex pr-24">
                        <li className="mr-4">
                            <Link href="/" legacyBehavior>
                                <a className={`flex items-center font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                    <HomeIcon fill={isScrolled ? 'darkblue' : 'white'} />
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
                            <Link href="/riwayat" legacyBehavior>
                                <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                    Riwayat
                                </a>
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link href="/pengumuman" legacyBehavior>
                                <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                    Pengumuman
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
                        <li className="mr-4">
                            <Link href="/login" legacyBehavior>
                                <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                    Login
                                </a>
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link href="/profil" legacyBehavior>
                                <a className={`font-semibold py-2 px-2 block custom-underline hover:font-bold ${isScrolled ? 'text-darkBlue' : 'hover:text-blue-300'}`}>
                                    Profil
                                </a>
                            </Link>
                        </li>
                    </ul>
  );
}

export default DesktopNavLinks;