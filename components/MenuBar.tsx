import { useState, useEffect } from 'react';
import DesktopNavLinks from './DesktopNavLinks';
import MobileDrawer from './MobileDrawer';
import MobileMenuButton from './MobileMenuButton';
import Link from 'next/link';
import HomeIcon from './HomeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MenuBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled ? 'bg-white py-2 shadow-xl' : 'bg-transparent py-4'} z-50`}
        >
            <nav className="container mx-auto flex justify-between items-center px-4">
                {/* Logo Section */}
                <div className={`pl-4 sm:pl-24 ${isScrolled ? 'text-darkBlue' : 'text-white'}`} style={{ width: '200px', height: 'auto' }}>
                    <object
                        type="image/svg+xml"
                        data="/bpd.svg"
                        style={{
                            width: '100%',
                            height: '100%',
                            fill: isScrolled ? 'darkBlue' : 'white',
                            stroke: isScrolled ? 'darkBlue' : 'white',
                        }}
                    >
                        Your browser does not support SVG
                    </object>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex relative py-6 flex-col justify-center">
                    <DesktopNavLinks />
                </div>

                {/* Mobile Navigation */}
                <div className="sm:hidden relative flex flex-row my-4">
                    <MobileMenuButton onClick={handleDrawerToggle} />
                    <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
                </div>
            </nav>
        </header>
    );
};

export default MenuBar;
