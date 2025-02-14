import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar({ isOpen, setIsOpen, navLink, navName }) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                event.target.tagName !== 'A'
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    return (
        <div className={`flex ${isOpen ? 'w-full' : 'w-0'} transition-all duration-200`}>
            <div ref={sidebarRef} className={`w-3/5 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'} lg:hidden delay-100 flex flex-col h-dvh py-24 px-10 gap-3 bg-white border-r`}>
                <Link href={navLink[0]} className="border-l pl-2 hover:border-blue-200 py-2 hover:font-medium" onClick={() => setIsOpen(false)}>
                    {navName[0]}
                </Link>
                <Link href={navLink[1]} className="border-l pl-2 hover:border-blue-200 py-2 hover:font-medium" onClick={() => setIsOpen(false)}>
                    {navName[1]}
                </Link>
                <Link href={navLink[2]}  className="border-l pl-2 hover:border-blue-200 py-2 hover:font-medium" onClick={() => setIsOpen(false)}>
                    {navName[2]}
                </Link>
                <Link href={navLink[3]}  className="border-l pl-2 hover:border-blue-200 py-2 hover:font-medium" onClick={() => setIsOpen(false)}>
                    {navName[3]}
                </Link>
                <div className='flex gap-5 border-l pl-5'>
                    <Link href="#" className="p-2 rounded-full bg-red-100 hover:opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ef4444" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m6-2A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
                    </Link>
                    <Link href="#" className="p-2 rounded-full bg-red-100 hover:opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ef4444" d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.5 16h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5"/></svg>
                    </Link>
                    <Link href="#" className="p-2 rounded-full bg-red-100 hover:opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ef4444" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                    </Link>
                </div>
            </div>
            <div className="w-2/5 backdrop-blur-sm bg-white/30"></div>
        </div>
    );
}