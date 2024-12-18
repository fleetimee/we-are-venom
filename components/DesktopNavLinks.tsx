import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import HomeIcon from './HomeIcon';

function DesktopNavLinks() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasToken, setHasToken] = useState(false);

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
  }, []);

  const linkStyle = isScrolled
    ? 'text-darkBlue hover:underline'
    : 'text-white hover:text-blue-300';

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex pr-24 space-x-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex items-center font-semibold py-2 px-2 custom-underline ${linkStyle}`}
            >
              <HomeIcon fill={isScrolled ? 'darkblue' : 'white'} />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/karir" legacyBehavior passHref>
            <NavigationMenuLink
              className={`font-semibold py-2 px-2 custom-underline ${linkStyle}`}
            >
              Karir
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/info-artikel" legacyBehavior passHref>
            <NavigationMenuLink
              className={`font-semibold py-2 px-2 custom-underline ${linkStyle}`}
            >
              Info & Artikel
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {hasToken && (
          <>
            <NavigationMenuItem>
              <Link href="/riwayat" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`font-semibold py-2 px-2 custom-underline ${linkStyle}`}
                >
                  Riwayat
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pengumuman" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`font-semibold py-2 px-2 custom-underline ${linkStyle}`}
                >
                  Pengumuman
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/profil" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`font-semibold py-2 px-2 custom-underline ${linkStyle}`}
                >
                  Profil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
        {!hasToken && (
          <NavigationMenuItem>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink
                className={`font-semibold py-2 px-2 custom-underline ${linkStyle}`}
              >
                Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DesktopNavLinks;
