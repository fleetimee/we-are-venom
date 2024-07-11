// components/FooterSection.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="flex relative z-10 pt-14 bg-white">
                <div className="w-1/2 h-min-24 px-4 bg-white text-black flex flex-col relative z-0">
                    <p
                        className="text-xl font-bold text-darkBlue"
                        style={{
                            margin: '0',
                            fontFamily: 'Open Sans, sans-serif',
                            textAlign: 'left',
                            backgroundColor: '#fff',
                            marginLeft: '8rem',
                        }}
                    >
                        Kantor Pusat
                    </p>
                    <p
                        className="mt-4"
                        style={{
                            margin: '0',
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '0.8rem',
                            fontWeight: 400,
                            lineHeight: 1.8,
                            color: '#222',
                            textAlign: 'left',
                            backgroundColor: '#fff',
                            marginRight: 18,
                            marginLeft: '8rem',
                        }}
                    >
                        Jl. Tentara Pelajar No.7, Bumijo, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55231
                        <br/>
                        <br/>
                        PHONE : +62274561614<br/>
                        EMAIL : contactcenter@bpddiy.co.id<br/>
                        FAX : +62274561614<br/>
                        <br/>
                    </p>
                </div>
                <div className="w-1/4 px-4 bg-white text-black flex flex-col relative z-0">
                    <p
                        className="text-xl font-bold text-darkBlue"
                        style={{
                            margin: '0',
                            fontFamily: 'Open Sans, sans-serif',
                            textAlign: 'left',
                            backgroundColor: '#fff',
                            marginLeft: '8rem',
                            marginBottom: '1rem',
                        }}
                    >
                        Hubungi Kami
                    </p>
                    <ul
                        className="mt-4"
                        style={{
                            margin: '0',
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '0.8rem',
                            fontWeight: 400,
                            lineHeight: 1.8,
                            color: '#222',
                            textAlign: 'left',
                            backgroundColor: '#fff',
                            marginRight: 18,
                            marginLeft: '8rem',
                            listStyleType: 'none',
                            padding: 0
                        }}
                    >
                        <li style={{ marginBottom: '1rem' }}>
                            <button onClick={() => window.open('https://facebook.com', '_blank')}
                                    className="flex items-center hover:text-darkBlue">
                                <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '8px' }}/>
                                FACEBOOK
                            </button>
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <button onClick={() => window.open('https://instagram.com', '_blank')}
                                    className="flex items-center hover:text-purple-700">
                                <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '8px' }}/>
                                INSTAGRAM
                            </button>
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <button onClick={() => window.open('https://youtube.com', '_blank')}
                                    className="flex items-center hover:text-red-700">
                                <FontAwesomeIcon icon={faYoutube} style={{ marginRight: '8px' }}/>
                                YOUTUBE
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4 px-4 bg-white text-black flex relative z-0">

                </div>
            </div>
        </>
    );
};

export default FooterSection;