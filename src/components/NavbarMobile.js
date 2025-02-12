import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarMobile({ navLink }) {
    const pathname = usePathname()
    return (
        <div className="z-50 fixed w-full bottom-0 py-3 px-5 flex justify-between items-center border-t bg-white">
            <Link href={navLink[0]}>
            {pathname === navLink[0] && pathname.startsWith(navLink[0])
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"/></svg>
            }
            </Link>
            <Link href={navLink[1]}>
            {pathname === navLink[1] || pathname.startsWith(navLink[1])
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M2 3h20v4H2zm17 5H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8zm-3 6H8v-2h8z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M20 3H4a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.72V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.72A2 2 0 0 0 22 7V5a2 2 0 0 0-2-2M4 5h16v2H4zm1 14V9h14v10z"/><path fill="#000" d="M8 11h8v2H8z"/></svg>
            }
                
            </Link>
            <Link href={navLink[2]}>
            {pathname === navLink[2] || pathname.startsWith(navLink[2])
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M18 4v3h3a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1m2 14a1 1 0 1 1-2 0V9h2zM6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-4"/><path d="M3 4h14v14a2 2 0 0 0 2 2v0M13 8H7m6 4H9"/></g></svg>
            }
            </Link>
            <Link href={navLink[3]}>
            {pathname === navLink[3] || pathname.startsWith(navLink[3])
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm1-4h6q.425 0 .713-.288T14 13t-.288-.712T13 12H7q-.425 0-.712.288T6 13t.288.713T7 14m0-3h10q.425 0 .713-.288T18 10t-.288-.712T17 9H7q-.425 0-.712.288T6 10t.288.713T7 11m0-3h10q.425 0 .713-.288T18 7t-.288-.712T17 6H7q-.425 0-.712.288T6 7t.288.713T7 8"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4zm3-2h6q.425 0 .713-.288T14 13t-.288-.712T13 12H7q-.425 0-.712.288T6 13t.288.713T7 14m0-3h10q.425 0 .713-.288T18 10t-.288-.712T17 9H7q-.425 0-.712.288T6 10t.288.713T7 11m0-3h10q.425 0 .713-.288T18 7t-.288-.712T17 6H7q-.425 0-.712.288T6 7t.288.713T7 8"/></svg>
            }
            </Link>
        </div>
    )
}