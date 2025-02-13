"use client"
import AOS from "aos";
import Link from "next/link"
import React, { useEffect } from "react";

export default function Footer() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <footer className="border-t dark:bg-gray-900">
            <div className="w-full p-4 py-6 lg:p-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link data-aos="fade-up" href="#toTop" className="flex items-center">
                            <span className="self-center text-4xl whitespace-nowrap dark:text-white">MUFFY / design</span>
                        </Link>
                    </div>
                    <div data-aos="fade-up" className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:gap-10">
                        <div>
                            <h2 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">บริการของเรา</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/design" className="hover:underline">ออกแบบ</Link>
                                </li>
                                <li>
                                    <Link href="/web" className="hover:underline">เว็บไซต์</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">ข่าวสาร</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">บริการใหม่</Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline">บริการที่น่าสนใจ</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">ติดต่อเรา</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">LINE</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Facebook</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">094-303-0401</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-b-1 sm:mx-auto dark:border-gray-700" />
                <div className="sm:flex sm:items-center sm:justify-between mb-10 md:mb-0">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="/" className="hover:underline">MUFFY / design</Link>. All Rights Reserved.
                    </span>
                    <div className="flex items-center mt-4 sm:justify-center sm:mt-0">
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path><circle cx="9.5" cy="11.5" r="1.5"></circle><circle cx="14.5" cy="11.5" r="1.5"></circle></svg>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}