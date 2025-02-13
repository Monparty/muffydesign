"use client"
import Link from "next/link"
import Image from "next/image"
import { muffyLogo } from '../../public/exportImg';
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navLink = ['/', '/design', '/web', '/#contact']
    const navName = ['หน้าหลัก', 'ออกแบบ', 'เว็บไซต์', 'ติดต่อเรา']

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
          setShow(true); 
        } else {
          setShow(false);  
        }

        setLastScrollY(window.scrollY); 
      };

      useEffect(() => {
        window.addEventListener('scroll', controlNavbar)

        return () => {
           window.removeEventListener('scroll', controlNavbar)
        };
      }, [lastScrollY]);

    return (
        <div>
            <nav className={`${show && 'hidden'}  text-red-600 fixed top-0 z-50`}>
                <div className="m-5 bg-white/30 backdrop-blur-md rounded-full">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className=' block lg:hidden focus:opacity-0 hover:bg-gray-100 p-3 rounded-full cursor-pointer z-40'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#fff" d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"/></svg>
                    </button>
                    <div className="border rounded-full hidden lg:flex gap-5 p-2 w-fit justify-between items-center">
                        <Link href={navLink[0]} className='text-2xl 2xl:text-3xl mr-10 flex items-center gap-4'>
                            <Image src={muffyLogo} className="w-12 p-1 rounded-full bg-white" alt="x" />
                            <span>
                                MUFFY / design
                            </span>
                        </Link>
                        <div className='flex gap-5 2xl:text-lg'>
                            <Link href={navLink[0]}>{navName[0]}</Link>
                            <Link href={navLink[1]}>{navName[1]}</Link>
                            <Link href={navLink[2]}>{navName[2]}</Link>
                            <Link href={navLink[3]}>{navName[3]}</Link>
                        </div>
                        <div className='flex gap-5 border-l pl-5'>
                            <Link href="#" className="p-2 rounded-full bg-white hover:opacity-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ef4444" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m6-2A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white hover:opacity-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ef4444" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="blok md:hidden lg:-hidden">
                <NavbarMobile navLink={navLink} />
            </div>
            <div className='w-full h-0 fixed top-0 left-0 z-30'>
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} navLink={navLink} navName={navName} />
            </div>
        </div>
    )
}