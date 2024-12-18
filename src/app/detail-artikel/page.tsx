"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import parse from "html-react-parser";
import MenuBar from "../../../components/MenuBar";
import FooterSection from "../../../components/FooterSection";
import FooterCopyright from "../../../components/FooterCopyright";
import { ScrollToTopButton } from "../../../components/ScrollToTopButton";
import CariKarirButton from "../../../components/CariKarirButton";
import animation404 from '../../../public/animations/404.json';
import LottieAnimation from "../../../components/Animations";

const DetailArtikel = () => {
    const router = useRouter();
    const { id } = router.query; // Get the slug from URL
    const [article, setArticle] = useState<any>(null); // Article data state
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(false); // Error state

    useEffect(() => {
        const fetchArticleDetail = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found in localStorage");
                return; // Exit if no token is found
            }


            if (!id) return; // Prevent running when slug is undefined

            try {
                const response = await fetch(`http://localhost:8080/api/artikel/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (data.responseCode === "000") {
                    setArticle(data.data);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Error fetching article detail:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchArticleDetail();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg text-gray-500">Loading...</p>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="flex flex-col items-center mt-10">
                <div className="w-3/4 sm:w-3/4 lg:w-1/4">
                    <LottieAnimation animationData={animation404} />
                </div>
                <p className="text-darkBlue font-bold text-xl sm:text-2xl mt-4 mb-20 text-center">
                    Artikel tidak ditemukan
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 font-sans relative">
            {/* Header Section */}
            <MenuBar />

            {/* Article Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    {/* Article Image */}
                    <div className="w-full h-64 relative mb-6">
                        <Image
                            src={`/uploads/${article.gambar}`}
                            alt={article.judul}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Article Title */}
                    <h1 className="text-3xl font-bold text-darkBlue mb-4">{article.judul}</h1>

                    {/* Article Content */}
                    <div className="prose prose-lg text-gray-700">
                        {parse(article.isi)} {/* Renders HTML content */}
                    </div>
                </div>
            </div>

            {/* Section Footer */}
            <FooterSection />

            {/* Section Copyright */}
            <FooterCopyright />

            {/* Button Back to Top */}
            <ScrollToTopButton />

            {/* Button Find Career/Opportunity */}
            <CariKarirButton />
        </div>
    );
};

export default DetailArtikel;