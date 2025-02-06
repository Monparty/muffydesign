import Link from "next/link"
import Image from "next/image"
import {
    muffyLogo1, muffyLogo2, muffyLogo3, muffyLogo4
} from '../../public/exportImg';

export default function Navbar() {
    return (
        <nav className='flex w-fit gap-5 m-5 rounded-full bg-white/30 backdrop-blur-md border text-red-600 justify-between items-center py-2 pr-2 pl-2 fixed top-0 z-50'>
            <Link href="#" className='text-3xl mr-10 flex items-center gap-4'>
                <Image src={muffyLogo4} className="w-12 p-1 rounded-full bg-white" alt="x" />
                <span >
                    MUFFY / design
                </span>
            </Link>
            <div className='flex gap-5 font-bold text-lg'>
                <Link href="/">หน้าแรก</Link>
                <Link href="/design">ออกแบบ</Link>
                <Link href="/web">เว็บไซต์</Link>
                <Link href="#map">ติดต่อเรา</Link>
            </div>
            <div className='flex gap-5 border-l pl-5'>
                <Link href="#" className="p-2 rounded-full bg-white hover:opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ef4444" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m6-2A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
                </Link>
                <Link href="#" className="p-2 rounded-full bg-white hover:opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ef4444" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                </Link>
            </div>
        </nav>
    )
}