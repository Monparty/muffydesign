import Link from "next/link"

export default function Navbar() {
    return (
        <nav className='flex w-full bg-red-600 text-white justify-between items-center py-2 px-10 fixed top-0 z-50'>
            <Link href="#" className='text-2xl'>
                MUFFY / design
            </Link>
            <div className='flex gap-5'>
                <Link href="#" className='hover:underline'>หน้าแรก</Link>
                <Link href="#" className='hover:underline'>ออกแบบ</Link>
                <Link href="#" className='hover:underline'>เว็บไซต์</Link>
                <Link href="#map" className='hover:underline'>ติดต่อเรา</Link>
            </div>
        </nav>
    )
}