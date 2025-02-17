"use client"
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

export default function BackToTop() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Link href="#toTop" className="fixed bottom-0 right-0 z-40 px-4 py-2 bg-red-500 mx-8 rounded-t-full" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" className="hover:animate-bounce" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M17 15a1 1 0 0 0 .707-1.707l-5-5a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 7 15z" clip-rule="evenodd"/></svg>
        </Link>
    )
}